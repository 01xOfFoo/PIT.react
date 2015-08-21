import React from 'react';
import ProjectItem from './ProjectItem';
import {Link, RouteHandler} from 'react-router';
import Logger from '../../utils/Logger';

export default class ProjectList extends React.Component {

  render() {
    Logger.log("ProjectList.render()", this.props.projects);
    var projectItems = this.props.projects.map(function(project) {
      var id = project.id;
      return (
        <tr key={project.id}>
          <td><Link to="ProjectDetails" params={{projectId: id}}>{project.name}</Link></td>
          <td>{project.description}</td>
        </tr>);
    });

    return (
      <table className="table table-hover table-condensed">
        <thead>
          <tr>
            <th className="col-sm-2">Name</th>
            <th className="col-sm-3">Description</th>
          </tr>
        </thead>
        <tbody>
          {projectItems}
        </tbody>
      </table>
    );
  }
}
