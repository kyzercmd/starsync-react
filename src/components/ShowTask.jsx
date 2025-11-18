import remove from "../assets/delete.png";
import edit from "../assets/edit.png";

export const ShowTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleEdit = (id) => {
    const selectedTask = taskList.find((todo) => todo.id === id);
    setTask(selectedTask);
  };

  const handleDelete = (id) => {
    const newTaskList = taskList.filter((todo) => todo.id !== id);
    setTaskList(newTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Tasks</span>
          <span>{" -"}</span>
          <span className="count">{taskList.length}</span>
        </div>
        <button
          className="clearAll"
          onClick={() => {
            setTaskList([]);
          }}
        >
          Clear
        </button>
      </div>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <span className="name">{task.name}</span>
            <span className="time">{task.time}</span>
            <div className="img-button">
              <button
                onClick={() => {
                  handleEdit(task.id);
                }}
                className="edit-button"
              >
                <img src={edit} alt="edit"></img>
              </button>
              <button
                onClick={() => {
                  handleDelete(task.id);
                }}
                className="delete-button"
              >
                <img src={remove} alt="delete"></img>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
