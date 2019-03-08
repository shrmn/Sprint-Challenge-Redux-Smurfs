import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addingSmurf } from '../actions';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitHandler = e => {
        e.preventDefault();
        this.props.addingSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        });
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <h2>Add Smurf</h2>
                <form onSubmit={this.submitHandler}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.changeHandler}
                        required
                    />
                    <input
                        type='text'
                        name='age'
                        placeholder='Age'
                        value={this.state.age}
                        onChange={this.changeHandler}
                        required
                    />
                    <input
                        type='text'
                        name='height'
                        placeholder='Height'
                        value={this.state.height}
                        onChange={this.changeHandler}
                        required
                    />
                    <button>Add Smurf</button>
                </form>
            </div>
        )
    }
}

export default connect(
    null,
    { addingSmurf }
)(SmurfForm);