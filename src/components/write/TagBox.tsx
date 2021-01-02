import React, { ChangeEvent, FormEvent } from 'react';
import {
  BoxBlock,
  BoxInput,
  Form,
  ListBlock,
  Value,
} from '../styles/write/TagIngredient.style';

type Props = {
  tags?: Array<string>;
  tag?: string;
  onRemove?: (tag: string) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  localTags?: Array<string>;
  input?: string;
};

const TagItem = React.memo(({ tag, onRemove }: Props) => {
  return (
    <Value
      onClick={() => {
        return onRemove && tag && onRemove(tag);
      }}
    >
      #{tag}
    </Value>
  );
});

const TagList = React.memo(({ tags, onRemove }: Props) => {
  return (
    <ListBlock>
      {tags &&
        tags.map((tag) => <TagItem key={tag} tag={tag} onRemove={onRemove} />)}
    </ListBlock>
  );
});

const IngredientBox = ({
  localTags,
  input,
  onChange,
  onSubmit,
  onRemove,
}: Props) => {
  return (
    <BoxBlock>
      <h4>태그</h4>
      <Form onSubmit={onSubmit}>
        <BoxInput
          onChange={onChange}
          value={input}
          placeholder="태그를 입력하세요"
        />
        <button>추가</button>
      </Form>
      <TagList tags={localTags} onRemove={onRemove} />
    </BoxBlock>
  );
};

export default React.memo(IngredientBox);
