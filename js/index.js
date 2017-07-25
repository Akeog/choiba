function OrderFormController ($scope) {

	// Defina o modelo de propriedades. O View vai fazer o loop
	// através do array services e gerar um elemento li
	// para cada um dos itens.
//console.log('$scope ',$scope);
	$scope.services = [
		{
			name: 'Alojamiento y Tres Comidas (1 Huésped Adulto por Noche)',
			price: 250000,
			active: false
		}, {
			name: 'Alojamiento y Tres Comidas (A partir de 2 Huéspedes por Noche)',
			price: 240000,
			active: false
		}, {
			name: 'Menor de 3 a 8 años por noche',
			price: 140000,
			active: false
		}, {
			name: 'Traslado en bote Nuquí-Choibá-Nuquí (De 1 a 3 Personas)',
			price: 480000,
			active: false
		}, {
			name: 'Traslado en bote Nuquí-Choibá-Nuquí (De 4 a 6 Personas)',
			price: 750000,
			active: false
		}, {
			name: 'Traslado en bote Nuquí-Choibá-Nuquí (De 7 a 10 Personas)',
			price: 1000000,
			active: false
		}, {
			name: 'Caminatas guiadas por la selva',
			price: 50000,
			active: false
		}, {
			name: 'Paseo en bote a Cabo Corrientes para 1 Persona (Incluye Refrigerio)',
			price: 200000,
			active: false
		}, {
			name: 'Paseo en bote a Cabo Corrientes A partir de 2 Personas (Incluye Refrigerio)',
			price: 140000,
			active: false
		}, {
			name: 'Avistamientos de ballenas (Junio a Octubre por 3 Horas para 1 Persona)',
			price: 200000,
			active: false
		}, {
			name: 'Avistamientos de ballenas (Junio a Octubre por 3 Horas a partir de 2 Personas)',
			price: 130000,
			active: false
		},{
			name: 'Paseo a las Aguas termales (Incluye almuerzo y entrada al spa traslado en bote Choibá-termales-Choibá con Duración de 4 Horas para 1 Persona)',
			price: 200000,
			active: false
		}, {
			name: 'Paseo a las Aguas termales (Incluye almuerzo y entrada al spa traslado en bote Choibá-termales-Choibá con Duración de 4 Horas a Partir de 2 Personas)',
			price: 130000,
			active: false
		}, {
			name: 'Caminata guiada hasta Termales y regreso en bote (Duración 6 Horas Por persona, Incluye almuerzo y entrada al Spa)',
			price: 170000,
			active: false
		}, {
			name: 'Curso de surf (Duración tres días)',
			price: 300000,
			active: false
		}, {
			name: 'Curso de surf (Duración 1 Hora)',
			price: 30000,
			active: false
		}, {
			name: 'Alquiler Tabla de Surf por 1 hora',
			price: 25000,
			active: false
		}, {
			name: 'Alquiler Tabla de Surf por 1 día',
			price: 80000,
			active: false
		}, {
			name: 'Equipo de Snorckeling por día',
			price: 30000,
			active: false
		}, {
			name: 'Curso de Buceo y/o Inmersiones (Consultar Precios)',
			price: 0,
			active: false
		}
	];

	$scope.toggleActive = function (s) {
		s.active = !s.active;	
	};

	// Método útil para calcular o preço total
	$scope.total = function () {

		var total = 0;

		// Uso o método auxiliar do Angular 'forEach'
		// para iterar o array services

		angular.forEach ($scope.services, function (s) {
			if (s.active) {
				total += s.price;
			}
		});

		return total;
	};

}