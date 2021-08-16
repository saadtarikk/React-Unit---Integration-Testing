import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should give sum on number enter', () => {
    const button1 = container.find('#number1');
    const plusButton = container.find('#operator_add')
    const button4 = container.find('#number4')
    const runningTotal = container.find('#running-total')
    const equals = container.find('#operator-equals')
    button1.simulate('click')
    plusButton.simulate('click')
    button4.simulate('click')
    equals.simulate('click')
    expect(runningTotal.text()).toEqual('5')
  })

  it('should subtract two number and get value', () => {
    const button4 = container.find('#number4');
    const minus = container.find("#operator-subtract")
    const button7 = container.find('#number7');
    const equals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button4.simulate('click')
    minus.simulate('click')
    button7.simulate('click')
    equals.simulate('click')
    expect(runningTotal.text()).toEqual('-3')
  })

  it('should be able to multiply two numbers', () => {
    const button3 = container.find('#number3');
    const multiply = container.find("#operator-multiply")
    const button5 = container.find('#number5');
    const equals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button3.simulate('click')
    multiply.simulate('click')
    button5.simulate('click')
    equals.simulate('click')
    expect(runningTotal.text()).toEqual('15')
  })

  it('should be able to divide two numbers and concatenate two numbers', () => {
    const button2 = container.find('#number2');
    const minus = container.find("#operator-subtract")
    const button1 = container.find('#number1');
    const plus = container.find('#operator_add')
    const button7 = container.find('#number7');
    const divide = container.find("#operator-divide")

    const equals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button2.simulate('click')
    minus.simulate('click')
    button1.simulate('click')
    plus.simulate('click')
    button7.simulate('click')
    divide.simulate('click')
    button2.simulate('click')
    equals.simulate('click')
    expect(runningTotal.text()).toEqual('4')
  })

  it('should chain multiple operator clicks', () => {
    const button2 = container.find('#number2');
    const minus = container.find('#operator-subtract')
    const button1 = container.find('#number1');
    const plus = container.find("#operator_add")
    const button7 = container.find('#number7');
    const multiply = container.find("#operator-multiply")
    const equals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button2.simulate('click')
    minus.simulate('click')
    button1.simulate('click')
    plus.simulate('click')
    button7.simulate('click')
    multiply.simulate('click')
    button2.simulate('click')
    equals.simulate('click')
    expect(runningTotal.text()).toEqual('16')
  })

  it('should clear runningTotal without affecting numbers', () => {
    const button2 = container.find('#number2');
    const plus = container.find("#operator_add")
    const button7 = container.find('#number7');
    const clear = container.find('#clear')
    const equals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total')
    button2.simulate('click')
    plus.simulate('click')
    button7.simulate('click')
    clear.simulate('click')
    equals.simulate('click')
    expect(runningTotal.text()).toEqual('2')


  })



})
