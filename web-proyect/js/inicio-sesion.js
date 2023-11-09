document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const correoValue = document.getElementById('correo').value;
      const contrasenaValue = document.getElementById('contrasena').value;
  
      const correoRegistrado = localStorage.getItem('correo');
      const contrasenaRegistrada = localStorage.getItem('contrasena');
  
      if (correoValue === correoRegistrado && contrasenaValue === contrasenaRegistrada) {
        alert('Inicio de sesión exitoso');
        window.location.href ='usuario.html';
      } else {
        alert('Credenciales incorrectas');
      }
  
      loginForm.reset();
    });
  });
  