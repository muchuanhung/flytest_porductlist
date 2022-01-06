 <template>
   
    <b-container class="product-category d-flex justify-content-between align-items-center">
         <b-card-sub-title>
           Showing 1-2 of 9 Products
         </b-card-sub-title>

         <!-- Products 分類filter-->
        <div class="product-category__sort d-flex  flex-direction-row align-items-center">
         <b-card-sub-title>
          Sort by:
         </b-card-sub-title>
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
    </b-container>
    
  </template>    