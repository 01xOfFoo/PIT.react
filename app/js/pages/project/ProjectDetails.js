import React          from 'react';
import Router, {Link} from 'react-router';
import { Navigation } from 'react-router';
import ProjectStore   from '../../stores/ProjectStore';
import Logger         from '../../utils/Logger';

export default class ProjectDetails extends React.Component {

  Mixins: [Navigation];

  getProjectState(id) {
    Logger.log('ProjectDetails.getProjectState()', id);

    return {
      project: ProjectStore.get(this.props.params.projectId)
    };
  }

  constructor(props) {
    super(props);

    Logger.log('ProjectDetails.constructor()', props);
    this.state = this.getProjectState();
    this.saveProject = this.saveProject.bind(this);
  }

  saveProject(e) {
    e.preventDefault();

    Logger.log('ProjectDetails.saveProject()', this.state.project);
    if (this.state.project.id !== 0)
    {
      Logger.log('ProjectDetails.saveProject().setState()')
      this.setState(this.getProjectState());
      this.transitionTo('ProjectDetails', {projectId: this.state.project.id});
    }
    else {
      ProjectStore.add({
        id: this.state.project.id,
        name: findDOMNode(this.refs.name).value,
        description: findDOMNode(this.ref.description).value
      }, (project) => {
        this.transitionTo('ProjectDetails', {projectId: this.state.project.id}, null);
      });
    }
  }

  render() {
    var project = this.state.project;
    Logger.log('ProjectDetails.render()', project);

    return (
      <form onSubmit={this.saveProject}>
        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input type="text" className="form-control" id="inputName" ref="name" placeholder="Name" defaultValue={this.state.project.name} />
        </div>
        <div className="form-group">
          <label htmlFor="inputDescription">Description</label>
          <input type="text" className="form-control" id="inputDescription" ref="description" placeholder="Description" defaultValue={this.state.project.description} />
        </div>
        <button type="submit" disabled="true" className="btn btn-primary btn-sm">Save (coming soon)</button>
        <Link to="Projects">Cancel</Link>
      </form>
    );
  }

}
