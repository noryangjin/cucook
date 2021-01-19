import {
  ButtonBlock,
  ActionButton,
} from '../styles/post/PostUpdateDeleteButton.style';

const PostUpdateDeleteButton = () => {
  return (
    <ButtonBlock>
      <ActionButton>수정</ActionButton>
      <ActionButton>삭제</ActionButton>
    </ButtonBlock>
  );
};

export default PostUpdateDeleteButton;
