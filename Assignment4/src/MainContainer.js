import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Sidebar from './Sidebar.js';

class MainContainer extends Component {
    render() {
        return (
            <div>
                <Navbar title="WEB422 - Assignment 4" />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar highlight={this.props.isActive} />
                        <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;