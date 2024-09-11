import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

interface MovieProps {
  year: string;
  title: string;
}

interface MoviesProps extends MovieProps {
  id: number;
}

const movies: MoviesProps[] = [
  { id: 1, year: "1994", title: "Um Sonho de Liberdade" },
  { id: 2, year: "1972", title: "O Poderoso Chefão" },
  { id: 3, year: "2008", title: "Batman: O Cavaleiro das Trevas" },
  { id: 4, year: "1974", title: "O Poderoso Chefão II" },
  { id: 5, year: "1957", title: "12 Homens e uma Sentença" },
  { id: 6, year: "1993", title: "A Lista de Schindler" },
  { id: 7, year: "2003", title: "O Senhor dos Anéis: O Retorno do Rei" },
  { id: 8, year: "1994", title: "Pulp Fiction" },
  { id: 9, year: "2001", title: "O Senhor dos Anéis: A Sociedade do Anel" },
  { id: 10, year: "1966", title: "Três Homens em Conflito" },
];

const Movie = ({ title, year }: MovieProps) => (
  <View style={styles.item}>
    <Text style={styles.text}>Título: {title}</Text>
    <Text style={styles.text}>Ano: {year}</Text>
  </View>
);

export default function FlatListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => <Movie title={item.title} year={item.year} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f1b883",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 18,
  },
});
