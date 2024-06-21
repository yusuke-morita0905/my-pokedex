import React from 'react';
import { mediaQuery, useMediaQuery } from '@/modules/lib';
import { HeaderComp } from '@/comps/headers/HeaderComp';
import { NavComp } from '@/comps/headers/NavComp';
import { FirstViewComp } from '@/comps/headers/FirstViewComp';

type nav = {
  item: {
    cd: string;
    title: string;
    link: string;
  };
}[];

const Nav: nav = [
  {
    item: {
      cd: '1',
      title: 'Works',
      link: 'works',
    },
  },
  {
    item: {
      cd: '2',
      title: 'About',
      link: 'about',
    },
  },
  {
    item: {
      cd: '3',
      title: 'Contact',
      link: 'contact',
    },
  },
];

export const HeaderApp: React.FC = () => {
  const isSp: boolean = useMediaQuery(mediaQuery.sp);

  return (
    <HeaderComp isSp={isSp}>
      <></>
    </HeaderComp>
  );
};
