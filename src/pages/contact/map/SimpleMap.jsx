/* eslint-disable react/prop-types */
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = () => {
    const defaultProps = {
        center: {
            lat: 23.8041,
            lng: 90.4152
        },
        zoom: 9
    };
    return (
        <div style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="Furni-Track"
                    />
            </GoogleMapReact>
        </div>
    );
};

export default SimpleMap;