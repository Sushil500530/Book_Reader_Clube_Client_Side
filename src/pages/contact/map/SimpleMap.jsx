/* eslint-disable react/prop-types */
import GoogleMapReact from 'google-map-react';
import { FaLocationDot } from "react-icons/fa6";

const AnyReactComponent = ({ text:Icon }) => <div className='text-3xl font-bold text-purple-500'>  <span>{<Icon className="w-5 h-8 mr-1 " />}</span></div>;

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
            <GoogleMapReact  bootstrapURLKeys={{ key: "" }}  defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                    <AnyReactComponent lat={23.8041} lng={90.4152} text={FaLocationDot} />
            </GoogleMapReact>
        </div>
    );
};

export default SimpleMap;