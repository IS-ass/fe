import "./index.css";
import "./App.css";
import { Form, Checkbox, Layout, Input, Button } from "antd";
import { useState } from "react";
import axios from "axios";

const { Item } = Form;
const { Content } = Layout;

function App() {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const [check7, setCheck7] = useState(false);
  const [check8, setCheck8] = useState(false);
  const [check9, setCheck9] = useState(false);
  const [check10, setCheck10] = useState(false);
  const [check11, setCheck11] = useState(false);
  const [check12, setCheck12] = useState(false);
  const [check13, setCheck13] = useState(false);
  const [check14, setCheck14] = useState(false);
  const [check15, setCheck15] = useState(false);
  const [check16, setCheck16] = useState(false);
  const [check17, setCheck17] = useState(false);
  const [check18, setCheck18] = useState(false);
  const [check19, setCheck19] = useState(false);
  const [check20, setCheck20] = useState(false);
  const [check21, setCheck21] = useState(false);
  const [check22, setCheck22] = useState(false);
  const [check23, setCheck23] = useState(false);
  const [check24, setCheck24] = useState(false);
  const [check25, setCheck25] = useState(false);
  const [check26, setCheck26] = useState(false);
  const [check27, setCheck27] = useState(false);
  const [check28, setCheck28] = useState(false);
  const [check29, setCheck29] = useState(false);
  const [check30, setCheck30] = useState(false);
  const [check31, setCheck31] = useState(false);
  const [check32, setCheck32] = useState(false);
  const [check33, setCheck33] = useState(false);
  const [check34, setCheck34] = useState(false);
  const [check35, setCheck35] = useState(false);
  const [check36, setCheck36] = useState(false);
  const [check37, setCheck37] = useState(false);
  const [check38, setCheck38] = useState(false);
  const [check39, setCheck39] = useState(false);
  const [check40, setCheck40] = useState(false);
  const [check41, setCheck41] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = (values) => {
    axios
      .post("http://localhost:5000", values)
      .then((res) => setResult(res.data));
  };

  return (
    <div className="bg-blue-50 h-screen pt-10">
      <Content
        className="pt-10 px-8 w-1/2 m-auto bg-white h-full"
        formLayout="vertical"
      >
        <Checkbox
          onChange={(e) => setCheck1(e.target.checked)}
          className="px-2"
        >
          Chóng mặt lành tính do tư thế
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck2(value.target.checked)}
          className="px-2"
        >
          AIDS
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck3(value.target.checked)}
          className="px-2"
        >
          Nổi mụn
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck4(value.target.checked)}
          className="px-2"
        >
          Gan nhiễm mỡ không do rượu
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck5(value.target.checked)}
          className="px-2"
        >
          Dị ứng
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck6(value.target.checked)}
          className="px-2"
        >
          Viêm khớp
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck7(value.target.checked)}
          className="px-2"
        >
          Hen phế quản
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck8(value.target.checked)}
          className="px-2"
        >
          THoái hoá cột sống cổ
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck9(value.target.checked)}
          className="px-2"
        >
          Thuỷ đậu
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck10(value.target.checked)}
          className="px-2"
        >
          Ứ mật mãn tính
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck11(value.target.checked)}
          className="px-2"
        >
          Cảm thông thường
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck12(value.target.checked)}
          className="px-2"
        >
          Sốt xuất huyết
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck13(value.target.checked)}
          className="px-2"
        >
          Béo phì
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck14(value.target.checked)}
          className="px-2"
        >
          Trĩ hỗn hợp
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck15(value.target.checked)}
          className="px-2"
        >
          Dị ứng thuốc
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck16(value.target.checked)}
          className="px-2"
        >
          Nhiễm trùng nấm{" "}
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck17(value.target.checked)}
          className="px-2"
        >
          Bệnh trào ngược dạ dày thực quản
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck18(value.target.checked)}
          className="px-2"
        >
          Viêm dạ dày ruột hoặc tiêu chảy nhiễm trùng
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck19(value.target.checked)}
          className="px-2"
        >
          Đột quỵ
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck20(value.target.checked)}
          className="px-2"
        >
          Viêm gan B
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck21(value.target.checked)}
          className="px-2"
        >
          Viêm gan C
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck22(value.target.checked)}
          className="px-2"
        >
          Viêm gan D
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck23(value.target.checked)}
          className="px-2"
        >
          Viêm gan E
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck24(value.target.checked)}
          className="px-2"
        >
          Cao huyết áp
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck25(value.target.checked)}
          className="px-2"
        >
          Cường giáp
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck26(value.target.checked)}
          className="px-2"
        >
          Hạ đường huyết
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck27(value.target.checked)}
          className="px-2"
        >
          Suy giáp
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck28(value.target.checked)}
          className="px-2"
        >
          Bệnh chốc lở
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck29(value.target.checked)}
          className="px-2"
        >
          Vàng da
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck30(value.target.checked)}
          className="px-2"
        >
          Sốt rét
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck31(value.target.checked)}
          className="px-2"
        >
          Đau nửa đầu
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck32(value.target.checked)}
          className="px-2"
        >
          Viêm khớp
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck33(value.target.checked)}
          className="px-2"
        >
          Tê liệt (xuất huyết não)
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck34(value.target.checked)}
          className="px-2"
        >
          Loét dạ dày tá tràng
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck35(value.target.checked)}
          className="px-2"
        >
          Phê cầu khuẩn
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck36(value.target.checked)}
          className="px-2"
        >
          Vảy nến
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck37(value.target.checked)}
          className="px-2"
        >
          Lao
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck38(value.target.checked)}
          className="px-2"
        >
          Thương hàn{" "}
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck39(value.target.checked)}
          className="px-2"
        >
          Nhiễm trùng đường tiểu
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck40(value.target.checked)}
          className="px-2"
        >
          Giãn tĩnh mạch
        </Checkbox>
        <Checkbox
          onChange={(value) => setCheck41(value.target.checked)}
          className="px-2"
        >
          Viêm gan A
        </Checkbox>
        <Form
          className="flex flex-wrap -mx-4 mt-10"
          layout="vertical"
          onFinish={onSubmit}
        >
          {check1 ? (
            <Item className="w-1/2" label="Chóng mặt lành tính do tư thế">
              <Input />
            </Item>
          ) : null}
          {check2 ? (
            <Item className="w-1/2" label="AIDS">
              <Input />
            </Item>
          ) : null}
          {check3 ? (
            <Item className="w-1/2" label="Nổi mụn">
              <Input />
            </Item>
          ) : null}
          {check4 ? (
            <Item className="w-1/2" label="Gan nhiễm mỡ không do rượu">
              <Input />
            </Item>
          ) : null}
          {check5 ? (
            <Item className="w-1/2" label="Dị ứng">
              <Input />
            </Item>
          ) : null}

          {check6 ? (
            <Item className="w-1/2" label="Viêm khớp">
              <Input />
            </Item>
          ) : null}
          {check7 ? (
            <Item className="w-1/2" label="Hen phế quản">
              <Input />
            </Item>
          ) : null}
          {check8 ? (
            <Item className="w-1/2" label="Thoái hoá cột sống cổ">
              <Input />
            </Item>
          ) : null}
          {check9 ? (
            <Item className="w-1/2" label="Thuỷ đậu">
              <Input />
            </Item>
          ) : null}
          {check10 ? (
            <Item className="w-1/2" label="Ứ mật mãn tính">
              <Input />
            </Item>
          ) : null}
          {check11 ? (
            <Item className="w-1/2" label="Cảm thông thường">
              <Input />
            </Item>
          ) : null}
          {check12 ? (
            <Item className="w-1/2" label="Sốt xuất huyết">
              <Input />
            </Item>
          ) : null}
          {check13 ? (
            <Item className="w-1/2" label="Béo phì">
              <Input />
            </Item>
          ) : null}
          {check14 ? (
            <Item className="w-1/2" label="Trĩ hỗn hợp">
              <Input />
            </Item>
          ) : null}
          {check15 ? (
            <Item className="w-1/2" label="Dị ứng thuốc">
              <Input />
            </Item>
          ) : null}
          {check16 ? (
            <Item className="w-1/2" label="Nhiễm trùng nấm">
              <Input />
            </Item>
          ) : null}
          {check17 ? (
            <Item className="w-1/2" label="Bệnh trào ngược dạ dày thực quản">
              <Input />
            </Item>
          ) : null}
          {check18 ? (
            <Item
              className="w-1/2"
              label="Viêm dạ dày ruột hoặc tiêu chảy nhiễm trùng"
            >
              <Input />
            </Item>
          ) : null}
          {check19 ? (
            <Item className="w-1/2" label="Đột quỵ">
              <Input />
            </Item>
          ) : null}
          {check20 ? (
            <Item className="w-1/2" label="Viêm gan B">
              <Input />
            </Item>
          ) : null}
          {check21 ? (
            <Item className="w-1/2" label="Viêm gan C">
              <Input />
            </Item>
          ) : null}
          {check22 ? (
            <Item className="w-1/2" label="Viêm gan D">
              <Input />
            </Item>
          ) : null}
          {check23 ? (
            <Item className="w-1/2" label="Viêm gan E">
              <Input />
            </Item>
          ) : null}
          {check24 ? (
            <Item className="w-1/2" label="Cao huyết áp">
              <Input />
            </Item>
          ) : null}
          {check25 ? (
            <Item className="w-1/2" label="Cường giáp">
              <Input />
            </Item>
          ) : null}
          {check26 ? (
            <Item className="w-1/2" label="Hạ đường huyết">
              <Input />
            </Item>
          ) : null}
          {check27 ? (
            <Item className="w-1/2" label="Suy giáp">
              <Input />
            </Item>
          ) : null}
          {check28 ? (
            <Item className="w-1/2" label="Bệnh chốc lở">
              <Input />
            </Item>
          ) : null}
          {check29 ? (
            <Item className="w-1/2" label="Vàng da">
              <Input />
            </Item>
          ) : null}
          {check30 ? (
            <Item className="w-1/2" label="Sốt rét">
              <Input />
            </Item>
          ) : null}
          {check31 ? (
            <Item className="w-1/2" label="Đau nửa đầu">
              <Input />
            </Item>
          ) : null}
          {check32 ? (
            <Item className="w-1/2" label="Viêm khơp">
              <Input />
            </Item>
          ) : null}
          {check33 ? (
            <Item className="w-1/2" label="Tê liệt (xuất huyết não)">
              <Input />
            </Item>
          ) : null}
          {check34 ? (
            <Item className="w-1/2" label="Loét dạ dày tá tràng">
              <Input />
            </Item>
          ) : null}
          {check35 ? (
            <Item className="w-1/2" label="Phế cầu khuẩn">
              <Input />
            </Item>
          ) : null}
          {check36 ? (
            <Item className="w-1/2" label="Vẩy nến">
              <Input />
            </Item>
          ) : null}
          {check37 ? (
            <Item className="w-1/2" label="Lao">
              <Input />
            </Item>
          ) : null}
          {check38 ? (
            <Item className="w-1/2" label="Thương hàn">
              <Input />
            </Item>
          ) : null}
          {check39 ? (
            <Item className="w-1/2" label="Nhiễm trùng đường tiểu">
              <Input />
            </Item>
          ) : null}
          {check40 ? (
            <Item className="w-1/2" label="Giãn tĩnh mạch">
              <Input />
            </Item>
          ) : null}
          {check41 ? (
            <Item className="w-1/2" label="Viêm gan A">
              <Input />
            </Item>
          ) : null}

          <Item className="w-full">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Item>
        </Form>
      </Content>
    </div>
  );
}

export default App;
