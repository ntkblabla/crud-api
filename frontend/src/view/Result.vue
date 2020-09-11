<template>
  <div class="list row">
    <div class="flex" style="width: 1000px , display: flex" >
      <h4>Result List</h4> 
      <div class="input-group mb-3" style="width:500px">
        <input type="text" class="form-control" placeholder="Search by username"
          v-model="searchName"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="filter"
          >
            Search
          </button>
         </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Sort by marks</button>
          <div class="dropdown-content">
            <button class="btn btn-outline-secondary" type="button"
             @click="sortASC">ASC</button>
            <button class="btn btn-outline-secondary" type="button"
             @click="sortDESC">DESC</button>
          </div>
        </div>
       
      </div>
      <table class="table table-hover">
    <thead>
      <tr>
        <th>Username</th>
        <th>Marks</th>
        <th>Created at</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(result) in results"
          :key="result.id">
        <td>{{result.username}}</td>
        <td>{{result.marks}}</td>
        <td>{{result.createdAt}}</td>
      </tr>
      
    </tbody>
  </table>
    
  </div>
</template>

<script>
import ResultDataService from "../services/ResultDataService";
export default {
  name:"result",
  data() {
    return {
      results: [],
      title: "",
      searchName:"",
      sortByPrice: true,
    };
  },
  methods: {
    retrieveResult() {
      ResultDataService.getAll()
        .then(response => {
          this.results = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    filter(){
      this.results = this.results.filter(result => result.username === this.currentUser.username )
      // this.results = this.results.filter(result => result.username === this.searchName )
      return;
    },
    sortASC(){
      if(this.sortByPrice){
       return this.results.sort(function(a,b){
          return a.marks - b.marks;
       })
    }
    },
    sortDESC(){
      if(this.sortByPrice){
       return this.results.sort(function(a,b){
          return b.marks - a.marks;
       })
    }
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    this.retrieveResult();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 1000px;
  margin: auto;
}
.dropbtn {
  background-color: #fff;
  color: #6c757d;
  border: 1px solid ;
  border-color: #6c757d;
  padding: 6px;
  font-size: 16px; 
  border-radius: .25rem;
  cursor: pointer;
  width: 140px;
}

.dropdown {
  position: relative;
  display: inline-block;
  margin-left: 860px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  z-index: 1;
}

.dropdown-content button {
  color: black;
  padding: 2px 6px;
  text-decoration: none;
  display: block;
  width: 88px;
  height: 35px;
  
}

.dropdown-content button:hover {background-color: #6c757d}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #6c757d;
  color: #fff;
}
</style>