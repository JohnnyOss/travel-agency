import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {

  it('should render correct link', () => {
    const exceptedLink = '/trip/abc';
    const component = shallow(<TripSummary id='abc' image='' name='' cost='' days={1} tags={[]} />);
    const renderedLink = component.find('.link').prop('to');
    expect(renderedLink).toEqual(exceptedLink);
  });

  it('should render correct sr and alt for img', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary id='' cost='' days={1} tags={[]} image={expectedImage} name={expectedAlt} />);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct props name, cost and days', () => {
    const expectedCost = '1000';
    const expectedName = 'name';
    const expectedDays = 3;
    const component = shallow(<TripSummary id='' image='' tags={[]} days={expectedDays} name={expectedName} cost={expectedCost}/>);

    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags in the correct order', () => {
    const tags = ['1', '2', '3'];
    const component = shallow(<TripSummary tags={tags} />);

    expect(component.find('.tags span').at(0).text()).toEqual(tags[0]);
    expect(component.find('.tags span').at(1).text()).toEqual(tags[1]);
    expect(component.find('.tags span').at(2).text()).toEqual(tags[2]);
  });

  it('does not render tags if props tags is false', () => {
    const component = shallow(<TripSummary tags={[]} />);

    expect(component.hasClass('tags')).toBe(false);
  });
});
