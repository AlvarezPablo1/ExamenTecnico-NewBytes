<template>
	<div class="producto">
		<!--Code-->
		<section :key="producto.id">
			<h3>{{ producto.description }}</h3>
			<img :src="viewImg" alt="Imagen Producto">
			<h4>{{ producto.brandName }}</h4>
			<p :style="{'color': changeColor}">{{ producto.price.finalPrice }}</p>
		</section>	
	</div>
</template>

<script>

export default {
	name:"ProductoComponent",
	props: {
		producto: {
			type: Object,
			required: true,
            default(){
                return{}
            }
		}
	},
	computed: {
    changeColor() {
			const price = this.producto.price.finalPrice;

      if (price <= 10000) {
        return 'green'
      } else if(price >= 10000 && price <= 25000){
        return '#b4c406'
      }else if(price >= 25000 && price <= 100000){
				return 'orange'
			}else{
				return 'red'
			}
    },
		viewImg() {
			const img = "https://cache-static.libreopcion.com/img/h_200_" + this.producto.image
			return img
		}
  }
}
</script>

<style lang="less" scoped>

	.producto{
	background-color: #ffff;
	margin: 2rem 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 20px 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
	}

	

	section{
		margin: 1rem;
		padding: 1rem;
	}

	h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

	p{
		font-size: 1.2rem;
		font-weight: bold;
		margin: 0.5rem 0;
	}

	@media(max-width: 425px){
		img{
		width: 100px;
	}
		h3{
			font-size: small;
		}
	}
	@media(min-width: 768px){
		img{
		width: 200px;
	}
	}
</style>
