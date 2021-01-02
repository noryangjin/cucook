import {
  HomeActionButtonBlock,
  WriteButton,
} from '../styles/home/HomeActionButton.style';

const HomeActionButton = ({ user }: any) => {
  return (
    <HomeActionButtonBlock>
      <div>
        <span>분류</span>
        <span>카테고리</span>
      </div>
      {user && (
        <WriteButton to="/write" cyan>
          글쓰기
        </WriteButton>
      )}
    </HomeActionButtonBlock>
  );
};

export default HomeActionButton;
