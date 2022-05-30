import React, { useState, useEffect } from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export const User = () => {
  const fetchData = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      setUsers(data);
      return data;
    } catch (error) {
      return error;
    }
  };
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const [searchUser, setSearchUSser] = useState("");
  const [filterUser, setFilterUser] = useState([]);

  useEffect(() => {
    if (users && users.length > 0) {
      const filteredUsers = !searchUser
        ? users
        : users.filter(
            (user) =>
              new RegExp(searchUser, "i").test(user.name) ||
              new RegExp(searchUser, "i").test(user.email)
          );
      setFilterUser(filteredUsers);
    }
  }, [searchUser, users]);
  const [sortColumns, setSortColumns] = useState({ id: "asc", name: "asc" });
  const handleSort = (columnName) => {
    let sorting = { ...sortColumns };
    sorting[columnName] = sorting[columnName] === "asc" ? "desc" : "asc";
    setSortColumns(sorting);

    if (columnName === "id") {
      if (sorting[columnName] === "asc") {
        filterUser.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
      } else {
        filterUser.sort((a, b) => (a.id < b.id ? 1 : b.id < a.id ? -1 : 0));
      }
    } else if (columnName === "name") {
      if (sorting[columnName] === "asc") {
        filterUser.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      } else {
        filterUser.sort((a, b) =>
          a.name < b.name ? 1 : b.name < a.name ? -1 : 0
        );
      }
    }
  };
  return (
    <div className="container mx-auto">
      <div className="float-right my-2">
        <input
          type="text"
          placeholder="search user"
          onChange={(e) => setSearchUSser(e.target.value)}
          className="px-2 py-1 border-gray-500 border rounded"
        />
      </div>
      <table className="p-2 w-full">
        <thead>
          <tr>
            <th className="px-2 text-left" onClick={() => handleSort("id")}>
              Id
              {sortColumns.id === "asc" ? (
                <ArrowUpIcon className=" w-6 h-6" />
              ) : (
                <ArrowDownIcon className=" w-6 h-6" />
              )}
            </th>
            <th className="px-2 text-left" onClick={() => handleSort("name")}>
              Name{" "}
              {sortColumns.name === "asc" ? (
                <ArrowUpIcon className=" w-6 h-6" />
              ) : (
                <ArrowDownIcon className=" w-6 h-6" />
              )}
            </th>
            <th className="px-2 text-left">Email</th>
            <th className="px-2 text-left">Mobile</th>
            <th className="px-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {filterUser.length > 0 ? (
            filterUser.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>

                    <Link to={`/user/${user.id}`}
                      className=" bg-purple-800 rounded text-white px-3 py-1 inline-block mb-1"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>Data not found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
