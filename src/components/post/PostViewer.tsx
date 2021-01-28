import React from 'react';
import {
  PostViewerBlock,
  UserDateBlock,
  TagImgBlock,
  Spacer,
  SpacerBet,
  SpacerTop,
  TitleImg,
  Tag,
  PostContent,
  Height,
  Error,
} from '../styles/post/PostViewer.style';
import { WriteButton } from '../styles/home/HomeActionButton.style';
import loadable from '@loadable/component';
import { Link } from 'react-router-dom';

const Split = loadable(() => import('./PostUpdateDeleteButton'));

type Props = {
  post: any;
  error: string;
  loading: boolean;
  ownPost: boolean;
  onEdit: () => void;
  user: Array<any>;
};

const PostViewer = ({ post, error, loading, ownPost, onEdit, user }: Props) => {
  if (error) {
    return <Error>{error}</Error>;
  }
  if (loading || !post) {
    return <h2>로딩 중...</h2>;
  }

  const {
    body,
    category,
    ingredients,
    publishedDate,
    tags,
    title,
    titleImg,
    views,
    writer: { username },
  } = post;
  return (
    <>
      <PostViewerBlock>
        <div className="viewsWrite">
          <div>조회수 : {views}</div>
          {user && (
            <WriteButton to="/write" cyan>
              글쓰기
            </WriteButton>
          )}
        </div>
        <div className="titleUser">
          <h2>
            {title}({category})
          </h2>
          <UserDateBlock>
            <span>
              <Link to={`/user/@${username}`}>{username}</Link>
            </span>
            <span>
              {new Date(publishedDate).toLocaleDateString().replace(/\s/g, '')}
            </span>
            {ownPost && <Split onEdit={onEdit} />}
          </UserDateBlock>
        </div>
        <Spacer />
        <TagImgBlock>
          <TitleImg src={titleImg} alt="" />
          <SpacerBet />
          <Tag>
            <div className="ingredient">
              <h4>&lt;재료&gt;</h4>
              {ingredients &&
                ingredients.map((ingre: string) => (
                  <span key={ingre}>#{ingre}</span>
                ))}
            </div>
            <SpacerTop />
            <div className="tag">
              <h4>&lt;태그&gt;</h4>
              {tags && tags.map((tag: string) => <span key={tag}>#{tag}</span>)}
            </div>
          </Tag>
        </TagImgBlock>
        <Spacer />
        <PostContent
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        />
      </PostViewerBlock>
      <Height />
    </>
  );
};

export default React.memo(PostViewer);
