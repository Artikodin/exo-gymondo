import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { Layout } from './components';
import { theme } from './utils/theme';
import { ListPage, DetailPage } from './pages';
import { WorkoutProvider } from './context';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <WorkoutProvider>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/">
                <Redirect to="/1" />
              </Route>
              <Route path="/:pageId([\d]+)">
                <ListPage />
              </Route>
              <Route path="/:workoutId(workout[\d]+)">
                <DetailPage />
              </Route>
              <Route path="*">
                <div>Not found</div>
              </Route>
            </Switch>
          </Layout>
        </Router>
      </WorkoutProvider>
    </ThemeProvider>
  );
}

export default App;
