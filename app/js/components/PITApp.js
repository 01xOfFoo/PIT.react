import React from 'react';
import ProjectList from './Project/ProjectList';
import ProjectStore from '../stores/ProjectStore';

function getProjectState() {
  return {
    allProjects: ProjectStore.getAll()
  };
}

export default class PITApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = getProjectState();
  }

  componentDidMount() {
    ProjectStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ProjectStore.removeChangeListener(this._onChange);
  }

  render() {
    return (

    );
  }

  _onChange() {
    this.setState(getProjectState());
  }

}
