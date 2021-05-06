import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Keyboard } from '../../components/Keyboard';
import { LessonStat } from '../../components/Lesson/LessonStat';
import { LessonInput } from '../../components/Lesson/LessonInput';
import { LessonText } from '../../components/Lesson/LessonText';

const useStyles = makeStyles((theme) => ({
  main: {
    marginBottom: '40px'
  }
}));

export interface IResult {
  [key: number]: string;
}

export enum StepStatuses {
  COMPLETE = 'complete',
  ERROR = 'error',
  NOT_RESOLVE = 'not_resolve'
}

type Step = {
  value: string;
  status: StepStatuses;
};

export const Lesson: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id?: string }>();
  const [step, setStep] = useState<{ value: number; result: string }>({
    value: 0,
    result: ''
  });
  const [steps, setSteps] = useState<{
    [key: number]: Step;
  }>({});
  const [pressedKey, setPressedKey] = useState<string>('');
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text =
      'It, is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';
    const splitedText = {
      ...text
        .split(' ')
        .map((i) => ({ value: i, status: StepStatuses.NOT_RESOLVE }))
    };
    setSteps(splitedText);
  }, [id]);

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

  return (
    <div className="lesson">
      <Container component="main" maxWidth="md" className={classes.main}>
        <Typography variant="h2" component="h1" gutterBottom>
          Lesson title
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Lesson description.
        </Typography>
        {JSON.stringify(step)} - {signs}
        <LessonStat
          time={time}
          signs={signs}
          typed={0}
          progress={0}
          wpm={0}
          errors={errors}
          accuracy={0}
        />
        <LessonText steps={Object.values(steps)} />
        <LessonInput onKeyDown={onKeyDown} />
        <Keyboard pressedKey={pressedKey} />
      </Container>
    </div>
  );
};
