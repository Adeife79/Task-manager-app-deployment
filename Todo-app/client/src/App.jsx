import { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const API_URL = 'http://127.0.0.1:8094/api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
     };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (title) => {
    try {
      const response = await axios.post(API_URL, { title });
      setTasks([response.data, ...tasks]);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTask = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`);

      setTasks(
          tasks.map((task) =>
          task._id === id ? response.data : task
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);

      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <TaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;