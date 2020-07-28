import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getThings, deleteThing } from '../../actions/things'


export class Things extends Component {
    static propTypes = {
        things: PropTypes.array.isRequired,
        getThings: PropTypes.func.isRequired,
        deleteThing: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getThings()
    }

    render() {
        return (
            <Fragment>
                <h2> things </h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>User</th>
                            <th>Note</th>
                            <th>Bought at</th>
                            <th>Bought on</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.things.map(thing => (
                            <tr key={thing.id}>
                                <td>{thing.id}</td>
                                <td>{thing.name}</td>
                                <td>{thing.cost}</td>
                                <td>{thing.user_details.username}</td>
                                <td>{thing.note}</td>
                                <td>{thing.bought_at}</td>
                                <td>{thing.bought_on_details.name}</td>
                                <td>
                                    <button
                                        onClick={this.props.deleteThing.bind(this, thing.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    things: state.things.things
})

export default connect(mapStateToProps, { getThings, deleteThing })(Things)
