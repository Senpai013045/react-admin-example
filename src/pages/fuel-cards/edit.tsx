import {
  DateInput,
  Edit,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const FuelCardEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
      <TextInput source="location" />
      <ReferenceInput source="vehicleId" reference="vehicles" />
    </SimpleForm>
  </Edit>
);
