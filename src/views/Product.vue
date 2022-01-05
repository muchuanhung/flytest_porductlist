<template>
   <div class="product">
    <!-- Products 全部產品-->
    <!-- 用v-for迴圈的v-on綁定產品id再用v-bind把object回傳回卡片-->
    <div class="all__products-card" >
   
    <ProductList

       />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <Pagination
     />
    

  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import Pagination from "../components/Pagination.vue";

//導入產品種子資料
const dummyData = {
  
  Products: [
  {
    id: 1,
    name: "Name of the amazing product could be here",
    description: "  Name of the amazing project could be here",
    shippinh: "shipping via Fedex",
    price: "RM200.00 <del>RM300.00</del>",
    productImg:
			"https://i.pinimg.com/564x/5d/d2/ac/5dd2ac14dac59ab899654ce431b3d4c4.jpg",
	},
 {
		id: 2,
		name: "THERMAL BASE LAYER - NATURAL RAINBOW WAFFLE",
		price: "$81.00 CAD",
		productImg:
			"https://i.pinimg.com/564x/ec/46/ee/ec46ee8528abf428fd6579819021f282.jpg",
    CategoryId: 1,
    Category: {
    id: 1,
    name: "TOPS",
    },
	},


],
  };




export default {
  name: 'product',
  components: {
    ProductList,
    Pagination
  },
  //挑選data函式會用到的資料
   data() {
    return {
      Products:[],
      categories: [],
      //表示要顯示那些id產品
      categoryId: -1,
      currentpage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
     
    };
  },
 //觸發fetchProductsData函式
  created() {
    this.fetchProductsData();
  },
  methods: {
    fetchProductsData() {
      //使用解構複值的方式
       const {
        Products,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.Products = Products
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    },

  },
 
};  
</script>