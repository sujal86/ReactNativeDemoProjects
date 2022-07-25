import React, {Component, useRef} from 'react';
import {View, Image, Text} from 'react-native';

import Scanner from 'react-native-rectangle-scanner';

class RectangleScan extends Component {
  handleOnPictureProcessed = ({croppedImage, initialImage}) => {
    this.props.doSomethingWithCroppedImagePath(croppedImage);
    this.props.doSomethingWithOriginalImagePath(initialImage);
  };

  onCapture = () => {
    this.camera.current.capture();
  };

  render() {
    return (
      //<View>
      // <Text>Hello</Text>
      <Scanner
        onPictureProcessed={this.handleOnPictureProcessed}
        ref={this.camera}
        style={{flex: 1}}
      />
      // </View>
    );
  }
}

export default RectangleScan;
