import AppDispatcher    from '../dispatcher/AppDispatcher';
import ProjectConstants from '../constants/ProjectConstants';
import BaseStore        from './BaseStore';
import Logger           from '../utils/Logger';

 class ProjectStore extends BaseStore {

   constructor() {
     super();
   }

    get(id) {
      var projects = super.getAll();
      Logger.log('ProjectStore.get()', id, projects);

      return projects.filter((project) => {
        if (project.id == id) {
          return project;
        }
      })[0];
    }

  emitChange() {
    this.emit(ProjectConstants.PROJECTS_UPDATED);
  }

  addChangeListener(callback) {
    this.on(ProjectConstants.PROJECTS_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(ProjectConstants.PROJECTS_UPDATED, callback);
  }

}

let store = new ProjectStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case ProjectConstants.PROJECTS_GET_SUCCESS:
      console.log('ProjectStore.DispatchEvent.PROJECT_GET_SUCCESS', action.projects);
      store.setAll(action.projects);
      break;
    default:
  }
});

export default store;
