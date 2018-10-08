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
#card {
  .poster {
    width: 100%;
    img {
      width: 100%;
      display: flex;
    }
  }
  .info {
    padding: 30px 20px;
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
          line-height: 150%;
          color: rgb(31, 34, 51);
          font-weight: bold;
        }
        .subtitle {
          font-size: 16px;
          line-height: 130%;
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
    }
    .footer {
      margin-bottom: 40px;
    }
  }
}
</style>

<style lang="scss" scoped>
@import '~@/assets/css/variables.scss';
@media (min-width: $breakpoint-tablet) {
  #card {
    display: flex;
    > div {
      flex: 1;
    }
    .info {
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > div {
        width: 80% !important;
      }
      .header {
        .left {
          width: 100px;
          height: 100px;
        }
        .right {
          .title {
            font-size: 32px;
          }
          .subtitle {
            font-size: 18px;
          }
        }
      }
      .content {
        padding: 15px 0;
      }
      .footer {
        margin-bottom: 0;
      }
    }
  }
}
</style>

