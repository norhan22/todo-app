<template>
  <div class="e-nuxt-container">
    <div class="e-nuxt-content">
      <div class="e-nuxt-logo">
        <h1>TODO</h1>
        <form class="e-nuxt-form" @submit.prevent="save">
          <label>Add new Task</label>
          <input v-model="newTask" type="text">
          <span v-if="error" class="error">{{ error }}</span>
        </form>
        <ul>
          <li v-for="(task,i) in tasks" :key="i">
            <input v-model="task.isDone" type="checkbox">
            <span :style="task.isDone?'text-decoration: line-through;':''">{{ task.content }}</span>
          </li>
        </ul>
      </div>
      <div class="e-nuxt-system-info"/>
    </div>
  </div>
</template>

<script>
import server from '../../server/index.js'

export default {
  name: 'Todo',
  data: () => {
    return {
      newTask: '',
      tasks: [],
      error: ''

    }
  },
  computed: {},
  methods: {
    save() {
      if (!this.newTask) return false
      else {
        server.todo.addTask({
          content: this.newTask,
          isDone: false
        })
            .then((res) => {
              console.log(res)
              this.tasks = res
              this.newTask = ''
            })
            .catch((err) => {
              this.error = err
            })


      }
    }
  },
  created() {
    this.tasks = server.todo.getAllTasks()
  }
}
</script>

<style scoped>

</style>
