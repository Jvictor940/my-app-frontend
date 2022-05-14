import React from 'react'
import {useEffect, useState} from 'react'

function Button() {
    const [user, setUser] = useState([])

    const request = async () => {
      let req = await fetch('http://localhost:9292/accounts/5', {
          method: 'DELETE',
          headers: {'CONTENT-TYPE':'application/json'},
      })
      let res = await req.json()
      setUser(res)
    }
    useEffect(() => {
      request()
      }, [])

    return (
        <div className="Button">
            <button className='Deposit-btn'>Deposit</button>
            <button className='Withdraw-btn'>Withdraw</button>
            <button className='Dlt-btn'>Delete Account</button>
            <button className='Change-btn'>Change Account Type</button>
        </div>
    );
  }
  
  export default Button;