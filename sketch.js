let estado;
let atirou;
let perdeu;
let ganhou;
let winFase1;

let velocidadeNave = 3;
let velocidadeMet = 1.5;
let quantidadeMet = 4;

let numeroMet = [];
let explosao = [];
let explodiu = [];
let contExp = [];
let tempExp = [];
let xMet = [];
let yMet = [];
let hit = [];
let xTiro,yTiro;
let xNave,yNave;
let somaAtual;
let subtAtual;
let soma;
let subtrair;

let music;
let soundExplo;
let soundDisp;
let soundButton;

let imgFundoJogo;
let imgProgramador;
let imgEducador;
let imgFundo;
let imgDisparo;
let imgMeteoro;
let imgNave;

let fontJoystick;
let SquareBeat;
let KaphRegular;
let FredokaOne;

function setup() {
  createCanvas(512,480);
  
  estado = "menu";
  perdeu = false;
  ganhou = false;
  atirou = false;
  winFase1 = false;
  
  for(let i = 0; i < quantidadeMet; i++){
    numeroMet[i] = parseInt(random(1,10));
    xMet[i] = random(30,width-30);
    yMet[i] = random(0,-200);
    hit[i] = false;
    explodiu[i] = false;
    contExp[i] = 0;
    tempExp[i] = 0;
  }
  
  xNave = width-250; 
  yNave = height-70;
  
  soma = parseInt(random(15,30));
  somaAtual = 0;
  subtrair = parseInt(random(10,20));
  subtAtual = parseInt(random(25,35));
}

function reset(){
  estado = "menu";
  perdeu = false;
  ganhou = false;
  atirou = false;
  winFase1 = false;
  
  velocidadeMet = 1.5;
  quantidadeMet = 4;
  
  xNave = width-250; 
  yNave = height-70;
  
  soma = parseInt(random(15,30));
  somaAtual = 0;
  subtrair = parseInt(random(10,20));
  subtAtual = parseInt(random(25,35));
  
  for(let i = 0; i < quantidadeMet; i++){
    numeroMet[i] = parseInt(random(1,10));
    xMet[i] = random(30,width-30);
    yMet[i] = random(0,-200);
    hit[i] = false;
    explodiu[i] = false;
    contExp[i] = 0;
    tempExp[i] = 0;
  }
}

function resetFase2(){
  xNave = width-250; 
  yNave = height-70;
  
  velocidadeMet = 2;
  quantidadeMet = 6;
  
  for(let i = 0; i < quantidadeMet; i++){
    numeroMet[i] = parseInt(random(1,10));
    xMet[i] = random(30,width-30);
    yMet[i] = random(0,-200);
    hit[i] = false;
    explodiu[i] = false;
    contExp[i] = 0;
    tempExp[i] = 0;
  }
}

function preload() {
  imgProgramador = loadImage("assets/img/imgProgramador.jpg");
  imgFundoJogo = loadImage("assets/img/imgFundoJogo.png");
  imgEducador = loadImage("assets/img/imgEducador.jpg");
  imgDisparo = loadImage("assets/img/imgDisparo.png");
  imgMeteoro = loadImage("assets/img/imgMeteoro.png");
  imgFundo = loadImage("assets/img/imgFundo.png");
  imgNave = loadImage("assets/img/imgNave.png");
  
  music = loadSound('assets/sound/somPrincipal.mp3', playSound);
  soundExplo = loadSound('assets/sound/explosions.wav');
  soundDisp = loadSound('assets/sound/lasers.wav');
  soundButton = loadSound('assets/sound/buttonselect.wav');
  
  for(let i = 0; i < 7; i++){
    explosao.push(loadImage("assets/img/imgExp" + i +".png"));
  }
  
  KaphRegular = loadFont("assets/font/KaphRegular.ttf");
  fontJoystick = loadFont("assets/font/Joystick.ttf");
  SquareBeat = loadFont("assets/font/SquareBeat.otf");
  FredokaOne = loadFont("assets/font/FredokaOne-Regular.ttf");
}

function draw() {
  if(estado == "menu"){
    menu();
  }
  if(estado == "start"){
    start();
  }
  if(estado == "instrucoes"){
    instrucoes();
  }
  if(estado == "creditos"){
    creditos();
  }
}

function menu(){
  background(imgFundo);
  
  fill(255);
  rect(width/2-97,height/2-77,200,40,20);
  rect(width/2-97,height/2-17,200,40,20);
  rect(width/2-97,height/2+43,200,40,20);
  fill(200,0,0);
  rect(width/2-100,height/2-80,200,40,20);
  rect(width/2-100,height/2-20,200,40,20);
  rect(width/2-100,height/2+40,200,40,20);
  
  push()
    fill(255);
    textSize(25);
    textFont(SquareBeat);
    textAlign(CENTER, CENTER);
    text("START",width/2, height/2-65);
    text("INSTRUÇÕES",width/2, height/2-5);
    text("CRÉDITOS",width/2, height/2+55);
  pop()
}

function creditos() {
  background(imgFundo);
  
  push()
    fill(255);
    textSize(20);
    textFont(FredokaOne);
    text("CRÉDITOS",200,50);
    text("PROGRAMADOR:",270,160);
    text("EDUCADOR:",300,320);
    textSize(15);
    text("Henrique Eduardo",285,190);
    text("José Fábio",320,350);
  pop()
  
  push()
    fill(255);
    rect(90,90,120,150);
    rect(90,260,120,150);
    image(imgProgramador,100,100,100,130);
  image(imgEducador,100,270,100,130);
  pop()
  
  voltar();
}

function instrucoes() {
  background(imgFundo);
  
  push()
    fill(255);
    textSize(15);
    textFont(FredokaOne);
    text("ANO:",240,80);
    text("3º ano do fundamental",170,100);
    text("HABILIDADES BNCC:",190,150);
    text("\n(EF03MA05) Utilizar diferentes procedimentos de cálculo \nmental e escrito para resolver problemas significativos \nenvolvendo e subtração com números naturais.",30,155);
    text("COMO JOGAR:",220,265);
    text("Mover a nave: Use as setas do teclado.",120,285);
    text("Atirar: Use a barra de espaço do teclado.",112,305);
    text("Selecionar: Use o botão esquerdo do mouse.",100,325);
    text("Para somar: Toque no número com a nave.",105,345);
    text("Para subtrair: Toque no número com a nave.",97,365);
    text("Para perder: Se colidir com um meteoro.",120,385);
    text("Para perder: Se não conseguir chegar no valor esperado.",55,405);
    text("Para ganhar: Chegar no valor indicado.",125,425);
  pop()
  
  voltar();
}

function gameOver() {
  background(imgFundo);
  
  push()
    textFont(fontJoystick)
    textAlign(CENTER, CENTER);
    textSize(35);
    text("GAME OVER!!",width/2,height/2);
  pop()
  
  voltar();
}

function win(){
  background(imgFundo);
  
  push()
    textFont(fontJoystick)
    textAlign(CENTER, CENTER);
    textSize(35);
    text("Congratulation!!",width/2,height/2);
  pop()
  
  voltar();
}

function voltar() {
  fill(255);
  rect(405,13,100,40,20);
  fill(200,0,0);
  rect(402,10,100,40,20);
  
  push()
    fill(255);
    textSize(15);
    textFont(SquareBeat);
    text("Voltar",432,35);
  pop()
}

function start() {
  if(!perdeu){
    if(!winFase1){
      fase1();
    }else{
      fase2();
    }
  }else{
    gameOver();
  }
  
  if(somaAtual == soma && winFase1 == false){
    winFase1 = true;
    resetFase2();
  }
  if(subtAtual == subtrair ){
    ganhou = true;
    win();
  }
}

function fase1(){
  background(imgFundoJogo);

    push()
      textFont(KaphRegular);
      textSize(20);
      fill(255);
      text("Some até: " + soma,10,30);
      text("Soma atual: " + somaAtual,290,30);
    pop()

    criaMeteoro();
    criaNave();
    disparou();
    acertouMeteoro();
    naveCoidiu();
}

function fase2(){
  background(imgFundoJogo);

    //Placar
    push()
      textFont(KaphRegular);
      textSize(20);
      fill(255);
      text("Subtraia até: " + subtrair,10,30);
      text("Valor atual: " + subtAtual,270,30);
    pop()

    criaMeteoro();
    criaNave();
    disparou();
    acertouMeteoro();
    naveCoidiu();
}

function criaMeteoro(){
  push()
    imageMode(CENTER);
    fill(100);
    textFont(fontJoystick);
    textSize(25);
  
    for(let i = 0; i < quantidadeMet; i++){
      if(explodiu[i]){
        image(explosao[contExp[i]], xMet[i], yMet[i]);

        tempExp[i]++;
        
        if(tempExp[i] == 4){
          if(contExp[i] < 6){
            contExp[i]++;
          }else{
            contExp[i] = 0;
            tempExp[i] = 0;
            explodiu[i] = false;
          }
          tempExp[i] = 0;
        }
      }else{
        if(hit[i] && (yMet[i] <= 532)){
          text(numeroMet[i], xMet[i],yMet[i]);
        }else{
          hit[i] = false;
          image(imgMeteoro, xMet[i], yMet[i]);
        }
      }
    }
  pop()
  
  for(let i = 0; i < quantidadeMet; i++){
    if(yMet[i] <= 532){
      yMet[i] += velocidadeMet;
    }else{
      numeroMet[i] = parseInt(random(1,10));
      xMet[i] = random(30,width-30);
      yMet[i] = random(0,-200);
    }
  }
}

function criaNave(){
  push()
    imageMode(CENTER);
    image(imgNave,xNave,yNave);
  pop()

  if(keyIsDown(LEFT_ARROW)){
    xNave -= velocidadeNave;
    xNave = constrain(xNave,30,480);
  }
  if (keyIsDown(RIGHT_ARROW)){
    xNave += velocidadeNave;
    xNave = constrain(xNave,30,480);
  }
  if (keyIsDown(UP_ARROW)){
    yNave -= velocidadeNave;
    yNave = constrain(yNave,70,455);
  }
  if (keyIsDown(DOWN_ARROW)){
    yNave += velocidadeNave;
    yNave = constrain(yNave,70,455);
  }
}

function disparou(){
  if(keyIsDown(32) || atirou){
    if(!atirou){
      soundDisp.play();
      xTiro = xNave;
      yTiro = yNave-20;
    }
    
    atirou = true;
    
    push()
      imageMode(CENTER);
      image(imgDisparo,xTiro,yTiro);
    pop()
    
    if(yTiro > 0){
      yTiro -= 10;
    }else{
      atirou = false;
    }
  }else{
    xTiro = yTito = -5;
  }
}

function acertouMeteoro() {
  for(let i = 0; i < quantidadeMet; i++){
    if(dist(xMet[i],yMet[i],xTiro,yTiro) < 18 && !hit[i]){
      soundExplo.play();
      hit[i] = true;
      explodiu[i] = true;
    }
  }
}

function naveCoidiu() {
  for(let i = 0; i < quantidadeMet; i++){
    if(dist(xNave,yNave,xMet[i],yMet[i]) < 40 && !hit[i]){
      perdeu = true;
    }else if(dist(xNave,yNave,xMet[i],yMet[i]) < 40 && hit[i]){
      yMet[i] = 532;
      
      if(winFase1){
        subtAtual -= numeroMet[i];
      }else{
        somaAtual += numeroMet[i];
      }
      
      if(somaAtual > soma || subtAtual < subtrair){
        perdeu = true;
      }
    }
  }
}

function playSound(){
  music.loop();
}

function mouseClicked() {
  //Botões do menu
  if(mouseX >= 156 && mouseX <= 356 && mouseY >= 160 && mouseY <= 200 && estado == "menu"){
    soundButton.play();
    estado = "start";
  }
  if(mouseX >= 156 && mouseX <= 356 && mouseY >= 220 && mouseY <= 260 && estado == "menu"){
    soundButton.play();
    estado = "instrucoes";
  }
  if(mouseX >= 156 && mouseX <= 356 && mouseY >= 280 && mouseY <= 320 && estado == "menu"){
    soundButton.play();
    estado = "creditos";
  }
  
  //Botões de voltar
  if(mouseX >= 402 && mouseX <= 502 && mouseY >= 10 && mouseY <= 50 && (estado == "instrucoes" || estado == "creditos" || estado == "start")){
    soundButton.play();
    if((perdeu || ganhou) && estado == "start"){
      reset();
    }else{
      estado = "menu";
    }
  }
}