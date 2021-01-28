import SearchList from '../../components/search/SearchList';
import { useSelector } from 'react-redux';
import { RootState } from '../../module/index';
import qs from 'qs';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SearchListContainer = ({ location }: RouteComponentProps) => {
  const [query, setQuery] = useState<any>(null);
  const { searchPost, loading } = useSelector(
    ({ searchPost, loading }: RootState) => ({
      searchPost: searchPost.searchPost,
      loading: loading['searchPost/SEARCH_POST'],
    })
  );

  useEffect(() => {
    const qss = qs.parse(location.search, { ignoreQueryPrefix: true });
    setQuery(qss);
  }, [location]);

  return <SearchList searchPost={searchPost} loading={loading} query={query} />;
};

export default withRouter(SearchListContainer);
