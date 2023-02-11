import styled from 'styled-components';

export const DiscoverContainer = styled.div`
  border-bottom: 2px solid #ddd;
  padding-bottom: 6px;
  @media screen and (max-width: 768px) {
    border: none;
  }
`;
export const DiscoverParagraph = styled.div`
  color: #888;
  margin: 3px;
  font-weight: bold;
  margin-top: 4px;
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const DiscoverTopics = styled.div`
  display: flex;
  margin-left: 3px;
  flex-wrap: wrap; 
  flex-direction: row;
  margin-top: 8px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
  }
`;
export const TopicsIcon = styled.span`
  font-weight: bold;
  font-size: x-large;
  padding-right: 4px;
  
`;
export const TopicsNames = styled.span `
  font-size: medium;
  display: block;
  text-transform: capitalize;
  @media screen and (max-width: 768px){
    display: none;
  }
`;
/* export const TopicContainer = styled.div`
  
`; */

export const TopicStyles = styled.div`
  border: 2px solid #e1e1e1;
  padding:  2px 4px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  margin-right: 10px;
  margin-bottom: 5px;
  color: #000;
  &:hover{
    background: #e1e1e1;
   
  }
 @media screen and (max-width: 768px) {
  border: none;
  margin-right: 0;
  margin-bottom: 0;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 10px;
 }
`;

export const NotActiveTopic = styled.div`
  
`;

export const ActiveTopic = styled.div`
  border: 2px solid #f51997;
  padding:  2px 4px;
  border-radius: 22px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: flex;
  margin-right: 10px;
  margin-bottom: 5px;
  color: #f51997;
  
 @media screen and (max-width: 768px) {
  border: none;
  margin-right: 0;
  margin-bottom: 0;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 10px;
 }
`;