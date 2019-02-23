import React, { Component } from 'react';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom';

class ProjectsPanel extends Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            projects: [],
        }
    }

    componentDidMount() {
        fetch(this.dataSource)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    projects: data
                });
            }).catch(err => {
                console.log("error");
            });
    }
    
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Projects</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.projects.map((project, index) => {
                                    let activeDate = moment().diff(moment(project.ProjectStartDate), 'days'); 
                                    return (
                                        <tr>
                                            <td>{project.ProjectName}</td>
                                            <td>Active {activeDate} days</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <a href="/projects" className="btn btn-primary form-control">View All Project Data</a>
                </div>
            </div>
        );
    }
}


export default ProjectsPanel;