<template>
  <div class="wrapper centered" id="team">
    <div class="title">Team</div>

    <div class="members">
      <member class="member">
        <template slot="avatar">
          <img src="~@/assets/characters27@3x.png">
        </template>
        <template slot="name">Zehao Li</template>
        <template slot="position">CEO, Co-founder</template>
        <template slot="introduction">
          Former founder and CTO of Officewell and Mexue Technology Co., Ltd.
          PhD in Physics in Massachusetts Institute of Technology.
          B.A in Physics in Peking University.
          Top 10 in Putnam Mathematical Competition.
          He has more than 10 years of experience in IT industry and created two products with millions of users.
        </template>
      </member>

      <member class="member">
        <template slot="avatar">
          <img src="~@/assets/characters01@3x.png">
        </template>
        <template slot="name">Xin Sun </template>
        <template slot="position">Co-founder</template>
        <template slot="introduction">
          Xin is an expert in online marketing and user growth. He served as the chief online marketing director of YangCheng Ltd (A-share listed) where he contributed over $10M of revenue annually. Before that, he founded HeyCity Inn, a brand of high-end residence and young people community in China. Xin has got a master degree in E-Business in Newcastle University, and B.A in Finance from Macau University of Science and Technology.
        </template>
      </member>

      <member class="member">
        <template slot="avatar">
          <img src="~@/assets/characters02@3x.png">
        </template>
        <template slot="name">Rose Ren</template>
        <template slot="position">Co-founder</template>
        <template slot="introduction">
          Rose has extensive experience in Investment and Public Relations.
          She was former Marketing Lead of Bodhi, former investment manager of Continue Capital and Danhua Capital.
          Rose received Bachelor’s degree of Economics and Math from University of Michigan, Ann Arbor.
        </template>
      </member>
    </div>
  </div>
</template>

<script>
import Member from '@/components/Member.vue';

export default {
  name: 'team',
  components: {
    Member,
  },
};
</script>

<style lang="scss" scoped>
#team {
  padding: 40px 0;
  .title {
    font-size: 24px;
    color: rgb(31, 34, 51);
    margin-bottom: 50px;
  }
}
</style>

<style lang="scss" scoped>
@import '~@/assets/css/variables.scss';
@media (min-width: $breakpoint-tablet) {
  #team {
    .title {
      font-size: 32px;
    }
    .members {
      display: flex;
      .member {
        flex: 1;
        &:not(:last-child) {
          margin-right: 90px;
        }
        // flex: 50%;
        // padding: 0 20px;
      }
    }
  }
}
</style>
