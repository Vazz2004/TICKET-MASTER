import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const FormAgregar = () => {
    const [eventos, setEventos] = useState([]);
    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/tiked/eventos');
                if (isMounted.current) {
                    setEventos(response.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        return () => {
            isMounted.current = false;
        };
    }, []);

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        id_evento: "",
        numeroPersonas: "",
        totalPagado: 0 // Agregado el campo totalPagado en formData
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            id_evento: value,
        }));
    };

    const calcularCostoTotal = () => {
        const costoPorBoleta = 50;
        const numeroPersonas = parseInt(formData.numeroPersonas);
        return numeroPersonas * costoPorBoleta;
    };

    const handleCalcularTotal = () => {
        const totalPagado = calcularCostoTotal();
        setFormData((prevData) => ({
            ...prevData,
            totalPagado: totalPagado,
        }));
    };

    const handleGuardar = async () => {
        setFormData((prevData) => ({
            ...prevData,
            totalPagado: calcularCostoTotal(),
        }));
        
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Data saved to localStorage:', formData);
        try {
            const response = await axios.post('http://localhost:5000/tiked/create-tiked', formData);
            console.log(response);
        } catch (error) {
            console.error('Error saving data:', error);
        }
        window.location = '/Pago'; // Uncomment if redirection is needed after save
    };

    return (
        <div className="w-full flex">
            <div className="w-5/12">
                <h1 className="text-2xl mt-10">Agregar boletas</h1>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-10">
                    <Input
                        type="text"
                        label="Nombre "
                        placeholder="Ingrese su nombre "
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-10">
                    <Input
                        type="text"
                        label="Apellido"
                        placeholder="Ingrese su apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-10">
                    <Input
                        type="email"
                        label="Correo"
                        placeholder="Ingrese su correo"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mt-10">
                    <Select
                        label="Seleccione evento"
                        className="w-full"
                        onChange={(e) => handleSelectChange(e.target.value)}
                        value={formData.id_evento}
                    >
                        {eventos.map((evento) => (
                            <SelectItem key={evento.id_evento} value={evento.id_evento}>
                                {evento.nombre_evento}     
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <div className="mt-10">
                    <Input
                        type="number"
                        label="Número de personas"
                        placeholder="Ingrese la cantidad de personas"
                        name="numeroPersonas"
                        value={formData.numeroPersonas}
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full p-5 flex items-center">
                    <Button color="warning" auto size="lg" className="font-bold mt-10 text-white" onClick={handleCalcularTotal}>
                        Calcular Total
                    </Button>
                    <Button color="warning" auto size="lg" className="font-bold mt-10 text-white ml-5" onClick={handleGuardar}>
                        Guardar
                    </Button>
                </div>
            </div>
            <div className="w-5/12 mt-10 mx-36 ">
                <Table aria-label="Example table with dynamic content">
                    <TableHeader>
                        <TableColumn>NOMBRE</TableColumn>
                        <TableColumn>APELLIDO</TableColumn>
                        <TableColumn>CORREO</TableColumn>
                        <TableColumn>COSTO TOTAL</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>{formData.nombre}</TableCell>
                            <TableCell>{formData.apellido}</TableCell>
                            <TableCell>{formData.correo}</TableCell>
                            <TableCell>{formData.totalPagado}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default FormAgregar;
