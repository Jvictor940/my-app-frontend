import './App.css';
import Header from './Components/Header';
import AccountContainer from './Components/AccountContainer';
import { useState, useEffect } from 'react';
import Account from './Components/Account';
import Button from './Components/Button';

function App() {
const [user, setUser] = useState([])

const request = async () => {
  let req = await fetch('http://localhost:9292/users/5')
  let res = await req.json()
  setUser(res)
}
useEffect(() => {
  request()
  }, [])

  console.log(user.accounts)

return (
    <div className="App">
      <Header />
      <p> {user.full_name} </p>
      <p> {user.country_of_residence} </p>
      {/* <div>
        {
          user.accounts.map((account) => {
            return(
              <Account key={account.id} account={account} />
            )
          })
        }
      </div> */}
      <AccountContainer />
      <Button />
    </div>
  );
}

export default App;
