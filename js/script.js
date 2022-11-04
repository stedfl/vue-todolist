const {createApp} = Vue;
createApp({
  data() {
    return {
      errorMessage: '',
      counterDone: 0,
      counterUndone: 0,
      logoImg: {path:'img/logo.png', name: 'logo Boolean' },
      tasks: [
        {
          text: 'Andare a fare la spesa',
          done: true
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
    counterTask() {
      this.counterDone = 0;
      this.counterUndone = 0;
      for (task of this.tasks) {
        if(task.done) {
          this.counterDone++;
        } else {
          this.counterUndone++
        }
      }
    },
    toggleTask(index) {
      this.tasks[index].done = !this.tasks[index].done
    }

  },
  mounted() {
    this.counterTask()
  }
}).mount("#app");