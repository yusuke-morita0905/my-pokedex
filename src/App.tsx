import React from 'react';
import { HeaderApp } from "./apps/HeaderApp";
import { FooterApp } from "./apps/FooterApp";
import { HomeApp } from "./apps/HomeApp";

export const App: React.FC = () => {
  return (
    <>
      <HeaderApp/>
      <HomeApp/>
      <FooterApp/>
    </>
  );
}