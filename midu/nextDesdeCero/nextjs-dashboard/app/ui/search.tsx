'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    //Es nativo de web api para acceder a la ruta, etc.. investiga, "searchParams" vendria a ser el "windows.location.search", pero el hook lo hace por nosotros
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    //Ahora queremos actulizar la ruta mientras escribimos en el input, para ello utilizaremos los hooks de useRouter u usePathname y montaremos la ruta
    replace(`${pathname}?${params}`);
    //Por ulitmo y para mejorar la experiencia del usuario, haremos que al entrar a la misma url formada con los params, el valor en este caso del input sea el que corresponde por la url, pero esto podria trasladarse a otras acciones de la web, este es un ejemplo
    //Para ello pondremos en el input el valor por defecto dle param, sencillo
  };
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        onChange={(event) => handleSearch(event.target.value)}
        //Creo que ya es un string sin el toString, pero nos sirve para manejar la posibilidad de que sea null transformandolo a "", un strin
        //Tras esto si compartiesemos o refrescasemos la pagina, el input se cargara con el valor del path de la url que acabamos de especificare como valor por defecto
        defaultValue={searchParams.get('query')?.toString()}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
