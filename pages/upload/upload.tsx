import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { MdDelete } from 'react-icons/md';
import axios  from 'axios'; 
import useAuthStore from '../../store/authStore';
import { SanityAssetDocument } from '@sanity/client';
import { client } from '../../utils/client';
import { Caption, CaptionInput, DiscardButton, Erro, FormButtonContainer, FormContainer, Input, NoVideoAssetContainer, NoVideoAssetWrapper, NoVideoAssetWrappers, Option, PostButton, Recommendation, Select, UploadBox, UploadBoxParagraph, UploadBoxTitle, UploadButton, UploadContainer, UploadIcon, UploadIconContainer, UploadText, UploadVideo, UploadWrapper } from './styles';
import { topics } from '../../utils/constants';
import { BASE_URL } from '../../utils';

const Upload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [videoAsset, setVideoAsset] = useState<SanityAssetDocument | undefined>();
  const [wrongFileType, setWrongFileType] = useState(false);
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState(topics[0].name);
  const [savingPost, setSavingPost] = useState(false);
  const {userProfile}:{userProfile: any} = useAuthStore();
  const router = useRouter();

  const uploadVideo = async (e:any) => {
    const selectedFile = e.target.files[0];
    const fileTypes = ['video/mp4', 'video/ogg', 'video/webm'];
    if(fileTypes.includes(selectedFile.type)){
      client
      .assets.upload('file', selectedFile, {contentType: selectedFile.type, filename: selectedFile.name})
      .then((data) => {
        setVideoAsset(data);
        setIsLoading(false);
      })
      
    }else{
      setIsLoading(false);
      setWrongFileType(true);
    }
  }
  const handlePost = async () =>{
    if(caption && videoAsset?._id && category){
      setSavingPost(true);

      const document = {
        _type: 'post',
        caption,
        video: {
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref: videoAsset._id
          }
        },
        userId: userProfile?._id,
        postedBy: {
          _type: 'PostedBy',
          _ref: userProfile?._id
        },
        topic: category
      }
      await axios.post(`${BASE_URL}/api/post`, document);
      router.push('/');
    }
  }

  return (
    <UploadContainer>
      <UploadWrapper>
        <div>
        <div>
        <UploadBoxTitle>Upload Video</UploadBoxTitle>
        <UploadBoxParagraph>
          Post a video on your account
        </UploadBoxParagraph>
        </div>
        <UploadBox>
          {isLoading ? (
            <p>Uploading...</p>
          ):(
            <>
             {videoAsset ? (
              <>
               <UploadVideo src={videoAsset.url} loop controls/>
              </>
             ):(
              <NoVideoAssetContainer>
                <NoVideoAssetWrappers>
                  <NoVideoAssetWrapper>
                    <UploadIconContainer>
                      <UploadIcon />
                      <UploadText>Upload Video</UploadText>
                    </UploadIconContainer>
                    <Recommendation>
                      MP4 or WEbM or Ogg <br />
                      720X1280 or higher <br />
                      Up to 10 minutes <br />
                      Less than 2GB 
                    </Recommendation>
                    <UploadButton>Select File</UploadButton>
                    </NoVideoAssetWrapper>
                    <Input type='file' name='upload-video' onChange={uploadVideo} />
                  </NoVideoAssetWrappers>
              </NoVideoAssetContainer>
             )}
            </>
          )}
         
        </UploadBox>
        {wrongFileType && (
            <Erro>Please select a video file</Erro>
          )}
        </div>

          <FormContainer>
            <Caption>Caption</Caption>
            <CaptionInput type='text' value={caption} onChange={(e) => setCaption(e.target.value)} />
            <Caption>Choose a Category</Caption>
            <Select onChange={(e) => setCategory(e.target.value)}>
              {topics.map((topic) => (
                <Option value={topic.name} key={topic.name}>{topic.name}</Option>
              ))}
            </Select>
            <FormButtonContainer>
              <DiscardButton
              type='button'
              onClick={handlePost}
              >
                  Discard
              </DiscardButton>
              <PostButton
              type='button'
              onClick={handlePost}
              >
                Post
              </PostButton>
            </FormButtonContainer>
          </FormContainer>
      </UploadWrapper>
    </UploadContainer>
  )
}

export default Upload