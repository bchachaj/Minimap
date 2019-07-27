import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native'

import ImageZoom from 'react-native-image-pan-zoom';

import resolveAssetSource from 'resolveAssetSource';


var mapURI = "./../../../static/map2.jpeg";
import image from './../../../static/map2.jpeg';
// const { width, height } = resolveAssetSource(image);

export default class MapTile extends Component {
    state = {
        imgWidth: 100, 
        imgHeight: 100
    }

    componentDidMount() {
        const { width, height } = resolveAssetSource(image);
        this.setState({ imgWidth: width, imgHeight: height })

        // Image.getSize(mapURI, (width, height) => { this.setState({ imgWidth: width, imgHeight: height }) });
    }


    // onload, scale zoom wrapper to image width / dimensions.width 
    
    
    render() {
        console.log(this.state)
        return (
            <View>
                <ImageZoom cropWidth={Dimensions.get('window').width }
                    cropHeight={Dimensions.get('window').height}
                    imageWidth={this.state.imgWidth}
                    imageHeight={this.state.imgHeight}
                    panToMove={true}
                    pinchToZoom={true}
                    minScale={0.1}
                    enableCenterFocus={false}
                    enableSwipeDown={true}
                    supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
                    style={ styles.zoom } 
                    >
                    <Image
                        source={require('./../../../static/map2.jpeg')}
                    />
                </ImageZoom>
            </View>
        )   
    }
}


var styles = StyleSheet.create({
    zoom: {
        // borderWidth: 3,
        // borderRadius: 2,
        // borderColor: 'blue',
    },
    imageContainer: {
        width: "100%",
        height: "100%",
        maxWidth: "100%"
    },
    image: {
        flex: 1,
        width: 1080,
        height: 1440
    }
});