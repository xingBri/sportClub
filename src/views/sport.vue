<template>
    <div class="sport">
        <mu-appbar title="运动">
            <mu-icon-button icon="chevron_left" slot="left" @click="backPage()"></mu-icon-button>
        </mu-appbar>
        
        <div id="mapShow" >
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sport',
        data () {
            return {
                runPath:[],
                resPos:null,
            }
        },
        mounted: function () {
            var that = this;
            var map = new AMap.Map('mapShow', {
                zoom: 10,
                touchZoom: false,
                dragEnable: false
            });
            map.plugin(['AMap.Geolocation'], function () {
                var geolocation = new AMap.Geolocation({
                    showButton: false,
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                    buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    zoomToAccuracy: true,      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                    buttonPosition:'RB'
                });
                map.addControl(geolocation);
                geolocation.getCurrentPosition(function (status, result) {
                    that.resPos = result;
                    that.runPath.push(result.position);
                });
                geolocation.watchPosition();
            });
        },
        methods: {
            backPage () {
                this.$router.go(-1);
            }
        },
    }
</script>

<style lang="scss">
    .sport {
        height: 100%;
        .mu-appbar-title{
            text-align: center;
            width: 100%;
            position: absolute;
            left: 0;
        }
        .mu-icon-button {
            z-index: 999;
        }
        #mapShow {
            height: 60vh;
        }
    }
</style>