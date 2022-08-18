/* eslint-disable radix */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Button} from 'react-native';

export default props => (
    <>
    <View style={{flex:1}}>
        <View>
            {props.voltar ? <Button
                                title="Voltar"
                                onPress={() => {props.navigation.goBack()}}/> : false}
            {props.avancar ? <Button
                                title="Avançar"
                                onPress={() => {
                                    props.navigation.push(
                                        props.avancar,
                                        {
                                            numero: parseInt(Math.random() * 100),
                                        }
                                        )
                                        }}/> : false}
        </View>
        <View style={{flex:1}}>
            {props.children}
        </View>
    </View>
    </>
)