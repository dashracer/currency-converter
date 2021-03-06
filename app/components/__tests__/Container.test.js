import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';
import { Container, styles } from '../Container';

it('renders successfully', () => {
  const rendered = renderer.create(<Container />).toJSON();
  expect(rendered).toBeTruthy();
});

it('styles is an object', () => {
  expect(typeof styles).toBe('object');
});

it('render the child prop', () => {
  const rendered = renderer
    .create(<Container>
      <View />
            </Container>)
    .toJSON();
  expect(rendered).toMatchSnapshot();
});

it('uses the specified backgroundColor, if provided', () => {
  const rendered = renderer.create(<Container backgroundColor="red" />).toJSON();
  expect(rendered).toMatchSnapshot();
});
