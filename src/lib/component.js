import { createClass } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default function component(render) {
  const UIComponent = createClass({
    propTypes: {
      data: ImmutablePropTypes.map.isRequired,
    },

    shouldComponentUpdate(nextProps) {
      return !this.props.data.equals(nextProps.data);
    },

    render() {
      return render.call(this, this.props);
    },
  });

  return UIComponent;
}
