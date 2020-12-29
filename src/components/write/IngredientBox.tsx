import React, { ChangeEvent, FormEvent } from 'react';
import {
  BoxBlock,
  BoxInput,
  Form,
  ListBlock,
  Value,
} from '../styles/write/TagIngredient.style';

type Props = {
  ingredients?: Array<string>;
  ingredient?: string;
  onRemove?: (ingredient: string) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  localIngredients?: Array<string>;
  input?: string;
};

const IngredientItem = React.memo(({ ingredient, onRemove }: Props) => {
  return (
    <Value
      onClick={() => {
        return onRemove && ingredient && onRemove(ingredient);
      }}
    >
      #{ingredient}
    </Value>
  );
});

const IngredientList = React.memo(({ ingredients, onRemove }: Props) => {
  return (
    <ListBlock>
      {ingredients &&
        ingredients.map((ingredient) => (
          <IngredientItem
            key={ingredient}
            ingredient={ingredient}
            onRemove={onRemove}
          />
        ))}
    </ListBlock>
  );
});

const IngredientBox = ({
  localIngredients,
  input,
  onChange,
  onSubmit,
  onRemove,
}: Props) => {
  return (
    <BoxBlock>
      <h4>재료</h4>
      <Form onSubmit={onSubmit}>
        <BoxInput
          onChange={onChange}
          value={input}
          placeholder="재료를 입력하세요"
        />
        <button>추가</button>
      </Form>
      <IngredientList ingredients={localIngredients} onRemove={onRemove} />
    </BoxBlock>
  );
};

export default React.memo(IngredientBox);
