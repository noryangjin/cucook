import React, { useCallback } from 'react';
import PostItem from './PostItem';
import { AutoSizerBlock, ListBlock } from '../styles/home/PostList.style';

type Props = {
  posts: any;
  loading: boolean;
  qs_: any;
};

const PostList = ({ posts, loading, qs_ }: Props) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      if (!loading && !posts) {
        return <h2>로딩 중...</h2>;
      }
      const item = posts[index];

      return (
        <PostItem key={key} index={index} item={item} style={style} qs_={qs_} />
      );
    },
    [posts, loading, qs_]
  );

  return (
    <>
      <AutoSizerBlock disableHeight>
        {({ width }: any) =>
          posts && (
            <div className="block">
              <ListBlock
                className="PostList"
                rowCount={posts.length}
                rowHeight={700}
                rowRenderer={rowRenderer}
                list={posts}
                height={600}
                width={width}
                style={{ outline: 'none' }}
              />
              <div className="chat">채팅 공간</div>
            </div>
          )
        }
      </AutoSizerBlock>
    </>
  );
};

export default React.memo(PostList);
