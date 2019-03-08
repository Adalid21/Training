
var contenido = document.getElementById('contenido')
    function traer() {
		fetch('https://api.github.com/users?since=135')
		.then(res => res.json())
		.then(arreglo => {
		  console.log(arreglo[0].avatar_url)
		  contenido.innerHTML=`
		  <img src="${arreglo[0].avatar_url}"width="100" class="img-fluid rounded-cicle">
          <p>Nombre:${arreglo[0].login} </p>
          <p>Link del Usuario:${arreglo[0].html_url} </p>
          <p>Link del Repositorio del Usuario:${arreglo[0].repos_url} </p>
          `

	    })
     } 

