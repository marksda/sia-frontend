import { Route, Routes } from "react-router-dom";
import Layout from "../layout/router-layout";
import HomeScreen from "../scenes/akutansi-app/home-page.component";
import SignInScreen from "../scenes/akutansi-app/sign-in.component";

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