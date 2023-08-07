import PropTypes from 'prop-types';

import { Container, Title, List } from './FriendListStyles.js';

const FriendList = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <List>{children}</List>
  </Container>
);

FriendList.propTypes = {
  title: PropTypes.string.isRequired,
};

export { FriendList };
