import MapContainer from '../containers/map/MapContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';

const MapPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <MapContainer />
      </Responsive>
    </>
  );
};

export default MapPage;
