<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>User List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(user, index) in users"
          :key="index"
          @click="setActiveUser(user, index)"
        >
          {{ user.username }}
        </li>
      </ul>

      
    </div>
    <div class="col-md-6">
      <div v-if="currentUser">
        <h4>User</h4>
        <div>
          <label><strong>Username:</strong></label> {{ currentUser.username }}
        </div>
        <div>
          <label><strong>Password:</strong></label> {{ currentUser.password }}
        </div>
         <div>
          <label><strong>Email:</strong></label> {{ currentUser.email }}
        </div>
        

        <a class="badge badge-warning"
          :href="'/users/' + currentUser.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div>
  </div>
</template>

<script>
import UserDataService from "../services/UserDataService";
export default {
  name: "users-list",
  data() {
    return {
      users: [],
      currentUser: null,
      currentIndex: -1,
      username: ""
    };
  },
  methods: {
    retrieveUser() {
      UserDataService.getAll()
        .then(response => {
          this.users = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveUser(user, index) {
      this.currentUser = user;
      this.currentIndex = index;
    },
  
  },
  mounted() {
    this.retrieveUser();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>