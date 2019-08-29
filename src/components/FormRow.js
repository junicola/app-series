import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FormRow = (props) => {
    const { children } = props;

    return(
        <View>
            {children}
        </View>
    )
};

const style = StyleSheet.create({

});

export default FormRow;