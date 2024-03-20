# ✏️ Description

This is a repository where I will conduct courses about Next.js

## 📚 Courses

<section>
  <blockquote>
  <details>
    <summary>
      <strong style="font-size: larger;">Next from cero</strong> 
    </summary>
    <section>
      <h4> 🌐 Reference website </h4>
       <a href='https://nextjs.org/learn'>Start building with Next.js</a>
       <h4> 📒 Chapters </h4>
          <section>
        <blockquote>
            <details name='chaptersBasicNext'>
              <summary>
                 Capitulo 1
              </summary>
                  <p>Creacion de un proyecto de Next, en este caso utilizando una plantilla para agilizar el curso</p>
              <p>npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"</p>
              <p>Importar css global</p>
              <p>Importar css modules</p>
              <p>Cargar fuentes de google en el fichero fonts</p>
              <p>Imagenes optimizadas gracias al componente Nativo "Image"</p>
              <p>Enrutado por archivos "file sistem routing"</p>
              <p>Añadir layout a diferenes niveles</p>
              <p>Para que la pagaina sea "Singel page aplication" recuerda que los enlaces sean 'Link' de Next</p>
              <p>Por defecto todos los componentes por defecto van a ser server side render, por lo que si necesitamos que un componente sea client component deberemos indicarlo en el archivo, por ejemplo si queremos acceder a la ruta de una pagina con el usePathname()</p>
              <p>Creacion de .env e implementacion de las variables de entorno desde 'https://vercel.com/dashboard/stores'</p>
              <p>Feching de datos en React server components "dashboard/page"</p>
              <p>Creamos un archivo loading a nivel de la pagina que queramos que muestre otra cosa mientras se espera a la peticion fetch, en este caso en el dashboard</p>
              <p>Utilizamos el streaming de datos y el componente "Suspense" y su prop "fallback" para que se ejecute la pagina mientras espera a que las peticiones realizadas en los componentes dentro de suspense esten listas y asi no hacer que toda la pagina espere a tener todos los datos, por lo tanto el loadig de la pagina ya no haria tanta falta, porque vamos a controlar la carga de cada componente</p>
              <p>Manejo y captura del contenido del input Search, ademas de reflejarlo en la url 'la fuente de la verdad' gracias al useSearchParams() y otros hooks de las rutas, control de los params de la url para compartir url etc...</p>
              <p>Estamos haciendo que la pagina de invoices carge los contenidos correctos en la table, para ello en vez de props o acceder a la url de otra manera y ya que todo esto esta ocurriendo en el servidor, a toda la app le llegan los search params, asi que en las props los vamos a recuperar, conclusion, si queremos recuperar los searchParams desde el servidor, lo hacemos a traves de la prop, si los queremos recuperar desde el lado del cliente tenemos que utilizar el hook</p>
              <p>Tener en cuenta que gracias al suspense queda bonito la rerenderizacion de la lista y el fallback se vuelve a llamar con cada cambio gracias a la key, que fuerza a que cuando cambie la key se renderice de nuevo el fallback (esta key sirve con cualquier componente de react)</p>
              <p>Vamos a crear un Debounce para que no se realicen tantas peticiones, esto simplemente es esperar a que el  usuario deje de escribir en este caso para realizar la peticion, en este caso y porque estamos trabajando conreact vamos a utilizar la libreria 'use-debounce', instalandola en la terminal con 'npm install use-debounce -E', esto obviamente lo vamos a aplicar donde se esta ejecutando la logica del buscador, en el 'search'</p>
              <p>Añadimos la paginacion de una manera muy similar a como hemos añadido la query, recuperando en el componente 'pagination', el numero de pagina en el que estamos, etc</p>
              <p>Vamos a utilizar los server actions para el formulario de las facturas, los servver actions nos permiten utilizar codigo asincrono directamente en el servidor, esto nos permite suprimir la creacion de un api y sus endpoints cada vez que queramos mutar datos en la base de datos</p>
              <p>Vamos a crear una pagina para crear una factura dentro de invoices para aplicar aqui los server actions, aqui llamaremos a el componente Form para que se nos abra asi un formulario, y enste componte es donde vamos a trabajar con los server actions, para ello vamos a crear en la carpeta lib un fichero actions.ts para crear nuestras acciones/mutaciones en relaciona nuestra base de datos, lo encaezaremos con un use server, marcando asi qeu esto solo se ejecuta en el servidor, sin que cliente pueda verlo o que ni siquiera llegue</p>
              <p>Enviamos los datos del formulario y los recogemos en las actions, truquitos, etc...</p>
            </details>
            <details name='chaptersBasicNext'>
              <summary>
                Capitulo 2 
              </summary>
              <p>Hacemos algo</p>
            </details>
            </blockquote>
      </section>
    </section>
  </details>
  </blockquote>
</section>
