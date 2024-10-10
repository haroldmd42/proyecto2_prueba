$(document).ready(function () {
  $("#task-form").on("submit", function (event) {
    event.preventDefault();
    let taskText = $("#task-input").val().trim();

    if (taskText === "") {
      alert("El campo no puede estar vacío, por favor agregue una tarea");
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
      alert("La tarea ya existe en la lista");
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

  $(document).on("click", ".complete-task", function () {
    let completedTask = $(this).closest("li").clone();
    completedTask.find(".complete-task").remove();
    $("#completed-task-list").append(completedTask);
    $(this).closest("li").remove();
  });

  $(document).on("click", ".delete-task", function () {
    $(this).closest("li").remove();
  });

  $(document).on("click", ".add-card-task", function () {
    let taskName = $(this).data("task-name");

    let duplicate = false;
    $("#completed-task-list li").each(function () {
      if ($(this).text().includes(taskName)) {
        duplicate = true;
        return false;
      }
    });
    if (duplicate) {
      alert("La tarea que eligiste ya se completo");
      return;
    }

    let completedTaskItem = `<li class="list-group-item d-flex justify-content-between align-items-center">
            ${taskName}
            <span>
                <button class="btn btn-sm btn-danger delete-task">Eliminar</button>
            </span>
        </li>`;

    $("#completed-task-list").append(completedTaskItem);
  });
});
