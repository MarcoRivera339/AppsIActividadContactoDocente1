export const Ejercicio3 = () => {
    //3.	Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5. const arreglo = [5,10,15,20,25,30,35,40,45,50]
    const arreglo: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const arregloDividido: number[] = arreglo.map((numero:number) => numero / 5);
    return (
        <div>
            <h4>3.	Del siguiente arreglo devolver un nuevo arreglo con los valores divididos para 5. const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]</h4>
            <span>El Array dividido entre 5 es: {JSON.stringify(arregloDividido,null,2)}</span>
        </div>
    )
}
