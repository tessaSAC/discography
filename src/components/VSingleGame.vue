<template>
<div class="VSingleGame">
  <div class="gameCover">
    <img src="" alt="">
  </div>

  <VRating />
</div>
</template>

<script>
import VRating from './VRating'

export default {
  components: {
    VRating,
  },
}
</script>

<style lang="scss" scoped>
$coverLength: 210px;

.VSingleGame {
  padding: 72px 48px auto;
}

.gameCover {
  width: $coverLength;
  height: $coverLength;

  margin-bottom: 36px;

  img {
    object-position: 0 0;
    object-fit: cover;
  }
}
</style>
