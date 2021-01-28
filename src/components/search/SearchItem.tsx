import { SearchItemBlock, Content } from '../styles/search/SearchItem.style';

const SearchItem = ({ item, style }: any) => {
  return (
    <SearchItemBlock style={style} to={`/@${item.writer.username}/${item._id}`}>
      <div className="titleImg">
        <img src={item.titleImg} alt="" />
      </div>
      <Content>
        <div className="header">
          <h4 className="title">
            ({item.category}){item.title}
          </h4>
          <span className="nameDate">
            <span>{item.writer.username}</span>
            <span>{new Date(item.publishedDate).toLocaleDateString()}</span>
            <span>조회수 : {item.views}</span>
          </span>
        </div>
        <div className="ingredients">
          {item.ingredients.map((ing: string) => (
            <span key={ing}>#{ing}</span>
          ))}
        </div>
        <div className="tags">
          {item.tags.map((tag: string) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </Content>
    </SearchItemBlock>
  );
};

export default SearchItem;
