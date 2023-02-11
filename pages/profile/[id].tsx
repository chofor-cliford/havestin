import React, { useEffect, useState } from "react";
import Image from "next/image";
import VideoCard from "../../components/VideoCard/VideoCard";
import axios from "axios";
import { BASE_URL } from "../../utils";
import { Video, IUser } from "../../types";
import {
  Accountnames,
  AccountsNameContainers,
  AccountsWrappers,
  AccountNames,
  ProfileContainer,
  ProfileWrapper,
  ProfileCategoryContainer,
  ShowVideo,
  NotShowVideo,
  Categoryspacing,
  VideoListContainer,
} from "../../styles/profileStyles";
import { AccountsContainer } from "../../components/SuggestedAccounts/styles";
import { GoVerified } from "react-icons/go";
import { AccountRight } from "../../components/Comments/styles";
import NoResults from "../../components/NoResults/NoResults";
interface Iprops {
  data: {
    user: IUser;
    userVideos: Video[];
    userLikedVideos: Video[];
  };
}

const Profile = ({ data }: Iprops) => {
  const { user, userVideos, userLikedVideos } = data;
  const [showUserVideos, setShowUserVideos] = useState(false);
  const [userList, setUserList] = useState<Video[]>([]);

  useEffect(() => {
    if (showUserVideos) {
      setUserList(userVideos);
    } else {
      setUserList(userLikedVideos);
    }
  }, [showUserVideos, userLikedVideos, userVideos]);

  return (
    <ProfileContainer>
      <ProfileWrapper>
        <AccountsContainer>
          <AccountsWrappers>
            <Image
              src={user.image}
              layout="responsive"
              alt="user profile"
              width={62}
              height={62}
              style={{ borderRadius: "50%" }}
            />
          </AccountsWrappers>
          <AccountsNameContainers>
            <AccountNames>
              <AccountRight>
                {user.userName.replace(" ", "")}
                <GoVerified
                  color="cornflowerblue"
                  style={{ marginLeft: "2px" }}
                />
              </AccountRight>
              <Accountnames>{user.userName}</Accountnames>
            </AccountNames>
          </AccountsNameContainers>
        </AccountsContainer>
      </ProfileWrapper>
      <ProfileCategoryContainer>
        <Categoryspacing>
          {showUserVideos ? (
            <ShowVideo onClick={() => setShowUserVideos(true)}>Video</ShowVideo>
          ) : (
            <NotShowVideo onClick={() => setShowUserVideos(true)}>
              Video
            </NotShowVideo>
          )}
          {!showUserVideos ? (
            <ShowVideo onClick={() => setShowUserVideos(false)}>
              Liked
            </ShowVideo>
          ) : (
            <NotShowVideo onClick={() => setShowUserVideos(false)}>
              Liked
            </NotShowVideo>
          )}
        </Categoryspacing>
      </ProfileCategoryContainer>
      <VideoListContainer>
        {userList.length > 0 ? (
          userList.map((post: Video, i: number) => (
            <VideoCard post={post} key={i} />
          ))
        ) : (
          <NoResults text={`No ${showUserVideos ? "" : "Liked"} videos yet.`} />
        )}
      </VideoListContainer>
    </ProfileContainer>
  );
};

export default Profile;

export const getServerSideProps = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const response = await axios.get(`${BASE_URL}/api/profile/${id}`);

  return {
    props: { data: response.data },
  };
};
