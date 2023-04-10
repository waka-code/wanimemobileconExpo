import { View, StyleSheet } from "react-native";
import { NativeRouter } from "react-router-native";
import Nav from "./component/routers/navbar/Nav";
import LRouter from "./component/routers/LRouter";


export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Nav />
        <LRouter />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "0",
    padding:"0",
    boxSizing: 'border-box',
  }

});