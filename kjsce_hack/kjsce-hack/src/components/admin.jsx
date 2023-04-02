import React from "react";
import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

const Admin=() => {
    
  const initialValues = { imei: "", seed: "", brandn: "", brandm:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.imei) {
      errors.imei = "IMEI Number is required!";
    } else if(values.imei.length!=16){
        errors.imei = "IMEI Number is invalid"
    }
    if (!values.seed) {
      errors.seed = "Seed Phrase is required!";
    } 
    if (!values.brandn) {
      errors.brandn = "Brand Name is required";
    } 
    if (!values.brandm) {
        errors.brandm = "Brand Model is required";
      } 
    return errors;
  };

  return (
    <div className="reg-container">
      <form onSubmit={handleSubmit}>
        <h1><Typewriter loop={true} onInit={(typewriter)=>{
            typewriter.typeString("Admin").pauseFor(0).start();
        }}
        /></h1><br/>
       
        <div className="ui-form">
          <div className="field">
            <label>IMEI Number</label><br/>
            <input
              type="number"
              name="imei"
              placeholder="Imei number"
              value={formValues.imei}
              onChange={handleChange}
            />
          </div><br/>
          <p>{formErrors.imei}</p>
          <div className="field">
            <label>Seed Phrase</label><br/>
            <input
              type="text"
              name="seed"
              placeholder="Seed Phrase"
              value={formValues.seed}
              onChange={handleChange}
            />
          </div><br/>
          <p>{formErrors.seed}</p>
          <div className="field">
            <label>Brand Name</label><br/>
            <select name="brandm" value={formValues.brandm} onChange={handleChange}>
            <option value="Oppo">Oppo</option>
            <option value="Vivo">Vivo</option>
            <option value="Apple">Apple</option>
            <option value="OnePlus">OnePlus</option>
            </select>
            
          </div><br/>
          <p>{formErrors.brandn}</p>
          <div className="field">
            <label>Brand Model</label><br/>
            <input
              type="text"
              name="brandn"
              placeholder="Brand Name"
              value={formValues.brandn}
              onChange={handleChange}
            />
            
          </div><br/>
          <p>{formErrors.brandm}</p>
          <button className="form-bttn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Admin;