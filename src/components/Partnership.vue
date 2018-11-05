<template>
  <div class="wrapper" id="partnership">
    <div class="title">Partnership</div>
    <div class="partners">
      <div class="row">
        <img src="~@/assets/partner1@2x.png">
        <img src="~@/assets/partner2@2x.png">
        <img src="~@/assets/partner3@2x.png">
        <img src="~@/assets/partner4@2x.png">
      </div>
      <div class="row">
        <img src="~@/assets/partner5@2x.png">
        <img src="~@/assets/partner6@2x.png">
        <img src="~@/assets/partner7@2x.png">
        <img src="~@/assets/partner8@2x.png">
      </div>
      <div class="row">
        <img src="~@/assets/partner9@2x.png">
        <img src="~@/assets/partner10@2x.png">
        <img src="~@/assets/partner11@2x.png">
        <img src="~@/assets/partner12@2x.png">
      </div>
    </div>
    <div class="partners-pc centered">
      <div class="row">
        <img src="~@/assets/partner1@2x.png">
        <img src="~@/assets/partner2@2x.png">
        <img src="~@/assets/partner3@2x.png">
        <img src="~@/assets/partner4@2x.png">
        <img src="~@/assets/partner5@2x.png">
        <img src="~@/assets/partner6@2x.png">
      </div>
      <div class="row">
        <img src="~@/assets/partner7@2x.png">
        <img src="~@/assets/partner8@2x.png">
        <img src="~@/assets/partner9@2x.png">
        <img src="~@/assets/partner10@2x.png">
        <img src="~@/assets/partner11@2x.png">
        <img src="~@/assets/partner12@2x.png">
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
  display: flex;
  flex-direction: column;

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
      img {
        height: 48px;
      }
    }
  }
  .partners-pc {
    display: none;
    flex-direction: column;
    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      img {
        height: 48px;
      }
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
