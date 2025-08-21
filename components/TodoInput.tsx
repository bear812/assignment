import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";


type Props = {
    onAdd: (text: string) => void;  
};
export default function TodoInput({onAdd}: Props) {
    const [text, setText] = useState("");
    const handlePress = () => {
        if (text.trim()) {
            onAdd(text);
            setText("");
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter a task"
                value={text}
                onChangeText={setText}
                style={styles.input}
                returnKeyType="done"
                onSubmitEditing={handlePress}
            />
            <Button title="Add" onPress={handlePress} color="#35043eff"/>
        </View>
    );
}const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    input:{
        flex: 1,
        borderWidth: 1,
        borderColor: "#000000ff",
        padding: 8,
        marginRight: 10,
        borderRadius: 5,
    }
});



