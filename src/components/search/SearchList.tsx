import React, { useCallback } from 'react';
import { AutoSizerBlock, ListBlock } from '../styles/search/SearchList.style';
import SearchItem from './SearchItem';

type Props = {
  searchPost: any;
};

const SearchList = ({ searchPost }: Props) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const item = searchPost[index];

      return <SearchItem key={key} item={item} style={style} />;
    },
    [searchPost]
  );
  return (
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
  );
};

export default React.memo(SearchList);
