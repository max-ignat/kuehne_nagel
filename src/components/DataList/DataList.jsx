import { CgAdd, CgCloseO } from "react-icons/cg";
// import { Button } from "../Form/Form.styled";
// import { Button } from '../Form/Form.styled';
import {
  ButtonWrap,
  Table,
  TableBody,
  TableRowEl,
  TableHead,
  TableHeadCell,
  TableDataCell,
} from "./DataList.styled";

const DataList = ({ data, onDeleteDetail, onEditDetail }) => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const response = await getData();
  //         setData(response.data);
  //         // console.log("response", response);
  //       } catch (response) {
  //         console.log("error", response.data.message);
  //       }
  //     }
  //     fetchData();
  //   }, []);

  //   const onDeleteDetail = () => {
  //     console.log("delete");
  //   };

  return (
    <>
      <h1>Data results</h1>
      <Table>
        <TableHead>
          <TableRowEl>
            <TableHeadCell>Order No.</TableHeadCell>
            <TableHeadCell>Date</TableHeadCell>
            <TableHeadCell>Customer</TableHeadCell>
            <TableHeadCell>Tracking No.</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
            <TableHeadCell>Consignee </TableHeadCell>
          </TableRowEl>
        </TableHead>
        <TableBody>
          {data &&
            data.map(
              ({
                // shortid(),
                orderNo,
                date,
                customer,
                trackingNo,
                status,
                consignee,
              }) => (
                <TableRowEl key={orderNo}>
                  <TableDataCell>{orderNo}</TableDataCell>
                  <TableDataCell>{date}</TableDataCell>
                  <TableDataCell>{customer}</TableDataCell>
                  <TableDataCell>{trackingNo}</TableDataCell>
                  <TableDataCell>{status}</TableDataCell>
                  <TableDataCell>
                    <ButtonWrap>
                      <CgAdd
                        style={{ marginRight: 5, width: 25, height: 25 }}
                        type="button"
                        onClick={() => onEditDetail(orderNo)}
                      >
                        edit
                      </CgAdd>

                      <CgCloseO
                        style={{ width: 25, height: 25 }}
                        type="button"
                        onClick={() => onDeleteDetail(orderNo)}
                      >
                        X
                      </CgCloseO>
                    </ButtonWrap>
                    {consignee}
                  </TableDataCell>
                </TableRowEl>
              )
            )}
        </TableBody>
      </Table>
    </>
  );
};

export default DataList;
