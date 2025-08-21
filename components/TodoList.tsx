import React from "react";
import { ScrollView } from "react-native";
import TodoItem from "./TodoItem";
type Props = {
    items: string[];
    onDelete: (index: number) => void;
};
export default function TodoList({ items, onDelete}: Props) {
    return (
        <ScrollView>
            {items.map((item, idx) => (
                <TodoItem key={idx} text={item} onDelete={() => onDelete(idx)} />
            ))}
        </ScrollView>
    );
}