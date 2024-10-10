$(document).ready(function () {
  // Evento de formulario para agregar nuevas tareas manualmente
  $("#task-form").on("submit", function (event) {
    event.preventDefault();

    let taskText = $("#task-input").val().trim();

    if (taskText === "") {
      alert("El campo no puede estar vacío, por favor ingrese una tarea");
      return;
    }

    let duplicate = false;
    $("#task-list li").each(function () {
      if ($(this).text().includes(taskText)) {
        duplicate = true;
        return false;
      }
    });

    if (duplicate) {
      alert("La tarea ya existe");
      return;
    }

    let taskItem = `<li class="list-group-item d-flex justify-content-between align-items-center">
            ${taskText}
            <span>
                <button class="btn btn-sm btn-success complete-task">Completada</button>
                <button class="btn btn-sm btn-danger delete-task">Eliminar</button>
            </span>
        </li>`;

    $("#task-list").append(taskItem);
    $("#task-input").val("");
  });

  // Evento para marcar la tarea como completada y moverla a la lista de tareas completadas
  $(document).on('click', '.complete-task', function(){
    let completedTask = $(this).closest('li').clone(); // Clonamos el elemento li
    completedTask.find('.complete-task').remove(); // Eliminamos el botón de completar
    $("#completed-task-list").append(completedTask); // Movemos el li a la lista de tareas completadas
    $(this).closest('li').remove(); // Eliminamos la tarea de la lista de tareas pendientes
  });

  // Evento para eliminar la tarea
  $(document).on('click', '.delete-task', function(){
    $(this).closest('li').remove();
  });

  // Evento para agregar tarea desde las tarjetas (cards) a la lista de tareas completadas
  $(document).on('click', '.add-card-task', function() {
    let taskName = $(this).data('task-name'); // Obtiene el nombre de la tarea desde data-task-name

    // Verificar si la tarea ya está en la lista de tareas completadas
    let duplicate = false;
    $("#completed-task-list li").each(function () {
      if ($(this).text().includes(taskName)) {
        duplicate = true;
        return false;
      }
    });

    if (duplicate) {
      alert("La tarea ya está completada");
      return;
    }

    // Agregar la tarea a la lista de tareas completadas
    let completedTaskItem = `<li class="list-group-item d-flex justify-content-between align-items-center">
            ${taskName}
            <span>
                <button class="btn btn-sm btn-danger delete-task">Eliminar</button>
            </span>
        </li>`;

    $("#completed-task-list").append(completedTaskItem);
  });
});
