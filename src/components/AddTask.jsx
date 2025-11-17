export const AddTask = () => {
  return (
    <section className="addTask">
      <form>
        <input
          type="text"
          name="task"
          placeholder="Add a new task"
          autoComplete="off"
          maxLength="25"
        ></input>
        <button type="submit">+</button>
      </form>
    </section>
  );
};
