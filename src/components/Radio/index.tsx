import React, { useState } from 'react';
import './index.scss';

interface Props {
  selValue: string | number;
  value: string | number;
  onClick?: Function; //点击事件
}

const Radio: React.FC<Props> = ({ selValue, value, onClick, children }) => {
  const clickHanlder = () => {
    onClick && onClick(value);
  };

  let css = 'radio-box iconfont ';
  const checked = selValue === value;
  if (checked) {
    css += 'checked iconradio1';
  } else {
    css += 'not-checked iconradio';
  }

  return (
    <div className="radio-container" onClick={clickHanlder}>
      <span className={css}></span>
      {children}
    </div>
  );
};

interface GroupProps {
  value: string;
  onChange?: Function; //点击事件
  children: React.ReactElement<Props>[];
}

export const RadioGroup: React.FC<GroupProps> = ({
  value,
  onChange,
  children,
}) => {
  const [selValue, setSelValue] = useState(value);

  const clickHanlder = (value: string) => {
    setSelValue(value);
    onChange && onChange(value);
  };

  return (
    <div className="radio-group-container">
      {children &&
        React.Children.map(children, (child, i) => {
          if (child) {
            return React.cloneElement(child, {
              selValue: selValue,
              onClick: clickHanlder,
            });
          }
        })}
    </div>
  );
};

export default Radio;
