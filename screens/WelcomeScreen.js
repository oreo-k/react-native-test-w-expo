import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';
import {Button} from 'react-native-elements'


const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDE_DATA = [
    { title: 'Step: 1', text: 'Let\'s try this out this app!!', uri: require("../assets/image01.png") },
    { title: 'Step: 2', text: 'Hit a Start button and start virtual walk with your dog!!', uri: require("../assets/image02.png") },
    { title: 'Step: 3', text: 'Hit a Finish button and end your walk!', uri: require("../assets/image01.png") },
    { title: 'Step: 4', text: 'Check your walk history and your dog\'s health!', uri: require("../assets/image02.png")}
  ];
  

class WelcomeScreen extends React.Component {

  onStartButtonPress = () => {
    this.props.navigation.navigate('main');
  }

  //最後の画面にのみボタンを表示する
  renderLastButton(index){
    if (index === SLIDE_DATA.length-1){
      return (
        <Button
          style={{padding:10}}
          buttonStyle={{backgroundColor: 'deepskyblue'}}
          title="Let's get it started!"
          onPress={this.onStartButtonPress}
        />
        );
    }
  }

  //スライドを表示する
  renderSlides() {
    return SLIDE_DATA.map((slide, index) => {
      return (
        <View
          key={index}
          style={styles.slideStyle}
        >
            <View style={styles.containerStyle}>
                <Text style={styles.textStyle}>{slide.title}</Text>
                <Text style={styles.textStyle}>{slide.text}</Text>
            </View>
            <Image 
                style={{ flex:2 }}
                resizeMode="contain"
                source={slide.uri}
            />
            <View style={styles.containerStyle}>
              {this.renderLastButton(index)}
              <Text style={styles.textStyle}>
                {index + 1} / 4
              </Text>
            </View>
        </View>
      );
    });
  }

  //スライドを表示する
  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        backgroundColor: 'royalblue',
    },
    containerStyle: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 30,
        color: 'white',
        padding: 5,
    },
});

export default WelcomeScreen;
