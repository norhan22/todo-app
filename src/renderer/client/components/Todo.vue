<template>
  <div class="e-nuxt-container">
    <div class="e-nuxt-content">
      <div class="e-nuxt-logo">
        <p class="msg-container">
          <span class="error">{{ error }}</span>
          <span class="success">{{ successMsg }}</span>
        </p>

        <form class="e-nuxt-form" @submit.prevent="addNew">
          <label>Add new Task</label>
          <input v-model="newTask" type="text">
        </form>
        <ul>
          <li v-for="(task,i) in tasks" :key="i" class="task">
            <div v-if="!task.editable">
              <input v-model="task.isDone" type="checkbox" @change="taskDone(task)">
              <span :class="{'done':task.isDone}"> {{ task.content }}  </span>
            </div>
            <form v-else class="e-nuxt-form" @submit.prevent="edit(task)">
              <input v-model.trim="task.content" type="text">
            </form>
            <div>
              <button v-if="!task.editable" type="button" @click="()=>{task.editable = true}">Edit</button>
              <button type="button" class="danger" @click="deleteTask(task.id)">X</button>
            </div>
          </li>
        </ul>
      </div>
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
      error: '',
      successMsg: ''

    }
  },
  computed: {
    todoRepo() {
      return server.todo
    },

  },
  created() {
    this.tasks = this.todoRepo.getAllTasks()
  },
  updated() {
    if (this.error || this.successMsg) {
      setTimeout(() => {
        this.error = this.successMsg = ''
      }, 5000)
    }
  },
  methods: {
    /// ////////////////
    // APIs
    /// ///////////////
    addNew() {
      if (!this.newTask) return false
      else {
        server.todo.addTask({
          content: this.newTask,
          isDone: false
        })
            .then(res => {
              console.log(res)
              this.tasks = res
              this.newTask = ''
              this.successMsg = 'Added Successfully'
            })
            .catch(err => {
              this.error = err
            })
      }
    },
    taskDone(task) {
      this.todoRepo.doneTask(task.id, task.isDone)
          .then(res => {
            this.successMsg = 'Saved Successfully'
          })
          .catch(err => {
            this.error = err
            task.isDone = !task.isDone
          })
    },
    deleteTask(id) {
      this.todoRepo.removeTask(id)
          .then(res => {
            this.tasks = res
            this.successMsg = 'Deleted Successfully'
          })
          .catch(err => {
            this.error = err
          })
    },
    edit(task) {
      this.todoRepo.editTask(task.id, task)
          .then(res => {
            task.editable = false
            this.successMsg = 'Saved Successfully'
          })
          .catch(err => {
            this.error = err
          })
    }

  }
}
</script>

<style scoped>

</style>
