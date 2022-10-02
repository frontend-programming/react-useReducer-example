import React from "react";

export default function Users(props) {
  const { state } = props;
  const { loading, users } = state;

  return (
    <div className="app-block">
      <h1>Fetch Users Data</h1>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table cellPadding="10" cellSpacing="0" border="1" width="100%">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.address.suite + ", " + user.address.street}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
