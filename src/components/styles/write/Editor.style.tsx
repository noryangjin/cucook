import styled from 'styled-components';
import Response from '../../common/Responsive';
import palette from '../palette';

export const EditorBlock = styled(Response)``;

export const TitleInput = styled.input`
  outline: none;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${palette.gray[4]};
  background: ${palette.backgroundColor};
  margin: 2rem 0;
  font-size: 2rem;
  &:hover {
    background: ${palette.Header};
    border-bottom: 1px solid ${palette.gray[5]};
  }
`;

export const QuillWrapper = styled.div`
  &:hover {
    background: ${palette.Header};
  }
  .ql-editor {
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor .ql-blank::before {
    left: 0px;
  }
`;
