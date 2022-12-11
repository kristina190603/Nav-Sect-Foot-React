import React from 'react';
import Table from 'react-bootstrap/Table';

function Section({users}) {
    console.log(users)

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>id</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{users[0].name}</td>
          <td>{users[0].lastName}</td>
          <td>{users[0].age}</td>
          <td>{users[0].id}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>{users[1].name}</td>
          <td>{users[1].lastName}</td>
          <td>{users[1].age}</td>
          <td>{users[1].id}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>{users[2].name}</td>
          <td>{users[2].lastName}</td>
          <td>{users[2].age}</td>
          <td>{users[2].id}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>{users[3].name}</td>
          <td>{users[3].lastName}</td>
          <td>{users[3].age}</td>
          <td>{users[3].id}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Section;