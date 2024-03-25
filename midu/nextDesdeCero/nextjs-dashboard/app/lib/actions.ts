//con este use server marcamos que todas las acciones que se exportan en este archivo son de servidor y por lo tanto no se ejecutan ni se envian al cliente
'use server';

import { z } from 'zod';
import { Invoice } from './definitions';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

//Gracias a zod y al typado de Invoice, vamos ha crear un esquema validador para que cada factura que creemos tenga que respetar dicho esquema
const CreateInvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
});
//Ahora creamos un subesquema para omitir algunos campos, ya que no vienen del formulario no los validamos
const CreateInvoiceFormSchema = CreateInvoiceSchema.omit({
  id: true,
  date: true,
});

export async function createInvoice(formData: FormData) {
  console.log('createInvoice', formData);

  //Vamos a recuperar los datos del formulario y a validarlos
  //--Sin validar
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
    date: z.string(),
  };
  console.log('rawFormData', rawFormData);
  //Si tuviesemos muchos campos, esta es una manera mas rapida de recoger todos los campos del formulario
  //formData.entries: develve un iterador que contiene pares clave/valor de form data en este caso
  //Object.fromEntries: Lo convierte en un objeto js
  const rawForm = Object.fromEntries(formData.entries());
  console.log(rawForm);

  //--Validado
  const { customerId, amount, status } = CreateInvoiceFormSchema.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  //Ahora que hemos comprobado que los datos son del tipo correcto, transformamos el amount a centimos para evitar errores de redondeo.
  const amountInCents = amount * 100;
  //Creamos la fecha actual de este formato AAAA-MM-DD, separando con el split la fecha en dos y cogiendo solo la primera parte con el destructiruin, porque esto nos devuelve un array de dos posiciones, y nosotros nos quedamos con la primera
  const [date] = new Date().toISOString().split('T');

  //Ahora querriamos llamar a la base de datos e  insertar la info en nuestra BD, lo vamos a hacer a traves de sql, que es una biblioteca que importamos de vercelPostres
  await sql`
  INSERT INTO invoices (customer_id, amount, status, date)
  VALUES (${customerId}, ${amountInCents}, ${status}, ${date})`;

  //Una vez hecha esta peticion, revalidamos la ruta para que los datos sean visibles para el usuairo
  revalidatePath('/dashboard/invoices');
  //Ademas lo redireccionamos a la pagina de facturas para sacarlo del formulario
  redirect('/dashboard/invoices');
}
