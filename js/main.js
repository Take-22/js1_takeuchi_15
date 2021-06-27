//得点
let PLYpoint = 0;
let CPUpoint = 0;

// PlayerがカードをクリックしたらCPU handsが出る関数
$("#eiji").on("click",battle01);
$("#arthur").on("click",battle02);
$("#shorter").on("click",battle03);
$("#golzine").on("click",battle04);
$("#ash").on("click",battle05);

//CPUの手
// 1=Eiji, 2=Authur, 3=Shorter, 4=Golzine, 5=Ash
const CPU = [1, 2, 3, 4, 5];
const len = CPU.length;

//1クリック目の発火
//battle01 | PlayerがEijiをクリックした場合
function battle01(){
    for(let i=0; i<len; i++){
        const r = Math.floor( Math.random() * CPU.length );
        const v = CPU.splice(r,1);
        console.log(v);
        //以下、5ケースの条件分岐
        if(v == 1){
            $("#cpu_hands").html("<img src='./img/eiji.png'>");
            $("#player_hands").html("<img src='./img/eiji.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("ALMOST GET IT... KEEP IT UP !");
            $("#eiji").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_eiji").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            //無し
            return v;
        }
        else if(v == 2){
            $("#cpu_hands").html("<img src='./img/arthur.png'>");
            $("#player_hands").html("<img src='./img/eiji.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("OOPS. IT SUCKS.");
            $("#eiji").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_arthur").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 1;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#CPUpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }    
        else if(v == 3){
            $("#cpu_hands").html("<img src='./img/shorter.png'>");
            $("#player_hands").html("<img src='./img/eiji.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("OOPS. IT SUCKS.");
            $("#eiji").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_shorter").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 1;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint); 
            // pistol
            $("#CPUpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
        else if(v == 4){
            $("#cpu_hands").html("<img src='./img/golzine.png'>");
            $("#player_hands").html("<img src='./img/eiji.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("OOPS. IT SUCKS.");
            $("#eiji").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_golzine").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 1; 
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#CPUpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
        else{
            $("#cpu_hands").html("<img src='./img/ash.png'>");
            $("#player_hands").html("<img src='./img/eiji.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("GIANT KILLING !!!");
            $("#eiji").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_ash").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 2; //giant killing
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#PLYpistol").prepend("<img src='./img/pistol.png'>");
            $("#PLYpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
    } 
};

//battle02 | PlayerがArthurをクリックした場合
function battle02(){
    for(let i=0; i<len; i++){
        const r = Math.floor( Math.random() * CPU.length );
        const v = CPU.splice(r,1);
        console.log(v);
        //以下、5ケースの条件分岐
        if(v == 1){
            $("#cpu_hands").html("<img src='./img/eiji.png'>");
            $("#player_hands").html("<img src='./img/arthur.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("COOL ! YOU BEAT IT !");
            $("#arthur").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_eiji").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 1;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#PLYpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
        else if(v == 2){
            $("#cpu_hands").html("<img src='./img/arthur.png'>");
            $("#player_hands").html("<img src='./img/arthur.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("ALMOST GET IT... KEEP IT UP !");
            $("#arthur").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_arthur").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            //無し
            return v;
        }    
        else if(v == 3){
            $("#cpu_hands").html("<img src='./img/shorter.png'>");
            $("#player_hands").html("<img src='./img/arthur.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("OOPS. IT SUCKS.");
            $("#arthur").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_shorter").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 1;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#CPUpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }    
        else if(v == 4){
            $("#cpu_hands").html("<img src='./img/golzine.png'>");
            $("#player_hands").html("<img src='./img/arthur.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("OOPS. IT SUCKS.");
            $("#arthur").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_golzine").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 1;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#CPUpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
        else{
            $("#cpu_hands").html("<img src='./img/ash.png'>");
            $("#player_hands").html("<img src='./img/arthur.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("OOPS. IT SUCKS.");
            $("#arthur").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_ash").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 1;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#CPUpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
    }
};

//battle03 | PlayerがShorterをクリックした場合
function battle03(){
    for(let i=0; i<len; i++){
        const r = Math.floor( Math.random() * CPU.length );
        const v = CPU.splice(r,1);
        console.log(v);
        //以下、5ケースの条件分岐
        if(v == 1){
            $("#cpu_hands").html("<img src='./img/eiji.png'>");
            $("#player_hands").html("<img src='./img/shorter.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("COOL ! YOU BEAT IT !");
            $("#shorter").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_eiji").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 1;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#PLYpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
        else if(v == 2){
            $("#cpu_hands").html("<img src='./img/arthur.png'>");
            $("#player_hands").html("<img src='./img/shorter.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("COOL ! YOU BEAT IT !");
            $("#shorter").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_arthur").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 1;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#PLYpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
        else if(v == 3){
            $("#cpu_hands").html("<img src='./img/shorter.png'>");
            $("#player_hands").html("<img src='./img/shorter.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("ALMOST GET IT... KEEP IT UP !");
            $("#shorter").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_shorter").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            //無し
            return v;
        }    
        else if(v == 4){
            $("#cpu_hands").html("<img src='./img/golzine.png'>");
            $("#player_hands").html("<img src='./img/shorter.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("OOPS. IT SUCKS.");
            $("#shorter").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_golzine").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 1;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#CPUpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
        else{
            $("#cpu_hands").html("<img src='./img/ash.png'>");
            $("#player_hands").html("<img src='./img/shorter.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("OOPS. IT SUCKS.");
            $("#shorter").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_ash").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 1;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#CPUpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
    }
};

//battle04 | PlayerがGolzineをクリックした場合
function battle04(){
    for(let i=0; i<len; i++){
        const r = Math.floor( Math.random() * CPU.length );
        const v = CPU.splice(r,1);
        console.log(v);
        //以下、5ケースの条件分岐
        if(v == 1){
            $("#cpu_hands").html("<img src='./img/eiji.png'>");
            $("#player_hands").html("<img src='./img/golzine.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("COOL ! YOU BEAT IT !");
            $("#golzine").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_eiji").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 1;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#PLYpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
        else if(v == 2){
            $("#cpu_hands").html("<img src='./img/arthur.png'>");
            $("#player_hands").html("<img src='./img/golzine.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("COOL ! YOU BEAT IT !");
            $("#golzine").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_arthur").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 1;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#PLYpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }    
        else if(v == 3){
            $("#cpu_hands").html("<img src='./img/shorter.png'>");
            $("#player_hands").html("<img src='./img/golzine.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("COOL ! YOU BEAT IT !");
            $("#golzine").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_shorter").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 1;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#PLYpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }    
        else if(v == 4){
            $("#cpu_hands").html("<img src='./img/golzine.png'>");
            $("#player_hands").html("<img src='./img/golzine.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("ALMOST GET IT... KEEP IT UP !");
            $("#golzine").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_golzine").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            //無し
            return v;
        }
        else{
            $("#cpu_hands").html("<img src='./img/ash.png'>");
            $("#player_hands").html("<img src='./img/golzine.png'>"); //playerが指定したキャラを場に出す
            $("#judgement").html("OOPS. IT SUCKS.");
            $("#golzine").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_ash").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 1;
            // pistol
            $("#CPUpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
    }
};

//battle05 | PlayerがAshをクリックした場合
function battle05(){
    for(let i=0; i<len; i++){
        const r = Math.floor( Math.random() * CPU.length );
        const v = CPU.splice(r,1);
        console.log(v);
        //以下、5ケースの条件分岐
        if(v == 1){
            $("#cpu_hands").html("<img src='./img/eiji.png'>");
            $("#player_hands").html("<img src='./img/ash.png'>"); //指定したキャラを場に出す
            $("#judgement").html("MAN... THE WORST HAND EVER...");
            $("#ash").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_eiji").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 2; //giant killing
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#CPUpistol").prepend("<img src='./img/pistol.png'>");
            $("#CPUpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
        else if(v == 2){
            $("#cpu_hands").html("<img src='./img/arthur.png'>");
            $("#player_hands").html("<img src='./img/ash.png'>"); //指定したキャラを場に出す
            $("#judgement").html("COOL ! YOU BEAT IT !");
            $("#ash").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_arthur").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 1;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#PLYpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }    
        else if(v == 3){
            $("#cpu_hands").html("<img src='./img/shorter.png'>");
            $("#player_hands").html("<img src='./img/ash.png'>"); //指定したキャラを場に出す
            $("#judgement").html("COOL ! YOU BEAT IT !");
            $("#ash").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_shorter").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 1;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#PLYpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }    
        else if(v == 4){
            $("#cpu_hands").html("<img src='./img/golzine.png'>");
            $("#player_hands").html("<img src='./img/ash.png'>"); //指定したキャラを場に出す
            $("#judgement").html("COOL ! YOU BEAT IT !");
            $("#ash").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_golzine").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 1;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            $("#PLYpistol").prepend("<img src='./img/pistol.png'>");
            return v;
        }
        else{
            $("#cpu_hands").html("<img src='./img/ash.png'>");
            $("#player_hands").html("<img src='./img/ash.png'>"); //指定したキャラを場に出す
            $("#judgement").html("ALMOST GET IT... KEEP IT UP !");
            $("#ash").fadeOut(0); //2回目以降はクリック出来ない関数
            $("#_ash").fadeOut(0); //CPUの選んだキャラが消える
            PLYpoint += 0;
            CPUpoint += 0;
            $("#PLYpoint").html(PLYpoint);
            $("#CPUpoint").html(CPUpoint);
            // pistol
            //無し
            return v;
        }
    }
};

// 全てのキャラを選択したら結果が出る関数
    //最初にEijiをクリック
$("#eiji").on("click",function(){
    $("#arthur").on("click",function(){
        $("#shorter").on("click",function(){
            $("#golzine").on("click",function(){
                $("#ash").on("click",function(){
                   //action
                   getResult();    
                });
            });
            $("#ash").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult();         
                });  
            });
        });
        $("#golzine").on("click",function(){
            $("#shorter").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult();
                });
            });
            $("#ash").on("click",function(){
                $("#shorter").on("click",function(){
                    //action    
                    getResult();         
                });  
            });
        });
        $("#ash").on("click",function(){
            $("#shorter").on("click",function(){
                $("#golzine").on("click",function(){
                    //action    
                    getResult();         
                });
            });
            $("#golzine").on("click",function(){
                $("#shorter").on("click",function(){
                    //action    
                    getResult();          
                });            
            });
        });
    });
    $("#shorter").on("click",function(){
        $("#arthur").on("click",function(){
            $("#golzine").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });              
            });
        });
        $("#golzine").on("click",function(){
            $("#arthur").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#ash").on("click",function(){
            $("#arthur").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
    $("#golzine").on("click",function(){
        $("#arthur").on("click",function(){
            $("#shorter").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#shorter").on("click",function(){
            $("#arthur").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#ash").on("click",function(){
            $("#arthur").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#shorter").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
    $("#ash").on("click",function(){
        $("#arthur").on("click",function(){
            $("#shorter").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#shorter").on("click",function(){
            $("#arthur").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#golzine").on("click",function(){
            $("#arthur").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#shorter").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
});
    //最初にArthurをクリック
$("#arthur").on("click",function(){
    $("#eiji").on("click",function(){
        $("#shorter").on("click",function(){
            $("#golzine").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#golzine").on("click",function(){
                    //action     
                    getResult();                
                });  
            });
        });
        $("#golzine").on("click",function(){
            $("#shorter").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#golzine").on("click",function(){
                    //action     
                    getResult();                
                });  
            });
        });
        $("#ash").on("click",function(){
            $("#shorter").on("click",function(){
                $("#golzine").on("click",function(){
                    //action     
                    getResult();                
                });
            });
            $("#golzine").on("click",function(){
                $("#shorter").on("click",function(){
                    //action     
                    getResult();                
                });            
            });
        });
    });
    $("#shorter").on("click",function(){
        $("#eiji").on("click",function(){
            $("#golzine").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });              
            });
        });
        $("#golzine").on("click",function(){
            $("#eiji").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#ash").on("click",function(){
            $("#eiji").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
    $("#golzine").on("click",function(){
        $("#eiji").on("click",function(){
            $("#shorter").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#shorter").on("click",function(){
            $("#eiji").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#ash").on("click",function(){
            $("#eiji").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#shorter").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
    $("#ash").on("click",function(){
        $("#eiji").on("click",function(){
            $("#shorter").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#shorter").on("click",function(){
            $("#eiji").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#golzine").on("click",function(){
            $("#eiji").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#shorter").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
});
    //最初にShorterをクリック
$("#shorter").on("click",function(){
    $("#eiji").on("click",function(){
        $("#arthur").on("click",function(){
            $("#golzine").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult();                     
                });  

            });
        });
        $("#golzine").on("click",function(){
            $("#arthur").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#arthur").on("click",function(){
                    //action     
                    getResult();                
                });  
            });
        });
        $("#ash").on("click",function(){
            $("#arthur").on("click",function(){
                $("#golzine").on("click",function(){
                    //action     
                    getResult();                
                });
            });
            $("#golzine").on("click",function(){
                $("#arthur").on("click",function(){
                    //action     
                    getResult();                
                });            
            });
        });
    });
    $("#arthur").on("click",function(){
        $("#eiji").on("click",function(){
            $("#golzine").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });              
            });
        });
        $("#golzine").on("click",function(){
            $("#eiji").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#ash").on("click",function(){
            $("#eiji").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
    $("#golzine").on("click",function(){
        $("#eiji").on("click",function(){
            $("#arthur").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#arthur").on("click",function(){
            $("#eiji").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#ash").on("click",function(){
            $("#eiji").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#arthur").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
    $("#ash").on("click",function(){
        $("#eiji").on("click",function(){
            $("#arthur").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#arthur").on("click",function(){
            $("#eiji").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#golzine").on("click",function(){
            $("#eiji").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#arthur").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
});

    //最初にGolzineをクリック
$("#golzine").on("click",function(){
    $("#eiji").on("click",function(){
        $("#arthur").on("click",function(){
            $("#shorter").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#shorter").on("click",function(){
                    //action     
                    getResult();                
                });  
            });
        });
        $("#shorter").on("click",function(){
            $("#arthur").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#arthur").on("click",function(){
                    //action     
                    getResult();                
                });  
            });
        });
        $("#ash").on("click",function(){
            $("#arthur").on("click",function(){
                $("#shorter").on("click",function(){
                    //action     
                    getResult();                
                });
            });
            $("#shorter").on("click",function(){
                $("#arthur").on("click",function(){
                    //action     
                    getResult();                
                });            
            });
        });
    });
    $("#arthur").on("click",function(){
        $("#eiji").on("click",function(){
            $("#shorter").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });              
            });
        });
        $("#shorter").on("click",function(){
            $("#eiji").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#ash").on("click",function(){
            $("#eiji").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#shorter").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
    $("#shorter").on("click",function(){
        $("#eiji").on("click",function(){
            $("#arthur").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#arthur").on("click",function(){
            $("#eiji").on("click",function(){
                $("#ash").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#ash").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#ash").on("click",function(){
            $("#eiji").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#arthur").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
    $("#ash").on("click",function(){
        $("#eiji").on("click",function(){
            $("#arthur").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#shorter").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#arthur").on("click",function(){
            $("#eiji").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#shorter").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#shorter").on("click",function(){
            $("#eiji").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#arthur").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
});
    //最初にAshをクリック
$("#ash").on("click",function(){
    $("#eiji").on("click",function(){
        $("#arthur").on("click",function(){
            $("#shorter").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#shorter").on("click",function(){
                    //action     
                    getResult();                
                });  
            });
        });
        $("#shorter").on("click",function(){
            $("#arthur").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#arthur").on("click",function(){
                    //action     
                    getResult();                
                });  
            });
        });
        $("#golzine").on("click",function(){
            $("#arthur").on("click",function(){
                $("#shorter").on("click",function(){
                    //action     
                    getResult();                
                });
            });
            $("#shorter").on("click",function(){
                $("#arthur").on("click",function(){
                    //action     
                    getResult();                
                });            
            });
        });
    });
    $("#arthur").on("click",function(){
        $("#eiji").on("click",function(){
            $("#shorter").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });              
            });
        });
        $("#shorter").on("click",function(){
            $("#eiji").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#golzine").on("click",function(){
            $("#eiji").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#shorter").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
    $("#shorter").on("click",function(){
        $("#eiji").on("click",function(){
            $("#arthur").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#arthur").on("click",function(){
            $("#eiji").on("click",function(){
                $("#golzine").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#golzine").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#golzine").on("click",function(){
            $("#eiji").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#arthur").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
    $("#golzine").on("click",function(){
        $("#eiji").on("click",function(){
            $("#arthur").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#shorter").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#arthur").on("click",function(){
            $("#eiji").on("click",function(){
                $("#shorter").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#shorter").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
        $("#shorter").on("click",function(){
            $("#eiji").on("click",function(){
                $("#arthur").on("click",function(){
                    //action
                    getResult(); 
                });
            });
            $("#arthur").on("click",function(){
                $("#eiji").on("click",function(){
                    //action
                    getResult(); 
                });
            });
        });
    });
});

//最終結果を表示する関数
function getResult(){
    window.setTimeout(function (){
        if(PLYpoint > CPUpoint){
            $("#judgement").fadeOut(500);
            window.setTimeout(function(){
            $("#judgementFinal").prepend("YOU WIN");
            $("#restart").html("PLAY AGAIN...");
            },510);
        }else if(PLYpoint < CPUpoint){
            $("#judgement").fadeOut(500);
            window.setTimeout(function(){
            $("#judgementFinal").prepend("YOU LOSE");
            $("#restart").html("PLAY AGAIN...");
            },510);                        
        }else{
            $("#judgement").fadeOut(500);
            window.setTimeout(function(){
            $("#judgementFinal").prepend("DRAW");
            $("#restart").html("PLAY AGAIN...");
            },510);                        
        }
    },500);
}

// better to do
//できればウィンドウに合わせて画面作る

