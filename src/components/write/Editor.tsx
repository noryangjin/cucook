import { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import {
  EditorBlock,
  TitleInput,
  QuillWrapper,
} from '../styles/write/Editor.style';

const Editor = () => {
  const quillElement: any = useRef(null);
  const quillInstance: any = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '요리 방법을 설명해주세요^^',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });
  }, []);

  return (
    <EditorBlock>
      <TitleInput placeholder="제목을 입력하세요." />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
