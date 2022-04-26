import React from "react";
import "./index.css"
const Form=()=>
{
    return(
        <div className="Form">
            
            <div className="Inner-form">
                <form className="form-elements">
                    <div>
                        <label>FullName:</label>
                        <input type="text" placeholder="enter the name" required />
                    
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type="text" placeholder="enter the age" required />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <input type="text" placeholder="enter the name" required />

                    </div> 
                    <div>
                        <label>Guardian Name:</label>
                        <input type="text" placeholder="enter the name" required />

                    </div>
                    <div>
                        <label>Phone Number:</label>
                        <input type="text" placeholder="enter the name" required />
                    </div>
                    <div>
                        <label>Clothes color:</label>
                        <input type="text" placeholder="enter the name" required />
                    </div>
                    <div>
                        <label>Address:</label>
                        <textarea name="address" placeholder="enter the address here"></textarea>
                    </div> 
                    <div>
                        <label>Upload Images:</label>
                        <input type="file"/>
                        
                    </div>
                        <button>Submit</button>
                    

                </form>
           </div>
        </div>
    )
}
export default Form;