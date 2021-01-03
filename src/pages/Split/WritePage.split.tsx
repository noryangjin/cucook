import EditorContainer from '../../containers/write/EditorContainer';
import TagBoxContainer from '../../containers/write/TagBoxContainer';
import PostActionButtonContainer from '../../containers/write/PostActionButtonContainer';
import TitleImgContainer from '../../containers/write/TitleImgContainer';
import CategoryContainer from '../../containers/write/CategoryContainer';
import IngredientContainer from '../../containers/write/IngredientContainer';

const WritePageSplit = () => {
  return (
    <>
      <CategoryContainer />
      <IngredientContainer />
      <EditorContainer />
      <TitleImgContainer />
      <TagBoxContainer />
      <PostActionButtonContainer />
    </>
  );
};

export default WritePageSplit;
