import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GoVerified } from "react-icons/go";
import {
  AccountRight,
  PostedCommentContainer,
  PostedCommentWrapper,
} from "../../components/Comments/styles";
import NoResults from "../../components/NoResults/NoResults";
import {
  Accountname,
  AccountsContainer,
  AccountsNameContainer,
  AccountsWrapper,
} from "../../components/SuggestedAccounts/styles";
import VideoCard from "../../components/VideoCard/VideoCard";
import useAuthStore from "../../store/authStore";
import { IUser, Video } from "../../types";
import { BASE_URL } from "../../utils";
import {
  AccountNames,
  NotShowVideo,
  ProfileCategoryContainer,
  ShowVideo,
} from "../../styles/profileStyles";
import {
  CategorySpacing,
  SearchAccountsContainer,
  SearchContainer,
  SearchVideosContainer,
} from "../../styles/searchTermStyles";

const Search = ({ videos }: { videos: Video[] }) => {
  const [isAccounts, setIsAccounts] = useState(false);
  const router = useRouter();
  const { searchTerm }: any = router.query;
  const { allUsers } = useAuthStore();

  const searchAccounts = allUsers.filter((user: IUser) =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SearchContainer>
      <ProfileCategoryContainer>
        <CategorySpacing>
          {isAccounts ? (
            <ShowVideo onClick={() => setIsAccounts(true)}>Accounts</ShowVideo>
          ) : (
            <NotShowVideo onClick={() => setIsAccounts(true)}>
              Accounts
            </NotShowVideo>
          )}
          {!isAccounts ? (
            <ShowVideo onClick={() => setIsAccounts(false)}>Videos</ShowVideo>
          ) : (
            <NotShowVideo onClick={() => setIsAccounts(false)}>
              Videos
            </NotShowVideo>
          )}
        </CategorySpacing>
      </ProfileCategoryContainer>
      {isAccounts ? (
        <SearchAccountsContainer>
          {searchAccounts.length > 0 ? (
            searchAccounts.map((user: IUser, i) => (
              <PostedCommentContainer key={i}>
                <Link href={`/profile/${user._id}`}>
                  <PostedCommentWrapper>
                    <AccountsContainer>
                      <AccountsWrapper>
                        <Image
                          src={user.image}
                          layout="responsive"
                          alt="user profile"
                          width={50}
                          height={50}
                          style={{ borderRadius: "50%" }}
                        />
                      </AccountsWrapper>
                      <AccountsNameContainer>
                        <AccountNames>
                          <AccountRight>
                            {user.userName.replace(" ", "")}
                            <GoVerified
                              color="cornflowerblue"
                              style={{ marginLeft: "2px" }}
                            />
                          </AccountRight>
                          <Accountname>{user.userName}</Accountname>
                        </AccountNames>
                      </AccountsNameContainer>
                    </AccountsContainer>
                  </PostedCommentWrapper>
                </Link>
              </PostedCommentContainer>
            ))
          ) : (
            <NoResults text={`No video result for ${searchTerm}`} />
          )}
        </SearchAccountsContainer>
      ) : (
        <SearchVideosContainer>
          {videos?.length ? (
            videos.map((video: Video, i) => <VideoCard post={video} key={i} />)
          ) : (
            <NoResults text={`No video result for ${searchTerm}`} />
          )}
        </SearchVideosContainer>
      )}
    </SearchContainer>
  );
};

export const getServerSideProps = async ({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) => {
  const response = await axios.get(`${BASE_URL}/api/search/${searchTerm}`);

  return {
    props: { videos: response.data },
  };
};

export default Search;
