import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function StarRating(){
    return(
        <View style={styles.row}>
            <TouchableOpacity> 
                <Image source={require('../images/single_star_outlined.svg')} style={{width:20, height:20,}}/>
            </TouchableOpacity>
            <TouchableOpacity> 
                <Image source={require('../images/single_star_outlined.svg')} style={{width:20, height:20,}}/>
            </TouchableOpacity>
            <TouchableOpacity> 
                <Image source={require('../images/single_star_outlined.svg')} style={{width:20, height:20,}}/>
            </TouchableOpacity>
            <TouchableOpacity> 
                <Image source={require('../images/single_star_outlined.svg')} style={{width:20, height:20,}}/>
            </TouchableOpacity>
            <TouchableOpacity> 
                <Image source={require('../images/single_star_outlined.svg')} style={{width:20, height:20,}}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    row:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    }
});