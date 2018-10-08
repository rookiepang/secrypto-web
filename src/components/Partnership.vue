<template>
  <div class="wrapper" id="partnership">
    <div class="title">Partnership</div>
    <div class="partners">
      <div class="row">
        <img src="~@/assets/yc@3x.png" height="19" class="middle">
        <img src="~@/assets/gbic@3x.png" height="17" class="middle">
        <img src="~@/assets/inBlockchain@3x.png" height="28" class="tall">
      </div>
      <div class="row">
        <img src="~@/assets/qokkaAi@3x.png" height="12" class="short">
        <img src="~@/assets/nc@3x.png" height="18" class="middle">
        <img src="~@/assets/bitax@3x.png" height="13" class="short">
      </div>
      <div class="row">
        <img src="~@/assets/kyberNetwork@3x.png" height="26" class="tall">
        <img src="~@/assets/arpa@3x.png" height="24" class="tall">
        <img src="~@/assets/coindaily@3x.png" height="17" class="middle">
      </div>
    </div>
    <div class="partners-pc">
      <div class="row">
        <img src="~@/assets/yc@3x.png" height="19" class="middle">
        <img src="~@/assets/nc@3x.png" height="18" class="middle">
        <img src="~@/assets/inBlockchain@3x.png" height="28" class="tall">
        <img src="~@/assets/arpa@3x.png" height="24" class="tall">
      </div>
      <div class="row">
        <img src="~@/assets/qokkaAi@3x.png" height="12" class="short">
        <img src="~@/assets/gbic@3x.png" height="17" class="middle">
        <img src="~@/assets/kyberNetwork@3x.png" height="26" class="tall">
        <img src="~@/assets/bitax@3x.png" height="13" class="short">
        <img src="~@/assets/coindaily@3x.png" height="17" class="middle">
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
  }
}
</style>

<style lang="scss" scoped>
@import '~@/assets/css/variables.scss';
@media (min-width: $breakpoint-tablet) {
  #partnership {
    .title {
      font-size: 32px;
    }
    .partners {
      display: none;
    }
    .partners-pc {
      display: flex;
    }
  }
}
// 0 ~ 400
@media (max-width: 600px) {
  .tall {
    height: 44px * 0.5;
    width: auto;
  }
  .middle {
    height: 32px * 0.5;
    width: auto;
  }
  .short {
    height: 22px * 0.5;
    width: auto;
  }
}
// 600 ~ 1080
@media (min-width: 600px) {
  .tall {
    height: 44px * 0.7;
    width: auto;
  }
  .middle {
    height: 32px * 0.7;
    width: auto;
  }
  .short {
    height: 22px * 0.7;
    width: auto;
  }
}
// 1080 ~ 1280
@media (min-width: 1080px) {
  .tall {
    height: 44px * 0.8;
    width: auto;
  }
  .middle {
    height: 32px * 0.8;
    width: auto;
  }
  .short {
    height: 22px * 0.8;
    width: auto;
  }
}
// > 1280
@media (min-width: 1280px) {
  .tall {
    height: 44px;
    width: auto;
  }
  .middle {
    height: 32px;
    width: auto;
  }
  .short {
    height: 22px;
    width: auto;
  }
}
</style>
