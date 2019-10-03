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
    controls: [],
    formSubmited: false
  },
  beforeMount() {
    for(let i = 0; i < this.info.length; i++) {
      this.controls.push({
          error: true,
          activated: false
      });
    }
  },
  methods: {
    onInput(index, value) {
      let data = this.info[index];
      let control = this.controls[index];

      data.value = value;
      control.error = !data.pattern.test(value);
      control.activated = true;
    }
  },
  computed: {
    done() {
      let done = 0;
      for(let i = 0; i < this.info.length; i++) {
        if(!this.controls[i].error) {
          done++;
        }
      }
      return done;
    },
    progressWidth() {
      return {
        width: (100 / this.info.length * this.done) + '%'
      }
    }
  }
});