import { createClass } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default function component(render) {
  return createClass({
    displayName: render.name,

    propTypes: {
      data: ImmutablePropTypes.map.isRequired,
    },

    shouldComponentUpdate(nextProps) {
      return this.props.data !== nextProps.data;
    },

    render() {
      return render.call(this, this.props);
    },
  });
}
