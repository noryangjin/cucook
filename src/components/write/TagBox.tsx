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
};

const TagItem = ({ tag }: Props) => {
  return <Tag>#{tag}</Tag>;
};

const TagList = ({ tags }: Props) => {
  return (
    <TagListBlock>
      {tags !== undefined &&
        tags.map((tag: string) => <TagItem key={tag} tag={tag} />)}
    </TagListBlock>
  );
};

const TagBox = () => {
  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm>
        <TagBoxInput />
        <button type="submit">추가</button>
      </TagForm>
      <TagList
        tags={[
          'tag1',
          'tag2',
          'tag3',
          'tag4',
          'tag5',
          'tag6',
          'tag7',
          'tag8',
          'tag9',
          'tag10',
        ]}
      />
    </TagBoxBlock>
  );
};

export default TagBox;
