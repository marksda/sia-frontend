import { Route, Routes } from "react-router-dom";
import Layout from "../layout/akutansi-app/router-layout";

const AkutansiApp = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path="login" element={<SignInScreen />} />
        </Route>
      </Routes>
    );
};

export default AkutansiApp;