import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AkutansiApp from "../app/AkutansiApp";
import HomeScreen from "../scenes/akutansi-app/home-page.component";
import SignInScreen from "../scenes/akutansi-app/sign-in.component";

const router = createBrowserRouter([
    {
      path: "/",
      element: (<AkutansiApp />)
    },
    {
      path: "/akutansi",
      element: (<HomeScreen />),
      children: [
        {
          path: "rekening",
          element: (<div style={{color: 'black'}}>Tes rekening</div>)
        },
        {
          path: "laporan",
          element: (<div style={{color: 'black'}}>Tes laporan</div>)
        },
        {
          path: "pengaturan",
          element: (<div style={{color: 'black'}}>Tes pengaturan</div>)
        }
      ]
    },
    {
      path: "/login",
      element: (<SignInScreen />)
    }
]);

const AkutansiRouteProvider = () => {
    return <RouterProvider router={router} />;         
};

export default AkutansiRouteProvider;