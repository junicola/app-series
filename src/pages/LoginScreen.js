import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
        }
    }
    
    onChangeHandler(field, valor){
        this.setState({
            [field]: valor
        })
    }
   

    render() {
        return(
            <View>
                <FormRow>
                    <TextInput
                        placeholder="E-mail: user@provider.com"
                        style={styles.textInput}
                        value={this.state.email}
                        onChangeText={valor => {
                            this.onChangeHandler('email', valor)
                        }}
                    />
                </FormRow>
                <FormRow>
                    <TextInput 
                        placeholder="Enter your password here"
                        style={styles.textInput}
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText = {valor => {
                            this.onChangeHandler('password',valor)
                        }}
                    />
                </FormRow>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
    }
})