import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <h1>Lista de usuários (API)</h1>

      {loading && <p>Carregando dados...</p>}

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
