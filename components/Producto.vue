<template>
	<div class="producto">
		<!--
		
			Code

		-->
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
	}

}

</script>

<style lang="less" scoped>
</style>
