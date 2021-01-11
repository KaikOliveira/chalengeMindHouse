import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SimpleLineIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import ImageSlider from 'react-native-image-slider';

import {
  Wrapper,
  SearchContainer,
  SearchTop,
  IconBasket,
  SearchInputView,
  SearchInput,
  Address,
  DeliverText,
  AddressText,
  AdContainer,
  CustonSlideView,
  AdImage,
  AdButtonContainer,
  AdSelectButton,
  CategoryConteiner,
  TitleAndSeeAll,
  Title,
  SeeAll,
} from './styles';

export default function HomePage() {
  const adImages = [
    'https://placeimg.com/640/640/nature',
    'https://placeimg.com/640/640/people',
    'https://placeimg.com/640/640/animals',
    'https://placeimg.com/640/640/beer',
  ];

  return (
    <Wrapper>
      <SearchContainer>
        <SearchTop>
          <SearchInputView>
            <FontAwesome5 name="search" size={19} color="#C1C1C1" />
            <SearchInput
              inlineImageLeft="search"
              inlineImagePadding={2}
              placeholder="Pesquisar estabelecimento"
              placeholderTextColor="#C0C0C0"
            />
          </SearchInputView>
          <IconBasket>
            <SimpleLineIcons name="handbag" size={28} color="#000" />
          </IconBasket>
        </SearchTop>
        <Address>
          <FontAwesome name="map-marker" size={22} color="#000" />
          <DeliverText>Entregar em bairro.</DeliverText>
          <AddressText>Condominio vila verde quadra 6 casa 17</AddressText>
        </Address>
      </SearchContainer>

      <AdContainer>
        <ImageSlider
          loop
          autoPlayWithInterval={2000}
          images={adImages}
          onPress={({ index }) => index}
          customSlide={({ index, item, style }) => (
            <CustonSlideView
              key={index}
              style={[
                style,
                styles.customSlide,
                { backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#F1F1F1' },
              ]}
            >
              <AdImage source={{ uri: item }} />
            </CustonSlideView>
          )}
          customButtons={(position, move) => (
            <AdButtonContainer>
              {adImages.map((image, index) => (
                <AdSelectButton
                  key={index}
                  underlayColor="#ccc"
                  onPress={() => move(index)}
                >
                  <Text style={position === index && styles.buttonSelected}>
                    {index + 1}
                  </Text>
                </AdSelectButton>
              ))}
            </AdButtonContainer>
          )}
        />
      </AdContainer>

      <CategoryConteiner>
        <TitleAndSeeAll>
          <Title>Categorias</Title>
          <SeeAll>Ver todas</SeeAll>
        </TitleAndSeeAll>
      </CategoryConteiner>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  buttonSelected: {
    opacity: 1,
    color: '#fff',
  },
  customSlide: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
