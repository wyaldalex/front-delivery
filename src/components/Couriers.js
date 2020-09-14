import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Couriers() {
  const [couriers, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8088/api/courier/all");

      console.log(result.data);
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Courier Id</th>
          <th>Name</th>
          <th>Identification</th>
          <th>Identification Number</th>
        </tr>
      </thead>
      <tbody>
        {couriers.map((item) => (
          <tr>
            <td>{item.courierId}</td>
            <td>{item.name}</td>
            <td>{item.identification}</td>
            <td>{item.identificationNumber}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Couriers;

//Retrieve all Couriers
//using axios
//store that somewhere in state maybe?
//Render the couriers
//How to render in a beautiful table with pagination
