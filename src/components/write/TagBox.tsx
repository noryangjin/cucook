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

const TagItem = ({ tag, onRemove }: Props) => {
  return (
    <Tag
      onClick={() => {
        onRemove && tag && onRemove(tag);
      }}
    >
      #{tag}
    </Tag>
  );
};

const TagList = ({ tags, onRemove }: Props) => {
  return (
    <TagListBlock>
      {tags !== undefined &&
        tags.map((tag: string) => (
          <TagItem key={tag} tag={tag} onRemove={onRemove} />
        ))}
    </TagListBlock>
  );
};

const TagBox = () => {
  const [input, setInput] = useState<string>('');
  const [localTags, setLocalTags] = useState<Array<string>>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
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
  };

  const onRemove = (tag: string, e?: MouseEvent<HTMLElement>) => {
    return setLocalTags([...localTags.filter((local) => local !== tag)]);
  };

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
