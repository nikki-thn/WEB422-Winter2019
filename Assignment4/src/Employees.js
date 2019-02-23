import React, { Component } from 'react';
import moment from 'moment';
import MainContainer from './MainContainer';

class Employees extends Component {
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
            <MainContainer isActive="Employees">
                <h1 className="page-header">Employees</h1>
                <div className="table-responsive overview-table">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee Name &amp; position</th>
                                <th>Address</th>
                                <th>Phone Number</th>
                                <th>Hire Date</th>
                                <th>Salary Bonuxs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((emp, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{emp.FirstName} {emp.LastName} - {emp.Position.PositionName}</td>
                                        <td>{emp.AddresStreet} {emp.AddressState} {emp.City} {emp.AddressZip}</td>
                                        <td>{emp.PhoneNum}</td>
                                        <td>{moment(emp.HireDate).format('LL')}</td>
                                        <td>$ {emp.SalaryBonus}</td>
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


export default Employees;