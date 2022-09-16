import React from 'react';
import PropTypes from 'prop-types';

class ButtonItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.objetChangeEvent = this.objetChangeEvent.bind(this);
  }

  objetChangeEvent() {
    const { label, objetChangeEvent } = this.props;
    objetChangeEvent(label);
  }

  render() {
    const { label, cl } = this.props;
    return (

      <button
        className={`item   ${cl}`}
        type="submit"
        onClick={this.objetChangeEvent}
      >
        {label}

      </button>

    );
  }
}
ButtonItem.propTypes = {
  label: PropTypes.string.isRequired,
  cl: PropTypes.string.isRequired,
  objetChangeEvent: PropTypes.func.isRequired,

};

export default ButtonItem;
