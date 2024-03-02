import { Input, Modal, Tabs } from 'antd';
import { useState } from 'react';
import ModalCustom from './Components/ModalCustom/ModalCustom';
import FormAddTask from './Components/FormAddTask/FormAddTask';
import ListTask from './Components/ListTask/ListTask';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [arrTask, setArrTask] = useState([
    {
      title: 'Đi học',
      description: 'Dậy lúc 9h để đi xe bus',
      priority: 'Low',
      tag: 'Gia đình',
      createAt: '8/3',
      updateAt: null,
      key: 15421,
      status: false,
    },
    {
      title: 'Đi làm',
      description: 'Dậy lúc 9h để đi xe bus',
      priority: 'Medium',
      tag: 'Gia đình',
      createAt: '8/3',
      updateAt: null,
      key: 15441,
      status: true,
    },
    {
      title: 'Nấu cơm',
      description: 'Dậy lúc 9h để đi xe bus',
      priority: 'High',
      tag: 'Gia đình',
      createAt: '8/3',
      updateAt: null,
      key: 15477,
      status: false,
    },
    {
      title: 'Chơi game',
      description: 'Dậy lúc 9h để đi xe bus',
      priority: 'Critial',
      tag: 'Gia đình',
      createAt: '8/3',
      updateAt: null,
      key: 15221,
      status: true,
    },
  ]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const items = [
    {
      key: '1',
      label: (
        <div className="py-2 px-5 text-2xl w-1/2">
          <i className="fa-sharp fa-solid fa-list-check"></i>
        </div>
      ),
      children: <ListTask arrTask={arrTask.filter((task) => !task.status)} />,
    },
    {
      key: '2',
      label: (
        <div className="py-2 px-5 text-2xl w-1/2">
          <i className="fa-solid fa-ballot-check"></i>
        </div>
      ),
      children: <ListTask arrTask={arrTask.filter((task) => task.status)} />,
    },
  ];
  return (
    <div className="todolist_bg">
      {/* list search  */}
      <div className="list_search">
        <div>
          <label htmlFor="search">Tìm kiếm task theo tên</label>
          <Input id="search" placeholder="Vui lòng nhập tên task" />
        </div>
      </div>
      {/* list tab  */}
      <div className="list_tab">
        <Tabs defaultActiveKey="1" items={items} />
      </div>
      {/* button modal  */}
      <button
        onClick={showModal}
        className="w-16 h-16 text-white bg-orange-500 rounded-full absolute -bottom-7 left-1/2 -translate-x-1/2"
      >
        <i className="fa-solid fa-plus-large"></i>
      </button>
      <ModalCustom
        title={'Tạo task'}
        isModalOpen={isModalOpen}
        content={<FormAddTask />}
        handleCancel={handleCancel}
      />
    </div>
  );
}

export default App;
