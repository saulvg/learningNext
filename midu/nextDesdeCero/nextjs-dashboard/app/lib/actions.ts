//con este use server marcamos que todas las acciones que se exportan en este archivo son de servidor y por lo tanto no se ejecutan ni se envian al cliente
'use server';

export async function createInvoice(formData: FormData) {
  console.log('createInvoice', formData);

  //Vamos a recuperar los datos del formulario
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  console.log('rawFormData', rawFormData);
  //Si tuviesemos muchos campos, esta es una manera mas rapida de recoger todos los campos del formulario
  //formData.entries: develve un iterador que contiene pares clave/valor de form data en este caso
  //Object.fromEntries: Lo convierte en un objeto js
  const rawForm = Object.fromEntries(formData.entries());
  console.log(rawForm);
}
