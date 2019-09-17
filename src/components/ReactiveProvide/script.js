import ReactiveInject from "../ReactiveInject"

export default {
  data() {
    return {
      parentMessage: "Hello World",
    }
  },
  provide() {
    return {
      getParentMessage: ()=>this.parentMessage,
      setParentMessage: (v)=>this.parentMessage = v,
    }
  },
  components: {
    ReactiveInject
  },
}
