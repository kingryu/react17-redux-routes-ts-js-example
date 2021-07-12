import React from 'react';
import clsx from 'clsx';
import LiveIcon from './living.svg';
import styles from './Detail.module.scss';

interface DetailProps {
  title: string;
  time: string;
  status?: number;
  teacher: string;
  hasLiveIcon?: boolean;
}

const DetailHeader: React.FC<DetailProps> = ({
  title,
  status,
  time,
  teacher,
  hasLiveIcon,
}) => {
  let hasStatus = false;
  if (typeof status != 'undefined') {
    hasStatus = true;
  }
  if (typeof hasLiveIcon == 'undefined') {
    hasLiveIcon = false;
  }

  let css = styles.detailStatus;
  if (!hasLiveIcon) {
    css = styles.detailStatus + ' ' + styles.statusOther;
  }

  return (
    <div className={styles.detailHeader}>
      <p className={styles.detailTitle}>{title}</p>
      {hasStatus ? (
        <p className={css}>
          {hasLiveIcon ? <span className="live-icon"></span> : null}
          {status}
        </p>
      ) : (
        <>
          <p className={styles.detailText}>{time}</p>
          <p className={styles.detailText}>{teacher}</p>
        </>
      )}
    </div>
  );
};

export default DetailHeader;
