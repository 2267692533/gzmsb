<template>
  <div>
    <span>{{minute}}:{{second}}</span>
  </div>
</template>

 

<script>
export default {
  data() {
    return {
      minutes: 5,

      seconds: 0
    };
  },

  created() {},

  mounted() {
    this.add();
  },

  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      }
    },

    minute: {
      handler(newVal) {
        this.num(newVal);
      }
    }
  },

  computed: {
    second: function() {
      return this.num(this.seconds);
    },

    minute: function() {
      return this.num(this.minutes);
    }
  },

  methods: {
    num: function(n) {
      return n < 10 ? "0" + n : "" + n;
    },

    add: function() {
      var _this = this;

      var time = window.setInterval(function() {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;

          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;

          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    }
  }
};
</script>