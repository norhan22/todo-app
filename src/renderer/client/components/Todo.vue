<template>
  <div class="e-nuxt-container">
    <div class="e-nuxt-content">
      <div class="e-nuxt-logo">
        <h1>TODO</h1>
        <form class="e-nuxt-form" @submit.prevent="save">
          <label>Add new Task</label>
          <input v-model="newTask" type="text">
        </form>
        <ul>
          <li v-for="(task,i) in list" :key="i">
            <input v-model="task.isDone" type="checkbox">
            <span :style="task.isDone?'text-decoration: line-through;':''">{{ task.content }}</span>
          </li>
        </ul>
      </div>
      <div class="e-nuxt-system-info" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data: () => {
    return {
      newTask: '',
      list: []
    }
  },
  methods: {
    save () {
      if (!this.newTask) return false
      else {
        this.list.push({
          content: this.newTask,
          isDone: false
        })
        this.newTask = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
