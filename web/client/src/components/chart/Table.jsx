import ReactTableUI from "react-table-ui";
import { useMemo, useRef } from "react";
import { TableInstance, DataType } from "react-table-ui";

function Table() {
  // Provide data for the table
  const data = useMemo(
    () => [
      { name: "Abc Xyx", age: 20 },
      { name: "Def Uvw", age: 25 },
      { name: "Ghi Rst", age: 23 },
      { name: "Jklm Nopq", age: 30 },
      { name: "Abc Xyx", age: 20 },
    ],
    []
  );

  return (
    <ReactTableUI
      title="My Table"
      data={data}
    />
  );
}

export default Table;
