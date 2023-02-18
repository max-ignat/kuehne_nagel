// import { CgAdd, CgCloseO } from "react-icons/cg";
import { PencilFill, Save, Trash, XSquare } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { getData } from "../../services/api";
import {
  // ButtonWrap,
  Table,
  TableBody,
  TableRowEl,
  TableHead,
  TableHeadCell,
  TableDataCell,
} from "./DataList.styled";

const DataList = ({ actions }) => {
  const [data, setData] = useState(
  [{
      orderNo: "nz-906145-26850629-1813784",
      date: "7/10/2019",
      customer: "Inter Parfums, Inc.",
      trackingNo: "TP-065338-70937481-7664135",
      status: "'Delivered'",
      consignee: "Hovnanian Enterprises Inc",
    },
    {
      orderNo: "wa-135797-54904524-4596563",
      date: "10/18/2019",
      customer: "LATAM Airlines Group S.A.",
      trackingNo: "TP-129236-97859281-4401097",
      status: "'Delivered'",
      consignee: "PowerShares FTSE RAFI US 1500 Small-Mid Portfolio",
    }] );
    const [isEditMode, setIsEditMode] = useState(false);
    const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    // const [rowsState, setRowsState] = useState(data);
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
//   // toggleModal();
// };

const handleEdit = (orderNo) => {
  setIsEditMode(true);
  setEditedRow(undefined);
  setRowIDToEdit(orderNo);
};

const handleRemoveRow = (orderNo) => {
  setData((data) => data.filter((detail) => detail.orderNo !== orderNo));
};

const handleOnChangeField = (e, orderNo) => {
  const { name: fieldName, value } = e.target;
  setEditedRow({
     orderNo,
    [fieldName]: value,
  });
};  

  const handleCancelEditing = () => {
    setIsEditMode(false);
    setEditedRow(undefined);
  };

  const handleSaveRowChanges = () => {
    
      setIsEditMode(false);
      const newData = data.map((row) => {
        if (row.id === editedRow.id) {
          if (editedRow.orderNo) row.orderNo = editedRow.orderNo;
          if (editedRow.date) row.date = editedRow.date;
          if (editedRow.customer) row.customer = editedRow.customer;
          if (editedRow.trackingNo) row.trackingNo = editedRow.trackingNo;
          if (editedRow.status) row.status = editedRow.status;
          if (editedRow.consignee) row.lastName = editedRow.consignee;
          // if (editedRow.role) row.role = editedRow.role;
        }
        return row;
      });
      setData(newData);
      setEditedRow(undefined);
    
  };

  return (
    <>
      <h1>Data results</h1>
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
                    {orderNo}
                    {isEditMode && rowIDToEdit === orderNo ? (
                      <Form.Control
                        type="text"
                        defaultValue={editedRow ? editedRow.orderNo : orderNo}
                        id={orderNo}
                        name="orderNo"
                        onChange={(e) => handleOnChangeField(e, orderNo)}
                      />
                    ) : (
                      data.orderNo
                    )}
                  </TableDataCell>
                  <TableDataCell>
                    {date}
                    {isEditMode && rowIDToEdit === orderNo ? (
                      <Form.Control
                        type="text"
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
                    {customer}
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
                    {trackingNo}
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
                    {status}
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
                    {consignee}
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

                  {/* <TableDataCell>
                    {isEditMode && rowIDToEdit === orderNo ? (
                      <Form.Select
                        onChange={(e) => handleOnChangeField(e, orderNo)}
                        name="status"
                        defaultValue={status}
                      >
                        <option value="In transit">transit</option>
                        <option value="Delivered">Delivered</option>
                        
                      </Form.Select>
                    ) : (
                      status
                    )}
                  </TableDataCell> */}

                  {actions && (
                    <TableDataCell>
                      {isEditMode && rowIDToEdit === orderNo ? (
                        <button onClick={() => handleSaveRowChanges()}
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
