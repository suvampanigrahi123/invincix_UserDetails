import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/page1.css"
const Page1 = () => {
  const [users,setUsers]=useState([])
  const [loading, setloading] = useState(false)
  const [page, setpage] = useState(1)
  const fetchusers=()=>{
    setloading(true)
    fetch(`https://reqres.in/api/users?page=${page}`).then((res)=>{
      res.json().then((result)=>{
        const {data}=result
        console.log(result);
        setUsers(data)
        setloading(false)
        console.log('called');
      })
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    fetchusers()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[page])
 const handlepage=()=>{
   if(page===1){
     setpage(2)
   }else{
     setpage(1)
   }
 }
  return (
    <div className='Page'>
    <div className='header'>
        <h3>Messages</h3>
    </div>
    <div className='users'>
        {
          loading ? <h2 style={{textAlign:'center'}}>Connect Your Network</h2>:
          ( users.map((val,key)=>(
              <div key={val.id} className='user'>
              {/* <div>

              </div> */}
              <img src={val.avatar} alt={val.first_name} />
              <p id='name'>{val.first_name+"  "+val.last_name} </p>
              <p> { ` ${Math.floor( Math.random()*24)}: ${ Math.floor( Math.random()*60)} `  } </p>
              <div className='svg'>
              <Link to={`/user/${val.id}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/></svg>
              </Link>
              </div>
              </div>
            ))
          )
        }
        <button id='btn' onClick={()=>handlepage()}>{page===1?`Next Page`:`Previous page`}</button>
        </div>
    </div>
  )
}

export default Page1