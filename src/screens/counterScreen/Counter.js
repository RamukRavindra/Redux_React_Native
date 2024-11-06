import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from '../../redux/counterActions';

const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 21, fontWeight: '700' }}>Count : {count}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => dispatch(incrementCounter())} style={styles.Button}>
                    <Text style={styles.buttonText}>Increment</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(decrementCounter())} style={styles.Button}>
                    <Text style={styles.buttonText}>Decrement</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#66c2ff',
        marginTop: 15,
        marginHorizontal: 10,
        borderRadius: 6
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '700',
        padding: 10,
        color: "#fff"
    }
})