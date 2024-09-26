import {React, useState } from 'react';
import {db, auth} from '../../firebase/config';
import {collection, getCountFromServer, 
    query, where, getDocs} from 'firebase/firestore'


const LogIn = () => {  
    const [loginData, setLogin] = useState({
        email: '',
        pw: ''
    });
    const [errorMsg, setError] = useState(null); 

    const onSubmit = async (e) =>{
        e.preventDefault();
        
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", loginData.email));
        
        const snapshot = await getCountFromServer(q);
        if(snapshot.data().count < 1){
            setError('email not found');
        }
        else{
            var pass = '';
            await getDocs(q).then(snap=>{
            
                snap.forEach(ran=>{
                    pass = ran.get("pw")
                })
                
            })
            
            if(pass != loginData.pw){
                setError('incorrect email or password');
            }
            else{
                setError(null);
                auth.signInWithEmailAndPassword(loginData.email, loginData.pw)
                    .then((userCredential) => {
                        var user = userCredential.user;
                    });
            }
        }

        ;
        
    }

    return (
        <form className="login" onSubmit = {onSubmit}>
            <input onChange={(e)=>setLogin({...loginData, email: e.target.value})} 
                value={loginData.email} 
                type="email" id="email" name="email"/><br/>
            <input onChange={(e)=>setLogin({...loginData, pw: e.target.value})} 
                value={loginData.pw} 
                type="password" id="pw" name="pw"/><br/>
            <input type="submit" name="loginSubmit"/>
            <div className = 'error'> {errorMsg} </div>
        </form>
    )

}

export default LogIn;