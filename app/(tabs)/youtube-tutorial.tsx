import { StyleSheet, SafeAreaView, Pressable, Text } from 'react-native';

import { Field } from '@/components/Field'; 
import { TeamStats } from '@/components/TeamStats';

export default function TabYoutubeTutorial
() {
  const viewPlayers = () => {
    console.warn('View players');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />

      <Field />

      <Pressable onPress={viewPlayers} style={styles.buttonContainer}
      >
        <Text>View players</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#72CC5E",
  },
  buttonContainer: {
    backgroundColor: "orange", 
    width: "90%", 
    margin: 20, 
    padding: 10, 
    alignItems: "center", 
    borderRadius: 50,
    marginTop: "auto",
  },
});
