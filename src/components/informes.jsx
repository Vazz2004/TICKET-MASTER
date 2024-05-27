import { useEffect, useState } from "react";
import axios from 'axios';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';

const InformesBotones = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tiked/tikeds');
        setEventos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const descargarWord = () => {
    const contenido = generarContenidoWord(eventos);
    const blob = new Blob([contenido], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    saveAs(blob, 'informe.docx');
  };

  const generarContenidoWord = (data) => {
    let contenido = "Tiked ID\tEvento ID\tNúmero de personas\tCorreo de compra\tTotal a pagar\n";
    data.forEach((evento) => {
      contenido += `${evento.tiked_id}\t${evento.evento_id || '---'}\t${evento.numeros_personas}\t${evento.correo_compra}\t${evento.total_pagar || '---'}\n`;
    });
    return contenido;
  };

  const descargarPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text('Informe de Tikeds', 105, 10, null, null, 'center');
    let y = 20;
    eventos.forEach((evento, index) => {
      if (index > 0 && index % 3 === 0) {
        doc.addPage();
        y = 20;
      }
      doc.text(`Tiked ID: ${evento.tiked_id}`, 10, y);
      doc.text(`Evento ID: ${evento.evento_id}`, 10, y + 10);
      doc.text(`Número de personas: ${evento.numeros_personas}`, 10, y + 20);
      doc.text(`Correo de compra: ${evento.correo_compra}`, 10, y + 30);
      doc.text(`Total a pagar: ${evento.total_pagar}`, 10, y + 40);
      y += 50;
    });
    doc.save('informe.pdf');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">Informes Tikend Master</h1>
      <div className="flex justify-center space-x-6">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline"
          onClick={descargarWord}
        >
          Descargar en Word
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline"
          onClick={descargarPDF}
        >
          Descargar en PDF
        </button>
      </div>
    </div>
  );
};

export default InformesBotones;
