import HeaderContainer from '../containers/common/HeaderContainer';
import HomeActionButtonContainer from '../containers/home/HomeActionButtonContainer';
import Responsive from '../components/common/Responsive';
import SearchListContainer from '../containers/search/SearchListContainer';

const SearchPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <HomeActionButtonContainer />
        <SearchListContainer />
      </Responsive>
    </>
  );
};

export default SearchPage;
