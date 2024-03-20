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

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    []
  );

  // render
  const renderItem = useCallback(
    ({ item } : {item: any}) => (
      /*
      <View style={styles.container}>
        <Text>{item}</Text>
      </View>
      */
      
      <PlayerListItem player={item} />
      
    ), 
    []
  );

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
        <BottomSheetFlatList
            data={players}
            //data={data}
            keyExtractor={(i) => i.id}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
          />
          {/*<PlayerListItem player={players[0]} />*/}
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
