import "./index.css";
import "./App.css";
import {
  Form,
  Checkbox,
  Layout,
  Input,
  Button,
  Modal,
  Typography,
  Collapse,
  Card,
} from "antd";
import { useState } from "react";
import axios from "axios";

const { Item } = Form;
const { Content } = Layout;
const { Title } = Typography;
const { Panel } = Collapse;

function App() {
  const [result, setResult] = useState("");
  const [values, setValues] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const symptomGroup = {
    "Da liễu": [
      "ngứa",
      "phát ban da",
      "nổi mụn trên da thành sần",
      "mắt thâm",
      "da vàng",
      "móng gãy giòn",
      "sưng phồng da",
      "môi khô và ngứa",
      "nổi đốm đỏ",
      "da sưng đỏ ngứa",
      "nổi mụn mủ trắng",
      "mụn đầu đen",
      "lột da",
      "sạm da",
      "mẻ móng",
      "viêm móng",
      "rộp da",
      "da mọc vảy vàng",
    ],
    "Tai mũi họng": [
      "hắt xì hơi liên tục",
      "rát cổ họng",
      "loét lưỡi",
      "ho",
      "khó thở",
      "xoang",
      "đờm dãi",
      "khó chịu cổ họng",
      "viêm xoang",
      "mũi chảy nước",
      "đờm nhầy",
      "đờm đẫm",
      "đờm ra máu",
      "mũi đỏ",
    ],
    "Cảm lạnh": ["lạnh cóng", "ớn lạnh", "tay chân lạnh", "sốt cao", "sốt nhẹ"],
    "Xương khớp": [
      "đau khớp",
      "đau lưng",
      "đau đầu gối",
      "đau cổ",
      "đau khớp hông",
    ],
    "Hệ tiêu hóa": [
      "đau dạ dày",
      "thừa acid dạ dày",
      "nôn mửa",
      "khó tiêu",
      "đau dạ dày",
      "đầy bụng",
      "đói liên tục",
      "đau bụng",
      "thèm ăn",
      "chảy máu dạ dày",
      "đầy bụng",
    ],
    "Cơ bắp": [
      "giãn cơ",
      "chuột rút",
      "suy cơ",
      "suy tứ chi",
      "cứng cổ",
      "sưng khớp",
      "cứng cơ",
      "bước đi run",
      "đau cơ",
      "đau khi đi bộ",
    ],
    "Bài tiết": [
      "đi tiểu rát",
      "đái ra máu",
      "nước tiểu đục",
      "táo bón",
      "tiêu chảy",
      "nước tiểu vàng",
      "đau khi đi đại tiện",
      "đau vùng đít",
      "máu trong phân",
      "khó chịu lỗ đít",
      "đau bóng đái",
      "nước tiểu khai",
      "đau tiểu liên tục",
      "đánh rắm",
      "chứng tiểu nhiều",
    ],
    "Thể chất và tinh thần": [
      "mệt mỏi",
      "tăng cân",
      "lo lắng",
      "tâm trạng thất thường",
      "sút cân",
      "bồn chồn",
      "hôn mê",
      "chán ăn",
      "khó chịu",
      "chóng mặt",
      "béo phì",
      "nói nhảm",
      "trầm cảm",
      "khó chịu",
      "thiếu tập trung",
      "hôn mê",
      "hồi hộp",
    ],
    "Nội tiết tố": [
      "đường huyết bất thường",
      "đổ mồ hôi",
      "mất nước",
      "suy gan cấp",
      "suy gan cấp",
      "tràn dịch",
      "sưng huyết",
      "sưng mạch máu",
      "bướu cổ",
      "ngứa trong người",
      "thương hàn",
      "tràn dịch bậc 1",
      "thiếu vitaminc C",
    ],
    "Đau thường": [
      "đau đầu",
      "đau ngực",
      "bầm tím",
      "sưng chân",
      "sưng mặt và mắt",
    ],
    Mắt: [
      "đau hốc mắt",
      "mắt vàng",
      "tầm nhìn mờ và méo mó",
      "đau mắt đỏ",
      "chảy nước mắt",
      "tầm nhìn bị xáo trộn",
    ],
    "Tim mạch": ["nhịp tim cao", "giãn tĩnh mạch"],
    "Thần kinh": [
      "liệt nửa người",
      "đi loạng choạng",
      "mất cân bằng",
      "mất khứu giác",
      "rối loạn cảm nhận",
    ],
    "Sinh lý": ["tình dục nhiều", "kinh nguyệt bất thường"],
    Khác: [
      "sưng hạch bạch huyết",
      "tiền sử gia đình",
      "được truyền máu",
      "được tim chưa khử trùng",
      "tiền sử nghiện rượu",
    ],
  };

  const dict = {
    ngứa: "itching",
    "phát ban da": "skin_rash",
    "nổi mụn trên da thành sần": "nodal_skin_eruptions",
    "hắt xì hơi liên tục": "continuous_sneezing",
    "lạnh cóng": "shivering",
    "ớn lạnh": "chills",
    "đau khớp": "joint_pain",
    "đau dạ dày": "abdominal_pain",
    "thừa acid dạ dày": "acidity",
    "loét lưỡi": "ulcers_on_tongue",
    "giãn cơ": "muscle_wasting",
    "nôn mửa": "vomiting",
    "đi tiểu rát": "burning_micturition",
    "đái ra máu": "spotting_ urination",
    "mệt mỏi": "fatigue",
    "tăng cân": "weight_gain",
    "lo lắng": "anxiety",
    "tay chân lạnh": "cold_hands_and_feets",
    "tâm trạng thất thường": "mood_swings",
    "sút cân": "weight_loss",
    "bồn chồn": "restlessness",
    "hôn mê": "coma",
    "rát cổ họng": "patches_in_throat",
    "đường huyết bất thường": "irregular_sugar_level",
    ho: "cough",
    "sốt cao": "high_fever",
    "mắt thâm": "sunken_eyes",
    "khó thở": "breathlessness",
    "đổ mồ hôi": "sweating",
    "mất nước": "dehydration",
    "khó tiêu": "indigestion",
    "đau đầu": "headache",
    "da vàng": "yellowish_skin",
    "nước tiểu đục": "dark_urine",
    xoang: "nausea",
    "chán ăn": "loss_of_appetite",
    "đau hốc mắt": "pain_behind_the_eyes",
    "đau lưng": "back_pain",
    "táo bón": "constipation",
    "tiêu chảy": "diarrhoea",
    "sốt nhẹ": "mild_fever",
    "nước tiểu vàng": "yellow_urine",
    "mắt vàng": "yellowing_of_eyes",
    "suy gan cấp": "acute_liver_failure",
    "tràn dịch": "fluid_overload",
    "đầy bụng": "distention_of_abdomen",
    "sưng hạch bạch huyết": "swelled_lymph_nodes",
    "khó chịu": "irritability",
    "tầm nhìn mờ và méo mó": "blurred_and_distorted_vision",
    "đờm dãi": "phlegm",
    "khó chịu cổ họng": "throat_irritation",
    "đau mắt đỏ": "redness_of_eyes",
    "viêm xoang": "sinus_pressure",
    "mũi chảy nước": "runny_nose",
    "sưng huyết": "congestion",
    "đau ngực": "chest_pain",
    "suy tứ chi": "weakness_in_limbs",
    "nhịp tim cao": "fast_heart_rate",
    "đau khi đi đại tiện": "pain_during_bowel_movements",
    "đau vùng đít": "pain_in_anal_region",
    "máu trong phân": "bloody_stool",
    "khó chịu lỗ đít": "irritation_in_anus",
    "đau cổ": "neck_pain",
    "chóng mặt": "dizziness",
    "chuột rút": "cramps",
    "bầm tím": "bruising",
    "béo phì": "obesity",
    "sưng chân": "swollen_legs",
    "sưng mạch máu": "swollen_blood_vessels",
    "sưng mặt và mắt": "puffy_face_and_eyes",
    "bướu cổ": "enlarged_thyroid",
    "móng gãy giòn": "brittle_nails",
    "sưng phồng da": "swollen_extremeties",
    "đói liên tục": "excessive_hunger",
    "tình dục nhiều": "extra_marital_contacts",
    "môi khô và ngứa": "drying_and_tingling_lips",
    "nói nhảm": "slurred_speech",
    "đau đầu gối": "knee_pain",
    "đau khớp hông": "hip_joint_pain",
    "suy cơ": "muscle_weakness",
    "cứng cổ": "stiff_neck",
    "sưng khớp": "swelling_joints",
    "cứng cơ": "movement_stiffness",
    "đi loạng choạng": "spinning_movements",
    "mất cân bằng": "loss_of_balance",
    "bước đi run": "unsteadiness",
    "liệt nửa người": "weakness_of_one_body_side",
    "mất khứu giác": "loss_of_smell",
    "đau bóng đái": "bladder_discomfort",
    "nước tiểu khai": "foul_smell_of urine",
    "đau tiểu liên tục": "continuous_feel_of_urine",
    "đánh rắm": "passage_of_gases",
    "ngứa trong người": "internal_itching",
    "thương hàn": "toxic_look_(typhos)",
    "trầm cảm": "depression",
    "đau cơ": "muscle_pain",
    "rối loạn cảm nhận": "altered_sensorium",
    "nổi đốm đỏ": "red_spots_over_body",
    "đau bụng": "belly_pain",
    "kinh nguyệt bất thường": "abnormal_menstruation",
    "da sưng đỏ ngứa": "dischromic _patches",
    "chảy nước mắt": "watering_from_eyes",
    "thèm ăn": "increased_appetite",
    "chứng tiểu nhiều": "polyuria",
    "tiền sử gia đình": "family_history",
    "đờm nhầy": "mucoid_sputum",
    "đờm đẫm": "rusty_sputum",
    "thiếu tập trung": "lack_of_concentration",
    "tầm nhìn bị xáo trộn": "visual_disturbances",
    "được truyền máu": "receiving_blood_transfusion",
    "được tim chưa khử trùng": "receiving_unsterile_injections",
    "chảy máu dạ dày": "stomach_bleeding",
    "tiền sử nghiện rượu": "history_of_alcohol_consumption",
    "tràn dịch bậc 1": "fluid_overload.1",
    "đờm ra máu": "blood_in_sputum",
    "giãn tĩnh mạch": "prominent_veins_on_calf",
    "hồi hộp": "palpitations",
    "đau khi đi bộ": "painful_walking",
    "nổi mụn mủ trắng": "pus_filled_pimples",
    "mụn đầu đen": "blackheads",
    "thiếu vitaminc C": "scurring",
    "lột da": "skin_peeling",
    "sạm da": "silver_like_dusting",
    "mẻ móng": "small_dents_in_nails",
    "viêm móng": "inflammatory_nails",
    "rộp da": "blister",
    "mũi đỏ": "red_sore_around_nose",
    "da mọc vảy vàng": "yellow_crust_ooze",
  };

  const update = (check, value) => {
    setValues((prev) => {
      if (check) {
        return [...prev, value];
      } else {
        return prev.filter((p) => p !== value);
      }
    });
  };

  const onSubmit = (values) => {
    const mapValues = values.map((v) => dict[v]).join(",");
    console.log(values);
    axios.post("http://localhost:5000", { symptom: mapValues }).then((res) => {
      setResult(res.data.result);
      setIsModalVisible(true);
    });
  };

  return (
    <div className="bg-blue-50 h-screen pt-10">
      <Content
        className="pt-10 px-8 w-1/2 m-auto bg-white h-full"
        formLayout="vertical"
      >
        <Title level={2} className="text-center mb-4">
          Chọn nhóm bệnh mà bạn muốn kiểm tra
        </Title>
        <Collapse
          onChange={(key) => {
            if (!key.length) {
              setValues([]);
            }
          }}
        >
          {Object.entries(symptomGroup).map(([key, vs]) => {
            return (
              <Panel header={key} key={key}>
                <Card className="w-full">
                  {vs.map((value) => (
                    <div>
                      <Checkbox
                        onChange={(v) => {
                          console.log(v.target.checked, v.target.value);
                          update(v.target.checked, v.target.value);
                        }}
                        value={value}
                      >
                        {value}
                      </Checkbox>
                    </div>
                  ))}
                </Card>
                <Button
                  type="primary"
                  className="mt-4"
                  onClick={() => onSubmit(values)}
                >
                  Kiểm tra
                </Button>
              </Panel>
            );
          })}
        </Collapse>

        <Modal
          title="Kết quả dự đoán"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p className="font-semibold">{`Dự đoán bạn bị ${result.toLowerCase()}`}</p>
        </Modal>
      </Content>
    </div>
  );
}

export default App;
