<template>
  <div class="wrapper" id="roadmap">
    <div class="title">Roadmap</div>
    <div class="content">
      <div class="left">
        <img src="~@/assets/timeline-mobile@2x.png">
      </div>
      <div class="right">
        <div class="events">
          <div class="time">Q3<small>2018</small></div>
          <div class="event">Full-feature EOS wallet</div>
          <div class="event">Decentralized Exchange across chains</div>
          <div class="event">Airdrop Channel</div>
          <div class="event">SET private sale round A</div>
          <div class="event">EOScript proof-of-concept</div>
        </div>

        <div class="events">
          <div class="time">Q4<small>2018</small></div>
          <div class="event">EOScript beta version</div>
          <div class="event">SET private sale round B</div>
          <div class="event">Bitcoin Cash &amp; wormhole protocol</div>
          <div class="event">Enterprise level wallet (multisig)</div>
        </div>

        <div class="events">
          <div class="time">Q1<small>2019</small></div>
          <div class="event">EOScript pre-release</div>
          <div class="event">3rd-party payment SDK (web &amp; mobile)</div>
          <div class="event">Secrypto DApp Store release</div>
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

  </div>
</template>

<script>
export default {
  name: 'roadmap',
};
</script>

<style lang="scss" scoped>
#roadmap {
  padding: 20px;
  .title {
    font-size: 24px;
    color: rgb(31, 34, 51);
    margin-bottom: 44px;
  }
  .content {
    display: flex;
    .left {
      img {
        height: 635px;
      }
    }
    .right {
      text-align: left;
      .events {
        margin-bottom: 30px;
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
}
</style>

