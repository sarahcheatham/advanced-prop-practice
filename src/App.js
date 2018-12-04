import React from "react";
import "./App.css";
import PropTypes from "prop-types";
import SuperComponent from "./components/SuperComponent";
import Parent from "./components/Parent";


/* eslint-disable no-unused-vars, no-console */
function App(props) {
  const product = {
    name: "ajax",
    description: "Cleans your bathroom real good"
  };
  const names = ["Bob", "Stand", "Todd", "Ted"];
  return (
    <div>
      {/* send in a prop called "message", give it the string "Hello World" */}
      <div><SuperComponent message={"Hello World"} /> </div>
      {/* send in a prop called "message", give it the string "Goodbye World" */}
      <div><SuperComponent message={'Goodbye World'} /> </div>
      {/* send in a prop called "message", give it the string "Props are awesome" */}
      <div><SuperComponent message={"Props are awesome"} /> </div>
      {/* send in a prop called "message", give it the string "I totally get this now" */}
      <div><SuperComponent message={"I totally get this now"}/> </div>


      {/* send in a prop called "magicNumber", give it the number 42*/}
      <div><SuperComponent magicNumber={42}/> </div>
      {/* send in a prop called "magicNumber", give it the number 21*/}
      <div><SuperComponent magicNumber={21}/> </div>


      {/* send in a prop called "product", give it the variable product*/}
      <div><SuperComponent product={product}/> </div>
      {/* send in a prop called "product", give it an object with a key of "name" and a value "pepsi"*/}
      <div><SuperComponent product={product.name = 'pepsi'} /> </div>
      {/* send in a prop called "product", give it an object with a key of "name" and a value "nike"*/}
      <div><SuperComponent product={product.name = 'nike'}/> </div>


      {/* send in a prop called "names", with the value of the variable names*/}
      <div><SuperComponent names={names}/> </div>
      {/* send in a prop called "names", give it an array ["Brodie","Alicia","Margo"]*/}
      <div><SuperComponent names={["Brodie","Alicia","Margo"]}/> </div>
      {/* send in a prop called "names", give it an array ["Titus","Axel","Claire"]*/}
      <div><SuperComponent names={["Titus","Axel","Claire"]}/> </div>

      {props.props}
      {/* send in a prop called "products", give it the products array from App's props*/}
      <div><SuperComponent products={props.products}/> </div>
      {/* send in a prop called "names", give it the names array from App's props*/}
      <div><SuperComponent names={props.names}/> </div>
      {/* send in a prop called "magicNumber", give it the magicNumber from App's props*/}
      <div><SuperComponent magicNumber={props.magicNumber}/> </div>
      {/* send in a prop called "message", give it the contact.firstName from App's props*/}
      <div><SuperComponent message={props.contact.firstName}/> </div>
      {/* send in a prop called "message", give it the contact.lastName from App's props*/}
      <div><SuperComponent message={props.contact.lastName}/> </div>
      {/* send in a prop called "message", give it the contact.occupation from App's props*/}
      <div><SuperComponent message={props.contact.occupation}/> </div>
      {/* send in a prop called "message", give it the contact.address from App's props*/}
      <div><SuperComponent message={props.contact.address}/> </div>
      <Parent />
    </div>
  );
}
App.propTypes = {
  products: PropTypes.array.isRequired,
  names: PropTypes.array.isRequired,
  magicNumber: PropTypes.number.isRequired,
  contact: PropTypes.object.isRequired
};
export default App;
