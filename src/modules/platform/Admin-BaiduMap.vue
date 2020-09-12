<template>
  <div>
    <PHeader :showArrow="true" @leftClick="onClickLeft">
      <template #default>考勤打卡</template>
    </PHeader>
    <baidu-map
      :center="center"
      :zoom="zoom"
      @ready="handler"
      class="bm-view mt20"
      ak="DZsBeGTBnQBXZgrRRiHWEjbBgQmylPfF"
    >
      <div>
        <bm-marker
          :dragging="true"
          animation="BMAP_ANIMATION_BOUNCE"
          :position="center"
          @dragend="dragend"
        ></bm-marker>
      </div>
    </baidu-map>
    <van-button round size="large" type="info" class="mt30" @click="goAdministrationView">现场签退</van-button>
  </div>
</template>
<script>
import {
  BaiduMap,
  BmControl,
  BmView,
  BmAutoComplete,
  BmLocalSearch,
  BmMarker,
  BmGeolocation,
} from "vue-baidu-map";
// import BaiduMap from 'vue-baidu-map/components/map/Map.vue';
import PHeader from "../../components/PHeader.vue";
export default {
  data() {
    return {
      center: {},
      zoom: 15,
      show: false,
    };
  },
  components: {
    // BaiduMap,
    BaiduMap,
    BmControl,
    BmView,
    BmAutoComplete,
    BmLocalSearch,
    BmMarker,
    BmGeolocation,
    PHeader,
  },
  methods: {
    handler({ BMap, map }) {
      map.enableScrollWheelZoom(true); //开启滚轮缩放
      const hide = alert("正在获取当前省市请稍候..", 0);
      const _this = this;
      const geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(

        function(r) {
          setTimeout(hide, 1000);

          console.log(r);

          _this.center = { lng: r.longitude, lat: r.latitude }; 
          _this.initLocation = true;

        },
        window.map = map,
      // 赋值，方便调用，本节被用到
        this.BMap = BMap,
        this.map = map,
        { enableHighAccuracy: true }

      );

      // console.log(BMap, map)
      // this.center.lng = 117
      // this.center.lat = 36.65
      // this.zoom = 15
    },
    onClickLeft() {},
    dragend(e){
      this.position = e.point;
      const _this = this;
      console.log(e.point);
      console.log(this.position);
      const gc = new this.BMap.Geocoder();
      gc.getLocation(e.point, function(rs) {
        console.log(rs);
        // var addComp = rs.addressComponents
        // this.addr = addComp.province + ', ' + addComp.city + ', ' + addComp.district + ', ' + addComp.street + ', ' + addComp.streetNumber
        _this.addr = rs.address;

      });
    }
  },
};
</script>
<style>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>