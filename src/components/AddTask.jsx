import update from "../assets/sync_50.png";

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updatedTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })} ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTaskList(updatedTaskList);
      setTask({});
    } else {
      const date = new Date();

      const newTask = {
        id: date.getTime(),
        name: task.name,
        time: `${date.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })} ${date.toLocaleDateString()}`,
      };
      setTaskList([newTask, ...taskList]);
      setTask({});
    }
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          placeholder="Add a new task"
          autoComplete="off"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        ></input>
        <button className="update-button" type="submit">
          {task.id ? <img src={update} alt="update"></img> : "+"}
        </button>
      </form>
    </section>
  );
};
