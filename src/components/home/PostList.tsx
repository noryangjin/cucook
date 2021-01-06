/* eslint-disable no-restricted-globals */
import React, { useCallback } from 'react';
import PostItem from './PostItem';
import ChatContainer from '../../containers/home/ChatContainer';
import {
  AutoSizerBlock,
  ListBlock,
  Block,
} from '../styles/home/PostList.style';

type Props = {
  posts: any;
  loading: boolean;
  qs_: any;
  onScroll: any;
};

const PostList = ({ posts, loading, qs_, onScroll }: Props) => {
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
      <Block>
        <AutoSizerBlock disableHeight>
          {({ width }: any) =>
            posts && (
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
            )
          }
        </AutoSizerBlock>
        <div className="chat">
          <ChatContainer />
        </div>
      </Block>
    </>
  );
};

export default React.memo(PostList);
