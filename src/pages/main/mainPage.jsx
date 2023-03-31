import { useState } from "react";
import Button from "../../components/Button/Button";

const MainPage = () => {
    const [calculo, setCalculo] = useState("");
    
    const guardar = (valor) => {
        setCalculo(calculo += valor);
        console.log(calculo);
    }

    const numeros = [0,1,2,3,4,5,6,7,8,9];
    const operadores = ["+", "-", "x", "/", "%"];

  return (
    <main>
    <div>

    <div className= "contenedor-numeros">
    {numeros.map(numero => <Button onClick={() => {guardar(numero)}} valor={numero}></Button>)}
    </div>
    <div className="contenedor-botones-calculos">
    {operadores.map(operador => <Button onClick={() => {guardar(operador)}} valor={operador}></Button>)}
    </div>

    </div>
    </main>

  );
};

export default MainPage;
