import React, { useCallback } from 'react';
import { AutoSizerBlock, ListBlock } from '../styles/search/SearchList.style';
import SearchItem from './SearchItem';

type Props = {
  searchPost: Array<any>;
  loading: boolean;
  query: any;
};

const SearchList = ({ searchPost, loading, query }: Props) => {
  if (searchPost && query && query.category) {
    searchPost = searchPost.filter(
      (sear) => sear.category.includes(query.category) === true
    );
  }

  if (searchPost && query && query.sort === 'views') {
    searchPost.sort((a, b) =>
      a.views > b.views ? -1 : a.views < b.views ? 1 : 0
    );
  }
  if (searchPost && query && !query.sort) {
    searchPost.sort((a, b) =>
      a.views > b.views ? -1 : a.views < b.views ? 1 : 0
    );
  }

  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const item = searchPost[index];

      return <SearchItem key={key} item={item} style={style} />;
    },
    [searchPost]
  );

  return (
    <>
      {loading ? (
        <h2>로딩 중...</h2>
      ) : !searchPost || searchPost.length === 0 ? (
        <div style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}>
          검색 내역이 없습니다.
        </div>
      ) : (
        <AutoSizerBlock disableHeight>
          {({ width }: any) =>
            searchPost && (
              <ListBlock
                rowCount={searchPost.length}
                rowHeight={250}
                rowRenderer={rowRenderer}
                list={searchPost}
                width={width}
                height={600}
                style={{ outline: 'none' }}
              />
            )
          }
        </AutoSizerBlock>
      )}
    </>
  );
};

export default React.memo(SearchList);
