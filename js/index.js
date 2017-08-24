
var app = new Vue({
  el: '#app',
  data: {
    name_output: '',
    add_output: ''
  },
  methods: {
    showTheName () {
      this.name_output = this.$refs.name.value
    },
    addValues() {
      this.add_output = parseInt(this.$refs.n1.value) + parseInt(this.$refs.n2.value)
    }
  }
})