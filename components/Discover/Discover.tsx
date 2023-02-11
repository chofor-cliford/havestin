import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {topics} from '../../utils/constants'
import { ActiveTopic, DiscoverContainer, DiscoverParagraph, DiscoverTopics, TopicsIcon, TopicsNames, TopicStyles } from './styles';

const Discover = () => {
  const router = useRouter();
  const { topic } = router.query;
  return (
    <DiscoverContainer>
      <DiscoverParagraph>Popular Topics</DiscoverParagraph>
      <DiscoverTopics> 
        {topics.map((item) => (
          <Link href={`/?topic=${item.name}`} key={item.name}>
            {topic === item.name ? (
              <ActiveTopic>
              <TopicsIcon>
              {item.icon}
              </TopicsIcon>
              <TopicsNames>
              {item.name}
              </TopicsNames>
              </ActiveTopic>
            ):(
              <TopicStyles>
              <TopicsIcon>
              {item.icon}
              </TopicsIcon>
              <TopicsNames>
              {item.name}
              </TopicsNames>
              </TopicStyles>
            )}
              
          </Link>
         
        ))}   
    </DiscoverTopics>
    </DiscoverContainer>
  )
}

export default Discover
