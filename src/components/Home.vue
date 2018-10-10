<template>
  <div class="wrapper" id="home">
    <app-header/>
    <div class="content">
      <div class="what-is">
        <div class="title">What is Secrypto Labs</div>
        <div class="text">Secrypto Labs is a worldwide group focusing on blockchain technology and making great products. We have already released a multi-chain wallet Secrypto and will deliver EOScript as a compiler for EOS mainnet.</div>
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
            <a href="https://itunes.apple.com/us/app/secrypto-wallet/id1383238393?mt=8" target="__blank">
              <img src="~@/assets/appStore@3x.png">
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.secrypto" target="__blank">
              <img src="~@/assets/android@3x.png">
            </a>
          </div>
        </template>
      </card>

      <card :reverse="true">
        <img slot="poster" src="~@/assets/picEoScript@3x.png">
        <img slot="icon" src="~@/assets/icEoScript@3x.png">
        <template slot="title">EOScript</template>
        <template slot="subtitle">The EOS DApps framework integrated with efficiency and security</template>
        <template slot="content">EOScript is an open-source framework for decentralized applications (DApps) on EOS. It uses JavaScript syntax with blockchain operation extensions. DApps written in EOScript can be compiled to C++ and deployed to the EOS Mainnet. Through a unified coding, debugging, security auditing and deployment workflows, EOScript can greatly improve the coding efficiency of EOS developers.</template>
        <template slot="footer">
          <a :href="`${baseUrl}files/Key+Concepts+of+EOScript.pdf`" target="__blank" class="brochure">
            Technical Brochure
          </a>
        </template>
      </card>

      <card>
        <img slot="poster" src="~@/assets/picDAppStore@3x.png">
        <img slot="icon" src="~@/assets/bitmap@3x.png">
        <template slot="title">DApps Store</template>
        <template slot="subtitle">The EOS DApps framework integrated with efficiency and security</template>
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
  data() {
    return {
      baseUrl: process.env.BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
#home {
  .content {
    .what-is {
      text-align: left;
      padding: 40px 20px;
      background-color: #fafafa;
      .title {
        font-size: 20px;
        color: rgb(31, 34, 51);
        font-weight: bolder;
        line-height: 200%;
      }
      .text {
        font-size: 16px;
        line-height: 150%;
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

<style lang="scss" scoped>
@import '~@/assets/css/variables.scss';
@media (min-width: $breakpoint-tablet) {
  #home {
    .content {
      .what-is {
        text-align: center;
        padding: 40px 300px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        .title {
          font-size: 32px;
        }
        .text {
          font-size: 18px;
        }
      }
      .downloads {
        img {
          width: 128px;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
