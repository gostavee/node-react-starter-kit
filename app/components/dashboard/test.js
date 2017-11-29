/**
* Required modules
*/
import React from 'react';
import Dashboard from './index';
import renderer from 'react-test-renderer';
/**
* Running the tests
*/
test('It should show: "this is dashboard" ', () => {
  const component = renderer.create(
    <Dashboard/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(component.getInstance().testMe()).toBe("this is dashboard");
});
