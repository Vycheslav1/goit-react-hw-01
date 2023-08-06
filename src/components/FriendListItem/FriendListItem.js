

import PropTypes from "prop-types";

import{Container,Title,List,Li,Status,Avatar,Name,PointRed,PointGreen} from './FriendLisItemStyles';

const FriendListItem = ({title, friends }) => (
  
        <Container>
          <Title>{title}</Title>
      <List>
      {   friends.map(friend => (
        friend.isOnline ? <Li key={friend.id}><Status><PointGreen></PointGreen></Status>
       <Avatar
        src={friend.avatar}
         alt="User avatar" />
       <Name>{friend.name}</Name></Li> : <Li key={friend.id}><Status><PointRed></PointRed></Status>
       <Avatar
        src={friend.avatar}
         alt="User avatar" />
       <Name>{friend.name}</Name></Li>
      
                 
        ))}
       
       </List>
      </Container>
  
  );

  FriendListItem.propTypes = {
    title:PropTypes.string.isRequired,
   friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  })),
   };

  export {FriendListItem}