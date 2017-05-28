import React from 'react';
import PropTypes from 'prop-types';

const SingleInputForm = ({ onSubmit, buttonText }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          onSubmit(input.value);
          input.value = '';
        }}
      >
        <input ref={node => { input = node; }} />
        <button type="submit">
          {buttonText}
        </button>
      </form>
    </div>
  );
};

SingleInputForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default SingleInputForm;
