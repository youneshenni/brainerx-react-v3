import { useState } from "react";
import UsersTable from "./UsersTable";

export default function App() {
  const [page, setPage] = useState(false);

  return (
    <div>
      <button onClick={() => setPage(!page)}>Change page</button>
      {page ? <UsersTable key={true} /> : <UsersTable key={false} />}
    </div>
  );
}
