<template>
	<div class="producto">
		<!--Code-->
		<section :key="producto.id">
			<h3>{{ producto.description }}</h3>
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
    }
  }
}
</script>

<style lang="less" scoped>

	.producto{
	background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
	}

	section{
		border: 1px solid black;
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
</style>
