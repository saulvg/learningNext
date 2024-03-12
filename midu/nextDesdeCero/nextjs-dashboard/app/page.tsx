import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
//Podriamos importar estos estilos en cualquier componente
import styles from './ui/home.module.css';
import { lusitana } from './ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
        <div className={styles.shape}></div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`text-xl text-gray-800 antialiased md:text-3xl md:leading-normal`}
          >
            <strong className={`${lusitana.className}`}>
              Bienvenido al Curso
            </strong>{' '}
            This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          {/* Con la etiqueta img  el rendimiento no es optimo*/}
          {/* <img src="/hero-desktop.png" alt="Screenshot of the dashboard" /> */}
          {/* Sin embargo con el componente nativo de Image procuramos una buena optimizacion e incluyendo el ancho y alto nos evitamos ya el salto de web, le guarda el ancho y el alto a nuesta imagen 
            Ademas por defecto es lazyLoad, no carga las imagenes que no se muestran
          */}
          <Image
            src="/hero-desktop.png"
            alt="Screenshot of the dashboard"
            width={1000}
            height={760}
            className="hidden md:block"
          />
          <Image
            src="/hero-mobile.png"
            alt="Screenshot of the dashboard"
            width={560}
            height={620}
            className="visible md:hidden"
          />
        </div>
      </div>
    </main>
  );
}
