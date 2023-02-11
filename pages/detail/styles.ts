import styled from 'styled-components';
import { MdOutlineCancel } from 'react-icons/md';

export const DetailContainer = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
  flex-wrap: wrap;
  width: 100%;
  
`;

export const DetailWrapper = styled.div`
  position: relative;
  flex: 2;
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #000;
  @media screen and (max-width: 768px){
    width: 60%;

  }
`;

export const CancleIconContainer = styled.div`
  position: absolute;
  top: 6px;
  left: 2px;
  margin-right: 6px;
  display: flex;
  z-index: 50;
`;

export const CancleIcon = styled(MdOutlineCancel)`
  color: #fff;
  font-size: 35px;
  @media screen and (max-width: 768px){
    font-size: 21px;
  }
`;

export const VideoDetailContainer = styled.div`
  position: relative;
`;

export const VideoDetailWrapper = styled.div`
  height: 100vh;
 
`;

export const DetailVideo = styled.video`
  height: 100vh;
  cursor: pointer;
  @media screen and (max-width: 768px){
    width: 60vw;

  }
 
`;
export const PlayButtonContainer = styled.div`
  position: absolute;
  left: 45%;
  top: 45%;
  cursor: pointer;
`;

export const PlayButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const VideoMuteContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
`;

export const ImageDetailContainer = styled.div`
  cursor: pointer;
`;

export const DetailRightContainer = styled.div`
  position: relative;
  width: 25%;
  @media screen and (max-width: 768px){
    width: 40%;

  }
`;

export const DetailRightWrapper = styled.div`
  margin-top: 20px;
  
`;
export const DetailRightArrangement = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 4px;
`;

export const DetailRightTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
`;

export const CaptionText = styled.p`
  padding: 10px 10px;
  font-size: medium;
  color: #888;
`;

export const LikeContainer = styled.div`
  margin-top: 10px;
  padding: 0 10px;
  
`;