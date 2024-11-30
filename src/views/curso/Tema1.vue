<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 2: El Ordenamiento Jurídico Colombiano'" :subTitulo="'1. Constitución'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-12.col-xl-8(data-aos="fade-right")
        p.mb-0 La Constitución es mucho más que un conjunto de leyes; es la base sobre la que se organiza un Estado, regula el poder y garantiza los derechos fundamentales de los ciudadanos. Este concepto ha ido evolucionando a lo largo de la historia, adaptándose a las necesidades de cada época y de cada sociedad. Desde las antiguas ciudades-estado hasta las democracias modernas, la Constitución ha transitado un largo camino para consolidarse como la norma suprema y un marco de derechos y límites al poder político. Los invitamos a revisar este video, donde se explora la evolución de la Constitución y cómo ha llegado a ser el eje central del orden jurídico y de la protección de los derechos.
      .col-12.col-xl-4.d-none.d-xl-block(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')

    .row.position-relative.mb-4.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4 Riccardo Guastini (1999), en su obra Sobre el concepto de Constitución, clasifica de manera precisa las distintas acepciones del término "constitución". Esta clasificación permite entender los múltiples enfoques que puede adoptar la idea de constitución, desde su función política hasta su rol como fuente del derecho. A continuación, se presenta una síntesis de estas acepciones:
    
    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')    
      .col-12.col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b")
          .div(titulo="Constitución como ordenamiento político de tipo liberal")
            p Representa una constitución que garantiza la libertad ciudadana a través de la división del poder político, estableciendo límites al poder estatal. Se inspira en el concepto liberal de constitución surgido con la Declaración de los Derechos del Hombre y del Ciudadano de 1789.
          .div(titulo="Constitución como conjunto de normas fundamentales")
            p Considera la constitución como un conjunto de normas esenciales para la organización del Estado y la protección de los derechos de los ciudadanos, regulando las relaciones entre el Estado, los ciudadanos y los diferentes poderes del Estado
          .div(titulo="Constitución como documento normativo")
            p Define la constitución como un texto jurídico que expresa las normas fundamentales de un sistema jurídico, caracterizándose por un régimen jurídico especial y distinciones claras respecto de otras leyes.
          .div(titulo="Constitución como fuente del derecho")
            p Entiende la constitución como una fuente superior del derecho, que no puede ser modificada o derogada por normas de menor rango y establece las bases jurídicas para la creación de otras normas dentro del sistema legal.
    
    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Historia de la Constitución de 1991

    .row.mb-4
      .col-12.col-xl-7.d-flex.flex-column
        p En Colombia la constitución se modificó drásticamente por última vez en 1991, luego de durar más de 100 años con la constitución de 1886. La Carta Magna de 1991 surgió en un contexto de crisis social y política. El país enfrentaba serios problemas de violencia, corrupción y desigualdad, así como una creciente demanda de democratización y modernización del Estado. La anterior Constitución de 1886, a pesar de haber sido modificada en múltiples ocasiones, ya no respondía a las necesidades de la sociedad colombiana.
        .d-flex.align-items-start.bg-amarillo.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-5.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La convocatoria de una Asamblea Constituyente en 1991, impulsada por la movilización ciudadana y el apoyo de diversos sectores políticos, permitió la creación de una nueva carta magna. El 4 de julio de ese año se promulgó la Constitución actual, la cual introdujo reformas significativas en áreas como la descentralización del poder, los mecanismos de participación ciudadana y la protección de los derechos fundamentales. 
      .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')  

    .row.bg-amarillo-1.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto ¿Sabías que la Constitución de Colombia sostiene los derechos de los ciudadanos y la estructura del Estado?
          p.mb-5 Lo invitamos a revisar el documento Estructura de la Constitución , para explorar en profundidad cómo esta carta magna, con sus principios fundamentales y su división de poderes, garantiza un sistema democrático, pluralista y justo. Al conocer su organización y sus disposiciones sobre derechos y deberes, podrá entender cómo la Constitución de 1991 busca equilibrar la centralización con la autonomía territorial, asegurando la participación activa de todos los colombianos en la construcción de una sociedad equitativa y solidaria.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexo_Estructura de la Constitución.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Estructura de la constitución
             
    p.mb-4 A su turno, la parte orgánica de la Constitución establece la organización del Estado y las funciones de sus instituciones. El Estado colombiano está compuesto por tres ramas del poder público: 

    .bg-fondo-2.bg-full-width
      div.px-5.pb-md-3.py-4
        .row.mb-4
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded
              img.mb-4(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Poder legistlativo
                p.text-small.px-4.text-center.pb-2 Representado por el Congreso de la República, encargado de crear y reformar las leyes.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
            div.custom-image-card.rounded
              img.mb-4(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Poder ejecutivo
                p.text-small.px-4.text-center.pb-2 Encabezado por el Presidente de la República, quien dirige la administración del Estado y ejecuta las leyes.
          .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded
              img.mb-4(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Poder judicial
                p.text-small.px-4.text-center.pb-2 Su función principal es garantizar la justicia mediante la resolución de conflictos y la protección de los derechos.

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Principios Fundamentales de la Constitución

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 La Constitución Política de Colombia se fundamenta en varios principios esenciales que orientan su interpretación y aplicación. Estos principios son el corazón del sistema jurídico colombiano y reflejan los valores fundamentales de la sociedad, establecen un marco robusto para la organización del Estado, garantizando la protección de los derechos fundamentales, promoviendo la participación democrática y asegurando un equilibrio entre los poderes públicos. 
        p.mb-0 Estos principios no solo buscan limitar el poder estatal, sino también fomentar una sociedad justa, equitativa y solidaria, donde el bienestar de todos los ciudadanos sea una prioridad. La implementación de estos principios es crucial para el desarrollo continuo y la consolidación de la democracia en Colombia. A continuación, se exploran estos principios en profundidad: 
      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Estado social de derecho
              p Este modelo integra la justicia social con el respeto a las leyes, promoviendo la igualdad, el bienestar y los derechos fundamentales. La Constitución de 1991 en Colombia establece que el Estado debe garantizar una vida digna, proporcionando acceso a servicios esenciales como salud, educación y vivienda, y promoviendo la reducción de desigualdades.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Separación de poderes
              p La función del Estado se divide en tres ramas: <strong>Legislativa, Ejecutiva y Judicial</strong>, con el objetivo de evitar la concentración de poder en una sola entidad. Este sistema de pesos y contrapesos busca mantener el equilibrio y proteger los derechos individuales.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Soberanía popular
              p Este principio indica que el poder del Estado emana del pueblo y se ejerce a través del voto y otros mecanismos de participación directa, como elecciones y consultas. Así, se refuerza la legitimidad del gobierno y se asegura que refleje la voluntad ciudadana.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4
              figure
                img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0
              p.text-bold Participación democrática
              p La Constitución de 1991 impulsa la democracia participativa, permitiendo a los ciudadanos involucrarse en las decisiones del Estado mediante referendos, plebiscitos y consultas. Además, fomenta el pluralismo, reconociendo y valorando la diversidad cultural y social de Colombia.

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 La Constitución de 1991 estableció diversos mecanismos para impulsar la participación activa de la ciudadanía en la gestión pública y en la toma de decisiones que afectan a la sociedad. Estos instrumentos no solo fortalecen la democracia, sino que también otorgan a los ciudadanos la posibilidad de influir de manera directa en asuntos legislativos y comunitarios. Entre estos mecanismos destacan:
        .row
          .col-12
            ol.lista-ol--cuadro
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 <strong>La iniciativa legislativa popular</strong> que permite a los ciudadanos proponer leyes directamente al congreso mediante la recolección de firmas.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 <strong>Los cabildos abiertos</strong> entendidos como espacios de reunión pública donde se discuten y deciden asuntos comunitarios.
              li.d-flex
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 <strong>Las veedurías ciudadanas</strong>, que son herramientas para que la sociedad civil supervise y controle la gestión pública.
      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')

    .row.mb-4.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") La Constitución de 1991 en Colombia establece principios clave como la primacía de los derechos inalienables de la persona, garantizando que <strong>derechos fundamentales como la vida y la dignidad prevalezcan sobre otros intereses. También prioriza el interés general sobre el individual</strong> en decisiones que afectan el bienestar colectivo y promueve la descentralización, otorgando autonomía a departamentos y municipios para gestionar asuntos locales. A continuación, se profundiza en cada uno de estos principios.

    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Primacía de los derechos inalienables de la persona", :iconUrl="require('@/assets/curso/unidad/img-18.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Primacía de los derechos inalienables de la persona
            p(data-aos="fade-up") Los derechos fundamentales, inherentes a toda persona, son reconocidos y protegidos por la Constitución de 1991. Este principio asegura que derechos como la vida y la dignidad prevalecen sobre otros intereses, y la Corte Constitucional ha respaldado esta prioridad en múltiples decisiones (Sentencia T-025/04). Los derechos se clasifican en: Individuales (vida, libertad, igualdad), Sociales, Económicos y Culturales (trabajo, educación, salud) y Colectivos (protección de comunidades y ambiente). La dignidad humana se establece como valor supremo, orientando las acciones del Estado.
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Primacía del interés general", :iconUrl="require('@/assets/curso/unidad/img-18.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Primacía del interés general
            p(data-aos="fade-up") Este principio prioriza el bienestar colectivo sobre intereses individuales en conflictos, asegurando que decisiones y políticas públicas se dirijan hacia el bien común. En propiedad, por ejemplo, permite la expropiación por utilidad pública con compensación justa.
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Descentralización y autonomía territorial", :iconUrl="require('@/assets/curso/unidad/img-18.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Descentralización y autonomía territorial
            p(data-aos="fade-up") La Constitución de 1991 promueve un Estado unitario descentralizado, delegando la  gestión local en departamentos y municipios para acercar la administración pública a los ciudadanos y responder a necesidades regionales. Además, reconoce la autonomía de entidades especiales como regiones indígenas y afrocolombianas.
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')

    #t_1_3.titulo-segundo
      div.d-flex
        span.me-3 1.3  
        h2 Derechos y deberes constitucionales

    .row.mb-5
      .col-12.col-lg-10
        p.mb-0 La Constitución de 1991 fue un cambio trascendental en Colombia, al establecer un marco normativo centrado en los derechos y deberes ciudadanos como base del Estado. En el artículo 1, se define a Colombia como un Estado social de derecho, lo que implica la responsabilidad del Estado en la protección de derechos fundamentales, la promoción de la justicia social y la garantía de la participación ciudadana en la vida pública. 

    h2 Derechos Constitucionales en Colombia
    p.mb-4 La Constitución de 1991 reconoce y protege derechos esenciales para la dignidad y el bienestar de los ciudadanos. Estos derechos, que abarcan desde libertades individuales hasta garantías sociales y ambientales, buscan promover una sociedad justa y equitativa. A continuación, se presentan las principales categorías de derechos constitucionales.

    .row.position-relative.mb-5.py-4.bg-fondo-1.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Derechos Fundamentales
              p Incluyen el derecho a la vida, la libertad, la igualdad ante la ley, la dignidad humana y la libertad de expresión y religión. Estos derechos son inherentes e inalienables, y su protección es prioritaria. En caso de vulneración, pueden ser reclamados mediante la acción de tutela, un recurso judicial ágil (art. 86).
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Derechos Sociales, Económicos y Culturales
              p Garantizan el bienestar material y condiciones de vida digna, como el derecho a la salud, educación, trabajo, vivienda y seguridad social. Algunos derechos sociales pueden ser fundamentales si su vulneración compromete derechos esenciales como el derecho a la vida.
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Derechos Colectivos y del Ambiente
              p Protegen intereses comunes, como un ambiente sano, acceso a recursos naturales y espacios públicos. La acción popular y la acción de grupo son mecanismos judiciales que permiten a los ciudadanos defender estos derechos (art. 88).
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .d-none.d-lg-block.col-md-6.col-lg-4(data-aos="zoom-in-right")
              figure
                img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')
            .col-md-12.col-lg-7.mb-4.mb-md-0(data-aos="zoom-in-left")
              p.text-bold Derechos Internacionales en el Bloque de Constitucionalidad
              p La Constitución incluye los tratados internacionales de derechos humanos ratificados por Colombia, que prevalecen sobre el derecho interno, fortaleciendo el marco de protección de los derechos constitucionales (art. 93).

    h2 Derechos Constitucionales en Colombia
    p.mb-4 En Colombia, la Constitución de 1991 establece deberes ciudadanos que son esenciales para la armonía social y la garantía de derechos colectivos. Aunque se tiende a enfatizar los derechos, los deberes constitucionales, recogidos en el artículo 95, son igualmente fundamentales para construir un Estado que fomente la convivencia, la paz y el bienestar común. Estos deberes reflejan la responsabilidad de cada ciudadano en contribuir al desarrollo de una sociedad equitativa y sostenible:

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Respeto a los derechos ajenos y no abuso de los propios")
            p Los derechos individuales deben ejercerse sin afectar los derechos de los demás, en armonía con los intereses colectivos, reconociendo que los derechos no son absolutos.
          .div(titulo="Participación en la vida pública")
            p Los ciudadanos deben participar en decisiones políticas que los afectan, a través del voto, veedurías ciudadanas y otros mecanismos de control ciudadano, consolidando el sistema democrático.
          .div(titulo="Defensa de la paz y convivencia pacífica")
            p La paz es un derecho y deber obligatorio en Colombia; su defensa implica rechazar el conflicto armado y promover una cultura de respeto y diálogo.
          .div(titulo="Contribuir al financiamiento del Estado")
            p Los ciudadanos tienen el deber de pagar impuestos de forma justa, asegurando que el Estado cuente con recursos para proteger y garantizar derechos fundamentales.
          .div(titulo="Protección del medio ambiente")
            p Cada ciudadano debe contribuir a la conservación del ambiente y al uso racional de los recursos naturales, protegiendo el derecho a un ambiente sano para las generaciones presentes y futuras.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

    .row.mb-5
      .col-12.col-lg-10.mx-auto(data-aos="fade-right")
        .d-flex.align-items-center
          div.d-flex.align-items-center.bg-azul.px-3.py-4
            img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-27.svg', alt='Texto que describa la imagen')
            p.pe-xl-5.mb-0 La Constitución de 1991 de Colombia establece una relación de reciprocidad e interdependencia entre derechos y deberes, en la cual el goce de los derechos depende del cumplimiento de los deberes. Esta interconexión fomenta el bienestar colectivo y fortalece el Estado, permitiendo que la sociedad avance hacia una convivencia pacífica y equitativa. Los ciudadanos, al cumplir sus deberes, como contribuir a través de impuestos y participar en la vida política, fortalecen la democracia y aseguran la protección de derechos fundamentales como la salud, la educación y la vivienda.

    #t_1_4.titulo-segundo
      div.d-flex
        span.me-3 1.4  
        h2 Mecanismos de protección de la Constitución

    .row.mb-4.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-right")
        p.mb-0(data-aos="fade-up") En Colombia, los mecanismos de protección constitucional son fundamentales para mantener un Estado social de derecho y asegurar la supremacía de la Constitución. Instrumentos como la acción de tutela, la acción de inconstitucionalidad, la acción popular, la acción de cumplimiento y el control constitucional permiten la defensa de los derechos fundamentales y colectivos, así como la adecuación de leyes y actos del Estado a los principios constitucionales. Estos mecanismos refuerzan la legitimidad democrática y protegen los derechos ciudadanos, permitiendo corregir violaciones y asegurar la conformidad de las políticas públicas con el marco constitucional:
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')

    ImagenInfografica.color-secundario.mb-4(data-aos="fade-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')

      .tarjeta.bg-amarillo.p-4(x="12.2%" y="85.3%" numero="+")
        .h5.mb-2 Acción de tutela
        p Permite solicitar protección inmediata de derechos fundamentales cuando son vulnerados y no existen otros medios judiciales efectivos. Es clave para proteger derechos como la salud y la educación.
      .tarjeta.bg-amarillo.p-4(x="41.2%" y="35.4%" numero="+")
        .h5.mb-2 Acción de inconstitucionalidad
        p Permite demandar leyes o decretos contrarios a la Constitución, garantizando su supremacía y asegurando que normas emitidas por el Congreso o el Ejecutivo no vulneren derechos fundamentales.
      .tarjeta.bg-amarillo.p-4(x="13.8%" y="52.3%" numero="+")
        .h5.mb-2 Acción popular
        p Protege derechos colectivos, como el derecho a un ambiente sano y la seguridad pública, frente a amenazas que afectan a la comunidad en general, siendo clave en la protección de derechos ambientales.
      .tarjeta.bg-amarillo.p-4(x="67.3%" y="53.3%" numero="+")
        .h5.mb-2 Acción de cumplimiento
        p Permite exigir a las autoridades públicas que cumplan leyes o actos administrativos claros y exigibles. Es utilizada para garantizar que políticas y sentencias sean implementadas conforme a lo dispuesto.
      .tarjeta.bg-amarillo.p-4(x="70.6%" y="85.3%" numero="+")
        .h5.mb-2 Control constitucional
        p Función de la Corte Constitucional para revisar que leyes, decretos y actos estatales se ajusten a la Constitución, evitando acciones arbitrarias y preservando los derechos fundamentales. Un ejemplo es la despenalización del aborto en ciertos casos.



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-img-1
  position: absolute
  max-width: none
  width: calc( 100% + 96px  )
  height: calc( 100% + 96px )
  left: -48px
  top: -48px
  inline-size: auto
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
