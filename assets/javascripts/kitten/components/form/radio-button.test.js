import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { RadioButton } from 'kitten/components/form/radio-button'

describe('RadioButton with default props', () => {
  const defaultComponent = shallow(
    <RadioButton />)

  it('renders <div class="k-RadioButton">', () => {
    expect(defaultComponent.find('.k-RadioButton')).to.have.length(1)
  })

  it('has a default label attributes', () => {
    const label = defaultComponent.find('label')

    expect(label).not.to.have.attr('large')
    expect(label).to.have.text('Default')
  })

  it('renders <div> without large content', () => {
    expect(defaultComponent).not.to.have.attr('largeContent')
  })


  describe('<RadioButton />', () => {
    const component = shallow(
      <RadioButton id="karl-radio-button-1"
                   content=" "
                   large="false"
                   largeContent="false" />
    )

    it('renders a <div class="k-RadioButton" />', () => {
      expect(component).to.have.tagName('div')
      expect(component).to.have.className('k-RadioButton')
    })

    it('renders input with passed props', () => {
      const input = component.find('input')

      expect(input).to.have.attr('id', 'karl-radio-button-1')
      expect(input).to.have.attr('type', 'radio')
      expect(input).to.have.className('k-RadioButton__input')
    })

    it('renders label', () => {
      const label = component.find('label')

      expect(label).to.have.attr('for', 'karl-radio-button-1')
      expect(label).to.have.className('k-RadioButton__label')
      expect(label).to.have.text('Default')
    })

    describe('large', () => {
      const componentLarge = shallow(
        <RadioButton large="true" />
      )

      it('has a large class', () => {
        const label = componentLarge.find('label')

        expect(label).to.have.className("k-RadioButton__label--large")
      })
    })

    describe('with content', () => {
      const componentWithContent = shallow(
        <RadioButton content="Harum trium …"
                     largeContent="true" />
      )

      it('has a content class', () => {
        const content = componentWithContent.find('.k-RadioButton__labelContents')

        expect(content).to.have.text("Harum trium …")
        expect(content).to.have.className("k-RadioButton__labelContents--large")
      })
    })
  })
})