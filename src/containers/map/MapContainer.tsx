import { useSelector } from 'react-redux';
import { RootState } from '../../module/index';
import Map from '../../components/map/Map';

const MapContainer = () => {
  const { user } = useSelector(({ user }: RootState) => ({
    user: user.user,
  }));

  return <Map user={user} />;
};

export default MapContainer;
