import React                                from 'react/addons';
import {Route, NotFoundRoute, DefaultRoute} from 'react-router';

import App                                  from './App';
import HomePage                             from './pages/HomePage';

import ProjectsPage                         from './pages/project/ProjectsPage';
import ProjectDetails                       from './pages/project/ProjectDetails';
import NotFoundPage                         from './pages/NotFoundPage';

export default (
  <Route handler={App} path='/'>

    <DefaultRoute handler={HomePage} />

    <Route name='Home' path='/' handler={HomePage} />

    <Route name='Projects' path='/projects' handler={ProjectsPage} />
    <Route name='ProjectDetails' path='/projects/project/:projectId' handler={ProjectDetails} />

    <NotFoundRoute handler={NotFoundPage} />

  </Route>
);
