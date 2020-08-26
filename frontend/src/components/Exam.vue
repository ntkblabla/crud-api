<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Question List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(exambank, index) in exambanks"
          :key="exambank.title"
          @click="setActiveQuestion(exambank, index)">
          {{ exambank.title }}
        </li>
        
      </ul>
      <button class="m-3 btn btn-sm btn-danger" @click="removeAllQuestion">
        Remove All
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentQuestion">
        <h4>Question</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentQuestion.title }}
        </div>
        <div>
          <label><strong>Choice1</strong></label> {{ currentQuestion.choice1 }}
        </div>
         <div>
          <label><strong>Choice2</strong></label> {{ currentQuestion.choice2 }}
        </div>
         <div>
          <label><strong>Choice3</strong></label> {{ currentQuestion.choice3 }}
        </div>
         <div>
          <label><strong>Choice4</strong></label> {{ currentQuestion.choice4 }}
        </div>
         <div>
          <label><strong>Answer</strong></label> {{ currentQuestion.answer }}
        </div>
        

        <a class="badge badge-warning"
          :href="'/exambanks/' + currentQuestion.id"
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
import ExamBankDataService from "../services/ExamBankDataService";
export default {
  
  data() {
    return {
      exambanks: [],
      currentQuestion: null,
      currentIndex: -1,
      title: "",
      turn_on: null
    };
  },
  methods: {
    retrieveQuestion() {
      ExamBankDataService.getAll()
        .then(response => {
          this.exambanks = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
   
    setActiveQuestion(exambank, index) {
      this.currentQuestion = exambank;
      this.currentIndex = index;
    },
    refreshList() {
      this.retrieveQuestion();
      this.currentQuestion = null;
      this.currentIndex = -1;
    },
    removeAllQuestion() {
      ExamBankDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveQuestion();
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