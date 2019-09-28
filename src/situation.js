import React from 'react';
import PropTypes from 'prop-types'

export const Situation = props => <span>Situation: {props.appearance}</span>

export const appearances = {
  primary: 'primaryyy',
  stroke: 'strokeyy',
  flat: 'flatyy'
}

Situation.propTypes = {
  // appearance: PropTypes.oneOf(['primary', 'stroke', 'flat'])
  appearance: PropTypes.oneOf(Object.keys(appearances))
}

Situation.appearances = appearances

// export default Situation
