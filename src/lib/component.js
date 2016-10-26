import React, { createClass } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default function component(Component) {
  const UIComponent = createClass({
    propTypes: {
      data: ImmutablePropTypes.map.isRequired,
    },

    shouldComponentUpdate(nextProps) {
      return !this.props.data.equals(nextProps.data);
    },

    render() {
      return <Component {...this.props} />;
    },
  });

  return UIComponent;
}
