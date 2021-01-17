import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import loadable from '@loadable/component';

const Split = loadable(() => import('./Split/SearchPage.split'));

const SearchPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <Split />
      </Responsive>
    </>
  );
};

export default SearchPage;
