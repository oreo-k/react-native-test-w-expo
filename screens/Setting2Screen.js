import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';


class Setting2Screen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>This is Setting2Screen</Text>
        <Button 
          title="Go to HomeScreen"
          onPress={()=> this.props.navigation.navigate("home")}
        />
      </View>
    );
  }
}


export default Setting2Screen;
