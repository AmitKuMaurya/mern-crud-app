import React, { useEffect, useState } from "react";
import { Space, Table, Tag, Modal } from "antd";
import { getTodos } from "../api/api";
import axios from "axios";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = async (record) => {
    const clientId = record._id;
    await axios.delete(`http://localhost:8080/delete/${clientId}`);
    window.location.reload();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [data, setData] = useState([]);
  console.log("data: ", data);

  useEffect(() => {
    getTodos()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log({ err: err }));
  }, []);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Emails",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile Number",
      dataIndex: "mobileNumber",
      key: "mobileNumber",
    },

    {
      title: "Project",
      dataIndex: "project",
      key: "project",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button >Update </button>
          <button onClick={showModal}>Delete</button>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={(e) => handleOk(record)}
            onCancel={handleCancel}
          >
            <p>Are You Sure? You wanted to delete this todo...</p>
          </Modal>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};
export default App;
