

import PropTypes from "prop-types";

import{Container,Title,Description,Avatar,Name,Tag,Location,Stats,Label,Quantity,Li} from './ProfileStyles';



const Profile = ({title, username, tag, location,avatar,stats }) => (
  <Container>
    <Title>{title}</Title>
 <Description>
   <Avatar
     src={avatar}
     alt="User avatar"
    />
   <Name>{username}</Name>
   <Tag>@{tag}</Tag>
   <Location>{location}</Location>
   </Description>

 <Stats>
   <Li>
     <Label>Followers</Label>
     <Quantity>{stats.followers}</Quantity>
   </Li>
   <Li>
     <Label>Views</Label>
     <Quantity>{stats.views}</Quantity>
   </Li>
   <Li>
     <Label>Likes</Label>
     <Quantity>{stats.likes}</Quantity>
   </Li>
 </Stats>
 
</Container>

);



  Profile.propTypes = {
    title:PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired)
  };

  export {Profile} 