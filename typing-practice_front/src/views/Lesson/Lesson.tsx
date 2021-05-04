import React, { useEffect, useState } from 'react';
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

export const Lesson: React.FC = () => {
  const classes = useStyles();
  const { id } = useParams<{ id?: string }>();
  const [pressedKey, setPressedKey] = useState<string>('');
  const [step, setStep] = useState<number>(0);
  const [steps, setSteps] = useState<string[]>([]);
  const [result, setResult] = useState<IResult>({});

  useEffect(() => {
    const text =
      'It, is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).';
    const splitedText = text.split(' ');
    console.log('splitedText', splitedText);
    setSteps(splitedText);
  }, [id]);

  const onKeyPress = (e: React.KeyboardEvent) => {
    const { key } = e;
    setPressedKey(key);
    if (key === ' ') return setStep((step) => step + 1);
    return setResult((result) => ({
      ...result,
      [step]: (result[step] ?? '') + key
    }));
  };

  return (
    <div className="lesson">
      <Container component="main" maxWidth="md" className={classes.main}>
        <Typography variant="h2" component="h1" gutterBottom>
          Lesson title
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Lesson description.
        </Typography>
        <LessonStat signs={500} />
        <LessonText
          result={Object.values(result)}
          steps={steps.filter((_, i) => i >= step)}
          step={step}
        />
        <LessonInput onKeyPress={onKeyPress} />
        <Keyboard />
      </Container>
    </div>
  );
};
