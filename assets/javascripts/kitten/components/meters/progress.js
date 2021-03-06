import React, { Component } from 'react'
import classNames from 'classnames'

export class Progress extends Component {
  render() {
    const {
      className,
      color,
      value,
      ...others,
    } = this.props

    const progressClassName = classNames(
      'k-Progress',
      className,
    )

    const style = {
      backgroundColor: `${color}`,
      width: `${value}%`,
    }

    return (
      <div
        { ...others }
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={ this.props.value }
        className={ progressClassName }>
        <div className="k-Progress__ramp">
          <div
            className="k-Progress__slider"
            style={ style }
          />
        </div>
      </div>
    )
  }
}

Progress.defaultProps = {
  className: null,
  color: null,
  value: 50,
}
