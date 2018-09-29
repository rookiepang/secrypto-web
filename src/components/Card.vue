<template>
  <div class="wrapper" id="card" :style="{ flexDirection: reverse ? 'row' : 'row-reverse' }">

    <div class="poster">
      <slot name="poster"></slot>
    </div>

    <div class="info">
      <div class="header">
        <div class="left">
          <slot name="icon"></slot>
        </div>
        <div class="right">
          <div class="title">
            <slot name="title"></slot>
          </div>
          <div class="subtitle">
            <slot name="subtitle"></slot>
          </div>
        </div>
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    reverse: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1080px;
#card {
  @media (min-width: $breakpoint-tablet) {
    display: flex;
    > div {
      flex: 1;
    }
  }
  .poster {
    width: 100%;
    img {
      width: 100%;
      display: flex;
    }
  }
  .info {
    padding: 30px 20px;
    @media (min-width: $breakpoint-tablet) {
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > div {
        width: 80% !important;
      }
    }
    .header {
      width: 100%;
      display: flex;
      .left {
        width: 72px;
        height: 72px;
        margin-right: 20px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        flex: 1;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
          font-size: 20px;
          line-height: 30px;
          color: rgb(31, 34, 51);
          font-weight: bold;
        }
        .subtitle {
          font-size: 16px;
          line-height: 20px;
          color: rgb(31, 34, 51);
        }
      }
    }
    .content {
      padding: 25px 0;
      font-size: 14px;
      line-height: 20px;
      color: rgba(31, 34, 51, 0.76);
      text-align: left;
      @media (min-width: $breakpoint-tablet) {
        padding: 10px 0;
      }
    }
    .footer {
      margin-bottom: 40px;
      @media (min-width: $breakpoint-tablet) {
        margin-bottom: 0;
      }
    }
  }
}
</style>

