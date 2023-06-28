import React, { useCallback, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Form = ( {fetchUserData, baseUrl} ) => {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const submitData = async () => {

        try{
            const data = {
                name: userName,
                email: userEmail,
            };

            const response = await axios.post(`${baseUrl}/createUser`, data);

            if(response.data.success) {
                toast.success("User Created Successfully");
                fetchUserData();
            }
           }
            catch(error) {
                toast.error(error.response.data.message);
            }   
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitData();
        setUserName("");
        setUserEmail("");
    };
 
    
    return (

        <>
        
            <form className="" onSubmit={handleSubmit}>
                <section className="">
                    <div className="">
                        <div className="">
                            <h1 className="">Create User</h1>
                        </div>
                        <div className="">
                            <div className="">
                                <div className="">
                                    <div className="">
                                        <label htmlFor="name" className=""></label>
                                        <input type="text" id="name" value={userName}
                                            onChange={ (e) => setUserName(e.target.value)} 
                                            className="" /> 
                                    </div>
                                </div>
                                
                                <div className="">
                                    <div className="">
                                        <label htmlFor="email" className=""></label>
                                        <input type="email" id="email" value={userEmail}
                                            onChange={(e) => setUserEmail(e.target.value)}
                                            className="" />
                                    </div>
                                </div>

                                <div className="">
                                    <button type="submit" className="">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>

        </>
    
    )
};

export default Form;