import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};


function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
        setCount(data.length);
      });
  }, []);

  return (
    <main>
      <h1>Lista de usuários (API)</h1>

      {loading && <p>Carregando dados...</p>}

      <h2>Total de usuários: {count}</h2>

      {!loading && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} — {user.email}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}


export default App;
