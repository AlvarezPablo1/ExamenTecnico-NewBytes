
export const state = () => ({
  productos: [],
})

export const mutations = {
  SET_PRODUCTOS: (state, { data, }) => {
    state.productos = data.items;
  },
}

export const actions = {
  async obtenerBusqueda({ commit}, { search, limit }) {

    const params = {
      search,
      offset: 0,
      limit
    };  

    await this.$axios.$get('v4/search', { params })
      .then((data) => {
        commit("SET_PRODUCTOS", { data, });
      })

      // await this.$axios.$get('https://cache-static.libreopcion.com/img/h_200_' + state.productos.image)
      //   .then((data) =>{
      //     commit("SET_IMG", {data, })
      //   })
  },
    
}