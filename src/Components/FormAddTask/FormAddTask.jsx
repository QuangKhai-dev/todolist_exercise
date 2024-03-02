import React from 'react';
import InputText from '../Input/Input';
import { Select } from 'antd';
const FormAddTask = () => {
  return (
    <div>
      <form>
        <div className="space-y-5">
          <InputText
            id="title"
            placeholder="Vui lòng nhập tiêu đề"
            label="Tiêu đề task"
          />
          <div className="grid grid-cols-2 gap-5">
            {/* priority  */}
            <div>
              <label
                htmlFor="priority"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Priority
              </label>
              <select
                id="priority"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Chọn mức độ</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Critial">Critial</option>
              </select>
            </div>
            {/* tag */}
            <div>
              <label
                htmlFor="tag"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Tags
              </label>
              <select
                id="tag"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option selected>Chọn tag</option>
                <option value="Công việc">Công việc</option>
                <option value="Gia đình">Gia đình</option>
              </select>
            </div>
          </div>
          {/* mô tả  */}
          <InputText
            id="description"
            placeholder="Vui lòng nhập mô tả"
            label="Mô tả"
          />
          {/* action  */}
          <div>
            <button className="text-white bg-green-600 py-2 px-5 rounded-md hover:bg-green-700 duration-300">
              Thêm task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormAddTask;
