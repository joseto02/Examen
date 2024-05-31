export const obtenerMarcaAdidas = async () => {
    try {
        const response = await fetch("https://api-marcas.onrender.com");
        const data = await response.json();
        return data.Adidas;
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
}