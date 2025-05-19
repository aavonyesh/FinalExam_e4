import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminTable() {
  const [myData, setmyData] = useState([]);
  const [search, setsearch] = useState("");
  const [mySort, setmySort] = useState({
    property: "",
    order: true,
  });
  const URL = "http://localhost:3000";
  async function readData() {
    try {
      const res = await axios.get(URL);
      setmyData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    readData();
  }, []);
  async function deleteDataById(id) {
    try {
      const res = await axios.delete(`${URL}/${id}`);
      readData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          placeholder="Search by name..."
        />
        <button onClick={() => setmySort({ property: "name", order: true })}>
          a-z
        </button>
        <button onClick={() => setmySort({ property: "name", order: false })}>
          z-a
        </button>
        <Link to={"/add"}>
          <button>add new data</button>
        </Link>
      </div>
      <table border={1} style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myData
            .toSorted((a, b) =>
              mySort.order
                ? a[mySort.property] > b[mySort.property]
                  ? 1
                  : b[mySort.property] > a[mySort.property]
                  ? -1
                  : 0
                : a[mySort.property] < b[mySort.property]
                ? 1
                : b[mySort.property] < a[mySort.property]
                ? -1
                : 0
            )
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <tr key={item._id}>
                <td>
                  <img src={item.image} style={{ width: "200px" }} />
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button onClick={() => deleteDataById(item._id)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
