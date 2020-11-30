/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState, useContext } from 'react';

import { Workout } from '@exo-gymondo/types';

const initialState = {} as Workout;

const workoutContext = createContext({
  workout: initialState,
  onWorkoutSet: (args: Workout) => {},
});

const { Provider } = workoutContext;

interface Props {
  children: JSX.Element;
}

/**
 * WorkoutProvider
 *
 * Provide global workout data which can be used and update anywhere in the app
 *
 * @param {jsx} children - take a react component as a children and hydrate it with context
 *
 * @return {jsx}
 */
const WorkoutProvider: React.FC<Props> = ({ children }) => {
  const [workout, setWorkout] = useState(initialState);

  const onWorkoutSet = (workout: Workout) => {
    setWorkout(workout);
  };

  return <Provider value={{ workout, onWorkoutSet }}>{children}</Provider>;
};

const useWorkoutContext = () => {
  const context = useContext(workoutContext);
  return context;
};

export { useWorkoutContext, WorkoutProvider };
