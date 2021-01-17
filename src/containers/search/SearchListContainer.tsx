import SearchList from '../../components/search/SearchList';
import { useSelector } from 'react-redux';
import { RootState } from '../../module/index';

const SearchListContainer = () => {
  const { searchPost, loading } = useSelector(
    ({ searchPost, loading }: RootState) => ({
      searchPost: searchPost.searchPost,
      loading: loading['searchPost/SEARCH_POST'],
    })
  );

  return <SearchList searchPost={searchPost} loading={loading} />;
};

export default SearchListContainer;
