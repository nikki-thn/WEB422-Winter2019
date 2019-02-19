import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2  sidebar">
                <ul className="nav nav-sidebar">
                    <li className="active"><a href="/">Overview <span className="sr-only">(current)</span></a></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/teams">Teams</a></li>
                    <li><a href="/employees">Employees</a></li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;