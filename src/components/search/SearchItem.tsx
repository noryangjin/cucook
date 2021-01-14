import { SearchItemBlock, Content } from '../styles/search/SearchItem.style';

const SearchItem = ({ item, style }: any) => {
  return (
    <SearchItemBlock style={style}>
      <img src={item.titleImg} alt="" />
      <Content>
        {item.title}
        {item.ingredients}
        {item.tags}
      </Content>
    </SearchItemBlock>
  );
};

export default SearchItem;
