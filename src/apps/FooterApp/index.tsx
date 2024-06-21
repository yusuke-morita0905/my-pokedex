import React from 'react';
import { mediaQuery, useMediaQuery } from '@/modules/lib';
import { FooterComp } from '@/comps/footers/FooterComp';
import { CopyrightComp } from '@/comps/footers/CopyrightComp';

export const FooterApp: React.FC = () => {
  const isSp:boolean = useMediaQuery(mediaQuery.sp);

  return (
    <FooterComp isSp={isSp}>
      <CopyrightComp isSp={isSp}/>
    </FooterComp>
  );
};
