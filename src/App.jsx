//import style from './styles-sheet/style.module.css';
import { CardContainer } from "./components";

export const App = () => {
  // Galería de Imágenes: Crea un componente que tome
  // un array de objetos que
  // representen imágenes con
  // información como URL, título, descripción, etc. y muestre una galería de imágenes en el DOM.
  const gallery = [
    {
      id: "1",
      url: "https://i.pinimg.com/564x/3e/e4/33/3ee433b1e5225c87f5dcf1926468bf9c.jpg",
      title: "Bear Green",
      description: "",
    },
    {
      id: "2",
      url: "https://i.pinimg.com/564x/e8/81/e0/e881e09a8f1ccd89045c7e6336513ab0.jpg",
      title: "Bear Blue",
      description: "",
    },
    {
      id: "3",
      url: "https://i.pinimg.com/564x/20/c4/68/20c4682ca266fba88d5c1b99f6111a43.jpg",
      title: "Bear Yellow",
      description: "",
    },
    {
      id: "4",
      url: "https://i.pinimg.com/564x/30/4d/75/304d75599082c38de5a78b6cdd1b0ccc.jpg",
      title: "Bear Pink",
      description: "Bear in the flowers",
    },
  ];
  return <CardContainer gallery={gallery} />;
};
