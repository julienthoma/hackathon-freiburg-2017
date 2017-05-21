import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="container">
      <Header />
          {this.props.children}
      <Footer />
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
