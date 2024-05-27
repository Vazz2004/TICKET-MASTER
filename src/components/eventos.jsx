import { Button } from "@nextui-org/react";

const Eventos = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-10 p-10 border-b-4 rounded-2xl ">
      <div className="flex justify-end w-full mb-8">
        <img
          className="w-60"
          src="https://i.ibb.co/xsg0t24/subir3.png"
          alt="Logo"
        />
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-6">Bienvenido a Tiked Master</h1>
        <p className="text-xl mb-8">¡Tu plataforma segura y fácil para gestionar eventos!</p>
        <Button color="warning" auto size="lg" className="font-bold">
          Comenzar
        </Button>
      </div>
      <div className="w-full flex mt-20 space-x-10">
        <div className="w-1/2 p-5 bg-white text-gray-800 rounded-lg shadow-md">
          <p className="text-lg">
            ¡Bienvenido a Tiked Master! Estamos encantados de tenerte aquí.
            Nuestra plataforma ofrece una manera segura y sencilla de gestionar
            tus eventos y entradas. Disfruta de una experiencia sin
            complicaciones y encuentra los mejores eventos cerca de ti. Ya seas
            un organizador o un asistente, tenemos todo lo que necesitas para
            hacer de tu evento un éxito. ¡Empecemos!
          </p>
        </div>
        <div className="w-1/2 p-5 flex justify-end items-center">
          <Button color="warning" auto size="lg" className="font-bold mt-10">
            Ver más
          </Button>
        </div>
      </div>
      <div className="flex justify-end w-full mt-8">
        <img
          className="w-60"
          src="https://i.ibb.co/1nyk56K/subir1.png"
          alt="Imagen secundaria"
        />
      </div>
    </div>
  );
};

export default Eventos;
