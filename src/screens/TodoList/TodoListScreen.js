import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../../redux/counterActions';

const TodoListScreen = () => {
    const [task, setTask] = useState('');
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if (task.trim()) {
            dispatch(addTodo(task));
            setTask('');
        }
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>To-Do List</Text>
            <TextInput
                style={styles.input}
                placeholder='Add a new task'
                value={task}
                onChangeText={(text) => setTask(text)}
            />
            <Button title='Add Task' onPress={handleAddTodo}></Button>

            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <Text>{item.text}</Text>
                        <TouchableOpacity onPress={() => handleDeleteTodo(item.id)}>
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default TodoListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginTop: 10
    },
    deleteText: {
        color: 'red'
    }
})