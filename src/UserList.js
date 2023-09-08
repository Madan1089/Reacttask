import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setData(response.data))
      
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <table border={1}>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address ? user.address.city : 'N/A'}</td>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default UserList;
