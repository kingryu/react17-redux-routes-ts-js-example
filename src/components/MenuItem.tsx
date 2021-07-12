import React from 'react';
import type {
  ReactNode,
  FunctionComponentElement,
  SVGProps,
  MouseEventHandler,
} from 'react';
import clsx from 'clsx';

import { ChevronForward } from 'icons';
import './MenuItem.scss';

export interface MenuItemProps {
  className?: string;
  icon?: FunctionComponentElement<SVGProps<SVGSVGElement>>;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  className,
  icon,
  onClick,
  children,
}) => {
  const block = 'menu-item';
  const iconBefore =
    icon &&
    React.cloneElement(icon, {
      className: `${block}__icon ${block}__icon--before`,
    });
  return (
    <li role="menuitem" className={clsx(className, block)} onClick={onClick}>
      {iconBefore}
      {children}
      <ChevronForward className={`${block}__icon ${block}__icon--after`} />
    </li>
  );
};

// Define a type guard for use with `Array.prototype.filter`
export const isMenuItem = (
  node: ReactNode
): node is FunctionComponentElement<MenuItemProps> => {
  return React.isValidElement<MenuItemProps>(node) && node.type === MenuItem;
};
