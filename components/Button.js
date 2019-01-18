
import React from 'react';
import styled from 'styled-components/native';

/* https://kylewbanks.com/blog/react-native-tutorial-part-2-designing-a-calculator */

/* https://github.com/styled-components/styled-components/issues/149 */
const ButtonBox = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgb(39, 41, 43);
  border-radius: 10px;
  margin: 5px;
`;

const ButtonText = styled.Text`
  font-size: 25;
  font-family: Orbitron-Bold;
  color: ${props => (props.text === 'Go' || props.text === 'Back' ? 'green' : 'orange')};
`;

export default ({ func, text }) => (
  <ButtonBox onPressIn={() => func(text)}>
    <ButtonText text={text}>{text}</ButtonText>
  </ButtonBox>
);
