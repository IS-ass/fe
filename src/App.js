import "./index.css";
import "./App.css";
import { Form, Checkbox, Layout, Input, Button, Modal } from "antd";
import { useState } from "react";
import axios from "axios";

const { Item } = Form;
const { Content } = Layout;

function App() {
  const [result, setResult] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onSubmit = (values) => {
    axios
      .post("http://localhost:5000", values)
      .then((res) => setResult(res.data))
      .then(() => showModal());
  };

  return (
    <div className="bg-blue-50 h-screen pt-10">
      <Content
        className="pt-10 px-8 w-1/2 m-auto bg-white h-full"
        formLayout="vertical"
      >
        <Checkbox className="px-2">Ngứa</Checkbox>
        <Checkbox className="px-2">Phát ban da</Checkbox>
        <Checkbox className="px-2">Nổi mụn trên da thành sần</Checkbox>
        <Checkbox className="px-2">Hắt xì hơi liên tục</Checkbox>
        <Checkbox className="px-2">Dị ứng</Checkbox>
        <Checkbox className="px-2">Viêm khớp</Checkbox>
        <Checkbox className="px-2">Hen phế quản</Checkbox>
        <Checkbox className="px-2">Đau dạ dáy</Checkbox>
        <Checkbox className="px-2">Thừa acid dạ dày</Checkbox>
        <Checkbox className="px-2">Loét lưỡi</Checkbox>
        <Checkbox className="px-2">Giãn cơ</Checkbox>
        <Checkbox className="px-2">Nôn mửa</Checkbox>
        <Checkbox className="px-2">Đi tiểu rát</Checkbox>
        <Checkbox className="px-2">Đái ra máu</Checkbox>
        <Checkbox className="px-2">Mệt mỏi</Checkbox>
        <Checkbox className="px-2">Nhiễm trùng nấm </Checkbox>
        <Checkbox className="px-2">Bệnh trào ngược dạ dày thực quản</Checkbox>
        <Checkbox className="px-2">
          Viêm dạ dày ruột hoặc tiêu chảy nhiễm trùng
        </Checkbox>
        <Checkbox className="px-2">Đột quỵ</Checkbox>
        <Checkbox className="px-2">Viêm gan B</Checkbox>
        <Checkbox className="px-2">Viêm gan C</Checkbox>
        <Checkbox className="px-2">Viêm gan D</Checkbox>
        <Checkbox className="px-2">Viêm gan E</Checkbox>
        <Checkbox className="px-2">Cao huyết áp</Checkbox>
        <Checkbox className="px-2">Cường giáp</Checkbox>
        <Checkbox className="px-2">Hạ đường huyết</Checkbox>
        <Checkbox className="px-2">Suy giáp</Checkbox>
        <Checkbox className="px-2">Bệnh chốc lở</Checkbox>
        <Checkbox className="px-2">Vàng da</Checkbox>
        <Checkbox className="px-2">Sốt rét</Checkbox>
        <Checkbox className="px-2">Đau nửa đầu</Checkbox>
        <Checkbox className="px-2">Viêm khớp</Checkbox>
        <Checkbox className="px-2">Tê liệt (xuất huyết não)</Checkbox>
        <Checkbox className="px-2">Loét dạ dày tá tràng</Checkbox>
        <Checkbox className="px-2">Phê cầu khuẩn</Checkbox>
        <Checkbox className="px-2">Vảy nến</Checkbox>
        <Checkbox className="px-2">Lao</Checkbox>
        <Checkbox className="px-2">Thương hàn </Checkbox>
        <Checkbox className="px-2">Nhiễm trùng đường tiểu</Checkbox>
        <Checkbox className="px-2">Giãn tĩnh mạch</Checkbox>
        <Checkbox className="px-2">Viêm gan A</Checkbox>

        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{result}</p>
        </Modal>
      </Content>
    </div>
  );
}

export default App;
