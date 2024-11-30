<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'Unidad 2: El Ordenamiento Jurídico Colombiano'" :subTitulo="'2. Sistema jurídico colombiano'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 El sistema jurídico colombiano, como en la mayoría de los Estados modernos, se organiza bajo un principio jerárquico, en el cual las distintas normas se ordenan conforme a su relevancia y obligatoriedad. 
        .bg-amarillo.p-4.mb-4
          p.mb-0 Este principio asegura que las normas de menor rango respeten y se adapten a las de mayor jerarquía, promoviendo la coherencia y el orden en el sistema legal. La Constitución de 1991 ocupa el lugar supremo en Colombia y establece el marco que organiza el ordenamiento jurídico.
        p.mb-0 Este ensayo examinará la jerarquía normativa en Colombia, desde la Constitución hasta los decretos y reglamentos, incluyendo tratados internacionales y leyes ordinarias.
      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p La Constitución Política de Colombia de 1991 ocupa la cúspide de la jerarquía normativa en el país. Esto implica que ninguna norma o disposición legal puede contradecir sus preceptos, y todas las leyes, actos administrativos, decretos y regulaciones deben alinearse con sus disposiciones.  La supremacía de la Constitución está consagrada en el artículo 4, que establece: "La Constitución es norma de normas. En caso de incompatibilidad entre la Constitución y la ley u otra norma jurídica, se aplicarán las disposiciones constitucionales".
        .d-flex.align-items-start.bg-azul.p-4.mb-4(data-aos="fade-left")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-32.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") La <strong>Corte Constitucional</strong> es la entidad encargada de garantizar que las leyes y demás actos normativos respeten la Constitución mediante el control de constitucionalidad. Si una ley o acto administrativo vulnera la Constitución, la Corte puede declararlo inexequible, es decir, sin efectos jurídicos.

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 La Constitución establece que cualquier norma contraria a sus disposiciones puede ser declarada inconstitucional por la Corte Constitucional. Este principio de prevalencia se refleja en el artículo 4, que reafirma la preeminencia de la Constitución sobre cualquier otra norma y refuerza el deber de ciudadanos y autoridades de respetar sus mandatos.
        .bg-amarillo.p-4.mb-4
          p.mb-0 <strong>Un ejemplo</strong> de este control se observa en la <strong>Sentencia C-221 de 1994</strong>, en la cual la Corte Constitucional declaró inconstitucional una norma penal que prohibía el porte de drogas en cantidades mínimas, argumentando que dicha disposición vulneraba el derecho al libre desarrollo de la personalidad, protegido constitucionalmente.
      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

    #t_2_1.titulo-segundo
      div.d-flex
        span.me-3 2.1  
        h2 Leyes estatutarias, leyes orgánicas y leyes ordinarias
    
    p.mb-4 En el sistema jurídico colombiano, las leyes se clasifican en tres tipos principales: <strong>leyes estatutarias, leyes orgánicas y leyes ordinarias</strong>, cada una con un rol y procedimiento específico que define su jerarquía y alcance.

    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Leyes Estatutarias", :iconUrl="require('@/assets/curso/unidad/img-18.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-right")
            h4 Leyes Estatutarias
            p(data-aos="fade-up") Regulan materias de especial relevancia constitucional, como los derechos fundamentales, mecanismos de participación ciudadana, y la administración de justicia. Su aprobación requiere un proceso especial, con mayorías calificadas en el Congreso y una revisión previa de constitucionalidad por parte de la Corte Constitucional (art. 153). Estas leyes se aprueban en una sola legislatura y deben recibir mayoría absoluta. Ejemplo: Ley 1751 de 2015, que establece el derecho fundamental a la salud. 
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Leyes Orgánicas", :iconUrl="require('@/assets/curso/unidad/img-18.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Leyes Orgánicas
            p(data-aos="fade-up") Regulan la organización y funcionamiento de las ramas del poder público y la estructura administrativa del Estado, como la organización del Congreso, el régimen departamental y la planeación nacional. Deben ser aprobadas por una mayoría calificada en el Congreso, lo que les otorga un rango superior a las leyes ordinarias. Ejemplo: Ley Orgánica del Presupuesto. 
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Leyes Ordinarias", :iconUrl="require('@/assets/curso/unidad/img-18.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-left")
            h4 Leyes Ordinarias
            p(data-aos="fade-up") Regulan la mayoría de los aspectos de la vida social, económica y política, sin requerir los procesos especiales de las leyes estatutarias u orgánicas. Estas leyes se aprueban por mayoría simple en el Congreso y no necesitan control previo de constitucionalidad. Ejemplo: Código Civil Colombiano.
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-right")
            figure
              img(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')

    #t_2_2.titulo-segundo
      div.d-flex
        span.me-3 2.2  
        h2 Decretos

    p.mb-4 Los decretos con fuerza de ley en Colombia son normas emitidas por el Presidente en circunstancias especiales, y tienen el mismo rango que las leyes ordinarias. Se dividen en tres tipos principales: <strong>decretos legislativos, decretos leyes y decretos reglamentarios</strong>, cada uno con propósitos y alcances específicos en el marco legal.
    
    TabsC.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Decretos Legislativos", :iconUrl="require('@/assets/curso/unidad/img-18.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-right")
            h4 Decretos Legislativos
            p(data-aos="fade-up") Emitidos durante estados de excepción, como guerra exterior, conmoción interior o emergencia económica, social o ecológica. Estos decretos buscan enfrentar crisis temporales y están sujetos a revisión por la Corte Constitucional para garantizar que no vulneren derechos fundamentales ni contravengan la Constitución (art. 215).
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/unidad/img-37.png', alt='Texto que describa la imagen')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Decretos Leyes", :iconUrl="require('@/assets/curso/unidad/img-18.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-right")
            h4 Decretos Leyes
            p(data-aos="fade-up") Emitidos cuando el Congreso otorga facultades extraordinarias al Presidente para legislar sobre temas específicos y limitados en el tiempo (art. 150, núm. 10). Estos decretos tienen la misma jerarquía que las leyes ordinarias, pero su emisión está condicionada a la delegación expresa del Congreso. 
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/unidad/img-38.png', alt='Texto que describa la imagen')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Decretos Reglamentarios", :iconUrl="require('@/assets/curso/unidad/img-18.svg')")
        .row
          .col-md-12.col-lg-7.col-xl-8.mb-4.mb-md-0(data-aos="fade-right")
            h4 Decretos Reglamentarios
            p(data-aos="fade-up") De menor jerarquía normativa, estos decretos son emitidos para desarrollar y especificar cómo deben aplicarse las leyes. No crean derechos ni obligaciones nuevas, sino que establecen los procedimientos para implementar las leyes (art. 189, núm. 11). Ejemplo: un decreto reglamentario puede definir los requisitos para acceder a un beneficio contemplado en una ley.
          .d-none.d-lg-block.col-md-12.col-lg-5.col-xl-4(data-aos="fade-left")
            figure
              img(src='@/assets/curso/unidad/img-39.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-10.mx-auto(data-aos="fade-up")
        div.d-flex.align-items-center.bg-azul.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-40.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 Los decretos con fuerza de ley garantizan flexibilidad en la acción del Estado en situaciones extraordinarias y establecen la forma en que las leyes deben aplicarse, manteniendo coherencia con la Constitución y el marco legal colombiano.

    #t_2_3.titulo-segundo
      div.d-flex
        span.me-3 2.3 
        h2 Normatividad en el plano local
    
    p.mb-4 En el sistema jurídico colombiano, las ordenanzas y acuerdos municipales son normas que, aunque de rango inferior a las leyes nacionales, tienen fuerza de ley dentro de sus respectivos territorios, siempre que no contradigan la Constitución o las leyes superiores. Estas disposiciones permiten a los departamentos y municipios regular aspectos específicos de su ámbito, garantizando la autonomía territorial en temas locales de interés.

    .bg-fondo-2.bg-full-width.row
      div.px-5.pb-md-3.py-4.col-12.col-lg-10.mx-auto
        .row.mb-0
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded
              img.mb-4(src='@/assets/curso/unidad/img-41.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Ordenanzas
                p.text-small.px-4.pb-2 Emitidas por las asambleas departamentales, regulan asuntos de interés departamental, como el uso del suelo o la creación de impuestos a nivel departamental. Estas ordenanzas son válidas dentro del territorio del departamento, respetando siempre la Constitución y las leyes nacionales. 
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded
              img.mb-4(src='@/assets/curso/unidad/img-42.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Acuerdos Municipales
                p.text-small.px-4.pb-2 Producidos por los concejos municipales o distritales, estos acuerdos abordan temas locales, como la prestación de servicios públicos, el desarrollo urbano o la regulación del comercio ambulante. También deben ajustarse a la Constitución y a las leyes nacionales para mantener su validez.

    .row.mb-4
      .col-12.col-lg-10.mx-auto(data-aos="fade-up")
        div.d-flex.align-items-center.bg-azul.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-43.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 La jerarquía normativa en Colombia garantiza la coherencia y la supremacía constitucional. La Constitución es la norma suprema, seguida por los tratados internacionales que forman parte del bloque de constitucionalidad, luego las leyes, decretos y actos administrativos. Este orden asegura que todas las normas respeten los principios constitucionales y protejan los derechos fundamentales, garantizando la estabilidad y previsibilidad del sistema jurídico.

    .row.bg-amarillo-1.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
          img.h-100(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')
        .col-12.col-xl-7.d-flex.ps-4.align-items-center.flex-column(data-aos="fade-left")
          h2.mb-4.pb-2.me-auto ¿Sabías que el bloque de constitucionalidad da rango constitucional a tratados de derechos humanos? 
          p.mb-5  Lo invitamos a revisar el documento Bloque de constitucionalidad y actos administrativos en el sistema jurídico colombiano, donde encontrará una explicación detallada sobre cómo estos tratados y normas, como el Pacto de San José y el Estatuto de Roma, fortalecen la protección de derechos fundamentales en Colombia.
          a.d-flex.me-auto.bg-white.box-shadow.cursor-pointer(data-aos="zoom-in" :href="obtenerLink('/downloads/Anexo_Bloque de constitucionalidad y actos administrativos en el sistema jurídico colombiano.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Bloque de constitucionalidad y actos administrativos en el sistema jurídico colombiano


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
