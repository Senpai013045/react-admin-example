import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const FuelCardsList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="location" />
      <ReferenceField source="vehicleId" reference="vehicles" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
