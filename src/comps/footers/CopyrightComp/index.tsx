import React from 'react';
import styled from 'styled-components';

type Props = {
  isSp: boolean;
};

export const CopyrightComp: React.FC<Props> = (p) => {
  const isSp: boolean = p.isSp;

  return (
    <>
      <Thank $isSp={isSp}>Thank you watching !</Thank>
      <Small $isSp={isSp}>&copy; 2024 morita yusuke</Small>
    </>
  );
};

const Thank = styled.p<{ $isSp: boolean }>`
  font-size: ${(p) => (p.$isSp ? '2vw' : '0.93vw')};
  letter-spacing: 0.02vw;
  margin-bottom: ${(p) => (p.$isSp ? '7vw' : '4vw')};
`;

const Small = styled.small<{ $isSp: boolean }>`
  font-size: ${(p) => (p.$isSp ? '1.5vw' : '0.7vw')};
  text-align: center;
`;
