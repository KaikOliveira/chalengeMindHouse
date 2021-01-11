import React from 'react';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import headerimg from '../../assets/headerimg.jpg';

import {
  Wrapper,
  Header,
  ButtonBack,
  HeaderImg,
  Box,
  SearchInputView,
  SearchInput,
  ContentContainer,
  TypeContent,
  TypeText,
  ButtonLeft,
  ButtonLeftText,
} from './styles';

export default function DetailsCategory() {
  return (
    <Wrapper>
      <Header>
        <HeaderImg source={headerimg} />
        <ButtonBack>
          <Ionicons name="chevron-back-outline" size={40} color="#000" />
        </ButtonBack>
        <Box />
      </Header>

      <SearchInputView>
        <FontAwesome5 name="search" size={19} color="#C1C1C1" />
        <SearchInput
          inlineImageLeft="search"
          inlineImagePadding={2}
          placeholder="Pesquisar"
          placeholderTextColor="#C0C0C0"
        />
      </SearchInputView>

      <ContentContainer>
        <TypeContent>
          <TypeText>Carne Bovina</TypeText>
          <ButtonLeft>
            <ButtonLeftText>Visitar corredor</ButtonLeftText>
          </ButtonLeft>
        </TypeContent>
      </ContentContainer>
    </Wrapper>
  );
}
