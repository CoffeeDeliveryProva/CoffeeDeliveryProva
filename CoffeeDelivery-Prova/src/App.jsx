import { Card } from "./components/card";

export function App() {
  return (
    <Card
      image={"src/img/tradicional.png"}
      tags={"TRADICIONAL"}
      title={"Expresso tradicional"}
      description={"O tradicional café feito com água quente e grãos muidos"}
      price={"9,90"}
    />
  );
}
