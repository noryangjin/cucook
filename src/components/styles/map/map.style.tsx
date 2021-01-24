import styled from 'styled-components';
import AutoComplete from 'react-google-autocomplete';

export const StyledAutoComplete = styled(AutoComplete)`
  width: 100%;
  position: absolute;
  top: 160px;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
  @media (max-width: 575px) {
    top: 265px;
    position: absolute;
  }
`;
