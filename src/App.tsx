//import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Button from "./components/button";
import Alert from "./components/alert";
function App() {
  const [alertVisible, setAlertVisisbility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisisbility(false)}>
          Hello<span>World</span>
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisisbility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
