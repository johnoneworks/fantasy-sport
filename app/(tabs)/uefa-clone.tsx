import React, { useCallback, useRef, useMemo } from 'react';
import { StyleSheet, SafeAreaView, Pressable, Text, View } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import { Field } from '@/components/Field'; 
import { TeamStats } from '@/components/TeamStats';
import { PlayerListItem } from '@/components/PlayerListItem';
import { players } from "@/assets/data/players";



export default function UEFAClone() {
  const playersBottomSheet = useRef<BottomSheet>(null);

  const viewPlayers = () => {
    playersBottomSheet.current?.expand();
  };

  const snapPoints = ["50%", "70%"];

  return (
    <SafeAreaView style={styles.container}>
      <TeamStats />

      <Field />

      <Pressable onPress={viewPlayers} style={styles.buttonContainer}
      >
        <Text>View players</Text>
      </Pressable>

      <BottomSheet
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        ref={playersBottomSheet}
      >
        <View style={styles.contentContainer}>
          {/*
          <BottomSheetFlatList
            data={players}
            keyExtractor={(i) => i}
            renderItem={renderItem}
          />
  */}
          {<PlayerListItem player={players[0]} />}
        </View>
      </BottomSheet>
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
  contentContainer: {

  },
});
