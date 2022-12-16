<template>
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
</template>

<script setup>
  import { ref } from "vue"
  import { StreamBarcodeReader } from "vue-barcode-reader"

  const decodedText = ref("")

  const onLoaded = () => {
    console.log("loaded")
  }
  const onDecode = (text) => {
    decodedText.value = text
  }
</script>

<style scoped>
  a {
    color: #42b983;
  }

  .information {
    margin-top: 100px;
  }
</style>