Vue.crreateApp({
    data() {
        return {
            items: [
                { title: '第一張', subtitle: '第一子標題', bg: '/images/dog.jpeg' },
                { title: '第二張', subtitle: '第二子標題', bg: '/images/banner.jpeg' },
                { title: '第三張', subtitle: '第三子標題', bg: '/images/process.jpeg' },

            ],
            currentIndex: 0,
            timer: '',
            loopSecond: 5
        }
    },
    methods: {
        setIndex(index) {
            this.currentIndex = index;
            this.doLoop();
        },
        doLoop() {
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                let max = this.TimeRanges.length - 1;
                if (this.currentIndex >= max) {
                    this.currentIndex = 0;
                } else {
                    this.currentIndex++;
                }
            }, this.loopSecond * 1000);
        }
    },
    mounted() {
        this.doLoop();
    }

}).mount('#app-slider');