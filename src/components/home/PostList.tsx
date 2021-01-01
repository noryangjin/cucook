import React, { useCallback } from 'react';
import PostItem from './PostItem';
import { AutoSizerBlock, ListBlock } from '../styles/home/PostList.style';

const PostList = () => {
  const rowRenderer = useCallback(({ index, key, style }) => {
    const item = list[index];

    return <PostItem key={key} item={item} style={style} />;
  }, []);

  return (
    <>
      <AutoSizerBlock disableHeight>
        {({ width }: any) => (
          <div className="block">
            <ListBlock
              className="PostList"
              rowCount={list.length}
              rowHeight={700}
              rowRenderer={rowRenderer}
              list={list}
              height={700}
              width={width}
              style={{ outline: 'none' }}
            />
            <div className="chat">채팅 공간</div>
          </div>
        )}
      </AutoSizerBlock>
    </>
  );
};

export default React.memo(PostList);
