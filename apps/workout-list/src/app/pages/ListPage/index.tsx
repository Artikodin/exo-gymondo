import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { List, TopBar, Pagination } from '../../components';
import { convertMonthStringToMongoFormat } from '../../utils/date';
import { Workout, Category } from '@exo-gymondo/types';

/**
 *
 * ListPage
 * Display a list of workout. It can be filtered and updated by navigate through pages.
 *
 * @return {jsx}
 *
 */
const ListPage = () => {
  const [totalWorkouts, setTotalWorkouts] = useState(0);
  const [month, setMonths] = useState('');
  const [categories, setCategories] = useState<Category[] | []>([]);
  const [workouts, setWorkouts] = useState<Workout[] | []>([]);

  const { pageId }: { pageId: string } = useParams();
  const currentPage: number = +pageId;

  useEffect(() => {
    fetch('/api/workouts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page: pageId,
        categories,
        month: month !== '' ? convertMonthStringToMongoFormat(month) : '',
      }),
    })
      .then((_) => _.json())
      .then(setWorkouts);

    fetch('/api/count', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        categories,
        month: month !== '' ? convertMonthStringToMongoFormat(month) : '',
      }),
    })
      .then((_) => _.json())
      .then(setTotalWorkouts);
  }, [pageId, categories, month]);

  const hasWorkouts = totalWorkouts > 20;

  return (
    <>
      <TopBar onCategoryChange={setCategories} onMonthChange={setMonths} />
      <List workouts={workouts} />
      {hasWorkouts && (
        <Pagination totalWorkouts={totalWorkouts} currentPage={currentPage} />
      )}
    </>
  );
};
export default ListPage;
