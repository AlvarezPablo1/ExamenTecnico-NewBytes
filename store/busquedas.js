
export const state = () => ({
  productos: [],

})

export const mutations = {
  SET_PRODUCTOS: (state, { data, }) => {
    state.productos = data.items;
  }
}
export const actions = {

  async obtenerBusqueda({ commit, }, { search }) {

    const params = {
      search,
      offset: 0,
      limit: 8

    };


    await this.$axios.$get('v4/search', { params })
      .then((data) => {
        commit("SET_PRODUCTOS", { data, });
      })

  },
}