import { Profile } from 'components/Profile/Profile';
import user from '../components/Profile/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import stats from '../components/Statistics/data.json';

import { FriendList } from 'components/FriendList/FriendList';
import friends from '../components/FriendList/friends.json';

import { TransactionHistory } from 'components/Transaction/TransactionHistory';
import transactions from '../components/Transaction/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        //height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
