import { StyleSheet, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import EditScreenInfo from '@/components/EditScreenInfo';

import field from '@/assets/images/field.jpg';

const players: { [key: string]: null[] } = { 
  FWD: [null, null, null],
  MID: [null, null, null],
  DEF: [null, null, null, null],
  GKC: [null],
};

export default function TabYoutubeTutorial
() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        source={field}
        resizeMode="contain"
        style={{ 
          width: "100%", 
          aspectRatio: 2/3, 
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {Object.keys(players).map((position) => (
          <View 
            style={{ 
              flexDirection: "row", 
              justifyContent: "space-around", 
              width: "100%" 
            }}
          >
            {players[position].map((player) => (
              <div>
              <FontAwesome5 name="tshirt" size={35} color={player ? "#d170db" : "#5c5cbb"} />
              <Text>{position}</Text>
              </div>
            ))}
          </View>
        ))}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
