import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const API = process.env.REACT_APP_API_URL;

  const fetchTasks = async () => {
    const res = await axios.get(`${API}/tasks`);
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!task.trim()) return;
    await axios.post(`${API}/tasks`, { task });
    setTask("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={styles.title}>✨ Todo App</h1>
        <p style={styles.subtitle}>Stay organized and productive</p>

        <div style={styles.inputBox}>
          <input
            style={styles.input}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task..."
          />
          <button style={styles.addBtn} onClick={addTask}>
            Add
          </button>
        </div>

        <div style={styles.taskList}>
          {tasks.length === 0 ? (
            <p style={styles.empty}>No tasks yet 🚀</p>
          ) : (
            tasks.map((t) => (
              <div key={t.id} style={styles.taskCard}>
                <span>{t.task}</span>
                <button
                  style={styles.deleteBtn}
                  onClick={() => deleteTask(t.id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },

  container: {
    width: "450px",
    background: "white",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },

  title: {
    textAlign: "center",
    marginBottom: "5px",
    color: "#333",
  },

  subtitle: {
    textAlign: "center",
    color: "#777",
    marginBottom: "25px",
  },

  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "16px",
  },

  addBtn: {
    background: "#667eea",
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "12px 20px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  taskList: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  taskCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f8f9ff",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },

  deleteBtn: {
    background: "#ff4d4f",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "8px 14px",
    cursor: "pointer",
  },

  empty: {
    textAlign: "center",
    color: "#999",
  },
};

export default App;
