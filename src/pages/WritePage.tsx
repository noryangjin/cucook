import HeaderContainer from '../containers/common/HeaderContainer';
import EditorContainer from '../containers/write/EditorContainer';
import TagBox from '../components/write/TagBox';
import Responsive from '../components/common/Responsive';

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <EditorContainer />
        <TagBox />
      </Responsive>
    </>
  );
};

export default WritePage;
