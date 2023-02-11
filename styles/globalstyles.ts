import styled, {createGlobalStyle} from 'styled-components';

export const GlobalSytles = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
}
`;

export const ServerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  height: 100%;
`;