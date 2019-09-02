import React from 'react';
import {View, Text, TextInput, StyleSheet, Button, ActivityIndicator} from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';
export default class LoginScreen extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            isLoading: false,
            message: "",
        }
    }

    componentDidMount(){
        var firebaseConfig = {
            apiKey: "AIzaSyBbBpX_g56aSoVIMfKOVyqt72_MoYcLZOw",
            authDomain: "minhasseries-8b1fb.firebaseapp.com",
            databaseURL: "https://minhasseries-8b1fb.firebaseio.com",
            projectId: "minhasseries-8b1fb",
            storageBucket: "",
            messagingSenderId: "546958515754",
            appId: "1:546958515754:web:2b38fda6c8f32808"
        };
        firebase.initializeApp(firebaseConfig);     
    }
    
    onChangeHandler(field, valor){
        this.setState({
            [field]: valor
        })
    }

    processLogin(){
        this.setState({isLoading : true});

        const {email, password} = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                this.setState({message: "Login realizado com sucesso!"})
                //console.log('OK! Logado', user);
            })
            .catch(error => {
                this.setState({message: this.getMessageByError(error.code)})
                //console.Log('ERROR', error);
        })
        .then( () => {
            this.setState({isLoading : false});
            }
        )
    }

    getMessageByError(code){
        switch(code){
            case "auth/user-not-found":
                return "E-mail inexistente"
            case "auth/wrong-password":
                return "Senha incorreta"
            default:
                return "Erro desconhecido";
        }
    }

    renderButton() {
        if(this.state.isLoading)
            return <ActivityIndicator />
        return(
            <Button 
                title='Entrar'
                onPress={() => this.processLogin()}
            />
        );
    }

    renderMessage() {
        const { message } = this.state;
        if(!message)
            return null;
        
        return(
            <View>
                <Text>{message}</Text>
            </View>
        )
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

                {this.renderButton()}

                {this.renderMessage()}
                
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