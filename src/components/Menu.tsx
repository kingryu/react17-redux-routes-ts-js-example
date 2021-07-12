import React from 'react';
import type { FunctionComponentElement } from 'react';
import clsx from 'clsx';

import { MenuItem, isMenuItem } from './MenuItem';
import type { MenuItemProps } from './MenuItem';
import './Menu.scss';

interface MenuProps {
  className?: string;
  children:
    | FunctionComponentElement<MenuItemProps>
    | FunctionComponentElement<MenuItemProps>[];
}

export const Menu: React.FC<MenuProps> & {
  Item: typeof MenuItem;
} = ({ className, children }) => {
  const block = 'menu';
  const items = React.Children.toArray(children)
    .filter(isMenuItem)
    .map((item) =>
      React.cloneElement(item, { className: `${block}__menu-item` })
    );
  return <ul className={clsx(className, block)}>{items}</ul>;
};

Menu.Item = MenuItem;
