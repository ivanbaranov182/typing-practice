import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router';
import Typography from '@material-ui/core/Typography';
import { loadLesson } from 'src/redux/actions/actionCreators/lessonActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'src/redux/reducers';
import { InlineLoader } from 'src/components/InlineLoader';
import { Keyboard } from '../../components/Keyboard';
import { LessonStat } from '../../components/Lesson/LessonStat';
import { LessonInput } from '../../components/Lesson/LessonInput';
import { LessonText } from '../../components/Lesson/LessonText';
import { Step, StepStatuses } from './types';

// TODO split lesson into steps

export const Lesson: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id?: string }>();

  const loading = useSelector((state: AppState) => state.lesson.loading);
  const lesson = useSelector((state: AppState) => state.lesson.data);

  const [step, setStep] = useState<{ value: number; result: string }>({
    value: 0,
    result: ''
  });
  const [steps, setSteps] = useState<{
    [key: number]: Step;
  }>({});
  const [pressedKey, setPressedKey] = useState<string>('');
  const [time, setTime] = useState<number>(0);
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!id) return;
    dispatch(loadLesson(id));
  }, [id]);

  useEffect(() => {
    if (!lesson) return;
    const splitedText = {
      ...lesson.text
        .split(' ')
        .map((i) => ({ value: i, status: StepStatuses.NOT_RESOLVE }))
    };
    setSteps(splitedText);
  }, [lesson]);

  const handleSpacePress = () => {
    setSteps((steps) => ({
      ...steps,
      [step.value]: {
        ...steps[step.value],
        status:
          steps[step.value].value === step.result
            ? StepStatuses.COMPLETE
            : StepStatuses.ERROR
      }
    }));
  };

  const getStepValue = (key: string, value: number): number => {
    switch (key) {
      case ' ':
      case 'Enter':
        return value + 1;
      default:
        return value;
    }
  };

  const getResultValue = (key: string, result: string): string => {
    switch (key) {
      case ' ':
      case 'Enter':
        return '';
      case 'Backspace':
        return result.slice(0, -1);
      default:
        return result + key;
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const { key } = e;
    setPressedKey(key);
    if (key === ' ') handleSpacePress();
    if (key === 'Shift') return;
    setStep((step) => ({
      value: getStepValue(key, step.value),
      result: getResultValue(key, step.result)
    }));
  };

  const signs: number = useMemo(
    () =>
      Object.values(steps)
        .map((step) => step.value)
        .join(' ').length,
    [steps]
  );

  const errors: number = useMemo(
    () =>
      Object.values(steps).filter((step) => step.status === StepStatuses.ERROR)
        .length,
    [step.value]
  );

  const typed: number = useMemo(
    () =>
      Object.values(steps)
        .filter((step) => step.status === StepStatuses.ERROR)
        .map((step) => step.value)
        .join(' ').length,
    [step.value]
  );

  const progress: number = useMemo(
    () => Number((typed / signs).toFixed(2)) || 0,
    [step.value]
  );

  useEffect(() => {
    if (progress === 1) {
      setReady(true);
    }
  }, [progress]);

  if (loading) <InlineLoader />;

  return (
    <div className="lesson">
      <Typography variant="h2" component="h1" gutterBottom>
        {lesson?.name}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Lesson description...
      </Typography>
      <LessonStat
        signs={signs}
        typed={typed}
        progress={progress}
        wpm={0}
        errors={errors}
        accuracy={0}
        time={time}
      />
      <LessonText steps={Object.values(steps)} />
      {!ready ? (
        <>
          <LessonInput onKeyDown={onKeyDown} />
          <Keyboard pressedKey={pressedKey} />
        </>
      ) : (
        ''
      )}
    </div>
  );
};
