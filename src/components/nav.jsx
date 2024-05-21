import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link
} from "@nextui-org/react";
import Logo from "./logo";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Perfil",
    "Tablero",
    "Actividad",
    "Analíticas",
    "Sistema",
    "Despliegues",
    "Mis Configuraciones",
    "Configuraciones del Equipo",
    "Ayuda y Feedback",
    "Cerrar Sesión",
  ];

  return (
    <Navbar className="bg-orange-400 " isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit text-white ">Tiked Master</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Logo />
          <p className="font-bold text-inherit text-white">Tiked Master</p>
        </NavbarBrand>
        <NavbarItem>
          <Link className="text-white" href="/">
            Inicio
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link className="text-white" href="/Informes">
            Informes
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-white" href="/Boletas" aria-current="page">
            Agregar
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default Nav;
