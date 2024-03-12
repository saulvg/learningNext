//Fichero para importar las fuentes que queramos desde google (disponibles todas las de google), esto optimiza el cargado de fuentes
import { Lusitana, Montserrat } from 'next/font/google';

//Tiene muchas opciones la exportacion de la fuente, idiomas, pesos, etc.
export const montserrat = Montserrat({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
