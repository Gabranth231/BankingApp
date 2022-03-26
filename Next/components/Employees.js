import { useState } from "react";
import { useContext } from "react";
import DataContext from "../store/data-store.js";
import { css, Button, Modal, Text } from "@nextui-org/react";
function Employees() {
  const [theInputText, setTheInputText] = useState("");
  const [errorPopupJsx, setErrorPopupJsx] = useState(null);

  const dataCtx = useContext(DataContext);
  let noEmployees = dataCtx.getNoEmployees();

  function incrementEmployees() {
    noEmployees = dataCtx.getNoEmployees();
    noEmployees = parseInt(noEmployees) + 1;
    dataCtx.setNoEmployees("" + noEmployees);
  }
  function decrementEmployees() {
    noEmployees = dataCtx.getNoEmployees();
    noEmployees = parseInt(noEmployees) - 1;
    dataCtx.setNoEmployees("" + noEmployees);
  }

  const handleChange = (event) => {
    setTheInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let theNum = parseInt(theInputText);
    if (Number.isInteger(theNum)) {
      const newEmployeeNum = "" + theNum;
      dataCtx.setNoEmployees(newEmployeeNum);
    } else {
      // alert()
      setErrorPopupJsx(
        <Modal
          blur
          aria-labelledby="modal-title"
          open={true}
        >
          <Modal.Header>
            <Text b size={18}>
              {theInputText + " is not a valid number of employees"}
            </Text>
          </Modal.Header>
          <Modal.Footer>
            <Button auto color="error" onClick={() => setErrorPopupJsx(null)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )
    }
    if (theInputText != "") {
      setTheInputText("");
    }
  };

  return (
    <section>
      {errorPopupJsx}
      <h1>There are {noEmployees} employees</h1>
      <Button color="success" auto onClick={() => incrementEmployees()}>
        Increment employees
      </Button>
      <Button
        css={{ color: "#101010", backgroundColor: "#d0d0d0" }}
        auto
        onClick={() => decrementEmployees()}
      >
        Decrement employees
      </Button>
      <div>
        <input type="text" value={theInputText} onChange={handleChange} />
        <Button color="success" auto onClick={(event) => handleSubmit(event)}>
          Update employees
        </Button>
      </div>
    </section>
  );
}

export default Employees;
