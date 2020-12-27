import { CategoryBlock, SelectedItem } from '../styles/write/Category.style';

const Category = () => {
  return (
    <CategoryBlock>
      <SelectedItem>
        <p>
          You Selected : <span>Select</span>
        </p>
      </SelectedItem>

      <select name="foodCategory" className="cusSelectbox">
        <option value="">Select</option>
        <option value="koreanFood">Korean Food(한식)</option>
        <option value="japaneseFood">Japanese Food(일식)</option>
        <option value="chineseFood">Chinese Food(중식)</option>
        <option value="westernFood">Western Food(양식)</option>
        <option value="dessert">Dessert(간식)</option>
      </select>
    </CategoryBlock>
  );
};

export default Category;
