import PropTypes from 'prop-types';

import { Li, Status, Avatar, Name, Point } from './FriendListItemStyles.js';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <Li key={id}>
    <Status>
      <Point state={isOnline}></Point>
    </Status>
    <Avatar src={avatar} alt="User avatar" />
    <Name>{name}</Name>
  </Li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export { FriendListItem };
