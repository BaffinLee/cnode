<template>
  <ul class="pagging">
    <li
      v-for="(item, index) in list"
      :key="index"
      :class="{[item.type]: true, 'now': selected == item.value}"
      @click="change(item)"
    >
      <span
      >{{item.name}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        last: 99,
        selected: this.now,
      };
    },
    props: [
      'now',
    ],
    computed: {
      list() {
        let start = 0;
        let end = 0;
        let tmp = 0;
        const list = [];

        if (this.selected > 3) {
          list.push({
            type: 'home',
            name: '<',
            click: true,
            value: 1,
          }, {
            type: 'dot',
            name: '···',
            click: false,
            value: '',
          });
          start = this.selected - 2;
        } else {
          start = 1;
        }

        if (start + 4 < this.last) {
          end = start + 4;
        } else {
          start = this.last - 4;
          end = this.last;
        }

        tmp = start;
        while (tmp <= end) {
          list.push({
            type: 'num',
            name: tmp,
            click: true,
            value: tmp,
          });
          tmp += 1;
        }

        list.push({
          type: 'dot',
          name: '···',
          click: false,
          value: '',
        }, {
          type: 'last',
          name: '>',
          click: true,
          value: this.last,
        });

        return list;
      },
    },
    methods: {
      change(item) {
        if (item.click) {
          this.selected = item.value;
          this.$emit('change', this.selected);
        }
      },
    },
  };
</script>

<style lang="scss">
  $size: 30px;
  $green: #80bd01;
  $grey: #e8e8e8;

  .pagging {
    display: flex;
    justify-content: center;
    width: 100%;
    height: $size;
    margin-top: 20px;
    line-height: $size;
    text-align: center;

    li {
      float: left;
      width: $size;
      height: $size;
      margin-left: 10px;
      border-radius: 50%;
      background-color: $grey;
      cursor: pointer;
      transition: all 0.2s ease;

      &.now,
      &:hover {
        background-color: $green;
        color: white;
      }

      &.dot {
        background-color: $grey;
        color: #262626;
        cursor: default;
      }
    }
  }
</style>
