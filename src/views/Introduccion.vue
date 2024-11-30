<template lang="pug">
.curso-main-container.introduccion
  BannerInterno.text-uppercase(:titulo="'Unidad 2: El Ordenamiento Jurídico Colombiano'" :subTitulo="'INTRODUCCIÓN'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    p.mb-4 El ordenamiento jurídico de un país es el conjunto de normas que rigen la vida en sociedad, y en Colombia, este sistema se basa en una estructura sólida encabezada por la Constitución Política. Comprender cómo funciona esta organización, su jerarquía normativa y los derechos fundamentales que garantiza es esencial para cualquier estudiante de Derecho, ya que constituye la base de toda actividad jurídica en el país.

    .row.mb-5.mx-0
      .col-12.col-xl-8.d-flex.align-items-center.bg-amarillo.p-4(data-aos="fade-left")
        p.mb-0(data-aos="fade-up") El conocimiento de estos principios no es solo un requisito académico, sino una herramienta fundamental para el ejercicio profesional del derecho. Saber interpretar y aplicar la Constitución y sus normas complementarias permite abordar cualquier caso jurídico con una base sólida. La protección y promoción de los derechos fundamentales son, además, responsabilidades esenciales de los abogados, tanto en el ámbito público como en el privado. Por ejemplo, la defensa de los derechos humanos o la interpretación de normativas que impactan la vida de los ciudadanos son tareas cotidianas en el ejercicio de la abogacía.
      .d-none.d-xl-block.col-4.px-0(data-aos="fade-right")
        img.h-100(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')

    .row.mb-4
      .d-flex.align-items-center
        div.d-flex.align-items-center.bg-azul.px-3.py-4
          img.me-4(style="width: 90px" src='@/assets/curso/unidad/img-2.svg', alt='Texto que describa la imagen')
          p.pe-xl-5.mb-0 En esta unidad, exploraremos los aspectos más relevantes del ordenamiento jurídico colombiano, comenzando por su pilar fundamental: la Constitución Política, que no solo establece la organización del Estado y los principios fundamentales que guían su actuación, sino que también garantiza los derechos fundamentales de todos los ciudadanos.
    
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
