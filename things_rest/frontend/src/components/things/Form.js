import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addThing } from '../../actions/things';

export class Form extends Component {
    state = {
        name: '',
        cost: '',
        note: '',
        user: '',
        bought_at: '2020-06-25 18:57:32',
        bought_on: '',
    };

    static propTypes = {
        addThing: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { name, cost, note, user, bought_at, bought_on } = this.state;
        const thing = { name, cost, note, user, bought_at, bought_on };
        this.props.addThing(thing);
        this.setState({
            name: '',
            cost: '',
            note: '',
            user: '',
            bought_at: '',
            bought_on: '',
        });
    };

    render() {
        const { name, cost, note, user, bought_at, bought_on } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Thing</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>cost</label>
                        <input
                            className="form-control"
                            type="integer"
                            name="cost"
                            onChange={this.onChange}
                            value={cost}
                        />
                    </div>
                    <div className="form-group">
                        <label>note</label>
                        <textarea
                            className="form-control"
                            type="text"
                            name="note"
                            onChange={this.onChange}
                            value={note}
                        />
                    </div>
                    <div className="form-group">
                        <label>user</label>
                        <input
                            className="form-control"
                            type="text"
                            name="user"
                            onChange={this.onChange}
                            value={user}
                        />
                    </div>
                    <div className="form-group">
                        <label>bought at</label>
                        <input
                            className="form-control"
                            type="text"
                            name="bought_at"
                            onChange={this.onChange}
                            value={bought_at}
                        />
                    </div>
                    <div className="form-group">
                        <label>bought on</label>
                        <input
                            className="form-control"
                            type="text"
                            name="bought_on"
                            onChange={this.onChange}
                            value={bought_on}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { addThing })(Form);