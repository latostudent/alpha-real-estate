// Modal

$(document).ready(function () {

    $('.imagen-gallery').on('click', function () {
  
      var rutaImagen = $(this).attr('src');
      var modal = '<div class="modal" id="modal"><img src="'+ rutaImagen  +'" alt=""><div class="btn-cerrar" id="btnCerrar"><i class="fa-solid fa-xmark"></i></div></div>';
  
      $('#galleries').after(modal);
  
      $('#btnCerrar').on('click', function () {
        $('#modal').remove();
      })
    })
  
    $(document).on('keyup', function (e) {
      if (e.which==27) {
        $('#modal').remove();
      }
    })
  
  });

// Validacion de formulario

$(document).ready(function () {

    var formulario = $('#forms');
    var nombre = $('#name');
    var email = $('#email');
    var email = $('#phone');
    var mensaje = $('#message');
  
    function valNombre(e) {
  
      if (nombre.val() == '' || nombre.val() == null) {
        e.preventDefault();
        $('input[type="text"] + .error').css('display', 'block');
      } else {
        $('input[type="text"] + .error').css('display', 'none');
      }
  
    }
  
    function valEmail(e) {
  
      if (email.val() == '' || email.val() == null) {
        e.preventDefault();
        $('input[type="email"] + .error').css('display', 'block');
      } else {
        $('input[type="email"] + .error').css('display', 'none');
      }
  
    }

    function valPhone(e) {
  
        if (phone.val() == '' || phone.val() == null) {
          e.preventDefault();
          $('input[type="text"] + .error').css('display', 'block');
        } else {
          $('input[type="text"] + .error').css('display', 'none');
        }
    
      }

  
    function valMensaje(e) {
  
      if (mensaje.val() == '' || mensaje.val() == null) {
        e.preventDefault();
        $('textarea + .error').css('display', 'block');
      } else {
        $('textarea + .error').css('display', 'none');
      }
  
    }
  
    function validacion(e) {
      valNombre(e);
      valEmail(e);
      valPhone(e);
      valMensaje(e);
    }
  
    formulario.on('submit', validacion);
  
  })
  

