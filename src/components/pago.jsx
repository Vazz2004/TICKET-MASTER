import { useState, useEffect } from 'react';

const Pago = () => {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [nombreTitular, setNombreTitular] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
  const [codigoSeguridad, setCodigoSeguridad] = useState('');
  const [errores, setErrores] = useState({});
  const [exito, setExito] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [emailsInvitados, setEmailsInvitados] = useState([]);
  const [numeroPersonas, setNumeroPersonas] = useState(0);

  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem('formData'));
    if (formData && formData.numeroPersonas && emailsInvitados.length === 0) {
      setNumeroPersonas(formData.numeroPersonas);
      setEmailsInvitados(Array(formData.numeroPersonas).fill(''));
    }
  }, [emailsInvitados.length]);

  const datosPrecargados = [
    { numeroTarjeta: '1234567890123456', nombreTitular: 'John Doe', fechaExpiracion: '12/25', codigoSeguridad: '123' },
    { numeroTarjeta: '9876543210987654', nombreTitular: 'Jane Doe', fechaExpiracion: '10/24', codigoSeguridad: '456' }
  ];

  const validarFormulario = () => {
    const errores = {};
    const datosCoinciden = datosPrecargados.some((datos) => {
      return (
        datos.numeroTarjeta === numeroTarjeta &&
        datos.nombreTitular === nombreTitular &&
        datos.fechaExpiracion === fechaExpiracion &&
        datos.codigoSeguridad === codigoSeguridad
      );
    });

    if (!datosCoinciden) {
      errores.general = 'Los datos ingresados no coinciden con los datos precargados';
    }

    return errores;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errores = validarFormulario();
    if (Object.keys(errores).length === 0) {
      setExito(true);
      setMostrarFormulario(true);
    } else {
      setErrores(errores);
    }
  };

  const handleEnviarInvitaciones = (event) => {
    event.preventDefault();
    console.log('Enviar invitaciones a:', emailsInvitados);
  };

  const handleEmailChange = (index, value) => {
    const newEmails = [...emailsInvitados];
    newEmails[index] = value;
    setEmailsInvitados(newEmails);
  };

  const handleEnvioInvitado = () => {
    window.location = '/';
  };

  const formulariosEmails = Array.from({ length: numeroPersonas }, (_, index) => (
    <div key={index} className="mb-4">
      <label htmlFor={`emailInvitado-${index}`} className="block text-gray-700 font-bold mb-2">
        {`Email del Invitado ${index + 1}`}
      </label>
      <input
        type="email"
        id={`emailInvitado-${index}`}
        value={emailsInvitados[index]}
        onChange={(e) => handleEmailChange(index, e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  ));

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <div className="mb-8 flex justify-center">
          <img src="https://www.mastercard.es/content/dam/public/mastercardcom/eu/es/images/Consumidores/escoge-tu-tarjeta/credito/credito-world/1280x720-mc-sym-card-wrld-ci-5BIN-mm.png" alt="Tarjeta de Crédito" className="w-40" />
        </div>
        <form onSubmit={handleSubmit}>
          {exito && (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
              <p className="font-bold">Éxito:</p>
              <p>Los datos ingresados coinciden con los datos precargados.</p>
            </div>
          )}
          {errores.general && <p className="text-red-500 text-sm mb-4">{errores.general}</p>}
          <div className="mb-4">
            <label htmlFor="numeroTarjeta" className="block text-gray-700 font-bold mb-2">Número de Tarjeta</label>
            <input type="text" id="numeroTarjeta" value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="nombreTitular" className="block text-gray-700 font-bold mb-2">Nombre del Titular</label>
            <input type="text" id="nombreTitular" value={nombreTitular} onChange={(e) => setNombreTitular(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4 flex justify-between">
            <div className="w-1/2 mr-2">
              <label htmlFor="fechaExpiracion" className="block text-gray-700 font-bold mb-2">Fecha de Expiración</label>
              <input type="text" id="fechaExpiracion" value={fechaExpiracion} onChange={(e) => setFechaExpiracion(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="codigoSeguridad" className="block text-gray-700 font-bold mb-2">Código de Seguridad</label>
              <input type="text" id="codigoSeguridad" value={codigoSeguridad} onChange={(e) => setCodigoSeguridad(e.target.value)} className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </div>
          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Pagar</button>
        </form>
        {mostrarFormulario && (
          <div className="mt-8">
            <form onSubmit={handleEnviarInvitaciones}>
              {formulariosEmails}
              <button onClick={handleEnvioInvitado} type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">Enviar Invitaciones</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pago;
