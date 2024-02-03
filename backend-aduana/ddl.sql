
CREATE TABLE paises(
	idPais INT PRIMARY KEY AUTO_INCREMENT,
	Pais VARCHAR(100) 
);

CREATE TABLE aduaneros(
	nitAgenteAduana CHAR(10)  PRIMARY KEY,
	nombres VARCHAR(50),
	apellidos VARCHAR(50),
	direccion VARCHAR(200),
	telefono CHAR(10),
	idPais INT,
	CONSTRAINT fk_aduaneros_idPais_paises
	FOREIGN KEY(idPais) REFERENCES paises
	(idPais)
);


CREATE TABLE productos(
	partidaId CHAR(10)  PRIMARY KEY,
	nombre VARCHAR(50),
	unidadFisica DOUBLE,
	tarifaAdvalorem DOUBLE
);


CREATE TABLE viajes(
	codigoRuta CHAR(10)  PRIMARY KEY,
	idPaisOrigen INT,
	idPaisDestino INT,
	puertoEntrada VARCHAR(200),
	fechaSalida DATE,
	fechaIngreso DATE,
	CONSTRAINT fk_viajes_idPaisOrigen_paises
	FOREIGN KEY(idPaisOrigen) REFERENCES paises
	(idPais),
	CONSTRAINT fk_viajes_idPaisDestino_paises
	FOREIGN KEY(idPaisDestino) REFERENCES paises
	(idPais)
	
);

CREATE TABLE traslados(
	codigoTraslado CHAR(10) PRIMARY KEY,
	tipoAlmacen VARCHAR(50),
	naviera VARCHAR(100),
	codigoRuta CHAR(10),
	CONSTRAINT fk_traslados_codigoRuta_viajes
	FOREIGN KEY(codigoRuta) REFERENCES viajes
	(codigoRuta)
);


CREATE TABLE operaciones(
	codigoOperacion CHAR(10) PRIMARY KEY,
	tipo VARCHAR(50),
	estado BOOLEAN, -- true or false
	nitAgenteAduana CHAR(10),
	codigoTraslado CHAR(10),
	partidaId CHAR(10),
	CONSTRAINT fk_operaciones_nitAgenteAduana_aduaneros
	FOREIGN KEY(nitAgenteAduana) REFERENCES aduaneros
	(nitAgenteAduana),
	CONSTRAINT fk_operaciones_codigoTraslado_traslados
	FOREIGN KEY(codigoTraslado) REFERENCES traslados
	(codigoTraslado),
	CONSTRAINT fk_operaciones_partidaId_productos
	FOREIGN KEY(partidaId) REFERENCES productos
	(partidaId)
	
	
);


CREATE TABLE empresas(
	rifEmpresa CHAR(10) PRIMARY KEY,
	nombreEmpresa VARCHAR(200),
	idPais INT,
	telefonoEmpresa CHAR(10),
	fechaEmision DATE,
	CONSTRAINT fk_empresas_idPais_paises
	FOREIGN KEY(idPais) REFERENCES paises
	(idPais)
	
);

CREATE TABLE reportes(
	nReportes CHAR(10) PRIMARY KEY,
	rifEmpresa CHAR(10),
	fechaEmision DATE,
	codigoOperacion CHAR(10),
	CONSTRAINT fk_reportes_rifEmpresa_empresas
	FOREIGN KEY(rifEmpresa) REFERENCES empresas
	(rifEmpresa),
	CONSTRAINT fk_reportes_codigoOperacion_operaciones
	FOREIGN KEY(codigoOperacion) REFERENCES operaciones
	(codigoOperacion)
	
);






