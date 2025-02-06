export const Ejercicio4 = () => {
  //      4.	Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones. 
  // const alumnos = [
  //     {
  //         name: Viviana,
  //         edad: 19,
  //         calificacion: 10,
  //     },
  //     {
  //         name: Wendy,
  //         edad: 20,
  //         calificacion: 8,
  //     },
  //     {
  //         name: Gerson,
  //         edad: 18,
  //         calificacion: 9,
  //     }
  // ];
  interface Alumno {
    nombre: string;
    edad: number;
    calificacion: number
  }

  //objetos
  const alumno1: Alumno = {
    nombre: 'Viviana',
    edad: 19,
    calificacion: 10
  }

  const alumno2: Alumno = {
    nombre: 'Wendy',
    edad: 20,
    calificacion: 8
  }

  const alumno3: Alumno = {
    nombre: 'Gerson',
    edad: 18,
    calificacion: 9
  }
  const promedio=():number=>{
    let prom:number =(alumno1.calificacion+alumno2.calificacion+alumno3.calificacion)/3;
    return prom
  }
  

  return (
    <div>
      <h4>4. Crear un arreglo con objetos "alumno" y sus propiedades son nombre, edad y calificaciones. Luego, escribir una función que calcule el promedio de las calificaciones.</h4>
      <span>{promedio()}</span>
    </div>
  )
}
