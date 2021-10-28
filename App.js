import React from "react";
import {
  StyleSheet,
  Text,
  NativeModules,
  View,
  TouchableOpacity,
} from "react-native";
const { StatusBarManager } = NativeModules;

const NumButton = (props) => {
  // console.log(typeof props.index);
  return (
    <View >
      <TouchableOpacity
        onPress={() => {
          props.Field.changeField(props.index, props.Player.getPlayer)
          props.Player.changePlayer(props.Player.getPlayer);
        }}
        activeOpacity={0.5} style={styles.touchButton}>
        <Text style={styles.text}>{props.Field.geField[props.index]}</Text>
      </TouchableOpacity>s
    </View>
  );

};

export default function App() {
  const [getField, setField] = React.useState(["1", "2", "3", "4", "5", "6", "7", "8", "9",]);
  const changeField = (x, y) => {
    let tempField = getField;
    tempField[x] = y;
    console.log(tempField)
    setField(tempField);
    console.log(getField)
  }
  const [getPlayer, setPlayer] = React.useState("O");
  const changPlayer = (x) => {
    if (x == "O")
      setPlayer("X");
    else {
      setPlayer("O")
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.ROW}>
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ geField: getPlayer, changeField: changeField }} index={0} />
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ geField: getPlayer, changeField: changeField }} index={1} />
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ geField: getPlayer, changeField: changeField }} index={2} />
      </View>
      <View style={styles.ROW}>
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ geField: getPlayer, changeField: changeField }} index={3} />
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ geField: getPlayer, changeField: changeField }} index={4} />
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ geField: getPlayer, changeField: changeField }} index={5} />
      </View>
      <View style={styles.ROW}>
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ geField: getPlayer, changeField: changeField }} index={6} />
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ geField: getPlayer, changeField: changeField }} index={7} />
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ geField: getPlayer, changeField: changeField }} index={8} />
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'blue',
    marginTop: StatusBarManager.HEIGHT,
  },
  touchButton: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    backgroundColor: 'red',
  },
  ROW: {
    justifyContent: 'center',
    flexDirection: "row",
    width: "100%",
  },
  text: {
    fontSize: 40,
  },
});
