import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

export const FuelCardCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="location" />
      <ReferenceInput source="vehicleId" reference="vehicles" />
    </SimpleForm>
  </Create>
);
