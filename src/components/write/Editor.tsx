import React, { useRef, useEffect, ChangeEvent, useCallback } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import {
  EditorBlock,
  TitleInput,
  QuillWrapper,
} from '../styles/write/Editor.style';

type Props = {
  title: string;
  body: string | any;
  onChange: (payload: { key: string; value: any | string }) => void;
};

const Editor = ({ title, body, onChange }: Props) => {
  const quillElement: any = useRef(null);
  const quillInstance: any = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'snow',
      placeholder: '요리 방법을 설명해주세요^^',
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike', 'image', 'link'], // toggled buttons
          ['blockquote', 'code-block'],

          [{ header: 1 }, { header: 2 }], // custom button values
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
          [{ direction: 'rtl' }], // text direction

          [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],

          ['clean'], // remove formatting button
        ],
      },
    });

    const quill = quillInstance.current;
    quill.on('text-change', (delta: any, oldDelta: any, source: any) => {
      if (source === 'user') {
        onChange({ key: 'body', value: quill.root.innerHTML });
      }
    });
  }, [onChange]);

  const onChangeTitle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange({ key: 'title', value: e.target.value });
    },
    [onChange]
  );

  return (
    <EditorBlock>
      <TitleInput
        value={title}
        onChange={onChangeTitle}
        placeholder="제목을 입력하세요."
      />
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default React.memo(Editor);
