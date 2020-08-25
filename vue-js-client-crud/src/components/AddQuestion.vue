<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="exambank.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="choice1">Choice1</label>
        <input
          class="form-control"
          id="choice1"
          required
          v-model="exambank.choice1"
          name="choice1"
        />
      </div>

      <div class="form-group">
        <label for="choice2">Choice2</label>
        <input
          class="form-control"
          id="choice2"
          required
          v-model="exambank.choice2"
          name="choice2"
        />
      </div>

      <div class="form-group">
        <label for="choice3">Choice3</label>
        <input
          class="form-control"
          id="choice3"
          required
          v-model="exambank.choice3"
          name="choice3"
        />
      </div>

      <div class="form-group">
        <label for="choice4">Choice4</label>
        <input
          class="form-control"
          id="choice4"
          required
          v-model="exambank.choice4"
          name="choice4"
        />
      </div>

      <div class="form-group">
        <label for="answer">Answer</label>
        <input
          class="form-control"
          id="answer"
          required
          v-model="exambank.answer"
          name="answer"
        />
      </div>

      <!-- <div class="form-group">
        <label for="answer">Answer</label>
        <span
          class="form-control"
          id="answer"
          required
          v-bind="exambank.answer"
          name="answer" >
        fdfdfdfd</span>
      </div> -->

     

      <button @click="saveQuestion" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newQuestion">Add</button>
    </div>
  </div>
</template>

<script>
import ExamBankDataService from "../services/ExamBankDataService";
export default {
  name: "add-question",
  data() {
    return {
      exambank: {
        id: null,
        title: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: "",
        
      },
      submitted: false
    };
  },
  methods: {
    saveQuestion() {
      var data = {
        title: this.exambank.title,
        choice1: this.exambank.choice1,
        choice2: this.exambank.choice2,
        choice3: this.exambank.choice3,
        choice4: this.exambank.choice4,
        answer: this.exambank.answer
      };
      ExamBankDataService.create(data)
        .then(response => {
          this.exambank.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newQuestion() {
      this.submitted = false;
      this.exambank = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>