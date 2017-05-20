import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
          {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired
};

const mapStateToProps = state => ({
});

const _App = connect(mapStateToProps)(App);

export default _App;
