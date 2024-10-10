$(document).ready(function () {
    $("#show_plants").click(function () {
        $("#plants").show();
        $("#animals").hide();
    });

    $("#show_animals").click(function () {
        $("#plants").hide();
        $("#animals").show();
    });

    var cont_selects = 0;
    $(".capchaimages").click(function () {
        $(this).toggleClass("selected");

        cont_selects++;
        if (cont_selects > 3) {
            alert("Solo puedes seleccionar 3 imágenes");

        }
    });

    $("#bt_validar_plants").click(function () {
        validarCaptcha("planta", "is_flower");
    });

    $("#bt_validar_animals").click(function () {
        validarCaptcha("animal", "is_dog");
    });

    function validarCaptcha(tipo, propiedad) {
        var cont_true = 0;
        if (cont_selects == 3) {
            $(".selected").each(function () {
                if ($(this).attr("propiedad") == "True") {
                    cont_true++;
                }
            });
            if (cont_true == 3) {
                alert("Correcto, puedes seguir avanzando");
                window.location.reload();
            } else {
                alert("Ha ocurrido un error, intentalo nuevamente");
                window.location.reload();
            }
        } else {
            alert("Debes seleccionar 3 opciones");
        }
    }
});
