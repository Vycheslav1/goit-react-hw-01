import {Profile} from './Profile/profile.js';

import user from './Profile/user.json';

import {Statistics} from './Statistics/statistics.js';

import data from './Statistics/data.json';

import {FriendList} from './FriendList/friendlist.js';

import friends from './FriendList/friends.json';

import {TransactionHistory} from './TransactionHistory/transaction-history.js';

import transactions from './TransactionHistory/transactions.json';


export const App = () => {
  return (
    <>
    <Profile title="Profile" username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/> <Statistics title="Upload stats" stats={data}/> <FriendList title="Friends" friends={friends}/> <TransactionHistory title="Transaction History" items={transactions}/> 
   </>
  );
  
};
