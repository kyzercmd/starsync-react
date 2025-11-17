import remove from "../assets/delete.png";
import edit from "../assets/edit.png";

export const ShowTask = () => {
  const tasks = [
    { name: "Name1", time: "11/17/2025 3:43" },
    { name: "Name2", time: "11/17/2025 3:43" },
    { name: "Name3", time: "11/17/2025 3:43" },
  ];

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Tasks</span>
          <span className="count">0</span>
        </div>
        <button className="clearAll">Clear</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li>
            <span className="name">{task.name}</span>
            <span className="time">{task.time}</span>
            <div className="img-button">
              <button className="edit-button">
                <img src={edit} alt="edit"></img>
              </button>
              <button className="delete-button">
                <img src={remove} alt="delete"></img>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
