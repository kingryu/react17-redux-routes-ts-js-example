import React from 'react';
import clsx from 'clsx';

import './CriticalError.scss';
import { lang } from 'i18n';

export interface CriticalErrorProps {
  className?: string;
  message: string;
}

export const CriticalError: React.FC<CriticalErrorProps> = ({
  className,
  message,
}) => {
  const block = 'critical-error';
  return (
    <div className={clsx(className, block)}>
      <div className={`${block}__face`} role="img" aria-label="Dizzy Face">
        😵
      </div>
      <h3 className={`${block}__heading`}>
        {lang.Err.not_login /* 喔唷，崩溃啦！ */}
      </h3>
      <p className={`${block}__message`}>{message}</p>
    </div>
  );
};
