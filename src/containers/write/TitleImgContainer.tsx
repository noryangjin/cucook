import { ChangeEvent, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TitleImg from '../../components/write/TitleImg';
import { changeField } from '../../module/write';
import { RootState } from '../../module/index';
import Axios from 'axios';

const TitleImgContainer = () => {
  const [imgFile, setImgFile] = useState<null | any>(null);
  const { titleImg } = useSelector(({ write }: RootState) => ({
    titleImg: write.titleImg,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    titleImg && setImgFile(titleImg);
  }, [titleImg]);

  const onChange = useCallback(
    (e: ChangeEvent<any>) => {
      const { files } = e.target;
      const formData = new FormData();
      formData.append('titleImg', files[0]);

      if (files[0]) {
        Axios.post('/api/post/titleImg', formData, {
          baseURL: 'http://www.cucook.net:4000/',
          headers: {
            'content-type': 'multipart/form-data;',
          },
        }).then((response) => {
          dispatch(changeField({ key: 'titleImg', value: response.data }));
        });
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const file = reader.result;
        if (file) {
          setImgFile(file.toString());
        }
      };
      if (files[0]) {
        reader.readAsDataURL(files[0]);
      }
    },
    [dispatch]
  );

  return <TitleImg onChange={onChange} imgFile={imgFile} />;
};

export default TitleImgContainer;
