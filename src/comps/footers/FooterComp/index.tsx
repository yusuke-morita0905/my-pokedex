import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  isSp: boolean
};

export const FooterComp: React.FC<Props> = (p) => {
  return (
    <ContainerFooter>
      <Footer role='contentinfo' $isSp={p.isSp}>{p.children}</Footer>
    </ContainerFooter>
  );
};

const ContainerFooter = styled.div``;

const Footer = styled.footer<{ role: 'contentinfo'; $isSp:boolean }>`
  text-align: center;
`;
