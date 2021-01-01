import { PostItemBlock } from '../styles/home/PostItem.style';

const PostItem = ({ item, style }: any) => {
  const { username, title, titleImg, tags, ingredient, date } = item;

  return (
    <PostItemBlock style={style}>
      <span className="nameDate">
        <span className="name">{username}</span>
        <span className="date">
          {date} / 조회수:{'3'}
        </span>
      </span>
      <h3>{title && title.length > 55 ? `${title.slice(0, 55)}...` : title}</h3>
      <img src={titleImg} alt="" />
      <span className="tagIngre">
        &lt;재료&gt;
        <div style={{ display: 'flex' }}>
          {ingredient &&
            ingredient.map((ingre: string) => <span key={ingre}>{ingre}</span>)}
        </div>
        &lt;태그&gt;
        <div style={{ display: 'flex' }}>
          {tags && tags.map((tag: string) => <span key={tag}>{tag}</span>)}
        </div>
      </span>
    </PostItemBlock>
  );
};

export default PostItem;
