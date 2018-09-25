<template>
  <div class="wrapper" id="app-header">
    <div class="navs">
      <div class="logo">
        <img src="~@/assets/secryptoLabs@3x.png">
      </div>
      <div class="menu-button" @click="showMenu=true">
        <img src="~@/assets/icMenu@3x.png">
      </div>
    </div>
    <div class="content">
      <div class="title">Secrypto Labs</div>
      <div class="subtitle">The Dawn of a Blockchain New Age</div>
    </div>

    <transition name="slide">
      <div class="menu" v-if="showMenu">
        <div class="navs">
          <div class="logo">
            <img src="~@/assets/secryptoLabs@3x.png">
          </div>
          <div class="menu-button" @click="showMenu=false">
            <img src="~@/assets/icMenuClose@3x.png">
          </div>
        </div>
        <div class="items">
          <a class="item" href="#Products" @click="showMenu=false">Products</a>
          <a class="item" href="#Roadmap" @click="showMenu=false">Roadmap</a>
          <a class="item" href="#Partnership" @click="showMenu=false">Partnership</a>
          <a class="item" href="#Team" @click="showMenu=false">Team</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#app-header {
  position: relative;
  background-image: url("~@/assets/picSecryptoLabs@3x.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 260px;
  display: flex;
  flex-direction: column;
  .navs {
    display: flex;
    justify-content: space-between;
    height: 20px;
    padding: 12px 20px;
    .logo,
    .menu-button {
      height: 100%;
      img {
        height: 100%;
      }
    }
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    color: white;
    .title {
      font-size: 36px;
      font-weight: bold;
    }
    .subtitle {
      font-size: 14px;
    }
  }
  .menu {
    position: absolute;
    top: 0;
    width: 100%;
    background-color: rgb(31, 34, 51);
    .navs {
      height: 24px;
    }
    .items {
      padding: 0px 40px;
      display: flex;
      flex-direction: column;
      .item {
        text-decoration: none;
        color: white;
        font-size: 22px;
        text-align: left;
        padding: 20px 0;
        &:not(:last-child) {
          border-bottom: 1px solid rgba(255, 255, 255, 0.24);
        }
      }
    }
    z-index: 100;
  }
}
.slide-enter-active, .slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-350px);
}
</style>
