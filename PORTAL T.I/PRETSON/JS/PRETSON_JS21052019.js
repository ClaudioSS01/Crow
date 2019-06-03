
/*essa parte salva as informa��es em cookie*/

function salvar(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

function carregar(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



/*transfomra as letras digitadas na caixa de imput em maiusculas*/

function maiuscula(z){
        v = z.value.toUpperCase();
        z.value = v;
    }





























function verifica(){

/*Pega o texto da caixa input*/
var questao = document.getElementById("txt").value;

/*carrega abaixo se refere a fun��o dos cookies de modo que verifica se
 ha salvo a quest�o chamada para ver se vai responder ou aprender caso a string esteja vazia*/
var texto = carregar(questao);
var vazio = "";



/*se o texto for diferente de vazio inserir texto*/
if(texto !== vazio){

document.getElementById("resposta").innerHTML="<br><p class='resposta'>"+texto+"</p>";


}else{

continua();

}
}

function continua(){
/*respostas padrao do pretson*/



var questao = document.getElementById("txt").value;



/*essa parte abaixo gera numeros para selecionar de forma aleatoria a resposta no array*/
var y = Math.floor((Math.random() * 4) + 1);





























/*cole abaixo desse bloco e verifique a chave caso de erro */
var comprimentos = new Array('OI', 'OLA', 'IAI', 'TESTE', 'TUDO BEM', 'BLZ', 'JOIA');
var textos = new Array('OI!','POIS N�O?','OLA!','COMO POSSO AJUDAR?','EM QUE POSSO AJUDAR?','POIS N�O SENHOR(A)', 'EM QUE POSSO SER UTIL?');  
var origem = new Array('QUEM � VC?', 'QUAL SEU NOME?', 'QUEM E VC?', 'QUAL SEU NOME');
var resporigem = new Array('MEU NOME � PRETSON','ME CHAMO PRETSON', 'SOU PRETSON', 'PRETSON SENHOR(A)', 'ME DERAM O NOME DE PRETSON', 'PRETSON', '' );
var limpar = new Array('LIMPAR', 'LIMPAR TUDO', 'LIMPE', 'ZERAR', 'CLS', 'APAGAR', 'RECOME�AR', 'VAMOS RECOME�AR');
var learn = new Array('APRENDER', 'APRENDA', 'FUNCAO APRENDER');
var fonte = new Array('FONTE');
var BOANOITE = new Array('BOA NOITE', 'OLA! BOA NOITE!', 'OI! BOA NOITE', 'BN', 'BOA NOITE!'); 
var BOANOITEresp = new Array('OLA! BOA NOITE! EM QUE POSSO AJUDAR?','OI! BOA NOITE! COMO POSSO SER UTIL?','BOA NOITE! EM QUE POSSO TE AJUDAR?','BOA NOITE! COMO POSSO TE AJUDAR?','BOA NOITE!'); 
var BASEHTML = new Array('CODIGO BASE HTML', 'BASE HTML', 'HTML BASE', 'PAGINA BASICA HTML', 'HTML BASICO'); 
var COMOVAI = new Array('COMO VAI PRETSON?', 'COMO VAI?', 'COMO VOCE ESTA?', 'COMO VOC� EST� PRETSON?', 'COMO VOC� ESTA HOJE PRESTON?'); var COMOVAIresp = new Array('BEM OBRIGADO POR PERGUNTAR','MUITO BEM OBRIGADO','MUITO BEM! COMO POSSO AJUDAR HOJE?','VOU BEM OBRIGADO. COMO POSSO AJUDAR?','OBRIGADO POR PERGUNTAR, ESTOU BEM.'); 
var TEMA1 = new Array('TEMA1', 'MUDAR PARA TEMA1', 'ATIVAR TEMA1');
var TEMAAPAGADO = new Array('SUMIR BOLINHA', 'SAIR BOLINHA', 'TEMA ESCURO', 'FUNDO PRETO', 'TEMA PRETO', 'PRETO', 'SEM BOLINHA', 'TIRA BOLINHA');
var TEMAIMPRESSIONAR = new Array('IMPRESSIONAR', 'NOS IMPRESSIONE', 'TEMA JARVIS', 'JARVIS', 'ME AJUDE A IMPRESSIONAR', 'IMPRESSIONE', 'LIGA A BOLINHA', 'ASCENDE A BOLINHA', 'BOLINHA');
var corpofundo = new Array('MUDAR FUNDO', 'TEMA LARANJA', 'FUNDO LARANJA', 'LARANJA');
var CALCULADORA = new Array('MODO CALC', 'MODO CALCULADORA', 'ATIVAR CALCULADORA', 'CALCULAR', 'CALCULE', 'MODO MATEMATICA', 'FUNCAO MATEMATICA', 'MATEMATICA', 'CALC');
var RAMAIS = new Array('RAMAIS', 'RAMAL', 'LISTA DE RAMAIS', 'LISTA DE RAMAL', 'LISTA RAMAL'); var RAMAISresp = new Array('<h5><TABLE> <TR><TD> ###RAMAIS###  </TD></TR><TR><TD>  TI N1_______________________0872  </TD></TR><TR><TD>  TI N2_______________________0869  </TD></TR><TR><TD>  SUPERVISÃO__________________0879  </TD></TR><TR><TD>  MONITORIA/TREIN_____________0862  </TD></TR><TR><TD>  PLANEJAMENTO________________0876  </TD></TR><TR><TD>  RH__________________________0855  </TD></TR><TR><TD>  RH__________________________0832  </TD></TR><TR><TD>  ROSANA RH___________________0867  </TD></TR><TR><TD>  ROSEMARA RH_________________0863  </TD></TR><TR><TD>  RECEPÇÃO____________________0807  </TD></TR><TR><TD>  SUPORTE S.JOSE______________0865  </TD></TR><TR><TD>  SUPORTE S.JOSE______________0882  </TD></TR><TR><TD>  PLANEJAMENTO________________0867  </TD></TR><TR><TD>  ADMINISTRATIVO______________0868  </TD></TR><TR><TD>  TELE COBRANÇA SUPERV________0871  </TD></TR><TR><TD>  CREFISA DMCARD COORDE_______0877  </TD></TR><TR><TD>  WINO UNIVERSITY_____________0831  </TD></TR><TR><TD>  SUPERVISÃO__________________0879  </TD></TR><TR><TD>  SIMONE PAULA________________0827  </TD></TR><TR><TD>  FELIPE/KAREN SESMT__________0861  </TD></TR></TABLE>','<TABLE> <TR><TD> ###RAMAIS###  </TD></TR><TR><TD>  TI N1_______________________0872  </TD></TR><TR><TD>  TI N2_______________________0869  </TD></TR><TR><TD>  SUPERVISÃO__________________0879  </TD></TR><TR><TD>  MONITORIA/TREIN_____________0862  </TD></TR><TR><TD>  PLANEJAMENTO________________0876  </TD></TR><TR><TD>  RH__________________________0855  </TD></TR><TR><TD>  RH__________________________0832  </TD></TR><TR><TD>  ROSANA RH___________________0867  </TD></TR><TR><TD>  ROSEMARA RH_________________0863  </TD></TR><TR><TD>  RECEPÇÃO____________________0807  </TD></TR><TR><TD>  SUPORTE S.JOSE______________0865  </TD></TR><TR><TD>  SUPORTE S.JOSE______________0882  </TD></TR><TR><TD>  PLANEJAMENTO________________0867  </TD></TR><TR><TD>  ADMINISTRATIVO______________0868  </TD></TR><TR><TD>  TELE COBRANÇA SUPERV________0871  </TD></TR><TR><TD>  CREFISA DMCARD COORDE_______0877  </TD></TR><TR><TD>  WINO UNIVERSITY_____________0831  </TD></TR><TR><TD>  SUPERVISÃO__________________0879  </TD></TR><TR><TD>  SIMONE PAULA________________0827  </TD></TR><TR><TD>  FELIPE/KAREN SESMT__________0861  </TD></TR></TABLE>','<TABLE> <TR><TD> ###RAMAIS###  </TD></TR><TR><TD>  TI N1_______________________0872  </TD></TR><TR><TD>  TI N2_______________________0869  </TD></TR><TR><TD>  SUPERVISÃO__________________0879  </TD></TR><TR><TD>  MONITORIA/TREIN_____________0862  </TD></TR><TR><TD>  PLANEJAMENTO________________0876  </TD></TR><TR><TD>  RH__________________________0855  </TD></TR><TR><TD>  RH__________________________0832  </TD></TR><TR><TD>  ROSANA RH___________________0867  </TD></TR><TR><TD>  ROSEMARA RH_________________0863  </TD></TR><TR><TD>  RECEPÇÃO____________________0807  </TD></TR><TR><TD>  SUPORTE S.JOSE______________0865  </TD></TR><TR><TD>  SUPORTE S.JOSE______________0882  </TD></TR><TR><TD>  PLANEJAMENTO________________0867  </TD></TR><TR><TD>  ADMINISTRATIVO______________0868  </TD></TR><TR><TD>  TELE COBRANÇA SUPERV________0871  </TD></TR><TR><TD>  CREFISA DMCARD COORDE_______0877  </TD></TR><TR><TD>  WINO UNIVERSITY_____________0831  </TD></TR><TR><TD>  SUPERVISÃO__________________0879  </TD></TR><TR><TD>  SIMONE PAULA________________0827  </TD></TR><TR><TD>  FELIPE/KAREN SESMT__________0861  </TD></TR></TABLE>','<TABLE> <TR><TD> ###RAMAIS###  </TD></TR><TR><TD>  TI N1_______________________0872  </TD></TR><TR><TD>  TI N2_______________________0869  </TD></TR><TR><TD>  SUPERVISÃO__________________0879  </TD></TR><TR><TD>  MONITORIA/TREIN_____________0862  </TD></TR><TR><TD>  PLANEJAMENTO________________0876  </TD></TR><TR><TD>  RH__________________________0855  </TD></TR><TR><TD>  RH__________________________0832  </TD></TR><TR><TD>  ROSANA RH___________________0867  </TD></TR><TR><TD>  ROSEMARA RH_________________0863  </TD></TR><TR><TD>  RECEPÇÃO____________________0807  </TD></TR><TR><TD>  SUPORTE S.JOSE______________0865  </TD></TR><TR><TD>  SUPORTE S.JOSE______________0882  </TD></TR><TR><TD>  PLANEJAMENTO________________0867  </TD></TR><TR><TD>  ADMINISTRATIVO______________0868  </TD></TR><TR><TD>  TELE COBRANÇA SUPERV________0871  </TD></TR><TR><TD>  CREFISA DMCARD COORDE_______0877  </TD></TR><TR><TD>  WINO UNIVERSITY_____________0831  </TD></TR><TR><TD>  SUPERVISÃO__________________0879  </TD></TR><TR><TD>  SIMONE PAULA________________0827  </TD></TR><TR><TD>  FELIPE/KAREN SESMT__________0861  </TD></TR></TABLE>','<TABLE> <TR><TD> ###RAMAIS###  </TD></TR><TR><TD>  TI N1_______________________0872  </TD></TR><TR><TD>  TI N2_______________________0869  </TD></TR><TR><TD>  SUPERVISÃO__________________0879  </TD></TR><TR><TD>  MONITORIA/TREIN_____________0862  </TD></TR><TR><TD>  PLANEJAMENTO________________0876  </TD></TR><TR><TD>  RH__________________________0855  </TD></TR><TR><TD>  RH__________________________0832  </TD></TR><TR><TD>  ROSANA RH___________________0867  </TD></TR><TR><TD>  ROSEMARA RH_________________0863  </TD></TR><TR><TD>  RECEPÇÃO____________________0807  </TD></TR><TR><TD>  SUPORTE S.JOSE______________0865  </TD></TR><TR><TD>  SUPORTE S.JOSE______________0882  </TD></TR><TR><TD>  PLANEJAMENTO________________0867  </TD></TR><TR><TD>  ADMINISTRATIVO______________0868  </TD></TR><TR><TD>  TELE COBRANÇA SUPERV________0871  </TD></TR><TR><TD>  CREFISA DMCARD COORDE_______0877  </TD></TR><TR><TD>  WINO UNIVERSITY_____________0831  </TD></TR><TR><TD>  SUPERVISÃO__________________0879  </TD></TR><TR><TD>  SIMONE PAULA________________0827  </TD></TR><TR><TD>  FELIPE/KAREN SESMT__________0861  </TD></TR></TABLE></h5>'); 







/*cole abaixo dess bloco e verifique as chaves caso de erro */
if(comprimentos.indexOf(questao) > -1){ var resp = textos[y];   document.getElementById("resposta").innerHTML="<br><p class='resposta'>"+resp;} 
else if(BOANOITE.indexOf(questao) > -1){ var resp = BOANOITEresp[y];   document.getElementById('resposta').innerHTML='<br><p>'+resp;}
else if(BASEHTML.indexOf(questao) > -1){ document.getElementById('resposta').innerHTML='<textarea><html><head>&lt;script&gt;&lt;/script&gt;</head><body></body></html></textarea> ';}
else if(COMOVAI.indexOf(questao) > -1){ var resp = COMOVAIresp[y];   document.getElementById('resposta').innerHTML='<br><p>'+resp;}
else if(TEMA1.indexOf(questao) > -1){    var teminha = document.getElementById("tema"); teminha.removeAttribute("class"); teminha.setAttribute("class", "tema1");  }
else if(TEMAAPAGADO.indexOf(questao) > -1){    var teminha = document.getElementById("tema"); teminha.removeAttribute("class"); teminha.setAttribute("class", "apagado"); var teminha = document.getElementById("corpo"); teminha.removeAttribute("class"); teminha.setAttribute("class", "fundopreto");  }
else if(TEMAIMPRESSIONAR.indexOf(questao) > -1){    var teminha = document.getElementById("tema"); teminha.removeAttribute("class"); teminha.setAttribute("class", "impressionar");  }
else if(corpofundo.indexOf(questao) > -1){    var teminha = document.getElementById("corpo"); teminha.removeAttribute("class"); teminha.setAttribute("class", "fundolaranja");  }
else if(CALCULADORA.indexOf(questao) > -1){ document.getElementById('resposta').innerHTML='<div id="calc-contain"><form name="calculator"><input type="text" name="answer" /><br><input type="button" value=" CALCULAR " onclick="calculator.answer.value = eval(calculator.answer.value)" />';}
else if(RAMAIS.indexOf(questao) > -1){ var resp = RAMAISresp[y];   document.getElementById('resposta').innerHTML='<br><p>'+resp;}            



else if(learn.indexOf(questao) > -1){

aprender();


/*se alguma das perguntas de origem estiver na variavel origem responda em resp com resporigem*/
} else if(origem.indexOf(questao) > -1){



var resp = resporigem[y];   
document.getElementById("resposta").innerHTML="<br><p class='resposta'>"+resp;




}else if(fonte.indexOf(questao) > -1){

















document.getElementById("resposta").innerHTML="<h4 class='jumbotron'><table class='table'><tr><td><h4 style='color: red;'>*N�o deixar espa�o na categoria</h4><br><input id='categoria' onkeyup='maiuscula(this)' placeholder='categoria da pergunta'></td><tr><tr><td><input id='pergunta1' onkeyup='maiuscula(this)' placeholder='pergunta 01'></td><td><input  id='pergunta2' onkeyup='maiuscula(this)' placeholder='pergunta 02'></td><td><input id='pergunta3'  onkeyup='maiuscula(this)' placeholder='pergunta 03'></td><td><input  id='pergunta4' onkeyup='maiuscula(this)' placeholder='pergunta 04'></td><td><input  id='pergunta5' onkeyup='maiuscula(this)' placeholder='pergunta 05'></td></tr><tr><td><input id='resposta1' onkeyup='maiuscula(this)' placeholder='resposta 01'></td><td><input  id='resposta2' onkeyup='maiuscula(this)' placeholder='resposta 02'></td><td><input  id='resposta3' onkeyup='maiuscula(this)' placeholder='resposta 03'></td><td><input id='resposta4'  onkeyup='maiuscula(this)' placeholder='resposta 04'></td><td><input id='resposta5'  onkeyup='maiuscula(this)' placeholder='resposta 05'></td></tr><tr><td><button onclick='criandofonte();' class='btn btn-primary'>criar codigo fonte</button></td></tr></table></h4><br><div id='fonte'></div>";


















} else if(limpar.indexOf(questao) > -1){

location.reload();

} else  {

/*se o texto digitado nao for encontrado em lugar algum aprenda*/
aprender();



}











}









































function criandofonte(){
var ca = document.getElementById("categoria").value;

var p1 = document.getElementById("pergunta1").value;
var p2 = document.getElementById("pergunta2").value;
var p3 = document.getElementById("pergunta3").value;
var p4 = document.getElementById("pergunta4").value;
var p5 = document.getElementById("pergunta5").value;

var r1 = document.getElementById("resposta1").value;
var r2 = document.getElementById("resposta2").value;
var r3 = document.getElementById("resposta3").value;
var r4 = document.getElementById("resposta4").value;
var r5 = document.getElementById("resposta5").value;


document.getElementById("fonte").innerHTML="<textarea>var "+ca+" = new Array('"+p1+"', '"+p2+"', '"+p3+"', '"+p4+"', '"+p5+"'); var "+ca+"resp = new Array('"+r1+"','"+r2+"','"+r3+"','"+r4+"','"+r5+"'); </textarea><textarea> else if("+ca+".indexOf(questao) > -1){ var resp = "+ca+"resp[y];   document.getElementById('resposta').innerHTML='<br><p>'+resp;}</textarea>";
}














































function aprender(){
document.getElementById("resposta").innerHTML="<br><p class='resposta'>Qual a resposta da pergunta acima?</p><br><br><br><input type='text'  class='caixadeescrever' id='aprender'><br><center><button class='button' onclick='aprende()'>aprender</button>";
}




function aprende(){

var nomedigitado = document.getElementById("aprender").value;
var assunto = document.getElementById("txt").value;
salvar(assunto, nomedigitado, 30);
var texto = carregar(assunto);
alert("acabei de aprender "+texto);

}


function limpar(){
document.getElementById("aprender").innerHTML="<input id='aprender'  value='' class='caixadeescrever' onKeydown='Javascript: if (event.keyCode==13) verifica();'  onkeypress='Javascript: if (event.keyCode==13) verifica();' onkeyup='maiuscula(this)'>";
}

