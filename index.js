
    // function startTimer(duration, display) {
    //   var timer = duration, minutes, seconds;
    //   setInterval(function () {
    //     minutes = parseInt(timer / 60, 10);
    //     seconds = parseInt(timer % 60, 10);

    //     minutes = minutes < 10 ? "0" + minutes : minutes;
    //     seconds = seconds < 10 ? "0" + seconds : seconds;

    //     display.textContent = minutes + ":" + seconds;

    //     if (--timer <scr 0) {
    //       timer = duration;
    //     }
    //   }, 1000);
    // }

    // window.onload = function () {
    //   var duration = 60 * 60, // 5 minutes
    //     display = document.querySelector('#timer');
    //   startTimer(duration, display);
    // };

    let Answer = [0]
    // 1 Yolg'iz farzand- only child
    // 2 Qiz bola jiyan-niece
    // 3 Amakivachcha-cousin
    // 4 O'g'il bola jiyan-nephew
    // 5 Beva-widowed
    // 6 O'lim-death
    // 7 To'y marosimi- the wedding
    // 8 Dafn marosimi-the funeral
    // 9 Lablar-lips
    // 10 Miyya-brain
    // 11 I have pain ....my leg-( in)
    // 12 Kiyinmoq -put..(on)
    // 13 Yechmoq-take off
    // 14 O'rta yoshli- middle-aged 
    // 15 Tish og'rig'i-toothache
    // 16 Aksirmoq-sneeze
    // 17 Shamollamoq-have a cold
    // 18Rak- cancer
    // 19Sog' bo'ling-bless you
    // 20 Omad-Good luck
    // 21 Tabriklayman!congratulations 
    // 22 Tilaklar-wishes
    // 23 Aslida-actually
    // 24 Yana nimadir-anything else
    // 25 Tahminan-about
    // 26 Shuning uchun-anyway
    // 27 Menga farqi yo'q-I don't mind
    // 28 Sizga bog'liq-It's up to you
    // 29 Keling ...boraylik(taklif)-why don't we go
    // 30 Bu muhim emas-it doesn't matter 
    // 31 Qanday achinarli-what a pity
    // 32 Barakalla-well done
    // 33 Shoshiling-hurry up
    // 34 Ehtiyot bo'ling -be careful 
    // const Thirt-five-q="I agree" 

    const Questions = [
      {
        second:
          `<div class="one-ques" >
       <p>Yolg'iz farzand</p>
       <input id="one-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Qiz bola jiyan</p>
       <input id="two-ans" placeholder="You answer"   type="text"> 
      </div>
        `
      },
      {
        second: `<div class="one-ques" >
       <p>Amakivachcha</p>
       <input id="three-ans" placeholder="You answer"   type="text"> </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>O'g'il bola jiyan</p>
       <input id="four-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Beva</p>
       <input id="fiv-ans" placeholder="You answer"   type="text"> 
      </div>`,
      },
      {
        second: `
        <div class="one-ques" >
       <p>O'lim</p>
       <input id="six-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>To'y marosimi</p>
       <input id="sev-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Dafn marosimi</p>
       <input id="eig-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Lablar</p>
       <input id="nin-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Miyya</p>
       <input id="ten-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>I have pain ....my</p>
       <input id="ele-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Kiymoq</p>
       <input id="twe-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Yechmoq</p>
       <input id="thi-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>O'rta yoshli</p>
       <input id="fout-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Tish og'rig'i</p>
       <input id="fivt-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Aksirmoq</p>
       <input id="sixt-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Shamollamoq</p>
       <input id="sevt-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Rak</p>
       <input id="eigt-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Sog' bo'ling</p>
       <input id="nint-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `<div class="one-ques" >
       <p>Omad</p>
       <input id="twen-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Tabriklayman</p>
       <input id="twe-one-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Tilaklar</p>
       <input id="twe-two-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `<div class="one-ques" >
       <p>Aslida</p>
       <input id="twe-three-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Yana nimadir</p>
       <input id="twe-four-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `,
        <div class="one-ques" >
       <p>Tahminan</p>
       <input id="twe-fiv-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Shuning uchun</p>
       <input id="twe-six-ans" placeholder="You answer"   type="text"> 
      </div> `
      },
      {
        second: `
        <div class="one-ques" >
       <p>Menga farqi yo'q</p>
       <input id="twe-sev-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Sizga bog'liq</p>
       <input id="twe-eig-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `
        <div class="one-ques" >
       <p>Keling ...boraylik(taklif)</p>
       <input id="twe-nin-ans" placeholder="You answer"   type="text"> 
      </div>
        `
      },
      {
        second: `<div class="one-ques" >
       <p>Bu muhim emas</p>
       <input id="thirt-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `<div class="one-ques" >
       <p>Qanday achinarli</p>
       <input id="thirt-one-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `<div class="one-ques" >
       <p>Barakalla</p>
       <input id="thirt-two-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `<div class="one-ques" >
       <p>Shoshiling</p>
       <input id="thirt-three-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {

        second: `<div class="one-ques" >
       <p>Ehtiyot bo'ling</p>
       <input id="thirt-four-ans" placeholder="You answer"   type="text"> 
      </div>`
      },
      {
        second: `<div class="one-ques" >
       <p>Roziman</p>
       <input id="thirt-five-ans" placeholder="You answer"   type="text"> 
      </div>`

      },


    ]

    document.getElementById("baseMap").innerHTML = Questions.map(BaseMap);
    function BaseMap(index) {
      const Spl = [index.second]
      Spl.splice(",")
      return [index.second]
    }
    const oneQ = "Only child"
    const twoQ = "Niece"
    const threeQ = "Cousin"
    const fourQ = "Nephew"
    const fiveQ = "Widowed"
    const sixQ = "Death"
    const sevenQ = "The wedding"
    const eightQ = " The funeral"
    const nineQ = "Lips"
    const tenQ = "Brain"
    const eleQ = "In"
    const tweQ = "Put on"
    const thiQ = "Take off"
    const foutQ = "Middle-age"
    const fiftQ = "Toothache"
    const sixtQ = "Sneeze"
    const sevtQ = "Have a cold"
    const eigtQ = "Cancer"
    const nintQ = "Bless you"
    const twenQ = "Good luck"
    const tweOneQ = "Congratulations "
    const tweTwoQ = "Wishes"
    const twethreeQ = "Actually"
    const twefourQ = "Anything else"
    const twefivQ = "About"
    const twesixQ = "Anyway"
    const twesevQ = "I don't mind"
    const tweeigQ = "It's up to you"
    const tweninQ = "Why don't we go"
    const thirtQ = "It doesn't matter"
    const thirtoneQ = "What a pity"
    const thirttwoQ = "Will done"
    const thirtthreeQ = "Hurry up"
    const thirtfourQ = "Be careful"
    const thirtfiveQ = "I agree";
    const btn = document.getElementById('btn');


    btn.addEventListener('click', () => {
      const One = document.getElementById('one-ans').value;
      
      const Two = document.getElementById('two-ans').value;
      const Three = document.getElementById('three-ans').value;
      const Four = document.getElementById('four-ans').value;
      const Five = document.getElementById('fiv-ans').value;
      const Six = document.getElementById('six-ans').value;
      const Seven = document.getElementById('sev-ans').value;
      const Eight = document.getElementById('eig-ans').value;
      const Nine = document.getElementById('nin-ans').value;
      const Ten = document.getElementById('ten-ans').value;
      const Ele = document.getElementById('ele-ans').value;
      const Twe = document.getElementById('twe-ans').value;
      const thi = document.getElementById('thi-ans').value;
      const fout = document.getElementById('fout-ans').value;
      const fivt = document.getElementById('fivt-ans').value;
      const sixt = document.getElementById('sixt-ans').value;
      const sevt = document.getElementById('sevt-ans').value;
      const eigt = document.getElementById('eigt-ans').value;
      const nint = document.getElementById('nint-ans').value;
      const Twen = document.getElementById('twen-ans').value;
      const TweOne = document.getElementById('twe-one-ans').value;
      const TweTwo = document.getElementById('twe-two-ans').value;
      const TweThree = document.getElementById('twe-three-ans').value;
      const TweFour = document.getElementById('twe-four-ans').value;
      const TweFiv = document.getElementById('twe-fiv-ans').value;
      const TweSix = document.getElementById('twe-six-ans').value;
      const TweSev = document.getElementById('twe-sev-ans').value;
      const TweEig = document.getElementById('twe-eig-ans').value;
      const TweNin = document.getElementById('twe-nin-ans').value;
      const Thirt = document.getElementById('thirt-ans').value;
      const ThirtOne = document.getElementById('thirt-one-ans').value;
      const ThirtTwo = document.getElementById('thirt-two-ans').value;
      const ThirtThree = document.getElementById('thirt-three-ans').value;
      const ThirtFour = document.getElementById('thirt-four-ans').value;
      const ThirtFive = document.getElementById('thirt-five-ans').value;

      if (oneQ === One) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (twoQ === Two) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (threeQ === Three) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (fourQ === Four) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (fiveQ === Five) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (sixQ === Six) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (sevenQ === Seven) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (eightQ === Eight) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (nineQ === Nine) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (tenQ === Ten) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (eleQ === Ele) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (tweQ === Twe) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (thiQ === thi) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (foutQ === fout) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (fiftQ === fivt) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (sixtQ === sixt) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (sevtQ === sevt) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (eigtQ === eigt) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (nintQ === nint) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (twenQ === Twen) {
        console.log("sucsess");
        Answer++
      } else {
        console.log("error");
      }
      if (tweOneQ === TweOne) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (tweTwoQ === TweTwo) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (twethreeQ === TweThree) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (twefourQ === TweFour) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (twefivQ === TweFiv) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (twesixQ === TweSix) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (twesevQ === TweSev) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (tweeigQ === TweEig) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (tweninQ === TweNin) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (thirtQ === Thirt) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (thirtoneQ === ThirtOne) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (thirttwoQ === ThirtTwo) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (thirtthreeQ === ThirtThree) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (thirtfourQ === ThirtFour) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
      }
      if (thirtfiveQ === ThirtFive) {
        console.log("sucsess");
        Answer++

      } else {
        console.log("error");
       
      }
      document.getElementById('anss').innerHTML = Answer;
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
  topFunction()
      
      btn.classList.add("display")
      btn.classList.remove("button")
    })
    window.onscroll= function(){ScrollP()};
    function ScrollP(){
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display="block"
      } else {
        btn.style.display = "none";
      }
    }
   

  