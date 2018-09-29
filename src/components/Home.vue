<template>
  <div class="wrapper" id="home">
    <app-header/>
    <div class="content">
      <div class="what-is">
        <div class="title">What is Secrypto Lab</div>
        <div class="text">The Raiden Network is an off-chain scaling solution, enabling near-instant, low-fee and scalable payments. It’s complementary to the Ethereum blockchain and works with any ERC20 compatible token. The Raiden project is work in progress. Its goal is to research state channel technology, define protocols and develop reference implementations.</div>
      </div>

      <span id="Products"></span>
      <card>
        <img slot="poster" src="~@/assets/picSecryptoWallet@3x.png">
        <img slot="icon" src="~@/assets/icSecryptoWallet@3x.png">
        <template slot="title">Secrypto Wallet</template>
        <template slot="subtitle">Secure and easy-to-use crypto wallet</template>
        <template slot="content">Secrypto provides an intuitive yet secured wallet for every user from beginner to expert. It is the first crypto wallet in the market that integrates multiple wallets and utilizes the highest level of security with breakthrough “read-only" mode so you have a peace of mind managing all your cryptocurrencies.</template>
        <template slot="footer">
          <div class="downloads">
            <a href="#">
              <img src="~@/assets/appStore@3x.png">
            </a>
            <a href="#">
              <img src="~@/assets/android@3x.png">
            </a>
          </div>
        </template>
      </card>

      <card :reverse="true">
        <img slot="poster" src="~@/assets/picEoScript@3x.png">
        <img slot="icon" src="~@/assets/icEoScript@3x.png">
        <template slot="title">EOScript</template>
        <template slot="subtitle">The EOS dApp framework integrated with efficiency and security</template>
        <template slot="content">EOScript is an open-source framework for decentralized applications (dApp) on EOS. It uses JavaScript syntax with blockchain operation extensions. DApps written in EOScript can be compiled to C++ and deployed to the EOS Mainnet. Through a unified coding, debugging, security auditing and deployment workflows, EOScript can greatly improve the coding efficiency of EOS developers.</template>
        <template slot="footer">
          <a href="#" class="brochure">
            Technical Brochure
          </a>
        </template>
      </card>

      <card>
        <img slot="poster" src="~@/assets/picDAppStore@3x.png">
        <img slot="icon" src="~@/assets/bitmap@3x.png">
        <template slot="title">DApp Store</template>
        <template slot="subtitle">The EOS dApp framework integrated with efficiency and security</template>
        <template slot="content">The Raiden Network is an off-chain scaling solution, enabling near-instant, low-fee and scalable payments. It’s complementary to the Ethereum blockchain and works with any ERC20 compatible token. The Raiden project is work in progress. Its goal is to research state channel technology, define protocols and develop reference implementations.</template>
      </card>

      <span id="Roadmap"></span>
      <roadmap/>

      <span id="Partnership"></span>
      <partnership/>

      <span id="Team"></span>
      <team/>

    </div>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';
import Card from '@/components/Card.vue';
import Roadmap from '@/components/Roadmap.vue';
import Partnership from '@/components/Partnership.vue';
import Team from '@/components/Team.vue';

export default {
  name: 'home',
  components: {
    AppHeader,
    AppFooter,
    Card,
    Roadmap,
    Partnership,
    Team,
  },
};
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1080px;
#home {
  .content {
    .what-is {
      text-align: left;
      padding: 40px 20px;
      @media (min-width: $breakpoint-tablet) {
        text-align: center;
        padding: 40px 300px;
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .title {
        font-size: 20px;
        color: rgb(31, 34, 51);
        font-weight: bolder;
        line-height: 40px;
      }
      .text {
        font-size: 16px;
        color: rgba(31, 34, 51, 0.76);
      }
    }
    .downloads {
      text-align: left;
      img {
        width: 103px;
        margin-right: 6px;
        cursor: pointer;
      }
    }
    .brochure {
      display: flex;
      width: 180px;
      height: 40px;
      background-color: rgb(76, 109, 255);
      border-radius: 6px;
      justify-content: center;
      align-items: center;
      color: white;
      text-decoration: none;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>
