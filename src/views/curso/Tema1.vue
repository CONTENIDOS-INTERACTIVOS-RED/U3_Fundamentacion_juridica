<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 2: El Ordenamiento Jurídico Colombiano'" :subTitulo="'1. Constitución'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column(data-aos="fade-right")
        p.mb-4 La interpretación jurídica es el proceso mediante el cual <strong>jueces, abogados y estudiosos</strong> del derecho buscan entender el verdadero significado y alcance de las normas legales. Las leyes, a menudo, presentan ambigüedades debido a su redacción en términos generales, el lenguaje o la diversidad de situaciones a las que se pueden aplicar. Interpretar correctamente las normas es fundamental para que el derecho cumpla su propósito de aplicar justicia y proteger los derechos de los ciudadanos.
        .d-flex.align-items-start.bg-azul.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") Hans Kelsen, uno de los grandes teóricos del derecho, sostenía que "una norma jurídica no tiene siempre un significado claro y preciso, sino que es susceptible de varias interpretaciones." Esto implica que las normas deben analizarse desde distintos enfoques. Estos métodos se dividen en clásicos y modernos, todos con el objetivo de resguardar el espíritu de la ley y el bien común.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto que describa la imagen')  

    #t_1_1.titulo-segundo
      div.d-flex
        span.me-3 1.1  
        h2 Métodos clásicos de interpretación

    p.mb-4 Los métodos clásicos representan enfoques tradicionales que se centran en el texto de la norma, su contexto jurídico, histórico y los fines de la ley. A continuación, se presentan los principales métodos clásicos:
    h2 Método literal o gramatical
    p.mb-4 Este método se enfoca en el análisis literal del texto de la norma, considerando el significado de las palabras y su estructura gramatical. El Código Civil Colombiano (art. 27) establece que, si la redacción de la norma es clara, debe seguir el sen tido literal sin recurrir a interpretaciones adicionales. 

    .bg-fondo-2.bg-full-width
      div.px-5.pb-md-3.py-4
        .row.mb-4
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Ejemplo
                p.text-small.px-4.pb-2 La Constitución de Colombia, en su artículo 4, establece que es la “norma de normas,” lo que implica, desde una lectura literal, que ninguna otra norma puede contradecir la Constitución. Esto asegura su supremacía y su primacía en el sistema jurídico colombiano.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Importancia
                p.text-small.px-4.pb-2 Promueve la seguridad jurídica y limita la discrecionalidad en la interpretación, evitando que se altere el significado original de la norma mediante interpretaciones personales.

    h2 Método sistemático	

    p.mb-4 Considera la norma como parte de un sistema jurídico más amplio. Según esta perspectiva, una norma debe interpretarse en conjunto con otras para evitar contradicciones y asegurar coherencia. 

    .bg-fondo-2.bg-full-width
      div.px-5.pb-md-3.py-4
        .row.mb-4
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Ejemplo
                p.text-small.px-4.pb-2 Al interpretar una norma tributaria, no solo debe considerarse la norma en cuestión, sino también el Estatuto Tributario (Decreto 624 de 1989) y demás leyes fiscales, para garantizar una interpretación coherente en todo el sistema fiscal.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Importancia 
                p.text-small.px-4.pb-2 Asegura que todas las normas del sistema se complementan  entre sí, manteniendo su interacción y coherencia con otras normas vigentes.

    #t_1_2.titulo-segundo
      div.d-flex
        span.me-3 1.2  
        h2 Método histórico

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 El método histórico se enfoca en el contexto y en los motivos detrás de la creación de una norma, buscando interpretar el “espíritu” de la ley. Este método es esencial en casos donde las leyes responden a circunstancias sociales, políticas o culturales específicas. La Ley 57 de 1887 (Código Civil) en su artículo 8 sugiere que, cuando el sentido de la norma no sea claro, deben consultarse los antecedentes históricos para entender mejor su objetivo.
        .bg-azul.p-4
          p.text-bold Ejemplo
          span En la Ley 1448 de 2011, conocida como <strong>Ley de Víctimas y Restitución de Tierras</strong>, se debe considerar el contexto histórico del conflicto armado en Colombia. Entender las razones de su creación permite interpretarla en función de su propósito de compensar a las víctimas de desplazamiento forzado y otras violaciones de derechos humanos.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-9.png', alt='Texto que describa la imagen')


    #t_1_3.titulo-segundo
      div.d-flex
        span.me-3 1.3  
        h2 Método teleológico o finalista

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 Este método interpreta la norma en función de su finalidad o propósito. Se analizan los objetivos de la norma, enfocados en los beneficios o fines sociales esperados. El artículo 230 de la Constitución Política de Colombia permite al juez basarse en los principios generales del derecho y en la equidad, promoviendo interpretaciones orientadas al bien común y la dignidad humana.
        .bg-amarillo.p-4
          p.text-bold Ejemplo
          span En la Sentencia T-760 de 2008, la Corte Constitucional colombiana interpretó el derecho a la salud desde un enfoque teleológico, asegurando el acceso equitativo y digno a todos los ciudadanos. Este enfoque promueve el bienestar social y la dignidad humana.

    #t_1_4.titulo-segundo
      div.d-flex
        span.me-3 1.4  
    
    h2 Métodos complementarios y doctrinas modernas
    p.mb-4 Además de los métodos clásicos, los enfoques modernos de interpretación buscan adaptar el derecho a las realidades sociales contemporáneas, proteger los derechos fundamentales y alinearse con las obligaciones internacionales de derechos humanos.


    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Interpretación conforme a la Constitución", :iconUrl="require('@/assets/curso/unidad/img-13.svg')")
        .row
          .col-md-12.col-xl-7.mb-4.mb-md-0(data-aos="fade-right")
            h4 Interpretación conforme a la Constitución
            p(data-aos="fade-up") Asegura que cualquier norma o interpretación se alinee con los principios y derechos fundamentales de la Constitución. Los artículos 4 y 13 de la Constitución de Colombia establecen la supremacía constitucional y la igualdad ante la ley, promoviendo una interpretación que respete los principios de igualdad y protección de derechos fundamentales.
            .bg-azul.p-4.mb-4
              p.text-bold Ejemplo
              span En la Sentencia C-551 de 2003, la Corte Constitucional reiteró que todas las normas deben interpretarse conforme a la Constitución, protegiendo los derechos fundamentales y manteniendo la coherencia con el sistema de valores constitucionales.
          .d-none.d-lg-block.col-md-12.col-xl-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Interpretación con perspectiva de derechos humanos", :iconUrl="require('@/assets/curso/unidad/img-13.svg')")
        .row
          .col-md-12.col-xl-7.mb-4.mb-md-0(data-aos="fade-right")
            h4 Interpretación con perspectiva de derechos humanos
            p(data-aos="fade-up") Asegura que todas las normas y su interpretación respeten los compromisos internacionales de derechos humanos. El artículo 93 de la Constitución Política de Colombia establece que los tratados internacionales de derechos humanos ratificados prevalecen en el orden interno.
            .bg-amarillo.p-4.mb-4
              p.text-bold Ejemplo
              span En la Sentencia T-622 de 2016, la Corte Constitucional declaró al río Atrato como sujeto de derechos, aplicando un enfoque de derechos humanos y justicia ambiental, protegiendo su conservación y principios de sostenibilidad.
          .d-none.d-lg-block.col-md-12.col-xl-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')

    #t_1_5.titulo-segundo
      div.d-flex
        span.me-3 1.5  
        h2 Casos prácticos de interpretación en Colombia

    .row.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        p.mb-4 Para ilustrar la aplicación de estos métodos, se presentan algunos casos judiciales clave en Colombia:
        AcordionA(tipo="b")
          .div(titulo="Interpretación teleológica en el derecho a la salud <br>(Sentencia T-760 de 2008)")
            p La Corte Constitucional garantizó el acceso a la salud para todos los colombianos, aplicando un enfoque teleológico para interpretar el derecho a la salud como una garantía de dignidad humana y equidad.
          .div(titulo="Interpretación con perspectiva de derechos humanos <br> (Sentencia T-622 de 2016)")
            p La Corte declaró al río Atrato como sujeto de derechos, aplicando una interpretación que protege los derechos de los ecosistemas y promueve la justicia ambiental, en sintonía con los tratados internacionales.
          .div(titulo="Interpretación conforme a la Constitución (Sentencia C-551 de 2003)")
            p En esta sentencia, la Corte reiteró que todas las normas deben interpretarse bajo el marco constitucional, protegiendo los derechos fundamentales de los ciudadanos.
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-10.mx-auto(data-aos="fade-up")
        div.d-flex.align-items-center.bg-azul.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-15.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 La interpretación del derecho no se limita a una lectura literal, sino que implica un análisis profundo de su contexto, valores y objetivos. Los métodos de interpretación, tanto clásicos como modernos, permiten aplicar las leyes de forma justa y coherente, protegiendo los derechos de todos y adaptando el sistema jurídico a las necesidades sociales.

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
