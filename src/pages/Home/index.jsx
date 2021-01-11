import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
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
  SeeAllButton,
  SeeAll,
  CategoryItems,
  CategoryImage,
} from './styles';

export default function HomePage() {
  const adImages = [
    'https://placeimg.com/640/640/nature',
    'https://placeimg.com/640/640/people',
    'https://placeimg.com/640/640/animals',
    'https://placeimg.com/640/640/beer',
  ];

  const categorys = [
    {
      id: '1',
      name: 'Carnes',
      img: 'https://placeimg.com/640/640/beer',
    },
    {
      id: '2',
      name: 'Especiais',
      img: 'https://placeimg.com/640/640/beer',
    },
    {
      id: '3',
      name: 'Fruto do Mar',
      img: 'https://placeimg.com/640/640/beer',
    },
    {
      id: '4',
      name: 'HortiFruti',
      img: 'https://placeimg.com/640/640/beer',
    },
    {
      id: '5',
      name: 'Pet Shop',
      img: 'https://placeimg.com/640/640/beer',
    },
    {
      id: '6',
      name: 'Supermercado',
      img: 'https://placeimg.com/640/640/beer',
    },
    {
      id: '7',
      name: 'Bebidas',
      img: 'https://placeimg.com/640/640/beer',
    },
    {
      id: '8',
      name: 'Padarias',
      img: 'https://placeimg.com/640/640/beer',
    },
    {
      id: '9',
      name: 'Sorveteria',
      img: 'https://placeimg.com/640/640/beer',
    },
    {
      id: '10',
      name: 'Marcado',
      img: 'https://placeimg.com/640/640/beer',
    },
  ];

  const columns = 3;

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
          <SeeAllButton>
            <SeeAll>Ver todas</SeeAll>
          </SeeAllButton>
        </TitleAndSeeAll>

        <CategoryItems>
          <FlatList
            data={createRows(categorys, columns)}
            keyExtractor={item => item.id}
            numColumns={columns}
            renderItem={({ item }) => {
              if (item.empty) {
                return <View style={[styles.item, styles.itemEmpty]} />;
              }
              return (
                <TouchableOpacity style={styles.item}>
                  <CategoryImage source={{ uri: item.img }} />
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </CategoryItems>
      </CategoryConteiner>
    </Wrapper>
  );
}

function createRows(data, columns) {
  const rows = Math.floor(data.length / columns);
  let lastRowElements = data.length - rows * columns;

  while (lastRowElements !== columns) {
    data.push({
      id: `empty-${lastRowElements}`,
      name: `empty-${lastRowElements}`,
      empty: true,
    });
    lastRowElements += 1;
  }

  return data;
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

  item: {
    alignItems: 'center',
    borderRadius: 20,
    width: 140,
    height: 150,
    backgroundColor: '#fff',
    flexBasis: 0,
    flexGrow: 1,
    margin: 4,
    padding: 20,
    justifyContent: 'space-between',
  },
  itemEmpty: {
    backgroundColor: 'transparent',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
});

/*
<Category>
      <CategoryImage source={{ uri: item.img }} />
      <CategoryTypeText>{item.name}</CategoryTypeText>
    </Category>


  {Categorys.map(item => (
            <Category key={item.id}>
              <CategoryImage source={{ uri: item.img }} />
              <CategoryTypeText>{item.name}</CategoryTypeText>
            </Category>
          ))}
*/
