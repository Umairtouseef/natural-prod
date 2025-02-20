import { useState } from "react";
import AddressSelector from "./AddressSelector";

const addresses = [
  {
    id: "1",
    label: "New Home",
    address: "26, Starts Hollow Colony, Denver, Colorado, United States",
    pincode: "80014",
    phone: "+1 5551855359",
  },
  {
    id: "2",
    label: "Old Home",
    address: "53B, Claire New Street, San Jose, Colorado, United States",
    pincode: "36954",
    phone: "+1 5551855359",
  },
  {
    id: "3",
    label: "Office",
    address: "21B, Row New Street, San Jose, California, United States",
    pincode: "32659",
    phone: "+1 5551855359",
  },
];

const BillingAddress = () => {
  const [selectedAddress, setSelectedAddress] = useState(addresses[0].id);

  return (
    <div className="p-8">
      <AddressSelector
        addresses={addresses}
        selectedAddress={selectedAddress}
        onSelect={setSelectedAddress}
        onAddNew={() => alert("Open Add New Address Modal")}
        fieldLabels={{
          title: "Shipping Address",
          addNew: "Add Address",    
          address: "Street Address",
          pincode: "Postal Code",
          phone: "Contact Number",
        }}
      />
    </div>
  );
};

export default BillingAddress;
