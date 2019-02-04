import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <span className="navbar-brand">{this.props.title}</span>
                    </div>
                </div>
            </nav> 
        );
    }
}

export default Navbar;