import React from 'react';
import { AiOutlineCoffee } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {
  Sidebar as SidebarComponent,
  SidebarProps as SidebarPropsComponent,
  NavItem,
} from '../ui';

export type SidebarProps = Omit<SidebarPropsComponent, 'title'>;

export function Sidebar({ onClose, ...rest }: SidebarProps) {
  const navigate = useNavigate();

  return (
    <SidebarComponent title="Homylife" onClose={onClose} {...rest}>
      <NavItem
        icon={AiOutlineCoffee}
        onClick={() => navigate('/manager/supplies')}
      >
        Suprimentos
      </NavItem>
    </SidebarComponent>
  );
}
