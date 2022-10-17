import { Admin, Resource } from "react-admin";
import { authProvider } from "./auth-provider";
import { dataProvider } from "./data-provider";
import { VehicleCreate } from "./pages/vehicles/create";
import { VehicleEdit } from "./pages/vehicles/edit";
import { VehicleList } from "./pages/vehicles/list";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import { FuelCardsList } from "./pages/fuel-cards/list";
import { FuelCardEdit } from "./pages/fuel-cards/edit";
import { FuelCardCreate } from "./pages/fuel-cards/create";
import { CustomLayout } from "./layout";

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      layout={CustomLayout}
    >
      <Resource
        name="vehicles"
        list={VehicleList}
        edit={VehicleEdit}
        create={VehicleCreate}
        icon={DirectionsBusIcon}
        recordRepresentation={(record) => record.plate}
      />
      <Resource
        name="fuel-cards"
        list={FuelCardsList}
        edit={FuelCardEdit}
        create={FuelCardCreate}
        icon={LocalGasStationIcon}
      />
    </Admin>
  );
}

export default App;
