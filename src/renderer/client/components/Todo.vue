<template>
  <div class="e-nuxt-container">
    <div class="e-nuxt-content">
      <div class="e-nuxt-logo">
        <p class="msg-container">
          <span class="error">{{ error }}</span>
          <span class="success">{{ successMsg }}</span>
        </p>
        <h1>TODO</h1>
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
            <form class="e-nuxt-form" @submit.prevent="edit(task)" v-else>
              <input type="text" v-model.trim="task.content">
            </form>
            <div>
              <button type="button" v-if="!task.editable" @click="()=>{task.editable = true}">Edit</button>
              <button type="button" @click="deleteTask(task.id)" class="danger">X</button>
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
    }
  },
  methods: {
    ///////////////////
    // APIs
    //////////////////
    addNew() {
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
              this.successMsg = 'Added Successfully'
            })
            .catch((err) => {
              this.error = err
            })


      }
    },
    taskDone(task) {
      this.todoRepo.doneTask(task.id, task.isDone)
          .then((res) => {
            this.successMsg = 'Saved Successfully'
          })
          .catch((err) => {
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
          .catch((err) => {
            this.error = err

          })
    },
    edit(task) {
      this.todoRepo.editTask(task.id, task)
          .then((res) => {
            task.editable = false
            this.successMsg = 'Saved Successfully'
          })
          .catch((err) => {
            this.error = err

          })

    }

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
  }
}
</script>

<style scoped>

</style>
