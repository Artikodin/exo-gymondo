import React from 'react';
import { Workout } from '@exo-gymondo/types';

import { StyledList, ListItem, StyledLink, Time, Title, Tag } from './style';
import { useWorkoutContext } from '../../context';
import { convertISOToString, convertISOToISODate } from '../../utils/date';

interface Props {
  workouts: Workout[];
}

/**
 *
 * List
 * Render a list of workouts. Each item is clickable and redirect to the Detail Page.
 *
 * @param {Workout[]} workouts - an array of workout. Each workout is defined by a name,
 * a start date, a description and a category.
 *
 * @return {jsx}
 *
 */
const List: React.FC<Props> = ({ workouts }) => {
  const { onWorkoutSet } = useWorkoutContext();

  const handleClick = (selectedName: string) => {
    const selectedworkout = workouts.find(({ name }) => name === selectedName);
    onWorkoutSet(selectedworkout);
  };

  return (
    <StyledList>
      {workouts.map(({ name, startDate, category }) => (
        <ListItem key={name}>
          <StyledLink to={name} onClick={() => handleClick(name)}>
            <div>
              <Title>{name}</Title>
              <Time dateTime={convertISOToISODate(startDate)}>
                {convertISOToString(startDate)}
              </Time>
            </div>
            <Tag value={category}>{category}</Tag>
          </StyledLink>
        </ListItem>
      ))}
    </StyledList>
  );
};

export default List;
