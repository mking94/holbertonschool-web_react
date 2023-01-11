import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders App-header', () => {
  expect(wrapper.find('header.App-header').exists()).toEqual(true);
});
it('renders App-body', () => {
  expect(wrapper.find('main.App-body').exists()).toEqual(true);
});
it('renders App-footer', () => {
  expect(wrapper.find('footer.App-footer').exists()).toEqual(true);
});