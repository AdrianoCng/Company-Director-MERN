import { Routes, Route } from "react-router-dom";

import { Personnel } from "./containers/personnel";
import { Homepage } from "./containers/homepage";
import { routes } from "./utils/constants";

const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path={routes.homepage} element={<Homepage />} />
            <Route path={routes.addPersonnel} element={<Personnel />} />
            <Route
                path={`${routes.editPersonnel}/:id`}
                element={<Personnel />}
            />
        </Routes>
    );
};

export default App;
