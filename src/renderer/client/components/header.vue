<template>
  <header class="main-header">

    <h4>TODO </h4>
    <h6 v-if="DBFolderPath">The JSON file is located at: {{ DBFolderLocations }}</h6>

    <!--    <nav>-->
    <!--      <div>-->
    <!--        <nuxt-link-->
    <!--          to="/"-->
    <!--          exact-->
    <!--        >-->
    <!--          TODO APP-->
    <!--        </nuxt-link>-->
    <!--      </div>-->
    <!--      <div>-->
    <!--    -->
    <!--      </div>-->
    <!--    </nav>-->
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data: () => ({
    DBFolderPath: ''
  }),
  computed: {
    // DBFolderPath() {
    //   return window.localStorage.getItem('DBFolderPath')
    // },
    DBFolderLocations() {
      return this.DBFolderPath + "/tasks.json"
    },

  },
  watch: {},
  mounted() {
    setTimeout(() => {
      this.DBFolderPath = window.localStorage.getItem('DBFolderPath')
    }, 1000)

  }
}
</script>

<style scoped>
.main-header {
  height: 50px;
  display: flex;
  background-color: #364758;
  justify-content: space-between;
  color: white;
  align-items: center;
  padding: 2px 5px;
}

nav {
  width: 100%;
  display: flex;
  justify-content: center;
}

nav div {
  height: 100%;
  margin: 0 20px;
  display: flex;
  align-items: center;
}

a {
  font-family: Helvetica, sans-serif;
  color: white;
  font-size: 1rem;
  font-weight: 100;
  text-decoration: underline;
  text-transform: uppercase;
}

a:hover {
  opacity: 0.9;
}
</style>
