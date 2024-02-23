import { Input, Tabs } from 'antd';
function App() {
  const items = [
    {
      key: '1',
      label: (
        <div className="py-2 px-5 text-2xl w-1/2">
          <i className="fa-sharp fa-solid fa-list-check"></i>
        </div>
      ),
      children: <div>Hello</div>,
    },
    {
      key: '2',
      label: (
        <div className="py-2 px-5 text-2xl w-1/2">
          <i className="fa-solid fa-ballot-check"></i>
        </div>
      ),
      children: 'Content of Tab Pane 2',
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
    </div>
  );
}

export default App;
