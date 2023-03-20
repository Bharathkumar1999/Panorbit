import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export const userContext = createContext();

const userDataArr = JSON.parse(localStorage.getItem("userData"))


const UserProvider = ({ children }) => {

const [loading, setLoading] = useState(false)
const [users, setUsers] = useState([]);


const getUserData = async () => {
try {
    setLoading(true)
    const res = await axios.get('https://panorbit.in/api/users.json');
    const userData = res.data.users;
    setLoading(false)
    setUsers(userData);
} catch (error) {
    console.error(error);
    setLoading(false)
}
};


useEffect(() => {
    getUserData();
}, []);


return (
<userContext.Provider value={{ users, getUserData, userDataArr, loading }}>
    {children}
</userContext.Provider>
)
}


export default UserProvider;




