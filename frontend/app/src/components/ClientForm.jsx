import axios from "axios";
import React from "react";
import { Button, Input, Form } from "antd";


const TodoForm = () => {

  const onFinish = async (values) => {
    await axios.post(`http://localhost:8080/create`,values);
    alert("Todo Created!");
    window.location.reload();
  };


  return <>
  <h3>Create Clinets</h3>
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item 
      label="First Name"
      name="firstName"
      rules={[
        {
          required: true,
          message: "Please input your First Name!",
        },
      ]}
    >
      <Input
      //  onChange={(e)=> setFirstName(e.target.value)} 
       />
    </Form.Item>

    <Form.Item
      label="Last Name"
      name="lastName"
      rules={[
        {
          required: true,
          message: "Please input your Last Name!",
        },
      ]}
    >
      <Input
      //  onChange={(e)=> setLastName(e.target.value)} 
       />
    </Form.Item>

    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: "Please input your Email!",
        },
      ]}
    >
      <Input
      //  onChange={(e)=> setEmail(e.target.value)} 
       />
    </Form.Item>

    <Form.Item
      label="Mobile Number"
      name="mobileNumber"
      rules={[
        {
          required: true,
          message: "Please input Your Mobile Number!",
        },
      ]}
    >
      <Input
      //  onChange={(e)=> setMobileNumber(e.target.value)}
        />
    </Form.Item>

    <Form.Item
      label="Project Desciption"
      name="project"
      rules={[
        {
          required: true,
          message: "Please input Your Project Description!",
        },
      ]}
    >
      <Input
      //  onChange={(e)=> setProject(e.target.value)}
        />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form></>

};
export default TodoForm;
