import SearchList from '../../components/search/SearchList';
import { useSelector } from 'react-redux';
import { RootState } from '../../module/index';

const SearchListContainer = () => {
  const { searchPost } = useSelector(({ searchPost }: RootState) => ({
    searchPost: searchPost.searchPost,
  }));

  return <SearchList searchPost={searchPost} />;
};

export default SearchListContainer;
