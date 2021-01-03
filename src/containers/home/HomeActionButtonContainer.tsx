import { useSelector } from 'react-redux';
import { RootState } from '../../module/index';
import HomeActionButton from '../../components/home/HomeActionButton';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ChangeEvent } from 'react';
import qs from 'qs';

const HomeActionButtonContainer = ({
  history,
  location,
}: RouteComponentProps) => {
  const { user } = useSelector(({ user }: RootState) => ({
    user: user.user,
  }));

  const query = qs.parse(location.search);
  const key_ = Object.keys(query);
  const val_ = Object.values(query);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (key_[0] && key_[0].includes('?') && key_[0] !== '?sort') {
      return history.push(`${key_[0]}=${val_[0]}&${value.slice(0)}`);
    }
    history.push(`?${value}`);
  };

  return (
    <HomeActionButton user={user} onChange={onChange} key_={key_} val_={val_} />
  );
};

export default withRouter(HomeActionButtonContainer);
