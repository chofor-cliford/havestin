import styled from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #e1e1e1;
  padding: 2px 4px;
`;
export const NavMenu = styled.div`
  width: 180px;
  height: 60px;
  
`;

export const LoggedUserContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  @media screen and (max-width: 768px){
    width: 120px;
  }
`;

export const UploadButton = styled.button`
  border: 2px solid #ddd;
  padding: 2px;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: medium;
  cursor: pointer;
  margin-left: 2px;
`;

export const UploadText = styled.span`
  display: block;
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const LogoutButton = styled.button`
  padding: 0 2px;
  border: none;
  border-radius: 20px;
`;

export const NavSearchContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 3px 0px;
  background: #f5f5f5;
  border: 2px solid #f5f5f5;
  border-radius: 10px;
  outline: none;

  &:focus{
    outline: 2px solid #ccc;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const NavInput = styled.input`
  background: #f5f5f5;
  padding: 13px 0;
  width: 300px;
  border: none;
  outline: none;;
  border-right: 1px solid #ddd;
`;

export const NavSearchButton = styled.button`
  font-size: x-large;
  color: #ddd;
  background: none;
  cursor: pointer;
  border: none;
`;



