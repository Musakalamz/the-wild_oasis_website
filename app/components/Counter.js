"use client";

import { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      There are {users.length} users
      <button onClick={() => setCount((i) => i + 1)}>{count}</button>;
    </div>
  );
}

export default Counter;
