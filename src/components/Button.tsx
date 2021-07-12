import React, { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';
import { Spinner } from './Spinner';
import './Button.scss';

type IntrinsicButton = JSX.IntrinsicElements['button'];

interface ButtonProps extends IntrinsicButton {
  loading?: boolean;
  outlined?: boolean;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({
    className,
    disabled = false,
    loading = false,
    outlined = false,
    children,
    ...rest
  }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [hover, setHover] = useState(false);
    useEffect(() => {
      const button = buttonRef.current;
      const handleMouseEnter = () => setHover(true);
      const handleMouseLeave = () => setHover(false);
      if (button) {
        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);
        return () => {
          button.removeEventListener('mouseenter', handleMouseEnter);
          button.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    });
    const block = 'btn';
    return (
      <button
        ref={buttonRef}
        {...rest}
        className={clsx(className, block, {
          [`${block}--hover`]: hover,
          [`${block}--disabled`]: disabled,
          [`${block}--loading`]: loading,
          [`${block}--outlined`]: outlined,
        })}
        disabled={disabled || loading}
      >
        {loading && (
          <Spinner
            className={`${block}__loading-indicator`}
            size="small"
            color="#fff"
          />
        )}
        <span className={`${block}__text`}>{children}</span>
      </button>
    );
  }
);
