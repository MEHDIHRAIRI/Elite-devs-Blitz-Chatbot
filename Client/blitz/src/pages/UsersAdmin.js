import React, { useState, useEffect } from 'react';
import NavbarAdmin from 'components/headers/light';

import './Admin.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

const pageSize = 4;
export default function UsersAdmin() {
  const [users, setUsers] = useState([]);
  const [paginationUsers, setpaginationUsers] = useState();
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUsers(response.data);
    setpaginationUsers(_(response.data).slice(0).take(pageSize).value());
  }, []);

  function handelDelete(id) {
    axios.delete('http://localhost:5000/user/delete/' + id).then(() => {
      setUsers(users.filter((user) => user._id != id));
    });
  }

  const pageCount = users ? Math.ceil(users.length / pageSize) : 0;

  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedUser = _(users).slice(startIndex).take(pageSize).value();
    setpaginationUsers(paginatedUser);
  };

  return (
    <>
      <NavbarAdmin />

      <div className='container'>
        {!paginationUsers ? (
          'no data found'
        ) : (
          <table className='table'>
            <thead className='thead-dark'>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Date of the creation</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginationUsers.map((user, index) => (
                <tr key={index}>
                  <td>
                    <Link to={'/profile/' + user._id}> {user.name}</Link>
                  </td>
                  <td> {user.email}</td>
                  <td>{user.date?.slice(0, 10)}</td>
                  <td>
                    <button
                      type='submit'
                      className='btn btn-danger'
                      onClick={() => handelDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <nav className='d-flex justify-content-center'>
          <ul className='pagination'>
            {pages.map((page) => (
              <li
                className={
                  page == currentPage ? 'page-item active' : 'page-item'
                }
              >
                <p className='page-link' onClick={() => pagination(page)}>
                  {page}
                </p>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
