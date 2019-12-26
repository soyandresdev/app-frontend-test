import React from "react";
import FormUserCreate from "../../Organism/FormUserCreate";
import PrivateRoute from "../../Templates/PrivateRoute";
import { Container } from "./stylesHome";

function App() {
  return (
    <PrivateRoute>
      <Container>
        <FormUserCreate />
      </Container>
    </PrivateRoute>
  );
}

export default App;
