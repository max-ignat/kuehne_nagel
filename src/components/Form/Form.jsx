import React , { useState } from 'react';
import { Formik } from 'formik';
import { FormInput, Label, Button, FormWrap, Error} from './Form.styled';
import shortid from 'shortid';
import * as yup from 'yup';



const schema = yup.object().shape({
  

  orderNo: yup.string().required("Enter order"),
  date: yup.string().notRequired("Optional"),
  customer: yup.string().required("Customer name is required field"),
  trackingNo: yup.string().required("tracking is required field"),
  status: yup.string().notRequired("Optional"),
  consignee: yup.string().required("onsignee is required field"),
});

const Form = ({ submitPropValue }) => {
  const [state, setState] = useState({
    orderNo: "",
    date: "",
    customer: "",
    trackingNo: "",
    status: "",
    consignee: "",
  });

  const handleChange = ({ target }) => {
    // console.log(event.currentTarget.value);

    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    submitPropValue({ orderNo, date, customer, trackingNo, status, consignee });

    reset();
  };

  const reset = () => {
    setState({
      orderNo: "",
      date: "",
      customer: "",
      trackingNo: "TP-",
      status: "",
      consignee: "",
    });
  };

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const { orderNo, date, customer, trackingNo, status, consignee } = state;
  return (
    <div>
      <Formik validationSchema={schema}>
        <FormWrap onSubmit={handleSubmit}>
          <Label htmlFor={nameInputId}>
            Order No
            <FormInput
              onChange={handleChange}
              type="tell"
              name="orderNo"
              placeholder="  type orderNo"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={orderNo}
              id={nameInputId}
              required
            />
            <Error component="div" name="orderNo" />
          </Label>

          <Label htmlFor={numberInputId}>
            Date
            <FormInput
              onChange={handleChange}
              type="text"
              name="date"
              placeholder="  type date"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={date}
              id={numberInputId}
              required
            />
            <Error component="div" name="date" />
          </Label>

          <Label htmlFor={numberInputId}>
            Customer
            <FormInput
              onChange={handleChange}
              type="text"
              name="customer"
              placeholder="  type customer name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={customer}
              id={numberInputId}
              required
            />
            <Error component="div" name="customer" />
          </Label>

          <Label htmlFor={numberInputId}>
            TrackingNo
            <FormInput
              onChange={handleChange}
              type="text"
              name="trackingNo"
              placeholder="  type digits"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={trackingNo}
              id={numberInputId}
              required
            />
            <Error component="div" name="trackingNo" />
          </Label>
          <Label htmlFor={numberInputId}>
            Status
            <FormInput
              onChange={handleChange}
              type="text"
              name="status"
              placeholder="  type digits"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              value={status}
              id={numberInputId}
              required
            />
            <Error component="div" name="status" />
          </Label>

          <Label htmlFor={numberInputId}>
            Consignee
            <FormInput
              onChange={handleChange}
              type="text"
              name="consignee"
              placeholder="  type consigee"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={consignee}
              id={numberInputId}
              required
            />
            <Error component="div" name="consignee" />
          </Label>

          <Button type="submit"> Add new</Button>
        </FormWrap>
      </Formik>
    </div>
  );
};

export default Form;
