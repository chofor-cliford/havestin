import styled from 'styled-components';
import {GoVerified} from 'react-icons/go';

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #ddd;
  padding-bottom: 6px;
`;

export const VideoCardWrapper = styled.div`
  display: flex;
  margin-right: 3px;
  padding: 2px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
`;

export const VideoCardArrangement = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 5px;
  @media screen and (max-width: 768px){
    width: 36px;
    height: 36px;
  }
`;

export const UserProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2px;
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  margin-right: 2px;
  font-size: large;
  font-weight: bold;
  color: #000;
  @media screen and (max-width: 768px){
    font-size: medium;
  }
`;

export const Icon = styled(GoVerified)`
  color: cornflowerblue;
  font-size: medium;
  margin: 0 3px;
`;

export const Username = styled.p`
  text-transform: capitalize;
  font-size: small;
  color: #888;
  display: block;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const VideoPostContainer = styled.div`
  margin-left: 20px;
  display: flex;
  margin-right: 4px;
  position: relative;
  @media screen and (max-width: 768px){
    margin-left: 0;
  }
`;

export const VideoPostWrapper = styled.div`
  border-radius: 10px;
`;

export const Videos = styled.video`
  width: 600px;
  height: 300px;
  cursor: pointer;
  border-radius: 10px;
  background: #f5f5f5;
  border: 1px solid #e1e1e1;
  @media screen and (max-width: 768px){
   width: 200px;
   height: 300px;
  }
`;

export const PlayingContainer = styled.div`
  position: absolute;
  bottom: 6px;
  cursor: pointer;
  left: 40%;
  display: flex;
  width: 100px;
  padding: 3px;
  justify-content: space-between;
  @media screen and (max-width: 768px){
    left: 52px;
  }
`;

export const Button = styled.button`
  outline: none;
  
`;