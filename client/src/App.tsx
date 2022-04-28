import { Routes, Route } from "react-router-dom";

// Components
import { Personnel } from "./pages/personnel";
import { Homepage } from "./pages/homepage";

// Misc
import { routes } from "./constants";

const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path={routes.homepage} element={<Homepage />} />
            <Route path={routes.addPersonnel} element={<Personnel />} />
            <Route path={`${routes.editPersonnel}/:id`} element={<Personnel />} />
        </Routes>
    );
};

export default App;
