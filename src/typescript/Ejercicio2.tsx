export const Ejercicio2 = () => {
    //2.	Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo. 

    const calcularSuma = (array: number[]): number => {
        return array.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    };

    const numeros: number[] = [1, 2, 3, 4, 5];
    const suma: number = calcularSuma(numeros);

    return (
        <div>
            <h4>2. Desarrolle una función que reciba un arreglo como parámetro y como resultado retorne la suma de los elementos del arreglo.</h4>
            <span> La suma del arreglo: {JSON.stringify(numeros, null, 2)} es: {suma}</span>
        </div>
    )
}
