<template>
  <div id="layout-basic">
    <a-layout>
      <a-layout-header>
        <a-input
          ref="searchInput"
          v-model="search"
          type="search"
          placeholder="Buscá productos, marcas y categorías"
          @keypress.enter.exact="buscar"
        />
      </a-layout-header>

      <a-layout-content>
        <a-select
          v-if="search.length > 0"
          default-value="5"
          style="width: 120px"
          @change="handleChange"
        >
          <a-select-option
            v-for="index in 10"
            :key="`key-${index}`"
            :value="index"
          >
            {{ index }}
          </a-select-option>
        </a-select>
        <div>
          Mostrar aqui los productos
          <!-- code / mostrar los productos desde productosOrdenados -->
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {
      search: ''
    }
  },
  head() {
    return {
      title: 'Buscador de productos'
    }
  },
  computed: {
    ...mapState('busquedas', ['productos']),
    productosOrdenados() {
      // Ordener segun el precio de final: `price.finalPrice`
      return this.productos
    }
  },
  methods: {
    async buscar() {
      await this.$store.dispatch('busquedas/obtenerBusqueda', {
        search: this.search
      })
    },
    handleChange(value) {
      // eslint-disable-next-line no-console
      console.log(`valor seleccionado ${value}`)
    }
  }
}
</script>

<style lang="less" scoped>
#layout-basic {
  text-align: center;
}
.ant-layout {
  min-height: 100vh;
}
#layout-basic .ant-layout-header,
#layout-basic .ant-layout-footer {
  background: rgb(27, 27, 31);
  color: #fff;
}

#layout-basic .ant-layout-footer {
  line-height: 1.5;
}

#layout-basic .ant-layout-content {
  min-height: 120px;
  line-height: 120px;
}

#layout-basic > .ant-layout {
  margin-bottom: 48px;
}

#layout-basic > .ant-layout:last-child {
  margin: 0;
}
</style>
