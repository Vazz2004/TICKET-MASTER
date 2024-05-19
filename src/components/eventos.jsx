import React, { useState } from 'react';
import { Image } from "@nextui-org/react";
import YouTube from 'react-youtube';
import Modal from 'react-modal';

// Estilo para el modal
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    borderRadius: '8px',
    padding: '0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

const Eventos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  // Función para abrir el modal con el video de YouTube
  const openModal = (videoId) => {
    setVideoId(videoId);
    setModalIsOpen(true);
  }

  // Función para cerrar el modal
  const closeModal = () => {
    setModalIsOpen(false);
  }

  // Opciones para el reproductor de YouTube
  const opts = {
    height: '315',
    width: '560',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="w-full h-full rounded-2xl bg-gray-900 flex flex-col justify-center items-center mt-10 p-10">
      <h1 className="text-white text-center text-3xl mb-8">Los mejores Eventos con los mejores artistas</h1>
      <div className="grid grid-cols-3 gap-12">
        <div className="relative overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105">
          <a href="#" onClick={() => openModal('A9XMYzbOz7c')}>
            <Image
              isBlurred
              width={240}
              height={240}
              src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?cs=srgb&dl=pexels-sebastian-ervi-866902-1763075.jpg&fm=jpg"
              alt="NextUI Album Cover"
              className="object-cover w-full h-full cursor-pointer"
            />
          </a>
          <p className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-lg text-center py-2">Nombre artista</p>
        </div>

        {/* Repite lo mismo para las otras imágenes */}
        {/* Asegúrate de cambiar el videoId correspondiente a cada enlace */}

      </div>
      {/* Modal para el video de YouTube */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Reproductor de Video"
      >
        <button className="absolute top-4 right-4 text-white" onClick={closeModal}>Cerrar</button>
        <div className="mx-auto" style={{ width: '560px' }}>
          <YouTube videoId={videoId} opts={opts} />
        </div>
      </Modal>
    </div>
  )
}

export default Eventos;
