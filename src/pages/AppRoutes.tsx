import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

const Routes: React.FC = () => {

  return (
    <Switch>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Route path="/" exact><Home /></Route>
        <Route path="/about" exact><About /></Route>
      </Suspense>
    </Switch>
  );
}

export default Routes;