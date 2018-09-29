<template>
  <div class="wrapper" id="partnership">
    <div class="title">Partnership</div>
    <div class="partners">
      <div class="row">
        <img src="~@/assets/yc@3x.png" height="19">
        <img src="~@/assets/gbic@3x.png" height="17">
        <img src="~@/assets/inBlockchain@3x.png" height="28">
      </div>
      <div class="row">
        <img src="~@/assets/qokkaAi@3x.png" height="12">
        <img src="~@/assets/nc@3x.png" height="18">
        <img src="~@/assets/bitax@3x.png" height="13">
      </div>
      <div class="row">
        <img src="~@/assets/kyberNetwork@3x.png" height="26">
        <img src="~@/assets/arpa@3x.png" height="24">
        <img src="~@/assets/coindaily@3x.png" height="17">
      </div>
    </div>
    <div class="partners-pc">
      <div class="row">
        <img src="~@/assets/yc@3x.png" height="19">
        <img src="~@/assets/gbic@3x.png" height="17">
        <img src="~@/assets/inBlockchain@3x.png" height="28">
        <img src="~@/assets/qokkaAi@3x.png" height="12">
      </div>
      <div class="row">
        <img src="~@/assets/nc@3x.png" height="18">
        <img src="~@/assets/bitax@3x.png" height="13">
        <img src="~@/assets/kyberNetwork@3x.png" height="26">
        <img src="~@/assets/arpa@3x.png" height="24">
        <img src="~@/assets/coindaily@3x.png" height="17">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'partnership',
};
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1080px;
#partnership {
  background-color: rgba(31, 34, 51, 0.04);
  padding: 40px;
  .title {
    font-size: 24px;
    color: rgb(31, 34, 51);
    margin-bottom: 40px;
  }
  .partners {
    display: flex;
    flex-direction: column;
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    @media (min-width: $breakpoint-tablet) {
      display: none;
    }
  }
  .partners-pc {
    display: none;
    flex-direction: column;
    padding: 0 20%;
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    @media (min-width: $breakpoint-tablet) {
      display: flex;
    }
  }
}
</style>
