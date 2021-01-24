import { ChangeEvent, useCallback, useState } from 'react';
import Map from '../../components/map/Map';

const MapContainer = () => {
  const [inputs, setInput] = useState<any>(undefined);
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  return <Map />;
};

export default MapContainer;
