import styled from 'styled-components';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #f5f5f5;
`;

export const Header = styled.View`
  width: 100%;
  height: 200px;
  align-items: center;
`;

export const HeaderImg = styled.Image`
  position: relative;
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  left: 4%;
  top: 15%;
  width: 60px;
  height: 70px;
  border-radius: 15px;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.View`
  position: absolute;
  top: 63%;
  width: 85%;
  height: 120px;
  border-radius: 15px;
  background: #fff;
`;

export const SearchInputView = styled.View`
  height: 50px;
  background: #fff;
  width: 90%;
  margin-left: 20px;
  border-color: #d3e2e6;
  border-radius: 15px;
  border-width: 1px;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin-top: 150px;
`;

export const SearchInput = styled.TextInput`
  margin-left: 8px;
  font-size: 16px;
  color: #c1c1c1;
`;

export const ContentContainer = styled.View``;

export const TypeContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TypeText = styled.Text`
  color: #444;
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
`;

export const ButtonLeft = styled.TouchableOpacity`
  background: #f4a03b;
  width: 155px;
  height: 40px;
  margin-right: 15px;
  margin-top: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonLeftText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 17px;
`;
