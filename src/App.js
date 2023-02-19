// import {  useState } from "react";
// import initialData from './services/data.json'
import DataList from "./components/DataList";
// import shortid from "shortid";
// import Form from "./components/Form/FormEl";

// import { getData } from "./services/api";

const App = (data) => {
  
  // const columns = [
  //   { field: "orderNo", fieldName: "Order No." },
  //   { field: "date", fieldName: "Date" },
  //   { field: "customer", fieldName: "Customer" },
  //   { field: "trackingNo", fieldName: "Tracking No." },
  //   { field: "status", fieldName: "Status" },
  //   { field: "consignee", fieldName: "Consignee" },
  // ];

  return (
    <>      
      <DataList />
    </>
  );
};

export default App;
