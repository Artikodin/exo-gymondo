import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';

import { useWorkoutContext } from '../../context';
import { convertISOToString, convertISOToISODate } from '../../utils/date';

import {
  Container,
  Tag,
  Time,
  Title,
  SubTitle,
  Paragraph,
  Wrapper,
} from './style';

const DetailPage = () => {
  const { workout, onWorkoutSet } = useWorkoutContext();
  const history = useHistory();
  const { workoutId }: { workoutId: string } = useParams();

  const hasWorkout = Object.keys(workout).length !== 0;

  useEffect(() => {
    if (!hasWorkout)
      fetch('/api/workout', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: workoutId }),
      })
        .then((_) => _.json())
        .then(([v]) => onWorkoutSet(v));
  }, [hasWorkout, workoutId, onWorkoutSet]);

  const handleClick = () => {
    history.goBack();
  };

  const { name, startDate, description, category } = workout;

  return (
    <Wrapper>
      <Button onClick={handleClick} variant="contained" color="secondary">
        Go to list
      </Button>
      <Container>
        <Title>{name}</Title>
        <Time dateTime={convertISOToISODate(startDate)}>
          {convertISOToString(startDate)}
        </Time>
        <SubTitle>Descritpion:</SubTitle>
        <Paragraph>{description}</Paragraph>
        <Tag value={category}>{category}</Tag>
      </Container>
    </Wrapper>
  );
};

export default DetailPage;
