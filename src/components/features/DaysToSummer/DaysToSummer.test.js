import React from 'react';
import { shallow } from 'enzyme';

import DaysToSummer from './DaysToSummer';

const select = {
  title: '.title',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });
  it('should render header', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.title)).toEqual(true);
  });
});

const trueDate = Date;
const mockDate = (customDate) => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkHeaderAtDate = (date, expectedTitle) => {
  it(`should show correct at ${date}`, () => {
    global.Date = mockDate(`${date}T00:00:00.000Z`);

    const component = shallow(<DaysToSummer />);
    const renderedDate = component.find(select.title).text();
    expect(renderedDate).toEqual(expectedTitle);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked Date', () => {
  checkHeaderAtDate('2020-05-20', '32 days to summer!');
  checkHeaderAtDate('2020-06-20', '1 day to summer!');
  checkHeaderAtDate('2020-06-21', '');
  checkHeaderAtDate('2020-09-23', '');
  checkHeaderAtDate('2020-09-24', '270 days to summer!');
});


