import React from 'react';
import { PostItemBlock } from '../styles/home/PostItem.style';
import { Link } from 'react-router-dom';

const PostItem = ({ item, style, qs_ }: any) => {
  if (!item) {
    return null;
  }
  const {
    writer: { username },
    _id,
    category,
    views,
    title,
    titleImg,
    tags,
    ingredients,
    publishedDate,
  } = item;

  const val =
    qs_.filter((k: string) => k === 'sort')[0] ||
    qs_.filter((k: string) => k === '?sort')[0]
      ? '&sort=views'
      : '';

  return (
    <>
      <PostItemBlock style={style}>
        <span className="Block">
          <span className="nameDate">
            <Link to={`/?username=${username}${val}`} className="name">
              {username}
            </Link>
            <div className="date">
              {new Date(publishedDate).toLocaleDateString()} / 조회수: {views}
            </div>
          </span>
          <h3>
            <Link to={`/?category=${category}${val}`}>({category}) </Link>
            {title && title.length > 55 ? `${title.slice(0, 55)}...` : title}
          </h3>
          <Link to={`/@${username}/${_id}`} className="linkImg">
            <img src={titleImg} alt="" />
          </Link>
        </span>
        <div className="tagIngre">
          <span style={{ fontWeight: 'bold' }}>&lt;재료&gt;</span>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {ingredients &&
              ingredients.map((ingre: string) => (
                <span
                  key={ingre}
                  style={{ marginBottom: '8px', marginLeft: '10px' }}
                >
                  <Link to={`/?ingredient=${ingre}${val}`}>#{ingre}</Link>
                </span>
              ))}
          </div>
          <span style={{ fontWeight: 'bold' }}>&lt;태그&gt;</span>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {tags &&
              tags.map((tag: string) => (
                <span key={tag} style={{ marginLeft: '10px' }}>
                  <Link to={`/?tag=${tag}${val}`}>#{tag}</Link>
                </span>
              ))}
          </div>
        </div>
      </PostItemBlock>
    </>
  );
};

export default React.memo(
  PostItem,
  (prevProps, nextProps) => prevProps.item === nextProps.item
);
