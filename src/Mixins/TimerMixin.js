export const timerMixin = {
  data() {
    return {
      progress: 0,
      show: true,
      binder: null,
    };
  },
  //Timer controls
  methods: {
    // Starting timer with setInteral to keep the time count.
    // Apparently vue does not handle setInterval and setTimout without binding to a higher scop
    // Therefore, I had to bind it to the VUe instans via a Data property.
    start() {
      this.binder = setInterval(() => {
        this.progress++;
      }, 1000);
    },
    stop() {
      clearInterval(this.binder);
      this.binder = setTimeout(() => {
        this.tgShow();
      }, 1500);
    },
    tgShow() {
      this.show = !this.show;
    },
  },

  //Stopping timer after 20 secs
  watch: {
    progress: function() {
      if (this.progress === 20) {
        this.stop();
      }
    },
  },
  created() {
    this.start();
  },
  //Making sure that setInterval does not over load
  beforeDestroy() {
    clearInterval(this.binder);
  },
};
