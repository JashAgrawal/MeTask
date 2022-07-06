import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
const List = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      console.log("sd");
      const { data } = await axios.post(
        "http://localhost:8080/getUserCompany",
        { id: localStorage.getItem("userId") }
      );
      console.log(data);
      const arr = data.data.companies.map((itm) => {
        return {
          name: itm.name,
          CIN: itm.cin,
          AddedAt: itm.AddedAt,
        };
      });
      setData(arr);
    };
    getUsers();
  }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "CIN",
      dataIndex: "CIN",
      key: "CIN",
    },
    {
      title: "AddedAt",
      dataIndex: "AddedAt",
      key: "AddedAt",
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={data} />;
    </div>
  );
};

export default List;
