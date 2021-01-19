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
import PostUpdateDeleteButton from './PostUpdateDeleteButton';

const PostViewer = ({ post, error, loading }: any) => {
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
        <span className="views">조회수 : {views}</span>
        <div className="titleUser">
          <h2>
            {title}({category})
          </h2>

          <UserDateBlock>
            <span>{username}</span>
            <span>
              {new Date(publishedDate).toLocaleDateString().replace(/\s/g, '')}
            </span>
            <PostUpdateDeleteButton />
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
