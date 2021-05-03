import React from 'react';

import './Keyboard.css';

interface IKeyboardData {
  key: string;
  value: string;
  className: string;
}

const keyBoardData: IKeyboardData[] = [
  {
    key: '`',
    value: '`',
    className: 'symbol',
  },
  {
    key: '1',
    value: '1',
    className: 'symbol',
  },
  {
    key: '2',
    value: '2',
    className: 'symbol',
  },
  {
    key: '3',
    value: '3',
    className: 'symbol',
  },
  {
    key: '4',
    value: '4',
    className: 'symbol',
  },
  {
    key: '5',
    value: '5',
    className: 'symbol',
  },
  {
    key: '6',
    value: '6',
    className: 'symbol',
  },
  {
    key: '7',
    value: '7',
    className: 'symbol',
  },
  {
    key: '8',
    value: '8',
    className: 'symbol',
  },
  {
    key: '9',
    value: '9',
    className: 'symbol',
  },
  {
    key: '0',
    value: '0',
    className: 'symbol',
  },
  {
    key: '-',
    value: '-',
    className: 'symbol',
  },
  {
    key: '=',
    value: '=',
    className: 'symbol',
  },
  {
    key: 'delete',
    value: 'delete',
    className: 'delete lastitem',
  },
  {
    key: 'tab',
    value: 'tab',
    className: 'tab',
  },
  {
    key: 'q',
    value: 'q',
    className: 'letter',
  },
  {
    key: 'w',
    value: 'w',
    className: 'letter',
  },
  {
    key: 'e',
    value: 'e',
    className: 'letter',
  },
  {
    key: 'r',
    value: 'r',
    className: 'letter',
  },
  {
    key: 't',
    value: 't',
    className: 'letter',
  },
  {
    key: 'y',
    value: 'y',
    className: 'letter',
  },
  {
    key: 'u',
    value: 'u',
    className: 'letter',
  },
  {
    key: 'i',
    value: 'i',
    className: 'letter',
  },
  {
    key: 'o',
    value: 'o',
    className: 'letter',
  },
  {
    key: 'p',
    value: 'p',
    className: 'letter',
  },
  {
    key: '[',
    value: '[',
    className: 'symbol',
  },
  {
    key: ']',
    value: ']',
    className: 'symbol',
  },
  {
    key: '\\',
    value: '\\',
    className: 'symbol lastitem',
  },
  {
    key: 'capslock',
    value: 'caps lock',
    className: 'capslock',
  },
  {
    key: 'a',
    value: 'a',
    className: 'letter',
  },
  {
    key: 's',
    value: 's',
    className: 'letter',
  },
  {
    key: 'd',
    value: 'd',
    className: 'letter',
  },
  {
    key: 'f',
    value: 'f',
    className: 'letter',
  },
  {
    key: 'g',
    value: 'g',
    className: 'letter',
  },
  {
    key: 'h',
    value: 'h',
    className: 'letter',
  },
  {
    key: 'j',
    value: 'j',
    className: 'letter',
  },
  {
    key: 'k',
    value: 'k',
    className: 'letter',
  },
  {
    key: 'l',
    value: 'l',
    className: 'letter',
  },
  {
    key: ';',
    value: ';',
    className: 'symbol',
  },
  {
    key: "'",
    value: "'",
    className: 'symbol',
  },
  {
    key: 'return',
    value: 'return',
    className: 'return lastitem',
  },
  {
    key: 'shift',
    value: 'shift',
    className: 'left-shift',
  },
  {
    key: 'z',
    value: 'z',
    className: 'letter',
  },
  {
    key: 'x',
    value: 'x',
    className: 'letter',
  },
  {
    key: 'c',
    value: 'c',
    className: 'letter',
  },
  {
    key: 'v',
    value: 'v',
    className: 'letter',
  },
  {
    key: 'b',
    value: 'b',
    className: 'letter',
  },
  {
    key: 'n',
    value: 'n',
    className: 'letter',
  },
  {
    key: 'm',
    value: 'm',
    className: 'letter',
  },
  {
    key: ',',
    value: ',',
    className: 'symbol',
  },
  {
    key: '.',
    value: '.',
    className: 'symbol',
  },
  {
    key: '/',
    value: '/',
    className: 'symbol',
  },
  {
    key: 'shift',
    value: 'shift',
    className: 'right-shift lastitem',
  },
  {
    key: '',
    value: '',
    className: 'space lastitem',
  },
];

export const Keyboard: React.FC = () => {
  return (
    <ul id="keyboard">
      {keyBoardData.map((key, index) => (
        <li className={key.className} key={index}>
          {key.value}
        </li>
      ))}
    </ul>
  );
};
