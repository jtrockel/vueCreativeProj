let app = new Vue({
  el: '#app',
  data: {
    slip: {
      advice: '',
      slip_id: '',
    },
    advice:''
  },
  created() {
    this.fortune();
  },
  methods: {
    async fortune() {
      try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        this.data = response.data;
        this.advice = this.data.slip.advice
        console.log(this.data.slip.advice);
      } catch (error) {
      }
    },
    newAdvice() {
      this.fortune()
    },
  },computed: {
    
  },
  watch: {
  },
  
})