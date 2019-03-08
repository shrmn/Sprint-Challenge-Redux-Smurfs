import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchingSmurfs } from '../actions'
import Smurf from './Smurf';
// import SmurfForm from '../components/SmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchingSmurfs();
  };

  render() {
      return (
          <div>
              {this.props.smurfs.map((smurf, index) => (
                  <Smurf
                  key={index}
                  smurf={smurf}
                  />
              ))}
          </div>
      )
  }
}

const mapStateToProps = state => ({
smurfs: state.smurfs
});

export default connect(
mapStateToProps,
{ fetchingSmurfs }
)(App);