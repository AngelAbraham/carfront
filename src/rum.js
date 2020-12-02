export default apm;

import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({
 // Establece el nombre de servicio requerido (caracteres permitidos: a-z, A-Z, 0-9, -, _ y espacio)
 serviceName: 'carfront',
 // Configura la versión de tu aplicación
 // Se usa en el servidor de APM para encontrar el mapa fuente correcto
 serviceVersion: '0.90',
 // Configura la URL del servidor de APM (predeterminado: http://localhost:8200)
 serverUrl: 'https://aba7c3d90b0b4820b05b0a9df44c096d.apm.us-central1.gcp.cloud.es.io:443',
 // distributedTracingOrigins: ['http://localhost:8080'],
})
export default apm;