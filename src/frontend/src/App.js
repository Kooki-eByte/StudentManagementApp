import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Layout, Menu } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import "./App.css";
import { createStudent, getAllStudents } from "./routes/studentAPI";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const listOfStudents = [
  {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@gmail.com",
    gender: "FEMALE",
  },
  {
    firstName: "Joe",
    lastName: "Doe",
    email: "joe.doe@gmail.com",
    gender: "MALE",
  },
  {
    firstName: "test",
    lastName: "test",
    email: "test.test@gmail.com",
    gender: "OTHER",
  },
];

function App() {
  const [collapsed, setCollapse] = useState(false);
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    getAllStudents().then((data) => setStudents(data));
  };

  const makeNewStudent = async () => {
    let randomNum = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    await createStudent(listOfStudents[randomNum]);
    getAllStudents().then((data) => setStudents(data));
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
              {students.length >= 0 ? (
                students.map((student, idx) => (
                  <div key={idx}>
                    <h2>{`${student.firstName} ${student.lastName}`}</h2>
                    <h3>{student.gender}</h3>
                    <p>{student.studentCode}</p>
                    <p>{student.email}</p>
                  </div>
                ))
              ) : (
                <h2>No Data Found...</h2>
              )}
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
