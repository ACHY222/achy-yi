Vue.crreateApp({
    data() {
        return {
            items: [
                { title: '第一張', subtitle: '第一子標題', bg: '/images/dog.jpeg' },
                { title: '第二張', subtitle: '第二子標題', bg: '/images/banner.jpeg' },
                { title: '第三張', subtitle: '第三子標題', bg: '/images/process.jpeg' },

            ]
        }
    }
}).mount('#app-slider');