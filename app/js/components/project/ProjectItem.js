import React  from 'react';
import {Link} from 'react-router';

export default class ProjectItem extends React.Component {

  render() {
    var {project} = this.props.project;

    return (
      <tr>
        <td>{this.props.project.id}</td>
        <td><Link to="ProjectDetails" params={{projectId: this.props.project.Id}}>{this.props.project.name}</Link></td>
        <td>{this.props.project.description}</td>
      </tr>
    );
  }
}
