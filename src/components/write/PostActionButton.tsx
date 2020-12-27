import {
  PostActionButtonBlock,
  ActionButton,
  Spacer,
} from '../styles/write/PostActionButton.style';

const PostActionButton = () => {
  return (
    <>
      <PostActionButtonBlock>
        <ActionButton>포스트 등록</ActionButton>
        <ActionButton>취소</ActionButton>
      </PostActionButtonBlock>
      <Spacer />
    </>
  );
};

export default PostActionButton;
