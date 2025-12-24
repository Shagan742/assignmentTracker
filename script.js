const vue_app = Vue.createApp({
    created() {
        fetch("classes.json").then(response => response.json()).then(json => {
            this.classes=json
        })
    },
    data() {
        return {
            classes: []
        }
    },
    methods: {
        //a
    },
    computed: {
        //a
    }

}) 


vue_app.mount('#app');