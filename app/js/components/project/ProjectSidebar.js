import React from 'react';

export default class ProjectSidebar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-default sidebar" role="navigation">
          <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home<span style="font-size:16px;" className="pull-right hidden-xs showopacity glyphicon glyphicon-home"></span></a></li>
              <li ><a href="#">Libros<span style="font-size:16px;" className="pull-right hidden-xs showopacity glyphicon glyphicon-th-list"></span></a></li>
              <li ><a href="#">Tags<span style="font-size:16px;" className="pull-right hidden-xs showopacity glyphicon glyphicon-tags"></span></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}
