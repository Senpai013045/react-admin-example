import {
  AutocompleteArrayInput,
  Create,
  ReferenceInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const FuelCardCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="location" />
      <ReferenceInput source="vehicleId" reference="vehicles" />
      <AutocompleteArrayInput
        source="tags"
        choices={[
          { id: "programming", name: "Programming" },
          { id: "lifestyle", name: "Lifestyle" },
          { id: "photography", name: "Photography" },
        ]}
      />
    </SimpleForm>
  </Create>
);
