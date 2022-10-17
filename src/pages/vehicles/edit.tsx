import {
  BooleanInput,
  DateInput,
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";

export const VehicleEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" disabled />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
      <TextInput source="plate" />
      <TextInput source="type" />
      <TextInput source="uniqueCode" />
      <TextInput source="rcNumber" />
      <DateInput source="insuranceExpiryDate" />
      <DateInput source="fcExpiryDate" />
      <DateInput source="polutionExpiryDate" />
      <TextInput source="badgeNumber" />
      <TextInput source="zone" />
      <DateInput source="state" />
      <TextInput source="city" />
      <BooleanInput source="trackerUsed" />
      <TextInput source="trackerCompany" />
      <TextInput source="trackerNumber" />
    </SimpleForm>
  </Edit>
);
