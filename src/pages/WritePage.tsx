import HeaderContainer from '../containers/common/HeaderContainer';
import Editor from '../components/write/Editor';
import TagBox from '../components/write/TagBox';
import Responsive from '../components/common/Responsive';

const WritePage = () => {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <Editor />
        <TagBox />
      </Responsive>
    </>
  );
};

export default WritePage;
