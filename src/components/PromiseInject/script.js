export default {
  name: "promise-inject",
  data: function () {
    return {
      childMessage: 'I am waiting on a promise!'
    }
  },
  methods: {
    changeChildMessage: function (response) {
      this.childMessage = response
    }
  },
  inject: ['providedPromise'],
  mounted: function () {
    this.providedPromise
        .then(response=>this.changeChildMessage(response))
  }
}