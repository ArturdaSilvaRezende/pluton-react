import {
  GoogleMap,
  LoadScript,
  CircleF,
  MarkerF,
  InfoWindowF,
} from '@react-google-maps/api';
import GlobalTitle from '../../assets/styles/GlobalTitle';
import ContactUsMapForm from './ContactUsMapForm';
import * as C from './style';

const containerStyle = {
  width: '100%',
  height: '515px',
};

const center = {
  lat: -16.6799,
  lng: -49.255,
};

const circleOptions = {
  strokeColor: 'tomato',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#fece1a',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 60,
};

const API_KEY = 'AIzaSyAtgCIWLSEqC3E_zhp7P2hxMeeqJ8ROhI8';

const ContactUsMap = () => {
  return (
    <C.ContactUsMap>
      <GlobalTitle line="var(--color-black)">
        <h1>Contact Us</h1>
        <h2>
          Duis mollis placerat quam, eget laoreet tellus tempor eu. Quisque
          dapibus in purus in dignissim.
        </h2>
      </GlobalTitle>
      <div className="contactusmap__container">
        <ContactUsMapForm />
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}
          >
            <MarkerF position={center}>
              <CircleF center={center} options={circleOptions} />
              <InfoWindowF position={center}>
                <div>
                  <h3>Location</h3>
                  <p>We are here</p>
                </div>
              </InfoWindowF>
            </MarkerF>
          </GoogleMap>
        </LoadScript>
      </div>
    </C.ContactUsMap>
  );
};

export default ContactUsMap;
