<template>
  <div class="h-[100vh] flex flex-col justify-between">
    <head>
      <link rel="manifest" href="~/manifest.json" />
      <PWAPrompt />
    </head>

    <div class="bg-[#F2F2F2]">
      <div class="flex flex-row items-center">
        <img
          alt="LifeBooster Inc."
          src="../static/lb-logo.png"
          class="h-[30px]"
        />
        <div class="font-['Maison Neue'] text-[24px] font-bold">
          Device QR Code Scanner
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 divide-y-2">
      <div class="px-6 py-4">
        <div class="font-['Maison Neue'] font-semibold text-m mb-2">
          Scan the device's QR Code to start an assessment.
        </div>
        <Scanner />
      </div>
    </div>

    <div class="flex px-6 justify-center">
      <span
        class="font-['Maison Neue'] inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-6"
        >#LiveLaughLifeBooster</span
      >
    </div>

    <footer class="flex flex-col items-start bg-[#F2F2F2]">
      <img
        alt="LifeBooster Inc."
        src="../static/lb-logo-dark.png"
        class="h-[33px] lb-[132px]"
      />
      <div class="font-['Maison Neue'] px-6 pb-6">
        {{ `© LifeBooster ${new Date().getFullYear()}. All rights reserved.` }}
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
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
