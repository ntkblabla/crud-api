<template>
  <div v-if="currentQuestion" class="edit-form">
    <h4>Question</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title"
          v-model="currentQuestion.title"
        />
      </div>
      <div class="form-group">
        <label for="choice1">Choice1</label>
        <input type="text" class="form-control" id="choice1"
          v-model="currentQuestion.choice1"
        />
      </div>
      <div class="form-group">
        <label for="choice2">Choice2</label>
        <input type="text" class="form-control" id="choice2"
          v-model="currentQuestion.choice2"
        />
      </div>
      <div class="form-group">
        <label for="choice3">Choice3</label>
        <input type="text" class="form-control" id="choice3"
          v-model="currentQuestion.choice3"
        />
      </div>
      <div class="form-group">
        <label for="choice4">Choice4</label>
        <input type="text" class="form-control" id="choice4"
          v-model="currentQuestion.choice4"
        />
      </div>
      <div class="form-group">
        <label for="answer">Answer</label>
        <input type="text" class="form-control" id="answer"
          v-model="currentQuestion.answer"
        />
      </div>

      
    </form>
    
    <button class="badge badge-danger mr-2"
      @click="deleteQuestion"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateQuestion"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Quesstion...</p>
  </div>
</template>

<script>
import ExamBankDataService from "../services/ExamBankDataService";
export default {
  name: "exambank",
  data() {
    return {
      currentQuestion: null,
      message: ''
    };
  },
  methods: {
    getQuestion(id) {
      ExamBankDataService.get(id)
        .then(response => {
          this.currentQuestion = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateQuestion() {
      ExamBankDataService.update(this.currentQuestion.id, this.currentQuestion)
        .then(response => {
          console.log(response.data);
          this.message = 'The exam was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteQuestion() {
      ExamBankDataService.delete(this.currentQuestion.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "exambanks" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getQuestion(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>