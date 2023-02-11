import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  margin-right: 6px;
  background: #fff;
  width: 100%;
  margin-bottom: 4px;
`;

export const AccountsWrappers = styled.div`
  width: 64px;
  height: 64px;
  margin-right: 6px;
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;
export const AccountsNameContainers = styled.div`
  display: flex;
`;

export const AccountNames = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: larger;
  font-weight: bold;
  word-spacing: 2px;
  color: #000;
  text-transform: capitalize;
`;

export const Accountnames = styled.p`
  text-transform: capitalize;
  color: #aaa;
  font-size: 14px;
  align-self: flex-start;
`;

export const ProfileCategoryContainer = styled.div`
  display: flex;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #ddd;
  width: 100%;
`;

export const Categoryspacing = styled.div`
  width: 18%;
  justify-content: space-between;
  display: flex;
`;

export const ShowVideo = styled.p`
  font-weight: bold;
  cursor: pointer;
  font-size: large;

  border-bottom: 2px solid #001;
`;
export const NotShowVideo = styled.p`
  font-weight: bold;
  cursor: pointer;
  font-size: large;
  margin-top: 2px;
  color: #888;
`;

export const VideoListContainer = styled.div``;
