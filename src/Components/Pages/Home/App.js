import React from "react";
import Input from "../../Atoms/Input";
import Select from "../../Atoms/Select";
import Button from "../../Atoms/Button";
import BoxWhiteRound from "../../Atoms/BoxWhiteRound";
import PrivateRoute from "../../Templates/PrivateRoute";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Title, Columns } from "./stylesHome";
import DirectoryPerson from "../../../utils/Form/directoryPerson";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      typeDocument: "",
      job: "",
      id: "",
      city: "",
      email: "",
      addres: "",
      phone: "",
      phoneHome: "",
      dateExpedition: "",
      dateBirth: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Debe tener 20 caracteres o menos")
        .required("Rellena este campo obligatorio."),
      lastName: Yup.string()
        .max(20, "Debe tener 20 caracteres o menos")
        .required("Rellena este campo obligatorio."),
      job: Yup.string()
        .max(15, "Debe tener 15 caracteres o menos")
        .required("Rellena este campo obligatorio."),
      typeDocument: Yup.string().required(
        "Selecciona una opción del menú desplegable."
      ),
      id: Yup.string().required("Rellena este campo obligatorio."),
      city: Yup.string().required(
        "Selecciona una opción del menú desplegable."
      ),
      email: Yup.string()
        .required("Rellena este campo obligatorio.")
        .email("Correo electrónico no válida"),
      addres: Yup.string().required("Rellena este campo obligatorio."),
      phone: Yup.string().required("Rellena este campo obligatorio."),
      dateExpedition: Yup.string().required(
        "Selecciona una opción del menú desplegable."
      ),
      dateBirth: Yup.string().required(
        "Selecciona una opción del menú desplegable."
      )
    }),
    onSubmit: values => {
      DirectoryPerson({ person: values });
      formik.resetForm({});
    }
  });

  return (
    <PrivateRoute>
      <Container>
        <BoxWhiteRound>
          <header>
            <Title>Formulario</Title>
            <p>
              Personas naturales con las cuales podría hacer negocios en el
              futuro.
            </p>
          </header>
          <form onSubmit={formik.handleSubmit}>
            <Columns columns={2}>
              <Input
                name="firstName"
                label="Nombres"
                type="text"
                required
                onChange={formik.handleChange}
                touched={formik.touched}
                value={formik.values.firstName}
                errors={formik.errors}
              />
              <Input
                name="lastName"
                label="Apellidos"
                type="text"
                required
                onChange={formik.handleChange}
                touched={formik.touched}
                value={formik.values.lastName}
                errors={formik.errors}
              />
            </Columns>
            <Columns columns={2}>
              <Input
                name="dateBirth"
                label="Fecha de Nacimiento"
                type="date"
                required
                onChange={formik.handleChange}
                touched={formik.touched}
                value={formik.values.dateBirth}
                errors={formik.errors}
              />
              <Input
                name="job"
                label="Ocupación"
                type="text"
                required
                onChange={formik.handleChange}
                touched={formik.touched}
                value={formik.values.job}
                errors={formik.errors}
              />
            </Columns>
            <Columns columns={2}>
              <Select
                name="typeDocument"
                label="Tipo de Documento"
                required
                onChange={formik.handleChange}
                touched={formik.touched}
                value={formik.values.typeDocument}
                errors={formik.errors}
              >
                <option disabled defaultValue value="">
                  Seleccionar
                </option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PA">Pasaporte</option>
              </Select>
              <Input
                name="id"
                label="Número de documento"
                type="text"
                required
                onChange={formik.handleChange}
                touched={formik.touched}
                value={formik.values.id}
                errors={formik.errors}
              />
            </Columns>
            <Columns columns={2}>
              <Select
                name="city"
                label="Ciudad"
                required
                onChange={formik.handleChange}
                touched={formik.touched}
                value={formik.values.city}
                errors={formik.errors}
              >
                <option disabled defaultValue value="">
                  Seleccionar
                </option>
                <option value="Armenia">Armenia</option>
                <option value="Barranquilla">Barranquilla</option>
                <option value="Bello">Bello</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Bucaramanga">Bucaramanga</option>
                <option value="Buenaventura">Buenaventura</option>
                <option value="Cali">Cali</option>
                <option value="Cartagena">Cartagena</option>
                <option value="Cúcuta">Cúcuta</option>
                <option value="Ibagué">Ibagué</option>
                <option value="Ipiales">Ipiales</option>
                <option value="Manizales">Manizales</option>
                <option value="Medellín">Medellín</option>
                <option value="Montería">Montería</option>
                <option value="Neiva">Neiva</option>
                <option value="Pasto">Pasto</option>
                <option value="Pereira">Pereira</option>
                <option value="Popayán">Popayán</option>
                <option value="Santa Marta">Santa Marta</option>
                <option value="Soacha">Soacha</option>
                <option value="Soledad">Soledad</option>
                <option value="Tuluá">Tuluá</option>
                <option value="Valledupar">Valledupar</option>
                <option value="Villavicencio">Villavicencio</option>
                <option value="Otra">Otra</option>
              </Select>
              <Input
                name="dateExpedition"
                label="Fecha de expedición"
                type="date"
                required
                onChange={formik.handleChange}
                touched={formik.touched}
                value={formik.values.dateExpedition}
                errors={formik.errors}
              />
            </Columns>
            <Columns columns={2}>
              <Input
                name="email"
                label="Correo electrónico"
                type="text"
                required
                onChange={formik.handleChange}
                touched={formik.touched}
                value={formik.values.email}
                errors={formik.errors}
              />
              <Input
                name="addres"
                label="Dirección"
                type="text"
                required
                onChange={formik.handleChange}
                touched={formik.touched}
                value={formik.values.addres}
                errors={formik.errors}
              />
            </Columns>
            <Columns columns={2}>
              <Input
                name="phone"
                label="Teléfono celular"
                type="text"
                required
                onChange={formik.handleChange}
                touched={formik.touched}
                value={formik.values.phone}
                errors={formik.errors}
              />
              <Input
                name="phoneHome"
                label="Teléfono fijo"
                type="text"
                onChange={formik.handleChange}
                touched={formik.touched}
                value={formik.values.phoneHome}
                errors={formik.errors}
              />
            </Columns>
            <Button id="save" type="submit">
              Enviar
            </Button>
          </form>
        </BoxWhiteRound>
      </Container>
    </PrivateRoute>
  );
}

export default App;
