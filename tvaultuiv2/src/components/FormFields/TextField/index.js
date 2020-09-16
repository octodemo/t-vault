import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleTextField = styled(TextField)`
  .MuiFilledInput-adornedStart {
    font-size: 1.4rem;
  }
  .MuiIcon-root {
    font-size: 2rem;
  }
  .MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel) {
    margin-top: 0;
  }
  .MuiInputAdornment-positionStart {
    margin-right: ${(props) => (props.icon ? '8px' : '0px')};
  }
  .MuiFilledInput-root.Mui-focused {
    background-color: ${(props) =>
      props.primary === 'primary' ? '#fff' : '#20232e'};
  }
`;

const setIcon = (props) => {
  const { icon } = props;
  return <Icon>{icon}</Icon>;
};

const onInputChange = () => {};

const TextFieldComponent = (props) => {
  const {
    icon,
    placeholder,
    onChange,
    value,
    fullWidth,
    multiline,
    color,
    variant,
    rows,
    type,
  } = props;
  return (
    <StyleTextField
      icon={icon}
      placeholder={placeholder}
      value={value}
      primary={color}
      fullWidth={fullWidth}
      multiline={multiline}
      color={color}
      rows={rows}
      variant={variant || 'filled'}
      type={type}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            {icon && setIcon({ ...props })}
          </InputAdornment>
        ),
      }}
      onChange={onChange || ((e) => onInputChange(e))}
    />
  );
};

TextFieldComponent.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  multiline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  color: PropTypes.string,
  variant: PropTypes.string,
  rows: PropTypes.number,
  type: PropTypes.string,
};

TextFieldComponent.defaultProps = {
  icon: '',
  value: '',
  multiline: false,
  fullWidth: false,
  color: 'primary',
  variant: 'filled',
  rows: 5,
  type: 'text',
};

setIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default TextFieldComponent;
