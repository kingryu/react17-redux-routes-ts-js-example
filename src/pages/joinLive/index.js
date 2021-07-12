import styles from './index.module.scss';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button';
import DetailHeader from './components/Detail';
import { lang } from '../../i18n/index';
import { getClassDetail } from './service';
import { useSelector, useDispatch } from 'react-redux';
import { selectClassDetail } from './model';

export default function JoinLiveClass() {
  const [roomId, setRoomId] = useState('');
  const [pwd, setPwd] = useState('');
  const classDetail = useSelector(selectClassDetail);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getClassDetail(id));
    }
  }, [id, dispatch]);

  console.log('classDetail', classDetail, id);

  const onChange = (e) => {
    setRoomId(e.target.value);
  };

  const onPwdChange = (e) => {
    setPwd(e.target.value);
  };

  let disabled = true;
  if ((pwd.length > 1 && roomId.length > 1) || (id && pwd.length > 1)) {
    disabled = false;
  }

  let content;
  if (id) {
    content = (
      <DetailHeader
        title={classDetail.name}
        time={`${lang.Page.room_detail_time} ${classDetail.beginTime}`}
        teacher={`${lang.Page.room_detail_teacher} ${classDetail.teacherName}`}
      ></DetailHeader>
    );
  } else {
    content = (
      <div className={styles.line}>
        <p className={styles.label}>{lang.Page.label_room_id}</p>
        <input
          className={styles.input}
          placeholder={lang.Page.room_id_place_holder}
          value={roomId}
          onChange={onChange}
        ></input>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {content}
        <div className={styles.line}>
          <p className={styles.label}>{lang.Page.label_room_pwd}</p>
          <input
            className={styles.input}
            placeholder={lang.Page.room_pwd_place_holder}
            value={pwd}
            type="password"
            onChange={onPwdChange}
          ></input>
        </div>
        <div className={styles.line}>
          <Button disabled={disabled} className={styles.btn}>
            {id ? lang.Btn.joinChannel : lang.Btn.ok}
          </Button>
        </div>
      </div>
    </div>
  );
}
