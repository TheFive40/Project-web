// cerrar-sesion.js
document.addEventListener('DOMContentLoaded', function () {
    const cerrarSesionButton = document.getElementById('cerrarSesion');
    if (cerrarSesionButton) {
      cerrarSesionButton.addEventListener('click', function () {
        // Elimina los datos del usuario y el estado de inicio de sesión del localStorage
        localStorage.removeItem('usuario');
        localStorage.removeItem('isLoggedIn');
  
        // Redirige al usuario a la página de inicio
        window.location.href = 'index.html'; 
      });
    }
  });
  