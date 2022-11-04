const {createApp} = Vue;
createApp({
  data() {
    return {
      errorMessage: '',
      logoImg: {path:'img/logo.png', name: 'logo Boolean' },
      tasks: [
        {
          text: 'Andare a fare la spesa',
          done: false
        },
        {
          text: 'pagare bolletta luce',
          done: false
        },
        {
          text: 'comprare il regalo per Elisabetta',
          done: true
        }
      ]
    }
  },
  methods: {
    counterDoneTask() {
      this.taskCounter = 0;
      for (task of this.tasks) {
        if (!task.done) {
          this.taskCounter++;
        }
      }
      return this.taskCounter
    }

  }
}).mount("#app");