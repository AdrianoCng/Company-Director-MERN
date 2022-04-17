import { Routes, Route } from "react-router-dom";
import { AddPersonnel } from "./containers/addPersonnel";
import { Homepage } from "./containers/homepage";
import { routes } from "./utils/constants";

const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path={routes.homepage} element={<Homepage />} />
            <Route path={routes.addPersonnel} element={<AddPersonnel />} />
            <Route
                path={`${routes.editPersonnel}/:id`}
                element={<AddPersonnel />}
            />
        </Routes>
    );
};

export default App;
