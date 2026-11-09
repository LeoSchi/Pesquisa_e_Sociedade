/* Conteúdo do site em 4 idiomas (pt, es, fr, en). Para mudar um texto ou uma resposta do chatbot, edite aqui. */
var TOPICOS={
    documentacao: {
      nome: "Documentação",
      perguntas: [
        { p: "Como regularizo minha situação na Polícia Federal?",
          r: "Faça o agendamento no site da Polícia Federal e compareça com passaporte e os documentos do seu tipo de autorização. Você recebe a CRNM (Carteira de Registro Nacional Migratório). O prazo costuma ser de 90 dias após a entrada, conforme o caso.\n\nConfirme a lista exata de documentos no site da PF." },
        { p: "Como tiro o CPF?",
          r: "O CPF pode ser emitido na Receita Federal, nos Correios e em bancos conveniados, como Banco do Brasil e Caixa. Leve passaporte ou outro documento de identidade. Algumas formas de emissão têm taxa, então confirme antes." },
        { p: "Posso trabalhar? Como tiro a carteira de trabalho?",
          r: "Depende da sua autorização de residência. Se ela permite trabalhar, emita a Carteira de Trabalho Digital pelo aplicativo, usando sua conta gov.br e o CPF." },
        { p: "Como uso o sistema de saúde (SUS)?",
          r: "Vá à unidade de saúde do seu bairro com documento e comprovante de residência para fazer o Cartão SUS. O atendimento é aberto também a estrangeiros.\n\nEm emergência, ligue 192 (SAMU)." },
        { p: "Preciso traduzir meus documentos?",
          r: "Certidões e diplomas do exterior costumam precisar de apostila de Haia e tradução juramentada feita por tradutor público no Brasil. Pergunte ao órgão onde vai entregar o documento o que ele exige." },
        { p: "Quais telefones úteis devo salvar?",
          r: "190 Polícia Militar\n192 SAMU (ambulância)\n193 Bombeiros\n156 Central da Prefeitura de Curitiba" }
      ]
    },
    habitacao: {
      nome: "Habitação",
      perguntas: [
        { p: "Como alugar um imóvel?",
          r: "Você pode alugar por imobiliária ou diretamente com o proprietário. Normalmente pedem documento de identidade (CRNM ou protocolo), CPF e comprovante de renda. Leia o contrato com calma e peça ajuda se algo não ficar claro." },
        { p: "O que é fiador, seguro-fiança e caução?",
          r: "São garantias do aluguel. Fiador é uma pessoa que se responsabiliza pelo contrato. Seguro-fiança é um seguro pago ao longo do contrato. Caução é um depósito de até 3 meses de aluguel. Estrangeiros recém-chegados costumam usar seguro-fiança ou caução." },
        { p: "Quais bairros posso considerar?",
          r: "Batel e Bigorrilho são modernos e mais caros. Água Verde, Portão e Cabral são residenciais e bem servidos de transporte. O Centro tem muito transporte e comércio, mas é movimentado. Veja os valores atuais em sites de imóveis antes de decidir." },
        { p: "Que contas da casa vou pagar?",
          r: "Em geral: aluguel, condomínio, água (Sanepar), luz (Copel), gás e internet. Pergunte na imobiliária quais já estão incluídas e peça a transferência de titularidade das contas." },
        { p: "Onde ficar nos primeiros dias?",
          r: "Muita gente começa com hospedagem de temporada, apart-hotel ou hostel até conhecer os bairros. Desconfie de anúncios que pedem pagamento antecipado sem você ter visto o imóvel ou o contrato." }
      ]
    },
    adaptacao: {
      nome: "Adaptação",
      perguntas: [
        { p: "Como funciona o transporte público?",
          r: "Curitiba tem ônibus expressos vermelhos, ônibus de bairro e estações-tubo de vidro. Veja as formas de pagamento atuais no site da URBS. Aplicativos de mapa mostram linhas e horários em tempo real." },
        { p: "Como é o clima? O que devo levar?",
          r: "É frio para os padrões brasileiros e o tempo muda muito no mesmo dia. O inverno vai de junho a agosto e pode ter geada. Tenha casaco e guarda-chuva o ano todo." },
        { p: "Como abro uma conta bancária?",
          r: "Em geral você precisa de documento de identidade (CRNM ou protocolo), CPF e comprovante de residência. Cada banco tem regras próprias, então pergunte antes. O Pix é muito usado para pagamentos do dia a dia." },
        { p: "Onde aprendo português?",
          r: "Universidades públicas, como a UFPR, e organizações sociais costumam oferecer cursos de português para estrangeiros, alguns gratuitos. Pergunte também na Central 156 da Prefeitura." },
        { p: "Como conheço pessoas e a cidade?",
          r: "Visite parques como o Barigui e o Jardim Botânico, a feira do Largo da Ordem aos domingos e o Mercado Municipal. Grupos de estrangeiros e eventos culturais ajudam a criar uma rede de contatos." }
      ]
    },
    escola: {
      nome: "Escola dos filhos",
      perguntas: [
        { p: "Como matriculo meus filhos?",
          r: "A rede pública tem escolas municipais (educação infantil e primeiros anos do fundamental) e estaduais (anos finais e ensino médio). Procure uma escola perto de casa ou a Secretaria de Educação.\n\nA matrícula não pode ser negada por falta de documentos ou por situação migratória. Leve o que tiver: passaporte, certidão de nascimento, comprovante de residência e histórico escolar." },
        { p: "A partir de que idade a escola é obrigatória?",
          r: "No Brasil, a matrícula é obrigatória dos 4 aos 17 anos. Creches (0 a 3 anos) são opcionais e as vagas costumam ser limitadas." },
        { p: "Preciso de documentos escolares traduzidos?",
          r: "O histórico escolar do exterior ajuda a escola a definir a série do aluno. A escola pode fazer uma avaliação para decidir a série adequada, então não deixe de matricular por falta de tradução." },
        { p: "E a vacinação das crianças?",
          r: "Leve a carteira de vacinação do seu país e vá à unidade de saúde do bairro. Os profissionais verificam quais vacinas faltam e atualizam o calendário brasileiro." },
        { p: "Existem escolas bilíngues ou internacionais?",
          r: "Sim, Curitiba tem escolas particulares bilíngues e internacionais. Compare valores, idiomas oferecidos e se o currículo é aceito no seu país de origem." }
      ]
    }
  };
var ROTULO="Voltar ao menu";
var ABAS=[["inicio","Início"],["cidade","A cidade"],["turismo","Pontos turísticos"],["documentos","Documentos"],["curriculo","Currículo"],["empregos","Empregos"]];
var CARTOES=[["documentacao","Documentação","CPF, Polícia Federal, SUS","#c8372d"],["habitacao","Habitação","Alugar, bairros, contas","#e3b23c"],["adaptacao","Adaptação","Transporte, clima, idioma","#4f8a6e"],["escola","Escola dos filhos","Matrícula e vacinas","#5b86b5"]];

/* Os arquivos de foto ficam na pasta imagens/. Se não existirem, aparece a ilustração. */
var LUGARES=[
["Jardim Botânico","Natureza","Estufa de vidro e jardins de estilo francês. É o cartão-postal da cidade.","estufa","#bfe3d6","#6fae96","jardim-botanico.jpg"],
["Ópera de Arame","Arquitetura","Teatro de estrutura tubular cercado por mata, dentro de um parque.","opera","#f3d9a0","#d99a5f","opera-de-arame.jpg"],
["Museu Oscar Niemeyer","Arte","O Museu do Olho reúne artes visuais, arquitetura e design.","museu","#cdd9f0","#8fa6d6","museu-oscar-niemeyer.jpg"],
["Parque Barigui","Parque","Grande parque para caminhar e pedalar. É comum ver capivaras no lago.","parque","#d4ecc4","#8cc27a","parque-barigui.jpg"],
["Rua XV de Novembro","Centro","Calçadão do centro, com comércio, cafés e a Rua das Flores.","rua","#f6d0c8","#e08a7a","rua-xv.jpg"],
["Largo da Ordem","História","Centro histórico com casarões, igrejas e feira de artesanato aos domingos.","largo","#efe0c0","#cfa766","largo-da-ordem.jpg"],
["Mercado Municipal","Gastronomia","Para provar frutas, queijos, embutidos e comidas típicas.","mercado","#ffe0a8","#f2b25c","mercado-municipal.jpg"]];
var FATOS=[
["Clima","Frio para os padrões brasileiros. O inverno (junho a agosto) pode ter geada, e o tempo muda várias vezes no mesmo dia. Leve casaco e guarda-chuva o ano todo.","#5b86b5"],
["Transporte","Ônibus expressos vermelhos, ônibus de bairro e estações-tubo de vidro. Consulte as formas de pagamento atuais no site da URBS.","#c8372d"],
["Povo e cultura","A cidade foi formada por imigrantes poloneses, ucranianos, alemães, italianos e japoneses. Isso aparece na comida, nas festas e nos memoriais.","#e3b23c"],
["Bairros conhecidos","Centro, Batel, Água Verde, Bigorrilho, Cabral, Juvevê, Portão e Santa Felicidade. Cada um tem um perfil de preço e de rotina diferente.","#4f8a6e"],
["Telefones úteis","190 Polícia Militar, 192 SAMU, 193 Bombeiros e 156 Central da Prefeitura de Curitiba.","#1e4d3b"]];
var PASSOS=[
["Registro na Polícia Federal","Agende pelo site da PF e leve passaporte e os documentos do seu tipo de autorização. Você recebe a Carteira de Registro Nacional Migratório (CRNM). O prazo costuma ser de 90 dias após a entrada, conforme o caso."],
["CPF","Número obrigatório para trabalhar, alugar, abrir conta e usar serviços. Pode ser emitido na Receita Federal, nos Correios e em bancos conveniados."],
["Carteira de Trabalho Digital","Emitida pelo aplicativo, com conta gov.br e CPF. Verifique se sua autorização permite trabalhar."],
["Cartão SUS","Vá à unidade de saúde do seu bairro com documento e comprovante de residência. O atendimento no SUS é aberto também a estrangeiros."],
["Documentos do seu país","Certidões e diplomas costumam precisar de apostila de Haia e tradução juramentada para valer no Brasil."]];

var UI_PT={marca:"Curitiba, bem-vindo",nav:"Seções do guia",idioma:"Idioma",
h1:"Você chegou a Curitiba. Vamos resolver o resto juntos.",
lead:"Um guia simples para os primeiros dias: documentos, moradia, rotina e escola dos filhos. Se tiver dúvida, o assistente no canto da tela responde na hora.",
btn:"Ver passo a passo dos documentos",comece:"Comece por aqui",
cidT:"Conheça a cidade",cidD:"Curitiba é a capital do Paraná, no Sul do Brasil, a cerca de 900 metros de altitude. Tem fama de cidade planejada, cheia de parques e com transporte coletivo organizado.",
turT:"Pontos turísticos",turD:"Lugares bons para conhecer nas primeiras semanas, quase todos acessíveis de transporte público.",
todos:"Todos",filtrar:"Filtrar por categoria",
docT:"Regularização de documentos",docD:"Esta é uma ordem comum de passos. Seu caso pode variar conforme o visto ou a autorização de residência.",
aviso:"Regras mudam. Confirme sempre nos sites oficiais (Polícia Federal, Receita Federal, gov.br) ou ligue para o 156.",
rodape:"Guia informativo. Não substitui orientação dos órgãos oficiais.",
fab:"Tire suas dúvidas",assist:"Assistente de Curitiba",min:"Minimizar",minA:"Minimizar assistente",ph:"Escreva sua dúvida",enviar:"Enviar",voltar:"Voltar ao menu",
intro:"Olá! Eu respondo as dúvidas mais comuns de quem chega a Curitiba. As informações são gerais, então confirme nos órgãos oficiais. Sobre qual assunto você quer saber?",
sobre:"Sobre {t}, qual é a sua dúvida?",claro:"Claro. Sobre qual assunto você quer saber?",
nao:"Não encontrei essa dúvida nas respostas que tenho. Escolha um dos assuntos abaixo ou ligue para 156."};

var I18N={
es:{ui:{marca:"Curitiba te da la bienvenida",nav:"Secciones de la guía",idioma:"Idioma",
h1:"Llegaste a Curitiba. Resolvamos el resto juntos.",
lead:"Una guía sencilla para los primeros días: documentos, vivienda, rutina y escuela de los hijos. Si tienes dudas, el asistente en la esquina de la pantalla responde al instante.",
btn:"Ver el paso a paso de los documentos",comece:"Empieza por aquí",
cidT:"Conoce la ciudad",cidD:"Curitiba es la capital del estado de Paraná, en el sur de Brasil, a unos 900 metros de altitud. Tiene fama de ciudad planificada, llena de parques y con transporte colectivo organizado.",
turT:"Puntos turísticos",turD:"Lugares para conocer en las primeras semanas, casi todos accesibles en transporte público.",
todos:"Todos",filtrar:"Filtrar por categoría",
docT:"Regularización de documentos",docD:"Este es un orden habitual de pasos. Tu caso puede variar según tu visa o autorización de residencia.",
aviso:"Las reglas cambian. Confirma siempre en los sitios oficiales (Polícia Federal, Receita Federal, gov.br) o llama al 156.",
rodape:"Guía informativa. No sustituye la orientación de los organismos oficiales.",
fab:"Resuelve tus dudas",assist:"Asistente de Curitiba",min:"Minimizar",minA:"Minimizar asistente",ph:"Escribe tu duda",enviar:"Enviar",voltar:"Volver al menú",
intro:"¡Hola! Respondo las dudas más comunes de quien llega a Curitiba. La información es general, así que confirma en los organismos oficiales. ¿Sobre qué tema quieres saber?",
sobre:"Sobre {t}: ¿cuál es tu duda?",claro:"Claro. ¿Sobre qué tema quieres saber?",
nao:"No encontré esa duda en las respuestas que tengo. Elige uno de los temas de abajo o llama al 156."},
abas:["Inicio","La ciudad","Puntos turísticos","Documentos","Currículum","Empleo"],
cartoes:[["Documentación","CPF, Polícia Federal, SUS"],["Vivienda","Alquilar, barrios, cuentas"],["Adaptación","Transporte, clima, idioma"],["Escuela de los hijos","Matrícula y vacunas"]],
lugares:[["Naturaleza","Invernadero de vidrio y jardines de estilo francés. Es la postal de la ciudad."],["Arquitectura","Teatro de estructura tubular rodeado de bosque, dentro de un parque."],["Arte","El Museo del Ojo reúne artes visuales, arquitectura y diseño."],["Parque","Gran parque para caminar y andar en bici. Es común ver capibaras en el lago."],["Centro","Calle peatonal del centro, con comercios, cafés y la Rua das Flores."],["Historia","Centro histórico con casonas, iglesias y feria de artesanías los domingos."],["Gastronomía","Para probar frutas, quesos, embutidos y comidas típicas."]],
fatos:[["Clima","Frío para los estándares brasileños. El invierno (junio a agosto) puede traer heladas y el tiempo cambia varias veces en el mismo día. Lleva abrigo y paraguas todo el año."],["Transporte","Autobuses expresos rojos, autobuses de barrio y estaciones tubo de vidrio. Consulta las formas de pago vigentes en el sitio de URBS."],["Gente y cultura","La ciudad fue formada por inmigrantes polacos, ucranianos, alemanes, italianos y japoneses. Se nota en la comida, las fiestas y los memoriales."],["Barrios conocidos","Centro, Batel, Água Verde, Bigorrilho, Cabral, Juvevê, Portão y Santa Felicidade. Cada uno tiene un perfil de precio y rutina distinto."],["Teléfonos útiles","190 Policía Militar, 192 SAMU, 193 Bomberos y 156 Central de la Alcaldía de Curitiba."]],
passos:[["Registro en la Policía Federal","Agenda en el sitio de la PF y lleva pasaporte y los documentos de tu tipo de autorización. Recibes la Carteira de Registro Nacional Migratório (CRNM). El plazo suele ser de 90 días desde la entrada, según el caso."],["CPF","Número obligatorio para trabajar, alquilar, abrir una cuenta y usar servicios. Puede emitirse en la Receita Federal, en Correios y en bancos autorizados."],["Carteira de Trabalho Digital","Se emite en la app, con cuenta gov.br y CPF. Verifica si tu autorización permite trabajar."],["Tarjeta SUS","Ve a la unidad de salud de tu barrio con documento y comprobante de domicilio. La atención del SUS también está abierta a extranjeros."],["Documentos de tu país","Los certificados y diplomas suelen requerir apostilla de La Haya y traducción jurada para valer en Brasil."]],
topicos:{
documentacao:{nome:"Documentación",perguntas:[
{p:"¿Cómo regularizo mi situación en la Policía Federal?",r:"Agenda en el sitio de la Policía Federal y ve con pasaporte y los documentos de tu tipo de autorización. Recibes la CRNM (Carteira de Registro Nacional Migratório). El plazo suele ser de 90 días desde la entrada, según el caso.\n\nConfirma la lista exacta de documentos en el sitio de la PF."},
{p:"¿Cómo saco el CPF?",r:"El CPF puede emitirse en la Receita Federal, en Correios y en bancos autorizados, como Banco do Brasil y Caixa. Lleva pasaporte u otro documento de identidad. Algunos canales cobran tasa, así que confirma antes."},
{p:"¿Puedo trabajar? ¿Cómo saco la carteira de trabajo?",r:"Depende de tu autorización de residencia. Si permite trabajar, emite la Carteira de Trabalho Digital en la app, con tu cuenta gov.br y el CPF."},
{p:"¿Cómo uso el sistema de salud (SUS)?",r:"Ve a la unidad de salud de tu barrio con documento y comprobante de domicilio para hacer la Tarjeta SUS. La atención está abierta también a extranjeros.\n\nEn una emergencia, llama al 192 (SAMU)."},
{p:"¿Debo traducir mis documentos?",r:"Los certificados y diplomas del exterior suelen requerir apostilla de La Haya y traducción jurada hecha por un traductor público en Brasil. Pregunta al organismo donde entregarás el documento qué exige."},
{p:"¿Qué teléfonos útiles debo guardar?",r:"190 Policía Militar\n192 SAMU (ambulancia)\n193 Bomberos\n156 Central de la Alcaldía de Curitiba"}]},
habitacao:{nome:"Vivienda",perguntas:[
{p:"¿Cómo alquilo un inmueble?",r:"Puedes alquilar mediante inmobiliaria o directamente con el propietario. Normalmente piden documento de identidad (CRNM o protocolo), CPF y comprobante de ingresos. Lee el contrato con calma y pide ayuda si algo no queda claro."},
{p:"¿Qué son fiador, seguro de fianza y depósito?",r:"Son garantías del alquiler. El fiador es una persona que responde por el contrato. El seguro de fianza se paga durante el contrato. El depósito (caução) es de hasta 3 meses de alquiler. Los extranjeros recién llegados suelen usar seguro de fianza o depósito."},
{p:"¿Qué barrios puedo considerar?",r:"Batel y Bigorrilho son modernos y más caros. Água Verde, Portão y Cabral son residenciales y bien conectados. El Centro tiene mucho transporte y comercio, pero es movido. Revisa los precios actuales en sitios de inmuebles antes de decidir."},
{p:"¿Qué cuentas de la casa pagaré?",r:"En general: alquiler, condominio, agua (Sanepar), luz (Copel), gas e internet. Pregunta en la inmobiliaria cuáles están incluidas y pide el cambio de titularidad de las cuentas."},
{p:"¿Dónde alojarme los primeros días?",r:"Mucha gente empieza con alojamiento temporal, apart-hotel o hostal hasta conocer los barrios. Desconfía de anuncios que piden pago anticipado sin que hayas visto el inmueble ni el contrato."}]},
adaptacao:{nome:"Adaptación",perguntas:[
{p:"¿Cómo funciona el transporte público?",r:"Curitiba tiene autobuses expresos rojos, autobuses de barrio y estaciones tubo de vidrio. Consulta las formas de pago vigentes en el sitio de URBS. Las apps de mapas muestran líneas y horarios en tiempo real."},
{p:"¿Cómo es el clima? ¿Qué debo llevar?",r:"Es frío para los estándares brasileños y el tiempo cambia mucho en el mismo día. El invierno va de junio a agosto y puede haber heladas. Ten abrigo y paraguas todo el año."},
{p:"¿Cómo abro una cuenta bancaria?",r:"En general necesitas documento de identidad (CRNM o protocolo), CPF y comprobante de domicilio. Cada banco tiene sus reglas, así que pregunta antes. El Pix se usa mucho para pagos diarios."},
{p:"¿Dónde aprendo portugués?",r:"Universidades públicas, como la UFPR, y organizaciones sociales suelen ofrecer cursos de portugués para extranjeros, algunos gratuitos. Pregunta también en la Central 156 de la Alcaldía."},
{p:"¿Cómo conozco gente y la ciudad?",r:"Visita parques como Barigui y el Jardim Botânico, la feria del Largo da Ordem los domingos y el Mercado Municipal. Los grupos de extranjeros y los eventos culturales ayudan a crear una red de contactos."}]},
escola:{nome:"Escuela de los hijos",perguntas:[
{p:"¿Cómo matriculo a mis hijos?",r:"La red pública tiene escuelas municipales (educación infantil y primeros años de primaria) y estaduales (últimos años y secundaria). Busca una escuela cerca de casa o la Secretaría de Educación.\n\nNo se puede negar la matrícula por falta de documentos ni por situación migratoria. Lleva lo que tengas: pasaporte, partida de nacimiento, comprobante de domicilio e historial escolar."},
{p:"¿Desde qué edad es obligatoria la escuela?",r:"En Brasil, la matrícula es obligatoria de los 4 a los 17 años. Las guarderías (0 a 3 años) son opcionales y los cupos suelen ser limitados."},
{p:"¿Necesito documentos escolares traducidos?",r:"El historial escolar del exterior ayuda a la escuela a definir el grado del alumno. La escuela puede hacer una evaluación para decidir el grado adecuado, así que no dejes de matricular por falta de traducción."},
{p:"¿Y la vacunación de los niños?",r:"Lleva la cartilla de vacunación de tu país y ve a la unidad de salud del barrio. Los profesionales verifican qué vacunas faltan y actualizan el calendario brasileño."},
{p:"¿Hay escuelas bilingües o internacionales?",r:"Sí, Curitiba tiene escuelas privadas bilingües e internacionales. Compara precios, idiomas ofrecidos y si el currículo es aceptado en tu país de origen."}]}}},

fr:{ui:{marca:"Bienvenue à Curitiba",nav:"Sections du guide",idioma:"Langue",
h1:"Vous êtes arrivé à Curitiba. Réglons le reste ensemble.",
lead:"Un guide simple pour les premiers jours : papiers, logement, quotidien et école des enfants. En cas de doute, l’assistant en bas de l’écran répond tout de suite.",
btn:"Voir les démarches pour les papiers",comece:"Commencez ici",
cidT:"Découvrez la ville",cidD:"Curitiba est la capitale de l’État du Paraná, dans le sud du Brésil, à environ 900 mètres d’altitude. Elle a la réputation d’être une ville planifiée, pleine de parcs et dotée d’un réseau de transport organisé.",
turT:"Sites touristiques",turD:"Des lieux à découvrir durant les premières semaines, presque tous accessibles en transport en commun.",
todos:"Tous",filtrar:"Filtrer par catégorie",
docT:"Régularisation des documents",docD:"Voici un ordre courant des démarches. Votre cas peut varier selon votre visa ou votre titre de séjour.",
aviso:"Les règles changent. Vérifiez toujours sur les sites officiels (Polícia Federal, Receita Federal, gov.br) ou appelez le 156.",
rodape:"Guide informatif. Il ne remplace pas les indications des organismes officiels.",
fab:"Posez vos questions",assist:"Assistant de Curitiba",min:"Réduire",minA:"Réduire l’assistant",ph:"Écrivez votre question",enviar:"Envoyer",voltar:"Retour au menu",
intro:"Bonjour ! Je réponds aux questions les plus courantes de ceux qui arrivent à Curitiba. Les informations sont générales : vérifiez auprès des organismes officiels. Sur quel sujet voulez-vous en savoir plus ?",
sobre:"Concernant {t} : quelle est votre question ?",claro:"Bien sûr. Sur quel sujet voulez-vous en savoir plus ?",
nao:"Je n’ai pas trouvé cette question dans mes réponses. Choisissez un des sujets ci-dessous ou appelez le 156."},
abas:["Accueil","La ville","Sites touristiques","Documents","CV","Emploi"],
cartoes:[["Documents","CPF, Police fédérale, SUS"],["Logement","Louer, quartiers, factures"],["Adaptation","Transport, climat, langue"],["École des enfants","Inscription et vaccins"]],
lugares:[["Nature","Serre en verre et jardins à la française. C’est la carte postale de la ville."],["Architecture","Théâtre à structure tubulaire entouré de forêt, dans un parc."],["Art","Le Musée de l’Œil réunit arts visuels, architecture et design."],["Parc","Grand parc pour marcher et faire du vélo. On y voit souvent des capybaras sur le lac."],["Centre","Rue piétonne du centre, avec commerces, cafés et la Rua das Flores."],["Histoire","Centre historique avec maisons anciennes, églises et marché d’artisanat le dimanche."],["Gastronomie","Pour goûter fruits, fromages, charcuteries et plats typiques."]],
fatos:[["Climat","Froid pour le Brésil. L’hiver (juin à août) peut apporter du givre, et le temps change plusieurs fois dans la journée. Prévoyez manteau et parapluie toute l’année."],["Transport","Bus express rouges, bus de quartier et stations-tubes en verre. Consultez les modes de paiement actuels sur le site de l’URBS."],["Peuple et culture","La ville a été formée par des immigrants polonais, ukrainiens, allemands, italiens et japonais. Cela se voit dans la cuisine, les fêtes et les mémoriaux."],["Quartiers connus","Centro, Batel, Água Verde, Bigorrilho, Cabral, Juvevê, Portão et Santa Felicidade. Chacun a son profil de prix et de quotidien."],["Numéros utiles","190 Police militaire, 192 SAMU, 193 Pompiers et 156 Centrale de la mairie de Curitiba."]],
passos:[["Enregistrement à la Police fédérale","Prenez rendez-vous sur le site de la PF et apportez passeport et pièces liées à votre type d’autorisation. Vous recevez la Carteira de Registro Nacional Migratório (CRNM). Le délai est généralement de 90 jours après l’entrée, selon le cas."],["CPF","Numéro obligatoire pour travailler, louer, ouvrir un compte et utiliser les services. Il peut être délivré à la Receita Federal, aux Correios et dans des banques agréées."],["Carte de travail numérique","Délivrée via l’appli, avec un compte gov.br et le CPF. Vérifiez si votre autorisation permet de travailler."],["Carte SUS","Rendez-vous à l’unité de santé de votre quartier avec une pièce d’identité et un justificatif de domicile. Le SUS est aussi ouvert aux étrangers."],["Documents de votre pays","Actes et diplômes exigent souvent l’apostille de La Haye et une traduction assermentée pour être valables au Brésil."]],
topicos:{
documentacao:{nome:"Documents",perguntas:[
{p:"Comment régulariser ma situation à la Police fédérale ?",r:"Prenez rendez-vous sur le site de la Police fédérale et présentez-vous avec votre passeport et les pièces liées à votre type d’autorisation. Vous recevez la CRNM (Carteira de Registro Nacional Migratório). Le délai est généralement de 90 jours après l’entrée, selon le cas.\n\nVérifiez la liste exacte des pièces sur le site de la PF."},
{p:"Comment obtenir le CPF ?",r:"Le CPF peut être délivré à la Receita Federal, aux Correios et dans des banques agréées, comme Banco do Brasil et Caixa. Apportez votre passeport ou une autre pièce d’identité. Certains canaux facturent des frais, vérifiez avant."},
{p:"Puis-je travailler ? Comment obtenir la carte de travail ?",r:"Cela dépend de votre titre de séjour. S’il autorise le travail, demandez la Carteira de Trabalho Digital dans l’appli, avec votre compte gov.br et le CPF."},
{p:"Comment utiliser le système de santé (SUS) ?",r:"Rendez-vous à l’unité de santé de votre quartier avec une pièce d’identité et un justificatif de domicile pour obtenir la carte SUS. Les soins sont ouverts aussi aux étrangers.\n\nEn cas d’urgence, appelez le 192 (SAMU)."},
{p:"Dois-je traduire mes documents ?",r:"Les actes et diplômes étrangers exigent souvent l’apostille de La Haye et une traduction assermentée par un traducteur public au Brésil. Demandez à l’organisme qui recevra le document ce qu’il exige."},
{p:"Quels numéros utiles enregistrer ?",r:"190 Police militaire\n192 SAMU (ambulance)\n193 Pompiers\n156 Centrale de la mairie de Curitiba"}]},
habitacao:{nome:"Logement",perguntas:[
{p:"Comment louer un bien ?",r:"Vous pouvez louer via une agence ou directement avec le propriétaire. On demande en général une pièce d’identité (CRNM ou récépissé), le CPF et un justificatif de revenus. Lisez le contrat avec soin et demandez de l’aide si quelque chose n’est pas clair."},
{p:"Qu’est-ce que le garant, l’assurance-caution et le dépôt ?",r:"Ce sont des garanties de loyer. Le garant est une personne qui répond du contrat. L’assurance-caution se paie pendant le bail. Le dépôt (caução) peut aller jusqu’à 3 mois de loyer. Les étrangers récemment arrivés utilisent souvent l’assurance-caution ou le dépôt."},
{p:"Quels quartiers envisager ?",r:"Batel et Bigorrilho sont modernes et plus chers. Água Verde, Portão et Cabral sont résidentiels et bien desservis. Le Centro a beaucoup de transports et de commerces, mais il est animé. Vérifiez les prix actuels sur les sites d’annonces avant de décider."},
{p:"Quelles factures vais-je payer ?",r:"En général : loyer, charges de copropriété, eau (Sanepar), électricité (Copel), gaz et internet. Demandez à l’agence lesquelles sont incluses et faites transférer les contrats à votre nom."},
{p:"Où loger les premiers jours ?",r:"Beaucoup commencent par une location de courte durée, un apart-hôtel ou une auberge, le temps de connaître les quartiers. Méfiez-vous des annonces qui demandent un paiement à l’avance sans que vous ayez vu le bien ni le contrat."}]},
adaptacao:{nome:"Adaptation",perguntas:[
{p:"Comment fonctionnent les transports en commun ?",r:"Curitiba a des bus express rouges, des bus de quartier et des stations-tubes en verre. Consultez les modes de paiement actuels sur le site de l’URBS. Les applis de cartes montrent lignes et horaires en temps réel."},
{p:"Quel est le climat ? Que prévoir ?",r:"Il fait froid pour le Brésil et le temps change beaucoup dans la journée. L’hiver va de juin à août et peut apporter du givre. Ayez un manteau et un parapluie toute l’année."},
{p:"Comment ouvrir un compte bancaire ?",r:"En général, il faut une pièce d’identité (CRNM ou récépissé), le CPF et un justificatif de domicile. Chaque banque a ses règles, renseignez-vous avant. Le Pix est très utilisé pour les paiements courants."},
{p:"Où apprendre le portugais ?",r:"Les universités publiques, comme l’UFPR, et des associations proposent souvent des cours de portugais pour étrangers, certains gratuits. Renseignez-vous aussi au 156 de la mairie."},
{p:"Comment rencontrer des gens et découvrir la ville ?",r:"Visitez des parcs comme Barigui et le Jardim Botânico, le marché du Largo da Ordem le dimanche et le Mercado Municipal. Les groupes d’étrangers et les événements culturels aident à se faire un réseau."}]},
escola:{nome:"École des enfants",perguntas:[
{p:"Comment inscrire mes enfants ?",r:"Le réseau public compte des écoles municipales (maternelle et premières années du primaire) et d’État (dernières années et lycée). Cherchez une école près de chez vous ou contactez le Secrétariat à l’Éducation.\n\nL’inscription ne peut pas être refusée pour manque de documents ou situation migratoire. Apportez ce que vous avez : passeport, acte de naissance, justificatif de domicile et dossier scolaire."},
{p:"À partir de quel âge l’école est-elle obligatoire ?",r:"Au Brésil, l’inscription est obligatoire de 4 à 17 ans. Les crèches (0 à 3 ans) sont facultatives et les places souvent limitées."},
{p:"Faut-il traduire les documents scolaires ?",r:"Le dossier scolaire étranger aide l’école à déterminer la classe de l’élève. L’école peut faire une évaluation pour choisir la classe adaptée, n’attendez donc pas la traduction pour inscrire."},
{p:"Et la vaccination des enfants ?",r:"Apportez le carnet de vaccination de votre pays et allez à l’unité de santé du quartier. Les professionnels vérifient les vaccins manquants et mettent à jour le calendrier brésilien."},
{p:"Existe-t-il des écoles bilingues ou internationales ?",r:"Oui, Curitiba compte des écoles privées bilingues et internationales. Comparez les tarifs, les langues proposées et si le programme est reconnu dans votre pays d’origine."}]}}},

en:{ui:{marca:"Welcome to Curitiba",nav:"Guide sections",idioma:"Language",
h1:"You’ve arrived in Curitiba. Let’s sort out the rest together.",
lead:"A simple guide for your first days: documents, housing, daily life and your children’s schooling. If you have a question, the assistant at the corner of the screen answers right away.",
btn:"See the step-by-step for documents",comece:"Start here",
cidT:"Get to know the city",cidD:"Curitiba is the capital of Paraná state in southern Brazil, about 900 meters above sea level. It’s known as a planned city, full of parks, with an organized public transport system.",
turT:"Tourist spots",turD:"Places worth seeing in your first weeks, almost all reachable by public transport.",
todos:"All",filtrar:"Filter by category",
docT:"Getting your documents in order",docD:"This is a common order of steps. Your case may vary depending on your visa or residence permit.",
aviso:"Rules change. Always confirm on official websites (Polícia Federal, Receita Federal, gov.br) or call 156.",
rodape:"Informational guide. It does not replace guidance from official agencies.",
fab:"Ask your questions",assist:"Curitiba Assistant",min:"Minimize",minA:"Minimize assistant",ph:"Type your question",enviar:"Send",voltar:"Back to menu",
intro:"Hi! I answer the most common questions from people arriving in Curitiba. The information is general, so please confirm with official agencies. What would you like to know about?",
sobre:"About {t}: what is your question?",claro:"Of course. What would you like to know about?",
nao:"I couldn’t find that question in my answers. Pick one of the topics below or call 156."},
abas:["Home","The city","Tourist spots","Documents","Résumé","Jobs"],
cartoes:[["Documents","CPF, Federal Police, SUS"],["Housing","Renting, neighborhoods, bills"],["Settling in","Transport, weather, language"],["Kids’ school","Enrollment and vaccines"]],
lugares:[["Nature","Glass greenhouse and French-style gardens. It’s the city’s postcard."],["Architecture","Tube-framed theater surrounded by forest, inside a park."],["Art","The “Eye Museum” brings together visual arts, architecture and design."],["Park","Large park for walking and cycling. Capybaras are often seen by the lake."],["Downtown","Pedestrian street downtown, with shops, cafés and the Rua das Flores."],["History","Historic center with old houses, churches and a Sunday craft fair."],["Food","A place to try fruit, cheese, cured meats and local dishes."]],
fatos:[["Weather","Cold by Brazilian standards. Winter (June to August) can bring frost, and the weather can change several times a day. Bring a coat and umbrella all year."],["Transport","Red express buses, neighborhood buses and glass tube stations. Check current payment methods on the URBS website."],["People and culture","The city was shaped by Polish, Ukrainian, German, Italian and Japanese immigrants. You can see it in the food, festivals and memorials."],["Well-known neighborhoods","Centro, Batel, Água Verde, Bigorrilho, Cabral, Juvevê, Portão and Santa Felicidade. Each has a different price and lifestyle profile."],["Useful numbers","190 Military Police, 192 SAMU, 193 Fire Department and 156 Curitiba City Hall hotline."]],
passos:[["Registration with the Federal Police","Book on the PF website and bring your passport and the documents for your type of permit. You receive the National Migration Registry card (CRNM). The deadline is usually 90 days after entry, depending on your case."],["CPF","A required number to work, rent, open an account and use services. It can be issued at the Receita Federal, at Correios and at authorized banks."],["Digital work card","Issued in the app with a gov.br account and your CPF. Check whether your permit allows you to work."],["SUS card","Go to your neighborhood health unit with an ID and proof of address. SUS care is open to foreigners too."],["Documents from your country","Certificates and diplomas usually need a Hague apostille and a sworn translation to be valid in Brazil."]],
topicos:{
documentacao:{nome:"Documents",perguntas:[
{p:"How do I regularize my status with the Federal Police?",r:"Book an appointment on the Federal Police website and go with your passport and the documents for your type of permit. You receive the CRNM (Carteira de Registro Nacional Migratório). The deadline is usually 90 days after entry, depending on your case.\n\nCheck the exact document list on the PF website."},
{p:"How do I get a CPF?",r:"The CPF can be issued at the Receita Federal, at Correios post offices and at authorized banks such as Banco do Brasil and Caixa. Bring your passport or another ID. Some channels charge a fee, so check first."},
{p:"Can I work? How do I get a work card?",r:"It depends on your residence permit. If it allows work, get the digital work card (Carteira de Trabalho Digital) in the app, using your gov.br account and CPF."},
{p:"How do I use the health system (SUS)?",r:"Go to your neighborhood health unit with an ID and proof of address to get the SUS card. Care is open to foreigners too.\n\nIn an emergency, call 192 (SAMU)."},
{p:"Do I need to translate my documents?",r:"Foreign certificates and diplomas usually need a Hague apostille and a sworn translation by a public translator in Brazil. Ask the agency receiving the document what it requires."},
{p:"Which useful phone numbers should I save?",r:"190 Military Police\n192 SAMU (ambulance)\n193 Fire Department\n156 Curitiba City Hall hotline"}]},
habitacao:{nome:"Housing",perguntas:[
{p:"How do I rent a place?",r:"You can rent through a real estate agency or directly from the owner. They usually ask for an ID (CRNM or receipt), CPF and proof of income. Read the contract carefully and ask for help if something is unclear."},
{p:"What are a guarantor, rental insurance and a deposit?",r:"They are rental guarantees. A guarantor is a person who answers for the contract. Rental insurance is paid throughout the lease. A deposit (caução) is up to 3 months’ rent. Newly arrived foreigners often use rental insurance or a deposit."},
{p:"Which neighborhoods should I consider?",r:"Batel and Bigorrilho are modern and pricier. Água Verde, Portão and Cabral are residential and well connected. Centro has lots of transport and shops but is busy. Check current prices on property sites before deciding."},
{p:"Which household bills will I pay?",r:"Usually: rent, building fees, water (Sanepar), electricity (Copel), gas and internet. Ask the agency which are included and have the accounts moved into your name."},
{p:"Where can I stay in my first days?",r:"Many people start with short-term rentals, an aparthotel or a hostel until they know the neighborhoods. Be wary of listings that ask for advance payment before you have seen the place or the contract."}]},
adaptacao:{nome:"Settling in",perguntas:[
{p:"How does public transport work?",r:"Curitiba has red express buses, neighborhood buses and glass tube stations. Check current payment methods on the URBS website. Map apps show lines and times in real time."},
{p:"What is the weather like? What should I bring?",r:"It is cold by Brazilian standards and the weather changes a lot during the day. Winter runs from June to August and can bring frost. Keep a coat and umbrella handy all year."},
{p:"How do I open a bank account?",r:"You generally need an ID (CRNM or receipt), CPF and proof of address. Each bank has its own rules, so ask first. Pix is widely used for everyday payments."},
{p:"Where can I learn Portuguese?",r:"Public universities, such as UFPR, and social organizations often offer Portuguese courses for foreigners, some free. You can also ask at the City Hall hotline, 156."},
{p:"How do I meet people and get to know the city?",r:"Visit parks like Barigui and the Botanical Garden, the Sunday fair at Largo da Ordem and the Municipal Market. Foreigner groups and cultural events help build a network."}]},
escola:{nome:"Kids’ school",perguntas:[
{p:"How do I enroll my children?",r:"The public network has municipal schools (kindergarten and early primary) and state schools (later primary and high school). Look for a school near home or contact the Education Department.\n\nEnrollment cannot be refused for missing documents or immigration status. Bring what you have: passport, birth certificate, proof of address and school records."},
{p:"From what age is school mandatory?",r:"In Brazil, enrollment is mandatory from ages 4 to 17. Daycare (ages 0 to 3) is optional and places are often limited."},
{p:"Do I need translated school records?",r:"School records from abroad help the school decide the student’s grade. The school may run an assessment to place the child, so do not delay enrollment for lack of a translation."},
{p:"What about the children’s vaccinations?",r:"Bring your country’s vaccination record and go to the neighborhood health unit. Staff check which vaccines are missing and update the Brazilian schedule."},
{p:"Are there bilingual or international schools?",r:"Yes, Curitiba has private bilingual and international schools. Compare fees, languages offered and whether the curriculum is accepted in your home country."}]}}}
};

/* Informações extras: dica de cada fato, dica de cada lugar e o que levar em cada passo (mesma ordem das listas acima). */
var DET={
 "pt": {
  "fatos": [
   "Vista-se em camadas: as manhãs costumam ser frias e as tardes, mais amenas.",
   "Nas estações-tubo você paga ao entrar e espera na plataforma. Use um app de mapas para ver linhas e horários.",
   "Para conhecer essa herança, visite o Memorial da Imigração Polonesa, no Bosque do Papa, e os restaurantes de Santa Felicidade, bairro de origem italiana.",
   "Antes de decidir onde morar, visite o bairro em horários diferentes e veja a distância até o trabalho e até uma linha de ônibus.",
   "Salve também o 180 (violência contra a mulher) e o 100 (direitos humanos), que funcionam todos os dias."
  ],
  "lugares": [
   "A entrada costuma ser gratuita. Vá pela manhã, quando há menos gente, e leve água e protetor solar.",
   "Fica no Parque das Pedreiras. Confira a programação e como comprar ingresso para eventos antes de ir.",
   "O ingresso é pago e o museu costuma fechar às segundas. Confira dias, horários e meia-entrada no site.",
   "Vá no fim de semana para ver o parque cheio de vida. Observe as capivaras de longe e não dê comida a elas.",
   "É mais movimentada em dias úteis. Cuide dos seus pertences, principalmente em horários de pico.",
   "A feira de domingo costuma ir da manhã até o início da tarde. Confirme o horário antes de ir.",
   "Confira os horários, que mudam aos domingos e feriados. Leve dinheiro ou cartão e vá com fome."
  ],
  "passos": [
   "Passaporte, comprovante do agendamento e os documentos do seu tipo de autorização. Pode haver taxa, então confirme no site da PF.",
   "Passaporte ou outro documento oficial com foto. Pergunte antes se o canal escolhido cobra taxa.",
   "Nada em papel: baixe o aplicativo e entre com sua conta gov.br. Para criar a conta, você precisa do CPF.",
   "Documento de identidade, CPF (se já tiver) e comprovante de residência atual.",
   "Sempre que possível, faça a apostila de Haia no país de origem antes de viajar. É mais simples do que resolver depois."
  ]
 },
 "es": {
  "fatos": [
   "Vístete en capas: las mañanas suelen ser frías y las tardes, más templadas.",
   "En las estaciones tubo pagas al entrar y esperas en la plataforma. Usa una app de mapas para ver líneas y horarios.",
   "Para conocer esa herencia, visita el Memorial de la Inmigración Polaca, en el Bosque do Papa, y los restaurantes de Santa Felicidade, barrio de origen italiano.",
   "Antes de decidir dónde vivir, visita el barrio a distintas horas y mira la distancia al trabajo y a una línea de autobús.",
   "Guarda también el 180 (violencia contra la mujer) y el 100 (derechos humanos), que atienden todos los días."
  ],
  "lugares": [
   "La entrada suele ser gratuita. Ve por la mañana, cuando hay menos gente, y lleva agua y protector solar.",
   "Está en el Parque das Pedreiras. Revisa la programación y cómo comprar entradas para eventos antes de ir.",
   "La entrada es de pago y el museo suele cerrar los lunes. Consulta días, horarios y descuentos en su sitio web.",
   "Ve en fin de semana para ver el parque lleno de vida. Observa a los capibaras de lejos y no les des comida.",
   "Hay más movimiento en días laborales. Cuida tus pertenencias, sobre todo en horas pico.",
   "La feria del domingo suele ir de la mañana al inicio de la tarde. Confirma el horario antes de ir.",
   "Confirma los horarios, que cambian los domingos y feriados. Lleva efectivo o tarjeta y ve con hambre."
  ],
  "passos": [
   "Pasaporte, comprobante de la cita y los documentos de tu tipo de autorización. Puede haber tasa; confirma en el sitio de la PF.",
   "Pasaporte u otro documento oficial con foto. Pregunta antes si el canal elegido cobra tasa.",
   "Nada en papel: descarga la app e ingresa con tu cuenta gov.br. Para crearla necesitas el CPF.",
   "Documento de identidad, CPF (si ya lo tienes) y comprobante de domicilio actual.",
   "Siempre que puedas, haz la apostilla de La Haya en tu país antes de viajar. Es más sencillo que resolverlo después."
  ]
 },
 "fr": {
  "fatos": [
   "Habillez-vous en couches : les matinées sont souvent froides et les après-midi plus douces.",
   "Dans les stations-tubes, on paie à l’entrée et on attend sur le quai. Utilisez une appli de cartes pour les lignes et les horaires.",
   "Pour voir cet héritage, visitez le Mémorial de l’immigration polonaise, au Bosque do Papa, et les restaurants de Santa Felicidade, quartier d’origine italienne.",
   "Avant de choisir où habiter, visitez le quartier à différentes heures et vérifiez la distance jusqu’au travail et à une ligne de bus.",
   "Notez aussi le 180 (violences faites aux femmes) et le 100 (droits humains), joignables tous les jours."
  ],
  "lugares": [
   "L’entrée est généralement gratuite. Venez le matin, quand il y a moins de monde, avec de l’eau et de la crème solaire.",
   "Il se trouve dans le Parque das Pedreiras. Consultez la programmation et l’achat des billets pour les événements avant d’y aller.",
   "L’entrée est payante et le musée ferme souvent le lundi. Vérifiez jours, horaires et tarifs réduits sur son site.",
   "Venez le week-end pour voir le parc animé. Observez les capybaras de loin et ne les nourrissez pas.",
   "C’est plus animé en semaine. Surveillez vos affaires, surtout aux heures de pointe.",
   "Le marché du dimanche va souvent du matin au début d’après-midi. Vérifiez l’horaire avant d’y aller.",
   "Vérifiez les horaires, qui changent le dimanche et les jours fériés. Prenez espèces ou carte, et venez avec faim."
  ],
  "passos": [
   "Passeport, justificatif du rendez-vous et pièces liées à votre type d’autorisation. Des frais peuvent s’appliquer ; vérifiez sur le site de la PF.",
   "Passeport ou autre pièce officielle avec photo. Demandez d’abord si le canal choisi facture des frais.",
   "Rien sur papier : téléchargez l’appli et connectez-vous avec votre compte gov.br. Il faut le CPF pour le créer.",
   "Pièce d’identité, CPF (si vous l’avez déjà) et justificatif de domicile actuel.",
   "Si possible, faites l’apostille de La Haye dans votre pays avant de partir. C’est plus simple que de le régler ensuite."
  ]
 },
 "en": {
  "fatos": [
   "Dress in layers: mornings are often cold and afternoons milder.",
   "At tube stations you pay on entry and wait on the platform. Use a map app to check lines and times.",
   "To see this heritage, visit the Polish Immigration Memorial at Bosque do Papa and the restaurants of Santa Felicidade, the Italian-origin district.",
   "Before choosing where to live, visit the neighborhood at different times and check the distance to work and to a bus line.",
   "Also save 180 (violence against women) and 100 (human rights), both available every day."
  ],
  "lugares": [
   "Entry is usually free. Go in the morning when it is quieter, and bring water and sunscreen.",
   "It is in Parque das Pedreiras. Check the schedule and how to buy tickets for events before you go.",
   "Admission is paid and the museum is usually closed on Mondays. Check days, hours and discounts on its website.",
   "Go on a weekend to see the park full of life. Watch the capybaras from a distance and do not feed them.",
   "It is busier on weekdays. Watch your belongings, especially at peak hours.",
   "The Sunday fair usually runs from morning to early afternoon. Confirm the hours before you go.",
   "Check the opening hours, which change on Sundays and holidays. Bring cash or a card and come hungry."
  ],
  "passos": [
   "Passport, proof of your appointment and the documents for your type of permit. A fee may apply; check the PF website.",
   "Passport or another official photo ID. Ask first whether the channel you choose charges a fee.",
   "Nothing on paper: download the app and sign in with your gov.br account. You need the CPF to create it.",
   "ID document, CPF (if you already have it) and current proof of address.",
   "Whenever possible, get the Hague apostille in your home country before you travel. It is easier than sorting it out later."
  ]
 }
};

/* Aba Documentação: passo a passo (como) e custo/prazo (cu) de cada etapa, na mesma ordem dos passos. */
var DOC={
 "pt": {
  "como": [
   [
    "Acesse o serviço de registro de estrangeiro no gov.br e preencha o formulário.",
    "Salve o formulário para gerar o número do requerimento.",
    "Emita a GRU (taxa) e agende na unidade da PF da sua cidade.",
    "Compareça no dia marcado, para foto e digitais, e guarde o protocolo."
   ],
   [
    "Preencha o formulário de inscrição no CPF no site da Receita Federal.",
    "Guarde o número do protocolo gerado.",
    "Leve os originais a uma unidade da Receita ou a um parceiro (Banco do Brasil, Caixa ou Correios)."
   ],
   [
    "Crie ou acesse sua conta gov.br (o CPF é necessário).",
    "Baixe o app Carteira de Trabalho Digital.",
    "Entre com a conta gov.br e confira seus dados."
   ],
   [
    "Procure a unidade básica de saúde (UBS) do seu bairro.",
    "Leve o documento e o comprovante de residência.",
    "Peça o cadastro e o Cartão Nacional de Saúde."
   ],
   [
    "Providencie a apostila de Haia no país de origem (ou a legalização consular, se o país não participar).",
    "Faça a tradução juramentada no Brasil, com tradutor público.",
    "Guarde os originais e uma cópia digital."
   ]
  ],
  "cu": [
   "A taxa da CRNM fica em torno de R$ 205; confirme o valor atual. O protocolo serve como documento provisório até a carteira ficar pronta.",
   "O serviço da Receita é gratuito. Parceiros podem cobrar taxa; confirme. O número costuma sair na hora.",
   "Gratuita e feita pelo celular. Só trabalhe depois de confirmar que sua autorização permite.",
   "Gratuito. Em emergências, você é atendido mesmo sem o cartão.",
   "Têm custo e variam conforme o país e o tradutor. Planeje antes de viajar."
  ]
 },
 "es": {
  "como": [
   [
    "Entra al servicio de registro de extranjeros en gov.br y completa el formulario.",
    "Guarda el formulario para generar el número de solicitud.",
    "Emite la GRU (tasa) y agenda en la unidad de la PF de tu ciudad.",
    "Ve el día acordado para foto y huellas, y guarda el comprobante."
   ],
   [
    "Completa el formulario de inscripción al CPF en el sitio de la Receita Federal.",
    "Guarda el número de protocolo generado.",
    "Lleva los originales a una unidad de la Receita o a un socio (Banco do Brasil, Caixa o Correios)."
   ],
   [
    "Crea o ingresa a tu cuenta gov.br (se necesita el CPF).",
    "Descarga la app Carteira de Trabalho Digital.",
    "Entra con tu cuenta gov.br y revisa tus datos."
   ],
   [
    "Busca la unidad básica de salud (UBS) de tu barrio.",
    "Lleva el documento y el comprobante de domicilio.",
    "Pide el registro y la Tarjeta Nacional de Salud."
   ],
   [
    "Gestiona la apostilla de La Haya en tu país (o la legalización consular, si no participa).",
    "Haz la traducción jurada en Brasil, con traductor público.",
    "Guarda los originales y una copia digital."
   ]
  ],
  "cu": [
   "La tasa de la CRNM ronda R$ 205; confirma el valor actual. El comprobante sirve como documento provisional hasta que esté lista la tarjeta.",
   "El servicio de la Receita es gratuito. Los socios pueden cobrar tasa; confirma. El número suele salir al instante.",
   "Gratuita y desde el celular. Trabaja solo después de confirmar que tu autorización lo permite.",
   "Gratuito. En emergencias te atienden aunque no tengas la tarjeta.",
   "Tienen costo y varían según el país y el traductor. Planifica antes de viajar."
  ]
 },
 "fr": {
  "como": [
   [
    "Ouvrez le service d’enregistrement des étrangers sur gov.br et remplissez le formulaire.",
    "Enregistrez-le pour obtenir le numéro de demande.",
    "Émettez la GRU (taxe) et prenez rendez-vous à la PF de votre ville.",
    "Présentez-vous au rendez-vous pour la photo et les empreintes, et gardez le récépissé."
   ],
   [
    "Remplissez le formulaire d’inscription au CPF sur le site de la Receita Federal.",
    "Gardez le numéro de protocole généré.",
    "Apportez les originaux à un bureau de la Receita ou à un partenaire (Banco do Brasil, Caixa ou Correios)."
   ],
   [
    "Créez ou ouvrez votre compte gov.br (le CPF est nécessaire).",
    "Téléchargez l’appli Carteira de Trabalho Digital.",
    "Connectez-vous avec gov.br et vérifiez vos données."
   ],
   [
    "Cherchez l’unité de santé (UBS) de votre quartier.",
    "Apportez une pièce d’identité et un justificatif de domicile.",
    "Demandez l’inscription et la carte nationale de santé."
   ],
   [
    "Obtenez l’apostille de La Haye dans votre pays (ou la légalisation consulaire si le pays n’y participe pas).",
    "Faites la traduction assermentée au Brésil, avec un traducteur public.",
    "Gardez les originaux et une copie numérique."
   ]
  ],
  "cu": [
   "La taxe de la CRNM est d’environ R$ 205 ; vérifiez le montant actuel. Le récépissé sert de document provisoire jusqu’à la carte.",
   "Le service de la Receita est gratuit. Les partenaires peuvent facturer ; vérifiez. Le numéro sort souvent sur place.",
   "Gratuite et faite depuis le téléphone. Ne travaillez qu’après avoir vérifié que votre autorisation le permet.",
   "Gratuit. En urgence, vous êtes soigné même sans la carte.",
   "Ils ont un coût qui varie selon le pays et le traducteur. Planifiez avant de partir."
  ]
 },
 "en": {
  "como": [
   [
    "Open the foreigner registration service on gov.br and fill in the form.",
    "Save the form to get your request number.",
    "Issue the GRU (fee) and book an appointment at the PF office in your city.",
    "Go on the day for your photo and fingerprints, and keep the receipt."
   ],
   [
    "Fill in the CPF registration form on the Receita Federal website.",
    "Keep the protocol number it generates.",
    "Take your originals to a Receita office or a partner (Banco do Brasil, Caixa or Correios)."
   ],
   [
    "Create or sign in to your gov.br account (the CPF is required).",
    "Download the Carteira de Trabalho Digital app.",
    "Sign in with gov.br and check your details."
   ],
   [
    "Find the basic health unit (UBS) in your neighborhood.",
    "Bring your ID and proof of address.",
    "Ask to be registered and get the National Health Card."
   ],
   [
    "Get the Hague apostille in your home country (or consular legalization if it is not a member).",
    "Have a sworn translation done in Brazil, by a public translator.",
    "Keep the originals and a digital copy."
   ]
  ],
  "cu": [
   "The CRNM fee is around R$ 205; check the current amount. The receipt works as a temporary document until the card is ready.",
   "The Receita service is free. Partners may charge a fee; check. The number is often issued on the spot.",
   "Free and done on your phone. Only work after confirming your permit allows it.",
   "Free. In emergencies you are treated even without the card.",
   "They cost money and vary by country and translator. Plan before you travel."
  ]
 }
};
var DOCLINK=["https://www.gov.br/pt-br/servicos/registrar-se-como-estrangeiro-no-brasil","","","",""];

function dadosBase(lg){
  var x=I18N[lg];
  if(!x){return {ui:UI_PT,abas:ABAS,cartoes:CARTOES,lugares:LUGARES,fatos:FATOS,passos:PASSOS,topicos:TOPICOS};}
  return {ui:x.ui,
    abas:ABAS.map(function(a,i){return [a[0],x.abas[i]];}),
    cartoes:CARTOES.map(function(c,i){return [c[0],x.cartoes[i][0],x.cartoes[i][1],c[3]];}),
    lugares:LUGARES.map(function(l,i){return [l[0],x.lugares[i][0],x.lugares[i][1],l[3],l[4],l[5],l[6]];}),
    fatos:FATOS.map(function(f,i){return [x.fatos[i][0],x.fatos[i][1],f[2]];}),
    passos:x.passos,topicos:x.topicos};
}

var EXTRA={
pt:{feito:"Já fiz este passo",prog:"{n} de {m} passos concluídos. Seu progresso fica salvo neste aparelho.",lembT:"Lembrete do prazo",lembD:"Informe a data de entrada no Brasil e baixe um lembrete para o seu calendário, 90 dias depois. Confirme o prazo do seu caso na Polícia Federal.",dataL:"Data de entrada no Brasil",lembB:"Baixar lembrete",icsT:"Prazo de registro na Polícia Federal (confirme o seu prazo)",icsD:"Agende e confirme os documentos no site da Polícia Federal.",fbL:"Informação errada ou desatualizada?",fbT:"Conte o que encontrou. Vamos revisar.",fbP:"Escreva aqui. Não envie dados pessoais, como CPF ou passaporte.",fbS:"Enviar",fbOk:"Obrigado! Vamos revisar.",fbErr:"Não foi possível enviar agora. Tente de novo mais tarde.",fbX:"Fechar"},
es:{feito:"Ya hice este paso",prog:"{n} de {m} pasos completados. Tu progreso se guarda en este dispositivo.",lembT:"Recordatorio del plazo",lembD:"Indica la fecha de entrada a Brasil y descarga un recordatorio para tu calendario, 90 días después. Confirma el plazo de tu caso en la Polícia Federal.",dataL:"Fecha de entrada a Brasil",lembB:"Descargar recordatorio",icsT:"Plazo de registro en la Polícia Federal (confirma el tuyo)",icsD:"Agenda y confirma los documentos en el sitio de la Polícia Federal.",fbL:"¿Información errónea o desactualizada?",fbT:"Cuéntanos qué encontraste. Lo revisaremos.",fbP:"Escribe aquí. No envíes datos personales, como CPF o pasaporte.",fbS:"Enviar",fbOk:"¡Gracias! Lo revisaremos.",fbErr:"No se pudo enviar ahora. Inténtalo más tarde.",fbX:"Cerrar"},
fr:{feito:"J’ai fait cette étape",prog:"{n} étapes sur {m} terminées. Votre progression est enregistrée sur cet appareil.",lembT:"Rappel du délai",lembD:"Indiquez votre date d’entrée au Brésil et téléchargez un rappel pour votre calendrier, 90 jours plus tard. Vérifiez le délai de votre cas auprès de la Police fédérale.",dataL:"Date d’entrée au Brésil",lembB:"Télécharger le rappel",icsT:"Délai d’enregistrement à la Police fédérale (vérifiez le vôtre)",icsD:"Prenez rendez-vous et vérifiez les pièces sur le site de la Police fédérale.",fbL:"Information erronée ou périmée ?",fbT:"Dites-nous ce que vous avez trouvé. Nous vérifierons.",fbP:"Écrivez ici. N’envoyez pas de données personnelles, comme le CPF ou le passeport.",fbS:"Envoyer",fbOk:"Merci ! Nous allons vérifier.",fbErr:"Envoi impossible pour le moment. Réessayez plus tard.",fbX:"Fermer"},
en:{feito:"I’ve done this step",prog:"{n} of {m} steps completed. Your progress is saved on this device.",lembT:"Deadline reminder",lembD:"Enter your date of arrival in Brazil and download a calendar reminder for 90 days later. Confirm the deadline for your case with the Federal Police.",dataL:"Date of arrival in Brazil",lembB:"Download reminder",icsT:"Federal Police registration deadline (confirm yours)",icsD:"Book and confirm the documents on the Federal Police website.",fbL:"Wrong or outdated information?",fbT:"Tell us what you found. We’ll review it.",fbP:"Write here. Do not send personal data, such as CPF or passport.",fbS:"Send",fbOk:"Thank you! We’ll review it.",fbErr:"Couldn’t send right now. Please try again later.",fbX:"Close"}};

/* Textos novos do visual e do chatbot (sobrescrevem os de mesmo nome acima). */
var NOVO={
pt:{dicaR:"Dica",levarR:"O que levar",temaE:"Ativar modo escuro",temaC:"Ativar modo claro",pular:"Pular para o conteúdo",mapa:"Ver no mapa",imprimir:"Imprimir lista",limparCk:"Limpar marcações",parab:"Tudo concluído. Bom trabalho!",siteOf:"Abrir site oficial",cuR:"Custo e prazo",comoR:"Como fazer",glosT:"Glossário rápido",casoT:"Avisos importantes:",gloss:[["CRNM", "Carteira de Registro Nacional Migratório: seu documento de identidade no Brasil."], ["RNM", "Número do seu registro migratório, que aparece na CRNM."], ["CPF", "Número de contribuinte, usado para conta bancária, trabalho, aluguel e celular."], ["gov.br", "Conta única para serviços do governo, como a Carteira de Trabalho Digital."], ["Apostila de Haia", "Selo que confirma que um documento estrangeiro é autêntico."], ["Tradução juramentada", "Tradução oficial feita por tradutor público, aceita por órgãos brasileiros."]],caso:["Visto temporário: o registro costuma ser pedido em até 90 dias após a entrada.", "Autorização de residência concedida já no Brasil: o prazo costuma ser de cerca de 30 dias após a publicação.", "Passar do prazo pode gerar multa. Se perder o prazo, agende o quanto antes e guarde o comprovante.", "Refugiados, estudantes, trabalhadores e quem vem por reunião familiar têm regras próprias. Confirme o seu caso na PF.","O atendimento é feito na unidade da PF da cidade onde você mora. Em Curitiba, escolha a unidade de Curitiba ao agendar.","Algumas unidades pedem roupa adequada; evite bermuda e camiseta regata."],tels:["Polícia","SAMU","Bombeiros","Prefeitura","Mulher","Direitos humanos"],h1:"Bem-vindo a Curitiba. Vamos começar juntos.",lead:"Tudo o que você precisa para começar: documentos, moradia, escola dos filhos e a vida na cidade. Em linguagem simples.",btn:"Ver o passo a passo dos documentos",btn2:"Falar com o assistente",ajuda:"Como podemos ajudar?",ajudaD:"Escolha um assunto. O assistente responde em poucos segundos.",primeiros:"Seus primeiros passos",chatSub:"Respostas rápidas para quem acabou de chegar",emerg:"Emergência: 190 Polícia, 192 Ambulância, 193 Bombeiros",outras:"Mais perguntas sobre este assunto",menu:"Outro assunto",parecido:"Não achei uma resposta exata. Alguma destas perguntas ajuda?",irDoc:"Abrir o passo a passo dos documentos",irCid:"Ver a seção sobre a cidade",novo:"Nova conversa",dig:"Digitando",fab:"Precisa de ajuda?",intro:"Olá! Sou o assistente do guia. Escolha um assunto ou escreva sua pergunta.",sobre:"Sobre {t}. Qual é a sua pergunta?"},
es:{dicaR:"Consejo",levarR:"Qué llevar",temaE:"Activar modo oscuro",temaC:"Activar modo claro",pular:"Saltar al contenido",mapa:"Ver en el mapa",imprimir:"Imprimir lista",limparCk:"Borrar marcas",parab:"¡Todo listo! Buen trabajo.",siteOf:"Abrir sitio oficial",cuR:"Costo y plazo",comoR:"Cómo hacerlo",glosT:"Glosario rápido",casoT:"Nota importante:",gloss:[["CRNM", "Carteira de Registro Nacional Migratório: tu documento de identidad en Brasil."], ["RNM", "Número de tu registro migratorio, que figura en la CRNM."], ["CPF", "Número de contribuyente, usado para cuenta bancaria, trabajo, alquiler y celular."], ["gov.br", "Cuenta única para servicios del gobierno, como la Carteira de Trabalho Digital."], ["Apostilla de La Haya", "Sello que confirma que un documento extranjero es auténtico."], ["Traducción jurada", "Traducción oficial hecha por traductor público, aceptada por organismos brasileños."]],caso:["Visa temporal: el registro suele pedirse dentro de 90 días desde la entrada.", "Autorización de residencia concedida ya en Brasil: el plazo suele ser de unos 30 días tras su publicación.", "Pasarse del plazo puede generar multa. Si lo pierdes, agenda cuanto antes y guarda el comprobante.", "Refugiados, estudiantes, trabajadores y quienes llegan por reunificación familiar tienen reglas propias. Confirma tu caso en la PF.","La atención se hace en la unidad de la PF de la ciudad donde vives. En Curitiba, elige la unidad de Curitiba al agendar.","Algunas unidades piden ropa adecuada; evita bermudas y camisetas sin mangas."],tels:["Policía","SAMU","Bomberos","Alcaldía","Mujer","Derechos humanos"],h1:"Bienvenido a Curitiba. Empecemos juntos.",lead:"Todo lo que necesitas para empezar: documentos, vivienda, escuela de tus hijos y la vida en la ciudad. En lenguaje sencillo.",btn:"Ver el paso a paso de los documentos",btn2:"Hablar con el asistente",ajuda:"¿Cómo podemos ayudarte?",ajudaD:"Elige un tema. El asistente responde en pocos segundos.",primeiros:"Tus primeros pasos",chatSub:"Respuestas rápidas para quien acaba de llegar",emerg:"Emergencia: 190 Policía, 192 Ambulancia, 193 Bomberos",outras:"Más preguntas sobre este tema",menu:"Otro tema",parecido:"No encontré una respuesta exacta. ¿Te sirve alguna de estas preguntas?",irDoc:"Abrir el paso a paso de los documentos",irCid:"Ver la sección sobre la ciudad",novo:"Nueva conversación",dig:"Escribiendo",fab:"¿Necesitas ayuda?",intro:"¡Hola! Soy el asistente de la guía. Elige un tema o escribe tu pregunta.",sobre:"Sobre {t}. ¿Cuál es tu pregunta?"},
fr:{dicaR:"Conseil",levarR:"À apporter",temaE:"Activer le mode sombre",temaC:"Activer le mode clair",pular:"Aller au contenu",mapa:"Voir sur la carte",imprimir:"Imprimer la liste",limparCk:"Effacer les coches",parab:"Tout est terminé. Bravo !",siteOf:"Ouvrir le site officiel",cuR:"Coût et délai",comoR:"Comment faire",glosT:"Mini-glossaire",casoT:"Avis importants:",gloss:[["CRNM", "Carteira de Registro Nacional Migratório : votre pièce d’identité au Brésil."], ["RNM", "Numéro de votre enregistrement migratoire, inscrit sur la CRNM."], ["CPF", "Numéro de contribuable, utilisé pour le compte bancaire, le travail, la location et le mobile."], ["gov.br", "Compte unique pour les services publics, comme la Carteira de Trabalho Digital."], ["Apostille de La Haye", "Cachet qui confirme l’authenticité d’un document étranger."], ["Traduction assermentée", "Traduction officielle faite par un traducteur public, acceptée par les administrations brésiliennes."]],caso:["Visa temporaire : l’enregistrement est généralement demandé dans les 90 jours suivant l’entrée.", "Autorisation de séjour accordée déjà au Brésil : le délai est souvent d’environ 30 jours après la publication.", "Dépasser le délai peut entraîner une amende. Si c’est le cas, prenez rendez-vous vite et gardez le justificatif.", "Réfugiés, étudiants, travailleurs et regroupement familial ont des règles propres. Vérifiez votre cas auprès de la PF.","Le rendez-vous se fait à la PF de la ville où vous habitez. À Curitiba, choisissez l’unité de Curitiba lors de la réservation.","Certaines unités exigent une tenue correcte ; évitez short et débardeur."],tels:["Police","SAMU","Pompiers","Mairie","Femmes","Droits humains"],h1:"Bienvenue à Curitiba. Commençons ensemble.",lead:"Tout ce qu’il faut pour bien démarrer : papiers, logement, école des enfants et vie en ville. En langage simple.",btn:"Voir les démarches pour les papiers",btn2:"Parler à l’assistant",ajuda:"Comment pouvons-nous vous aider ?",ajudaD:"Choisissez un sujet. L’assistant répond en quelques secondes.",primeiros:"Vos premiers pas",chatSub:"Réponses rapides pour les nouveaux arrivants",emerg:"Urgence : 190 Police, 192 Ambulance, 193 Pompiers",outras:"Autres questions sur ce sujet",menu:"Autre sujet",parecido:"Je n’ai pas de réponse exacte. L’une de ces questions peut-elle aider ?",irDoc:"Ouvrir les démarches pour les papiers",irCid:"Voir la section sur la ville",novo:"Nouvelle conversation",dig:"En train d’écrire",fab:"Besoin d’aide ?",intro:"Bonjour ! Je suis l’assistant du guide. Choisissez un sujet ou écrivez votre question.",sobre:"À propos de {t}. Quelle est votre question ?"},
en:{dicaR:"Tip",levarR:"What to bring",temaE:"Switch to dark mode",temaC:"Switch to light mode",pular:"Skip to content",mapa:"View on map",imprimir:"Print list",limparCk:"Clear checkmarks",parab:"All done. Great work!",siteOf:"Open official site",cuR:"Cost and timing",comoR:"How to do it",glosT:"Quick glossary",casoT:"Important warnings:",gloss:[["CRNM", "Carteira de Registro Nacional Migratório: your ID card in Brazil."], ["RNM", "Your migration registration number, shown on the CRNM."], ["CPF", "Taxpayer number, used for a bank account, work, renting and a phone line."], ["gov.br", "A single account for government services, such as the Carteira de Trabalho Digital."], ["Hague apostille", "A stamp confirming that a foreign document is authentic."], ["Sworn translation", "An official translation by a public translator, accepted by Brazilian agencies."]],caso:["Temporary visa: registration is usually due within 90 days of entry.", "Residence permit granted while already in Brazil: the deadline is usually about 30 days after publication.", "Missing the deadline can lead to a fine. If you miss it, book as soon as possible and keep the receipt.", "Refugees, students, workers and family reunification have their own rules. Confirm your case with the PF.","Service is at the PF office of the city where you live. In Curitiba, choose the Curitiba office when booking.","Some offices require appropriate clothing; avoid shorts and tank tops."],tels:["Police","SAMU","Fire","City Hall","Women","Human rights"],h1:"Welcome to Curitiba. Let’s get started.",lead:"Everything you need to settle in: documents, housing, your children’s school and life in the city. In plain language.",btn:"See the step-by-step for documents",btn2:"Talk to the assistant",ajuda:"How can we help?",ajudaD:"Pick a topic. The assistant answers in a few seconds.",primeiros:"Your first steps",chatSub:"Quick answers for people who just arrived",emerg:"Emergency: 190 Police, 192 Ambulance, 193 Fire",outras:"More questions on this topic",menu:"Another topic",parecido:"I couldn’t find an exact answer. Does one of these questions help?",irDoc:"Open the documents step-by-step",irCid:"See the section about the city",novo:"New chat",dig:"Typing",fab:"Need help?",intro:"Hi! I’m the guide’s assistant. Pick a topic or type your question.",sobre:"About {t}. What is your question?"}
};

/* ===== Currículo e Empregos (textos nos 4 idiomas) ===== */
var CVK="t d s1 s2 s3 s4 s5 s6 nome cargo cidade tel email nac link sit resumo resumoD emp cargoE local ini fim atual desc addExp rem curso inst addForm idioma nivel n0 n1 n2 n3 n4 addIdi hab prox ant baixar idPdf idPdfD limpar priv obrig passoDe expD formD contD latim erroPdf pronto prontoD homeT homeD homeB1 homeB2 apagado".split(" ");
var EMK="t d gOf gMig gVag abrir externo antesT f1 f2 f3 f4 f5 ajT ajD ipe d100 cvLink docLink semSite".split(" ");
function pre(p,keys,vals){var o={};keys.forEach(function(k,i){o[p+k]=vals[i];});return o;}

var CV={
pt:["Monte seu currículo","Responda passo a passo e baixe um currículo em PDF, pronto para enviar. Seus dados ficam só no seu aparelho.",
"Contato","Resumo","Experiência","Formação","Idiomas e habilidades","Baixar PDF",
"Nome completo","Cargo ou área que você procura","Cidade e estado onde você mora","Telefone (com WhatsApp, se tiver)","E-mail","Nacionalidade","LinkedIn ou site (opcional)","Situação para trabalhar no Brasil (opcional)",
"Resumo profissional","Escreva de 2 a 4 frases: quem você é, quanto tempo de experiência tem e no que é bom.",
"Empresa","Cargo","Cidade e país","Início (mês/ano)","Fim (mês/ano)","Trabalho aqui atualmente","O que você fazia (uma tarefa por linha)","Adicionar outra experiência","Remover",
"Curso ou formação","Instituição","Adicionar outra formação",
"Idioma","Nível","Básico","Intermediário","Avançado","Fluente","Nativo","Adicionar idioma","Habilidades (separe por vírgula)",
"Próximo","Voltar","Baixar currículo em PDF","Idioma do currículo (PDF)","Empresas brasileiras costumam preferir currículo em português.","Apagar meus dados deste aparelho","Seus dados ficam só neste aparelho e não são enviados para nenhum servidor.","Escreva pelo menos o seu nome.","Passo {n} de {m}",
"Comece pela experiência mais recente. Se você nunca trabalhou, pode pular este passo.","Escola, cursos e certificados. Você pode pular se preferir.","Estas informações aparecem no topo do currículo.",
"O PDF aceita letras latinas (A–Z com acentos). Outros alfabetos não aparecem no arquivo.","Não foi possível criar o PDF. Verifique sua internet e tente de novo.",
"Tudo pronto!","Confira as informações e baixe o seu currículo.",
"Procurando trabalho?","Monte seu currículo em PDF e veja onde procurar vagas seguras.","Montar currículo","Ver vagas e dicas","Dados apagados."],
es:["Crea tu currículum","Responde paso a paso y descarga un currículum en PDF, listo para enviar. Tus datos se quedan solo en tu dispositivo.",
"Contacto","Resumen","Experiencia","Formación","Idiomas y habilidades","Descargar PDF",
"Nombre completo","Cargo o área que buscas","Ciudad y estado donde vives","Teléfono (con WhatsApp, si tienes)","Correo electrónico","Nacionalidad","LinkedIn o sitio web (opcional)","Situación para trabajar en Brasil (opcional)",
"Resumen profesional","Escribe de 2 a 4 frases: quién eres, cuánta experiencia tienes y en qué eres bueno.",
"Empresa","Cargo","Ciudad y país","Inicio (mes/año)","Fin (mes/año)","Trabajo aquí actualmente","Qué hacías (una tarea por línea)","Agregar otra experiencia","Quitar",
"Curso o formación","Institución","Agregar otra formación",
"Idioma","Nivel","Básico","Intermedio","Avanzado","Fluido","Nativo","Agregar idioma","Habilidades (sepáralas con coma)",
"Siguiente","Atrás","Descargar currículum en PDF","Idioma del currículum (PDF)","Las empresas brasileñas suelen preferir el currículum en portugués.","Borrar mis datos de este dispositivo","Tus datos se quedan solo en este dispositivo y no se envían a ningún servidor.","Escribe al menos tu nombre.","Paso {n} de {m}",
"Empieza por la experiencia más reciente. Si nunca has trabajado, puedes saltar este paso.","Escuela, cursos y certificados. Puedes saltar este paso si prefieres.","Esta información aparece en la parte superior del currículum.",
"El PDF acepta letras latinas (A–Z con acentos). Otros alfabetos no aparecen en el archivo.","No se pudo crear el PDF. Revisa tu internet e inténtalo de nuevo.",
"¡Todo listo!","Revisa la información y descarga tu currículum.",
"¿Buscas trabajo?","Crea tu currículum en PDF y mira dónde buscar empleos seguros.","Crear currículum","Ver empleos y consejos","Datos borrados."],
fr:["Créez votre CV","Répondez étape par étape et téléchargez un CV en PDF, prêt à envoyer. Vos données restent uniquement sur votre appareil.",
"Contact","Résumé","Expérience","Formation","Langues et compétences","Télécharger le PDF",
"Nom complet","Poste ou domaine recherché","Ville et État où vous habitez","Téléphone (avec WhatsApp, si possible)","E-mail","Nationalité","LinkedIn ou site web (facultatif)","Situation pour travailler au Brésil (facultatif)",
"Résumé professionnel","Écrivez 2 à 4 phrases : qui vous êtes, votre expérience et vos points forts.",
"Entreprise","Poste","Ville et pays","Début (mois/année)","Fin (mois/année)","Je travaille ici actuellement","Ce que vous faisiez (une tâche par ligne)","Ajouter une autre expérience","Supprimer",
"Diplôme ou formation","Établissement","Ajouter une autre formation",
"Langue","Niveau","Notions","Intermédiaire","Avancé","Courant","Langue maternelle","Ajouter une langue","Compétences (séparées par des virgules)",
"Suivant","Retour","Télécharger le CV en PDF","Langue du CV (PDF)","Les entreprises brésiliennes préfèrent souvent un CV en portugais.","Effacer mes données de cet appareil","Vos données restent uniquement sur cet appareil et ne sont envoyées à aucun serveur.","Écrivez au moins votre nom.","Étape {n} sur {m}",
"Commencez par l’expérience la plus récente. Si vous n’avez jamais travaillé, vous pouvez passer cette étape.","École, cours et certificats. Vous pouvez passer cette étape si vous préférez.","Ces informations apparaissent en haut du CV.",
"Le PDF accepte les lettres latines (A–Z avec accents). Les autres alphabets n’apparaissent pas dans le fichier.","Impossible de créer le PDF. Vérifiez votre connexion et réessayez.",
"Tout est prêt !","Vérifiez les informations et téléchargez votre CV.",
"Vous cherchez du travail ?","Créez votre CV en PDF et voyez où chercher des offres sûres.","Créer mon CV","Voir les offres et conseils","Données effacées."],
en:["Build your résumé","Answer step by step and download a PDF résumé, ready to send. Your data stays only on your device.",
"Contact","Summary","Experience","Education","Languages and skills","Download PDF",
"Full name","Job title or field you’re looking for","City and state where you live","Phone (with WhatsApp, if you have it)","Email","Nationality","LinkedIn or website (optional)","Status to work in Brazil (optional)",
"Professional summary","Write 2 to 4 sentences: who you are, how much experience you have and what you’re good at.",
"Company","Job title","City and country","Start (month/year)","End (month/year)","I currently work here","What you did (one task per line)","Add another job","Remove",
"Course or degree","Institution","Add another entry",
"Language","Level","Basic","Intermediate","Advanced","Fluent","Native","Add language","Skills (separate with commas)",
"Next","Back","Download résumé as PDF","Résumé language (PDF)","Brazilian employers usually prefer résumés in Portuguese.","Delete my data from this device","Your data stays only on this device and is not sent to any server.","Please enter at least your name.","Step {n} of {m}",
"Start with your most recent job. If you have never worked, you can skip this step.","School, courses and certificates. You can skip this step if you prefer.","This information appears at the top of the résumé.",
"The PDF supports Latin letters (A–Z with accents). Other alphabets will not appear in the file.","Couldn’t create the PDF. Check your internet and try again.",
"All set!","Check the information and download your résumé.",
"Looking for work?","Build your PDF résumé and see where to find safe job listings.","Build résumé","See jobs and tips","Data deleted."]
};

/* Títulos do PDF, por idioma: resumo, experiência, formação, idiomas, habilidades, atual, nacionalidade, situação */
var PDFH={
pt:["Resumo profissional","Experiência profissional","Formação","Idiomas","Habilidades","Atual","Nacionalidade","Situação de trabalho"],
es:["Resumen profesional","Experiencia profesional","Formación","Idiomas","Habilidades","Actual","Nacionalidad","Situación laboral"],
fr:["Résumé professionnel","Expérience professionnelle","Formation","Langues","Compétences","Actuel","Nationalité","Situation de travail"],
en:["Professional summary","Work experience","Education","Languages","Skills","Present","Nationality","Work status"]
};

/* Sites e serviços (grupo, nome, endereço). Sem endereço = só orientação. */
var EMP=[
["of","Agência do Trabalhador do Paraná","https://www.trabalho.pr.gov.br/Trabalho"],
["mig","ACNUR Brasil: meios de vida","https://www.acnur.org/br/meios-de-vida-e-inclusao-economica"],
["mig","Agência do Migrante (Paraná)",""],
["mig","Cáritas de Curitiba",""],
["vag","Vagas.com","https://www.vagas.com.br/"],
["vag","LinkedIn Vagas","https://www.linkedin.com/jobs/"],
["vag","Indeed Brasil","https://br.indeed.com/"],
["rh","RH Nossa","https://www.rhnossa.com.br/"],
["rh","A Priori RH","https://apriorirh.com.br/"],
["rh","Ewave do Brasil","https://ewave.com.br/"],
["rh","Foursales","https://www.foursales.com.br/"],
["rh","Manu Mourão","https://manumourao.com.br/"],
["rh","Michael Page","https://www.michaelpage.com.br/"],
["rh","Proposito","https://proposito.com.br/"],
["rh","Kienbaum Brasil","https://kienbaum.com.br/"]
];
var EMPD={
pt:["Vagas com carteira assinada no Paraná, atendimento gratuito. A unidade central de Curitiba fica na Rua Pedro Ivo, 503. Confirme o endereço e os horários antes de ir.","Guias para refugiados e migrantes, com dicas de currículo, entrevista e projetos de emprego.","Balcão único do Governo do Paraná para migrantes, refugiados e apátridas, com ações de emprego. Procure o endereço no site do Governo do Paraná.","Organiza feiras de emprego para migrantes e refugiados com empresas parceiras. Pergunte as próximas datas.","Site de vagas com opção de se identificar como refugiado, usada por empresas que querem contratar refugiados.","Rede profissional. Boa para vagas que pedem mais qualificação e para falar com empresas.","Reúne anúncios de várias fontes. Pesquise pela sua cidade e área."],
es:["Empleos con contrato formal en Paraná, atención gratuita. La unidad central de Curitiba está en Rua Pedro Ivo, 503. Confirma la dirección y el horario antes de ir.","Guías para refugiados y migrantes, con consejos de currículum, entrevista y proyectos de empleo.","Ventanilla única del Gobierno de Paraná para migrantes, refugiados y apátridas, con acciones de empleo. Busca la dirección en el sitio del Gobierno de Paraná.","Organiza ferias de empleo para migrantes y refugiados con empresas aliadas. Pregunta por las próximas fechas.","Sitio de empleos con opción de identificarse como refugiado, usada por empresas que quieren contratar refugiados.","Red profesional. Buena para empleos que piden más calificación y para hablar con empresas.","Reúne anuncios de varias fuentes. Busca por tu ciudad y área."],
fr:["Offres avec contrat déclaré dans le Paraná, service gratuit. L’unité centrale de Curitiba est au 503, Rua Pedro Ivo. Vérifiez l’adresse et les horaires avant d’y aller.","Guides pour réfugiés et migrants : conseils pour le CV, l’entretien et projets d’emploi.","Guichet unique du gouvernement du Paraná pour migrants, réfugiés et apatrides, avec des actions pour l’emploi. Cherchez l’adresse sur le site du gouvernement du Paraná.","Organise des salons de l’emploi pour migrants et réfugiés avec des entreprises partenaires. Renseignez-vous sur les prochaines dates.","Site d’offres avec option pour se déclarer réfugié, utilisée par des entreprises qui veulent recruter des réfugiés.","Réseau professionnel. Utile pour les postes plus qualifiés et pour contacter des entreprises.","Regroupe des annonces de plusieurs sources. Cherchez par ville et domaine."],
en:["Jobs with a formal contract in Paraná, free service. The central Curitiba unit is at Rua Pedro Ivo, 503. Check the address and hours before going.","Guides for refugees and migrants, with résumé and interview tips and job projects.","One-stop desk of the Paraná government for migrants, refugees and stateless people, with job events. Look up the address on the Paraná government website.","Organizes job fairs for migrants and refugees with partner companies. Ask about upcoming dates.","Job site with an option to identify as a refugee, used by companies that want to hire refugees.","Professional network. Good for jobs that need more qualifications and for contacting companies.","Gathers listings from many sources. Search by your city and field."]
};

/* ===== Descrições das consultorias de RH (mesma ordem dos itens "rh" em EMP, depois dos 8 primeiros) ===== */
var EMPD_RH={
pt:["Gestão de pessoas, trabalho temporário e recrutamento. O site tem vagas presenciais em Curitiba e região, principalmente para indústria e áreas técnicas.","Consultoria de recrutamento de Curitiba, com foco em executivos e profissionais especializados. Permite cadastrar o currículo no portal de vagas.","Recrutamento e alocação de profissionais de tecnologia (TI). Tem página de carreiras para cadastrar o currículo.","Consultoria de recrutamento focada em vendas e marketing, com portal de candidatos e vagas da área comercial.","Consultoria de Curitiba em recrutamento e desenvolvimento de carreira. Tem uma página de oportunidades.","Recrutamento especializado para cargos técnicos e de gerência, com escritório em Curitiba. Permite buscar vagas e enviar o currículo.","Consultoria de Curitiba em busca de executivos e desenvolvimento de lideranças. Tem uma página de oportunidades.","Consultoria de liderança e recrutamento de executivos. Tem um portal para cadastrar seu perfil."],
es:["Gestión de personas, trabajo temporal y reclutamiento. El sitio tiene empleos presenciales en Curitiba y alrededores, sobre todo en industria y áreas técnicas.","Consultora de reclutamiento de Curitiba, enfocada en ejecutivos y profesionales especializados. Permite registrar el currículum en su portal de empleos.","Reclutamiento y asignación de profesionales de tecnología (TI). Tiene una página de carreras para registrar el currículum.","Consultora de reclutamiento enfocada en ventas y marketing, con portal de candidatos y empleos del área comercial.","Consultora de Curitiba en reclutamiento y desarrollo de carrera. Tiene una página de oportunidades.","Reclutamiento especializado para cargos técnicos y de gerencia, con oficina en Curitiba. Permite buscar empleos y enviar el currículum.","Consultora de Curitiba en búsqueda de ejecutivos y desarrollo de liderazgos. Tiene una página de oportunidades.","Consultora de liderazgo y reclutamiento de ejecutivos. Tiene un portal para registrar tu perfil."],
fr:["Gestion du personnel, travail temporaire et recrutement. Le site propose des postes sur place à Curitiba et dans la région, surtout dans l’industrie et les métiers techniques.","Cabinet de recrutement de Curitiba, centré sur les cadres et les profils spécialisés. Permet de déposer son CV sur son portail d’offres.","Recrutement et placement de professionnels de l’informatique (TI). Une page carrières permet de déposer son CV.","Cabinet de recrutement spécialisé en ventes et marketing, avec un portail candidats et des offres commerciales.","Cabinet de Curitiba en recrutement et développement de carrière. Une page présente les opportunités.","Recrutement spécialisé pour les postes techniques et de direction, avec un bureau à Curitiba. Permet de chercher des offres et d’envoyer son CV.","Cabinet de Curitiba en recherche de cadres dirigeants et développement du leadership. Une page présente les opportunités.","Cabinet de conseil en leadership et recrutement de cadres. Un portail permet de déposer son profil."],
en:["People management, temporary work and recruitment. The site lists on-site jobs in Curitiba and the region, mostly in industry and technical roles.","Curitiba recruitment firm focused on executives and specialized professionals. You can submit your résumé through its jobs portal.","Recruitment and placement of IT professionals. It has a careers page where you can submit your résumé.","Recruitment firm focused on sales and marketing, with a candidate portal and sales-related jobs.","Curitiba firm for recruitment and career development. It has an opportunities page.","Specialized recruitment for technical and management roles, with an office in Curitiba. You can search jobs and send your résumé.","Curitiba firm for executive search and leadership development. It has an opportunities page.","Leadership consulting and executive search firm. It has a portal where you can register your profile."]
};
/* junta as descrições novas às antigas (índice = posição em EMP) */
(function(){for(var l in EMPD_RH){EMPD[l]=EMPD[l].concat(EMPD_RH[l]);}})();
var EM={
pt:["Oportunidades de emprego","Sites e serviços confiáveis para procurar trabalho com segurança. Comece pelos canais oficiais e gratuitos.","Canais oficiais e gratuitos","Apoio para migrantes e refugiados","Sites de vagas","Abrir site","Você vai sair deste site. Confira sempre as informações antes de enviar seus documentos.","Antes de aceitar uma vaga",
"Pedem dinheiro para contratar você ou para “liberar” a vaga.","Prometem salário muito alto sem entrevista ou sem explicar o trabalho.","Não explicam o contrato. Prefira vagas com carteira assinada.","Querem ficar com seu passaporte ou documentos originais. Entregue apenas cópias.","Cobram dívidas de viagem, moradia ou alimentação que você não combinou.",
"Sofreu ou viu um abuso?","Reter seus documentos, não pagar o trabalho ou fazer ameaças são violações graves. Você pode denunciar de graça e de forma anônima.","Sistema Ipê: denúncia pela internet (também em espanhol, francês e inglês)","Disque 100: ligação gratuita, 24 horas por dia","Ainda não tem currículo? Monte o seu","Veja os documentos para trabalhar","Sem site direto. Procure pelo nome."],
es:["Oportunidades de empleo","Sitios y servicios confiables para buscar trabajo con seguridad. Empieza por los canales oficiales y gratuitos.","Canales oficiales y gratuitos","Apoyo para migrantes y refugiados","Sitios de empleo","Abrir sitio","Saldrás de este sitio. Revisa siempre la información antes de enviar tus documentos.","Antes de aceptar un empleo",
"Te piden dinero para contratarte o para “liberar” la vacante.","Prometen un salario muy alto sin entrevista ni explicar el trabajo.","No explican el contrato. Prefiere empleos con contrato formal (carteira assinada).","Quieren quedarse con tu pasaporte o documentos originales. Entrega solo copias.","Te cobran deudas de viaje, vivienda o comida que no acordaste.",
"¿Sufriste o viste un abuso?","Retener tus documentos, no pagar el trabajo o hacer amenazas son violaciones graves. Puedes denunciar gratis y de forma anónima.","Sistema Ipê: denuncia por internet (también en español, francés e inglés)","Disque 100: llamada gratuita, 24 horas","¿Aún no tienes currículum? Crea el tuyo","Mira los documentos para trabajar","Sin sitio directo. Búscalo por su nombre."],
fr:["Offres d’emploi","Des sites et services fiables pour chercher du travail en sécurité. Commencez par les canaux officiels et gratuits.","Canaux officiels et gratuits","Aide pour migrants et réfugiés","Sites d’offres d’emploi","Ouvrir le site","Vous allez quitter ce site. Vérifiez toujours les informations avant d’envoyer vos documents.","Avant d’accepter un poste",
"On vous demande de l’argent pour vous embaucher ou « libérer » le poste.","On vous promet un très gros salaire sans entretien ni explication du travail.","Le contrat n’est pas expliqué. Préférez les postes avec contrat déclaré (carteira assinada).","On veut garder votre passeport ou vos originaux. Ne remettez que des copies.","On vous réclame des dettes de voyage, de logement ou de nourriture dont vous n’avez pas convenu.",
"Victime ou témoin d’un abus ?","Retenir vos documents, ne pas payer le travail ou menacer sont des violations graves. Vous pouvez dénoncer gratuitement et anonymement.","Système Ipê : signalement en ligne (aussi en espagnol, français et anglais)","Disque 100 : appel gratuit, 24 h sur 24","Pas encore de CV ? Créez le vôtre","Voir les documents pour travailler","Pas de site direct. Cherchez par le nom."],
en:["Job opportunities","Trusted sites and services to look for work safely. Start with the official, free channels.","Official, free channels","Support for migrants and refugees","Job boards","Open site","You will leave this site. Always check the information before sending your documents.","Before accepting a job",
"They ask for money to hire you or to “release” the position.","They promise a very high salary with no interview or explanation of the work.","They don’t explain the contract. Prefer jobs with a formal contract (carteira assinada).","They want to keep your passport or original documents. Hand over copies only.","They charge travel, housing or food debts you did not agree to.",
"Have you suffered or seen abuse?","Holding your documents, not paying for your work or making threats are serious violations. You can report for free and anonymously.","Ipê System: online report (also in Spanish, French and English)","Disque 100: free call, 24 hours","Don’t have a résumé yet? Build yours","See the documents you need to work","No direct site. Search by name."]
};


/* Textos novos da aba Empregos */
var XEM={
pt:{em_gRh:"Consultorias de RH e recrutamento",em_rhN:"Estas empresas são pagas pelas empresas que contratam, não por você. Desconfie de qualquer uma que peça dinheiro ao candidato. Muitas procuram perfis com experiência ou nível superior, mas vale enviar o currículo."},
es:{em_gRh:"Consultoras de RR. HH. y reclutamiento",em_rhN:"Estas empresas cobran a las empresas que contratan, no a ti. Desconfía de cualquiera que te pida dinero. Muchas buscan perfiles con experiencia o estudios superiores, pero vale la pena enviar el currículum."},
fr:{em_gRh:"Cabinets RH et de recrutement",em_rhN:"Ces cabinets sont payés par les entreprises qui recrutent, pas par vous. Méfiez-vous de tout cabinet qui vous demande de l’argent. Beaucoup cherchent des profils expérimentés ou diplômés du supérieur, mais envoyez quand même votre CV."},
en:{em_gRh:"HR and recruitment firms",em_rhN:"These firms are paid by the companies that hire, not by you. Be wary of any that ask candidates for money. Many look for experienced or university-level profiles, but it is still worth sending your résumé."}
};

/* ===== Currículo completo: textos extras nos 4 idiomas ===== */
var XCV={
pt:{cv_s7:"Cursos",cv_s8:"Extras",
cv_end:"Endereço ou bairro (opcional)",cv_nasc:"Data de nascimento (opcional)",cv_cnh:"CNH (carteira de motorista)",cv_cnh0:"Não tenho",
cv_foto:"Foto (opcional)",cv_fotoD:"No Brasil muitos currículos têm foto, mas não é obrigatório. Se usar, escolha uma foto de rosto, simples e com fundo claro.",cv_fotoAdd:"Escolher foto",cv_fotoRem:"Remover foto",cv_fotoErr:"Não foi possível usar esta imagem. Tente outra foto (JPG ou PNG).",
cv_nivelF:"Nível de ensino",cv_nivelSel:"Escolha",cv_andam:"Ainda estou estudando",cv_detF:"Detalhes (opcional)",
cv_certD:"Cursos livres, treinamentos e certificados (idiomas, informática, segurança do trabalho, manipulação de alimentos...). Pode pular se preferir.",cv_certN:"Nome do curso ou certificado",cv_certI:"Instituição ou plataforma",cv_certA:"Ano",cv_certC:"Carga horária (horas)",cv_addCert:"Adicionar outro curso",
cv_habD:"Misture habilidades técnicas (programas, máquinas, ferramentas) e pessoais (comunicação, organização).",cv_sug:"Toque para adicionar:",
cv_sugs:["Trabalho em equipe","Atendimento ao cliente","Pontualidade","Organização","Comunicação","Pacote Office","Resolução de problemas","Aprendizado rápido"],
cv_extD:"Estas informações ajudam a empresa a decidir mais rápido. Tudo aqui é opcional.",cv_disp:"Disponibilidade",cv_mud:"Posso mudar de cidade",cv_viaj:"Posso viajar a trabalho",
cv_extra:"Informações adicionais",cv_refT:"Referências profissionais",cv_refD:"Pessoas que podem falar do seu trabalho. Peça autorização antes de colocar o contato.",cv_refN:"Nome",cv_refC:"Cargo e empresa",cv_refK:"Telefone ou e-mail",cv_addRef:"Adicionar outra referência",
cv_comp:"O que já está no seu currículo",cv_prontoD:"Confira o resumo abaixo e baixe o seu currículo. Você pode voltar a qualquer passo para completar."},
es:{cv_s7:"Cursos",cv_s8:"Extras",
cv_end:"Dirección o barrio (opcional)",cv_nasc:"Fecha de nacimiento (opcional)",cv_cnh:"Licencia de conducir (CNH)",cv_cnh0:"No tengo",
cv_foto:"Foto (opcional)",cv_fotoD:"En Brasil muchos currículums llevan foto, pero no es obligatorio. Si la usas, elige una foto de rostro, sencilla y con fondo claro.",cv_fotoAdd:"Elegir foto",cv_fotoRem:"Quitar foto",cv_fotoErr:"No se pudo usar esta imagen. Prueba con otra foto (JPG o PNG).",
cv_nivelF:"Nivel de estudios",cv_nivelSel:"Elige",cv_andam:"Todavía estoy estudiando",cv_detF:"Detalles (opcional)",
cv_certD:"Cursos libres, capacitaciones y certificados (idiomas, informática, seguridad laboral, manipulación de alimentos...). Puedes saltar este paso.",cv_certN:"Nombre del curso o certificado",cv_certI:"Institución o plataforma",cv_certA:"Año",cv_certC:"Carga horaria (horas)",cv_addCert:"Agregar otro curso",
cv_habD:"Mezcla habilidades técnicas (programas, máquinas, herramientas) y personales (comunicación, organización).",cv_sug:"Toca para agregar:",
cv_sugs:["Trabajo en equipo","Atención al cliente","Puntualidad","Organización","Comunicación","Paquete Office","Resolución de problemas","Aprendizaje rápido"],
cv_extD:"Esta información ayuda a la empresa a decidir más rápido. Todo es opcional.",cv_disp:"Disponibilidad",cv_mud:"Puedo cambiar de ciudad",cv_viaj:"Puedo viajar por trabajo",
cv_extra:"Información adicional",cv_refT:"Referencias profesionales",cv_refD:"Personas que puedan hablar de tu trabajo. Pide autorización antes de poner su contacto.",cv_refN:"Nombre",cv_refC:"Cargo y empresa",cv_refK:"Teléfono o correo",cv_addRef:"Agregar otra referencia",
cv_comp:"Lo que ya está en tu currículum",cv_prontoD:"Revisa el resumen y descarga tu currículum. Puedes volver a cualquier paso para completarlo."},
fr:{cv_s7:"Formations",cv_s8:"Extras",
cv_end:"Adresse ou quartier (facultatif)",cv_nasc:"Date de naissance (facultatif)",cv_cnh:"Permis de conduire (CNH)",cv_cnh0:"Je n’en ai pas",
cv_foto:"Photo (facultatif)",cv_fotoD:"Au Brésil, beaucoup de CV ont une photo, mais ce n’est pas obligatoire. Si vous en mettez une, choisissez un portrait simple sur fond clair.",cv_fotoAdd:"Choisir une photo",cv_fotoRem:"Retirer la photo",cv_fotoErr:"Impossible d’utiliser cette image. Essayez une autre photo (JPG ou PNG).",
cv_nivelF:"Niveau d’études",cv_nivelSel:"Choisir",cv_andam:"Je suis encore en cours d’études",cv_detF:"Détails (facultatif)",
cv_certD:"Formations courtes, stages et certificats (langues, informatique, sécurité au travail, hygiène alimentaire...). Vous pouvez passer cette étape.",cv_certN:"Nom de la formation ou du certificat",cv_certI:"Établissement ou plateforme",cv_certA:"Année",cv_certC:"Durée (heures)",cv_addCert:"Ajouter une autre formation",
cv_habD:"Mélangez compétences techniques (logiciels, machines, outils) et personnelles (communication, organisation).",cv_sug:"Touchez pour ajouter :",
cv_sugs:["Travail en équipe","Service client","Ponctualité","Organisation","Communication","Pack Office","Résolution de problèmes","Apprentissage rapide"],
cv_extD:"Ces informations aident l’entreprise à décider plus vite. Tout est facultatif.",cv_disp:"Disponibilité",cv_mud:"Je peux déménager",cv_viaj:"Je peux voyager pour le travail",
cv_extra:"Informations complémentaires",cv_refT:"Références professionnelles",cv_refD:"Personnes qui peuvent parler de votre travail. Demandez leur accord avant d’indiquer leurs coordonnées.",cv_refN:"Nom",cv_refC:"Poste et entreprise",cv_refK:"Téléphone ou e-mail",cv_addRef:"Ajouter une autre référence",
cv_comp:"Ce que contient déjà votre CV",cv_prontoD:"Vérifiez le résumé et téléchargez votre CV. Vous pouvez revenir à n’importe quelle étape pour le compléter."},
en:{cv_s7:"Courses",cv_s8:"Extras",
cv_end:"Address or neighborhood (optional)",cv_nasc:"Date of birth (optional)",cv_cnh:"Driver’s license (CNH)",cv_cnh0:"I don’t have one",
cv_foto:"Photo (optional)",cv_fotoD:"In Brazil many résumés include a photo, but it is not required. If you add one, choose a simple head-and-shoulders photo with a light background.",cv_fotoAdd:"Choose photo",cv_fotoRem:"Remove photo",cv_fotoErr:"This image could not be used. Try another photo (JPG or PNG).",
cv_nivelF:"Level of education",cv_nivelSel:"Choose",cv_andam:"I’m still studying",cv_detF:"Details (optional)",
cv_certD:"Short courses, training and certificates (languages, computers, workplace safety, food handling...). You can skip this step.",cv_certN:"Course or certificate name",cv_certI:"Institution or platform",cv_certA:"Year",cv_certC:"Hours",cv_addCert:"Add another course",
cv_habD:"Mix technical skills (software, machines, tools) with personal ones (communication, organization).",cv_sug:"Tap to add:",
cv_sugs:["Teamwork","Customer service","Punctuality","Organization","Communication","Microsoft Office","Problem solving","Quick learner"],
cv_extD:"This information helps employers decide faster. Everything here is optional.",cv_disp:"Availability",cv_mud:"I can relocate",cv_viaj:"I can travel for work",
cv_extra:"Additional information",cv_refT:"Professional references",cv_refD:"People who can speak about your work. Ask permission before adding their contact.",cv_refN:"Name",cv_refC:"Job title and company",cv_refK:"Phone or email",cv_addRef:"Add another reference",
cv_comp:"What your résumé already has",cv_prontoD:"Check the summary and download your résumé. You can go back to any step to complete it."}
};
/* níveis de ensino: o primeiro item (vazio) é "não informado" */
var XNIV={
pt:["","Ensino fundamental","Ensino médio","Curso técnico","Graduação","Pós-graduação / MBA","Mestrado","Doutorado","Outro"],
es:["","Educación primaria","Educación secundaria","Curso técnico","Grado universitario","Posgrado / MBA","Maestría","Doctorado","Otro"],
fr:["","Enseignement primaire","Enseignement secondaire","Formation technique","Licence / diplôme universitaire","Troisième cycle / MBA","Master","Doctorat","Autre"],
en:["","Primary education","High school","Technical course","University degree","Postgraduate / MBA","Master’s","Doctorate","Other"]
};
/* Rótulos que aparecem dentro do PDF, por idioma */
var PDFX={
pt:{nasc:"Nascimento",cnh:"CNH",cursos:"Cursos e certificados",horas:"h",disp:"Disponibilidade",mud:"Posso mudar de cidade",viaj:"Posso viajar a trabalho",ref:"Referências",extra:"Informações adicionais",andam:"Em andamento"},
es:{nasc:"Nacimiento",cnh:"Licencia de conducir",cursos:"Cursos y certificados",horas:"h",disp:"Disponibilidad",mud:"Puedo cambiar de ciudad",viaj:"Puedo viajar por trabajo",ref:"Referencias",extra:"Información adicional",andam:"En curso"},
fr:{nasc:"Naissance",cnh:"Permis de conduire",cursos:"Formations et certificats",horas:"h",disp:"Disponibilité",mud:"Je peux déménager",viaj:"Je peux voyager pour le travail",ref:"Références",extra:"Informations complémentaires",andam:"En cours"},
en:{nasc:"Born",cnh:"Driver’s license",cursos:"Courses and certificates",horas:"h",disp:"Availability",mud:"Willing to relocate",viaj:"Willing to travel for work",ref:"References",extra:"Additional information",andam:"In progress"}
};
