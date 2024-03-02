import React from 'react';

const ListTask = ({ arrTask }) => {
  const checkPriority = (priority) => {
    switch (priority) {
      case 'Low':
        return 'bg-yellow-500';
      case 'Medium':
        return 'bg-blue-500';
      case 'High':
        return 'bg-orange-500';
      case 'Critial':
        return 'bg-red-500';
    }
  };
  return (
    <div>
      {arrTask.map((task, index) => {
        return (
          <>
            {' '}
            <div key={index} className="flex justify-between items-center my-3">
              <div className="space-y-2">
                <h3 className="font-semibold text-2xl">{task.title}</h3>
                <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-sm text-gray-500">
                  <p>
                    Priority:
                    <span
                      className={`py-1 px-2 text-white rounded ${checkPriority(
                        task.priority
                      )}`}
                    >
                      {task.priority}
                    </span>
                  </p>
                  <p>
                    Tag: <span>{task.tag}</span>
                  </p>
                  <p>
                    Ngày tạo: <span>{task.createAt}</span>
                  </p>
                </div>
              </div>
              {/* action  */}
              <div className="text-2xl space-x-3">
                <button className="text-red-600">
                  <i className="fa-sharp fa-solid fa-trash"></i>
                  </button>
                <button className="text-yellow-600">
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                {task.status ? (
                  <button className="text-purple-600">
                    <i className="fa-solid fa-square-xmark"></i>
                  </button>
                ) : (
                  <button className="text-green-600">
                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                  </button>
                )}
              </div>
            </div>
            <div>{task.description}</div>
          </>
        );
      })}
    </div>
  );
};

export default ListTask;
