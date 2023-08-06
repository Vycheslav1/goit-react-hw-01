import {Profile} from './Profile/Profile';

import {Statistics} from './Statistics/Statistics';

import {FriendListItem} from './FriendListItem/FriendListItem';

import {TransactionHistory} from './TransactionHistory/TransactionHistory';


import user from 'data/user.json';

import data from 'data/data.json';

import friends from 'data/friends.json';

import transactions from 'data/transactions.json';


export const App = () => {
  return (
    <>
    <Profile title="Profile" username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/> 
  <Statistics title="Upload stats" stats={data}/> 
  <FriendListItem title="Friends" friends={friends}/> 
  <TransactionHistory title="Transaction History" items={transactions}/> 
   </>
  );
  
};
