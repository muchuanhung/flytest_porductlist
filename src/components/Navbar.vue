 <template>
   
    <b-container class="product-category d-flex justify-content-between align-items-center">
         <b-card-sub-title>
           Showing 1-2 of 9 Products
         </b-card-sub-title>

         <!-- Products 分類filter-->
         <!-- -v-model 雙向綁定分類-->
        <div class="filter d-flex  flex-direction-row align-items-center">
         <b-card-sub-title>
          Sort by:
         </b-card-sub-title>
         <b-dropdown text="All" variant="outline-dark" class="m-2">

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
        
   <!-- 測試用--> 
   <!-- -v-for value,index,key綁定value in object-->     
   
    </b-container>
    
</template>    



<script>

export default {
  

  //挑選data函式會用到的資料
    data () {
      return {
        people: [
          { name: "Bill Gates", category: "Tech" },
          { name: "Steve Jobs", category: "Entertainment" },
			    { name: "Jeff Bezos", category: "Fictional" }
          ],
        frouts: [
          { name: 'Apple', count: 10,},
          { name: 'Orange', count: 5,},
          { name: 'Banana', count: 20,},
          ],  
          selectCategory: "All",
      }
    },
    computed: {
      filteredPeople: function () {
        var vm = this;
        var category = vm.selectCategory;
        if(category === "Popluar") {
          return vm.people;
        }
        else{
          return vm.people.filter (function(person) {
            return person.category === category;
          });
        }
      },
        filteredFrouts: function() {
      return this.frouts.filter(function(item) {
        return item.count > 1;
      });
    },
    }  
};    

</script>
