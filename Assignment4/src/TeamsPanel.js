import  React,{ Component } from 'react';

class TeamsPanel extends Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.dataSource;
        this.state = {
            teams: [],
        }
    }

    componentDidMount() {
        fetch(this.dataSource)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    teams: data
                });
            }).catch(err => {
                console.log("error");
            });
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Teams</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                            <tbody>
                                {this.state.teams.map((team, index) => {
                                    return (
                                        <tr>
                                            <td>{team.TeamName}</td>
                                            <td>{team.Employees.length} members</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <a href="/teams" className="btn btn-primary form-control">View All Project Data</a>
                </div>
            </div>
        );
    }
}


export default TeamsPanel;