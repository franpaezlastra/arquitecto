import principal from '../assets/img/principal.png';
import torreUrbana from '../assets/img/Torre Urbana MX/torreUrbanaMExico.png';
import torreUrbanaPortada from '../assets/img/Torre Urbana MX/torreUrbanaMexicoPortada.png';
import torreUrbanaGaleria1 from '../assets/img/Torre Urbana MX/torreUrbanaMXGaleria1.png';
import torreUrbanaGaleria2 from '../assets/img/Torre Urbana MX/torreUrbanaMXGaleria2.png';
import casaHorizonte from '../assets/img/Casa Horizonte/casaHorizonte.png';
import casaHorizontePortada from '../assets/img/Casa Horizonte/casaHorizontePortada.jpg';
import casaHorizonteGaleria1 from '../assets/img/Casa Horizonte/casaHorizonteGaleria1.jpg';
import casaHorizonteGaleria2 from '../assets/img/Casa Horizonte/casaHorizonteGaleria2.jpg';
import galeriaContemporanea from '../assets/img/Galeria Contemporanea/galeriaContemporanea.png';
import galeriaContemporaneaPortada from '../assets/img/Galeria Contemporanea/galeriaContemporaneaPortada.jpg';
import galeriaContemporaneaGaleria1 from '../assets/img/Galeria Contemporanea/galeriaContemporaneaGaleria1.jpg';
import galeriaContemporaneaGaleria2 from '../assets/img/Galeria Contemporanea/galeriaContemporaneaGaleria2.jpg';

export const projects = [
  {
    id: 1,
    titulo: 'Casa Horizonte',
    categoria: 'Residencial',
    imagenPrincipal: casaHorizonte,
    imagenPortada: casaHorizontePortada, descripcion:
      'Vivienda unifamiliar que combina líneas puras, iluminación natural y una integración fluida entre interior y exterior. El proyecto prioriza materiales nobles, recorridos flexibles y una conexión directa con el paisaje circundante.',
    ano: '2022',
    ubicacion: 'Buenos Aires, Argentina',
    superficie: '340 m²',
    galeria: [
      casaHorizonteGaleria1,
      casaHorizonteGaleria2,
    ],
  },
  {
    id: 2,
    titulo: 'Torre Urbana',
    categoria: 'Edificio Comercial',
    imagenPrincipal: torreUrbana,
    imagenPortada: torreUrbanaPortada,
    descripcion:
      'Edificio de oficinas de alto estándar, con fachada vidriada y un enfoque en eficiencia energética. Cada planta ofrece espacios flexibles, confort térmico y tecnología integrada para optimizar la operatividad.',
    ano: '2021',
    ubicacion: 'Ciudad de México, México',
    superficie: '12.500 m²',
    galeria: [
      torreUrbanaGaleria1,
      torreUrbanaGaleria2,
    ],
  },
  {
    id: 3,
    titulo: 'Galería Contemporánea',
    categoria: 'Espacio Cultural',
    imagenPrincipal: galeriaContemporanea,
    imagenPortada: galeriaContemporaneaPortada,
    descripcion:
      'Espacio expositivo pensado para resaltar obras de arte mediante una arquitectura neutra y luz cuidadosamente controlada. El recorrido se concibe como una secuencia de atmósferas silenciosas y contemplativas.',
    ano: '2023',
    ubicacion: 'Barcelona, España',
    superficie: '980 m²',
    galeria: [
      galeriaContemporaneaGaleria1,
      galeriaContemporaneaGaleria2,
    ],
  },
];

