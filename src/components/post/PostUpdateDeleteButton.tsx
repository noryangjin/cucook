import {
  ButtonBlock,
  ActionButton,
} from '../styles/post/PostUpdateDeleteButton.style';

type Props = {
  onEdit: () => void;
};

const PostUpdateDeleteButton = ({ onEdit }: Props) => {
  return (
    <ButtonBlock>
      <ActionButton onClick={onEdit}>수정</ActionButton>
      <ActionButton>삭제</ActionButton>
    </ButtonBlock>
  );
};

export default PostUpdateDeleteButton;
