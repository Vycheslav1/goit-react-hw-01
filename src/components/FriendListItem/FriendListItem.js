import PropTypes from 'prop-types';

import {
  Li,
  Status,
  Avatar,
  Name,
  PointRed,
  PointGreen,
} from './FriendListItemStyles.js';

const FriendListItem = ({ friends }) =>
  friends.map(friend =>
    friend.isOnline ? (
      <Li key={friend.id}>
        <Status>
          <PointGreen></PointGreen>
        </Status>
        <Avatar src={friend.avatar} alt="User avatar" />
        <Name>{friend.name}</Name>
      </Li>
    ) : (
      <Li key={friend.id}>
        <Status>
          <PointRed></PointRed>
        </Status>
        <Avatar src={friend.avatar} alt="User avatar" />
        <Name>{friend.name}</Name>
      </Li>
    )
  );

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export { FriendListItem };
