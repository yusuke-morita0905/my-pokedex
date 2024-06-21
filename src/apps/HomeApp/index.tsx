import React from 'react';
import { mediaQuery, useMediaQuery } from '@/modules/lib';
import { HomeComp } from '@/comps/home/HomeComp';
import { PictureBookComp } from '@/comps/home/WorksComp';

export const HomeApp: React.FC = () => {
  const isSp: boolean = useMediaQuery(mediaQuery.sp);

  return (
    <HomeComp>
      <PictureBookComp isSp={isSp} />
    </HomeComp>
  );
};
