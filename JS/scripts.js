let app = new Vue({
  el: '.wrapper',
  data: {
    info: [{
        name: 'Name',
        value: '',
        pattern: /^[a-zA-Z ]{2,30}$/
      },
      {
        name: 'Phone',
        value: '',
        pattern: /^[0-9]{7,14}$/
      },
      {
        name: 'Email',
        value: '',
        pattern: /.+/
      },
      {
        name: 'Some Field 1',
        value: '',
        pattern: /.+/
      },
      {
        name: 'Some Field 2',
        value: '',
        pattern: /.+/
      }
    ],
    text: 'Привет'
  },
  methods: {
    isNameValid() {
      return this.item.pattern.test(this.item.value);
    }
  }
});