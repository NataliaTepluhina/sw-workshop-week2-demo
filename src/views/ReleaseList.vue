<template>
  <div class="flex flex-wrap">
    <ReleaseCard
      v-for="release in $options.releasesList"
      :key="release.version"
      v-bind="release"
    />
  </div>
</template>

<script>
import releasesList from '../assets/db'
import ReleaseCard from '../components/ReleaseCard'
export default {
  releasesList,
  components: {
    ReleaseCard,
  },
}
</script>

<style lang="scss" scoped></style>
