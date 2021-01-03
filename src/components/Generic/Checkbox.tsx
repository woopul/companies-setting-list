import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckedIco } from '../../assets/checkbox-checked.svg';
import { ReactComponent as DefaultIco } from '../../assets/checkbox.svg';
import checked from '../../assets/checkbox-checked.svg';
import theme from '../../theme';

const CheckboxContainer = styled.label`
  width: auto;
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  grid-gap: 14px;
  margin-bottom: 20px;
/* 
  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  } */

  &:hover {
    cursor: pointer;
    .checkbox__icon.checked__icon, .default__icon {
      path {
        fill: ${theme.palette.button.hover};
      }
    }
  }

  &:focus {
    outline: none;
    background: ${theme.palette.button.default};
    .checkbox__icon.checked__icon, .default__icon {
      path {
        fill: ${theme.palette.button.hover};
      }
    }
  }

  &:active {
    .checkbox__control {
      background: #000;
    }
    .checkbox__icon.checked__icon, .default__icon {
      path {
        fill: #fff;
      }
    }
  }

  .checkbox__input {
    display: grid;

    .checkbox__control {
      display: grid;
      width: 30px;
      height: 30px;
      border-radius: 8px;
      
      .checkbox__icon {
        fill: ${theme.palette.button.default};
        margin-left: 2px;
      }

    }

    input {
      opacity: 0;
      height: 0; 
      position: absolute;

      &:checked ~ .checkbox__control svg {
         path:nth-child(1) {
          fill: ${theme.palette.button.default};
        }
        path:nth-child(2) {
          fill: ${theme.palette.button.hover};
        }
      }
    }

    .checkbox__icon {
      place-self: center;
      width: 20px;
      height: 20px;
      transform-origin: bottom-left;
    }
  }
`

interface ICheckBox {
  id: string;
  value?: boolean;
  onChange?: (id: string) => void;
  label?: string;
}

const CheckBox = ({ id, value, onChange, label }: ICheckBox) => {
  const [checked, setChecked] = useState<boolean>(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(prev => !prev)
    onChange && onChange(id);
  }

  useEffect(() => {
    if (value !== undefined) setChecked(value)
  }, [value])

  return (
    <CheckboxContainer >
      <span className="checkbox__input">
        <input checked={checked} onChange={handleChange} type="checkbox" name="promo" />
        <span className="checkbox__control">
          {checked ?
            <CheckedIco className='checkbox__icon checked__icon' /> :
            <DefaultIco className='checkbox__icon default__icon' />}
        </span>
      </span>
      <span className="checkbox__label">
        {label}
      </span>
    </CheckboxContainer >)
}

export default CheckBox;