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

  // Función para descargar un archivo de texto como .docx
  const descargarWord = () => {
    const contenido = generarContenidoWord(eventos);
    const blob = new Blob([contenido], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    saveAs(blob, 'informe.docx');
  };

  // Función para generar el contenido del archivo Word
  const generarContenidoWord = (data) => {
    let contenido = "Tiked ID\tEvento ID\tNúmero de personas\tCorreo de compra\tTotal a pagar\n";
    data.forEach((evento) => {
      contenido += `${evento.tiked_id}\t${evento.evento_id || '---'}\t${evento.numeros_personas}\t${evento.correo_compra}\t${evento.total_pagar || '---'}\n`;
    });
    return contenido;
  };

  // Función para descargar un archivo de texto como .pdf
  const descargarPDF = () => {
    const doc = new jsPDF();
    let y = 10; // Posición inicial en y
    let pageCount = 1; // Contador de páginas
    eventos.forEach((evento) => {
      let texto = `Tiked ID: ${evento.tiked_id}\nEvento ID: ${evento.evento_id}\nNúmero de personas: ${evento.numeros_personas}\nCorreo de compra: ${evento.correo_compra}\nTotal a pagar: ${evento.total_pagar}\n\n`;
      const splitText = doc.splitTextToSize(texto, 180); // Dividir el texto en líneas
      const lineHeight = 5; // Altura de línea estimada
      const pageHeight = 280; // Altura máxima de la página
      if (y + (splitText.length * lineHeight) > pageHeight) {
        doc.addPage(); // Agregar una nueva página
        y = 10; // Reiniciar la posición en y
        pageCount++; // Incrementar el contador de páginas
      }
      doc.text(splitText, 10, y);
      y += splitText.length * lineHeight; // Incrementar la posición en y para la siguiente línea
    });
    doc.save(`informe_${pageCount}.pdf`); // Guardar el PDF con un nombre que indica el número de páginas generado
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-10">
      <h1 className="text-3xl font-semibold text-center mb-6">Informes</h1>
      <div className="flex justify-center space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={descargarWord}>
          Descargar en Word
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={descargarPDF}>
          Descargar en PDF
        </button>
      </div>
    </div>
  );
};

export default InformesBotones;
