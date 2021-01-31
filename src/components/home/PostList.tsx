/* eslint-disable no-restricted-globals */
import React, { useCallback } from 'react';
import PostItem from './PostItem';
import { AutoSizerBlock, ListBlock } from '../styles/home/PostList.style';

type Props = {
  posts: any;
  qs_: any;
  onScroll: any;
};

const PostList = ({ posts, qs_, onScroll }: Props) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const item = posts[index];

      return (
        <PostItem key={key} index={index} item={item} style={style} qs_={qs_} />
      );
    },
    [posts, qs_]
  );

  return (
    <>
      <AutoSizerBlock disableHeight>
        {({ width }: any) =>
          posts ? (
            <ListBlock
              onScroll={onScroll}
              className="PostList"
              rowCount={posts.length}
              rowHeight={700}
              rowRenderer={rowRenderer}
              list={posts}
              height={600}
              width={width}
              style={{ outline: 'none' }}
            />
          ) : (
            <h2 style={{ width: '300px' }}>로딩 중...</h2>
          )
        }
      </AutoSizerBlock>
    </>
  );
};

export default React.memo(PostList);
