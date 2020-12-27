import HeaderContainer from '../containers/common/HeaderContainer';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import PostActionButtonContainer from '../containers/write/PostActionButtonContainer';
import TitleImgContainer from '../containers/write/TitleImgContainer';
import Responsive from '../components/common/Responsive';

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <EditorContainer />
        <TitleImgContainer />
        <TagBoxContainer />
        <PostActionButtonContainer />
      </Responsive>
    </>
  );
};

export default WritePage;
