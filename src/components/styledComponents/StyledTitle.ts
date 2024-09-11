import styled from "styled-components/native";

interface TextProps {
  color?: string;
}

export default styled.Text<TextProps>`
  font-size: 40px;
  color: ${(props) => props.color ?? "#f64348"};
`;
