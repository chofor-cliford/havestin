import styled from 'styled-components';
import { FaCloudUploadAlt } from 'react-icons/fa';

export const UploadContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 60px;
  margin-bottom: 10px;
  padding-top: 10px;
  background: #f8f8f8;
  justify-content: center;
`;

export const UploadWrapper = styled.div`
  background: #fff;
  border-radius: 10px;
  display: flex;
  margin-left: 6px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  padding-top: 6px;
  width: 60%;

`;

export const UploadBox = styled.div`
  border: 4px dashed #ddd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  margin-top: 10px;
  width: 260px;
  height: 460px;
  padding: 10px;
  cursor: pointer;
  &:hover{
    border-color: #f51995;
    background: #e1e1e1;
    
  }
`;

export const UploadBoxTitle = styled.p`
  font-size: x-large;
  font-weight: bold;
`;

export const UploadBoxParagraph = styled.p`
  font-size: medium;
  color: #888;
  margin-top: 1px;
`;

export const NoVideoAssetContainer = styled.label`
  cursor: pointer;

`;

export const NoVideoAssetWrappers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

`;
export const NoVideoAssetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const UploadIconContainer = styled.div`
  font-weight: bold;
  font-size: x-large;

`;

export const UploadIcon = styled(FaCloudUploadAlt)`
  color: #aaa;
  font-size: 70px;
`;

export const UploadText = styled.p`
  font-size: large;
  font-weight: bold;
`;

export const Recommendation = styled.p`
  color: #aaa;
  text-align: center;
  margin-top: 10px;
  font-size: small;
  line-height: 30px;
`;

export const UploadButton = styled.p`
  background: #f51997;
  text-align: center;
  margin-top: 10px;
  border-radius: 2px;
  color: #fff;
  font-size: 14px;
  padding: 4px;
  width: 152px;
  border: none;
  outline: none;
`;

export const Input = styled.input`
  width: 0;
  height: 0;
`;

export const UploadVideo = styled.video`
  border-radius: 5px;
  height: 450px;
  margin-top: 16px;
  background: #000;
`;

export const Erro = styled.p`
  color: #ff0000;
  text-align: center;
  font-size: large;
  font-weight: bold;
  margin-top: 4px;
  width: 250px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
  padding-bottom: 10px;
`;

export const Caption = styled.label`
  font-size: medium;
`;
export const CaptionInput = styled.input`
  border-radius: 5px;
  outline: none;
  border: 2px solid #ddd;
  padding: 2px;
  margin: 10px 0;
`;

export const Select = styled.select`
  outline: none;
  border: 2px solid #e1e1e1;
  font-size: medium;
  text-transform: capitalize;
  padding: 2px;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px 0;
`;

export const Option = styled.option`
  outline: none;
  text-transform: capitalize;
  background: #fff;
  color: #001;
  font-size: 16px;
  padding: 2px;
  &:hover{
    background: #f1f1f1;
  }
`;

export const FormButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const DiscardButton = styled.button`
 border: 2px solid #ddd;
 font-size: medium;
 padding: 2px;
 border-radius: 2.5px;
 width: 78px;
 margin-right: 6px;
 height: 28px;
`;

export const PostButton = styled.button`
 background: #f51997;
 border: none;
 outline: none;
 color: #fff;
 font-size: medium;
 padding: 2px;
 border-radius: 2.5px;
 width: 78px;
 height: 28px;
`;