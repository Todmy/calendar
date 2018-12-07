<template>
  <div class="detalization">
    <button class="nav-button" @click="$emit('detalization', 'day')">Day</button>
    <button class="nav-button" @click="$emit('detalization', 'week')">Week</button>
    <button class="nav-button" @click="$emit('detalization', 'month')">Month</button>
  </div>
</template>

<script>
export default {
  name: 'DetailPrecision',
}
</script>
