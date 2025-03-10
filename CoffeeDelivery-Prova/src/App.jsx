import { CardTrad } from "./components/card";

export function App() {
  return (
    <CardTrad
      foto={"src/img/tradicional.png"}
      tipo={"TRADICIONAL"}
      tipo2={"Expresso tradicional"}
      desc={"O tradicional café feito com água quente e grãos muidos"}
      preco={"9,90"}
    />
  );
}
