<template>
   <b-container>
    <!-- Products 全部產品-->
    <Navbar />
    <!-- Products 全部產品-->   
    <div class="all__products-card" >
    <ProductList
      v-for="product in Products"
      :key="product.id"
      :initialproduct="product"
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

//導入產品種子資料
const dummyData = {
  Products: [
  {
    id: 1,
    label: "new",
    name: "Name of the amazing product could be here",
    description: "Name of the amazing project could be here",
    shipping: "shipping via Fedex",
    regularprice: "RM100.00",
    discountprice: "RM300.00",
    button: "ADD TO CART",
    productImg:
			"https://i.pinimg.com/564x/5d/d2/ac/5dd2ac14dac59ab899654ce431b3d4c4.jpg",
	},
  {
    id: 2,
    label: "new",
    name: "Name of the amazing product could be here",
    description: "Name of the amazing project could be here",
    shipping: "shipping via Fedex",
    regularprice: "RM200.00",
    discountprice: "RM300.00",
    button: "ADD TO CART",
    productImg:
			"https://i.pinimg.com/736x/53/1c/3b/531c3b2734b1e63ec083dc7843b99e4a.jpg",
	},
  {
    id: 3,
    label: "new",
    name: "Name of the amazing product could be here",
    description: "Name of the amazing project could be here",
    shipping: "shipping via Fedex",
    regularprice: "RM150.00",
    discountprice: "RM400.00",
    button: "ADD TO CART",
    productImg:
			"https://i.pinimg.com/564x/ec/46/ee/ec46ee8528abf428fd6579819021f282.jpg",
	},
  {
    id: 4,
    label: "new",
    name: "Name of the amazing product could be here",
    description: "Name of the amazing project could be here",
    shipping: "shipping via Fedex",
    regularprice: "RM200.00",
    discountprice: "RM500.00",
    button: "ADD TO CART",
    productImg:
			"https://i.pinimg.com/564x/21/4f/6e/214f6eb10ee145031c29a080c5644de4.jpg",
	},
  {
    id: 5,
    label: "new",
    name: "Name of the amazing product could be here",
    description: "Name of the amazing project could be here",
    shipping: "shipping via Fedex",
    regularprice: "RM200.00",
    discountprice: "RM350.00",
    button: "ADD TO CART",
    productImg:
			"https://i.pinimg.com/564x/94/84/71/9484716a358cd7d7c9c6dd2747f397e7.jpg",
	},
  {
    id: 6,
    label: "new",
    name: "Name of the amazing product could be here",
    description: "Name of the amazing project could be here",
    shipping: "shipping via Fedex",
    regularprice: "RM200.00",
    discountprice: "RM300.00",
    button: "ADD TO CART",
    productImg:
			"https://i.pinimg.com/564x/41/52/f6/4152f654fb0d2fbfc7a3c48697c742c7.jpg",
	},           
]

};
export default {
  name: 'products',
  components: {
    ProductList,
    Pagination
  },
  //觸發fetchProductsData函式
  created() {
    this.fetchProductsData();
  },
  //挑選data函式會用到的資料
  data() {
    return {
      Products: []
    }
  },
   methods: {
    fetchProductsData() {
      //使用解構複值的方式
       const {
        Products,
      } = dummyData
      this.Products = Products
    },
  },
};  
</script>

<style lang="css" scoped>
.all__products-card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
}
</style>