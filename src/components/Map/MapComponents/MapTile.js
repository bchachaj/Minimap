import React, { Component } from 'react'
import { Text, ScrollView, View, Image, StyleSheet, Dimensions } from 'react-native'

import ImageZoom from 'react-native-image-pan-zoom';
import resolveAssetSource from 'resolveAssetSource';

import MarkerGrid from './../Overlay/MarkerGrid';

var mapURI = "./../../../static/map1.jpeg";
import image from './../../../static/map1.jpeg';


export default class MapTile extends Component {
    state = {
        imgWidth: 100,
        imgHeight: 100,
        initMapScale: 1
    }

    componentDidMount() {
        const { width, height } = resolveAssetSource(image);
        const initMapScale = (Dimensions.get('window').width / width);
        this.setState({ imgWidth: width, imgHeight: height, initMapScale })
    }


    render() {
        const addViewMargin = (this.state.imgHeight * 0.05);
        const calcViewStyles = { marginBottom: addViewMargin, height: this.state.imgHeight * 1.1, marginTop: -65 };

        return (
            <ScrollView style={[styles.viewStyles, calcViewStyles]}>
                <ImageZoom cropWidth={Dimensions.get('window').width}
                    cropHeight={Dimensions.get('window').height}
                    imageWidth={this.state.imgWidth}
                    imageHeight={this.state.imgHeight}
                    panToMove={true}
                    pinchToZoom={true}
                    minScale={this.state.initMapScale * .75}
                    maxScale={this.state.initMapScale * 4}
                    enableCenterFocus={false}
                    supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
                    style={styles.zoom}
                    onMove={(e) => (console.log(e))}
                    onLongPress={(e) => (this.setState({ initMapScale: this.state.initMapScale }))}
                    centerOn={{ x: 0, y: 0, scale: this.state.initMapScale, duration: 1 }}
                >
                    {/* <View style={styles.overlayTest}>
                        <Text style={styles.markerPosTest}>NEST TEST</Text>
                    </View> */}

                    <MarkerGrid></MarkerGrid>

                    <Image
                        source={require('./../../../static/map1.jpeg')}
                    />
                </ImageZoom>
            </ScrollView>
        )
    }
}


var styles = StyleSheet.create({
    viewStyles: {
        marginBottom: 10,
        marginTop: -50,
        zIndex: 0,
    },
    zoom: {
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