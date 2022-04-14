<template>
  <div style="height: 400px; width: 400px">
    <h1 class="text-3xl font-bold underline">Leaflet</h1>
    <l-map
      ref="map"
      :center="[43.605164198673066, 1.4456125447811135]"
      :zoom="14"
      @ready="init"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-control-layers />
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LControlLayers } from "@vue-leaflet/vue-leaflet"
import "leaflet/dist/leaflet.css"

export default {
  components: {
    LMap,
    LTileLayer,
    LControlLayers
  },
  methods: {}
}
</script>
