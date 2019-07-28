import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ScrollView, Image, StyleSheet, Dimensions } from 'react-native'

import ImageZoom from 'react-native-image-pan-zoom';
import resolveAssetSource from 'resolveAssetSource';

import MarkerGrid from './../Overlay/MarkerGrid';

export default class MapTile extends Component {

    // NOTE: 'require' will only accept a path (string), can't pass in a variable
    constructor(props) {
        super(props)
        // console.log('constructProps', props)
        const { imgHeight, imgWidth, imgSrc, initMapScale } = props.mapData;
        // console.log(imgHeight, imgWidth, imgSrc);
        console.log(props.mapData)

        this.state = {
            imgWidth,
            imgHeight,
            initMapScale: 1,
            imgSrc
        }
    }

    componentDidMount() {
        // console.log('mountProps', this.props );

        const { width, height } = resolveAssetSource(require('./../../../static/map1.jpeg'));
        console.log('width', width);
        const initMapScale = (Dimensions.get('window').width / this.state.imgWidth);
        this.setState({ initMapScale })
    }


    render() {
        // console.log(this.state.imgSrc);
        const sourceString = this.state.imgSrc; 
        console.log(sourceString)
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

                    <MarkerGrid></MarkerGrid>

                    {/* <Image
                        source={require('./../../../static/map1.jpeg')}
                    /> */}
                    <Image
                        source={sourceString}
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


// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         data: ownProps.data,
//     }
// };



// export default connect(null, mapDispatchToProps)(MapTile);