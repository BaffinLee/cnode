<template>
  <div class="topic">
    <article class="article">
      <section class="title">
        <h1>{{topic.title}}</h1>
        <p>
          <router-link
            :to="`/u/${topic.authorName}`"
          >{{topic.authorName}}</router-link>
          <span>·</span>
          <span>{{time}}</span>
          <span>·</span>
          <span>{{topic.visit_count}}</span>
          <span>次点击·</span>
        </p>
        <div class="star">
          <i class="iconfont icon-collection"></i>
          <i class="iconfont icon-collection_fill"></i>
        </div>
      </section>
      <section class="content" v-html="content"></section>
    </article>
    <replies
      :topic="id"
      :author="topic.authorName"
      :replies="replies"
    ></replies>
  </div>
</template>

<script>
  import moment from 'moment';
  import utils from '@/assets/js/utils';
  import replies from '@/views/topic/replies';

  moment.locale('zh-CN');

  export default {
    name: 'topic',
    data() {
      return {
        id: this.$route.params.id,
        topic: this.$store.state.topic,
      };
    },
    computed: {
      time() {
        return moment(this.topic.create_at).fromNow();
      },
      replies() {
        return this.$store.state.replies;
      },
      content() {
        return this.$store.state.topic.content;
      },
    },
    methods: {
      preetyCode() {
        const arr = document.getElementsByClassName('prettyprint');
        for (let i = 0; i < arr.length; i++) {
          if (!arr[i].className.match('linenums')) arr[i].className += ' linenums';
        }
        if (window.PR) window.PR.prettyPrint();
      },
      getInfo() {
        if (this.replies.id === this.id) {
          return;
        }

        if (!this.content) {
          this.$store.commit('SET_LOADING', true);
        }

        fetch(utils.url({
          name: 'info',
          end: this.id,
        })).then(res => (
          res.json()
        )).then((res) => {
          if (!this.content) {
            this.$store.commit('SET_LOADING', false);
          }

          if (!res.success) {
            console.error('info api error');
            return;
          }

          res.data.authorName = res.data.author.loginname;
          res.data.authorLogo = res.data.author.avatar_url;

          this.topic = res.data;

          res.data.replies.forEach((item) => {
            item.time = moment(item.create_at).fromNow();
            item.authorName = item.author.loginname;
            item.authorLogo = item.author.avatar_url;
          });

          if (!this.content) {
            this.$store.commit('SET_TOPIC', res.data);
          }

          this.$store.commit('SET_REPLAIES', {
            data: res.data.replies,
            id: this.id,
          });
        }).catch((err) => {
          if (!this.content) {
            this.$store.commit('SET_LOADING', false);
          }
          console.error(err);
        });
      },
      changeUserUrl() {
        const arr = document.querySelectorAll('#replies a');
        let href = '';
        for (let i = 0; i < arr.length; i++) {
          href = arr[i].href;
          if (href.match('/user/')) {
            arr[i].href = href.replace('/user/', '#/u/');
          }
        }
      },
    },
    mounted() {
      this.getInfo();
      this.preetyCode();
      this.changeUserUrl();
    },
    updated() {
      this.preetyCode();
      this.changeUserUrl();
    },
    components: {
      replies,
    },
  };
</script>

<style lang="scss">
  $green: #80bd01;

  .topic {
    line-height: 30px;

    article {
      background-color: white;
      border: 1px solid #eee;
    }

    section {
      padding: 20px;
    }

    .title {
      position: relative;
      border-bottom: 1px solid #eee;

      h1 {
        margin-bottom:15px;
      }

      p {
        margin-bottom: 0;
        margin-top: 0;
        line-height: 20px;
        font-size: 13px;
      }

      p, a {
        color: #a2a2a2;
      }

      .star {
        position: absolute;
        width: 24px;
        height: 24px;
        top: 24px;
        right: 20px;
        line-height: 1;
        cursor: pointer;
      }

      i {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 24px;
        color: #d2cdcd;
      }

      .icon-collection_fill {
        color: transparent;

        &:hover {
          color: #fcb715;
        }
      }
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: normal;
      color: black;
    }

    h1:first-child,
    h2:first-child,
    h3:first-child {
      margin-top: 0;
    }

    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 18px;
    }

    h3, h4, h5, h6 {
      font-size: 16px;
    }

    p {
      margin-top: 10px;
    }

    & > p:first-child {
      margin-top: 0;
    }

    img {
      width: 100%;
    }

    ul {
      margin-left: 30px;
      list-style: initial;
    }

    table {
      width: 100%;
      border-collapse:collapse;
    }

    thead,
    tr:nth-child(2n) {
      background-color: #f7f7f7;
    }

    td, th {
      padding: 5px 10px;
      border: 1px solid #eee;
    }

    blockquote {
      margin: 0;
      padding-left: 15px;
      border-left: 5px solid #eee;
    }

    a, a:hover {
      color: $green;
    }

    .prettyprint {
      overflow: auto;
    }

    .linenums {
      color: #dedada;
    }
  }
</style>
