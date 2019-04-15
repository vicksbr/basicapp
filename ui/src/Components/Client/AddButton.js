import React from 'react';
import PropTypes from 'prop-types';
import useAPI from '../useAPI';

const AddButton = ({ valueToAdd }) => {
  const { addClient } = useAPI();

  return (
    <button type="button" onClick={() => addClient(valueToAdd)}>
      Add
    </button>
  );
};

AddButton.propTypes = {
  valueToAdd: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default AddButton;
