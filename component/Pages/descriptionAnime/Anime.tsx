import React from "react";
import { Text, View, TextInput, Image, StyleSheet } from "react-native";
import useAnime from "./useAnime";

export default function Anime() {
  const { animesDescript } = useAnime();
  return (
    <View style={styles.animes}>
      <Image source={{ uri: animesDescript?.img }} style={styles.imganime} />
      <View style={styles.text}>
      <Text>{animesDescript?.title}</Text>
      <Text>{animesDescript?.gender}</Text>
      <Text style={styles.parrafe}>{animesDescript?.description}</Text>
      <Text>{animesDescript?.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animes: {
    height: "100%",
    width:"100vw",
    background: "rgba( 71, 71, 71, 0.25 )",
    border: " 1px solid rgba( 255, 255, 255, 0.18 )",
  },
  imganime: {
    height: "50vh",
    margin:"50px"
  },
  parrafe: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    width: "250px",
    whiteSpace: "nowrap",
  },
  text:{
    display:"flex",
    alignItems:"center"
  }
});
