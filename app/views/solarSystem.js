// import Ember from 'ember';
//
// export default Ember.View.extend({
//
//   didInsertElement: function() {
//     var data;
//     var imageData;
//     var ctx;
//     var canvas;
//     var sun = new Image();
//     var moon = new Image();
//     var earth = new Image();
//     var stars = new Image();
//
//     function draw() {
//       canvas = document.getElementById('canvas');
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//
//       sun.src = 'assets/images/sun.png';
//       moon.src = 'assets/images/moon.png';
//       earth.src = 'assets/images/earth.png';
//       stars.src = 'assets/images/stars.jpg';
//
//       if (canvas.getContext) {
//         ctx = canvas.getContext('2d');
//       }
//       ctx.clearRect(0,0,2000,2000); // clear ctx
//
//       ctx.save();
//       ctx.drawImage(stars,0,0,1500,900);
//       ctx.translate(720,415);
//
//       // Earth
//       var time = new Date();
//       ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
//       ctx.translate(280,0);
//       // ctx.fillRect(0,-12,50,24); // Shadow
//       ctx.drawImage(earth,-12,-12,50,50);
//
//       // Moon
//       ctx.save();
//       ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
//       ctx.translate(20,40);
//       ctx.drawImage(moon,-5,23,15,10);
//
//       ctx.restore();
//       ctx.restore();
//
//       // ctx.beginPath();
//       // ctx.arc(720,415,300,0,Math.PI*2,false); // Earth orbit
//       // ctx.stroke();
//       ctx.drawImage(sun,600,300,250,250);
//
//
//       window.requestAnimationFrame(draw);
//     }
//     draw();
//
//     window.onload = function() {
//       imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//       data = imageData.data;
//       ctx.putImageData(imageData, 0, 0);
//
//       var tolerance = 900;
//       for(var i = 0; i < data.length; i += 4) {
//         var diff = Math.abs(data[i] - data[0]) + Math.abs(data[i+1] - data[1]) + Math.abs(data[i+2] - data[2]);
//         if(diff < tolerance) {
//             data[i + 3] = 0;
//         }
//       }
//     };
//
//     Ember.$('#canvas').on('click', function() {
//         var factor = 0.05;
//         for (var i = 1; i < 10; i+=factor) {
//           animateGrowth();
//         }
//
//       function animateGrowth() {
//           ctx.drawImage(sun,600/(i*1.5),300/(i*1.5),(250*i),(250*i));
//       }
//
//       var notZeroes = 0;
//       var zeroes = 0;
//       var alpha = 0;
//       for(var i = 0; i < data.length; i++) {
//         if (data[i] !== 0) {
//           notZeroes +=1;
//           if (data[i]%4 === 0) {
//             alpha +=1;
//           }
//         } else {
//           zeroes +=1;
//         }
//        }
//       console.log('!0: ' + notZeroes);
//       console.log('0: ' +zeroes);
//       console.log('alpha: '+alpha);
//     });
//   }
// });
