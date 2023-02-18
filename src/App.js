import {  useState } from "react";
// import initialData from './services/data.json'
import DataList from "./components/DataList";
// import shortid from "shortid";
import Form from "./components/Form/Form";
import Modal from './components/Modal'
// import { getData } from "./services/api";

const App = (data) => {
  const [showModal, setShowModal] = useState(false);
  const columns = [
    { field: "orderNo", fieldName: "Order No." },
    { field: "date", fieldName: "Date" },
    { field: "customer", fieldName: "Customer" },
    { field: "trackingNo", fieldName: "Tracking No." },
    { field: "status", fieldName: "Status" },
    { field: "consignee", fieldName: "Consignee" },
  ];
//! local storage
  // const [data, setData] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem("data")) ?? [];
  // });
// !uncomment if api not working 
  // const [data, setData] = useState([
  //   {
  //     orderNo: "zz-450581-11385595-4210084",
  //     date: "10/16/2019",
  //     customer: "NXP Semiconductors N.V.",
  //     trackingNo: "TP-724057-72553473-5647860",
  //     status: "'In Transit'",
  //     consignee: "Koppers Holdings Inc.",
  //   },
  //   {
  //     orderNo: "kk-275651-64476049-3346442",
  //     date: "8/20/2019",
  //     customer: "Triumph Bancorp, Inc.",
  //     trackingNo: "TP-011637-13598236-2700556",
  //     status: "'Delivered'",
  //     consignee: "Celsius Holdings, Inc.",
  //   },
  //   {
  //     orderNo: "nz-906145-26850629-1813784",
  //     date: "7/10/2019",
  //     customer: "Inter Parfums, Inc.",
  //     trackingNo: "TP-065338-70937481-7664135",
  //     status: "'Delivered'",
  //     consignee: "Hovnanian Enterprises Inc",
  //   },
  //   {
  //     orderNo: "wa-135797-54904524-4596563",
  //     date: "10/18/2019",
  //     customer: "LATAM Airlines Group S.A.",
  //     trackingNo: "TP-129236-97859281-4401097",
  //     status: "'Delivered'",
  //     consignee: "PowerShares FTSE RAFI US 1500 Small-Mid Portfolio",
  //   },
  // ]);

  //!uncomment if api works 
    // const [data, setData] = useState();
  // const [filter, setFilter] = useState("");
  
  
//!if api if working uncomment
    // useEffect(() => {
    //   async function fetchData() {
    //     try {
    //       const response = await getData();
    //       setData(response.data);
    //       console.log("response", response.data);
    //     } catch (response) {
    //       console.log("error", response.message);
    //     }
    //   }
    //   fetchData();
    // }, []);

  const toggleModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

// const deleteDetail = (orderNo) => {
//   setData((data) => data.filter((detail) => detail.orderNo !== orderNo));
// };
  
  // !local storage
  // useEffect(() => {
  //   window.localStorage.setItem("data", JSON.stringify(data));
  // }, [data]);

  // const addToContacts = ({
  //   orderNo,
  //   date,
  //   customer,
  //   trackingNo,
  //   status,
  //   consignee,
  // }) => {
  //   const lowerCasedName = customer.toLowerCase();

  //   let added = data.find(
  //     (detail) => detail.customer.toLowerCase() === lowerCasedName
  //   );

  //   const detail = {
  //     orderNo,
  //     date,
  //     customer,
  //     trackingNo,
  //     status,
  //     consignee,
  //   };

  //   if (added) {
  //     alert(`${customer} is already in contacts`);
  //     return;
  //   }

  //   setData((data) => [...data, detail]);
  //   toggleModal();
  // };

  // const changeFilter = (event) => {
  //   setFilter({ filter: event.currentTarget.value });
  // };

  // const { contacts } = contacts;
  // const { filter } = filter;

  // const filteredContacts = () => {
  //   const lowerCasedFilter = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(lowerCasedFilter)
  //   );
  // };

  return (
    <div>
      <button type="button" onClick={toggleModal}>
        Add new track
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <Form  />
          {/* <Form submitPropValue={addToContacts} /> */}
          <button type="button" onClick={toggleModal}>
            minimize
          </button>
        </Modal>
      )}
      <DataList
        columns={columns}
    
        // data={data}
        // onDeleteDetail={deleteDetail}
      />
    </div>
  );
};

export default App;
