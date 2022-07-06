import axios from "axios";
import { AutoComplete, Input, Button } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
const Search = () => {
  const [companies, setCompanies] = useState([]);
  const [value, setValue] = useState("");
  const [selectedCompany, setSelectedCompany] = useState({});
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    const { data } = await axios.post("http://localhost:8080/search", {
      search: e,
    });
    console.log(data);
    setValue(e);
    setCompanies(data.data);
  };
  const handleSelect = (value) => {
    console.log(value);
    setSelectedCompany(value);
    setValue(value[1]);
  };
  const handleClick = async () => {
    const { data } = await axios.post("http://localhost:8080/addCompany", {
      cin: selectedCompany[2],
      name: selectedCompany[1],
      //we could use redux to store but its too much to save 1 item
      userId: localStorage.getItem("userId"),
    });
    if (data.status != 200) {
      alert(data.error);
    } else {
      alert("Added Succesfully");
    }
    navigate("/list");
  };
  return (
    <div>
      <div
        style={{
          marginLeft: "10%",
          marginTop: "10%",
        }}
      >
        <AutoComplete
          options={companies}
          onSelect={handleSelect}
          onSearch={handleSearch}
          value={value}
        >
          <Input />
        </AutoComplete>
        <Button type="primary" onClick={handleClick}>
          Primary Button
        </Button>
      </div>
    </div>
  );
};

export default Search;
