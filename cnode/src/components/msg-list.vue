<template>
  <div class="list">
    <div class="header">
      <span>{{ title }}</span>
    </div>
    <div class="cell" v-show="messageData.length === 0"><p class="title">无消息</p></div>
    <div class="cell" v-for="(item, key, index) in messageData" :key="index">
      <p class="title">
        <router-link :to="{ name:'userCenter', params: { userName: item.author.loginname } }">{{ item.author.loginname }}</router-link> <span v-show="item.type === 'reply'">回复了你的话题</span><span v-show="item.type === 'at'">在话题</span> <router-link :to="{ name:'detail', params: { id: item.topic.id } }">{{ item.topic.title }}</router-link><span v-show="item.type === 'at'">中@了你</span>
      </p>
      <p class="reply-avatar">
        <time>3小时前</time>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    messageData: {
      type: Array
    }
  },
  created () {
    console.log(this.messageData)
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .list {
    overflow: hidden;
    margin-bottom: 24px;
    background: white;
  .header {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: left;
    background: #f6f6f6;
  span {
    margin-left: 12px;
    font-size: 14px;
    color: #999;
  }
  }
  .cell {
    width: 100%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px #F0F0F0 solid;
    overflow: hidden;
  .user-avatar {
    float: left;
    width: 136px;
    overflow: hidden;
  img {
    float: left;
    margin: 10px 12px 0;
    width: 30px;
    height: 30px;
    border-radius: 3px;
  }
  span {
    color: #888888;
    font-size: 14px;
  }
  }
  .title {
    float: left;
    margin-left: 24px;
    width: 800px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: left;
  i {
    display: inline-block;
    background: #80BD01;
    border-radius: 3px;
    width: 32px;
    text-align: center;
    font-size: 12px;
    color: white;
    font-style: normal;
    line-height: 20px;
  }
  em {
    display: inline-block;
    background: #E5E5E5;
    border-radius: 3px;
    width: 32px;
    text-align: center;
    font-size: 12px;
    color: #999999;
    font-style: normal;
    line-height: 20px;
  }
  a {
    color: #08c;
  &:hover {
     text-decoration: underline;
   }
  }
  }
  .reply-avatar {
    float: right;
    margin-right: 12px;
  img {
    float: left;
    margin: 17px 10px 0 0;
    width: 18px;
    height: 18px;
    border-radius: 3px;
  }
  time {
    font-size: 12px;
    color: #778087;
  }
  }
  }
  .page {
    margin-top: 24px;
    margin-bottom: 24px;
    margin-left: 12px;
    text-align: left;
    font-size: 0;
  a {
    display: inline-block;
    width: 32px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    border-right: 1px #DDDDDD solid;
    border-top: 1px #DDDDDD solid;
    border-bottom: 1px #DDDDDD solid;
    font-size: 14px;
  &:first-child {
     border-left: 1px #DDDDDD solid;
   }
  &:hover {
     cursor: pointer;
     background: #F5F5F5;
   }
  }
  }
  }
</style>
