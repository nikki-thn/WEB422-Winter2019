import React, { Component } from 'react';

class EmployeesPanel extends Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            employees: [],
        }
    }

    componentDidMount() {
        fetch(this.dataSource)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    employees: data
                });
            }).catch(err => {
                console.log("error");
            });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Employees</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.employees.map((emp, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{emp.FirstName} {emp.LastName}</td>
                                            <td>{emp.Position.PositionName}</td>
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


export default EmployeesPanel;