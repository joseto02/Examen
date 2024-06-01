

export const obtenerMarcaAdidas = async () => {
    try {
        const response = await fetch("https://api-marcas.onrender.com/adidas");
        const data = await response.json();
        return data.adidas;
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
}

export const obtenerMarcaNike = async () => {
    try {
        const response = await fetch("https://api-marcas.onrender.com/nike");
        const data = await response.json();
        return data.nike;
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
}

export const obtenerMarcaPuma = async () => {
    try {
        const response = await fetch("https://api-marcas.onrender.com/puma");
        const data = await response.json();
        return data.puma;
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
}