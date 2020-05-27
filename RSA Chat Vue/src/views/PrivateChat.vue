<template>
  <div class="container">
    <h3 class="text-center">Messaging</h3>
    <div class="messaging">
      <div class="inbox_msg">
        <div class="inbox_people">
          <div class="headind_srch">
            <div class="recent_heading">
              <h4>Recent</h4>
            </div>
            
          </div>
          <div class="inbox_chat">
            
            
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img">
                  <img
                    src="https://ptetutorials.com/images/user-profile.png"
                    alt="sunil"
                  />
                </div>
                <div class="chat_ib">
                  <h5>
                    Sunil Rajput
                    <span class="chat_date">Dec 25</span>
                  </h5>
                  <p>
                    Test, which is a new approach to have all solutions
                    astrology under one roof.
                  </p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img">
                  <img
                    src="https://ptetutorials.com/images/user-profile.png"
                    alt="sunil"
                  />
                </div>
                <div class="chat_ib">
                  <h5>
                    Sunil Rajput
                    <span class="chat_date">Dec 25</span>
                  </h5>
                  <p>
                    Test, which is a new approach to have all solutions
                    astrology under one roof.
                  </p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img">
                  <img
                    src="https://ptetutorials.com/images/user-profile.png"
                    alt="sunil"
                  />
                </div>
                <div class="chat_ib">
                  <h5>
                    Sunil Rajput
                    <span class="chat_date">Dec 25</span>
                  </h5>
                  <p>
                    Test, which is a new approach to have all solutions
                    astrology under one roof.
                  </p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img">
                  <img
                    src="https://ptetutorials.com/images/user-profile.png"
                    alt="sunil"
                  />
                </div>
                <div class="chat_ib">
                  <h5>
                    Sunil Rajput
                    <span class="chat_date">Dec 25</span>
                  </h5>
                  <p>
                    Test, which is a new approach to have all solutions
                    astrology under one roof.
                  </p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img">
                  <img
                    src="https://ptetutorials.com/images/user-profile.png"
                    alt="sunil"
                  />
                </div>
                <div class="chat_ib">
                  <h5>
                    Sunil Rajput
                    <span class="chat_date">Dec 25</span>
                  </h5>
                  <p>
                    Test, which is a new approach to have all solutions
                    astrology under one roof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mesgs">
          <div class="msg_history">
            <div v-for="message in messages">
              <div
                :class="[
                  message.author === authUser.displayName
                    ? 'sent_msg'
                    : 'received_msg'
                ]"
              >
                <div class="received_withd_msg">
                  <p>{{ message.encrypted }}</p>
                  <span class="time_date">{{ message.author }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="type_msg">
            <div class="input_msg_write">
              <input
                @keyup.enter="encryption"
                v-model="message"
                type="text"
                class="write_msg"
                placeholder="Type a message"
              />
              <button class="msg_send_btn" type="button">
                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <p class="text-center top_spac">
        Design by
        <a target="_blank" href="#">Sunil Rajput</a>
      </p>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "PrivateChat",

  data() {
    return {
      message: null,
      messages: [],
      deencrypted: [],
      authUser: {},
      encrypted: null
    };
  },

  methods: {
    scrollToBottom() {
      let box = document.querySelector(".msg_history");
      box.scrollTop = box.scrollHeight;
    },
    saveMessage() {
      //Guarda a firestone
      db.collection("chat")
        .add({
          encrypted: this.encrypted,
          message: this.message,
          author: this.authUser.displayName,
          createdAt: new Date()
        })
        .then(() => {
          this.scrollToBottom();
        });

      this.message = null;
    },

    fetchMessages() {
      db.collection("chat")
        .orderBy("createdAt")
        .onSnapshot(querySnapshot => {
          let allMessages = [];
          querySnapshot.forEach(doc => {
            allMessages.push(doc.data());
          });
          let deEncryptedMessages = [];
          for (let i = 0; i < allMessages.length; i++) {
            var str = allMessages[i].encrypted;
            console.log(str);
            let message = str.split(",");
            var deEncrypted = "";
            var bigInt = require("big-integer");
            //console.log(Math.pow(message[0], message[message.length - 3]));
            //console.log(message[message.length - 3]);
            //console.log(message[message.length - 2]);
            var letters = [
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
              "g",
              "h",
              "i",
              "j",
              "k",
              "l",
              "m",
              "n",
              "o",
              "p",
              "q",
              "r",
              "s",
              "t",
              "u",
              "v",
              "w",
              "x",
              "y",
              "z",
              " ",
              "!",
              "?",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "0"
            ];
            for (let j = 0; j < message.length - 3; j++) {
              var x = message[j];
              console.log(x);
              var y = bigInt(x).pow(message[message.length - 3]);
              var z = y.mod(message[message.length - 2]);
              console.log(z);
              //x = Math.pow(x, e) % n;
              //console.log(x + " = " + y);
              deEncrypted += letters[z];
            }
            console.log(deEncrypted);
            allMessages[i].encrypted = deEncrypted;
          }
          this.messages = allMessages;
          this.deencrypted = deEncryptedMessages;

          setTimeout(() => {
            this.scrollToBottom();
          }, 1000);
        });
    },

    //Encriptacion de los valoresssssssssssss
    encryption() {
      //Primes before 100
      var primes = [
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        37,
        41,
        43,
        47,
        53,
        59,
        61,
        67,
        71,
        73,
        79,
        83,
        89,
        97
      ];
      //Definition of my two primes
      var fPrime = 29;
      var sPrime = 31;
      while (sPrime == fPrime) {
        sPrime = primes[Math.floor(Math.random() * primes.length + 2)];
      }

      var n = fPrime * sPrime;
      var phiN = (fPrime - 1) * (sPrime - 1);
      var e; //MCD de n y phiN

      function gcd(a, b) {
        if (a < b) {
          b = [a, (a = b)][0];
        }
        return a % b == 0 ? b : gcd(b, a % b);
      }

      for (let i = 0; i < primes.length; i++) {
        if (gcd(primes[i], phiN) == 1) {
          e = primes[i];
          break;
        }
      }

      var k = 2;
      var eTemp = e;
      var d = 1;
      eTemp = eTemp % phiN;
      for (let x = 0; x < phiN; x++) {
        if ((eTemp * x) % phiN == 1) {
          d = x;
        }
      }

      /*
      for (e = 2; e < phiN - 1; e++) {
        var found = true;
        for (var j = 2; j < phiN - 1; j++) {
          if (n % j != 0 && phiN % j != 0) {
            found = false;
            break;
          }
        }
        if (found) {
          break;
        }
      }

      var d = 2;
      while ((d * e) % phiN != 1) {
        d++;
        if (d > phiN) {
          break;
        }
      }
      */
      alert("n:" + n + " phiN:" + phiN + " e:" + e + " d:" + d);

      /*
    //Descomponer en primos para encontrar e
    var coprimesN = [];
    var coprimespN = [];

    //Obtengo todos los primos
    var cn = n;
    var i = 0;
    while (n != 1) {
      if (cn % primes[i] == 0) {
        cn = cn / primes[i];
        if (!coprimesN.includes(primes[i])) {
          coprimesN.push(primes[i]);
        }
      } else {
        i++;
      }
    }*/
      //ENCRYPTION CODE
      var encrypted = "";
      var message = this.message;

      var letters = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        " ",
        "!",
        "?",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0"
      ];

      for (let i = 0; i < message.length; i++) {
        //CODIGO PARA ENCRIPTAR LOS NUMEROS
        var x = letters.indexOf(message.toLowerCase().charAt(i));
        //console.log(x);
        x = Math.pow(x, e) % n;
        encrypted += x + ",";
      }
      encrypted += d + ",";
      encrypted += n + ",";
      //alert(encrypted);
      this.encrypted = encrypted;
      this.saveMessage();
    }
  },

  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authUser = user;
      } else {
        this.authUser = {};
      }
    });

    this.fetchMessages();
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          //El usuario se autentico
          next();
        } else {
          vm.$router.push("/login");
        }
      });
    });
  }
};
</script>

<style>
.container {
  max-width: 1170px;
  margin: auto;
}

img {
  max-width: 100%;
}

.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%;
  border-right: 1px solid #c4c4c4;
}

.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}

.top_spac {
  margin: 20px 0 0;
}

.recent_heading {
  float: left;
  width: 40%;
}

.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%;
  /*padding;*/
}

.headind_srch {
  padding: 10px 29px 10px 20px;
  overflow: hidden;
  border-bottom: 1px solid #c4c4c4;
}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}

.srch_bar input {
  border: 1px solid #cdcdcd;
  border-width: 0 0 1px 0;
  width: 80%;
  padding: 2px 0 4px 6px;
  background: none;
}

.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}

.srch_bar .input-group-addon {
  margin: 0 0 0 -27px;
}

.chat_ib h5 {
  font-size: 15px;
  color: #464646;
  margin: 0 0 8px 0;
}

.chat_ib h5 span {
  font-size: 13px;
  float: right;
}

.chat_ib p {
  font-size: 14px;
  color: #989898;
  margin: auto;
}

.chat_img {
  float: left;
  width: 11%;
}

.chat_ib {
  float: left;
  padding: 0 0 0 15px;
  width: 88%;
}

.chat_people {
  overflow: hidden;
  clear: both;
}

.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 18px 16px 10px;
}

.inbox_chat {
  height: 550px;
  overflow-y: scroll;
}

.active_chat {
  background: #ebebeb;
}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}

.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  vertical-align: top;
  width: 92%;
}

.received_withd_msg p {
  background: #ebebeb none repeat scroll 0 0;
  border-radius: 3px;
  color: #646464;
  font-size: 14px;
  margin: 0;
  padding: 5px 10px 5px 12px;
  width: 100%;
}

.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}

.received_withd_msg {
  width: 57%;
}

.mesgs {
  float: left;
  padding: 30px 15px 0 25px;
  width: 60%;
}

.sent_msg p {
  background: #05728f none repeat scroll 0 0;
  border-radius: 3px;
  font-size: 14px;
  margin: 0;
  color: #fff;
  padding: 5px 10px 5px 12px;
  width: 100%;
}

.outgoing_msg {
  overflow: hidden;
  margin: 26px 0 26px;
}

.sent_msg {
  float: right;
  width: 52%;
}

.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {
  border-top: 1px solid #c4c4c4;
  position: relative;
}

.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}

.messaging {
  padding: 0 0 50px 0;
}

.msg_history {
  height: 516px;
  overflow-y: auto;
}
</style>
