import styled from 'styled-components';
import { Descriptions } from 'antd';

export const TitleButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  margin: 10px 0;
`;

export const StyleDescriptions = styled(Descriptions)`
  table {
    border: 1px solid gray;
    width: 100%;
  }
`;
