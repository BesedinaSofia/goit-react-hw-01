import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

const App = () => {
  return (
    <div>
      <Profile {...userData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;