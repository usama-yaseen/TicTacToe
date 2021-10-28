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

          //To Add A 'O' or 'X'
          props.Field.changeField(props.index, props.Player.getPlayer)
          //To Change Turn
          props.Player.changePlayer(props.Player.getPlayer);
          //To Check For A Win
          var checkWin = props.Field.getField;

          if ((checkWin[0] == checkWin[1]) && (checkWin[1] == checkWin[2]) && checkWin[0] != "") {
            if (checkWin[0] == "O") {
              console.log('Player 1 Wins! From 1');
            }
            else {
              console.log("Player 2 Wins! From 1")
            }
          }
          else if ((checkWin[2] == checkWin[4]) && (checkWin[2] == checkWin[6]) && checkWin[2] != "") {
            if (checkWin[0] == "O") {
              console.log('Player 1 Wins! From 2');
            }
            else {
              console.log("Player 2 Wins! From 2")
            }
          }
          else if ((checkWin[0] == checkWin[3]) && (checkWin[0] == checkWin[6]) && checkWin[0] != "") {
            if (checkWin[0] == "O") {
              console.log('Player 1 Wins! From 3');
            }
            else {
              console.log("Player 2 Wins! From 3")
            }
          }
          else if ((checkWin[0] == checkWin[4]) && (checkWin[0] == checkWin[8]) && checkWin[0] != "") {

            if (checkWin[0] == "O") {
              console.log('Player 1 Wins! From 4');
            }
            else {
              console.log("Player 2 Wins! From 4")
            }
          }
          else if ((checkWin[1] == checkWin[4]) && (checkWin[1] == checkWin[7]) && checkWin[1] != "") {
            if (checkWin[1] == "O") {
              console.log('Player 1 Wins! From 5');
            }
            else {
              console.log("Player 2 Wins! From 5")
            }
          }
          else if ((checkWin[2] == checkWin[5]) && (checkWin[2] == checkWin[8]) && checkWin[2] != "") {
            if (checkWin[2] == "O") {
              console.log('Player 1 Wins! From 6');
            }
            else {
              console.log("Player 2 Wins! From 6")
            }
          }
          else if ((checkWin[3] == checkWin[4]) && (checkWin[3] == checkWin[5]) && checkWin[3] != "") {
            if (checkWin[3] == "O") {
              console.log('Player 1 Wins! From 7');
            }
            else {
              console.log("Player 2 Wins! From 7")
            }
          }
          else if ((checkWin[6] == checkWin[7]) && (checkWin[6] == checkWin[8]) && checkWin[6] != "") {
            if (checkWin[6] == "O") {
              console.log('Player 1 Wins! From 8');
            }
            else {
              console.log("Player 2 Wins! From 8")
            }
          }
          else {
            console.log("No One Has Won Yet! Please Continue")
          }

        }}
        activeOpacity={0.5} style={styles.touchButton}>
        <Text style={styles.text}>{props.Field.getField[props.index]}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  const [getField, setField] = React.useState(["", "", "", "", "", "", "", "", "",]);
  const changeField = (x, y) => {
    let tempField = getField;
    tempField[x] = y;
    setField(tempField);
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
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ getField: getField, changeField: changeField }} index={0} />
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ getField: getField, changeField: changeField }} index={1} />
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ getField: getField, changeField: changeField }} index={2} />
      </View>
      <View style={styles.ROW}>
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ getField: getField, changeField: changeField }} index={3} />
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ getField: getField, changeField: changeField }} index={4} />
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ getField: getField, changeField: changeField }} index={5} />
      </View>
      <View style={styles.ROW}>
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ getField: getField, changeField: changeField }} index={6} />
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ getField: getField, changeField: changeField }} index={7} />
        <NumButton Player={{ getPlayer: getPlayer, changePlayer: changPlayer }} Field={{ getField: getField, changeField: changeField }} index={8} />
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
