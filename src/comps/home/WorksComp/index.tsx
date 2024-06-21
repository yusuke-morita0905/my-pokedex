import React, { useEffect, useState, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { ShowImage } from '@/modules/lib';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import { MainClient } from 'pokenode-ts';
import { Box, Center, Image, Flex, Badge, Text } from '@chakra-ui/react';

type Props = {
  isSp: boolean;
};

type Pokemon = {
  id: number;
  name: string;
  front_default: string;
  front_shiny: string;
  taxonomy: string;
  type: string;
  height: number;
  weight: number;
  property: string;
  flavor_text: string;
};

export const PictureBookComp: React.FC<Props> = (p) => {
  const isSp: boolean = p.isSp;
  const [pokemonData, setPokemonData] = useState<Pokemon>({
    id: 0,
    name: '',
    front_default: '',
    front_shiny: '',
    taxonomy: '',
    type: '',
    height: 0,
    weight: 0,
    property: '',
    flavor_text: '',
  });

  useEffect(() => {
    (async () => {
      const api = new MainClient();

      try {
        const index = Math.floor(Math.random() * 1025 + 1);
        const dataPromise = api.pokemon.getPokemonById(index);
        const speciesPromise = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${index}`);
        const [data, responseSpecies] = await Promise.all([dataPromise, speciesPromise]);

        console.log(data);
        console.log(responseSpecies);

        const name: string = responseSpecies.data.names.find((v: { language: { name: string } }) => v.language.name === 'ja')['name'];
        const type: string = responseSpecies.data.genera.find(
          (v: { language: { name: string } }) => v.language.name === 'ja-Hrkt' || v.language.name === 'ko'
        )['genus'];
        let flavorTextEntry = responseSpecies.data.flavor_text_entries.find((v: { language: { name: string } }) => v.language.name === 'ja');

        if (!flavorTextEntry) {
          flavorTextEntry = responseSpecies.data.flavor_text_entries.find((v) => v.language.name === 'en');
        }

        const flavorText = flavorTextEntry ? flavorTextEntry.flavor_text : 'Default flavor text if neither "ja" nor "en" is found';
        console.log(flavorText);

        setPokemonData({
          id: index,
          name: name,
          type: type,
          taxonomy: '',
          property: '',
          height: data['height'],
          weight: data['weight'],
          front_default: data['sprites']['other']['official-artwork']['front_default'],
          front_shiny: data['sprites']['other']['official-artwork']['front_shiny'],
          flavor_text: flavorText,
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    })();
  }, []);

  return (
    <ChakraProvider>
      <Container
        id='works'
        $isSp={isSp}
      >
        <Title $isSp={isSp}>Pokemon</Title>
        {pokemonData.id !== 0 && (
          <Center h='100vh'>
            <Box
              p='5'
              maxW='320px'
              borderWidth='1px'
            >
              <Image
                w='278px'
                h='278px'
                borderRadius='md'
                m='auto'
                src={pokemonData.front_default}
              />
              <Image
                w='278px'
                h='278px'
                borderRadius='md'
                m='auto'
                src={pokemonData.front_shiny}
              />
              <Flex
                align='baseline'
                mt={2}
              >
                <Badge colorScheme='pink'>{pokemonData.type}</Badge>
                <Text
                  ml={2}
                  textTransform='uppercase'
                  fontSize='sm'
                  fontWeight='bold'
                  color='pink.800'
                >
                  {pokemonData.name}
                </Text>
              </Flex>
              <Text>{pokemonData.flavor_text}</Text>
              <Flex
                mt={2}
                align='center'
              >
                <Text fontSize='sm'>
                  <b>高さ</b> {pokemonData.height / 10} m<b>重さ</b> {pokemonData.weight / 10} kg
                </Text>
              </Flex>
            </Box>
          </Center>
        )}
      </Container>
    </ChakraProvider>
  );
};

const findProperty = (obj, key) => {
  // ベースケース：objがnullまたはオブジェクトでない場合、undefinedを返す
  if (obj === null || typeof obj !== 'object') {
    return undefined;
  }

  // ベースケース：オブジェクトが指定されたキーを持っている場合、その値を返す
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  }

  // 再帰ケース：各プロパティについて再帰的に検索
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      const result = findProperty(obj[k], key);
      if (result !== undefined) {
        return result;
      }
    }
  }

  // プロパティが見つからなかった場合、undefinedを返す
  return undefined;
};

const Container = styled.section<{ $isSp: boolean }>`
  width: ${(p) => (p.$isSp ? '90vw' : '66vw')};
  margin-left: auto;
  margin-right: auto;
  padding-bottom: ${(p) => (p.$isSp ? '30vw' : '12vw')};
`;

const Title = styled.h2<{ $isSp: boolean }>`
  font-size: ${(p) => (p.$isSp ? 'calc(23vw / 3.2)' : 'calc(40vw / 19.2)')};
  text-align: center;
  font-family: 'Inter', sans-serif;
  position: relative;
  width: fit-content;
  margin: 0 auto ${(p) => (p.$isSp ? ' 10vw' : '6vw')};

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-right: 4vw solid transparent;
    border-left: 4vw solid transparent;
    border-top: 6.5vw solid #afeeee;
    border-bottom: 0;
    z-index: -1;
    bottom: 0;
    left: 0;
    margin: auto;
    right: 0;
    top: ${(p) => (p.$isSp ? '1.5vw' : '1vw')};
    margin-left: ${(p) => (p.$isSp ? '12vw' : '3vw')};
    transform: rotate(10deg);
  }
`;
