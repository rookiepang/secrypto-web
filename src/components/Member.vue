<template>
  <div class="wrapper" id="member">
    <div class="avatar">
      <slot name="avatar"></slot>
    </div>
    <div class="name">
      <slot name="name"></slot>
    </div>
    <div class="position">
      <slot name="position"></slot>
    </div>
    <div class="introduction">
      <slot name="introduction"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'member',
};
</script>

<style lang="scss" scoped>
#member {
  margin-bottom: 40px;
  .avatar {
    margin-bottom: 12px;
    img {
      width: 72px;
    }
  }
  .name {
    font-size: 20px;
    font-weight: bold;
    color: rgb(31, 34, 51);
  }
  .position {
    font-size: 14px;
    font-weight: normal;
    color: rgba(31, 34, 51, 0.52);
    margin-bottom: 8px;
  }
  .introduction {
    font-size: 14px;
    font-weight: normal;
    color: rgb(31, 34, 51);
  }
}
</style>
