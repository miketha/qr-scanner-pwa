<template>
  <span>
    <div v-if="!isValid && decodedText !== ''"
      class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
      <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"></path>
      </svg>
      <span class="sr-only">Info</span>
      <div>
        <span class="font-medium">Set ID Unrecognized!</span> Check the set ID and try again.
      </div>
    </div>

    <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>

    <div class="flex space-x-2 justify-center">
      <a v-if="url !== ''" v-bind:href="`${url}`" target="_blank">
        <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
          class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-600 active:shadow-lg transition duration-100 ease-in-out">
          {{ `Start Assessment on set ${decodedText}` }}
        </button>
      </a>
    </div>
  </span>
</template>

<script setup>
import { ref } from "vue"
import { StreamBarcodeReader } from "vue-barcode-reader"

let decodedText = ref('')
let url = ref('')
let isValid = ref(false)

const onLoaded = () => { }

const onDecode = (text) => {
  try {
    let hexSplit = text.split('x')
    let parsedSetID = hexSplit[1]
    decodedText.value = parsedSetID

    if (parsedSetID.length === 6 && new RegExp('[0-9A-Fa-f]{6}$').test(parsedSetID)) {
      url.value = `https://senz-v2-prerelease-preview.lifebooster.ca/start-assessment?setID=${parsedSetID}`
      isValid.value = true
    } else {
      console.log('invalid set ID')
      isValid.value = false
    }
  } catch (err) {
    console.log('Something went wrong')
    isValid.value = false
  }
}

</script>

<style scoped>
a {
  color: white;
}

button {
  margin-top: 20px;
  background-color: #1A8F99;
}
</style>