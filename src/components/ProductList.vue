<template>
  <b-container class="product">
    <b-row align-v="center">
     
      

  <!-- Products 產品data-->
  <b-card
    :img-src="product.productImg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="product-wrapper mb-2"
  >
    <b-card-sub-title class="product-label">
      {{product.label}}
    </b-card-sub-title> 

    <div class="product-info01">
      <b-card-title
        class="product-info01__product__title"
        style="font-size:16px;"
      >
        {{product.description}}
      </b-card-title>

      <b-card-sub-title 
        class="product-info01__product__sub-title"
        style="font-size:12px;"
      >
         {{product.shipping}}
      </b-card-sub-title>
    </div>

    <div class="product-info02  d-flex  flex-direction-row align-items-center">
      <b-card-text 
        class="product-info02__product__regular-price"
        style="font-size:24px;"
      >
        <strong>{{product.regularprice}}</strong>
      </b-card-text>

      <b-card-text 
        class="product-info02__product__discount-price"
        style="font-size:18px;"
      >
        <del>{{product.discountprice}}</del>
    </b-card-text>
    </div>
    <b-button 
      block variant="primary"
      
      >
      {{product.button}}
    </b-button>
  </b-card>
  <!-- Products 產品data end-->




  
     
      </b-row>
    </b-container>
</template>



<script>
export default {
	props:{
		initialproduct: {
		type: Object,
		require: true
		}
	},

	data() {
		return {
			product: this.initialproduct,
		}
	},
}
</script>

<style lang="css" scoped>

.product-label {
  padding: 1px 10px;
  text-transform: uppercase;
  position: absolute;
  top: 12px;
  right: 10px;
  z-index: 2;
  border-radius: 3px;
  background: #ff5b6f;
  color: white;
 
}

.product-info01{
  display: inline-block;
  width: 100%;
  border-top: 1px solid lightgray;
}

.product-info02__product__regular-price{
  padding-right: 15px;
  color: orange;
}
.product-info02__product__discount-price{
  margin-bottom: 15px;
  color: darkgray;
}


</style>