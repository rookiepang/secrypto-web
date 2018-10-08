<template>
  <div class="wrapper" id="app-footer">
    <div class="logo">
      <img src="~@/assets/secryptoLabsFooter@3x.png">
    </div>
    <div class="links">
      <a href="mailto:contact@secrypto.io" class="email">
        <img src="~@/assets/email@3x.png">
      </a>
      <a class="wechat" @click.prevent>
        <Tooltip max-width="310" transfer>
          <img src="~@/assets/wechat@3x.png">
          <div slot="content">
            <div style="display:flex;">
              <div style="text-align:left;">
                <div style="font-size:22px;line-height:150%;">Wechat</div>
                <div style="background-color:white;width:15px;height:2px;margin: 0 0 10px 3px;"></div>
                <span style="font-size:12px;width:170px;display:flex;padding-right:5px;">Sacn the QR Code, or search for “SecryptoLabs” to keep informed of Secrypto.</span>
              </div>
              <div>
                <img style="width: 120px;" src="~@/assets/qr-code@3x.png">
              </div>
            </div>
          </div>
        </Tooltip>
      </a>
      <a href="https://twitter.com/SecryptoLabs" target="__blank" class="twitter">
        <img src="~@/assets/twitter@3x.png">
      </a>
      <a href="https://t.me/secrypto09" target="__blank" class="telegram">
        <img src="~@/assets/telegram@3x.png">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-footer',
};
</script>

<style lang="scss" scoped>
#app-footer {
  background-color: rgba(31, 34, 51, 0.04);
  display: flex;
  justify-content: space-between;
  .logo,
  .links {
    flex: 1;
    height: 22px;
    display: flex;
    margin: 20px;
    img {
      height: 100%;
    }
  }
  .logo {
    justify-content: flex-start;
  }
  .links {
    justify-content: flex-end;
    a {
      width: 22px;
      margin-left: 10px;
      img {
        width: 100%;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import '~@/assets/css/variables.scss';
@media (min-width: $breakpoint-tablet) {
  #app-footer {
    .logo,
    .links {
      height: 30px;
      margin: 25px 70px;
    }
    .links {
      a {
        width: 30px;
        margin-left: 30px;
      }
    }
  }
}
</style>

