import { createClass } from 'react';
import { fromJS } from 'immutable';

function toImmutableData(data) {
  if (data.isMap && data.isMap()) {
    return data;
  }

  return fromJS(data);
}

export default function container({ data, handlers, component }) {
  const containerCmp = Object.assign({}, component);
  Object.keys(handlers).forEach((key) => {
    containerCmp[key] = function handler(...args) {
      this.setState({ data: handlers[key].call(this, this.state.data, ...args) });
    };
  });

  containerCmp.getInitialState = function getInitialState() {
    return { data: toImmutableData(data) };
  };

  return createClass(containerCmp);
}
