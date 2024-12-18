- Congela un objeto y no deja modificar nada
`Object.freeze(producto)`

-Permite modificar valores de las propiedades, pero no permite agregar nuevas ni eliminar
`Object.seal(producto)`

-Para extraer elementos o propiedades de un objeto
`Destructuring`

-Los tres puntos (...) es para agregar objetos sin tener un objeto dentro de otro
`Spread operator`

-Unir objetos
`Object.assign`

-El destructuring arrays lo hace en base a la posición

-Array Methods
    -Filter: con condiciones
    -Includes: si existe en el arreglo
    -Some: devuelve si al menos
    -Find: devuelve el primer elemento que cumple una condición
    -Every: devuelve `true` o `false` si todos cumplen la condición
    -Reduce: retorna un acumulado del total

-Optional Chaining: se usa como una forma de condición de existencia ejemplo:
`alumno.examenes?.examen1`

-Nullish coalescing operator (??): en el siguiente ejemplo lo que hace es valuar si la página es nulo toma el valor de uno, de lo contrario toma el valor que corresponde.
`const pagina = null ?? 1`

-Evaluación de corto circuito: es para poder valuar rápidamente true o false sin usar ternario, en ternario sería
`auth ? 'usuario autenticado' : ''`  y con el tema sería `auth && 'usuario autenticado'`

-ECMAScript Modules
    código del principal, 24.js
	import { sumar } from './funciones.js'
	const resultado = suma(10, 20)
	
	código del secundario, funciones.js
	export function sumar(n1, n2){
		return n1 + n2
	}