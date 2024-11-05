function ListGroup() {
  let items = ["Tokyo", "Osaka", "Kyoto", "Sapporo"];
  //   items = [];
  //   const getMessage = () => {
  //     return items.length === 0 && <p>No item found</p>;
  //   };
  return (
    <>
      <h1>List Group</h1>
      {/* {getMessage()} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
