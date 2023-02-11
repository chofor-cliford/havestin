import styled from 'styled-components';

export const SuggestedAccountsContainer = styled.div`
  border-bottom: 2px solid #ddd;
  padding-bottom: 4px;
`;

export const SuggestedAccountTitle = styled.div`
  color: #888;
  font-weight: bold;
  display: block;
  margin-top: 7px;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const AccountsContainer = styled.div`
  display: flex;
  margin-bottom: 3px;
  padding: 2px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 2.5px;
  &:hover{
    background: #e1e1e1;
  }
`;

export const AccountsWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 6px;
`;

export const AccountsNameContainer = styled.div`
  display: block;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const AccountName = styled.p`
  display: flex;
  align-items: center;
  font-size: medium;
  font-weight: bold;
  color: #000;
  text-transform: lowercase;
`;

export const Accountname = styled.p`
  text-transform: capitalize;
  color: #aaa;
  font-size: x-small;
  align-self: flex-start;
`;