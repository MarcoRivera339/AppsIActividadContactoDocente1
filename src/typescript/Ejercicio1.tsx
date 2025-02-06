export const Ejercicio1 = () => {
    //1.	Crear una función con parámetros que permita calcular el área de un cuadrado.
    const area = (num1: number): number => {
        return Math.pow(num1, 2);
    }
    return (
        <div>
            <h4>1. Crear una función con parámetros que permita calcular el área de un cuadrado</h4>
            <span>El area del cuadrado es: {area(2)} (u)</span>
        </div>
    )
}
