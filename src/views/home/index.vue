<template>
    <div>
        <TypeNav />
        <List />
        <Today />
        <Rank />
        <Like />
        <Floor />
        <Floor />
        <Brand />

    </div>
</template>

<script>
import List from './List'
import Today from './Today'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
export default {
    name:"",
    components:{
        List,
        Today,
        Rank,
        Like,
        Floor,
        Brand
    },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style scoped lang="less">

</style>
