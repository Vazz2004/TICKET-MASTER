import Inicio from '../pages/inicio'
import AgregarBoletas from'../pages/agregarBoletas'
import PagoPage from '../pages/pago'
import InformesPage from '../pages/informes';
const routes = [
  {
    path: '/',
    element: <Inicio />,
  },{
    path: '/Boletas',
    element: <AgregarBoletas />,
  },{
    path: '/Pago',
    element: <PagoPage />,
  },{
    path: '/Informes',
    element: <InformesPage />,
  },
];

export default routes;
