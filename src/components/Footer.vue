<template>
  <div class="wrapper" id="app-footer">
    <div class="logo">
      <img src="~@/assets/secryptoLabsFooter@3x.png">
    </div>
    <div class="links">
      <a href="" target="__blank" class="email">
        <img src="~@/assets/email@3x.png">
      </a>
      <a href="" target="__blank" class="wechat">
        <img src="~@/assets/wechat@3x.png">
      </a>
      <a href="" target="__blank" class="twitter">
        <img src="~@/assets/twitter@3x.png">
      </a>
      <a href="" target="__blank" class="telegram">
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
    }
  }
}
</style>
