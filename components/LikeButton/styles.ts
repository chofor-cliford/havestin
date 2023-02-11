import styled from 'styled-components';

export const LikeButtonContainer = styled.div`
  margin-right: 6px;
  display: flex;
`;

export const LikeButtonWrapper = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const AlreadyLiked = styled.div`
  background: #e1e1e1;
  border-radius: 50%;
  padding: 4px 4px 0 4px;
  color: #f51997;
`;

export const NotAlreadyLiked = styled.div`
  background: #e1e1e1;
  border-radius: 50%;
  padding: 4px 4px 0 4px;
`;

export const LikeText = styled.p`
  font-size: medium;
  font-weight: bold;
  
`;

