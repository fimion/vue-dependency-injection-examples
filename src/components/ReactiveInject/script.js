export default {
  name:"reactive-inject",
  inject: ["getParentMessage", "setParentMessage"],
  computed: {
    injectedMessage: {
      get: function () {
        return this.getParentMessage()
      },
      set: function (d) {
        this.setParentMessage(d)
      },
    }
  },
}