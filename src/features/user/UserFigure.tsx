import React, { useCallback, useEffect } from 'react';
import type { MouseEventHandler } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';

import { Spinner } from 'components';
import type { AppDispatch } from 'app/store';
import { selectUser, fetchUser } from './userSlice';
import './UserFigure.scss';
import avatar from './avatar.svg';
import { lang } from 'i18n';

interface UserFigureProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

export const UserFigure: React.FC<UserFigureProps> = ({
  className,
  onClick,
}) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();
  const boundFetchUser = useCallback(() => dispatch(fetchUser()), [dispatch]);

  useEffect(() => {
    if (user.status === 'idle' && !user.data) void boundFetchUser();
  }, [user, boundFetchUser]);

  const block = 'user-figure';
  if (user.status === 'loading')
    return (
      <div className={clsx(className, block)}>
        <Spinner className={`${block}__spinner`} />
        <span className={`${block}__info`}>
          {lang.Page.settings_get_user /* 正在获取用户信息… */}
        </span>
      </div>
    );
  if (user.status === 'failed' || !user.data) {
    return (
      <div className={clsx(className, block)} onClick={boundFetchUser}>
        <img className={`${block}__avatar`} src={avatar} alt="avatar" />
        <span className={`${block}__info`}>
          {lang.Err.get_userInfo_fail_retry /* 获取用户信息失败 点按重试 */}
        </span>
      </div>
    );
  }
  return (
    <figure className={clsx(className, block)} onClick={onClick}>
      <img
        className={`${block}__avatar`}
        src={user.data.avatar || avatar}
        alt="avatar"
      />
      <figcaption className={`${block}__nickname`}>
        {
          user.data.nickname ||
            user.data.username ||
            lang.Page.not_set_nickname /*'未设置昵称'*/
        }
      </figcaption>
    </figure>
  );
};
