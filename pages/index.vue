<template>
  <span>
    <link rel="manifest" href="~/manifest.json">
    <PWAPrompt />

    <img alt="Vue logo" src="../static/lb-logo-dark.png" />
    <div class="grid grid-cols-1 divide-y-2">
      <div class="px-6 py-4">
        <div class="text-xl mb-2">Device Set QA Code Scanner</div>
        <div class="text-m mb-2">Scan the device's QR Code to start an assessment</div>
        <Scanner />
      </div>
    </div>
  <div class="flex px-6 pt-4 pb-2 justify-center">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#LiveLaughLifebooster</span>
  </div>

  </span>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
img {
  margin: 20px;
}

.add-button {
  position: absolute;
  top: 1px;
  left: 1px;
}
</style>
