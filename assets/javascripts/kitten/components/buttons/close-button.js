import React from 'react'
import classNames from 'classnames'
import { CrossIcon } from 'kitten/components/icons/cross-icon'

export class CloseButton extends React.Component {
  render() {
    const { className, closeButtonLabel, modifier, ...others } = this.props

    const buttonClassName = classNames(
      'k-ButtonIcon',
      'k-ButtonIcon--cross',
      className,
      { [`k-ButtonIcon--${modifier}`]: modifier },
    )

    return (
      <button className={ buttonClassName }
              title={ closeButtonLabel }
              aria-label={ closeButtonLabel }
              { ...others }>
        <CrossIcon className="k-ButtonIcon__svg k-ButtonIcon__svgRotate" />
      </button>
    )
  }
}

CloseButton.defaultProps = {
  closeButtonLabel: "Close",
  modifier: "hydrogen",
}
