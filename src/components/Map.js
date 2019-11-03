import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
    width: '40%',
    height: '100%'
}

class MapWrapper extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {}
    }

    onMarkerClick = (props, marker) => {
            this.setState({
                showingInfoWindow: true,
                activeMarker:  marker
            })
    }

    onMapClick = (props) => {
        if(this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker:  null
            })
        }
    }

    render() {

        return (
            <div>
                <div style={{height:'100%', width: '50%'}}>
                    <Map
                    google={this.props.google}
                    onClick={this.onMapClick}
                    style={mapStyles}
                    center={{
                        lat: 36.628,
                        lng: -82.13
                    }}
                    zoom={16}
                    fullscreenControl={false}
                    mapTypeControl={false}
                    >
                    <Marker
                    position={{
                        lat: 36.628,
                        lng: -82.13
                    }}
                    onClick={this.onMarkerClick}
                    title='LifeSpring Bristol'
                    name='LifeSpring Bristol'

                    />
                     <InfoWindow
                    visible={this.state.showingInfoWindow}
                    marker={this.state.activeMarker}
                     >
                         <div>
                            <h6><strong>LifeSpring Bristol</strong></h6>
                            <h6>Holiday Inn Conference Center.</h6>
                            <h6>Parking Available in the Back</h6>
                             </div>
                             </InfoWindow>

                    </Map>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCRiaQjHWcm_bt_QbVrmMUVvxxdxg82JGU'
})(MapWrapper)
