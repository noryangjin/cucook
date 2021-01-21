import React from 'react';
import {
  UserInfoBlock,
  Block,
  Img,
  PostInfo,
  Error,
} from '../styles/user/UserInfo.style';
import { Link } from 'react-router-dom';

type Props = {
  error: string;
  post: Array<any>;
  loading: boolean;
  username: string;
};

const UserInfo = ({ error, post, loading, username }: Props) => {
  if ((!post || loading) && !error) {
    return <h2>로딩 중...</h2>;
  }
  if (error) {
    return <Error err={'err'}>{error}</Error>;
  }

  if (post.length === 0) {
    return <Error>게시글이 없습니다.</Error>;
  }

  return (
    <UserInfoBlock>
      <h2 style={{ display: 'block' }}>
        {username}님의 게시물({post.length})
      </h2>
      {post &&
        post.map((po) => (
          <Block key={po._id}>
            <Link to={`/@${username}/${po._id}`}>
              <Img src={po.titleImg} alt="" />
              <PostInfo>
                <div>
                  {po.title.length > 24
                    ? `${po.title.slice(0, 19)}...`
                    : po.title}
                </div>
                <div className="viewsDate">
                  <span>{new Date(po.publishedDate).toLocaleDateString()}</span>
                  <span>조회수: {po.views}</span>
                  <span>{po.category}</span>
                </div>
              </PostInfo>
            </Link>
          </Block>
        ))}
    </UserInfoBlock>
  );
};

export default React.memo(UserInfo);
