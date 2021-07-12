import Modal, { ImodalProps } from '../Modal';
import { lang } from '../../i18n/index';
import './index.scss';

interface Props extends ImodalProps {
  content?: string; //询问框询问内容
  confirmClass?: string;
  onOk: Function; //确认按钮事件
  onCancel?: Function; //取消按钮事件，如不传入则展示成alert效果
  okText?: string; //确认按钮文字
  cancelText?: string; //取消按钮文字
}

const Confirm: React.FC<Props> = ({
  content,
  children,
  confirmClass = '',
  onCancel,
  onOk,
  cancelText,
  okText,
  ...modalProps
}) => {
  let css = 'xp-confirm-ft-item';
  if (typeof onCancel == 'undefined') {
    css += ' xp-confirm-one';
  }

  return (
    <Modal className="xp-confirm" {...modalProps}>
      <div className={`xp-confirm-content ${confirmClass}`}>
        {content || children}
      </div>
      <div className="xp-confirm-footer">
        {onCancel ? (
          <div
            onClick={() => onCancel()}
            onTouchEnd={(e) => {
              e.preventDefault();
              onCancel && onCancel();
            }}
            className="xp-confirm-ft-item"
          >
            {cancelText || lang.Btn.cancel}
          </div>
        ) : null}
        <div
          onClick={() => onOk()}
          onTouchEnd={(e) => {
            e.preventDefault();
            onOk && onOk();
          }}
          className={css}
        >
          {okText || lang.Btn.ok}
        </div>
      </div>
    </Modal>
  );
};

export default Confirm;
