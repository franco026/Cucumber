# ORM
Para realizar los pasos del crud del taller se abrira postman

Luego de abrirlo lo primero que se hara sera mostrar los datos de la base de datos
1. se seleccionara la opcion get(por defecto siempre aparecer seleccionada al abrir postman)
2. a lado del get pegamos la ruta definida en el codigo en donde se mostrara la informacion
3. luego se dara clic en el boton send

Para agregar un nuevo contacto
1. se seleccionara la opcion post
2. se pegara la ruta definida en el codigo
3. se seleccionara la opcion body que se encuentra en el menu de abajo de la ruta
4. se dara clic en raw
5. en text se escogera la opcion JSON
6. en la parte de abajo se escribira entre {} los campos de la tabla y el valor de ellas 
    {	
    "id" : "3",
    "firstName" : "jose",
    "lastName" : "maria",
    "emailAddress" : "ofs@gmail"
    }
7. luego se dara clic en el boton send

para actualizar alguna tabla
1. se seleccionara la opcion put
2. se pegara la ruta definida en el codigo agrenado el id del contacto 
3. se seleccionara la opcion body que se encuentra en el menu de abajo de la ruta
4. se dara clic en raw
5. en text se escogera la opcion JSON
6. en la parte de abajo se escribira entre {} los campos de la tabla y el valor de ellas 
    {
    "firstName" : "jose",
    "lastName" : "maria",
    "emailAddress" : "ofs@gmail"
    }
7. luego se dara clic en el boton send

Para eliminar un contacto

para actualizar alguna tabla
1. se seleccionara la opcion put
2. se pegara la ruta definida en el codigo agrenado el id del contacto 
7. luego se dara clic en el boton send
