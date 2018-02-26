<template>
  <div>
    <div>
      <nav>
        <div class="container">
          <a href=''>
            VUECHAT
          </a>
          <ul class="nav__left">
          </ul>
          <ul class="nav__right">
            <a href='' @click="logOut()">SIGNOUT</a>
          </ul>
        </div>
      </nav>
      <main>
        <img src="../assets/logo.png" alt="Vue.js PWA">
        <router-view></router-view>
      </main>
    </div>
    <div>

      <div class="chatbox">
        <div class="chatlogs"> 
          <div v-for="item in anArray">
            <span class="chat-name">{{item.name}}</span>
            <div class="chat friend">
              <img class="user-photo" v-bind:src="item.photo_url" />
              <div class="chat-message">
                <p>{{item.message}} </p>
                <p>
                  <span class="chat-time"> {{item.timestamp | formatDate}}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <form @submit.prevent="addComment">
        <div class="chat-form">
          <textarea v-model="newComment" placeholder="Type and click send to chat"></textarea>
          <button>Send</button>
        </div>
        </form>
      </div>

    </div>

</div>
</template>

<script>
/*eslint-disable*/

import firebase, {
  chatRef
} from '../firebase/index'
import Vue from 'vue'
import Vuefire from 'vuefire'
import dateFilter from '../utils/filter.js';
import moment from 'moment'
Vue.use(Vuefire);

export default {
  name: 'chat',
  data() {
    return {
      comment: '',
      newComment: '',
      loading: true
    };
  },

   

  firebase: {
    // can bind to either a direct Firebase reference or a query
   
    anArray: chatRef,
    
    // optionally provide the cancelCallback
    cancelCallback: function () {
       
    },
    // this is called once the data has been retrieved from firebase
    readyCallback: function () {
     
    }
  },
  filters: {
    dateFilter,
  },
  methods: {
    logOut() {
      firebase.auth().signOut()
    },
    
    addComment() {

      if (this.newComment !== '') {
        this.comment = this.newComment.trim();
        chatRef.push({
          message: this.comment,
          name: this.getUserName(),
          timestamp: moment().unix(),
          userId: this.getUserId(),
          photo_url:this.getPhotoURL()
        });
        this.newComment = "";
      }
    },

    getUserId() {
      return firebase.auth().currentUser.uid;
    },
    getUserName() {
      return firebase.auth().currentUser.displayName;
    },
    getPhotoURL() {
      return firebase.auth().currentUser.photoURL;
    }
  }
}
</script>
<style>

</style>
