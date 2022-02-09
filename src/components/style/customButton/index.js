import React  from 'react';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const color = {
  primary: {
    100: 'white',
    500: '#007d7d',
    600: '#005f5f',
    700: '#004949',
  },
  outline: {
    100: '#005f5f',
    500: '#ffffff',
    600: '#d8eeee',
    700: '#99c7c8',
  },
  closeLarge: {
    100: '#888888',
    500: '#ffffff',
    600: '#f3f3f3',
    700: '#e3e3e3',
  },
  addLarge: {
    100: '#ffffff',
    500: '#ed7100',
    600: '#da4100',
    700: '#aa2900',
  }
}


export default function CustomButton(props) {

  const CustomButtonRoot = styled('span')`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3rem;
      background-color: ${color[props.color][500]};
      padding: 10px 24px;
      border-radius: 2px;
      color: ${color[props.color][100]};
      transition: all 150ms ease;
      cursor: pointer;
      border: none;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);

      &:hover {
        background-color: ${color[props.color][600]};
      }

      &:disabled {
        opacity: 0.5;
      }

      &.${buttonUnstyledClasses.active} {
        background-color: ${color[props.color][700]};
      }

      &.${buttonUnstyledClasses.focusVisible} {
        box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
        outline: none;
      }

      &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
      }
      `;
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}
