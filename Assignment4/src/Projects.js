import React, { Component } from 'react';
import moment from 'moment';
import MainContainer from './MainContainer';
import {Link} from 'react-router-dom';

class Projects extends Component {
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
            <MainContainer isActive="Projects">
                <h1 className="page-header">Projects</h1>
                <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Project Id</th>
                                <th>Description</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.projects.map((project, index) => {
                                let activeDate = moment().diff(moment(project.ProjectStartDate), 'days');
                                return (
                                    <tr>
                                        <td>{project.ProjectName}</td>
                                        <td>{project.ProjectDescription}</td>
                                        <td>{moment(project.ProjectStartDate).format('LL')}</td>
                                        <td>{moment(project.ProjectEndDate).format('LL')}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </MainContainer>
        );
    }
}

export default Projects;