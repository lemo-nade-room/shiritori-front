<script lang="ts" setup>
import Axios from "axios"
// import { WebSocket } from "vite"

// const ws = new WebSocket('ws://localhost:8000/echo')
const axios = Axios.create({ baseURL: 'http://localhost:8000/api' })
</script>

<template>
  <suspense>
    <router-view :axios="axios"/>
  </suspense>
</template>

<style>
html, body {
  padding: 0;
  margin: 0;
  font-family: Arial,
  "Helvetica Neue",
  "Hiragino Kaku Gothic ProN",
  "Hiragino Sans",
  Meiryo,
  sans-serif;
  -webkit-text-size-adjust: 100%;
}
</style>