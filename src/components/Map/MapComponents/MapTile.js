import React, { Component } from 'react'
import { ScrollView, Image, StyleSheet, Dimensions, View } from 'react-native'

import ImageZoom from 'react-native-image-pan-zoom';
import MarkerGrid from './../Overlay/MarkerGrid';

const img = require('./../../../static/map1.jpeg'); 

export default class MapTile extends Component {

    constructor(props) {
        super(props)
        // const { imgHeight, imgWidth, imgSrc, initMapScale } = props.mapData;

        // this.state = {
        //     imgWidth,
        //     imgHeight,
        //     initMapScale,
        //     imgSrc
        // }
        this.state = {
            imgHeight: 2400,
            imgWidth: 1800,
            initMapScale: 0.32833333333333334,
            imgSrc: `${require('./../../../static/map1.jpeg')}`

        }
    }

    placeMarker = (e) => { 
        console.log(e);
    }

    render() {
        
        const { imgHeight, imgSrc, imgWidth, initMapScale } = this.state; 
        const addViewMargin = (imgHeight * 0.05);
        const calcViewStyles = { marginBottom: addViewMargin, height: imgHeight * 1.1, marginTop: -65 };

        return (
            <View style={[styles.viewStyles, calcViewStyles]}>
                <ImageZoom cropWidth={Dimensions.get('window').width}
                    cropHeight={Dimensions.get('window').height}
                    imageWidth={imgWidth}
                    imageHeight={imgHeight}
                    panToMove={true}
                    pinchToZoom={true}
                    minScale={initMapScale * .75}
                    maxScale={initMapScale * 4}
                    enableCenterFocus={false}
                    supportedOrientations={['portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right']}
                    style={styles.zoom}
                    onMove={(e) => (console.log(e))}
                    onPress={(e) => this.placeMarker(e)}
                    centerOn={{ x: 0, y: 0, scale: initMapScale, duration: 1 }}
                >

                    <MarkerGrid></MarkerGrid>

                    <Image
                    // Have to declare width/height for network or local images 
                        style={{ width: imgWidth, height: imgHeight}}
                        // source={{ uri: imgSrc.uri }}  
                        source={require('./../../../static/map1.jpeg')}  
                    />
                </ImageZoom>
            </View>
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

