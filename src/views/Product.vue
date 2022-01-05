<template>
   <b-container>
    <!-- Products 全部產品-->   
    <div class="all__products-card" >
   
    <ProductList

       />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <Pagination
     />
    
   </b-container>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import Pagination from "../components/Pagination.vue";

export default {
  name: 'product',
  components: {
    ProductList,
    Pagination
  },
 
};  
</script>