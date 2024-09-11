import styled from "styled-components/native";

interface TouchableOpacityProps {
  color?: string;
}

const Background = styled.TouchableOpacity<TouchableOpacityProps>`
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  background-color: ${({ color }) => color ?? "#1c1a1d"};
`;

interface TextProps {
  color?: string;
}

const StyledText = styled.Text<TextProps>`
  text-align: center;
  color: ${({ color }) => color ?? "#fff"};
`;

interface ButtonProps {
  bgColor?: string;
  color?: string;
  children: React.ReactNode;
  onPress: () => void;
}

export default function ({ bgColor, color, children, onPress }: ButtonProps) {
  return (
    <Background color={bgColor} onPress={onPress}>
      <StyledText color={color}>{children}</StyledText>
    </Background>
  );
}
