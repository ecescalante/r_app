import React from 'react'
import {
    StyleSheet, 
    Text,
    TouchableOpacity,
    View,
    Alert,
    ToastAndroid,
    Keyboard
} from 'react-native';
import {  Hoshi } from 'react-native-textinput-effects';

export class RegForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name    : '',
            address : ''
        }
        this.nameRef = React.createRef();
        this.addRef = React.createRef();
    }


    submitAlert() {
        if(this.state.name == ''){
            this.nameRef.current.focus();
        }else if(this.state.address == ''){
            this.addRef.current.focus();
        }else{
            this.submitWeb()
        }
    }

    clear_field(){
        // this.nameRef.current.clear();
        // this.addRef.current.clear();
        this.setState({ name: "",
                        address: ""
                     })
    }

    submitWeb(){
        Keyboard.dismiss()
        fetch('https://3c3web.000webhostapp.com/regApi.php', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            sc: 'RegSC',
            form: 'userInsert',
            name: this.state.name,
            address: this.state.address
        })
    
        }).then((response) => response.json())
        .then((responseJson) => {
            // Showing response message coming from server after inserting records.
            if(responseJson == 200){
                ToastAndroid.show(
                    "Registration Complete",
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                  );
            }
            this.clear_field()
        }).catch((error) => {
            ToastAndroid.show(
                "Connection Failed Please Try Again",
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
              );
        });
    }
    
    render() {
        return (
            <View style={styles.regform}>
                <Text style={styles.header}>Registration</Text>
                <Hoshi
                    label={'Name'}
                    // this is used as active border color
                    borderColor={'#b76c94'}
                    // active border height
                    borderHeight={3}
                    inputPadding={16}
                    // this is used to set backgroundColor of label mask.
                    // please pass the backgroundColor of your TextInput container.
                    backgroundColor={'#fff'}
                    value={this.state.name}
                    ref={this.nameRef}
                    onChangeText={(text) => this.setState({name: text})}
                />
                   <Hoshi
                    label={'Address'}
                    // this is used as active border color
                    borderColor={'#b76c94'}
                    // active border height
                    borderHeight={3}
                    inputPadding={16}
                    // this is used to set backgroundColor of label mask.
                    // please pass the backgroundColor of your TextInput container.
                    backgroundColor={'#fff'}
                    value={this.state.address}
                    ref={this.addRef}
                    onChangeText={(text) => this.setState({address: text})}
                />
                <TouchableOpacity
                    onPress={() => this.submitAlert()}
                    style={styles.button} 
                >
                <Text style={styles.label}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 34,
        fontWeight: "bold",
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
    },
    label: {
        fontSize: 21,
        textAlign: "center",
        fontWeight: "bold",
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: "green",
        padding: 20,
        borderRadius: 50,
    },
});