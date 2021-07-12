import styles from './Log.module.scss';
import { useState } from 'react';
import { Button } from '../../components/Button';
import Toast from '../../components/Toast';
import Confirm from '../../components/Confirm';
import Dialog from '../../components/Dialog';
import Loading from '../../components/Loading';
import Checkbox from '../../components/Checkbox';
import Radio, { RadioGroup } from '../../components/Radio';
//简单日志页
export default function LOG() {
  const [toast, setToast] = useState('');
  const [toastType, setToastType] = useState(0);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [pcDialogVisible, setPcVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);
  const rows = 20;
  const onCopy = () => {
    let suc = false;
    let txt = document.getElementById('xp-debug-text');
    txt.select(); // 选择对象
    try {
      suc = document.execCommand('Copy');
    } catch (e) {
      suc = false;
    }
    if (suc) {
      alert('拷贝成功！');
    }
  };
  const showToast = (type) => {
    setToastType(type);
    setToast('testtest');
  };

  const toastClose = () => {
    setToast('');
  };

  const showDialog = () => {
    setDialogVisible(true);
  };
  const onDialogClose = () => {
    setDialogVisible(false);
  };

  const showPcDialog = () => {
    setPcVisible(true);
  };
  const onPcClose = () => {
    setPcVisible(false);
  };

  const showConfirm = () => {
    setConfirmVisible(true);
  };
  const closeConfirm = () => {
    setConfirmVisible(false);
  };
  const showAlert = () => {
    setAlertVisible(true);
  };
  const alertOk = () => {
    setAlertVisible(false);
  };

  return (
    <div className={styles.container}>
      <Button className={styles.button} onClick={onCopy}>
        复制到剪切板
      </Button>
      <textarea
        id="xp-debug-text"
        className="hp-debug-text"
        rows={rows}
        cols="80"
        defaultValue={window.HJHPLog.debug()}
      />
      <Checkbox
        checked={true}
        onClick={() => {
          console.log('checked');
        }}
      >
        <label>测试勾选框</label>
      </Checkbox>
      <Button
        className={styles.button}
        onClick={() => {
          showToast(1);
        }}
      >
        showToast1
      </Button>
      <RadioGroup
        value="b"
        onChange={(e) => {
          console.log('group change', e);
        }}
      >
        <Radio value="a">
          <span>public</span>
        </Radio>
        <Radio value="b">
          <span>private</span>
        </Radio>
      </RadioGroup>
      <Button
        className={styles.button}
        onClick={() => {
          showToast(2);
        }}
      >
        showToast2
      </Button>
      <Button className={styles.button} onClick={showConfirm}>
        showConfirm
      </Button>
      <Button className={styles.button} onClick={showDialog}>
        showDialog
      </Button>
      <Button className={styles.button} onClick={showPcDialog}>
        pc弹窗
      </Button>
      <Button className={styles.button} onClick={showAlert}>
        showAlert
      </Button>
      <Button
        className={styles.button}
        onClick={() => {
          setLoadingVisible(true);
        }}
      >
        showLoading
      </Button>
      <Dialog
        visible={dialogVisible}
        clickMask={onDialogClose}
        onClose={onDialogClose}
        className={styles.dialog}
      >
        <p className={styles.dialogContent}>
          为获得网络服务, 申请人应当认真阅读、充分理解本《协议》中各条款,
          包括免除或者限制责任的免责条款及对用户的权利限制条款。审慎阅读并选择接受或不接受本《协议》(未成年人应在法定监护人陪同下阅读)。
        </p>
      </Dialog>
      <Toast
        visible={toast}
        type={toastType}
        content={toast}
        onClose={toastClose}
      ></Toast>
      <Confirm
        visible={confirmVisible}
        content="确认是否删除确认是否删除确认是否删除认是否删除确认是否删除"
        onOk={closeConfirm}
        onCancel={closeConfirm}
      ></Confirm>
      <Confirm
        visible={alertVisible}
        content="alert弹窗"
        onOk={alertOk}
      ></Confirm>
      <Loading
        visible={loadingVisible}
        clickMask={() => {
          setLoadingVisible(false);
        }}
      ></Loading>
    </div>
  );
}
