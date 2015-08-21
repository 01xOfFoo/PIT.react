import AppDispatcher from '../dispatcher/AppDispatcher';
import WebAPI from '../utils/WebAPI';
import ProjectConstants from '../constants/ProjectConstants';

class ProjectActions {

  getProjects() {
    WebAPI.getProjects()
    .then((projects) => {
      AppDispatcher.dispatch({
        actionType: ProjectConstants.PROJECTS_GET_SUCCESS,
        projects: projects
      });
    })
    .catch(() => {

    });
  }

  removeProject(project) {
    AppDispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_DELETE,
      project: project
    });
  }
}

export default new ProjectActions();
