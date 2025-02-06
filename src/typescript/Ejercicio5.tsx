import { useState } from "react";

export const Ejercicio5 = () => {
  //5.	Empleado el hook useState crear un acumulador de 5. Se debe visualizar el valor del acumular y dos botones (incrementar - disminuir)
    const [valorContador, setValorContador] = useState<number>(0);

    const cambiarContador = (numero: number): void => {
      if (numero === 0) {
        setValorContador(0);
    } else {
        setValorContador((cont:number) => cont + numero);
    }
        
    }
  return (
    <div>
        <h4>5.	Empleado el hook useState crear un acumulador de 5. Se debe visualizar el valor del acumular y dos botones (incrementar - disminuir)</h4>
        <h5>Contador: <small>{valorContador}</small></h5>
            <button className="btn btn-primary" onClick={() => cambiarContador(-5)}>-5</button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => cambiarContador(5)}>+5</button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => cambiarContador(0)}>Reset</button>
    </div>
  )
}