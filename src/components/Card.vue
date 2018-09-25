<template>
  <div class="wrapper" id="card">

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
};
</script>

<style lang="scss" scoped>
#card {
  .poster {
    width: 100%;
    img {
      width: 100%;
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
    }
    .footer {
      margin-bottom: 40px;
    }
  }
}
</style>

