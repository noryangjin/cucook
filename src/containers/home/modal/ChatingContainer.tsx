import Chating from '../../../components/home/modal/Chating';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { useCallback, useState } from 'react';

const ChatingContainer = ({ history, location }: RouteComponentProps<any>) => {
  const [option, setOption] = useState<boolean | null>(null);

  const onClickOption = useCallback(() => {
    setOption(true);
    if (option) {
      setOption(false);
    }
  }, [option]);

  const onCancel = useCallback(() => {
    history.push(`/${location.search}`);
    setOption(false);
  }, [location, history]);

  return (
    <Chating
      onClickOption={onClickOption}
      onCancel={onCancel}
      option={option}
    />
  );
};

export default withRouter(ChatingContainer);
