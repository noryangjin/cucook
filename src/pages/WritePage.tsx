import HeaderContainer from '../containers/common/HeaderContainer';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import PostActionButtonContainer from '../containers/write/PostActionButtonContainer';
import Responsive from '../components/common/Responsive';

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <EditorContainer />
        <TagBoxContainer />
        <PostActionButtonContainer />
      </Responsive>
    </>
  );
};

export default WritePage;
