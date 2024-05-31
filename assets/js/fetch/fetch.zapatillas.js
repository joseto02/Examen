
//FUNCION PARA CONECTARSE A LA API
export const obtenerZapatillas = async () => {
    try {
        const response = await fetch("https://api-zapatillas.onrender.com");
        const data = await response.json();
        return data.zapatillas;
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
}