import React, {
  ChangeEvent,
  useCallback,
  useState,
  FormEvent,
  MouseEvent,
  useEffect,
} from 'react';
import {
  IngredientBlock,
  IngredientInput,
  IngredientForm,
  IngredientListBlock,
  Ingredient,
} from '../styles/write/IngredientBox.style';

type Props = {
  ingredients?: Array<string>;
  ingredient?: string;
  onRemove?: (ingredient: string, e?: MouseEvent<HTMLElement>) => void;
  onChangeIngredient?: (ingredientValue: Array<string>) => void;
};

const IngredientItem = React.memo(({ ingredient, onRemove }: Props) => {
  return (
    <Ingredient
      onClick={() => {
        return onRemove && ingredient && onRemove(ingredient);
      }}
    >
      #{ingredient}
    </Ingredient>
  );
});

const IngredientList = React.memo(({ ingredients, onRemove }: Props) => {
  return (
    <IngredientListBlock>
      {ingredients &&
        ingredients.map((ingredient) => (
          <IngredientItem ingredient={ingredient} onRemove={onRemove} />
        ))}
    </IngredientListBlock>
  );
});

const IngredientBox = ({ ingredients, onChangeIngredient }: Props) => {
  const [input, setInput] = useState<string>('');
  const [localIngredients, setLocalIngredients] = useState<Array<string>>([]);

  useEffect(() => {
    ingredients && setLocalIngredients(ingredients);
  }, [ingredients]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const checkIncludesInput = localIngredients.includes(input);
      const trimInput = input.trim();

      if (checkIncludesInput || !trimInput) {
        return setInput('');
      }
      if (!checkIncludesInput && trimInput) {
        const setIngredients = [...localIngredients, input.replace(/\s/g, '')];

        return [
          setLocalIngredients(setIngredients),
          onChangeIngredient && onChangeIngredient(setIngredients),
          setInput(''),
        ];
      }
    },
    [localIngredients, input, onChangeIngredient]
  );

  const onRemove = useCallback(
    (ingredient, e?: MouseEvent<HTMLElement>) => {
      const setIngredients = [
        ...localIngredients.filter((local) => local !== ingredient),
      ];

      return [
        setLocalIngredients(setIngredients),
        onChangeIngredient && onChangeIngredient(setIngredients),
      ];
    },
    [localIngredients, onChangeIngredient]
  );

  return (
    <IngredientBlock>
      <h4>재료</h4>
      <IngredientForm onSubmit={onSubmit}>
        <IngredientInput
          onChange={onChange}
          value={input}
          placeholder="재료를 입력하세요"
        />
        <button>추가</button>
      </IngredientForm>
      <IngredientList ingredients={localIngredients} onRemove={onRemove} />
    </IngredientBlock>
  );
};

export default React.memo(IngredientBox);
