import SimpleInject from '../SimpleInject'

export default {
  name: 'simple-provide',
  data(){
    return {
      count: 1,
    }
  },
  provide(){
    return {'count': this.count}
  },
  components: {
    SimpleInject
  }
}