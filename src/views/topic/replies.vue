<template>
  <ul class="replies" id="replies">
    <li
      v-for="(item, index) in replies.data"
      :key="index"
      :id="`/t/${topic}/reply-${index}`"
    >
      <img alt="logo" class="author-logo"
        :src="item.authorLogo"
      >
      <div class="content">
        <div class="author">
          <p>
            <router-link
              :to="`/u/${item.authorName}`"
              :title="item.authorName == author ? '作者' : ''"
            >
              <span>{{item.authorName}}</span>
              <i class="iconfont icon-people_fill"
                v-if="item.authorName == author"
              ></i>
            </router-link>
            <span> · </span>
            <router-link class="link"
              :to="`/t/${topic}/reply-${index}`"
            >{{`${index + 1} 楼 · ${item.time}`}}</router-link>
          </p>
          <p class="icon">
            <i class="iconfont edit icon-reply" title="回复"></i>
            <i class="iconfont edit icon-like" title="点赞"></i>
            <span class="reply-num">{{item.ups.length}}</span>
          </p>
        </div>
        <p class="text" v-html="item.content"></p>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    props: [
      'topic',
      'author',
      'replies',
    ],
  };
</script>

<style lang="scss">
  .replies {
    margin-top: 30px;
    margin-left: 0!important;
    list-style: none;

    li {
      display: flex;
      margin-bottom: 20px;

      &:hover {
        .edit {
          visibility: visible!important;
        }
      }

      .author-logo {
        flex: 0 0 50px;
        width: 50px;
        height: 50px;
        margin-right: 20px;
        border-radius: 50%;
      }

      .content {
        flex: 1 1 0;
      }

      .author {
        display: flex;

        p {
          margin: 0;
          flex: 1 1 0;
        }

        a {
          color: #868282;

          &:hover {
            color: #80bd01;
          }

          &.link {
            color: #c5c5c5;
          }
        }

        .icon {
          flex: 0 0 100px;
          margin-right: 10px;
          text-align: right;
          line-height: 20px;
        }

        .edit {
          visibility: hidden;
          margin-right: 10px;
          font-size: 20px;
          cursor: pointer;
        }

        .reply-num {
          display: inline-block;
          min-width: 20px;
          padding: 3px;
          background-color: #f3f3f3;
          text-align: center;
          color: #b9b9b9;
          border-radius: 50%;
        }
      }

      .text {
        margin-top: 5px;
        padding: 5px 15px;
        background-color: #f3f3f3;
        border-radius: 3px;
      }
    }
  }
</style>
