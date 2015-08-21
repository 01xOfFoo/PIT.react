import React  from 'react/addons';
import Router from 'react-router';

import routes from './Routes';

// Enable React devtools
window.React = React;

Router.run(routes, Router.HistoryLocation, (Handler, state) => {
  React.render(<Handler {...state} />, document.getElementById('app'));
});
