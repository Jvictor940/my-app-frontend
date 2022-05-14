import React from 'react'
import {useEffect, useState} from 'react'

function AccountContainer() {
  const [user, setUser] = useState([])

const request = async (e) => {
  e.preventDefault
  let req = await fetch('http://localhost:9292/accounts', {
      method: 'POST',
      headers: {'CONTENT-TYPE':'application/json'},
      body: JSON.stringify(user)
  })
  let res = await req.json()
  setUser(res)
}
useEffect(() => {
  request()
  }, [])

    return (
      <div className="AccountContainer">
        <Balance />
          
      </div>
    );
  }
  
  export default AccountContainer;