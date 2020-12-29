import HeaderContainer from '../containers/common/HeaderContainer';
import Responsive from '../components/common/Responsive';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostLeadPage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <PostViewerContainer />
      </Responsive>
    </>
  );
};

export default PostLeadPage;
