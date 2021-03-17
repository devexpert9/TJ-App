import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, Events } from '@ionic/angular';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { config } from '../config';
import * as $ from 'jquery';
declare var PUBNUB:any;
declare var PHONE:any;
declare var window:any;
@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.page.html',
  styleUrls: ['./video-call.page.scss'],
})
export class VideoCallPage implements OnInit {
video_call_id:any;
url: SafeResourceUrl;
  constructor(private modalCtrl:ModalController, public navParams: NavParams, public sanitizer:DomSanitizer, public events: Events) { 
  	this.video_call_id = navParams.get('video_call_id');
  	// this.url = this.sanitizer.bypassSecurityTrustResourceUrl(config.BASE_URL+'videoCall.html?call='+this.video_call_id); 
    events.subscribe('video_call_ended:true', data => {
      this.closeModal();
    });

  }

  ngOnInit() {
    var video_call_id = this.video_call_id;
    var my_location = 'http://localhost:8100/#/video-call?call='+video_call_id;
    (function(){

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Generate Random Number if Needed
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  var urlargs         = urlparams();
  var my_number       = PUBNUB.$('my-number');
  var my_link         = PUBNUB.$('my-number-link');
  // var number          = urlargs.number || Math.floor(Math.random()*999+1);
  var number          = video_call_id;

  my_number.number    = number;
  my_number.innerHTML = ''+my_number.number;
  // my_link.href        = location.href.split('?')[0] + '?call=' + number;
  my_link.href        = 'http://localhost:8100/#/video-call?call=' + number;
  my_link.innerHTML   = my_link.href;
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Update Location if Not Set
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // if (!('number' in urlargs)) {
  //     urlargs.number = my_number.number;
  //     location.href = urlstring(urlargs);
  //     return;
  // }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Get URL Params
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  function urlparams() {
      var params = {};
      if (my_location.indexOf('?') < 0) return params;

      PUBNUB.each(
          my_location.split('?')[1].split('&'),
          function(data) { var d = data.split('='); params[d[0]] = d[1]; }
      );

      return params;
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Construct URL Param String
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  function urlstring(params) {
      return my_location.split('?')[0] + '?' + PUBNUB.map(
          params, function( key, val) { return key + '=' + val }
      ).join('&');
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Calling & Answering Service
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  var video_out = PUBNUB.$('video-display');
  var img_out   = PUBNUB.$('video-thumbnail');
  var img_self  = PUBNUB.$('video-self');

  var phone     = window.phone = PHONE({
      number        : my_number.number, // listen on this line
      publish_key   : 'pub-c-561a7378-fa06-4c50-a331-5c0056d0163c',
      subscribe_key : 'sub-c-17b7db8a-3915-11e4-9868-02ee2ddab7fe',
      ssl           : true
  });

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Video Session Connected
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  function connected(session) {
      video_out.innerHTML = '';
      video_out.appendChild(session.video);

      PUBNUB.$('number').value = ''+session.number;
      // sounds.play('sound/hi');
      console.log("Hi!");
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Video Session Ended
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  function ended(session) {
      // clearInterval(thumbnail.ival);
      // thumbnail.ival = 0;
      set_icon('facetime-video');
      img_out.innerHTML = '';
      // sounds.play('sound/goodbye');
      console.log("Bye!");
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Video Session Ended
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  function set_icon(icon) {
      video_out.innerHTML = '<span class="glyphicon glyphicon-' +
          icon + '"></span>';
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Start Phone Call
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  function dial(number) {
      // Dial Number
      var session = phone.dial(number);

      // No Dupelicate Dialing Allowed
      if (!session) return;

      // Show Connecting Status
      set_icon('send');
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Ready to Send or Receive Calls
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  phone.ready(function(){
      // Ready To Call
      set_icon('facetime-video');

      // Auto Call
      if ('call' in urlargs) {
          var number = urlargs['call'];
          PUBNUB.$('number').value = number;
          dial(number);
      }

      // Make a Phone Call
      PUBNUB.bind( 'mousedown,touchstart', PUBNUB.$('dial'), function(){
          var number = PUBNUB.$('number').value;
          if (!number) return;
          dial(number);
      } );

      // Hanup Call
      PUBNUB.bind( 'mousedown,touchstart', PUBNUB.$('hangup'), function() {
          phone.hangup();
          set_icon('facetime-video');
      } );

      // Take Picture
      PUBNUB.bind( 'mousedown,touchstart', PUBNUB.$('snap'), function() {
          var photo = phone.snap();

          if (!(photo && photo.image))
              return console.error(
                  '%c Connect your video with a partner first.',
                  'font-size:30px;background:#f00;color:#fff'
              );

          img_self.innerHTML = ' ';
          img_self.appendChild(photo.image);
          setTimeout( function() { img_self.innerHTML = ' ' }, 750 );
      } );
  });

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Received Call Thumbnail
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  function thumbnail(session) {
      img_out.innerHTML = '';
      img_out.appendChild(session.image);
      img_out.appendChild(phone.snap().image);
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Receiver for Calls
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  phone.receive(function(session){
      session.message(message);
      session.thumbnail(thumbnail);
      session.connected(connected);
      session.ended(ended);

      // if (!thumbnail.ival)
          // thumbnail.ival = setInterval( () => thumbnail(session), 100 );
  });

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Chat
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  var chat_in  = PUBNUB.$('pubnub-chat-input');
  var chat_out = PUBNUB.$('pubnub-chat-output');

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Send Chat MSG and update UI for Sending Messages
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  PUBNUB.bind( 'keydown', chat_in, function(e) {
      if ((e.keyCode || e.charCode) !== 13)     return true;
      if (!chat_in.value.replace( /\s+/g, '' )) return true;

      phone.send({ text : chat_in.value });
      add_chat( my_number.number + " (Me)", chat_in.value );
      chat_in.value = '';
  } )

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Update Local GUI
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  function add_chat( number, text ) {
      if (!text.replace( /\s+/g, '' )) return true;

      var newchat       = document.createElement('div');
      newchat.innerHTML = PUBNUB.supplant(
          '<strong>{number}: </strong> {message}', {
          message : safetxt(text),
          number  : safetxt(number)
      } );
      chat_out.insertBefore( newchat, chat_out.firstChild );
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // WebRTC Message Callback
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  function message( session, message ) {
      add_chat( session.number, message.text );
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // XSS Prevent
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  function safetxt(text) {
      return (''+text).replace( /[<>]/g, '' );
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Problem Occured During Init
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  phone.unable(function(details){
      console.log("Alert! - Reload Page.");
      console.log(details);
      set_icon('remove');
  });

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // Debug Output
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  phone.debug(function(details){
       // console.log(details);
  });

  })();
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  ionViewWillUnload(){
    this.events.unsubscribe('video_call_ended:true');
  }

}
