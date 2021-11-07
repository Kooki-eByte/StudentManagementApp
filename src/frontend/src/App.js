import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Empty, Layout, Menu, Table } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import "./App.css";
import { createStudent, getAllStudents } from "./routes/studentAPI";
const columns = require("./components/tableColumns.json");
const listOfStudents = require("./components/listOfMockStudents.json");

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapse] = useState(false);
  const [students, setStudents] = useState([]);
  const [fetching, setFetching] = useState(true);

  const fetchStudents = () => {
    setFetching(true);
    getAllStudents()
      .then((data) => setStudents(data))
      .then(() => setFetching(false));
  };

  const makeNewStudent = async () => {
    let randomNum = Math.floor(
      Math.random() * (listOfStudents.length - 0 + 1) + 0
    );
    await createStudent(listOfStudents[randomNum]);
    getAllStudents().then((data) => setStudents(data));
  };

  const renderStudents = () => {
    return students.length >= 0 ? (
      <Table
        dataSource={students}
        columns={columns}
        bordered
        title={() => "Students"}
        loading={fetching}
        rowKey={(student) => student.id}
      />
    ) : (
      <Empty />
    );
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  useEffect(() => {
    console.log(students);
  }, [students]);

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapse(!collapsed)}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            Student Management App
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Management</Breadcrumb.Item>
              <Breadcrumb.Item>Students</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Button onClick={() => makeNewStudent()}>
                Create New student
              </Button>
              <br />
              {renderStudents()}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Student Management App ©2021 Created by Cristian Hornedo
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
