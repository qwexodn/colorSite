<template>
    <div class='content'>
        <CardView :color='color'></CardView>
    </div>
</template>

<script>
import CardView from './CardView';

export default {
    components:{
        CardView,
    },
    data(){
        return{
            color:'#fac',
        }
    }
}
</script>
<style lang="scss" scoped>
.content{
    padding:10px;
}
</style>
