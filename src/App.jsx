import { useState } from "react";
import { nodes } from "./data.js";
import Tree from "./component/Tree.jsx";

function App() {
  const [data, setData] = useState(nodes);
  return (
    <div className="w-full bg-gray-900 flex pl-5 sm:pl-8 min-h-screen text-white">
      <Tree data={data} />
    </div>
  )
}

export default App;
