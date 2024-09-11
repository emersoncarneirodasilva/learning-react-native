import Container from "@/src/components/Container";
import StyledTitle from "@/src/components/styledComponents/StyledTitle";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface PostProps {
  id: number;
  title: string;
  body: string;
}

const url = "https://jsonplaceholder.typicode.com/posts";

const RenderPost = ({ id, title, body }: PostProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.id}>Id: {id}</Text>
      <Text style={styles.title}>Title: {title}</Text>
      <Text style={styles.text}>{body}</Text>
    </View>
  );
};

export default function AxiosExample() {
  const [posts, setPosts] = useState<PostProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fecthPost = async () => {
    try {
      const res = await axios.get(url);

      setPosts(res.data);
    } catch (error) {
      setError(`Ocorreu o erro: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthPost();
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
        <Text style={styles.error}>{error}</Text>
      </Container>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StyledTitle>Axios Example</StyledTitle>

      {posts && (
        <FlatList
          data={posts ?? []}
          renderItem={({ item }) => (
            <RenderPost id={item.id} title={item.title} body={item.body} />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: StatusBar.currentHeight || 0,
  },
  card: {
    display: "flex",
    rowGap: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 5,
    marginHorizontal: 15,
    borderRadius: 5,
    backgroundColor: "#949de9",
  },
  id: {
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
  },
  error: {
    fontSize: 16,
    color: "#ff0000",
  },
});
