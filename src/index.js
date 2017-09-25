import Vue from './vue.js'
import Watcher, { observify } from './data.js'

var obj = observify({
  a: {
    b: {
      c: 1
    }
  }
})

new Watcher(obj, 'a', (value) => {
  console.log('发生了改变', value)
})

new Watcher(obj, 'a', (value) => {
  console.log('a的某个属性发生了改变', value)
}, true)


// obj.a.b = {
//   c: 'ssss'
// }

obj.a.b.c = 3
const vm = new Vue({
  el: 'body',
  data () {
    return {
      msg: 'hello world',
      test: {
        a: 1
      },
      a: 1,
      b: 2,
      arr: [1, 2, 3],
      style: {
        color: '#ff0000',
        fontSize: '24px'
      },
      showBtn: true
    }
  },
  render (dom) {
    return dom.div({
      class: 'test'
    },
      dom.p({
        '@click': (e) => alert('you click this p node!'),
      }, () => {
        return `a + b = ${this.a + this.b}`
      }),
      dom.p({
        ':style': 'style',
        ':name': 'test.a',
        '$text': 'test.a'
      }),
      dom.p({
        ':style': {
          color: () => this.style.color,
          fontSize: () => this.style.fontSize
        }
      }, 'sdfsdfsdf'),
      dom.input({
        '$model': 'style.color',
        'type': 'color'
      }),
      dom.p({
        '$html': () => `<a href="https://www.baidu.com">${this.test.a}</a>`
      }),
      dom.input({
        '$model': 'test.a',
        type: 'text'
      }),
      () => this.msg,
      () => this.test.a
    )
  }
})

// // vm.test = { a: 3 }
// // vm.test.a = 4
// vm.a = 1
// vm.a = 2
// vm.a = 3
// vm.a = 4
// vm.a = 5
// vm.b = 10
// vm.msg = 'sssss'
// vm.msg = '2222'

// vm.arr[1] = 'sdfsdf'
// vm.arr.push(1)
// console.log('splice=>>>>>')
// vm.arr.splice(0, 1, 2)
// console.log('pop=>>>>>')
// vm.arr.pop()
// console.log('reverse=>>>>>')
// vm.arr.reverse()
// setInterval(_ => {
//   vm.msg = 'hello world =>>>' + new Date()
// }, 1000)