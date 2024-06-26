
document.addEventListener("DOMContentLoaded", () => {
    const exercises = [
        { id: 1, title: "Ejercicio 1", description: "Selecciona todos los usuarios cuyo nombre contiene la letra ‘a’.", imgSrc: "./assets/img/Consultas/Ejercicio 1.png" },
        { id: 2, title: "Ejercicio 2", description: "Selecciona todos los usuarios cuyo apellido empieza con ‘S’.", imgSrc: "./assets/img/Consultas/Ejercicio 2.png" },
        { id: 3, title: "Ejercicio 3", description: "Selecciona todos los usuarios cuyo correo electrónico personal termina en ‘gmail.com’.", imgSrc: "./assets/img/Consultas/Ejercicio 3.png" },
        { id: 4, title: "Ejercicio 4", description: "Selecciona los nombres y correos electrónicos de todos los usuarios ordenados alfabéticamente por nombre.", imgSrc: "./assets/img/Consultas/Ejercicio 4.png" },
        { id: 5, title: "Ejercicio 5", description: "Selecciona los usuarios ordenados por su edad de forma descendente.", imgSrc: "./assets/img/Consultas/Ejercicio 5.png" },
        { id: 6, title: "Ejercicio 6", description: "Selecciona los primeros 10 usuarios ordenados por su fecha de creación.", imgSrc: "./assets/img/Consultas/Ejercicio 6.png" },
        { id: 7, title: "Ejercicio 7", description: "Selecciona los últimos 5 usuarios ordenados por su fecha de actualización.", imgSrc: "./assets/img/Consultas/Ejercicio 7.png" },
        { id: 8, title: "Ejercicio 8", description: "Selecciona los usuarios que tienen entre 2 y 4 hijos.", imgSrc: "./assets/img/Consultas/Ejercicio 8.png" },
        { id: 9, title: "Ejercicio 9", description: "Selecciona los usuarios cuyo país no es ‘USA’.", imgSrc: "./assets/img/Consultas/Ejercicio 9.png" },
        { id: 10, title: "Ejercicio 10", description: "Selecciona los usuarios cuyo patrimonio es mayor que 100000.", imgSrc: "./assets/img/Consultas/Ejercicio 10.png" },
        { id: 11, title: "Ejercicio 11", description: "Selecciona los usuarios con el género ‘female’ y estado ‘active’.", imgSrc: "./assets/img/Consultas/Ejercicio 11.png" },
        { id: 12, title: "Ejercicio 12", description: " Selecciona los usuarios con correos electrónicos personales que contienen ‘work’.", imgSrc: "./assets/img/Consultas/Ejercicio 12.png" },
        { id: 13, title: "Ejercicio 13", description: "Selecciona los usuarios cuya ciudad empieza con ‘M’.", imgSrc: "./assets/img/Consultas/Ejercicio 13.png" },
        { id: 14, title: "Ejercicio 14", description: "Selecciona el usuario más joven.", imgSrc: "./assets/img/Consultas/Ejercicio 14.png" },
        { id: 15, title: "Ejercicio 15", description: "Selecciona el usuario más viejo.", imgSrc: "./assets/img/Consultas/Ejercicio 15.png" },
        { id: 16, title: "Ejercicio 16", description: "Selecciona el usuario con el patrimonio más alto.", imgSrc: "./assets/img/Consultas/Ejercicio 16.png" },
        { id: 17, title: "Ejercicio 17", description: "Selecciona el usuario con el patrimonio más bajo.", imgSrc: "./assets/img/Consultas/Ejercicio 17.png" },
        { id: 18, title: "Ejercicio 18", description: "Selecciona el usuario con más hijos.", imgSrc: "./assets/img/Consultas/Ejercicio 18.png" },
        { id: 19, title: "Ejercicio 19", description: "Selecciona el usuario con menos hijos.", imgSrc: "./assets/img/Consultas/Ejercicio 19.png" },
        { id: 20, title: "Ejercicio 20", description: "Selecciona el número total de usuarios.", imgSrc: "./assets/img/Consultas/Ejercicio 20.png" },
        { id: 21, title: "Ejercicio 21", description: "Selecciona el número total de usuarios activos.", imgSrc: "./assets/img/Consultas/Ejercicio 21.png" },
        { id: 22, title: "Ejercicio 22", description: "Selecciona el número total de usuarios inactivos.", imgSrc: "./assets/img/Consultas/Ejercicio 22.png" },
        { id: 23, title: "Ejercicio 23", description: "Selecciona el promedio de edad de todos los usuarios.", imgSrc: "./assets/img/Consultas/Ejercicio 23.png" },
        { id: 24, title: "Ejercicio 24", description: "Selecciona el promedio de patrimonio de todos los usuarios.", imgSrc: "./assets/img/Consultas/Ejercicio 24.png" },
        { id: 25, title: "Ejercicio 25", description: "Selecciona el total de activos de todos los usuarios.", imgSrc: "./assets/img/Consultas/Ejercicio 25.png" },
        { id: 26, title: "Ejercicio 26", description: "Selecciona el total de pasivos de todos los usuarios.", imgSrc: "./assets/img/Consultas/Ejercicio 26.png" },
        { id: 27, title: "Ejercicio 27", description: "Selecciona los usuarios agrupados por país y cuenta cuántos usuarios hay en cada país.", imgSrc: "./assets/img/Consultas/Ejercicio 27.png" },
        { id: 28, title: "Ejercicio 28", description: "Selecciona los usuarios agrupados por ciudad y cuenta cuántos usuarios hay en cada ciudad.", imgSrc: "./assets/img/Consultas/Ejercicio 28.png" },
        { id: 29, title: "Ejercicio 29", description: "Selecciona el número total de usuarios cuya música favorita es ‘Rock’.", imgSrc: "./assets/img/Consultas/Ejercicio 29.png" },
        { id: 30, title: "Ejercicio 30", description: "Selecciona el número total de usuarios cuyo género es ‘male’ y están activos.", imgSrc: "./assets/img/Consultas/Ejercicio 30.png" },
        { id: 31, title: "Ejercicio 31", description: "Selecciona los usuarios ordenados por su número de hijos en forma ascendente.", imgSrc: "./assets/img/Consultas/Ejercicio 31.png" },
        { id: 32, title: "Ejercicio 32", description: "Selecciona los usuarios ordenados por su patrimonio en forma descendente.", imgSrc: "./assets/img/Consultas/Ejercicio 32.png" },
        { id: 33, title: "Ejercicio 33", description: "Selecciona los usuarios cuyo nombre o apellido contiene la letra ‘e’.", imgSrc: "./assets/img/Consultas/Ejercicio 33.png" },
        { id: 34, title: "Ejercicio 34", description: "Selecciona el usuario cuyo nombre es ‘Alice’ y su género es ‘female’.", imgSrc: "./assets/img/Consultas/Ejercicio 34.png" },
        { id: 35, title: "Ejercicio 35", description: "Selecciona los usuarios que tienen más de 2 hijos y menos de 5.", imgSrc: "./assets/img/Consultas/Ejercicio 35.png" },
        { id: 36, title: "Ejercicio 36", description: "Selecciona los usuarios cuyo correo electrónico personal no contiene ‘gmail.com’.", imgSrc: "./assets/img/Consultas/Ejercicio 36.png" },
        { id: 37, title: "Ejercicio 37", description: "Selecciona los usuarios cuyo número de teléfono empieza con ‘555’.", imgSrc: "./assets/img/Consultas/Ejercicio 37.png" },
        { id: 38, title: "Ejercicio 38", description: "Selecciona los usuarios que fueron creados en el último mes.", imgSrc: "./assets/img/Consultas/Ejercicio 38.png" },
        { id: 39, title: "Ejercicio 39", description: "Selecciona los usuarios cuya edad es múltiplo de 5.", imgSrc: "./assets/img/Consultas/Ejercicio 39.png" },
        { id: 40, title: "Ejercicio 40", description: "Selecciona los usuarios agrupados por estado y calcula el promedio de patrimonio en cada grupo.", imgSrc: "./assets/img/Consultas/Ejercicio 40.png" },
        { id: 41, title: "Ejercicio 41", description: "Incrementa la edad de todos los usuarios cuyo país es ‘Canada’ y tienen más de 2 hijos en 2 años.", imgSrc: "./assets/img/Actualizacion/Ejercicio 1.png"},
        { id: 41, title: "Ejercicio 41", description: "Incrementa la edad de todos los usuarios cuyo país es ‘Canada’ y tienen más de 2 hijos en 2 años.", imgSrc: "./assets/img/Actualizacion/Ejercicio 1.png" },
        { id: 42, title: "Ejercicio 42", description: "Cambia el estado a ‘inactive’ para todos los usuarios cuyo correo personal no contiene ‘work’ y son mayores de 50 años.", imgSrc: "./assets/img/Actualizacion/Ejercicio 2.png" },
        { id: 43, title: "Ejercicio 43", description: "Duplica los activos para todos los usuarios cuyo patrimonio es menor que 50000.", imgSrc: "./assets/img/Actualizacion/Ejercicio 3.png" },
        { id: 44, title: "Ejercicio 44", description: "Cambia la ciudad a ‘Unknown’ para todos los usuarios que no tienen hijos y están inactivos.", imgSrc: "./assets/img/Actualizacion/Ejercicio 4.png" },
        { id: 45, title: "Ejercicio 45", description: "Actualiza el género a ‘female’ para todos los usuarios cuyo nombre contiene la letra ‘a’ y tienen más de 3 hijos.", imgSrc: "./assets/img/Actualizacion/Ejercicio 5.png" },
        { id: 46, title: "Ejercicio 46", description: "Incrementa los pasivos en un 20% para todos los usuarios que tienen activos mayores que 100000.", imgSrc: "./assets/img/Actualizacion/Ejercicio 6.png" },
        { id: 47, title: "Ejercicio 47", description: "Cambia el correo personal a ‘unknown@example.com’ para todos los usuarios cuyo dominio de correo es ‘hotmail.com’.", imgSrc: "./assets/img/Actualizacion/Ejercicio 7.png" },
        { id: 48, title: "Ejercicio 48", description: "Reduce en 5 años la edad de todos los usuarios cuyo estado es ‘active’ y viven en ‘New York’.", imgSrc: "./assets/img/Actualizacion/Ejercicio 8.png" },
        { id: 49, title: "Ejercicio 49", description: "Actualiza el patrimonio a 100000 para todos los usuarios cuyo número de hijos es par.", imgSrc: "./assets/img/Actualizacion/Ejercicio 9.png" },
        { id: 50, title: "Ejercicio 50", description: "Cambia la música favorita a ‘Jazz’ para todos los usuarios que tienen más de 2 hijos y están activos.", imgSrc: "./assets/img/Actualizacion/Ejercicio 10.png" },
        { id: 51, title: "Ejercicio 51", description: "Incrementa el número de hijos en 1 para todos los usuarios cuyo género es ‘male’ y tienen pasivos menores que 50000.", imgSrc: "./assets/img/Actualizacion/Ejercicio 11.png" },
        { id: 52, title: "Ejercicio 52", description: "Cambia el estado a ‘active’ para todos los usuarios que tienen un correo electrónico que contiene ‘example’.", imgSrc: "./assets/img/Actualizacion/Ejercicio 12.png" },
        { id: 53, title: "Ejercicio 53", description: "Actualiza la ciudad a ‘New City’ para todos los usuarios cuyo patrimonio es mayor que 200000 y tienen menos de 3 hijos.", imgSrc: "./assets/img/Actualizacion/Ejercicio 13.png" },
        { id: 54, title: "Ejercicio 54", description: "Duplica el patrimonio para todos los usuarios cuyo género es ‘female’ y están inactivos.", imgSrc: "./assets/img/Actualizacion/Ejercicio 14.png" },
        { id: 55, title: "Ejercicio 55", description: "Cambia el país a ‘Unknown’ para todos los usuarios cuya edad es mayor que 70.", imgSrc: "./assets/img/Actualizacion/Ejercicio 15.png" },
        { id: 56, title: "Ejercicio 56", description: "Incrementa los activos en 50000 para todos los usuarios cuyo nombre empieza con ‘J’ y tienen más de 1 hijo.", imgSrc: "./assets/img/Actualizacion/Ejercicio 16.png" },
        { id: 57, title: "Ejercicio 57", description: "Cambia el teléfono a ‘000-000-0000’ para todos los usuarios cuyo correo electrónico contiene ‘test’.", imgSrc: "./assets/img/Actualizacion/Ejercicio 17.png" },
        { id: 58, title: "Ejercicio 58", description: "Reduce los activos a la mitad para todos los usuarios cuyo estado es ‘inactive’ y tienen más de 4 hijos.", imgSrc: "./assets/img/Actualizacion/Ejercicio 18.png" },
        { id: 59, title: "Ejercicio 59", description: "Cambia la música favorita a ‘Classical’ para todos los usuarios cuya edad es mayor que 60 y viven en ‘USA’.", imgSrc: "./assets/img/Actualizacion/Ejercicio 19.png" },
        { id: 60, title: "Ejercicio 60", description: "Incrementa el número de hijos en 2 para todos los usuarios cuyo estado es ‘active’ y tienen activos menores que 50000.", imgSrc: "./assets/img/Actualizacion/Ejercicio 20.png" },
        { id: 61, title: "Ejercicio 61", description: "Elimina todos los usuarios que tienen más de 3 hijos y cuyo patrimonio es menor que 100000.", imgSrc: "./assets/img/Eliminacion/Ejercicio 1.png" },
        { id: 62, title: "Ejercicio 62", description: "Elimina todos los usuarios cuyo correo personal contiene ‘spam’ y tienen más de 50 años.", imgSrc: "./assets/img/Eliminacion/Ejercicio 2.png" },
        { id: 63, title: "Ejercicio 63", description: "Elimina todos los usuarios que no tienen activos pero tienen pasivos mayores que 0.", imgSrc: "./assets/img/Eliminacion/Ejercicio 3.png" },
        { id: 64, title: "Ejercicio 64", description: "Elimina todos los usuarios que están inactivos y cuyo nombre o apellido contiene la letra ‘z’.", imgSrc: "./assets/img/Eliminacion/Ejercicio 4.png" },
        { id: 65, title: "Ejercicio 65", description: "Elimina todos los usuarios cuyo número de teléfono contiene la secuencia ‘123’ y tienen más de 2 hijos.", imgSrc: "./assets/img/Eliminacion/Ejercicio 5.png" },
        { id: 66, title: "Ejercicio 66", description: "Elimina todos los usuarios que viven en ‘Unknown’ y cuyo estado es ‘inactive’.", imgSrc: "./assets/img/Eliminacion/Ejercicio 6.png" },
        { id: 67, title: "Ejercicio 67", description: "Elimina todos los usuarios que fueron creados antes del año 2000 y cuyo país es ‘USA’.", imgSrc: "./assets/img/Eliminacion/Ejercicio 7.png" },
        { id: 68, title: "Ejercicio 68", description: "Elimina todos los usuarios cuyo patrimonio es negativo y tienen el estado ‘active’.", imgSrc: "./assets/img/Eliminacion/Ejercicio 8.png" },
        { id: 69, title: "Ejercicio 69", description: "Elimina todos los usuarios cuyo correo electrónico termina en ‘example.com’ y tienen activos mayores que 50000.", imgSrc: "./assets/img/Eliminacion/Ejercicio 9.png" },
        { id: 70, title: "Ejercicio 70", description: "Elimina todos los usuarios que tienen más de 5 hijos y cuyo correo personal no contiene ‘family’.", imgSrc: "./assets/img/Eliminacion/Ejercicio 10.png" }
    ];

    const container = document.getElementById("exercise-container");
    exercises.forEach(exercise => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = /*html*/ `
            <div class="card-content">
                <h2>${exercise.title}</h2>
                <button class="button-response" data-id="dialog${exercise.id}">Respuesta</button>
            </div>
            <dialog id="dialog${exercise.id}" class="dialog">
                <h3 class="dialog-title">${exercise.title}:</h3>
                <p class="dialog-content">${exercise.description}</p>
                <h3>Query-Solucion:</h3>
                <img src="${exercise.imgSrc}" alt="">
            </dialog>
        `;
        
        container.appendChild(card);
    });

    document.querySelectorAll(".button-response").forEach(button => {
        button.addEventListener("click", () => {
            const dialogId = button.getAttribute("data-id");
            const dialog = document.getElementById(dialogId);
            if (dialog) {
                dialog.showModal();
            }
        });
    });
});
