import React from "react";
import {Text, View, TouchableOpacity} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import styles from '../styles';

export function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title_24_bold_white}>MyPedreiro</Text>
            <Ionicons name='md-menu' size={32} color='#6f6f6f' />
        </View>

    );
}