'use strict';

import React              from 'react/addons';
import {ListenerMixin}    from 'reflux';
import {RouteHandler}     from 'react-router';
import Header             from './components/Header';

export default class App extends React.Component {

  constructor() {
    super();
    this.mixins = [ListenerMixin];
  }

  render() {
    return (
      <div>
        <Header />
        <RouteHandler params={this.props.params}
                      query={this.props.query} />
      </div>
    );
  }

}
