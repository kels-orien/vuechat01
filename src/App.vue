<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*,
header span {
  box-sizing: border-box
}

*,
body,
ul {
  margin: 0
}

.btn,
main {
  text-align: center
}

* {
  padding: 0;
  font-family: tahoma, san serif
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e5
}

main {
  margin-top: 40px
}

.container a {
  margin: 0;
  height: 40px;
  padding: 10px 16px 0 24px;
  background-color: #35485E;
  color: #fff;
  text-decoration: none
}

.container a:hover {
  text-decoration: none;
  color: #41b883
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  padding-top: 16px
}

body {
  background: #ffffff;
}

ul {
  list-style-type: none;
  padding: 0
}

nav {
  background-color: #35495E;
  font-family: 'PT Sans', sans-serif;
  font-weight: 300;
  text-transform: uppercase
}

nav .container {
  display: flex
}

nav .nav__left {
  flex-grow: 3;
  display: flex
}

nav .nav__right {
  flex-grow: 2;
  display: flex;
  flex-direction: row-reverse;
  color: #fff
}

.btn {
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px
}

.btn-block {
  display: block;
  width: 50%
}

.btn-primary {
  color: #fff;
  background-color: #2C3E50;
  border-color: #2C3E50;
  font-weight: 700
}

.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
  margin:0  auto;
}

.form-group {
  margin-bottom: 15px
}

.login-clean form {
  max-width: 400px;
  width: 90%;
  margin: 0 auto;
  background-color: #fff;
  padding: 40px;
  border-radius: 4px;
  color: #505e6c;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .1)
}

.chatbox {
  min-width: 390px;
  width: 500px;
  height: 600px;
  background: #fff;
  padding: 25px;
  margin: 20px auto;
  box-shadow: 0 3px #ccc
}

.chatlogs {
  padding: 10px;
  width: 100%;
  height: 450px;
  background: #eee;
  overflow-x: hidden;
  overflow-y: scroll
}

.chatlogs::-webkit-scrollbar {
  width: 10px
}

.chatlogs::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: rgba(0, 0, 0, .1)
}

.chat {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  margin-bottom: 10px
}

.chat .user-photo {
  height: 60px;
  width: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left
}

.chat .user-photos {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  float: left;
  padding-right: 10px
}

.chat .chat-message {
  width: 80%;
  padding: 15px;
  margin: 5px 10px 0;
  background: #1ddced;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
  order: 1
}

.friend .chat-message {
  background: #1adda4
}

.self .chat-message {
  background: #1ddced;
  order: -1
}

.chat-form {
  margin-top: 20px;
  display: flex;
  align-items: flex-start
}

.chat-form textarea {
  background: #fbfbfb;
  width: 75%;
  height: 50px;
  border: 2px solid #eee;
  border-radius: 3px;
  resize: none;
  padding: 10px;
  font-size: 18px;
  color: #333
}

.chat-form textarea:focus {
  background: #fff
}

.chat-form textarea::-webkit-scrollbar {
  width: 10px
}

.chat-form textarea::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: rgba(0, 0, 0, .1)
}

.chat-form button {
  background: #1ddced;
  padding: 5px 15px;
  font-size: 30px;
  color: #fff;
  border: none;
  margin: 0 10px;
  border-radius: 3px;
  box-shadow: 0 3px 0 #0eb2c1;
  cursor: pointer;
  -webkit-transition: background .2s ease;
  -moz-transition: background .2s ease;
  -o-transition: background .2s ease
}

.chat-form button:hover {
  background: #13c8d9
}

.user-info {
  margin-right: 50px;
  margin-left: 90px
}

.chat-time {
  float: right
}

.chat-name {
  margin-left: 70px
}

</style>
