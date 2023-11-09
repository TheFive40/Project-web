document.addEventListener('DOMContentLoaded', function() {
    const registroForm = document.getElementById('registroForm');
  
    registroForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nombreValue = document.getElementById('nombre').value;
      const apellidoValue = document.getElementById('apellido').value;
      const correoValue = document.getElementById('correo').value;
      const contrasenaValue = document.getElementById('contrasena').value;
      const generoValue = document.getElementById('genero').value;
  
      localStorage.setItem('nombre', nombreValue);
      localStorage.setItem('apellido', apellidoValue);
      localStorage.setItem('correo', correoValue);
      localStorage.setItem('contrasena', contrasenaValue);
      localStorage.setItem('genero', generoValue);
  
      alert('Registro exitoso');
      registroForm.reset();
  
      window.location.href = 'inicio-sesion.html'; 
    });
  });
  