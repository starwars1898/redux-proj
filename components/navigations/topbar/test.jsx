import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const test = (props) => {
  return (
    <div>test</div>
  )
}

test.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(test)