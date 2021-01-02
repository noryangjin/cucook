import React, { ChangeEvent } from 'react';
import { CategoryBlock, SelectedItem } from '../styles/write/Category.style';

type Props = {
  category: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Category = ({ category, onChange }: Props) => {
  return (
    <CategoryBlock>
      <SelectedItem>
        <p>
          You Selected : <span>{category}</span>
        </p>
      </SelectedItem>

      <select name="foodCategory" className="cusSelectbox" onChange={onChange}>
        <option value="">Select</option>
        <option value="한식">Korean Food(한식)</option>
        <option value="일식">Japanese Food(일식)</option>
        <option value="중식">Chinese Food(중식)</option>
        <option value="양식">Western Food(양식)</option>
        <option value="간식">Dessert(간식)</option>
      </select>
    </CategoryBlock>
  );
};

export default React.memo(Category);
