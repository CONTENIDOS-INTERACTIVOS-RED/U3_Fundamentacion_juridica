export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Métodos de interpretación del derecho ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Métodos clásicos de interpretación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Método histórico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Método teleológico o finalista',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Métodos complementarios y doctrinas modernas',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Casos prácticos de interpretación en Colombia',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Aplicación del derecho en casos concretos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Análisis de los hechos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Selección de la norma aplicable',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Interpretación de la norma en relación con los hechos',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Resolución del caso',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo:
              'Garantía de los derechos fundamentales en la aplicación del derecho',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Ejemplos prácticos de aplicación del derecho',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Función de los operadores jurídicos: jueces, abogados y legisladores',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/Fundamentacion_Juridica_U3.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Atienza, M. (2013). Curso de argumentación jurídica. Editorial Trotta, S.A.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61319',
    },
    {
      referencia:
        'Carrasco Perera, Á. & González Carrasco, M. D. C. (2018). Introducción al Derecho y fundamentos de Derecho privado (2 ed.). Difusora Larousse - Editorial Tecnos.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/123141',
    },
    {
      referencia:
        'Carretero Sanchez, S. (2015). Nueva introducción a la teoría del derecho. Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/60943',
    },
    {
      referencia:
        'González Jácome, J. (2009). El problema de las fuentes del derecho: una perspectiva desde la argumentación jurídica. Red Vniversitas.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/32739',
    },
    {
      referencia:
        'Hernandez Quintero, H. A., Gómez Peña, G. E. & María Cristina Solano de Ojeda. (2016). Lecciones de introducción al derecho. Universidad de Ibagué.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/70168',
    },
    {
      referencia:
        'Lorca Martín de Villodres, M. I. (2017). El concepto de derecho de un siglo: su perspectiva iusfilosófica. Dykinson.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/58832',
    },
  ],
  glosario: [
    {
      termino: 'Acción de tutela',
      significado:
        'Mecanismo judicial en Colombia que permite a los ciudadanos proteger de forma inmediata sus derechos fundamentales cuando estos son vulnerados',
    },
    {
      termino: 'Bloque de constitucionalidad',
      significado:
        'Conjunto de normas y tratados internacionales de derechos humanos que, al ser ratificados por Colombia, se integran en el sistema jurídico con el mismo valor que la Constitución',
    },
    {
      termino: 'Constitución',
      significado:
        'Norma suprema del Estado que establece los derechos fundamentales, la estructura del Estado y los principios rectores de la sociedad',
    },
    {
      termino: 'Control constitucional',
      significado:
        'Proceso mediante el cual la corte constitucional asegura que las leyes y actos administrativos estén en conformidad con la constitución',
    },
    {
      termino: 'Decreto',
      significado:
        'Norma expedida por el Presidente de la República que desarrolla o reglamenta aspectos específicos de la ley',
    },
    {
      termino: 'Derecho',
      significado:
        'Sistema de normas jurídicas que regula la conducta humana en sociedad y garantiza la convivencia pacífica y el respeto a los derechos',
    },
    {
      termino: 'Derechos fundamentales',
      significado:
        'Derechos inherentes a la dignidad humana, protegidos por la Constitución y necesarios para el desarrollo integral de las personas',
    },
    {
      termino: 'Doctrina',
      significado:
        'Conjunto de estudios y opiniones de juristas sobre la interpretación de las normas, que influye en la práctica judicial y legislativa aunque no sea vinculante',
    },
    {
      termino: 'Estado Social de Derecho',
      significado:
        'Modelo de Estado que busca garantizar justicia social, derechos humanos y equidad en la sociedad, cumpliendo con los principios de legalidad y derechos fundamentales',
    },
    {
      termino: 'Interpretación jurídica',
      significado:
        'Proceso mediante el cual se determina el sentido y alcance de las normas jurídicas para su correcta aplicación',
    },
    {
      termino: 'Jerarquía normativa',
      significado:
        'Orden de prevalencia entre normas jurídicas que establece qué normas tienen mayor autoridad en el sistema legal',
    },
    {
      termino: 'Jurisprudencia',
      significado:
        'Conjunto de decisiones y criterios establecidos por los tribunales, especialmente las altas cortes, que orientan la interpretación y aplicación de las leyes',
    },
    {
      termino: 'Ley estatutaria',
      significado:
        'Ley especial que regula materias relacionadas con derechos fundamentales y participación ciudadana, sometida a un proceso de aprobación y control constitucional más riguroso',
    },
    {
      termino: 'Precedente judicial',
      significado:
        'Decisiones previas de los tribunales que sirven como referencia para resolver casos futuros de manera consistente',
    },
    {
      termino: 'Soberanía popular',
      significado:
        'Principio constitucional que establece que el poder del Estado emana del pueblo, quien lo ejerce mediante mecanismos de participación democrática',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
