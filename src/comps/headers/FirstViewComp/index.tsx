import React from 'react';
import styled from 'styled-components';

type Props = {
  mainText: string;
  isSp: boolean
};

export const FirstViewComp: React.FC<Props> = (p) => {
  const isSp:boolean = p.isSp;

  return (
    <FirstView $isSp={isSp}>
      <FirstViewInner $isSp={isSp}>
        <Title $isSp={isSp}>{p.mainText}</Title>
      </FirstViewInner>
    </FirstView>
  );
};

const FirstView = styled.div<{$isSp: boolean}>`
  text-align: center;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${p => p.$isSp ? '44vw' : '32vw'};
    background-color: #afeeee;
    z-index: -1;
    bottom: 0;
    transform: skewY(-10deg);
    margin: auto;
  }
`;

const FirstViewInner = styled.div<{$isSp: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 4.8vh;
`;

const Title = styled.h1<{$isSp: boolean}>`
  font-size: ${p => p.$isSp ? 'calc(25vw / 3.2)' : 'calc(52vw / 19.2)'};
  font-family: 'Inter', sans-serif;
  letter-spacing: ${p => p.$isSp ? '0.02vw' : '0.15vw'};
  width: fit-content;
  margin: 0 auto;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-right: ${p => p.$isSp ? '6.4vw' : '4vw'} solid transparent;
    border-left: ${p => p.$isSp ? '6.4vw' : '4vw'} solid transparent;
    border-top: ${p => p.$isSp ? '9.8vw' : '6.5vw'} solid #ffb6c1;
    border-bottom: 0;
    z-index: -1;
    bottom: 0;
    left: 0;
    margin: auto;
    top: ${p => p.$isSp ? '0' : '1vw'};
    right: 0;
    margin-left: ${p => p.$isSp ? '7vw' : '29vw'};
    transform: rotate(-10deg);
  }
`;
