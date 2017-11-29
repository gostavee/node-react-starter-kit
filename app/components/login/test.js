/**
* Required modules
*/
import React from 'react';
import Login from './index';
import renderer from 'react-test-renderer';
/**
* Running the tests
*/
test('It should show: "this is login" ', () => {
  const component = renderer.create(
    <Login/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(component.getInstance().testMe()).toBe("this is login");
});
