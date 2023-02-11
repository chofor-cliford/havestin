import styled from 'styled-components';

export const SidebarContainers = styled.div`
  max-height: 100vh;
  overflow: scroll;
  &::-webkit-scrollbar{
       background: #f5f5f5;
       border-radius: 5px;
       width: 6px;
       display: none;
   }
   &::-webkit-scrollbar-thumb{
       background: #888;
       
   }
   &::-webkit-scrollbar-track{
       background: #f1f1f1;
       
   }
   &:hover{
    &::-webkit-scrollbar{
       background: #f5f5f5;
       border-radius: 5px;
       width: 6px;
       display: block;
   }
   }

`;

export const SideContainer = styled.div`
  display: none;
  margin: 5px 2px 2px 6px;
  font-size: x-large;
  @media screen and (max-width: 768px){
    display: block;
  } 
`;

export const MobileContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  border: none;
  width: 400px;
  padding: 3px;
  @media screen and (max-width: 768px){
    border-right: 2px solid #ddd;
    width: 50px;
  }
`;

export const MobileSpan = styled.span`
  font-size: large;
  display: block;
  margin: 5px 0 0 8px;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const MobileParagraph = styled.p`
  font-size: x-large;
`;

export const SideWrapper = styled.div`
  padding: 4px;
  @media screen and (max-width: 768px) {
  border: none;
  padding: 0;
  }
`;


export const SideLinks = styled.div`
  display: flex;
  align-items: flex-start;
  margin-left: 3px;
  padding: 3px;
  justify-content: flex-start;
  cursor: pointer;
  font-weight: bold;
  border-bottom: 2px solid #ddd;
  color: #f51997;
  border-radius: 2.5px;
  &:hover{
    background: #e1e1e1;
  }
  @media screen and (max-width: 768px){
    justify-content: flex-start;
  }
`;