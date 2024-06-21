import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children: React.ReactNode;
  isSp: boolean;
};

export const HeaderComp: React.FC<Props> = (p) => {
  const isSp: boolean = p.isSp;
  return (
    <Container $isSp={isSp}>
      { p.children }
    </Container>
  );
};

const Container = styled.div<{ $isSp: boolean }>`
  ${(p) => {
    if (p.$isSp) {
      return css`
      `;
    } else {
      return css`
        margin-bottom: 5vw;
      `;
    }
  }}
`;
