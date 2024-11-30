<template lang="pug">
.curso-main-container.pb-3
  BannerInterno.text-uppercase(:titulo="'unidad 3: Interpretación y aplicación del derecho'" :subTitulo="'3. Función de los operadores jurídicos: jueces, abogados y legisladores'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Los operadores jurídicos son los actores principales en la creación, interpretación y aplicación del derecho en nuestra sociedad. Desde sus roles específicos, jueces, abogados y legisladores garantizan que el sistema de justicia funcione de manera justa y eficaz, protegiendo los derechos y resolviendo los conflictos que surgen en la vida cotidiana. A continuación, exploraremos cómo cada uno de estos actores contribuye al fortalecimiento del sistema jurídico, asegurando que el derecho se mantenga como una herramienta esencial para la equidad y la justicia.
        TarjetaAudio.color-primario.bg-white.mb-0(
          texto="Los operadores jurídicos"
          tiempo
          :audio="require('../../assets/componentes/audios/audio-ej.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )

      .col-5.d-none.d-md-block(data-aos="fade-left")
        img.h-100(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')

    p.mb-4 La historia de los operadores jurídicos muestra cómo han evolucionado sus roles para adaptarse a cambios sociales y políticos. A continuación, se presenta su desarrollo histórico:

    ImagenInfografica.color-secundario.mb-5.d-none.d-md-block
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')

      .tarjeta.bg-white.border-gold-4.p-4(x="12.6%" y="70%" numero="+")
        .h5.mb-2 Antigüedad
        p Los primeros sistemas jurídicos se basaban en costumbres y decisiones de líderes o jueces que aplicaban normas consuetudinarias. Un ejemplo es el Código de Hammurabi en Mesopotamia (1754 a.C.), donde los líderes interpretaban y aplicaban normas escritas para regular conductas específicas.
      .tarjeta.bg-white.border-gold-4.p-4(x="31.2%" y="44%" numero="+")
        .h5.mb-2 Derecho Romano
        p En Roma, el papel de los operadores jurídicos comenzó a profesionalizarse: los jurisconsultos asesoraban en temas legales, y los pretores interpretaban y aplicaban la ley, estableciendo precedentes. Juristas como Ulpiano definieron principios de justicia que aún son base en el derecho actual.
      .tarjeta.bg-white.border-gold-4.p-4(x="50%" y="70%" numero="+")
        .h5.mb-2 Edad Media
        p La Iglesia Católica influyó en el derecho mediante el Derecho Canónico. Se crearon universidades donde se enseñaba derecho romano y canónico, consolidando la figura del abogado y del juez. Los “glosadores” desarrollaron métodos de interpretación legal que sentaron bases para la enseñanza del derecho.
      .tarjeta.bg-white.border-gold-4.p-4(x="68.7%" y="38.5%" numero="+")
        .h5.mb-2 Renacimiento y Modernidad
        p Surgió el estado moderno y los sistemas legales centralizados con códigos legales, como el Código Napoleónico. Montesquieu argumentó por la separación de poderes, estableciendo roles más claros para jueces, abogados y legisladores, quienes comenzaron a interpretar y aplicar leyes escritas en lugar de costumbres.
      .tarjeta.bg-white.border-gold-4.p-4(x="87.3%" y="70%" numero="+")
        .h5.mb-2 Siglo XIX y XX
        p Con el surgimiento de estados nacionales y organismos internacionales, como la ONU y la Corte Internacional de Justicia, los operadores jurídicos tuvieron que considerar tanto leyes nacionales como tratados internacionales. Hans Kelsen promovió la independencia judicial en su “Teoría Pura del Derecho".

    .d-block.d-md-none
      h2.text-center Historia operadores jurídicos
      
      ImagenInfografica.color-secundario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')

        .tarjeta.bg-white.border-gold-4.p-4(x="91.6%" y="11%" numero="+")
          .h5.mb-2 Antigüedad
          p Los primeros sistemas jurídicos se basaban en costumbres y decisiones de líderes o jueces que aplicaban normas consuetudinarias. Un ejemplo es el Código de Hammurabi en Mesopotamia (1754 a.C.), donde los líderes interpretaban y aplicaban normas escritas para regular conductas específicas.
        .tarjeta.bg-white.border-gold-4.p-4(x="8.6%" y="30.4%" numero="+")
          .h5.mb-2 Derecho Romano
          p En Roma, el papel de los operadores jurídicos comenzó a profesionalizarse: los jurisconsultos asesoraban en temas legales, y los pretores interpretaban y aplicaban la ley, estableciendo precedentes. Juristas como Ulpiano definieron principios de justicia que aún son base en el derecho actual.
        .tarjeta.bg-white.border-gold-4.p-4(x="91.6%" y="50%" numero="+")
          .h5.mb-2 Edad Media
          p La Iglesia Católica influyó en el derecho mediante el Derecho Canónico. Se crearon universidades donde se enseñaba derecho romano y canónico, consolidando la figura del abogado y del juez. Los “glosadores” desarrollaron métodos de interpretación legal que sentaron bases para la enseñanza del derecho.
        .tarjeta.bg-white.border-gold-4.p-4(x="8.6%" y="69.4%" numero="+")
          .h5.mb-2 Renacimiento y Modernidad
          p Surgió el estado moderno y los sistemas legales centralizados con códigos legales, como el Código Napoleónico. Montesquieu argumentó por la separación de poderes, estableciendo roles más claros para jueces, abogados y legisladores, quienes comenzaron a interpretar y aplicar leyes escritas en lugar de costumbres.
        .tarjeta.bg-white.border-gold-4.p-4(x="91.6%" y="89.4%" numero="+")
          .h5.mb-2 Siglo XIX y XX
          p Con el surgimiento de estados nacionales y organismos internacionales, como la ONU y la Corte Internacional de Justicia, los operadores jurídicos tuvieron que considerar tanto leyes nacionales como tratados internacionales. Hans Kelsen promovió la independencia judicial en su “Teoría Pura del Derecho".

    .bg-fondo-2.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex.flex-column
    
        p.mb-4 En el contexto actual, los operadores jurídicos enfrentan desafíos derivados de la globalización y la digitalización. Estos cambios han demandado una adaptación continua para mantener la relevancia del derecho en un mundo en constante transformación.
        .row
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Globalización
                p.text-small.px-4.pb-2 Los operadores jurídicos deben adaptarse a un marco legal cada vez más globalizado, considerando normas internacionales y tratados en sus decisiones.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Digitalización 
                p.text-small.px-4.pb-2 Con el avance tecnológico, los jueces, abogados y legisladores enfrentan nuevos desafíos legales, como la protección de datos y los derechos digitales, adaptando sus funciones y formación a las realidades de la era digital.

    h2 El papel de los jueces en la interpretación y aplicación del derecho
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Los jueces interpretan y aplican las leyes en casos específicos, resolviendo conflictos y creando precedentes que guiarán futuros casos. En Colombia, decisiones de la Corte Constitucional y la Corte Suprema de Justicia tienen gran impacto, ya que su interpretación de las leyes es obligatoria para otros jueces en casos similares, constituyendo jurisprudencia.
        .bg-amarillo-1.p-4
          p.text-bold Ejemplo
          span En la Sentencia C-355 de 2006, la Corte Constitucional despenalizó el aborto en tres casos específicos (riesgo para la vida de la madre, violación y malformaciones graves del feto). Esta decisión se convirtió en obligatoria, protegiendo los derechos fundamentales de las mujeres, como su dignidad, salud y vida.
      .col-5.d-none.d-md-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
    h2 Función de los abogados como intérpretes y defensores del derecho
    .row.mb-4
      .col-5.d-none.d-md-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-30.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 Los abogados defienden los intereses de sus clientes, interpretando las leyes para proteger sus derechos en áreas como el derecho penal, laboral o civil. Su labor es crucial para que las personas comprendan sus derechos y los protejan frente a injusticias.
        .bg-amarillo.p-4
          p.text-bold Ejemplo
          span En un caso de despido laboral, el abogado del empleado utiliza el Código Sustantivo del Trabajo para argumentar que el despido fue injusto. Además de interpretar la norma de “justa causa” para el despido, el abogado relaciona los hechos del caso con esta interpretación para construir una defensa sólida.
    h2 Los legisladores como creadores del marco normativo
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 Los legisladores, representados en Colombia por el Congreso Nacional, crean el marco normativo que regula la conducta social y protege derechos. Las leyes deben responder a las necesidades de la sociedad, ser claras, precisas y alineadas con los principios de la Constitución.
        .bg-amarillo-1.p-4
          p.text-bold Ejemplo
          span La Ley 1448 de 2011, Ley de Víctimas y Restitución de Tierras, fue creada por el Congreso para atender a las víctimas del conflicto armado en Colombia. Esta ley establece medidas para reparar a quienes sufrieron daños durante el conflicto, incluyendo la restitución de tierras, cumpliendo con obligaciones internacionales en derechos humanos.
      .col-5.d-none.d-md-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-31.png', alt='Texto que describa la imagen')

    h2 Interrelación entre jueces, abogados y legisladores
    p.mb-4 El sistema jurídico funciona gracias a la colaboración entre jueces, abogados y legisladores:

    .row.mb-4
      .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-right")
        div.custom-image-card.rounded-8px
          img.my-4.mx-auto(src='@/assets/curso/unidad/img-32.svg', alt='Texto que describa la imagen', style="width: 90px;")
          div.mb-5
            p.text-bold.text-center Legisladores
            p.text-small.px-4.text-center.pb-2 Crean las leyes que regulan la sociedad y protegen los derechos de las personas.
      .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-up")
        div.custom-image-card.rounded-8px
          img.my-4.mx-auto(src='@/assets/curso/unidad/img-33.svg', alt='Texto que describa la imagen', style="width: 90px;")
          div.mb-5
            p.text-bold.text-center Abogados
            p.text-small.px-4.text-center.pb-2 Usan estas leyes para defender los intereses de sus clientes, estructurando argumentos basados en normas y precedentes.
      .col-10.col-md-6.col-lg-4.mb-4.mx-auto(data-aos="fade-left")
        div.custom-image-card.rounded-8px
          img.my-4.mx-auto(src='@/assets/curso/unidad/img-34.svg', alt='Texto que describa la imagen', style="width: 90px;")
          div.mb-5
            p.text-bold.text-center Jueces
            p.text-small.px-4.text-center.pb-2 Interpretan y aplican las leyes en casos específicos, generando precedentes que orientan a otros jueces y abogados, asegurando la coherencia y continuidad en la aplicación legal.

    .row.mb-4
      .col-10.mx-auto.bg-amarillo.p-4(data-aos="fade-up")
        p.text-bold Ejemplo
        span En un caso de divorcio, el Congreso establece las normas sobre matrimonio y divorcio en el Código Civil. Los abogados de ambas partes utilizan estas normas para defender los intereses de sus clientes, y el juez aplica la norma tomando una decisión que refleje principios de equidad y justicia.

    .bg-fondo-2.bg-full-width.py-4
      div.px-5.pb-md-3.py-4.d-flex.flex-column
    
        h2 Ejemplos de decisiones judiciales y su impacto en la sociedad
        p.mb-4 Las decisiones de los jueces sobre derechos fundamentales o temas de interés general tienen un impacto profundo en la sociedad.
        .row
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-35.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Ejemplo 1
                p.text-small.px-4.pb-2 Sentencia T-760 de 2008 - Derecho a la Salud: La Corte Constitucional identificó fallas en la cobertura de salud que vulneraban derechos, ordenando reformas para garantizar el acceso universal a servicios de salud en condiciones de dignidad y equidad, vinculando el acceso a la salud con la dignidad humana.
          .col-10.col-md-6.mb-4.mx-auto(data-aos="fade-left")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-36.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Ejemplo 2
                p.text-small.px-4.pb-2 Sentencia C-355 de 2006 - Derechos Reproductivos de las Mujeres: La Corte Constitucional interpretó el Código Penal y despenalizó el aborto en tres circunstancias específicas. Esta decisión obliga a las instituciones de salud y al sistema judicial a proteger los derechos de las mujeres en casos permitidos

    .row.mb-0
      .col-10.mx-auto.bg-amarillo-1.p-4(data-aos="fade-up")
        span Los operadores jurídicos cumplen funciones fundamentales en el sistema de justicia: los legisladores crean leyes, los abogados defienden los derechos de las personas y los jueces interpretan y aplican las leyes en casos específicos. Esta colaboración garantiza un sistema jurídico eficiente y justo que protege los derechos y promueve la justicia en la sociedad.



</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
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

<style lang="sass">
.material-complementario
  padding-top: 3rem
  border-top: 9px solid $color-sistema-e
</style>
