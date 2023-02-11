import styled from 'styled-components';

export const CommentsContainer = styled.div`
  border-top: 2px solid #ddd;
  padding-top: 4px;
  padding: 0 10px;
  background: #f8f8f8;
  border-bottom: 2px;
  padding-bottom: 100px;
`;

export const CommentsWrapper = styled.div`
  overflow: auto;
  height: 457px;
`;

export const UsersCommentContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 6px;
  padding: 0 10px;
`;

export const Form = styled.form`
  display: flex;
  margin-right: 4px;
`;

export const Input = styled.input`
  background-color: #f1f1f1;
  padding: 4px 4px;
  font-size: medium;
  width: 180px;
  border-radius: 5px;
  border: 2px solid #e1e1e1;
  flex: 1;
  &:focus{
    outline: none;
    border: 2px solid #aaa;
  }
`;

export const PostingButton = styled.button`
  font-size: medium;
  color: #888;
  margin-left: 2px;
`;

export const PostedCommentContainer = styled.div`
  padding: 2px;
  align-items: center;
`;

export const PostedCommentWrapper= styled.div`
  display: flex;
  align-items: flex-start;
  margin-right: 3px;
`;

export const AccountNames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  color: #000;
  text-transform: lowercase;
`;
export const AccountRight = styled.div`
  display: flex;
  flex-direction: row;
 
`;