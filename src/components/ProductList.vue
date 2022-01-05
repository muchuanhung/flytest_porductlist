<template>
<div>
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
    <b-card-title>
      Name of the amazing project could be here
    </b-card-title>
    <b-card-sub-title>
      shipping via Fedex
    </b-card-sub-title>
    <b-card-text>
      RM200.00
      <del>RM300.00</del>
    </b-card-text>

   <b-card-sub-title-tag>
    <span class="new">New</span>
   </b-card-sub-title-tag> 
  <div>
    <b-button block variant="primary">Block Level Button</b-button>
  </div>
  </b-card>
  <!-- Products 產品data end-->


  
</div>
</template>


<script>
  export default {
    data() {
      return {
      
      }
    },
  }
</script>




