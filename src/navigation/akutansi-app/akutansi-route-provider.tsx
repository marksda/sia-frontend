import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AkutansiApp from "../../app/AkutansiApp";
import HomeScreen from "../../scenes/akutansi-app/home-page.component";
import SignInScreen from "../../scenes/akutansi-app/sign-in.component";
import { FC } from "react";
import RekeningScreen from "../../scenes/akutansi-app/rekening-page.component";


interface IAkutansiRouteProvider {
  mainPath: string;
};

const AkutansiRouteProvider: FC<IAkutansiRouteProvider>  = ({mainPath}) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<AkutansiApp />)
    },
    {
      path: `/${mainPath}`,
      element: (<HomeScreen />),
      children: [
        {
          path: "pembukuan",
          element: (<RekeningScreen />)
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
  
  return <RouterProvider router={router} />;         
};

export default AkutansiRouteProvider;