import React from 'react'
import classNames from 'classnames'
import { TextInput } from 'kitten/components/form/text-input'

export class TextInputWithUnit extends React.Component {
  render() {
    const { className,
            valid,
            error,
            type,
            unit,
            tiny,
            disabled,
            ...others } = this.props

    const textInputClassName = classNames(
      'k-TextInput k-TextInputWithUnit__input',
      className,
    )

    let unitClassName = classNames(
      'k-TextInputWithUnit__unit',
      {
        'k-TextInputWithUnit__unit--tiny': tiny,
        'is-valid': valid,
        'is-error': error,
        'is-inactive': disabled,
      },
    )

    return (
      <div className="k-TextInputWithUnit">
        <TextInput type={type}
                   className={ textInputClassName }
                   valid={ valid }
                   error={ error }
                   tiny={ tiny }
                   disabled={ disabled }
                   { ...others }
                   tag="input" />
        <span className={ unitClassName }>{ unit }</span>
      </div>
    )
  }
}

TextInputWithUnit.defaultProps = {
  unit: 'λ',
  type: 'number',
  placeholder: null,
  valid: false,
  error: false,
  tiny: false,
  disabled: false,
}