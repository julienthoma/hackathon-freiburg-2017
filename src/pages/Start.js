import React from 'react';
import { connect } from 'react-redux';

const Start = ({ }) => {
  return <div>Startpage</div>;
};

Start.propTypes = {};

const mapStateToProps = state => ({
});

const _Start = connect(mapStateToProps)(Start);

export default _Start;
