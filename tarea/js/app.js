// Script principal
import { estudiantes } from './datos.js';
import { evaluarEstado } from './calculos.js';

const ulReportes = document.getElementById("reportes");

estudiantes.forEach(estudiante => {
  const estado = evaluarEstado(estudiante.nota);
  const li = document.createElement("li");
  li.textContent = `${estudiante.nombre}: ${estudiante.nota.toFixed(1)} - ${estado}`;
  ulReportes.appendChild(li);
});