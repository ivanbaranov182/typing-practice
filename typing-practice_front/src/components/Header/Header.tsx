import React from 'react';
import { HeaderDrawer } from './HeaderDrawer/HeaderDrawer';
import { TopBar } from './TopBar';

export const Header: React.FC = () => (
  <>
    <TopBar />
    <HeaderDrawer />
  </>
);
