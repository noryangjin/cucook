import React from 'react';
import { PostItemBlock } from '../styles/home/PostItem.style';
import { Link } from 'react-router-dom';

const PostItem = ({ item, style, index }: any) => {
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

  return (
    <PostItemBlock style={style} index={index}>
      <span className="nameDate">
        <Link to={`/?username=${username}`} className="name">
          {username}
        </Link>
        <div className="date">
          {new Date(publishedDate).toLocaleDateString()} / 조회수:{views}
        </div>
      </span>
      <h3>
        <Link to={`/?category=${category}`}>({category}) </Link>
        {title && title.length > 55 ? `${title.slice(0, 55)}...` : title}
      </h3>
      <Link to={`/@${username}/${_id}`} className="linkImg">
        <img src={titleImg} alt="" />
      </Link>
      <span className="tagIngre">
        <span style={{ fontWeight: 'bold' }}>&lt;재료&gt;</span>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {ingredients &&
            ingredients.map((ingre: string) => (
              <span
                key={ingre}
                style={{ marginBottom: '8px', marginLeft: '10px' }}
              >
                <Link to={`/?ingredient=${ingre}`}>#{ingre}</Link>
              </span>
            ))}
        </div>
        <span style={{ fontWeight: 'bold' }}>&lt;태그&gt;</span>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {tags &&
            tags.map((tag: string) => (
              <span key={tag} style={{ marginLeft: '10px' }}>
                <Link to={`/?tag=${tag}`}>#{tag}</Link>
              </span>
            ))}
        </div>
      </span>
    </PostItemBlock>
  );
};

export default React.memo(
  PostItem,
  (prevProps, nextProps) => prevProps.item === nextProps.item
);
