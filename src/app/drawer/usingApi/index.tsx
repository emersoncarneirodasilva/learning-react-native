import Container from "@/src/components/Container";
import StyledButton from "@/src/components/styledComponents/StyledButton";
import StyledTitle from "@/src/components/styledComponents/StyledTitle";
import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, StyleSheet, ActivityIndicator } from "react-native";

interface UserProps {
  name: string;
  bio: string;
  avatar_url: string;
}

export default function UsingApi() {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const goToHome = () => {
    router.push("/");
  };

  const fetchUseGitHub = async () => {
    try {
      const res = await axios.get(
        "https://api.github.com/users/emersoncarneirodasilva"
      );
      setUser(res.data);
    } catch (error) {
      setError(`Ocorreu o erro: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUseGitHub();
  }, []);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#723bf1" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Text style={styles.errorText}>{error}</Text>
      </Container>
    );
  }

  return (
    <Container>
      <StyledTitle color="#1c1c1c">Using API</StyledTitle>
      {user && (
        <>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userBio}>{user.bio}</Text>
          <Image style={styles.userAvatar} source={{ uri: user.avatar_url }} />
        </>
      )}
      <StyledButton bgColor="#723bf1" color="#fafafa" onPress={goToHome}>
        Go To Home
      </StyledButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  userName: {
    fontWeight: "bold",
    fontSize: 22,
    marginTop: 10,
    color: "#353535",
  },
  userBio: {
    fontSize: 15,
    textAlign: "justify",
    lineHeight: 21,
  },
  userAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
  errorText: {
    fontSize: 16,
    color: "red",
  },
});
