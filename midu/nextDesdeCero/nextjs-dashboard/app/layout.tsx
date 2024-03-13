//Ya que el layout va a envolver nuestra aplicacion es interesante que tanto la fuente como el css blobal este aqui
import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className="flex items-center justify-center py-10">
          Hecho con {'<3'} por la gente de vercel
        </footer>
      </body>
    </html>
  );
}
