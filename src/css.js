const string = `
.body1{
    background-color:#EFA41C;
    margin:30px auto;
    width:126px;
    height:200px;
    border-radius:300px 300px 200px 200px;
    position: relative;
    
    }
    .ears{
        width:36px;
        height:70px;
        border-radius:100% 100% 0 0;
        background-color:#EFA41C;
        position: absolute;
        z-index: -1;
    }
    .ears::before{
    content:'';
    display: block;
    width: 24px;
    height:40px;
    background-color: #E86029;
    position:absolute;
    left:4px;
    top:15px;
    border-radius:100% 100% 0 0;
    
    }
    .ears.left{
        top:-20px;
        left:2px;
    }
    .ears.right{
        top:-20px;
        right:2px;
    }
    .ears.left::before{
      top:18px;
      left:6px
    }
    .eyebrows{
        width:16px;
        height:12px;
        border-radius:8px;
        background-color:white;
        position: absolute;
        ;
        transform: translate(-50% ,-50%);
        top:50%;
    }
    .eyebrows.left{
    left:30px;
    top:22px;
    }
    .eyebrows.right{
        right:22px;
        top:20px;
    }
    .nose{
        background: #512E27;
        width: 20px;
        height: 10px;
        border-radius: 0 0 30px 30px;
        position: relative;
       left:50%;
       top:45px;
        transform: translateX(-50%);
      }
      .eye{
        width: 20px;
        height:20px;
        border-radius:50%;
        border:3px solid black;
        position: absolute;
        top:34px;
      
      }
      .eye::after{
        content:'';
        display: block;
        width: 23px; 
        height:12px;
        background-color:#EFA41C;
        position:absolute;
        left:-3px;
        top:50%;
    
      }
      .eye.left{
    left:30px;
      }
      .eye.right{
    right:30px;
      }
      .mouth{
        width: 20px;
        height: 20px;
      background-color:#EA7775;
    
        position: absolute;
        top:62px;
        left: 0;
        right: 0;
        margin: auto;
        border-radius: 120px 120px 0 0;
        transform: rotate(180deg);
      }
    .whiskers{
        width: 20px;
        height: 10px;
        border:3px solid black;
       position: absolute;
       z-index: 3;
        
    }
    .whiskers::after{
        content:'';
        display: block;
        width:10px;
        height:12px;
        border-radius:5px;
        background-color:#EFA41C;
        position: absolute;
        top:-6px;
        left:1px
    }
    .whiskers.left{
        border-top:none;
         border-radius: 0 0 60px 60px; 
         left:50%;
         top:60px;
    
    
    }
    .whiskers.right{
        border-top:none;
         border-radius: 0 0 60px 60px; 
         right:50%;
         top:60px;
    
    
    }
    .bandana{
        width:126px;
        height:10px;
        background-color:#5DBDB9;
        position: absolute;
        top:90px;
        box-shadow: inset -5px -5px rgba(76,161,160, 0.5);
    }
    .bandana>.top{
    width: 25px; 
    height: 25px;
    background-color:#5DBDB9;
      border-radius: 25px 0px;
      position:absolute;
      right:-23px;
      top:-20px;
      box-shadow:inset  -5px -5px rgba(79,163,161, 0.5)
    }
    .bandana>.bottom{
        width: 25px; 
        height:25px;
        background-color:#5DBDB9;
          border-radius: 0 25px;
          position:absolute;
          right:-25px;
          top:-8px;
          transform:rotate(-30deg) ;
          box-shadow:inset  -5px -5px rgba(79,163,161, 0.5)
        }
        .stomach{
            width: 72px;
            height:72px;
            position:absolute;
            left:50%;
            top:105px;
            transform:translateX(-50%);
            background-color:white;
            border-radius:0 0 36px 36px;
            box-shadow:inset 5px 5px rgb(222,222,222,0.5)
    
        }
        .legs{
            /* width:140px;
            position:absolute;
            top:180px;
            height:30px;
            background-color:white;
            border-radius: */
        }
        .leg{
            width:30px;
            height:15px;
            border-radius:15px 15px 0 0;
            background-color:white;
            position:absolute;
            bottom:0px;
            box-shadow:inset 0 -5px rgb(222,222,222,0.5)
          
          
        }
        .leg::after{
            content:'';
            display:block;
            width:30px;
            height:15px;
            border-radius:15px 15px 0 0;
            background-color:white;
            position:absolute;
            bottom:0px;
            z-index:-5;
            box-shadow:inset 0 -4px rgb(222,222,222,0.5)
           
        }
        .leg.left{
            left:25px;
        }
        .leg.left::after{
            left:-25px;
    
        }
        .leg.right{
            right:25px;
        }
        .leg.right:after{
            right:-25px;
        }
        .tail{
            width:60px;
            height:12px;
            background-color:#EFA41C;
            border-radius:5px ;
            position:absolute;
            top:140px;
            left:-40px;
            transition: 300ms;
            transform: rotate(-30deg);
            animation:move 200ms infinite  alternate; 
    
        }
        @keyframes move{
            0%{transform: rotate(30deg);}
            100%{transform: rotate(40deg);}
        }
        `
export default string