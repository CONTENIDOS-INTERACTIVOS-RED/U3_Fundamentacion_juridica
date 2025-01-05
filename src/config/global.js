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
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (1887). Ley 57 de 1887, por la cual se expide el Código Civil. Diario Oficial No. 733, de 26 de mayo de 1887.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1989). Decreto 624 de 1989, por el cual se expide el Estatuto Tributario de Colombia. Diario Oficial No. 38.756, de 30 de marzo de 1989.',
      link: '',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2011). Ley 1448 de 2011, Ley de Víctimas y Restitución de Tierras. Diario Oficial No. 48.096, de 10 de junio de 2011.',
      link: '',
    },
    {
      referencia:
        'Constitución Política de Colombia. (1991). Constitución Política de Colombia. Diario Oficial No. 114. Congreso de la República de Colombia.',
      link: 'https://www.constitucioncolombia.com/constitucion-de-1991',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2003). Sentencia C-551 de 2003.',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2003/C-551-03.htm',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2006). Sentencia C-355 de 2006.',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2006/C-355-06.htm',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2008). Sentencia T-760 de 2008.',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2008/T-760-08.htm',
    },
    {
      referencia:
        'Corte Constitucional de Colombia. (2016). Sentencia T-622 de 2016.',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2016/T-622-16.htm',
    },
    {
      referencia:
        'Kelsen, H. (1934). Teoría pura del derecho. (Traducción al español: Roberto J. Vernengo). México: Universidad Nacional Autónoma de México.',
      link: '',
    },
    {
      referencia:
        'Montesquieu, C. (1748). El espíritu de las leyes. (Edición consultada: Fondo de Cultura Económica, 2010).',
      link: '',
    },
    {
      referencia:
        'Savigny, F. C. von. (1840). Sistema del Derecho Romano Actual. (Edición en español: Reus, 2011).',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Abogado',
      significado:
        'Profesional del derecho que defiende y representa los intereses de sus clientes ante los tribunales o en otros contextos legales.',
    },
    {
      termino: 'Aplicación del derecho',
      significado:
        'Proceso mediante el cual se llevan las normas jurídicas a la práctica, resolviendo conflictos y garantizando la justicia en casos concretos.',
    },
    {
      termino: 'Derecho consuetudinario',
      significado:
        'Sistema de normas basadas en costumbres y tradiciones, transmitido oralmente y aplicado en comunidades o sociedades sin leyes escritas.',
    },
    {
      termino: 'Derecho romano',
      significado:
        'Sistema legal desarrollado en la antigua Roma, que sentó las bases para gran parte del derecho occidental moderno.',
    },
    {
      termino: 'Derecho canónico',
      significado:
        'Conjunto de normas que regulan la Iglesia Católica y que influyó en el desarrollo del derecho civil en la Edad Media.',
    },
    {
      termino: 'Equidad',
      significado:
        'Principio jurídico que busca la justicia en cada caso concreto, permitiendo una interpretación flexible de la ley para adaptarse a las circunstancias específicas.',
    },
    {
      termino: 'Interpretación jurídica',
      significado:
        'Proceso por el cual los jueces, abogados y otros operadores jurídicos buscan entender el verdadero significado de las normas legales.',
    },
    {
      termino: 'Jurisprudencia',
      significado:
        'Conjunto de decisiones judiciales que sirven de referencia para la interpretación de las leyes en casos futuros.',
    },
    {
      termino: 'Jurisconsulto',
      significado:
        'En el Derecho Romano, experto en derecho que brindaba asesoría legal y establecía precedentes interpretativos.',
    },
    {
      termino: 'Juez',
      significado:
        'Funcionario judicial encargado de interpretar y aplicar las leyes en la resolución de conflictos en casos específicos.',
    },
    {
      termino: 'Legislador',
      significado:
        'Miembro de una asamblea legislativa encargado de crear y modificar las leyes que constituyen el marco legal de una sociedad.',
    },
    {
      termino: 'Método histórico',
      significado:
        'Técnica de interpretación jurídica que analiza el contexto y las razones que motivaron la creación de una norma.',
    },
    {
      termino: 'Método literal o gramatical',
      significado:
        'Enfoque de interpretación que se basa en el sentido textual y literal de las palabras de la norma.',
    },
    {
      termino: 'Método sistemático',
      significado:
        'Método de interpretación que considera la norma dentro del sistema jurídico en su conjunto, buscando coherencia con otras leyes.',
    },
    {
      termino: 'Método teleológico',
      significado:
        'Enfoque interpretativo que busca entender el propósito o fin social de la norma para aplicarla de manera que cumpla su objetivo.',
    },
    {
      termino: 'Norma jurídica',
      significado:
        'Regla de carácter general que regula el comportamiento de las personas en una sociedad y cuya observancia es obligatoria.',
    },
    {
      termino: 'Operador jurídico',
      significado:
        'Persona o institución que participa en la creación, interpretación y aplicación del derecho, como jueces, abogados y legisladores.',
    },
    {
      termino: 'Precedente',
      significado:
        'Decisión judicial que sirve como modelo o referencia para resolver casos similares en el futuro.',
    },
    {
      termino: 'Principios generales del derecho',
      significado:
        'Fundamentos éticos y normativos que orientan la interpretación y aplicación del derecho, como la justicia y la equidad.',
    },
    {
      termino: 'Supremacía constitucional',
      significado:
        'Principio que establece que la Constitución es la norma más alta y todas las demás deben alinearse con sus disposiciones.',
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
