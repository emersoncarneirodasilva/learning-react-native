import StyledContainer from "@/src/components/styledComponents/StyledContainer";
import StyledTitle from "@/src/components/styledComponents/StyledTitle";
import StyledButton from "@/src/components/styledComponents/StyledButton";
import { router } from "expo-router";

export default function StaledComponetsScreen() {
  const goToHome = () => {
    router.push("/drawer/");
  };

  return (
    <StyledContainer color="#be89dd">
      <StyledTitle color="#43f6c0">Styled Components</StyledTitle>
      <StyledButton onPress={goToHome} color="#e4e4e4" bgColor="#ff7b00">
        Styled Button - Go To Drawer Home
      </StyledButton>
    </StyledContainer>
  );
}
