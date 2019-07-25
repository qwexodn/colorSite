<template>
    <div>
        <div class='container2'>
            <div class='haeder'>
                <div class='pannel'>
                    <div class='title'>
                        <span>C</span>
                        <span>o</span>
                        <span>l</span>
                        <span>o</span>
                        <span>r</span>
                        <span>s</span>
                    </div>
                    <div class='map-card'>card</div>
                    <div class='map-chart'>chart</div>
                </div>
            </div>
            <div class='scrolling'>
                <div class='fill'></div>
            </div>
        </div>
        <div class='space'></div>
    </div>
</template>
<script>
export default {
    mounted(){
        window.addEventListener('scroll', ()=>{

            // haeder 스크롤바
            let scroll = document.querySelector('.scrolling > .fill');
            let bodyHeight = document.body.scrollHeight;
            let screenHeight = window.innerHeight;

            let scrollWidth = window.scrollY / (bodyHeight - screenHeight) * 100;

            scroll.style['width'] = `${scrollWidth}vw`;


        })
    }
}
</script>

<style lang="scss" scoped>
.space{
    height:70px;
}
.container2{
    width:100%;
    position:fixed;
    left:0;
    top:0;
    
    .haeder{
        text-align:center;
        background: white;
        font-family: sans-serif;

        > .pannel{
            position:relative;

            > div{
                display: inline-block;
                font-weight:900;
            }
            > .title{
                font-size: 27px;
                text-shadow: 0 2px 5px black;
                padding:20px 0;
            }
            .map-card, .map-chart{
                width:40vw;
                height:67px;
                line-height:67px;
                position:absolute;
                cursor:pointer;
                font-size:25px;
                color:white;
                text-shadow: 0 0 7px black;
            }
            .map-card:hover, .map-chart:hover{
                background-color:rgba($color:#5CACEB, $alpha:0.3);
            }
            .map-card{
                left:0px;
                top:0px;
            }
            .map-chart{
                right:0px;
                top:0px;
            }
        }
    }

    .scrolling{
        background-color:rgba($color:red, $alpha:0.6);
        height:5px;
        position:relative;

        > .fill{
            position:absolute;
            left:0px;
            top:0px;
            display:inline-block;
            background-color:#5CACEB;
            border-radius: 2em;
            transition:0.15s;
            height:5px;
            width:0px;
        }
    }
}
</style>
