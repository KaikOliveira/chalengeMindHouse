import styled from 'styled-components';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #f5f5f5;
`;

export const SearchContainer = styled.View`
  background: #f7db47;
  height: 155px;
  flex-direction: column;
`;

export const SearchTop = styled.View`
  margin-top: 38px;
  height: 55px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const IconBasket = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const SearchInputView = styled.View`
  height: 50px;
  background: #fff;
  width: 78%;
  margin-left: 20px;
  border-color: #d3e2e6;
  border-radius: 15px;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
`;

export const SearchInput = styled.TextInput`
  margin-left: 8px;
  font-size: 16px;
  color: #c1c1c1;
`;

export const Icon = styled.View``;

export const Address = styled.View`
  margin-top: 18px;
  flex-direction: row;
  padding: 0 22px;
`;

export const DeliverText = styled.Text`
  margin-left: 8px;
  font-size: 18px;
  color: #555;
`;

export const AddressText = styled.Text`
  color: #333;
  margin-left: 2px;
  font-size: 19px;
  font-weight: bold;
`;

export const AdContainer = styled.View`
  margin-top: 15px;
  height: 250px;
`;

export const CustonSlideView = styled.View`
  background: #f1f1f1;
  align-items: center;
  justify-content: center;
`;

export const AdImage = styled.Image`
  width: 90%;
  height: 250px;
`;

export const AdButtonContainer = styled.View`
  z-index: 1;
  height: 5px;
  margin-top: -20px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const AdSelectButton = styled.TouchableOpacity`
  background: #f4a03b;
  margin: 3px;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  opacity: 0.9;
  align-items: center;
  justify-content: center;
`;

export const CategoryConteiner = styled.View`
  margin-top: 20px;
`;

export const TitleAndSeeAll = styled.View`
  width: 90%;
  margin-left: 25px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #444;
  font-size: 24px;
  font-weight: bold;
`;

export const SeeAllButton = styled.TouchableOpacity``;

export const SeeAll = styled.Text`
  color: #a4a4a4;
  font-size: 18px;
  margin-right: 5px;
  margin-top: 6px;
  font-weight: 700;
`;

export const CategoryItems = styled.View``;

export const Category = styled.TouchableOpacity`
  align-items: center;
  flex-grow: 1;
  margin: 4px;
  padding: 20px;
`;

export const CategoryImage = styled.Image`
  width: 150px;
  height: 110px;
  margin-top: -10px;
  border-radius: 15px;
`;
