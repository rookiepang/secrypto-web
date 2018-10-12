<template>
  <div class="wrapper" id="roadmap">
    <div class="title">Roadmap</div>
    <div class="content">
      <div class="left">
        <img src="~@/assets/timeline-mobile@2x.png">
      </div>
      <div class="right">
        <div class="events" style="height:174px">
          <div class="time">Q3<small>2018</small></div>
          <div class="event">Full-feature EOS wallet</div>
          <div class="event">Decentralized Exchange across chains</div>
          <div class="event">Airdrop Channel</div>
          <div class="event">Secrypto DApp Store release</div>
        </div>

        <div class="events" style="height:155px">
          <div class="time">Q4<small>2018</small></div>
          <div class="event">EOScript proof-of-concept</div>
          <div class="event">Bitcoin Cash &amp; wormhole protocol</div>
          <div class="event">Enterprise level wallet (multisig)</div>
        </div>

        <div class="events" style="height:155px">
          <div class="time">Q1<small>2019</small></div>
          <div class="event">EOScript beta version</div>
          <div class="event">3rd-party payment SDK (web &amp; mobile)</div>
          <div class="event">SET listing on exchanges</div>
        </div>

        <div class="events">
          <div class="time">Q2<small>2019</small></div>
          <div class="event">EOScript 1.0 version release</div>
          <div class="event">Token financial derivatives</div>
          <div class="event">Offline payment (Visa &amp; MasterCard)</div>
        </div>
      </div>
    </div>

    <div class="content-pc centered">
      <div class="top">
        <div style="width:30%">Q3<small>2018</small></div>
        <div style="width:26%">Q4<small>2018</small></div>
        <div style="width:24%">Q1<small>2019</small></div>
        <div style="width:20%">Q2<small>2019</small></div>
      </div>
      <div class="middle">
        <img src="~@/assets/timeline-web@3x.png">
      </div>
      <div class="bottom">
        <div class="events" style="width:30%">
          <div class="event">Full-feature EOS wallet</div>
          <div class="event">Decentralized Exchange across chains</div>
          <div class="event">Airdrop Channel</div>
          <div class="event">Secrypto DApp Store release</div>
        </div>
        <div class="events" style="width:26%">
          <div class="event"><img src="~@/assets/bitmap@3x.png"></div>
          <div class="event">EOScript proof-of-concept</div>
          <div class="event">Bitcoin Cash &amp; wormhole protocol</div>
          <div class="event">Enterprise level wallet (multisig)</div>
        </div>
        <div class="events" style="width:25%">
          <div class="event">EOScript beta version</div>
          <div class="event">3rd-party payment SDK (web &amp; mobile)</div>
          <div class="event">SET listing on exchanges</div>
        </div>
        <div class="events" style="width:19%">
          <div class="event"><img src="~@/assets/icEoScript@3x.png"></div>
          <div class="event">EOScript 1.0 version release</div>
          <div class="event">Token financial derivatives</div>
          <div class="event">Offline payment (Visa &amp; MasterCard)</div>
        </div>
      </div>
      <!-- <img src="~@/assets/roadmap@3x.png"> -->
    </div>

  </div>
</template>

<script>
export default {
  name: 'roadmap',
};
</script>

<style lang="scss" scoped>
$breakpoint-tablet: 1080px;
#roadmap {
  padding: 20px;
  @media (min-width: $breakpoint-tablet) {
    padding: 60px 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title {
    font-size: 24px;
    color: rgb(31, 34, 51);
    margin-bottom: 44px;
    @media (min-width: $breakpoint-tablet) {
      font-size: 32px;
    }
  }
  .content {
    display: flex;
    @media (min-width: $breakpoint-tablet) {
      display: none;
    }
    .left {
      img {
        height: 635px;
      }
    }
    .right {
      text-align: left;
      .events {
        // height: 165px;
        margin-left: 15px;
        .time {
          font-size: 20px;
          font-weight: bolder;
          color: rgb(31, 34, 51);
          margin-bottom: 10px;
          small {
            font-size: 14px;
            font-weight: normal;
            color: rgba(31, 34, 51, 0.52);
            margin-left: 10px;
          }
        }
        .event {
          font-size: 16px;
          font-weight: normal;
          color: rgb(31, 34, 51);
        }
      }
    }
  }
  .content-pc {
    display: none;
    width: 100%;
    text-align: left;
    img {
      width: 100%;
    }
    @media (min-width: $breakpoint-tablet) {
      display: flex;
      flex-direction: column;
    }
    .top {
      width: 100%;
      align-self: flex-start;
      display: flex;

      > div {
        font-size: 22px;
        font-weight: bold;
        small {
          font-size: 14px;
          font-weight: normal;
          color: rgba(31, 34, 51, 0.52);
          margin-left: 5px;
        }
      }
    }
    .bottom {
      width: 100%;
      display: flex;
      font-size: 14px;
      margin-top: 30px;
      // margin-bottom: 30px;
      img {
        width: 30px;
      }
    }
  }
}
</style>

