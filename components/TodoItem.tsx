import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Props = {
    text: string;
    onDelete: () => void;
};
export default function TodoItem({text, onDelete}: Props) {
    const [completed, setIsCompleted] = useState(false);
    return (
        <TouchableOpacity   onPressIn={() => setIsCompleted(!completed)}
    onLongPress={onDelete}>
            <View style={styles.item}>
                <Text style={[styles.text, completed && styles.completed]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}const styles = StyleSheet.create({
    item: {
        padding: 12,
        backgroundColor: 'rgba(135, 55, 118, 1)',
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 6,  
    },
    text: {
        fontSize: 16,
        color: "#fffafdff",
    },
    completed: {
        textDecorationLine: 'line-through',
        opacity: 0.5,
    },
});  
            
