<template>
    <div class="pages-view">
        <header-bar @showTalion="open"></header-bar>
        <router-view></router-view>
    </div>
</template>

<script>
    import HeaderBar from '../../components/header/heade'


    export default {
        name: 'pages-view',
        components: { HeaderBar },
        data () {
            return {
                talion: ''
            }
        },
        methods: {
            open: function () {
                this.talion = 'open'
            },
            close: function () {
                this.talion = ''
            }
        }
    }
</script>

<style scoped>

</style>
