/* eslint-disable no-console */
/* eslint-disable prefer-template */
// console.log('logging from form-component');
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const FormBasic = styled.form``;
const InputBasic = styled.input``;
const ButtonBasic = styled.button``;
const FormComponent = ({ onSubmit, buttonText, customComponents }) => {
  let input;
  const Form = customComponents.form;
  const Input = customComponents.input;
  const Button = customComponents.button;
  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          onSubmit(input.value);
          input.value = '';
        }}
      >
        <Input ref={node => { input = node; }} />
        <Button type="submit">
          {buttonText}
        </Button>
      </Form>
    </div>
  );
};

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  customComponents: PropTypes.shape({
    form: PropTypes.func,
    input: PropTypes.func,
    button: PropTypes.func
  }),
};
FormComponent.defaultProps = {
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  customComponents: {
    form: FormBasic,
    input: InputBasic,
    button: ButtonBasic
  },
};

export default FormComponent;
