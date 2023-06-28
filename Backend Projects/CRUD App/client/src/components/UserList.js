import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

const UserList = ( { userData, fetchUserData, baseUrl} ) => {

    const handleEdit = async (user) => {

        try {
            const userName = prompt("Enter New Name");
            const userEmail = prompt("Enter New Email");

            if ( !userName || !userEmail) {
                toast.error("Please enter both name and email");
            }
             else {
                const response = await axios.put(`${baseUrl}/editUser/${user._id}`, {
                    name: userName,
                    email: userEmail,
                });

            if ( response.data.success) {
                toast.success("User edited successfully");
                fetchUserData();
               }
            }
        }
         catch(error) {
            toast.error(error.response.data.message);
         }
    };


    const handleDelete = async (userID) => {

        try {
            const response = await axios.delete(`${baseUrl}/deleteUser/${userID}`);

            if (response.data.success) {
                toast.success("User deleted successfully");
                fetchUserData();
            }
        }

        catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (

        <section className="">

            <div className="">

                <div className="">

                    <h1 className="">All Users</h1>
                
                </div>
            
                <div className="">

                    <table className="">

                        <thead>

                            <tr>
                                <th className="">Name</th>
                                <th className="">Email</th>
                                <th className="">Edit</th>
                                <th className="">Delete</th>
                            </tr>
                    
                        </thead>

                        <tbody>

                            {userData && userData.map((user) => (
                            
                                <tr key={user._id}>

                                    <td className="">{user.name}</td>
                                    
                                    <td className="">{user.email}</td>
                                    
                                    <td className="">

                                    <button className="" onClick={() => handleEdit(user)}>Edit</button>
                                
                                    </td>

                                    <td className="">

                                        <button className="" onClick={() => handleDelete(user._id)}>Delete</button>
                                
                                    </td>
                            
                                </tr>
                        
                            ) )}
                   
                        </tbody>
               
                    </table>

                </div>

           </div>
        
        </section>
    
    )

};

export default UserList;