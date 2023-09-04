import React, { useState,useEffect } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import "./admintest.css";

const { Header, Sider, Content } = Layout;

const Admintest = () => {
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        description: '',
        picture: null,
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleFileChange = (event) => {
        setFormData({
          ...formData,
          picture: event.target.files[0],
        });
      };
    
      useEffect(() => {
        console.log("test");
      }, [])
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        const formPayload = new FormData();
        formPayload.append('name', formData.name);
        formPayload.append('position', formData.position);
        formPayload.append('description', formData.description);
        formPayload.append('picture', formData.picture);
    
        try {
          const response = await fetch('http://127.0.0.1:8000/api/candidate/', {
            method: 'POST',
            body: formPayload,
          });
          if (response.ok) {
            // Handle success, maybe show a success message
          } else {
            // Handle error
          }
        } catch (error) {
          // Handle error
        }
      };


  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className='divcont'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}

          key={1}
        >
      <form onSubmit={handleSubmit} className="form-container1">
      <input type="text" name="name" onChange={handleInputChange} placeholder="Name" />
      <input type="text" name="position" onChange={handleInputChange} placeholder="Position" />
      <textarea name="description" onChange={handleInputChange} placeholder="Description"></textarea>
      <input type="file" name="picture" onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admintest;