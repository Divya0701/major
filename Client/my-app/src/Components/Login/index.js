import "./index.css";
import { BsFillBinocularsFill} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'

const Login=()=>{
    const text="<Let's Find out/>"
    let navigate = useNavigate()
    return (
        <div className="bgContainer">
        <div className="Outer-Container1">
         <div className="Inner-Container1">
           <div className="logo-container">
             <BsFillBinocularsFill className="logo"/>
             <h1 className="jkll">{text}</h1>
           </div>
         </div>
        </div>
         <div className="Outer-Container2">
         <div className="Inner-Container2">
            <div className="login-container">
                <h1 className="head">Login</h1>
                <label htmlFor="username" className="label">username</label>
                <input id="username" type="text" className="input"></input>
                <label htmlFor="password"  className="label">password</label>
                <input id="password" type="password" className="input"></input>
                <button type="submit" className="button" onClick={()=>{navigate("/")}}>Submit</button>
            </div>
         </div>
        </div>
        </div>
        
      );
}

export default Login;