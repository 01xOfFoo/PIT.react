import React          from 'react/addons';
import ProjectStore   from '../../stores/ProjectStore';
import ProjectList    from '../../components/project/ProjectList';
import ProjectActions from '../../actions/ProjectActions';
import Logger         from '../../utils/Logger';

export default class ProjectsPage extends React.Component {

  getProjectsState() {
    let projects = ProjectStore.getAll();

    Logger.log('ProjectsPage.getProjectsState()', projects);
    return {
      projects: projects
    };
  }

  constructor(props) {
    super(props);

    Logger.log('ProjectsPage.constructor()');
    this.state = this.getProjectsState();
  }

  componentDidMount() {
    Logger.log('ProjectsPage.componentDidMount()');
    ProjectStore.addChangeListener(this.onChange);
    ProjectActions.getProjects();
  }

  componentWillUnmount() {
    Logger.log('ProjectsPage.componentWillUnmount()');
    ProjectStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    Logger.log('ProjectsPage.onChange()');
    this.setState(this.getProjectsState());
  }

  render() {
    Logger.log('ProjectsPage.render()');
    return (
      <div>
        <div className="projectsdivtop clearfix">
          <button type="button" disabled="true" className="btn btn-primary btn-sm pull-right">New Project (coming soon)</button>
        </div>
        <ProjectList projects={this.state.projects}/>
      </div>
    );
  }

}
