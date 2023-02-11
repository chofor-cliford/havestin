import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin-top: 6px;
  display: block;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const FooterItems = styled.p`
  color: #888;
  font-size: small;
  margin-right: 9px;
  &:hover{
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const FooterRight = styled.p`
  color: gray;
  margin-top: 12px;
  font-size: small;
`;