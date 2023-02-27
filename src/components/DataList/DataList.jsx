// import { CgAdd, CgCloseO } from "react-icons/cg";
import { PencilFill, Save, Trash, XSquare } from "react-bootstrap-icons";
import { useState, useEffect, useCallback } from "react";
import { Form } from "react-bootstrap";
import { getData } from "../../services/api";
import Modal from "../Modal/Modal";
import FormEl from "../Form/FormEl";

import {
  // ButtonWrap,
  Table,
  TableBody,
  TableRowEl,
  TableHead,
  TableHeadCell,
  TableDataCell,
} from "./DataList.styled";


const DataList = ({ actions  }) => {
  
  const [showModal, setShowModal] = useState(false);
  const [data, setData] =
    useState();
    // [
    // {
    //   orderNo: "zz-450581-11385595-4210084",
    //   date: "10/16/2019",
    //   customer: "NXP Semiconductors N.V.",
    //   trackingNo: "TP-724057-72553473-5647860",
    //   status: "'In Transit'",
    //   consignee: "Koppers Holdings Inc.",
    // },
    // {
    //   orderNo: "kk-275651-64476049-3346442",
    //   date: "8/20/2019",
    //   customer: "Triumph Bancorp, Inc.",
    //   trackingNo: "TP-011637-13598236-2700556",
    //   status: "'Delivered'",
    //   consignee: "Celsius Holdings, Inc.",
    // },
    // {
    //   orderNo: "nz-906145-26850629-1813784",
    //   date: "7/10/2019",
    //   customer: "Inter Parfums, Inc.",
    //   trackingNo: "TP-065338-70937481-7664135",
    //   status: "'Delivered'",
    //   consignee: "Hovnanian Enterprises Inc",
    // },
    // 
    // ]
  const [isEditMode, setIsEditMode] = useState(false);
  const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
  const [editedRow, setEditedRow] = useState();

  const columns = [
    { field: "orderNo", fieldName: "Order No." },
    { field: "date", fieldName: "Date" },
    { field: "customer", fieldName: "Customer" },
    { field: "trackingNo", fieldName: "Tracking No." },
    { field: "status", fieldName: "Status" },
    { field: "consignee", fieldName: "Consignee" },
  ];

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getData();
        setData(response.data);
        // console.log("response", response.data);
      } catch (response) {
        console.log("error", response.message);
      }
    }
    fetchData();
  }, []);

  const handleEdit = useCallback((orderNo) => {
      setIsEditMode(true);
    setEditedRow(undefined);
    setRowIDToEdit(orderNo);
    },
    [],
  )
    

  const handleRemoveRow = useCallback(
    (orderNo) => {
      setData((data) => data.filter((detail) => detail.orderNo !== orderNo));
    },
    [],
  )
  

  const handleOnChangeField = useCallback(
    (e, orderNo) => {
      const { name: fieldName, value } = e.target;
    setEditedRow({
      orderNo,
      [fieldName]: value,
    });
    },
    [],
  )
  

  const handleCancelEditing = useCallback(() => {
      setIsEditMode(false);
    setEditedRow(undefined);
    },
    [],
  )
  
    

  const handleSaveRowChanges = () => {
    setIsEditMode(false);
    const newData = data.map((row) => {
      if (row.orderNo === editedRow.orderNo) {
        if (editedRow.orderNo) row.orderNo = editedRow.orderNo;
        if (editedRow.date) row.date = editedRow.date;
        if (editedRow.customer) row.customer = editedRow.customer;
        if (editedRow.trackingNo) row.trackingNo = editedRow.trackingNo;
        if (editedRow.status) row.status = editedRow.status;
        if (editedRow.consignee) row.consignee = editedRow.consignee;
        
      }
      // console.log(row.orderNo)
      return row;
    });
    setData(newData);
    setEditedRow(undefined);
  };

  const toggleModal =useCallback(
    () => {
      if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
    },
    [showModal],
  );

const addNewTrack = useCallback(
  ({ orderNo, date, customer, trackingNo, status, consignee }) => {
    const lowerCasedName = customer.toLowerCase();

    let added = data.find(
      (detail) => detail.customer.toLowerCase() === lowerCasedName
    );

    const detail = {
      orderNo,
      date,
      customer,
      trackingNo,
      status,
      consignee,
    };

   if (added) {
     alert(`${orderNo} is already in the list`);
     return;
   }
    setData((data) => [...data, detail]);
    toggleModal();
  },
  [setData, toggleModal, data]
);


  return (
    
    <>
      <h1>Shipment schedule</h1>

      <button type="button" onClick={toggleModal}>
        Add new track
      </button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <FormEl submitPropValue={addNewTrack} />

          <button type="button" onClick={toggleModal}>
            minimize
          </button>
        </Modal>
      )}
      <Table>
        <TableHead>
          <TableRowEl>
            {columns.map((column) => {
              return (
                <TableHeadCell key={column.field}>
                  {column.fieldName}
                </TableHeadCell>
              );
            })}
          </TableRowEl>
        </TableHead>
        <TableBody>
          {data &&
            data.map(
              ({ orderNo, date, customer, trackingNo, status, consignee }) => (
                <TableRowEl key={orderNo}>
                  <TableDataCell>
                    {/* {orderNo} */}
                    {isEditMode && rowIDToEdit === orderNo ? (
                      <Form.Control
                        type="text"
                        defaultValue={editedRow ? editedRow.orderNo : orderNo}
                        id={orderNo}
                        name="orderNo"
                        onChange={(e) => handleOnChangeField(e, orderNo)}
                      />
                    ) : (
                      orderNo
                    )}
                  </TableDataCell>
                  <TableDataCell>
                    {/* {date} */}
                    {isEditMode && rowIDToEdit === orderNo ? (
                      <Form.Control
                        type="date"
                        
                        defaultValue={editedRow ? editedRow.date : date}
                        id={orderNo}
                        name="date"
                        onChange={(e) => handleOnChangeField(e, orderNo)}
                      />
                    ) : (
                      date
                    )}
                  </TableDataCell>

                  <TableDataCell>
                    {/* {customer} */}
                    {isEditMode && rowIDToEdit === orderNo ? (
                      <Form.Control
                        type="text"
                        defaultValue={editedRow ? editedRow.customer : customer}
                        id={orderNo}
                        name="customer"
                        onChange={(e) => handleOnChangeField(e, orderNo)}
                      />
                    ) : (
                      customer
                    )}
                  </TableDataCell>
                  <TableDataCell>
                    {/* {trackingNo} */}
                    {isEditMode && rowIDToEdit === orderNo ? (
                      <Form.Control
                        type="text"
                        defaultValue={
                          editedRow ? editedRow.trackingNo : trackingNo
                        }
                        id={orderNo}
                        name="trackingNo"
                        onChange={(e) => handleOnChangeField(e, orderNo)}
                      />
                    ) : (
                      trackingNo
                    )}
                  </TableDataCell>
                  <TableDataCell>
                    {/* {status} */}
                    {isEditMode && rowIDToEdit === orderNo ? (
                      <Form.Control
                        type="text"
                        defaultValue={editedRow ? editedRow.status : status}
                        id={orderNo}
                        name="status"
                        onChange={(e) => handleOnChangeField(e, orderNo)}
                      />
                    ) : (
                      status
                    )}
                  </TableDataCell>
                  <TableDataCell>
                    {isEditMode && rowIDToEdit === orderNo ? (
                      <button
                        onClick={() => handleSaveRowChanges()}
                        disabled={!editedRow}
                      >
                        <Save />
                      </button>
                    ) : (
                      <button onClick={() => handleEdit(orderNo)}>
                        <PencilFill />
                      </button>
                    )}
                    {isEditMode && rowIDToEdit === orderNo ? (
                      <button onClick={() => handleCancelEditing()}>
                        <XSquare />
                      </button>
                    ) : (
                      <button onClick={() => handleRemoveRow(orderNo)}>
                        <Trash />
                      </button>
                    )}
                    {/* {consignee} */}
                    {isEditMode && rowIDToEdit === orderNo ? (
                      <Form.Control
                        type="text"
                        defaultValue={
                          editedRow ? editedRow.consignee : consignee
                        }
                        id={orderNo}
                        name="consignee"
                        onChange={(e) => handleOnChangeField(e, orderNo)}
                      />
                    ) : (
                      consignee
                    )}
                  </TableDataCell>
                  {actions && (
                    <TableDataCell>
                      {isEditMode && rowIDToEdit === orderNo ? (
                        <button
                          onClick={() => handleSaveRowChanges()}
                          disabled={!editedRow}
                        >
                          <Save size={30} />
                        </button>
                      ) : (
                        <button onClick={() => handleEdit(orderNo)}>
                          <PencilFill size={30} />
                        </button>
                      )}
                      {isEditMode && rowIDToEdit === orderNo ? (
                        <button onClick={() => handleCancelEditing()}>
                          <XSquare size={30} />
                        </button>
                      ) : (
                        <button onClick={() => handleRemoveRow(orderNo)}>
                          <Trash size={30} />
                        </button>
                      )}
                    </TableDataCell>
                  )}
                </TableRowEl>
              )
            )}
        </TableBody>
      </Table>
    </>
  );
};

export default DataList;
