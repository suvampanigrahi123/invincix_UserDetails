import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import './userProfile.css'
const UserProfile=()=>{
    const {id}=useParams()
    const [userdetail, setuserdetail] = useState([])

    const fetchUserDetails=()=>{
        fetch(`https://reqres.in/api/users/${id}`).then((res)=>{
            res.json().then((result)=>{
                const {data}=result
                setuserdetail(data)
            })
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchUserDetails();
    },[id])
    return(
        <div className="Profile">
          <div className="userInfo">
          <img src={userdetail.avatar}  alt={userdetail.first_name}/>
          <h1>{`@${userdetail.first_name}User`}</h1>
          <h3>{`${userdetail.email}`}</h3>
          <Link to={`/`}>

          <p> <svg id="left-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"/></svg> Back to Home</p>
          </Link>
          </div>
          <div className="userDetails" >
                <h1>Account Info</h1>
                <div className="Detail">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
                <div>
                <h2>Name</h2>
                <p>{`${userdetail.first_name+" " +userdetail.last_name}`}</p>
                </div>
                </div>
                <div className="Detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 417.1c-16.38 0-32.88-4.1-46.88-15.12L0 250.9v213.1C0 490.5 21.5 512 48 512h416c26.5 0 48-21.5 48-47.1V250.9l-209.1 151.1C288.9 412 272.4 417.1 256 417.1zM493.6 163C484.8 156 476.4 149.5 464 140.1v-44.12c0-26.5-21.5-48-48-48l-77.5 .0016c-3.125-2.25-5.875-4.25-9.125-6.5C312.6 29.13 279.3-.3732 256 .0018C232.8-.3732 199.4 29.13 182.6 41.5c-3.25 2.25-6 4.25-9.125 6.5L96 48c-26.5 0-48 21.5-48 48v44.12C35.63 149.5 27.25 156 18.38 163C6.75 172 0 186 0 200.8v10.62l96 69.37V96h320v184.7l96-69.37V200.8C512 186 505.3 172 493.6 163zM176 255.1h160c8.836 0 16-7.164 16-15.1c0-8.838-7.164-16-16-16h-160c-8.836 0-16 7.162-16 16C160 248.8 167.2 255.1 176 255.1zM176 191.1h160c8.836 0 16-7.164 16-16c0-8.838-7.164-15.1-16-15.1h-160c-8.836 0-16 7.162-16 15.1C160 184.8 167.2 191.1 176 191.1z"/></svg>
                <div>

                <h2>email</h2>
                <p>{`${userdetail.email}`}</p>
                </div>
                </div>
                <div className="Detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 64C0 28.65 28.65 0 64 0H256C291.3 0 320 28.65 320 64V448C320 483.3 291.3 512 256 512H64C28.65 512 0 483.3 0 448V64zM64 232C64 245.3 74.75 256 88 256H232C245.3 256 256 245.3 256 232V152C256 138.7 245.3 128 232 128H88C74.75 128 64 138.7 64 152V232zM80 352C93.25 352 104 341.3 104 328C104 314.7 93.25 304 80 304C66.75 304 56 314.7 56 328C56 341.3 66.75 352 80 352zM80 384C66.75 384 56 394.7 56 408C56 421.3 66.75 432 80 432C93.25 432 104 421.3 104 408C104 394.7 93.25 384 80 384zM160 352C173.3 352 184 341.3 184 328C184 314.7 173.3 304 160 304C146.7 304 136 314.7 136 328C136 341.3 146.7 352 160 352zM160 384C146.7 384 136 394.7 136 408C136 421.3 146.7 432 160 432C173.3 432 184 421.3 184 408C184 394.7 173.3 384 160 384zM240 352C253.3 352 264 341.3 264 328C264 314.7 253.3 304 240 304C226.7 304 216 314.7 216 328C216 341.3 226.7 352 240 352zM240 384C226.7 384 216 394.7 216 408C216 421.3 226.7 432 240 432C253.3 432 264 421.3 264 408C264 394.7 253.3 384 240 384zM128 48C119.2 48 112 55.16 112 64C112 72.84 119.2 80 128 80H192C200.8 80 208 72.84 208 64C208 55.16 200.8 48 192 48H128z"/></svg>
                <div>

                <h2>Mob</h2>
                <p>{`+91 9783${Math.floor(Math.random()*100000+100000)}`}</p>
                </div>
                </div>
                <div className="Detail">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32zM448 464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192H448V464z"/></svg>
                <div>

                <h2>D.O.B</h2>
                <p>{`${Math.floor(Math.random()*30+1)}/${Math.floor(Math.random()*12+1)}/2002`}</p>
                </div>
                </div>
          </div>
        </div>
    )
}
export default UserProfile;