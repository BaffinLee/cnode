<template>
  <div class="content">
    <ul class="list">
      <li
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="num">
          <div>
            <span class="replay">{{item.reply_count}}</span>
            <span class="visit">/{{item.visit_count}}</span>
          </div>
        </div>
        <div class="pic">
          <img :src="item.author.avatar_url" alt="logo">
        </div>
        <div class="title">
          <router-link :to="`/topic/${item.id}`">{{item.title}}</router-link>
        </div>
        <div class="time">{{item.time}}</div>
        <div class="mark" v-if="item.top">
          <i class="block"></i>
          <i class="iconfont icon-fix"></i>
        </div>
        <div class="mark" v-if="item.good">
          <i class="block"></i>
          <i class="iconfont icon-star"></i>
        </div>
      </li>
    </ul>
    <Pagging :now="page.now"></Pagging>
  </div>
</template>

<script>
  import utils from '@/assets/js/utils';
  import Pagging from '@/components/Pagging';
  import moment from 'moment';

  moment.locale('zh-CN');

  export default {
    name: 'list',
    data() {
      return {
        list: [],
        page: {
          now: 1,
          size: 20,
        },
      };
    },
    computed: {
      tab() {
        return this.$route.path.replace('/', '');
      },
    },
    methods: {
      getList() {
        fetch(utils.url({
          name: 'list',
          params: {
            page: this.page.now,
            tab: this.tab,
            limit: this.page.size,
          },
        })).then(res => (
          res.json()
        )).then((res) => {
          if (!res.success) {
            console.error('list api error');
            this.list = [];
            return;
          }

          // 格式化最后回复时间
          res.data.forEach((item) => {
            item.time = moment(item.last_reply_at).fromNow();
          });

          this.list = res.data;
        }).catch((err) => {
          console.error(err);
        });
      },
    },
    created() {
      this.getList();
    },
    components: {
      Pagging,
    },
  };
</script>

<style lang="scss">
  $green: #80bd01;
  $grey: #cacaca;
  $size: 30px;

  .list {
    min-height: 70px;
    background-color: white;
    border: 1px solid #eee;

    li {
      position: relative;
      display: flex;
      padding: 20px;
      line-height: 20px;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: 0;
      }

      & > div {
        height: $size;
        line-height: $size;
      }

      .num {
        flex: 0 0 100px;
        font-size: 13px;
        color: $grey;

        .replay {
          font-size: 16px;
          color: $green;
        }
      }

      .pic {
        flex: 0 0 $size;
        margin-right: 10px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 15px;
        }
      }

      .title {
        flex: 1 1 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;

        a {
          color: #262626;
          transition: color 0.2s ease;

          &:hover {
            color: $green;
          }
        }
      }

      .time {
        flex: 0 0 100px;
        text-align: right;
        color: $grey;
      }

      .mark {
        position: absolute;
        top: 0;
        right: 0;

        .block {
          position: absolute;
          top: 0;
          right: 0;
          border-left: 20px solid transparent;
          border-top: 20px solid $green;
        }

        .iconfont {
          position: absolute;
          top: -8px;
          right: 0;
          font-size: 12px;
          color: white;
        }
      }
    }
  }
</style>
