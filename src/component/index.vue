<template>
    <transition name="zkt-toast-smooth">
        <div :class="['zkt-toast-container','zkt-toast-'+type,'zkt-toast-position-'+position]"  v-if="show" :style="{width:width+'px',height:height+'px'}">
            <a class="close zkt-toast-close-btn" @click.prevent="closeToast"><span aria-hidden="true">&times;</span></a>
            <div :class="['zkt-toast-icon',icon]"></div>
            <div class="zkt-toast-content">
                <div class="zkt-toast-title">{{title}}</div>
                <div class="zkt-toast-message">{{message}}</div>
            </div>
          </div>
    </transition>
</template>

<script>
export default {
  name: 'zkt-toast',
  props: {
    //   toast位置
    position: {
      type: String,
      default: 'topCenter',
      validator (value) {
        return ['topCenter', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'].indexOf(value) !== -1
      }
    },
    // 提示信息
    message: {
      type: String,
      default: ''
    },
    // 提示类型
    type: {
      type: String,
      default: 'info',
      validator (value) {
        return ['info', 'success', 'error', 'warning'].indexOf(value) !== -1
      }
    },
    // 毁掉函数
    callback: {
      type: Function
    },
    // 图标
    icon: {
      type: String,
      default: ''
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 关闭时间
    closeTime: {
      type: Number
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 80
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    close () {
      if (this.autoClose) {
        setTimeout(() => {
          this.show = false
          this.callback && this.callback()
        }, this.closeTime * 1000)
      }
    },
    closeToast () {
      this.show = false
      this.callback && this.callback()
    }
  },
  mounted () {
    console.log(this.$props)
    this.show = true
    this.close()
  }
}
</script>

<style lang="scss">
  /* @import '~bootstrap3/dist/css/bootstrap.min.css'; */
  /*  */
  @font-face {
  font-family: 'zkt-toast';  /* project id 1440887 */
  src: url('//at.alicdn.com/t/font_1440887_n08tcpxs1l.eot');
  src: url('//at.alicdn.com/t/font_1440887_n08tcpxs1l.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1440887_n08tcpxs1l.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1440887_n08tcpxs1l.woff') format('woff'),
  url('//at.alicdn.com/t/font_1440887_n08tcpxs1l.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1440887_n08tcpxs1l.svg#zkt-toast') format('svg');
}

.zkt-toast-icon {
  font-family: "zkt-toast" !important;
  position: absolute;
  font-size: 40px;
  top:7px;
  left:15px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.zkt-toast-icon-success:before {
  content: "\e651";
}

.zkt-toast-icon-error:before {
  content: "\e652";
}

.zkt-toast-icon-info:before {
  content: "\e654";
}

.zkt-toast-icon-warning:before {
  content: "\e655";
}

  .zkt-toast-smooth-enter,
  .zkt-toast-smooth-leave-to {
      will-change: transform, opacity;
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
      opacity: 0;
      -webkit-transition: transform 200ms ease, opacity 200ms ease;
      transition: transform 200ms ease, opacity 200ms ease;
  }

  .zkt-toast-smooth-enter-to,
  .zkt-toast-smooth-leave {
      will-change: transform, opacity;
      opacity: 1;
      -webkit-transition: transform 250ms ease, opacity 250ms ease;
      transition: transform 250ms ease, opacity 250ms ease;
  }
.zkt-toast-container {
  border-radius: 3px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  color:#fff;
  position: fixed;
  z-index: 2000;
  .zkt-toast-close-btn {
    position: absolute;
    right:5px;
  }
  &.zkt-toast-info {
    color:#000;
  }
  &.zkt-toast-success {
    background: #2CBE4E;
  }
  &.zkt-toast-warning {
    background: #F5CF87;
    color:#000;
  }
  &.zkt-toast-error {
    background: #FF5252;
  }
  /* ['topCenter', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'] */
  &.zkt-toast-position-topCenter{
    top : 20px;
    left: 50%;
    transform: translateX(-50%);
  }
  &.zkt-toast-position-topLeft{
    top : 20px;
    left: 20px;
  }
  &.zkt-toast-position-topRight{
    top : 20px;
    right: 20px;
  }
  &.zkt-toast-position-bottomLeft{
    bottom : 20px;
    left: 20px;
  }
  &.zkt-toast-position-bottomRight{
    bottom : 20px;
    right: 20px;
  }
  .zkt-toast-content {
    padding-left: 70px;
    padding-top: 12px;
    padding-right: 30px;
    .zkt-toast-title {
      font-size: 16px;
      font-weight:bold;
    }
    .zkt-toast-message {
      letter-spacing: 1px;
    }
  }

}
</style>
