<template lang="pug">
.curso-main-container.creditos-vista
  BannerInterno(:titulo="'Unidad 2: El Ordenamiento Jurídico Colombiano'" :subTitulo="'SÍNTESIS'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4.mb-md-5 En esta unidad, el estudiante adquirirá una comprensión esencial del ordenamiento jurídico colombiano, iniciando con el estudio de la Constitución Política de 1991, que es la norma suprema y pilar del sistema legal del país. La unidad abordará cómo la Constitución organiza el poder estatal, establece los derechos y deberes de los ciudadanos y define principios fundamentales como la dignidad humana, la igualdad y la libertad. También se analizará su estructura y jerarquía normativa, entendiendo que toda norma debe alinearse con sus disposiciones para garantizar coherencia y protección de derechos fundamentales. Además, se profundizará en el ámbito de los derechos fundamentales, su importancia en la práctica jurídica y su defensa a través de mecanismos como la acción de tutela, que protege al ciudadano frente a vulneraciones de sus derechos esenciales.
    figure
      img(src='@/assets/componentes/sintesis.png', alt='Texto que describa la imagen')
    

</template>
<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Footer from '../components/plantilla/Footer'
export default {
  name: 'Creditos',
  components: {
    BannerInterno,
    Footer,
  },
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
    creditosAdicionales() {
      return this.$config.creditosAdicionales
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos-vista
  .tarjeta.credito
    background-color: $color-sistema-d

.creditos
  color: $color-sistema-b
  overflow-x: auto

  &__item
    min-width: 490px

  p
    line-height: 1.3em
    margin-bottom: 0
    color: $color-sistema-b

  &__titulo
    font-weight: $base-bold-font-weight
    background-color: $color-sistema-d
    padding: 5px 10px
    border-top-radius: $base-border-radius
    border-top-left-radius: $base-border-radius
    border-top-right-radius: $base-border-radius
  table
    td, th
      border-color: $color-sistema-d
</style>
