import React from "react";
import { 
    ImageBackground, 
    View 
} from 'react-native';

import { FieldPlayer } from '@/components/FieldPlayer';
import field from '@/assets/images/field.jpg';

const players: { [key: string]: null[] } = { 
    FWD: [null, null, null],
    MID: [null, null, null],
    DEF: [null, null, null, null],
    GKC: [null],
  };

export function Field() {
    return (
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
              <FieldPlayer position={position} player={player} />
            ))}
          </View>
        ))}
      </ImageBackground>
    );
}