<template>
  <div class="detalization">
    <button class="nav-button" @click="$emit('detalization', { type: 'day' })">Day</button>
    <button class="nav-button" @click="$emit('detalization', { type: 'week' })">Week</button>
    <button class="nav-button" @click="$emit('detalization', { type: 'month' })">Month</button>
  </div>
</template>

<script>
export default {
  name: 'DetailPrecision',
}
</script>
