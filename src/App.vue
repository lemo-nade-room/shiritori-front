<script lang="ts" setup>
import Axios from "axios"


const axios = Axios.create({ baseURL: 'http://localhost:8000/api' })
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
</script>

<template>
  <suspense>
    <router-view ws="ws://localhost:8000/api" :axios="axios"/>
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