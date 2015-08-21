export default {
  getProjects() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([{id: 1, name: 'Project 1', description: 'Project description 1'},
                 {id: 2, name: 'Project 2', description: 'Project description 2'}].map((projects) => {
          return projects;
        }));
      }, 500);
    });
  }
};
