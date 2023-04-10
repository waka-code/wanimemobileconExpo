import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Link } from "react-router-native";

export default function Menu() {
  return (
    <View style={styles.containermenu}>
      <Link to={`/*`} >
        <Text style={styles.navItem}>HOME</Text>
      </Link>
      <Link to={`/CONTROL PANEL`}>
        <Text style={styles.navItem}>CONTROL PANEL</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  containermenu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    padding: "2px",
    height: "100vh",
    width: "100vw",
    backgroundColor: "rgba( 120, 120, 120, 0.25 )",
    backdropFilter: "blur(4px)",
    webkitBackdropFilter: "blur(4px)",
  },
  navItem: {
  },
});
