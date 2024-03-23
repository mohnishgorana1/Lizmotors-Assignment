import { useEffect, useState } from "react";

function Tree({ data }) {
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex items-center gap-2 ">
      <div className="node">
        <span
          style={{ backgroundColor: data.color }}
          className={`px-5 py-1 my-1 flex cursor-pointer rounded-xl text-center`}
          onClick={() => setExpand(!expand)}
        >
          {data?.name}
        </span>
       
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: "35px" }}>
        {data?.children?.map((child) => (
          <div key={child.id}>
            <Tree data={child} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tree;
