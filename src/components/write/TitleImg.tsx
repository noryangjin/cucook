import { ChangeEvent } from 'react';
import { Img, TitleImgInput, FormBlock } from '../styles/write/TitleImg.style';

type Props = {
  onChange: (e: ChangeEvent<any>) => void;
  imgFile: string;
};

const TitleImg = ({ onChange, imgFile }: Props) => {
  return (
    <FormBlock encType="multipart/form-data">
      <h4>타이틀 이미지</h4>
      {imgFile && (
        <div>
          <Img src={imgFile} alt={imgFile} />
        </div>
      )}
      <TitleImgInput
        type="file"
        accept="image/jpg,image/png,image/jpeg,image/gif"
        name="titleImg"
        placeholder="업로드"
        onChange={onChange}
      />
    </FormBlock>
  );
};

export default TitleImg;
