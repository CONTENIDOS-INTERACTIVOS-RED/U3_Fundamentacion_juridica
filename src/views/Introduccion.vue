<template lang="pug">
.curso-main-container.introduccion
  BannerInterno.text-uppercase(:titulo="'Unidad 2: El Ordenamiento Jurídico Colombiano'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p.mb-4 La interpretación y aplicación del Derecho es fundamental para el ejercicio profesional de cualquier abogado. En esta unidad, el estudiante aprenderá a interpretar normas jurídicas para aplicarlas correctamente en casos concretos, comprendiendo el rol clave de los operadores jurídicos, jueces, abogados y legisladores, en el desarrollo del Derecho en la práctica cotidiana.

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-azul.p-4.mb-4
          span Esta unidad es relevante porque enseña a analizar la interpretación de normas jurídicas tanto desde un enfoque teórico como práctico, proporcionando herramientas para entender el papel de los operadores en la construcción y mantenimiento de un sistema jurídico eficiente y justo. Los estudiantes también explorarán el proceso mediante el cual se llevan las normas a la práctica, resolviendo conflictos y garantizando la justicia.
        p.mb-0 La aplicación correcta del Derecho exige interpretar las leyes con precisión, ya que no siempre son claras. En situaciones de ambigüedad o conflicto entre normas, los operadores jurídicos deben utilizar métodos específicos de interpretación, como la literal, sistemática, histórica y teleológica, para captar la intención del legislador y adaptar las normas a la realidad social. 

      .col-12.col-xl-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')

    .row.mb-5.mx-0
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") Al finalizar esta unidad, el estudiante reconocerá y aplicará diversos métodos de interpretación y comprenderá el papel de los operadores jurídicos en la creación y aplicación del Derecho. La unidad se divide en tres temas: métodos de interpretación, aplicación en casos concretos y funciones de los operadores. La participación en actividades y lecturas asignadas será clave para consolidar los conocimientos adquiridos y aplicarlos en la resolución de problemas jurídicos. 

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
