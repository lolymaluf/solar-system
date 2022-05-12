import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2>{headline}</h2>;
  }
}

/* Shape para confirmar se é string */
/* https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html */

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
