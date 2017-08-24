
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
      var num1 = parseInt(this.$refs.n1.value);
      var num2 = parseInt(this.$refs.n2.value);

      // error check: 檢查文字輸入框內是否皆為數字
      try {
        if (isNaN(num1) || isNaN(num2)) throw "文字輸入框內皆為數字才能計算結果";
        this.add_output = num1 + num2

      } catch(err) {
        var error_message = alert(err);
        document.getElementById("error_check").innerHTML = error_message;
      }
      
    }
  }
})