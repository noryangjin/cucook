import React, { useCallback } from 'react';
import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react';
import {
  TagBoxBlock,
  TagBoxInput,
  TagForm,
  TagListBlock,
  Tag,
} from '../styles/write/TagBox.style';

type Props = {
  tag?: string;
  tags?: Array<string>;
  onRemove?: (tag: string, e?: MouseEvent<HTMLElement>) => void;
};

const TagItem = React.memo(({ tag, onRemove }: Props) => {
  return (
    <Tag
      onClick={() => {
        onRemove && tag && onRemove(tag);
      }}
    >
      #{tag}
    </Tag>
  );
});

const TagList = React.memo(({ tags, onRemove }: Props) => {
  return (
    <TagListBlock>
      {tags !== undefined &&
        tags.map((tag: string) => (
          <TagItem key={tag} tag={tag} onRemove={onRemove} />
        ))}
    </TagListBlock>
  );
});

const TagBox = () => {
  const [input, setInput] = useState<string>('');
  const [localTags, setLocalTags] = useState<Array<string>>([]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  }, []);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const checkIncludesInput = localTags.includes(input);
      const trimInput = input.trim();

      if (checkIncludesInput || !trimInput) {
        return setInput('');
      }
      if (!checkIncludesInput && trimInput) {
        setLocalTags([...localTags, input.replace(/\s/g, '')]);
        setInput('');
      }
    },
    [input, localTags]
  );

  const onRemove = useCallback(
    (tag: string, e?: MouseEvent<HTMLElement>) => {
      return setLocalTags([...localTags.filter((local) => local !== tag)]);
    },
    [localTags]
  );

  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <TagBoxInput
          onChange={onChange}
          value={input}
          placeholder="태그를 입력하세요"
        />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={localTags} onRemove={onRemove} />
    </TagBoxBlock>
  );
};

export default TagBox;
