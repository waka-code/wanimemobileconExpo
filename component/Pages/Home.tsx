import { Text, View, TextInput, Image, StyleSheet } from "react-native";
import useApi from "../customs/useApi";
import { Link } from "react-router-native";

export default function Home() {
  const { anime, callData, handleKeyDonw } = useApi();

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          onChangeText={callData}
          onKeyPress={handleKeyDonw}
        />
      </View>
      <View>
        {anime.map((animes) => {
          return (
            <View key={animes._id} style={styles.boxanime}>
              {animes.img ? (
                <Link to={`/${animes._id}`}>
                  <Image source={{ uri: animes.img }} style={styles.boximg} />
                </Link>
              ) : (
                <Text>Cargando imagen...</Text>
              )}
              <Text>{animes.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100%",
    padding: "10px",
  },
  boxanime: {
    margin: "12px",
    textAlign: "center",
    height: "auto",
    background: "rgba( 71, 71, 71, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    webkitBackdropFilter: "blur( 4px )",
    border: " 1px solid rgba( 255, 255, 255, 0.18 )",
    width: "95%",
  },
  boximg: {
    height: "30vh",
  },
  input: {
    backgroundColor: "rgba( 71, 71, 71, 0.25 )",
    width: "80vw",
    margin: "auto",
    height: "4vh",
    padding: "5px",
  },
});
