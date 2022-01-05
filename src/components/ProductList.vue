<template>
  <b-container class="product">
    <b-row align-v="center">
     
       <div>
         <b-card-sub-title>
           Showing 1-6 of 30 Products
         </b-card-sub-title>
  <!-- Products 分類filter-->
         <b-dropdown text="Popular" variant="outline-dark" class="m-2">
         <b-dropdown-item
          v-model="selectCategory"
          value="Popular"
         >
           Popular
         </b-dropdown-item>
         <b-dropdown-item
          v-model="selectCategory"
          value="Newest"
         >
           Newest
         </b-dropdown-item>
          <b-dropdown-item
          v-model="selectCategory"
          value="Price"
         >
           Price
         </b-dropdown-item>
         <b-dropdown-divider></b-dropdown-divider>
         </b-dropdown>
      </div>

  <!-- Products 產品data-->
  <b-card
    img-src="https://i.pinimg.com/564x/5d/d2/ac/5dd2ac14dac59ab899654ce431b3d4c4.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-sub-title-tag class="product-label">
      {{label}}
    </b-card-sub-title-tag> 

    <div class="product-info01">
      <b-card-title
        class="product-info01__product__title"
        style="font-size:16px;"
      >
        {{description}}
      </b-card-title>

      <b-card-sub-title 
        class="product-info01__product__sub-title"
        style="font-size:12px;"
      >
        {{shipping}}
      </b-card-sub-title>
    </div>

    <div class="product-info02">
      <b-card-text 
        class="product-info02__product__regular-price"
        style="font-size:24px;"
      >
        <strong>RM200.00</strong>
      </b-card-text>

      <b-card-text 
        class="product-info02__product__discount-price"
        style="font-size:18px;"
      >
        <del>RM300.00</del>
    </b-card-text>
    </div>

  
 
    <b-button 
      block variant="primary"
      style="width:275px;"
      >
        {{button}}
    </b-button>
 
  
  </b-card>
  <!-- Products 產品data end-->


  
     
     </b-row>
    </b-container>

</template>



<script>
//導入產品種子資料


  export default {
     name: 'Product',
    data() {
      return {    
        label:'new',
        description: 'Name of the amazing project could be here',
        shipping: ' shipping via Fedex',
        button: 'ADD TO CART'

    
      };
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
.product-info02{
  display:flex;
  flex-direction:row;
  align-items: center;
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