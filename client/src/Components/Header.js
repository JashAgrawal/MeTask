import React, { useEffect, useState } from "react";
import { Button, PageHeader } from "antd";
import axios from "axios";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

const OutMenu = (props) => <Menu items={props.itemss} />;
const Header = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      console.log("sd");
      const { data } = await axios.get("http://localhost:8080/getAllUsers");
      console.log(data);
      const arr = data.data.map((itm) => {
        return {
          key: itm.id,
          label: (
            <a
              onClick={() => {
                localStorage.setItem("userId", itm.id);
                window.location.reload();
              }}
            >
              {itm.name}
            </a>
          ),
        };
      });
      setUsers(arr);
    };
    getUsers();
  }, []);
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title=""
        subTitle=""
        extra={[
          <Dropdown overlay={<OutMenu itemss={users} />}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>,
        ]}
      />
    </div>
  );
};

export default Header;
