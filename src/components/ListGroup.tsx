import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["Tokyo", "Osaka", "Kyoto", "Sapporo"];
  //   items = [];
//   let selectedIndex = 0;
//   Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   const getMessage = () => {
  //     return items.length === 0 && <p>No item found</p>;
  //   };
  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List Group</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex === index ? 'list-group-item active':'list-group-item'} key={item} onClick={()=>{setSelectedIndex(index)}}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
