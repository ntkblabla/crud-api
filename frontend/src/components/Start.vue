<template>
   <div class="test" style="display:flex">
     <div class="list_row" style="margin-left:">
       <div class="col-md-6">
        <h4>ĐỀ THI THỬ LẦN 1</h4>
        <ul class="list-group">
          <li class="list-group-item" :class="{ active: index == currentIndex }"
          v-for="(exambank, index) in exambanks"
          @click="setActiveQuestion(exambank, index)"
          :key="exambank">

            <div class="number_question"
            >Câu {{index = index + 1}}</div>
          
            <div class="question_content">{{ exambank.title }}</div>

            <div  @click="[exambank.selected = exambank.choice1]"><span class="label">A.</span> {{exambank.choice1}}</div>

            <div  @click="[exambank.selected = exambank.choice2]"><span class="label">B.</span> {{exambank.choice2}}</div>

            <div  @click="[exambank.selected = exambank.choice3]"><span class="label">C.</span> {{exambank.choice3}}</div>

            <div  @click="[exambank.selected = exambank.choice4]"><span class="label">D.</span> {{exambank.choice4}}</div>

            </li>
        
      </ul>
      
      
      </div>
     </div>
    <div class="right">
                <div class="rightcontainer">
                        <div class="timechoice">Chọn thời gian</div>
                        <div class="choice" style="display: flex;">
                        <div class="time1" v-if="on1"><button @click="countDownTimer1" >60 phút</button></div>
                        <div class="time2" v-if="on2"><button @click="countDownTimer2" >45 phút</button></div>
                        <div class="time3" v-if="on3"><button @click="countDownTimer3" >30 phút</button></div>
                        </div>
                        <div class="timepost">Thời gian còn lại</div>
                        <div class="clock" >
                            <div id="base-timer-label" class="base-timer__label">{{minutes}}:{{seconds}}</div>
                        </div>
                        <div class="checkanswer">
                            <div class="answeritem" id="01" @click="scroll1" >1</div>
                            
                            <div class="answeritem" id="02" @click="scroll2" >2</div>
                            
                            <div class="answeritem" id="03" @click="scroll3" >3</div>
                            
                            <div class="answeritem" id="04" @click="scroll4" >4</div>
                            
                            <div class="answeritem" id="05" @click="scroll5" >5</div>
                            
                            <div class="answeritem" id="06" @click="scroll6" >6</div>
                            
                            <div class="answeritem" id="07" @click="scroll7" >7</div>
                            
                            <div class="answeritem" id="08" @click="scroll8" >8</div>
                            
                            <div class="answeritem" id="09" @click="scroll9" >9</div>
                            
                            <div class="answeritem" id="010" @click="scroll10" >10</div>
                            
                        </div>
                        <button class="m-3 btn btn-sm btn-danger" @click="submit" style="width: 75%">Submit</button>
                        <div v-if="turn_on" class="result-wrap" >You scored {{marks()}} Points</div>
                        <div v-else></div>
                         
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
      turn_on: null,
      countDown1 : 3600,
      countDown2 : 2700,
      countDown3 : 1800,
      seconds:null,
      minutes:null,
      on1 : true,
      on2 : true,
      on3 : true,
      number : 1,
      isActive: false
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
    // setActiveQuestion(exambank, index) {
    //   this.currentQuestion = exambank;
    //   this.currentIndex = index;
    // },
     marks() {
      var correct = this.exambanks.filter(exambank => exambank.selected === exambank.answer);
      return correct.length * 10;
    },
    submit(){
      this.turn_on = true ;
    },
    countDownTimer1() {
                if(this.countDown1 > 0) {
                    setTimeout(() => {
                        this.countDown1 -= 1
                        this.minutes = Math.floor(this.countDown1 / 60)
                        this.seconds = this.countDown1 % 60
                        if(this.seconds < 10){
                          this.seconds = "0"+this.seconds
                        }
                        this.countDownTimer1()
                    }, 1000)
                }
    },
    countDownTimer2() {
                if(this.countDown2 > 0) {
                    setTimeout(() => {
                        this.countDown2 -= 1
                        this.minutes = Math.floor(this.countDown2 / 60)
                        this.seconds = this.countDown2 % 60
                        if(this.seconds < 10){
                          this.seconds = "0"+this.seconds
                        }
                        this.countDownTimer1()
                    }, 1000)
                }
    },
    countDownTimer3() {
                if(this.countDown3 > 0) {
                    setTimeout(() => {
                        this.countDown3 -= 1
                        this.minutes = Math.floor(this.countDown3 / 60)
                        this.seconds = this.countDown3 % 60
                        if(this.seconds < 10){
                          this.seconds = "0"+this.seconds
                        }
                        this.countDownTimer3()
                    }, 1000)
                }
    },
    turnoff1(){
      this.on1 = false ;
    },
    turnoff2(){
      this.on2 = false ;
    },
    turnoff3(){
      this.on3 = false ;
    },
    plus(){
      this.number = this.number + 1
    },
    scroll1(){
      var el = this.$el.getElementsByClassName("number_question")[0];
      el.scrollIntoView();
      
    },
    scroll2(){
      var el = this.$el.getElementsByClassName("number_question")[1];
      el.scrollIntoView();
    },
    scroll3(){
      var el = this.$el.getElementsByClassName("number_question")[2];
      el.scrollIntoView();
    },
    scroll4(){
      var el = this.$el.getElementsByClassName("number_question")[3];
      el.scrollIntoView();
    },
    scroll5(){
      var el = this.$el.getElementsByClassName("number_question")[4];
      el.scrollIntoView();
    },
    scroll6(){
      var el = this.$el.getElementsByClassName("number_question")[5];
      el.scrollIntoView();
    },
    scroll7(){
      var el = this.$el.getElementsByClassName("number_question")[6];
      el.scrollIntoView();
    },
    scroll8(){
      var el = this.$el.getElementsByClassName("number_question")[7];
      el.scrollIntoView();
    },
    scroll9(){
      var el = this.$el.getElementsByClassName("number_question")[8];
      el.scrollIntoView();
    },
    scroll10(){
      var el = this.$el.getElementsByClassName("number_question")[9];
      el.scrollIntoView();
    },
  },
  created() {
           this.plus();
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
.test{
  width: 1200px;
  padding: 0 20px;
}
.list_row{
  width: 65%;
}
.col-md-6{
  max-width: 90%;
}
.right{
    width: 300px;
    margin: 0;
    height: 100vh;
    overflow-y: visible;
    position: relative;
    box-sizing: border-box;
    position: fixed;
    top: 30px;
    left: 68%;
}
.rightcontainer{
    width: 100%;
    height: 100%;
    margin: 10px 0;
    border-radius: 4px;
    padding-bottom: 10px;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: visible;
    position: relative;
}
.timepost{
    width: calc(100% - 40px);
    margin: 20px 20px 10px;
    font-family: Roboto,sans-serif;
    font-size: 20px;
    font-weight: 900;
    color: #444;
}
.timetext{
    width: calc(100% - 40px);
    margin: 20px 20px 10px;
    font-family: Roboto,sans-serif;
    font-size: 20px;
    font-weight: 900;
    color: #444;
    box-sizing: border-box;
}
.checkanswer{
    width: calc(100% - 50px);
    margin: 15px 10px 10px 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
}
.answeritem{
    width: 30px;
    height: 30px;
    border-radius: 4px;
    margin: 0 2.8px 2.8px 0;
    background-color: #f5f5f5;
    line-height: 30px;
    text-align: center;
    font-family: Roboto,sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #444;
    cursor: pointer;
    user-select: none;
}
.submit{
    width: calc(100% - 40px);
    margin: 10px 20px;
}
.btn{
    font-size: 14px;
    font-weight: 700;
    font-family: Roboto,sans-serif;
    color: #fff;
    background: #2392ec;
    padding: 1rem 0;
    width: 100%;
    letter-spacing: .02rem;
    border-radius: 4px;
    border: 4px #2392ec;
    transition: background .15s ease-in-out,transform .1s ease,-webkit-transform .1s ease;
    cursor: pointer;
    position: relative;
}
.btn:hover{
    background: #1a83d8;
}

.active, .active2, .active3, .active4, .active5, .active6, .active7, .active8, .active9, .active10, .active11, .active12, .active13, .active14, .active15, .active16, .active17, .active18, .active19, .active20, .active21, .active22, .active23, .active24, .active25, .active26, .active27, .active28, .active29, .active30 {
    background: #d9edfe;
    color: #2392ec;
}
.timechoice{
    width: calc(100% - 40px);
    margin: 20px 20px 10px;
    font-family: Roboto,sans-serif;
    font-size: 20px;
    font-weight: 900;
    color: #444;
}
.choice{
    margin: 20px 20px 10px;
}
.choice div{
    padding-right: 10px;
    
}
.choice button{
    background: #2392ec;
    color: #fff;
    border: 4px #2392ec;
    border-radius: .25rem;
    cursor: pointer;
}
.clock{
    margin: 20px 20px 10px;
}
.clock div{
    width: 220.5px;
    height: 72.5px;
    text-align: center;
    line-height: 70px;
    border-radius: 4px;
    color: #2392ec;
    background-color: #d9edfe;
    font-family: Roboto,sans-serif;
    font-weight: 900;
    font-size: 35px;
    margin: 0;
}
.list-group-item{
  border: none;
  width: 100%;
  padding: 0 0 20px;
  margin: 10px 0 0;
  background: #fff;
  border-bottom: 2px solid #f0f0f0;
}
.number_question{
  width: 100%;
  height: 25px;
  line-height: 25px;
  font-family: Noto Serif JP,serif;
  font-weight: 700;
  font-size: 15px;
  color: #2392ec;
  margin: 15px 0 0;
}
.question_content{
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Noto Serif JP,serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.5;
  color: #444;
}
.label{
  font-family: Noto Serif JP,serif;
  font-weight: 700;
  color: #2392ec;
  width: 20px;
  margin: 0 0 0 10px;
  text-align: left;
  padding-right: 5px;
}
.result-wrap{
  font-weight: 700;
  margin-left: 50px;
}
</style>