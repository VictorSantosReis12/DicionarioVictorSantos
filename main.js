const botao1 = document.querySelector('#botao1');
const botao2 = document.querySelector('#botao2');
const botao3 = document.querySelector('#botao3');
const botao4 = document.querySelector('#botao4');
const botao5 = document.querySelector('#botao5');
const botao6 = document.querySelector('#botao6');
const botao7 = document.querySelector('#botao7');
const botao8 = document.querySelector('#botao8');
const botao9 = document.querySelector('#botao9');
const botao10 = document.querySelector('#botao10');

const modal = document.querySelector('#modal');
const blur = document.querySelector('.blur');
const botaoDialogo = document.querySelector('#bolinha');
const dialogo = document.querySelector('#dialogo');
const botaoDialogoSentence = document.querySelector('#bolinhaSentence');
const dialogoSentence = document.querySelector('#dialogoSentence');
const paragrafoConto = document.querySelector('.paragrafoConto')
const tituloConto = document.querySelector('.tituloConto')
const tituloSentence = document.querySelector('#tituloSentence')
const textoSentence = document.querySelector('#Sentence')

const tituloPortugues = document.querySelector('.modalTituloPortugues');
const tituloIngles = document.querySelector('.modalTituloIngles');
const textoPortugues = document.querySelector('.modalTextoPortugues');
const textoIngles = document.querySelector('.modalTextoIngles');
const classePortugues = document.querySelector('.classeGramaticalPortugues');
const classeIngles = document.querySelector('.classeGramaticalIngles');

const audioPalavraIngles = document.querySelector('#audioPalavraIngles')
const audioPalavraPortugues = document.querySelector('#audioPalavraPortugues')
const audioFraseIngles = document.querySelector('#audioFraseIngles')

const bridge = new Audio('audios/Bridge.mp3')
const knowledgeable = new Audio('audios/Knowlegdeable.mp3')
const greece = new Audio('audios/Greece.mp3')
const own = new Audio('audios/Own.mp3')
const loose = new Audio('audios/Loose.mp3')
const raisin = new Audio('audios/Raisin.mp3')
const weird = new Audio('audios/Weird.mp3')
const actually = new Audio('audios/Actually.mp3')
const push = new Audio('audios/Push.mp3')
const pretend = new Audio('audios/Pretend.mp3')

const ponte = new Audio('audios/Ponte.mp3')
const bemInformado = new Audio('audios/Bem informado.mp3')
const grecia = new Audio('audios/Grécia.mp3')
const proprio = new Audio('audios/Próprio.mp3')
const solto = new Audio('audios/Solto.mp3')
const uvaPassa = new Audio('audios/Uva passa.mp3')
const esquisito = new Audio('audios/Esquisito.mp3')
const naVerdade = new Audio('audios/Na verdade.mp3')
const empurrar = new Audio('audios/Empurrar.mp3')
const fingir = new Audio('audios/Fingir.mp3')

const bridgeFrase = new Audio('audios/Bridge Frase.mp3')
const knowledgeableFrase = new Audio('audios/Knowledgeable frase.mp3')
const greeceFrase = new Audio('audios/Greece Frase.mp3')
const ownFrase = new Audio('audios/Own Frase.mp3')
const looseFrase = new Audio('audios/Loose Frase.mp3')
const raisinFrase = new Audio('audios/Raisin Frase.mp3')
const weirdFrase = new Audio('audios/Weird Frase.mp3')
const actuallyFrase = new Audio('audios/Actually Frase.mp3')
const pushFrase = new Audio('audios/Push Frase.mp3')
const pretendFrase = new Audio('audios/Pretend Frase.mp3')

let i = 0
let audioIngles
let audioPortugues
let audioFrase


botao1.addEventListener('click', (e) =>{
    e.preventDefault();

    i = 1

    modal.style.visibility = 'visible';
    blur.style.visibility = 'visible';

    tituloPortugues.textContent = "Ponte";
    tituloIngles.textContent = "Bridge";
    tituloSentence.textContent = "Bridge";
    tituloConto.textContent = "Bridge";
    classePortugues.textContent = "substantivo";
    classeIngles.textContent = "noun";
    textoPortugues.textContent = "obra construída para estabelecer comunicação entre dois pontos separados por um curso de água ou qualquer depressão do terreno.";
    textoIngles.textContent = "a structure carrying a road, path, railroad, or canal across a river, ravine, road, railroad, or other obstacle.";
    paragrafoConto.innerHTML = "Os dois passavam ensinamentos aos jovens, que buscavam eles atrás de conhecimento, Sócrates e Solárico eram uma <strong>ponte</strong> para a verdade.";

    textoSentence.innerHTML = "I walked across the <strong>bridge</strong> and felt nostalgic.";
})
botao2.addEventListener('click', (e) =>{
    e.preventDefault();

    i = 2

    modal.style.visibility = 'visible';
    blur.style.visibility = 'visible';

    tituloPortugues.textContent = "Bem informado";
    tituloIngles.textContent = "Knowledgeable";
    tituloSentence.textContent = "Knowledgeable";
    tituloConto.textContent = "Knowledgeable";
    classePortugues.textContent = "adjetivo";
    classeIngles.textContent = "adjective";
    textoPortugues.textContent = "aquele que possui conhecimento sobre um determinado assunto ou sobre vários assuntos.";
    textoIngles.textContent = "intelligent and well informed.";
    paragrafoConto.innerHTML = "O próximo homem a quem iriam perguntar era Hiparco, um homem que dizia ser <strong>bem informado</strong> de tudo o que acontece na Grécia, como se ele tivesse em tudo e qualquer lugar.";

    textoSentence.innerHTML = "Her sister is <strong>knowledgeable</strong>.";
})
botao3.addEventListener('click', (e) =>{
    e.preventDefault();

    i = 3

    modal.style.visibility = 'visible';
    blur.style.visibility = 'visible';

    tituloPortugues.textContent = "Grécia";
    tituloIngles.textContent = "Greece";
    tituloSentence.textContent = "Greece";
    tituloConto.textContent = "Greece";
    classePortugues.textContent = "substantivo";
    classeIngles.textContent = "noun";
    textoPortugues.textContent = "um país no sudeste da Europa.";
    textoIngles.textContent = "a country in southeastern Europe.";
    paragrafoConto.innerHTML = "Em Atenas, vivia um filósofo bem conhecido, alguns não gostavam da sua presença e afirmações, já outros, o consideravam o homem mais sábio da <strong>Grécia</strong>.";
    
    textoSentence.innerHTML = "I visited ancient ruins in <strong>Greece</strong> during vacation.";
})
botao4.addEventListener('click', (e) =>{
    e.preventDefault();

    i = 4

    modal.style.visibility = 'visible';
    blur.style.visibility = 'visible';

    tituloPortugues.textContent = "Próprio";
    tituloIngles.textContent = "Own";
    tituloSentence.textContent = "Own";
    tituloConto.textContent = "Own";
    classePortugues.textContent = "adjetivo";
    classeIngles.textContent = "adjective";
    textoPortugues.textContent = "que pertence (a quem se faz referência).";
    textoIngles.textContent = "used with a possessive to emphasize that someone or something belongs or relates to the person or thing mentioned.";
    paragrafoConto.innerHTML = "- Então a resposta da nossa pesquisa estava na minha <strong>própria</strong> ignorância esse tempo todo. - Sócrates refletindo.";

    textoSentence.innerHTML = "I planted my <strong>own</strong> garden for fresh vegetables.";
})
botao5.addEventListener('click', (e) =>{
    e.preventDefault();

    i = 5

    modal.style.visibility = 'visible';
    blur.style.visibility = 'visible';

    tituloPortugues.textContent = "Solto";
    tituloIngles.textContent = "Loose";
    tituloSentence.textContent = "Loose";
    tituloConto.textContent = "Loose";
    classePortugues.textContent = "adjetivo";
    classeIngles.textContent = "adjective";
    textoPortugues.textContent = "que está desatado; desprendido.";
    textoIngles.textContent = "not firmly or tightly fixed in place; detached or able to be detached.";
    paragrafoConto.innerHTML = "Até agora, todos a quem perguntaram, apenas tinham ideias <strong>soltas</strong> sobre o conhecimento, não havendo um conceito sólido sobre a verdade do mundo.";

    textoSentence.innerHTML = "The clothes became <strong>loose</strong> over time.";
})
botao6.addEventListener('click', (e) =>{
    e.preventDefault();

    i = 6

    modal.style.visibility = 'visible';
    blur.style.visibility = 'visible';

    tituloPortugues.textContent = "Uva passa";
    tituloIngles.textContent = "Raisin";
    tituloSentence.textContent = "Raisin";
    tituloConto.textContent = "Raisin";
    classePortugues.textContent = "substantivo";
    classeIngles.textContent = "noun";
    textoPortugues.textContent = "bago de uva seca, passa.";
    textoIngles.textContent = "a partially dried grape.";
    paragrafoConto.innerHTML = "Nesse banquete havia um imenso porco assado e, ao seu lado um arroz à grega, com <strong>uvas passas</strong> e frutas.";

    textoSentence.innerHTML = "I found an extra <strong>raisin</strong> in the cereal box.";
})
botao7.addEventListener('click', (e) =>{
    e.preventDefault();

    i = 7

    modal.style.visibility = 'visible';
    blur.style.visibility = 'visible';

    tituloPortugues.textContent = "Esquisito";
    tituloIngles.textContent = "Weird";
    tituloSentence.textContent = "Weird";
    tituloConto.textContent = "Weird";
    classePortugues.textContent = "adjetivo";
    classeIngles.textContent = "adjective";
    textoPortugues.textContent = "difícil de explicar; estranho, inexplicável.";
    textoIngles.textContent = "suggesting something supernatural; uncanny.";
    paragrafoConto.innerHTML = "Ele morava em uma casa muito <strong>esquisita</strong>, onde ao entrarem, percebem que ele está sentado sozinho em uma mesa com um banquete servido, possivelmente sabia que Sócrates e Solárico apareceriam.";

    textoSentence.innerHTML = "The movie had a <strong>weird</strong> plot that confused everyone.";
})
botao8.addEventListener('click', (e) =>{
    e.preventDefault();

    i = 8

    modal.style.visibility = 'visible';
    blur.style.visibility = 'visible';

    tituloPortugues.textContent = "Na verdade";
    tituloIngles.textContent = "Actually";
    tituloSentence.textContent = "Actually";
    tituloConto.textContent = "Actually";
    classePortugues.textContent = "advérbio";
    classeIngles.textContent = "adverb";
    textoPortugues.textContent = "conformidade da ideia com o objecto, do dito com o feito, do discurso com a realidade.";
    textoIngles.textContent = "as the truth or facts of a situation; really.";
    paragrafoConto.innerHTML = "Durante sua jornada, Sócrates e Solárico percebem que <strong>na verdade</strong>, aqueles que se dizem sábios, apenas fingem sobre as verdades do mundo, porque nenhum deles tinham uma interpretação correta do conhecimento.";

    textoSentence.innerHTML = "<strong>Actually</strong>, she arrived on time.";
})
botao9.addEventListener('click', (e) =>{
    e.preventDefault();

    i = 9

    modal.style.visibility = 'visible';
    blur.style.visibility = 'visible';

    tituloPortugues.textContent = "Empurrar";
    tituloIngles.textContent = "Push";
    tituloSentence.textContent = "Push";
    tituloConto.textContent = "Push";
    classePortugues.textContent = "verbo";
    classeIngles.textContent = "verb";
    textoPortugues.textContent = "impulsionar com força, impelir com vigor, empuxar.";
    textoIngles.textContent = "exert force on (someone or something), typically with one's hand, in order to move them away from oneself or the origin of the force.";
    paragrafoConto.innerHTML = "Depois de perguntarem a muitas pessoas, Solárico já queria aceitar de que Sócrates era o mais sábio do mundo sem nenhuma explicação, já que era um conhecimento que somente os deuses tinham acesso, por esse motivo, Solárico precisou ser <strong>empurrado</strong> por Sócrates para continuar a pesquisa.";

    textoSentence.innerHTML = "He had to <strong>push</strong> hard to open the door.";
})
botao10.addEventListener('click', (e) =>{
    e.preventDefault();

    i = 10

    modal.style.visibility = 'visible';
    blur.style.visibility = 'visible';
    
    tituloPortugues.textContent = "Fingir";
    tituloIngles.textContent = "Pretend";
    tituloSentence.textContent = "Pretend";
    tituloConto.textContent = "Pretend";
    classePortugues.textContent = "verbo";
    classeIngles.textContent = "verb";
    textoPortugues.textContent = "ocultar sentimento, intenção, pensamento; dissimular.";
    textoIngles.textContent = "speak and act so as to make it appear that something is the case when in fact it is not.";
    paragrafoConto.innerHTML = "Durante sua jornada, Sócrates e Solárico percebem que na verdade, aqueles que se dizem sábios, apenas <strong>fingem</strong> sobre as verdades do mundo, porque nenhum deles tinham uma interpretação correta do conhecimento.";
    
    textoSentence.innerHTML = "Children enjoy <strong>pretending</strong> and using their imaginations.";
})

modal.addEventListener('click', (e) =>{
    e.preventDefault();

    modal.style.visibility = 'hidden';
    blur.style.visibility = 'hidden';
})

botaoDialogo.addEventListener('click', (e) =>{
    e.preventDefault();

    dialogo.style.display = 'flex';
})

dialogo.addEventListener('click', (e) =>{
    e.preventDefault();

    dialogo.style.display = 'none';
})

botaoDialogoSentence.addEventListener('click', (e) =>{
    e.preventDefault();

    dialogoSentence.style.display = 'flex';
})

dialogoSentence.addEventListener('click', (e) =>{
    e.preventDefault();

    dialogoSentence.style.display = 'none';
})

audioPalavraIngles.addEventListener('mouseover', (e) =>{
    switch (i){
        case 1:
            audioIngles = bridge;
            break
        case 2:
            audioIngles = knowledgeable;
            break
        case 3:
            audioIngles = greece;
            break
        case 4:
            audioIngles = own;
            break
        case 5:
            audioIngles = loose;
            break
        case 6:
            audioIngles = raisin;
            break
        case 7:
            audioIngles = weird;
            break
        case 8:
            audioIngles = actually;
            break
        case 9:
            audioIngles = push;
            break
        case 10:
            audioIngles = pretend;
            break
    }

    audioIngles.load()
    audioIngles.play()
})

audioPalavraIngles.addEventListener('mouseout', (e) =>{
    
    audioIngles.pause()

})

audioPalavraPortugues.addEventListener('mouseover', (e) =>{
    switch (i){
        case 1:
            audioPortugues = ponte;
            break
        case 2:
            audioPortugues = bemInformado;
            break
        case 3:
            audioPortugues = grecia;
            break
        case 4:
            audioPortugues = proprio;
            break
        case 5:
            audioPortugues = solto;
            break
        case 6:
            audioPortugues = uvaPassa;
            break
        case 7:
            audioPortugues = esquisito;
            break
        case 8:
            audioPortugues = naVerdade;
            break
        case 9:
            audioPortugues = empurrar;
            break
        case 10:
            audioPortugues = fingir;
            break
    }

    audioPortugues.load()
    audioPortugues.play()
})

audioPalavraPortugues.addEventListener('mouseout', (e) =>{
    
    audioPortugues.pause()

})

audioFraseIngles.addEventListener('mouseover', (e) =>{
    switch (i){
        case 1:
            audioFrase = bridgeFrase;
            break
        case 2:
            audioFrase = knowledgeableFrase;
            break
        case 3:
            audioFrase = greeceFrase;
            break
        case 4:
            audioFrase = ownFrase;
            break
        case 5:
            audioFrase = looseFrase;
            break
        case 6:
            audioFrase = raisinFrase;
            break
        case 7:
            audioFrase = weirdFrase;
            break
        case 8:
            audioFrase = actuallyFrase;
            break
        case 9:
            audioFrase = pushFrase;
            break
        case 10:
            audioFrase = pretendFrase;
            break
    }

    audioFrase.load()
    audioFrase.play()
})

audioFraseIngles.addEventListener('mouseout', (e) =>{
    
    audioFrase.pause()

})