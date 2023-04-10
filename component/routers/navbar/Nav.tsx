import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Menu from "./Menu";

export default function Nav() {
  const [nav, setNav] = useState<boolean>(false);

  const showNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <View onTouchStart={showNav} style={styles.container}>
        <span style={styles.container.span}></span>
        <span style={styles.container.span}></span>
        <span style={styles.container.span}></span>
      </View>
      {nav && <Menu />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "2px",
    span: {
      width: "30px",
      height: "4px",
      background: "#000000",
      marginBottom: "5px",
      transformOrigin: "5px 0px",
      transition: "all 0.2s linear",
    },
  },
});
