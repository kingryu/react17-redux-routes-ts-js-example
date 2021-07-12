import { useState } from 'react';
import './index.scss';

interface Props {
  checked: boolean;
  onClick?: Function; //点击事件
}

const Checkbox: React.FC<Props> = ({ checked, onClick, children }) => {
  const [selected, setSelected] = useState(checked);
  const clickHanlder = () => {
    setSelected(!selected);
    onClick && onClick(!selected);
  };

  let css = 'checkbox iconfont ';
  if (selected) {
    css += 'checked iconxuanzhong';
  } else {
    css += 'not-checked iconweixuanzhong';
  }

  return (
    <div className="checkbox-container" onClick={clickHanlder}>
      <span className={css}></span>
      {children}
    </div>
  );
};

export default Checkbox;
