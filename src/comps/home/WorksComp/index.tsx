import React, { useEffect, useState, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';
import { MainClient, GameClient, POKEDEXES } from 'pokenode-ts';
import { Card, CardHeader, Image, CardBody, CardFooter, Stack, Heading, Text, Button, Divider, ButtonGroup } from '@chakra-ui/react';

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
  const [allPokemons, setAllPokemons] = useState([]);

  const createPokemonObject = (results) => {
    results.forEach((pokemon) => {
      fetch(pokemon.pokemon_species.url)
        .then((res) => res.json())
        .then(async (data) => {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.id}`);
          const pokemonList = await response.json();
          const name: string = data.names.find((v: { language: { name: string } }) => v.language.name === 'ja')['name'];
          const genus: string = data.genera[0].genus;

          const newList = {
            id: pokemonList.id,
            name: name,
            type: genus,
            image: pokemonList.sprites.other['official-artwork'].front_default,
            imageShiny: pokemonList.sprites.other['official-artwork'].front_shiny,
          };
          setAllPokemons((currentList) => [...currentList, newList]);
        });
    });
  };

  useEffect(() => {
    (async () => {
      const gameApi = new GameClient();

      await gameApi
        .getPokedexById(POKEDEXES.KANTO)
        .then((data) => createPokemonObject(data.pokemon_entries))
        .catch((error) => console.error(error));
    })();
  }, []);

  console.log(allPokemons);

  return (
    <ChakraProvider>
      <Container
        id='works'
        $isSp={isSp}
      >
        <Title $isSp={isSp}>Pokemon</Title>
        <Wrap>
          {allPokemons.map((v, i) => (
            <Card
              maxW='sm'
              key={i}
            >
              <CardBody>
                <Image
                  src={v.image}
                  alt=''
                />
                <Image
                  src={v.imageShiny}
                  alt=''
                />
                <Stack
                  mt='6'
                  spacing='3'
                >
                  <Heading size='md'>{v.name}</Heading>
                  <Text>{v.type}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button
                    variant='solid'
                    colorScheme='blue'
                  >
                    Buy now
                  </Button>
                  <Button
                    variant='ghost'
                    colorScheme='blue'
                  >
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          ))}
        </Wrap>
      </Container>
    </ChakraProvider>
  );
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

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 90px;
`;
