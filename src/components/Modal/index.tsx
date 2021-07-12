import React from 'react';
import './index.scss';

const zIndex = 1000;

export interface ImodalProps {
  visible: boolean; //弹框显示隐藏 true显示/false隐藏
  showMask?: boolean; //背景遮罩显示隐藏 true显示/false隐藏
  contentStyle?: object; //内容行内样式
  className?: string; //内容样式class
  maskClass?: string; //背景遮罩样式class
  clickMask?: React.MouseEventHandler<HTMLDivElement>; //点击背景遮罩事件
  title?: string;
}

const Modal: React.FC<ImodalProps> = ({
  visible,
  showMask = true,
  contentStyle = {},
  className = '',
  maskClass = '',
  children,
  clickMask = () => {},
  title = '',
}) => {
  let maskStyle = {};
  let _contentStyle = { ...contentStyle };
  if (visible) {
    if (showMask) {
      maskStyle = {
        zIndex,
      };
    }
    _contentStyle = Object.assign(
      {
        zIndex,
      },
      _contentStyle
    );
    return (
      <div className="xp-dialog-box">
        {showMask ? (
          <div
            className={`xp-modal-mask ${maskClass}`}
            onClick={clickMask}
            style={maskStyle}
          />
        ) : null}
        <div className={`xp-modal-content ${className}`} style={_contentStyle}>
          {title.length > 0 && <h3 className="xp-confirm-title">{title}</h3>}
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
