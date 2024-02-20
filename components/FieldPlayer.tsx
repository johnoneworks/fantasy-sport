import React from "react";
import { Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export function FieldPlayer({ position, player }: { position: string, player: null | string }) {
    return (
        <View style={{ alignItems: "center" }}>
            <FontAwesome5 
                name="tshirt" 
                size={35} 
                color={player ? "#d170db" : "#5c5cbb"} 
            />
                <Text 
                style={{ 
                    backgroundColor: "#333333bb", 
                    color: "white", 
                    fontWeight: "bold",
                    fontSize: 12,
                    padding: 2, 
                    paddingHorizontal: 7, 
                }}
                >
                {position}
                </Text>
        </View>
    );
}