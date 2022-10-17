import {
  Datagrid,
  DateField,
  List,
  TextField,
  EditButton,
  DeleteButton,
  ReferenceOneField,
} from "react-admin";

export const VehicleList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <ReferenceOneField
        label="fuel card"
        reference="fuel-cards"
        target="vehicleId"
      >
        <TextField source="location" />
      </ReferenceOneField>
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TextField source="plate" />
      <TextField source="type" />
      <TextField source="rcNumber" />
      <TextField source="badgeNumber" />
      <TextField source="zone" />
      <DateField source="state" />
      <TextField source="city" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
