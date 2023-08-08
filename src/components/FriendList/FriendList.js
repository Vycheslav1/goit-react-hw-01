import PropTypes from 'prop-types';

import { Container, Title, List } from './FriendListStyles.js';
import { FriendListItem } from 'components/FriendListItem/FriendListItem.js';

const FriendList = ({ title, friends }) => (
  <Container>
    <Title>{title}</Title>
    <List>{friends.map(friend => FriendListItem(friend))}</List>
  </Container>
);

FriendList.propTypes = {
  title: PropTypes.string.isRequired,
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export { FriendList };
