import { FormRow, Alert } from "../../components/Index";
import { useAppContext } from "../../context/appContext";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import FormRowSelect from "../FormRowSelect";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const AddCustomer = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,
    lastName,
    firstName,
    product,
    serialNumber,
    brand,
    replacedParts,
    fixingparts,
    description,
    estimateStart,
    statusOptions,
    status,
    address,
    price,
    handleChange,
    clearValues,
    createCustomer,
    editCustomer,
    customers,
    paymentStatusOptions,
    paymentStatus,
    popularBrandName,
    estimateEnd,
    pickUp,
    pickUpOptions,
    diagnosis,
    replacedPartsPrice,
    popularParts,
    serviceFee,
    partsDelivery,
    listOfBrand,
    appliancesType,
    warranting,
    endOfWarranting,
    getListBrand,
    listOfPart,
    alertText,
    alertType
  } = useAppContext();
  
  useEffect(() => {
    getListBrand()
    document.title = "Add Customer";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (
      !lastName ||
      !firstName ||
      !product ||
      !serialNumber ||
      !brand ||
      !fixingparts ||
      !address
    ) {
      displayAlert();
      return;
    }
    if (isEditing) {
      editCustomer();
      return;
    }
    
    createCustomer();
  };

  const handleCustomerInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    handleChange({ name, value });
  };
  const totalPrice = Number(serviceFee) + Number(replacedPartsPrice)
  let isDisabled;
  customers.filter((customer) =>{
    if(isEditing){
      if(customer.firstName != '' || customer.lastName != '' || customer.brand != '' || customer.serialNumber != '' || customer.appliancesType != '' || customer.product != ''){
        isDisabled = true
      }
    } else {
      isDisabled = false
    }
  })
  let provideValue;

  if (
    !lastName ||
    !firstName ||
    !product ||
    !serialNumber ||
    !brand ||
    !fixingparts ||
    !address
  ) {
    provideValue = false;
  } else {
    provideValue = true;
  }

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "Update Customer" : "Add Customer"}</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRow
            type="text"
            labelText="last name"
            placeholder="Enter Customer Last Name"
            name="lastName"
            disabled={isDisabled}
            value={lastName}
            handleChange={handleCustomerInput}
          />

          <FormRow
            type="text"
            labelText="first name"
            placeholder="Enter Customer First Name"
            disabled={isDisabled}
            name="firstName"
            value={firstName}
            handleChange={handleCustomerInput}
          />

          <FormRow
            type="text"
            labelText="Type of Appliances"
            placeholder="e.g. Television"
            name="appliancesType"
            disabled={isDisabled}
            value={appliancesType}
            handleChange={handleCustomerInput}
          />
          
          <FormRow
            type="text"
            labelText="Appliances Description"
            placeholder="Enter Customer Appliances Description e.g. inches"
            name="product"
            disabled={isDisabled}
            value={product}
            handleChange={handleCustomerInput}
          />

          <FormRow
            type="text"
            name="serialNumber"
            placeholder="Enter Customer Appliances Serial Number"
            disabled={isDisabled}
            value={serialNumber}
            handleChange={handleCustomerInput}
          />
          
          <div className="brandGrid">
            <FormRowSelect
            labelText='-Select-'
            name="brand"
            value={brand}
            handleChange={handleCustomerInput}
            list={listOfBrand}
            /> 
            
            <FormRow
              labelText='Brand'
              name="brand"
              placeholder="Enter Customer Appliances Brand"
              disabled={isDisabled}
              value={brand}
              handleChange={handleCustomerInput}
              className="changeFontSize"
              /> 
          </div>
          
          <FormRow
            type="text"
            labelText="Initial diagnosis"
            placeholder="Enter Customer Appliances Another Issue"
            name="diagnosis"
            value={diagnosis}
            handleChange={handleCustomerInput}
          />

          <div className="partsSection">
            <FormRowSelect
              labelText='-Select-'
              name="replacedParts"
              value={replacedParts}
              handleChange={handleCustomerInput}
              list={listOfPart}
              /> 

            <FormRow
              type="text"
              labelText="Replacement Parts"
              placeholder="Enter Replacement Parts for Customer Appliances"
              name="replacedParts"
              value={replacedParts}
              handleChange={handleCustomerInput}
            />
          </div>
          
          <div className="deliveryTime">
            <FormRow
              type="number"
              labelText="Price"
              name="replacedPartsPrice"
              value={replacedPartsPrice}
              handleChange={handleCustomerInput}
            />
            <FormRow
              type="date"
              labelText="Parts Delivery Date"
              name="partsDelivery"
              value={partsDelivery}
              handleChange={handleCustomerInput}
            />
          </div>

          <FormRow
            type="text"
            labelText="Fixing Parts"
            placeholder="Enter a Fixing Parts for Customer Appliances"
            name="fixingparts"
            value={fixingparts}
            handleChange={handleCustomerInput}
          />

          <FormRow
            type="text"
            labelText="Remarks"
            placeholder="Enter Remarks"
            name="description"
            value={description}
            handleChange={handleCustomerInput}
          />
          <FormRow
            type="text"
            name="address"
            placeholder="Enter Customer Address"
            value={address}
            handleChange={handleCustomerInput}
          />
          <div className="estimateGrid">
          <FormRow
            type="date"
            labelText="Estimated Start"
            name="estimateStart"
            value={estimateStart}
            handleChange={handleCustomerInput}
          />
         
          <FormRow
            type="date"
            labelText="Estimated End"
            name="estimateEnd"
            value={estimateEnd}
            handleChange={handleCustomerInput}
          />
          </div>

          <FormRow
            type="number"
            labelText="Service Fee"
            name="serviceFee"
            value={serviceFee}
            handleChange={handleCustomerInput}
          />
          
          <FormRow
            type="number"
            labelText={`Total Price: ${totalPrice}`}
            placeholder={totalPrice}
            name="price"
            value={price}
            handleChange={handleCustomerInput}
          />

          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleCustomerInput}
            list={statusOptions}
          />

          <FormRowSelect
            name="pickUp"
            value={pickUp}
            handleChange={handleCustomerInput}
            list={pickUpOptions}
          />

          <FormRowSelect
            name="paymentStatus"
            value={paymentStatus}
            handleChange={handleCustomerInput}
            list={paymentStatusOptions}
          />
            
          <FormRow
            type="date"
            labelText="End of Warranty"
            name="endOfWarranting"
            value={endOfWarranting}
            handleChange={handleCustomerInput}
          />

          <div className="btn-container">
            {provideValue ? 
            <button
            type="submit"
            className="btn btn-block submit-btn"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <Link to="/dashboard/all-customer" className="addCustomerLink">
            {isEditing ? "Update" : "Add Customer"}
            </Link>
            
          </button>
             :
             <button
             type="submit"
             className="btn btn-block submit-btn"
             onClick={handleSubmit}
             disabled={isLoading}
           >
             <Link to="/dashboard/add-customer" className="addCustomerLink">
             {isEditing ? "Update" : "Add Customer"}
             </Link>
             
           </button>
        }
          </div>
          <div className="btn-container">
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddCustomer;
