<template>
  <span>

    <img alt="Vue logo" src="../static/lb-logo-dark.png" />
  <div class="px-6 py-4">
    <div class="text-xl mb-2">SetID QR Code Scanner</div>
    <Scanner />
  </div>
  <div class="flex px-6 pt-4 pb-2 justify-center">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#LiveLaughLifebooster</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RiskAssessments</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#RiskAnalytics</span>
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
</style>
