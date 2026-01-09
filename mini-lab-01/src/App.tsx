import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};


function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [finalUsers, setfinalUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const orderByName = () => {
    const ordered = [...users].sort((a, b) => 
      a.name.localeCompare(b.name)
    );
    setfinalUsers(ordered);
  };

  const filterByEmail = () => {
    const filtered = users.filter((user) => 
      user.email.endsWith(".org")
    );   
    setfinalUsers(filtered);

  };

  return (
    <main>
      <h1>Lista de usuários (API)</h1>

      {loading && <p>Carregando dados...</p>}
      

      {!loading && (
        <>
          <button onClick={orderByName}>Ordenar por nome</button>
          <button onClick={filterByEmail}>Filtrar email .org</button>

          <h2>Total: {finalUsers.length}</h2>
          <ul>
            {finalUsers.map((usr) => (
              <li key={usr.id}>
                {usr.name} — {usr.email}
              </li>
            ))}
          </ul>
        </>
      )}   
    
    </main>
  );
}



export default App;
