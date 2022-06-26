import React, { ReactElement } from 'react';
import { LogoCompesa } from '../../assets';
import { Header } from './styles';

export const Navbar: React.ElementType = () => {
  return (
    <>
      <Header>
        <img src={LogoCompesa} alt="Logo Compesa" />
      </Header>
    </>
    )
}