import React from 'react';
import {
  StyleSheet,
  ImageBackground
} from 'react-native';

import { 
  Form, 
  Item, 
  Input, 
  Container, 
  Content, 
  Button, 
  Text 
} from 'native-base';

export default function LoginScreen(props) {
  const { email, setEmail } = props
  return (
    <ImageBackground
      source={{
        uri: "http://coloradoinsurance247.net/wp-content/uploads/2017/05/home-insurance.jpg"
      }}
      style={{ 
        width: '100%', 
        flex: 1 
      }}
    >
      <Container 
        style={{ backgroundColor: 'rgba(255,255,255,0.9), padding: 20' }}
      >
        <Content>
            <Form 
              style={styles.form}
            >
              <Item>
                <Input 
                  onChangeText={(email) => setEmail(email)}
                  placeholder="Email" 
                />
              </Item>
              <Item last>
                <Input 
                  secureTextEntry={true}
                  placeholder="Password" />
              </Item>
              <Button
                rounded
                style={styles.button}
                onPress={() => {
                  const { navigate } = props.navigation;
                  navigate('App');
                }}
              >
                <Text style={styles.textButton}>Sign In !</Text>
              </Button>
            </Form>
        </Content>
      </Container>
    </ImageBackground>
  );
}
LoginScreen.navigationOptions = {
  title: 'Login'
};
const styles = StyleSheet.create({
  form: {
    width: '100%',
    height: '100%',
    marginTop: '50%',
  },
  button: {
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 15,
    width: '30%',
    display: 'flex',
    justifyContent: 'center'
  },
  textButton: {
  }
});