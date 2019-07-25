<template>
    <div class='card-content' draggable="true">
        <div class='color'>
            <div class='color-code hidden'></div>
        </div>
        <div class="text">Color Test</div>
    </div>
</template>

<script>

export default {
    props:['color'],
    data(){
        return{
        }
    },
    methods:{
    },
    mounted(){
        let cardContent = document.querySelector('.card-content');
        let cardColor = document.querySelector('.card-content > .color');
        let cardColorCode = document.querySelector('.card-content > .color > .color-code');
        let cardTestText = document.querySelector('.card-content > .text');

        if(this.color == null)  this.color = '#000';

        cardContent.style['box-shadow'] = `0 0 10px 0px ${this.color}`;
        cardColor.style['background-color'] = `${this.color}`;
        cardTestText.style['color'] = `${this.color}`;
        cardTestText.style['text-shadow'] = `0 0 10px ${this.color}`;

        cardColorCode.innerHTML = this.color;
    }
}
</script>

<style lang="scss" scoped>

.card-content{
    width:300px;
    display:inline-block;
    margin:5px;
    border-radius:0.5em;
    overflow: hidden;
    cursor:pointer;
    transition:0.15s;

    > .color{
        height:80px;
        position:relative;

        > .color-code{
            position:absolute;
            left:50%;
            top:50%;
            transform:translate(-50%, -50%);
            color:rgba($color:white, $alpha:0.4);
            font-size:24px;
            font-weight:900;
            font-family: 'Noto Sans', sans-serif;
        }
    }

    > .text{
        font-size:24px;
        font-weight:900;
        font-family: 'Geostar Fill', sans-serif;
        text-align:center;
        height:50px;
        line-height:50px;
    }
}

.card-content:active{
    transform: scale(0.98);
}
</style>
