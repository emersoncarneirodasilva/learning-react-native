import styled from "styled-components/native";

interface ViewProps {
  color?: string;
}

export default styled.View<ViewProps>`
  flex: 1;
  margin: 32px 0 0;
  padding: 16px;
  background-color: ${(props) => props.color ?? "#fff"};
`;
