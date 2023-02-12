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

export const NavSearchContainer = styled.div`
  position: relative;
  background: #f5f5f5;
  padding: 0px 5px;
  display: block;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const NavForm = styled.form`
  position: absolute;
  top: 0;
  left: -120px;
  @media screen and (max-width: 768px){
    display: static;
  }
`;

export const NavInput = styled.input`
  background: #f5f5f5;
  padding: 13px;
  font-size: medium;
  border: 2px solid #f5f5f5;
  width: 300px;
  border-radius: 10px;
  top: 0;
  &:focus{
    outline: none;
    border: 2px solid #ddd;
  }
`;

export const NavSearchButton = styled.button`
  top: 0px;
  right: 6px;
  position: absolute;
  border-left: 1px solid #ddd;
  border-right: none;
  border-top: none;
  border-bottom: none;
  font-size: x-large;
  padding-left: 4px;
  color: #ddd;
  background: transparent;
`;



