<template>
  <div class="wrapper" id="app-footer">
    <div class="centered">
      <div class="logo">
        <img src="~@/assets/secryptoLabsFooter@3x.png">
      </div>
      <div class="links">
        <a href="mailto:contact@secrypto.io" class="email">
          <img src="~@/assets/email@3x.png">
        </a>
        <a href="https://twitter.com/SecryptoLabs" target="__blank" class="twitter">
          <img src="~@/assets/twitter@3x.png">
        </a>
        <a class="telegram" @click.prevent>
          <Tooltip max-width="310" transfer>
            <img src="~@/assets/telegram@3x.png">
            <div slot="content">
              <div style="display:flex;padding:16px 8px;">
                <div style="text-align:left;">
                  <div style="font-size:22px;line-height:150%;">Telegram</div>
                  <div style="background-color:white;width:15px;height:2px;margin: 0 0 10px 3px;"></div>
                  <div style="float: left;">
                    <span style="font-size:12px;width:150px;display:flex;padding-right:5px;">Secrypto English Group<br>Secrypto 中文群<br>Secrypto 한국인 그룹</span>
                  </div>
                  <div style="float: left;">
                    <span style="font-size:12px;width:120px;display:flex;padding-right:5px;"><a href="t.me/dappstore_en" target="__blank" style="display: block;opacity: 0.85;color: #8cc6ff;text-decoration: underline;">t.me/dappstore_en</a></span>
                    <span style="font-size:12px;width:120px;display:flex;padding-right:5px;"><a href="t.me/dappstore_cn" target="__blank" style="display: block;opacity: 0.85;color: #8cc6ff;text-decoration: underline;">t.me/dappstore_cn</a></span>
                    <span style="font-size:12px;width:120px;display:flex;padding-right:5px;"><a href="t.me/dappstore_ko" target="__blank" style="display: block;opacity: 0.85;color: #8cc6ff;text-decoration: underline;">t.me/dappstore_ko</a></span>
                  </div>
                </div>
              </div>
            </div>
          </Tooltip>
        </a>
        <a href="https://medium.com/@SecryptoLabs" target="__blank" class="reddit">
          <img src="~@/assets/reddit@3x.png">
        </a>
        <a href="https://medium.com/@SecryptoLabs" target="__blank" class="medium">
          <img src="~@/assets/medium@3x.png">
        </a>
        <a class="wechat" @click.prevent>
          <Tooltip max-width="330" transfer>
            <img src="~@/assets/wechat@3x.png">
            <div slot="content">
              <div style="display:flex;padding:16px 8px;">
                <div style="text-align:left;">
                  <div style="font-size:22px;line-height:150%;">Wechat</div>
                  <div style="background-color:white;width:15px;height:2px;margin: 0 0 10px 3px;"></div>
                  <span style="font-size:12px;width:175px;display:flex;padding-right:5px;opacity: 0.85;">Scan the QR Code, <br>or search for “SecryptoLabs” <br>to keep informed of Secrypto.</span>
                </div>
                <div>
                  <img style="width: 120px;" src="~@/assets/qr-code@3x.png">
                </div>
              </div>
            </div>
          </Tooltip>
        </a>
      </div>
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
  justify-content: center;
  > div {
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    padding-right: 0;
  }
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
      margin: 25px 0px;
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

