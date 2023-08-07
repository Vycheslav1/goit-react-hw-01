import { Profile } from './Profile/Profile.js';

import { Statistics } from './Statistics/Statistics.js';

import { FriendList } from './FriendList/FriendList.js';

import { FriendListItem } from './FriendListItem/FriendListItem.js';

import { TransactionHistory } from './TransactionHistory/TransactionHistory.js';

import user from 'data/user.json';

import data from 'data/data.json';

import friends from 'data/friends.json';

import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        title="Profile"
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList title="Friends">
        <FriendListItem friends={friends} />
      </FriendList>
      <TransactionHistory title="Transaction History" items={transactions} />
    </>
  );
};
