import PromiseInject from "../PromiseInject"

export default {
  data() {
    return {
      parentMessage: "Hello World",
    }
  },
  methods: {
    handlePromise: function (resolve, reject) {
      this.$on('button-push', resolve)
    },
    buttonClick: function () {
      this.$emit('button-push', this.parentMessage)
    }
  },
  components: {
    PromiseInject
  },
  provide: function () {
    return {
      providedPromise: new Promise(this.handlePromise)
    }
  }
}