const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");
const jimp = require("jimp");
const moment = require("moment");
require("moment-duration-format");
var translate = require('google-translate-api');

const bot = new Discord.Client({disableEveryone: false});

    //-----------------------------------------RPG SERVER H0MART--------------------------------------------------------------------------------

    bot.on('raw', async dados => {
      if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
      if(dados.d.message_id != "567512574963351573") return
  
      let servidor = bot.guilds.get("566666258976735232")
      let membro = servidor.members.get(dados.d.user_id)
  
      let cargo1 = servidor.roles.get('567065277397860391'),
          cargo2 = servidor.roles.get('567491407950905344')
  
      if(dados.t === "MESSAGE_REACTION_ADD"){
          if(dados.d.emoji.name === "⚔"){
              if(membro.roles.has(cargo1)) return
              membro.addRole(cargo1)
          }else if(dados.d.emoji.name === "🤖"){
              if(membro.roles.has(cargo2)) return
              membro.addRole(cargo2)
          }
      }
      if(dados.t === "MESSAGE_REACTION_REMOVE"){
          if(dados.d.emoji.name === "⚔"){
              if(membro.roles.has(cargo1)) return
              membro.removeRole(cargo1)
            }else if(dados.d.emoji.name === "🤖"){
              if(membro.roles.has(cargo2)) return
              membro.removeRole(cargo2)
          }
      }
  
  })

    //-------------------------------------------------------------------------------------------------------------------------

bot.on('guildMemberAdd', member => {
  let embed = new Discord.RichEmbed()
  .setTitle(":rocket: | Bem-vindo!")
  .setDescription(`Bem-vindo ao ${member.guild.name}, ${member}`)
  .setThumbnail(member.user.avatarURL)
  .setColor("RANDOM")
  .addField("O servidor tem agora:", `${member.guild.memberCount} membros`)
  .setFooter(member.guild.name)
  .setTimestamp();
    
    let canalEntrada = bot.channels.get("553746015505874974")
      .send(embed);
  
  });

  bot.on('guildMemberRemove', member => {
    let embed = new Discord.RichEmbed()
    .setTitle(":wave: | Adeus :/")
    .setDescription(`O usuário ${member} saiu do servidor.`)
    .setThumbnail(member.user.avatarURL)
    .setColor("RANDOM")
    .addField("O servidor tem agora:", `${member.guild.memberCount} membros`)
    .setFooter(member.guild.name)
    .setTimestamp();
      
      let canalEntrada = bot.channels.get("553746050767257602")
        .send(embed); 
    
    });

    //----------------------------Server do H0mart---------------------------------------------------------------------------------------------

    bot.on('guildMemberAdd', member => {
      let embed = new Discord.RichEmbed()
      .setTitle(":rocket: | Bem-vindo!")
      .setDescription(`Bem-vindo ao ${member.guild.name}, ${member}`)
      .setThumbnail(member.user.avatarURL)
      .setColor("RANDOM")
      .addField("O servidor tem agora:", `${member.guild.memberCount} membros`)
      .setFooter(member.guild.name)
      .setTimestamp();
        
        let canalentradaa = bot.channels.get("566666554918567937")
          .send(embed);
      
      });
    
      bot.on('guildMemberRemove', member => {
        let embed = new Discord.RichEmbed()
        .setTitle(":wave: | Adeus :/")
        .setDescription(`O usuário ${member} saiu do servidor.`)
        .setThumbnail(member.user.avatarURL)
        .setColor("RANDOM")
        .addField("O servidor tem agora:", `${member.guild.memberCount} membros`)
        .setFooter(member.guild.name)
        .setTimestamp();
          
          let canalsaida = bot.channels.get("566666554918567937")
            .send(embed); 
        
        });

    //-------------------------------------------------------------------------------------------------------------------------




    //-------------------------------------------------------------------------------------------------------------------------

bot.on("ready", async() => {
    console.log(`O Senhor Lorde Picão ${bot.user.username} está online para o mundo! 
   Ele está em ${bot.guilds.size} servidores,
     Com ${bot.users.size} usuários, 
         Em ${bot.channels.size} canais.`);

         //bot.user.setActivity("🌌 Está querendo ajuda? Use +info", {type: "WATCHING"});
         //bot.user.setPresence({ game: { name: 'Sendo Desenvolvido', type: (1),  url: 'https://www.twitch.tv/darrowz'}});
    
    //bot.user.setActivity("Prefix: !  |  !help", {type: "PLAYING"});
    
    //bot.user.set("Alguma merda ae");

    let tt = [
      //status
  //PLAYING = Jogando, STREAMING = Transmitindo, LISTENING = Ouvindo e WATCHING = Assistindo
      { name: `Felicidade para ${bot.users.size} pessoas!`, type: 'STREAMING', url: 'https://www.twitch.tv/darrowz'},
      { name: `💀 Meu prefixo é: !`, type: 'PLAYING'},
      { name: '🔧 Eu fui criado pelo Darrow#9826', type: 'PLAYING'},
      { name: `📺 ${bot.guilds.size} servidores!`, type: 'WATCHING'},
      { name: '🌌 Precisa de ajuda? Use !help para receber a lista dos meus comandos.', type: 'PLAYING'},
      { name: 'He-Man e os Defensores do Universo', type: 'WATCHING'},
      { name: '☄️ Use !suporte para entrar no meu servidor de suporte.', type: 'LISTENING'}
// no último do status, sempre tire a vírgula do final ;)
  // E AÍ A LISTA VAI....

  ];
  function st() {
      let rs = tt[Math.floor(Math.random() * tt.length)];
      bot.user.setPresence({ game: rs });
  }
  st();
  setInterval(() => st(), 6700); //Se quiser trocar o tempo da troca do status, no lugar de "9700", use a lista ao lado: 1000 = 1 seg, 10000 =
});

  let y = process.openStdin()
  y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    //
    //bot.channels.get("559499034365132815").send(x.join(" "));
    bot.channels.get("566666259718995978").send(x.join(" "));
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}kick`){

        //!kick @daeshan askin for it
    
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send("Este não é um usuário válido.");
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não tem permissão para isso!");
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Este usuário não pode ser kickado!");
    
        let kickEmbed = new Discord.RichEmbed()
        .setColor("#d17a0f")
        .addField(":bust_in_silhouette: | Usuário Kickado:", `${kUser}`)
        .addField(":spy: | Kickado por:", `<@${message.author.id}>`)
        .addField(":speech_balloon: | Kickado no canal:", message.channel)
        .addField(":label: | Motivo:", kReason)
        .addField(":calendar: | Data:", message.createdAt)
    
        let kickChannel = message.guild.channels.find(`name`, "punições", "┃punições");
        if(!kickChannel) return message.channel.send("Não achei o canal intitulado punições.");
    
        message.guild.member(kUser).kick(kReason);
        kickChannel.send(kickEmbed);
    
        return;
      }
    
      if(cmd === `${prefix}ban`){
    
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send("Este não é um usuário válido.");
        let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Este usuário não pode ser banido!");
    
        let banEmbed = new Discord.RichEmbed()
        .setDescription("~Ban~")
        .setColor("#d11010")
        .addField(":bust_in_silhouette: | Usuário Banido:", `${bUser} with ID ${bUser.id}`)
        .addField(":spy: | Banido por:", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField(":speech_balloon: | Banido no canal:", message.channel)
        .addField(":label: | Motivo:", bReason)
        .addField(":calendar: | Data:", message.createdAt)

    
        let incidentchannel = message.guild.channels.find(`name`, "punições");
        if(!incidentchannel) return message.channel.send("Não achei o canal intitulado punições.");
    
        message.guild.member(bUser).ban(bReason);
        incidentchannel.send(banEmbed);
    
    
        return;
      }



    if(cmd === `${prefix}report`){


        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Não foi possível encontrar o usuário.");
        let rreason = args.join(" ").slice(22);
    
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("")
        .setColor("RANDOM")
        .addField(":bust_in_silhouette: | Usuário Reportado:", `${rUser}`)
        .addField(":spy: | Reportado por:", `${message.author}`)
        .addField(":speech_balloon: | Canal reportado:", message.channel)
        .addField(":calendar: | Data:", message.createdAt)
        .addField(":label: | Motivo:", rreason)
        .addField(":frame_photo: | Prova:", "Código de prints em manutenção.");
    
				let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("Para que você possa fazer um report, é necessário que o servidor tenha um canal chamado reports");
    
    
        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);
    
        return;
    }

	if (cmd === `${prefix}anuncio`) {
		message.delete()
                const embed = new Discord.RichEmbed()
        .setColor("#0061ff")
        .setTitle("<a:sino:554132888057151520>  Anúncio:")
        .setDescription(args.join(" "))
        .setFooter(`Anúncio realizado por: ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp();

    message.channel.send("@everyone ")
		message.channel.send({embed})
    }

    if(cmd === `${prefix}botinfo`){

        let bicon = bot.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setTitle("Caveirão Bot Info:")
        .setDescription("Olá humano, eu sou o Caveirão, um simples Bot para o Discord de Moderação, Diversão e Economia.")
        .setColor("#0dede1")
        .setThumbnail(bicon)
        .addField("Meu nome:", bot.user.username)
        .addField("Criador:", "Darrow#9826")
        .addField("Servidores:", `${bot.guilds.size} servidores`)
        
        return message.channel.send(botembed);
    }

    if (cmd == `${prefix}help` || cmd == `${prefix}ajuda`) {
		const embed = new Discord.RichEmbed()
		.setColor("#0eed42")
		.setTitle(":clipboard: | Lista de Comandos:")
		.addField("!cat", "Comando que envia uma imagem aleatória de um gato.")
		.addField("!ban [@user] [motivo]", "Comando que faz banir um usuário permanentemente do servidor.")
		.addField("!kick [@user] [motivo]", "Comando que faz kickar um usuário do servidor.")
		.addField("!report [@user] [motivo]", "Comando que envia um report no canal #reports.")
		.addField("!say [texto]", "Comando que faz o Bot enviar uma mensagem.")
		.addField("!sayembed [texto]", "Comando que faz o Bot enviar uma mensagem em embed.")
		.addField("!anuncio [texto]", "Comando que envia um anúncio e marca todo mundo.")
		.addField("!ping", "Comando que mostra a Latência do Bot e da API.")
		.addField("!apagar [2 até 100]", "Comando que deleta as mensagens do chat de 2 à 100.")
		.addField("!serverinfo", "Comando que mostra as informações sobre o Servidor.")
		.addField("!botinfo", "Comando que mostra as informações sobre o Bot.")
    .addField("!help", "Comando que mostra os comandos do Bot.");
        message.channel.send({embed})

  }

	if (cmd === `${prefix}sayembed`) {
		message.delete()
    const embed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setDescription(args.join(" "));
		message.channel.send({embed})
	}

	if(cmd === `${prefix}say`) { 
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});  
		message.channel.send(sayMessage);
	}

	if (cmd === `${prefix}cat`) {
    let msg = await message.channel.send("Só um momento...")
		const { body } = await superagent
		.get('aws.random.cat/meow');
		const embed = new Discord.RichEmbed()
		.setColor("#c4730b")
		.setTitle("Miau  :cat:")
		.setImage(body.file)
    message.channel.send({embed})
    
    msg.delete();
  }
  
  if(cmd === `${prefix}dog`) {
    let msg = await message.channel.send("Só um momento...")
    
    let {body} = await superagent
    .get(`https://dog.ceo/api/breeds/image/random`)
    
    if(!{body}) return message.channel.send("Ih, deu errado! Tente novamente.")
    
    let dEmbed = new Discord.RichEmbed()
    .setColor("#a07e3b")
    .setTitle("Au Au  :dog:")
    .setImage(body.message)
    
    message.channel.send({embed: dEmbed})
    
    msg.delete();
  }

	if(cmd === `${prefix}apagar`) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para usar este comando!");
    let mensagemDeletar = args.slice(0).join(" ")
    if(mensagemDeletar < 2 || mensagemDeletar > 100) return message.reply("Eu só posso apagar de 2 à 100 mensagens.");
    if(args.length === 0) return message.reply("Utilize !apagar <2 até 100>");
    if(isNaN(args[0])) return message.reply("Você precisa colocar um número para que eu possa apagar as mensagens.");
    try {
      message.channel.bulkDelete(mensagemDeletar);

      const apagarembed = new Discord.RichEmbed()
      .setDescription(`:white_small_square:  O chat foi limpo por ${message.author}.
Foram limpas **${mensagemDeletar}** mensagens.`)
      .setColor("RED")
      message.channel.send(apagarembed);
    } catch(e){
      console.log(e);
    }
  }

  if(cmd === `${prefix}invite`) {
    const embed = new Discord.RichEmbed()
    .setDescription(`
Quer me adicionar em outros servidores do Discord? 
Pois então, clique [aqui](http://discordapp.com/oauth2/authorize?=&client_id=542114953474342942&scope=bot&permissions=2146958847) para me adicionar em outros servidores.
    
E claro, entre no meu servidor de suporte para conversar, dar sugestões, reportar bugs e muito mais!
Invite: https://discord.gg/pGjVC9j
    `)
    .setColor("#3f4697")
    .setThumbnail("https://cdn.discordapp.com/attachments/551494855944044599/553242795729616898/0008867097_20.jpg")
		message.channel.send({embed})
  }

  if(cmd === `${prefix}suporte`) {
    const embed = new Discord.RichEmbed()
    .setDescription(`
Opa! Procurando por suporte? :wrench: 
Pois então, entre no meu Servidor de Suporte! 

Lá você pode reportar bugs, dar sugestões, tirar suas dúvidas sobre mim e muito mais <:taligado:553748557287391242>
    **https://discord.gg/pGjVC9j**
    `)
    .setColor("#42c8f4")
    .setThumbnail("https://cdn.discordapp.com/attachments/551494855944044599/553242795729616898/0008867097_20.jpg")
		message.channel.send({embed})
  }

	if (cmd === `${prefix}regra`) {
		message.delete()
                const embed = new Discord.RichEmbed()
        .setColor("#0061ff")
        .setTitle("<a:sino:554132888057151520>  Regras Gerais")
        .setDescription(args.join(" "))
        .setFooter(`Staff`, message.guild.iconURL)
        .setTimestamp();

    message.channel.send("@everyone ")
		message.channel.send({embed})
  }

//  if(cmd === `${prefix}meme`) {
    
//    number = 35;
//    imageNumber = Math.floor (Math.random() * (number -1 + 1)) +1;
//    message.channel.send(`Aqui está um meme, ${message.author}`)
//    let imagema = message.channel.send ( {files: ["./Memes/" + imageNumber + ".jpg"]} )
//    }

    if(cmd === `${prefix}ship`)
    {
        try{
           
                    // requer biblioteca Jimp
                    var Jimp = require('jimp');

                    message.channel.startTyping();
                    // pegar os dados de cada posição dos args
                   var mention_1 = args[0];
                    var mention_2 = args[1];

                    if(!mention_1 || !mention_2)
                    {
                        message.channel.send(`${message.author}, Informe os parâmetros corretamente \`!ship @mention + @mention\``);
                        message.channel.stopTyping(true);
                        return;
                    }

                    
                    // comparar se o dado fornecidado é uma menção
                 

                    /* Pegar o id do membro mencionado, o melhor metodo que eu acho que seja (é claro deve ter como fazer melhor) 
                    foi utilizando replace que assim quando menciona o membro é caido junto com <@291212> e transforma em 2939219321 */
                   var mention_tratado = mention_1.replace('<','').replace('>','').replace('@','').replace('!','');
                    var mention_tratado_2 = mention_2.replace('<','').replace('>','').replace('@','').replace('!','');
                 
                   
                    // recebendo os Id dos membros mencionados
                    var username_ship_1 = message.guild.member(mention_tratado || message.guild.members.get(args[0]));
                    var username_ship_2 = message.guild.member(mention_tratado_2 || message.guild.members.get(args[1]));


                    /*
                    	uma forma de validar se o autor que executou o comando foi válido
                    */
                    if (username_ship_1 === null || username_ship_2 === null) 
                    {
                        message.channel.send(`${message.author}, Informe os parâmetros corretamente \`f!ship @mention + @mention\``);
                        message.channel.stopTyping(true);
                        return;
                    }

                    // porcentagem do ship
                    var random_ship = Math.floor((Math.random() * 100) + 1);
                   
                    // imagens do coração
                    var imagens_ships = ['diretorio da imagem 0', '.diretorio da imagem 1', 'diretorio da imagem 2']; // array dos diretorios das imagens
                    var valor_img = 0; // esta variável possui a função de marcar a posição do array para que assim ele receba valor daquela posição como segue em baixo nas condições

                    // imprimir uma mensagem
                    var mensagem = '';

                    // tratar os usernames dos membros
                    var username_shippado_1 = username_ship_1.user.username.substring(4, 0); // remover 80% das palavras do usuario para que possa forma uma com as duas
                    var username_shippado_2 = username_ship_2.user.username.substring(4, 8);// remover 80% das palavras do usuario para que possa forma uma com as duas
                    var shipps = username_shippado_1 + username_shippado_2; // resultado da palavra formada com as duas username_shippado_1 + username_shippado_2
                    

                    // condições de gerar frases e imagens (matenhe a condição com && para sempre cair entre)
                    if(random_ship > 1 && random_ship <= 15)
                    {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[█..........]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n È.... pelo jeito você nem está no sonho dele(a)... :broken_heart::frowning: `
                        valor_img = 2; // posição do array da varável imagens_ships
                        
                    } if(random_ship > 15 && random_ship <= 20)
                    {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[██.........]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n   Pelo jeito você não vai perder a amizade né :sweat_smile::sweat_smile:  `
                        valor_img = 2;// posição do array da varável imagens_ships
                    }if(random_ship > 20 && random_ship <= 30)
                    {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[███........]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n Pelo menos vão ficar na friendzone hehe :sweat_smile: `
                        valor_img = 1; // posição do array da varável imagens_ships 
                    }if(random_ship > 30 && random_ship <= 40)
                    {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[████.......]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n Olha olha colega, vou até mandar uma cantada "Garota, é mais fácil o Vasco não ser rebaixado do que eu te abandonar.":heart:  `
                        valor_img = 1;  // posição do array da varável imagens_ships
                    }
                    if(random_ship > 40 && random_ship <= 50)
                    {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[█████......]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n Bom, pode correr atrás que um dia vocês estarão juntos... :heart: :smile:  `
                        valor_img = 1; // posição do array da varável imagens_ships
                    }
                    if (random_ship > 50 && random_ship <= 60) {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[██████.....]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n 50/50 em.... :smiling_imp:   `
                        valor_img = 0;// posição do array da varável imagens_ships
                    }
                    if (random_ship > 60 && random_ship <= 70) {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[███████....]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n Vocês podem ter uma bela relação juntos em uma amizade saudavel  :heart: :smile:  `
                        valor_img = 0;// posição do array da varável imagens_ships
                    }
                    if (random_ship > 70 && random_ship <= 80) {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[████████...]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n La vai mais uma "Desculpe, me empreste um óculos escuro, porque sua beleza brilha mais do que o Sol"  :smile:  `
                        valor_img = 0;// posição do array da varável imagens_ships
                    }
                    if (random_ship > 80 && random_ship <= 90) {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[█████████..]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n Temos um casal se formando em .... :smile: hehehe. :heart:  `
                        valor_img = 0;// posição do array da varável imagens_ships
                    }
                    if (random_ship > 90 && random_ship <= 100) {
                        mensagem = `hmmmmmmmmmmmmmmmm..... vejamos aqui <:pensativo:477924551876149289> \n ***${random_ship}%*** \`[███████████]\` \n \`${username_ship_1.user.username}+${username_ship_2.user.username} = ${shipps}\` \n Estes aí provavelmente foram feitos um para outro :heart: :heart: :heart:  `
                        valor_img = 0;
                    }


                    // Utilizando Jimp para gerar o ship (é preciso que você crie suas imagens para colocar no lugar destes comentado)
                    Jimp.read('diretorio da imagem de fundo').then(image =>{ // <== lugar aonde fica o plano de fundo da imagem
                        Jimp.read(imagens_ships[valor_img]).then(imageTwo =>{
                            Jimp.read(username_ship_1.user.avatarURL).then(imageThree =>{ //  imagem do avatar 1
                                Jimp.read(username_ship_2.user.avatarURL).then(imageFor =>{ // imagem do avatar 2
                                    imageTwo.resize(129, 129);
                                    imageThree.resize(129, 129);
                                    imageFor.resize(129,129);
                                    image.blit(imageTwo, 130, Jimp.HORIZONTAL_ALIGN_CENTER)
                                    .blit(imageThree, Jimp.HORIZONTAL_ALIGN_LEFT, Jimp.HORIZONTAL_ALIGN_CENTER).
                                    blit(imageFor, 260, Jimp.HORIZONTAL_ALIGN_CENTER).
                                    quality(100).write('diretorio e o nome da imagem que sera criado');// exemplo (.img/eduardo.png)


                                    // mandar o resultado do comando por fim
                                    message.channel.send(mensagem, {
                                        files: [
                                            './img/ship_franklin.jpg'
                                        ]
                                    }).then( r =>{
                                        message.channel.stopTyping(true);
                                    });
                                  
                                });
                            });
                    });
                
            });
          
        }catch (error)
        {
            message.channel.send(`${message.author}, houve um erro ao executar este comando :frowning: , desculpe pela incoveniência esto reportando para o suporte!`);
            console.log(error);
        }

      }

      if(cmd === `${prefix}abraçar`) {
        let abracUser = message.guild.member(message.mentions.users.first());
        if (!abracUser) return message.channel.send(`${message.author}, Utilize: !abraçar @user`)
    
        let abracEmbed = new Discord.RichEmbed()
            .setDescription(":relaxed:  Awnnnm que bunitinho")
            .setColor("RANDOM")
            .addField("Você ganhou o abraço:", `${abracUser}`)
            .addField("Quem deu o abraço:", `${message.author}`)
            .setImage('https://cdn.discordapp.com/attachments/423651454310416384/465355921623613470/hug-HyllFdmwZ.gif')
    
    
        message.channel.sendMessage(abracEmbed);
      }

      if(cmd === `${prefix}kiss`) {
        const beijo = [
          "https://cdn.discordapp.com/attachments/553746680865095702/557287713951449118/kiss_20.gif",
          "https://cdn.discordapp.com/attachments/553746680865095702/557288383634866201/kiss_40.gif",
          "https://cdn.discordapp.com/attachments/553746680865095702/557289031491387451/kiss_10.gif",
          "https://cdn.discordapp.com/attachments/553746680865095702/557289082108117013/kiss_16.gif"
      ]
        let user = message.mentions.users.first();
        if(!user) {
            const smEmbed = new Discord.RichEmbed()
            .setDescription(`Aqui seu beijinho <@${message.author.id}> (○ﾟε^○)`)
            .setColor(11468843)
            .setImage(beijo[Math.round(Math.random()*beijo.length-1)]);
            message.channel.send(smEmbed)
        }
        const cmEmbed = new Discord.RichEmbed()
        .setDescription("<@" + message.author.id + "> `beijou` <@" + user.id + "> ⊂(･ω･*⊂)")
        .setColor(11943504)
        .setImage(beijo[Math.round(Math.random()*beijo.length-1)]);
    message.channel.send(cmEmbed)
    }

      if(cmd === `${prefix}EuSou` || cmd === `${prefix}eusou` ) {
        const falas = ["Corno",
        "Gado d+ kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk :water_buffalo: :water_buffalo: :water_buffalo: :water_buffalo:",
        "Santinho",
        "Inocente",
        "Diabinho",
        "Idiota",
        "Debi Mental",
        "Legal",
        "Chato",
        "Imbecil",
        "Senpai",
        "SEMpai",
        "Grosso",
        "Sentimental",
        "Otaku Fedido",
        "Queimador de Rosca",
        "Baka",
        "Gay Enrustido"]

        message.reply("Você é... " + falas[Math.round(Math.random()*falas.length-1)])
      }

if(cmd === `${prefix}avatar`) {
  let user = message.mentions.users.first() || message.author;

  let userinfo = {};
  userinfo.avatar = user.avatarURL;
  userinfo.name = user.username;
  userinfo.discrim = `${user.discriminator}`;
  userinfo.id = user.id;

  const embed = new Discord.RichEmbed()
  .setTitle(`:frame_photo:  Avatar de: ${user.tag}`)
  .setDescription(`Clique [aqui](${user.avatarURL}) para baixar a imagem.`)
  .setImage(userinfo.avatar)
  .setColor("#28a428")

  message.channel.send(embed)
}
if(cmd === `${prefix}meme`) {

const memeL = ["",
"https://i.ibb.co/prP5ckg/1ba51665ba87f295e264b07e21cad6d8.jpg",
"https://cdn.discordapp.com/attachments/558861576577351702/559453465001328667/512nqe0l5rk21.jpg",
"https://cdn.discordapp.com/attachments/558861576577351702/559453467811381270/Dz4bdpBX0AEC-UO.jpg",
"https://cdn.discordapp.com/attachments/558861576577351702/559453506054914059/when-you-drink-like-8-cups-of-coffee-in-1-go-and-shitpost-on-memecenter_o_7185709.jpg",
"https://cdn.discordapp.com/attachments/558861576577351702/559453554008653856/l0q2sveyfpk21.png"]

    const memeEmbed = new Discord.RichEmbed()
    .setDescription(`Aqui está um meme, ${message.author}`)
    .setImage(memeL[Math.round(Math.random()*memeL.length-1)])
    .setColor("#035acb")

    message.channel.send(memeEmbed)
}

if(cmd === `${prefix}grr` || cmd === `${prefix}Grr`) {

  const Grr = ["https://cdn.discordapp.com/attachments/558858870307553292/558859186906202112/0dbe9543bf569f3ee77e5ec78ee6cb8e.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859211472371714/2c57d8ff546fa0e1abd88f6d11970250.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859243860525067/3b1d64503d5de84e534db30f4d52392c--angry-meme-spicy.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859278853603329/3b7e2449aeb4f63facc364c09f0dbe71--pusheen-depression.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859337687236657/5e7f0fa1f21dfefbaddce768eeaf69fa.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859355332542475/15f3cc1e77496bd51c7be9a35fb9f1d8.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859409602773003/14ec4508b773c2a61b564c6dd9e2e2939277444a_hq.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859430876413966/35f55467bb8ccf9209bf1dc1c70c0ece51844949_hq.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859449968885770/60c6ed711813bf4c228de4dc4458e1d0.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859452724412416/88c35da0ffa6b0b5c81c3a06171936efdf71ccf0_00.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859454641340426/145cf529fdaa4d37b1bc09b950800f66e5c17730_hq.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859484097675264/84ae16fed11c19a836079d68bf63b118284061d8_00.gif",
"https://cdn.discordapp.com/attachments/558858870307553292/558859604579188756/60845ecde97d8590cd509ad56b2a1d17--angry-meme-yo.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859648183304203/49698bfbfceeffe3af142b301f965c84.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859805662642227/348638ad0ca8bea22658f689a7d159ff888f617c_hq.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859808476758031/3052d71532a6f8ca68d7c5496307ead8bbafb5da_hq.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859815305084928/42914357_1106870622812165_563526608615374848_n.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859815502348288/B8ukLIw.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558860808021344257/SvZEJYa.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558860699254652929/unnamed.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558860571395620864/only-grr-reactions-leggings.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558860521475014656/images1.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558860521290334230/images.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558860503468736551/images_4.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558860029705584660/images_1.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558860027822080010/images_3.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558860027356774402/images_2.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558860008926740501/HnzkJFXc_400x400.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859991495475210/grr-igrri-grr-grr-grr-grr-atk-grr-def-grr-2017-13014094.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859961988415488/e734149bc762c31f833dca0e2afb52c9c92a984c_hq.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859960365088779/DuZroZOX4AEpzqo.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859959102734346/download.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859942157746187/DICVquHWsAA1MRi.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859913833611296/c735f5782b4c7e653f42a7d9174c7b93.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859898402766850/C9LmuejXUAA--8m.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859897924616212/C9Lm4FjXgAAaeidRc.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859890840567809/bbde8840594b661a13b6bc3f34c931aa.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859873148862475/b99c7ee3b4546b7f39096f0ec3f5bafb.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859840521502742/1520883347097.jpg",
"https://cdn.discordapp.com/attachments/558858870307553292/558859824763371541/a6f584d02ad1e997d643c67c4ffdb889.jpg"]
  
      const GrrEmbed = new Discord.RichEmbed()
      .setDescription(`<:Grr:553748563209879552> Grr`)
      .setImage(Grr[Math.round(Math.random()*Grr.length-1)])
      .setColor("#fbcf6e")
  
      message.channel.send(GrrEmbed)
}

  if(cmd === `${prefix}google`) {
    let google = args.slice(0).join('+');
    let embed = new Discord.RichEmbed()
        .addField(`https://www.google.com/search?q=${google}`, `Você pesquisou: **${google}**`)
        .setDescription("**Eu perguntei pro google e...**")
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC3vWx0eulpmRcyK9vtvbnCqfrTDo958bCTNvgy-HTeCaV-or-MQ")
        .setColor("RED")
    message.channel.send(embed);
}

  if(cmd === `${prefix}yt`) {
    let youtube = args.slice(0).join('+');
    let embed = new Discord.RichEmbed()
        .addField(`https://www.youtube.com/results?search_query=${youtube}`, `Você pesquisou: **${youtube}**`)
        .setDescription("**Eu perguntei pro youtube e...**")
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQJybHrz8EksyW96_-uAkMMDh0czw0CR-L6FGOyXwMXelY9z3H")
        .setColor("RED")
    message.channel.send(embed);
  }

  if(cmd === `${prefix}tiro`) {
    let tiroUser = message.guild.member(message.mentions.users.first());
    if (!tiroUser) return message.channel.send("Você usou o comando incorretamente: use >!atirar @user)")
    
    let cariEmbed = new Discord.RichEmbed()
        .setDescription("Toooma balaaa")
        .addField("Você ganhou uma bala na cabeça:", `${tiroUser}`)
        .addField("Quem atirou:", `${message.author}`)
        .setImage('http://78.media.tumblr.com/4bb74cde3875443b714c788cc9e55a74/tumblr_mqp3rhj5uO1s9s0bdo1_500.gif')
    
    
    message.channel.sendMessage(cariEmbed);
  }

  if(cmd === `${prefix}userinfo`) {
    if (message.mentions.users.first()) {
      userapelido = message.guild.member(message.mentions.users.first()).nickname
    user = message.mentions.users.first().username;
    userfoto = message.mentions.users.first().displayAvatarURL;
  userstatus = message.mentions.users.first().presence.status;
  usertag = message.mentions.users.first().tag;
  usercolorole = message.guild.member(message.mentions.users.first()).displayHexColor;
  usercriado = message.mentions.users.first().createdAt;
  userid = message.mentions.users.first().id;
game2 = message.mentions.users.first().presence.game;
userentrou = message.guild.member(message.mentions.users.first().id).joinedAt;
usercargo = message.guild.member(message.mentions.users.first().id).roles;
userbot = message.mentions.users.first().bot;

  } else {
    user = message.author.username;
    userfoto = message.author.displayAvatarURL;
    userstatus = message.author.presence.status;
  usertag = message.author.tag;
  usercolorole = message.guild.member(message.author.id).highestRole.displayHexColor;
  usercriado = message.author.createdAt;
  userid = message.author.id;
  game2 = message.author.presence.game;
  userentrou = message.guild.member(message.author.id).joinedAt;
  usercargo = message.guild.member(message.author.id).roles;
  userapelido = message.guild.member(message.author.id).nickname
  userbot = message.author.bot;
  }
  function stats() {
    var status = userstatus
    if  (status == "online") {
    return "<:online:553748557451231252>  Disponível"
  } else if (status == "offline") {
    return ("<:off:553748557409026070>  Indisponível")
    } else if  (status == "dnd") {
    return ("<:dnd:553748558319190028>  Ocupado")
    } else if (status == "idle") {
    return ("<:ausente:553748557429997607>  Ausente")
    }
  }
  const cargus = usercargo.map(u => u.name).join(", ")
  function playing(){
    var playings = game2
    if(playings != undefined){
        return playings.name;
    }else{
        return "Não detectado";
    }
}
  const moment = require('moment');
     moment.locale('pt-BR');
var embed = new Discord.RichEmbed()
.setAuthor('Informações de: '+user, userfoto)
.setThumbnail(userfoto)
.addField(`:satellite_orbital: Status:`, `${stats()}`,true)
.addField(":date: Criou a conta em", moment(usercriado).format('ll'), true)
.addField(":date: Entrou aqui em", moment(userentrou).format('ll'), true)
.addField(`:desktop: Jogando:`, `**${playing()}**`, true)
.addField(`:computer: ID:`, userid, true)
.addField(`:computer: Tag no Discord:`, usertag, true)
.addField(`:briefcase: Cargos`, cargus, true)
.setColor(usercolorole)
.setTimestamp();
message.channel.send({embed : embed})
  }

  if(cmd === `${prefix}userinfo2`) {
    let user = message.mentions.users.first() || message.author;

    let userinfo = {};
    userinfo.avatar = user.avatarURL
    userinfo.name = user.username;
    userinfo.tag = user.tag
    userinfo.discrim = `#${user.discriminator}`;
    userinfo.id = user.id;
    userinfo.status = user.presence.status;
    userinfo.joined = moment.utc(message.guild.members.get(user.id).joinedAt).format("dddd, MMMM Do, YYYY");

    const embed =  new Discord.RichEmbed()
    .setAuthor(user.tag, userinfo.avatar)
    .setThumbnail(userinfo.avatar)
    .setColor(3470975)
    .setTimestamp()
    .addField(`:diamond_shape_with_a_dot_inside: ID`, userinfo.id, true) .addField(`:beginner: Menção`, `<@${userinfo.id}>`, true)
    .addField(`:bookmark: Tag do Discord`, userinfo.tag, true) .addField(`Status`, userinfo.status, true)
    .addField(`:star2: Entrou`, userinfo.joined);
    message.channel.send(embed)
  }

  if(cmd === `${prefix}piada`) {
    const piada = [`É muito ruim jogar Watch_Dogs online..


Só tem Hacker jogando.`,
`Se te oferecerem um par de óculos sem lente, tome cuidado..


É uma armação.`,
`Qual a fórmula da água benta?


H Deus O.`,
`O que aconteceu com os lápis quando souberam que o dono da Faber Castell morreu?


Eles ficaram desapontados.`,
`Quem é o rei dos queijos?


O Reiqueijão.`,
`Onde Batman estava indo com seu Bat-Trage Social?


Ao BATizado.`,
`Por que o Batman colocou o Bat-Móvel no seguro?

Por que ele tem medo que robin.`,
`Qual é a aula favorita da vaca?


A aula de Múuuuuuusica.`,
`Qual é a tartaruga ninja que está sempre na televisão?

É a Donatella.`,
`Qual o povo que quando te vê na rua te chama?


Os EgíPSIU.`,
`Por que o elefante pega leve com o pássaro?


Porque ele tem pena.`,
`Qual o nome da parente que você mais gosta?


A Tiadora.`,
`Qual a cantora que tem um supermercado?


A **Walmart**'nália.`,
`O que um cromossomo disse para o outro?


Cromossomo felizes.`,
`Qual o animal que adora tinta?


O Guachenim.`,
`Qual a nacionalidade dos profissionais que trabalham com encanamento?


Mexicanos.`,
`Qual o Rapper que gosta de sarrar no saco de gelo?


O Virilha Ice.`,
`Por que os Minions não usam GPS?


Porque eles já sabem os caminhons.`,
`O que um tijolo falou para o outro?


Há um cimento entre nós.`,
`Por que o Italiano não come churrasco?


Por que o macarrão não cabe no espeto.`,
`Por que o padre não gosta de Nestlé?


Porque ele só come garoto.`,
`O que come e nunca engorda?


O apontador.`,
`A muda começou a falar e decidiu praticar um esporte radical. Qual esporte é esse?


Ex-calada.`,
`Qual hino todos os presidiários gostariam de cantar?


O inocente.`,
`Qual é o molho preferido dos fãs de Street Fighter?


Shoyuken.`,
`Como o pessoal do Street Fighter comemora o réveillon?


De roupa blanka.`,
`Qual é a música do turista com amnésia?


Que país é ess.`,
`Qual roqueiro não usa drogas e nem sacaneia os outros?


O bom jovem.`,
`Qual é o utensílio de cozinha que mais trabalha?


O ralador.`,
`Por que o Mario perdeu o processo para o Sonic?


Porque a justiça é SEGA.`,
`Qual é a doença que acomete a todos os jogadores de futebol que estão jogando na linha?


Conjunto de vinte.`,
`O que o espermatozoide falou pro óvulo?


Deixa eu morar com você que minha casa tá um saco.`,
`Como se chama uma mulher que visitou uma plantação de uva?


Viuva.`,
`Qual a diferença entre a namorada e uma esposa?


30 Kilos.`,
`O que é um cigarro de machonha em cima de um jornal?


Baseado em fatos reais.`,
`Qual a semelhança entre o ginecologista e o entregador de pizza?


Ambos podem ver, cheirar, mas não podem comer.`,
`O que o advogado do frango foi fazer na delegacia?


Soltar a franga.`,
`Sabe qual é a diferença entre a lagoa e a padaria?


Na lagoa, há sapinho, e na padaria assa sapão.`,
`O boi e a vaca foram ao cinema, como eles pagaram a conta?


Eles fizeram uma vaquinha.`,
`Por que a Coca-Cola e a Fanta se dão tão bem?


Por que se a Fanta quebrar a Coca Cola.`,
`Você conhece a piada do Fotógrafo?


Ainda não foi revelada.`,
`Do que o Diabo morreu?


De diabete.`,
`Qual é o molho de tomate preferido dos gatos?


O Cat-Chup.`,
`Por que o esqueleto saiu do trabalho?


Por que era horário de almosso.`,
`Sabe qual a melhor parte do esqueleto?


Ossorriso.`,
`Porque a mulher do Hulk deixou ele?


Por que ela queria alguém mais maduro.`,
`Qual ex-goleiro foi parar no tribunal?


Tafa réu.`,
`Qual cantor usa hack nos jogos?


O Cheatãozinho.`,
`Qual é o jogo em que os jogadores sempre dizem não?


Sim nunca.`,
`Por que o peixe nunca passa de ano?


Porque ele só faz vários nada.`,
`Por que nos barris de Donkey Kong tem energéticos?


Porque eles são TNT.`,
`Qual o dicionário dos cachorros?


É o Auaurélio.`,
`Por que o relógio quando chega meia noite está igual a Coca-Cola?


Por que ele fica zero.`,
`Qual o tipo de queijo é um gigante móvel duplo na cozinha?


Par-Mesão.`,
`Por que os Argentinos tem poucas chances de ganhar a batalha naval?


Porque já perderam o submarino.`,
`Em uma partida de futebol das drogas, quem é o melhor?


O crack.`,
`Quando você termina de tomar banho e pega a toalha, qual é a primeira coisa que você seca?


A água.`,
`Em uma corrida quem ganha a Uva ou a Sky?


A Sky está sempre na frente mas a Uva passa.`,
`Qual banda não está bem?


Banda Malta.`,
`Qual personagem da Bíblia era viciado em exercício fisico?


Pôncio Pilates.`,
`Como o ciclista reage a uma notícia ruim?


Ele leva um bike.`,
`Qual é a lei que regula os voos de dirigível?


Lei de Zeppelin?`,
`Por que o Mario e o Luigi foram ao psicólogo?


Porque estavam passando por uma fase difícil.`,
`Por que o vírus da gripe não tem amigos?


Porque ele é uma má influenza.`,
`Qual é o goleiro mais velho de todos?


Rogério Senil.`,
`Qual é o condimento feito de insetos?


A noz moscada.`,
`Qual é a semelhança entre o Advogado, o Pescador e o Kid Bengala?


Todos eles resolvem o problema na vara.`,
`O que é que atravessa o rio mas não se molha?


A ponte.`,
`Qual é o filme em que um salgado lidera um exército em busca da vitória?


Croissant Valente.`,
`O que o Buzz Lightyear disse na igreja?


"Ao infinito e amém".`,
`Qual é a cidade que tem o maior índice de cachorros interrompendo jogos de futebol?


São Bernardo no Campo.`,
`Qual é o personagem da Marvel que usa rastafari?


Dreadpool.`,
`Sabe o que o Beto faz quando toca a nona sinfonia?


O Beto ouve.`,
`O que o 6 perguntou pro 8?


Sevem ou nove.`,
`Qual é o gênero musical mais tocado nos esgotos?


Fossa Nova.`,
`Por que o maquinista deixou o maluco sentar do seu lado?


Porque o louco o motiva.`,
`Qual é a música favorita dos barbeiros?


Johnny Bigode.`,
`Por que os peixes há milhões de anos saíram do mar e evoluíram?


Porque eles foram bem peixepicazes.`,
`Qual é o inseto que pode ser usado como forma de pagamento?


Borboleto.`,
`Você sabe o que o Coringa fez quando chegou na Síria?


Why so Sírio.`,
`Qual é o rio mais azedo do Brasil?


Solimões.`,
`Qual é a torcida que mais bebe?


A Atleticana.`,
`Qual cantora tentou adotar Jesus Cristo?


Dê-me o louvado.`,
`Qual é o nome do jogo de luta que só se pode jogar tomando tequila?


Tequila of Fighters.`,
`Qual é a banda de pagode mais famosa no mundo dos animes?


Sorriso Naruto.`,
`Qual é o dinossauro que deseja muito ganhar a copa do mundo pela terceira vez?


Tri Será Top.`,
`Qual é o cantor mais carente do Brasil?


Cesar Menote.`,
`Qual é o médico que nunca está online?


Offtalmologista.`,
`Qual é o melhor goleiro do Brasil?


O Bruno, porque ele estava treinando feito um condenado.`,
`Qual é a cidade que quer ser um instrumento musical?


Itaquaquecetuba.`,
`Qual é o aparelho que nunca para de mexer?


A Balança.`,
`Qual é a dupla sertaneja mais bêbada?


Chitãozinho e Sógoró.`,
`O que a foca filho falou para a foca mãe?


"Ei, mother foca."`,
`Por que mandaram o cinegrafista embora?


Porque ele perdeu o foco.`,
`Onde são abastecidos os carros dos funcionários da receita federal?


Num posto de renda.`,
`Por que em barretos as pessoas não falam as coisas na lata?


Porque lá é impossível fazer algo sem rodeios.`,
`Qual é o personagem do Chaves que o Cebolinha acha mais bonito?


A Dona Flolinda.`,
`Qual é o ator que mais está odiando esse ano?


Keanu Reeves.`,
`Qual é a revista favorita dos pintores?


Toda Teenta.`,
`Qual é o carro do mosquito da dengue?


Aedes Ae Jipe.`,
`Qual é a capacidade do pendrive de um Baiano?


Um ginga.`,
`Por que a Hillary perdeu a presidência?


Porque a Hillary não ia trampar, mas o Donald Trump.`,
`Qual é o jogo favorito daqueles que têm dificuldade em dizer não?


The Sims.`,
`Qual é o pintor que vai para aparecida a pé?


O Romeiro Britto.`,
`Onde os piratas armazenam suas músicas favoritas?


CD-RUM.`,
`Qual o cantor favorito dos anões?


Toquinho.`,
`Qual personagem do Mortal Kombat usa chinelo?


Raiden.`,
`Qual é a profissão do Homem Aranha?


Desenvolvedor Web.`,
`O que o Antonio Fagundes falou quando entrou no restaurante vegetariano?


É uma salada, Bino.`,
`Um extra terrestre tentou colocar roupas no varal, mas não conseguiu. Qual é o nome do filme?


Alien VS. Pregador.`,
`Por que quando a última luta é entre o Ken e o Ryu, o Ryu ganha?


Porque Ken e Ryu por último, Ryu melhor.`,
`Qual diretor de Hollywood ganha mais dinheiro após cada filme lançado?


George Lucras.`,
`Você sabe por que as pessoas usam óculos vermelhos?


Para ver melhor.`,
`Qual é o detetive que tem um irmão gêmeo idêntico?


Xerox Holmes.`,
`Qual bala pode ser montada?


Jumentos.`,
`Sabe como é o grito de orgasmos de uma sorveteria?


"AI, KIBOM! AI, KIBOM!".`,
`Por que o Spock passou mal?


Porque ele teve um Star Treco.`,
`Qual é o pintor que vende os quadros mais baratos?


O Leonardo Davinci e cinco de março.`,
`Qual é o vírus que mata mais jogadores de futebol?


É bola.`,
`Porque o jogador de futebol resolveu treinar na piscina?


Para melhorar os passes com profundidade.`,
`Por que se você colocar o ouvido no túmulo do Beethoven, você ouve a música dele ao contrário?


Porque ele está decompondo.`,
`O que a loja de perfumes respondeu ao cara que percebeu o vidro de perfume quebrado?


"Azzaro seu".`,
`O que é um jovem de 14 anos em Porto Alegre?


O adolescentchê.`,
`Qual é o time da língua inglesa que é uma porcaria?


Manchester shit.`,
`Qual filme conta a história do filho do Shrek?


Ogrito.`,
`Qual é o seriado favorito dos pedreiros?


24 Obras.`,
`Qual é a banda que tinha um Playstation 3 e agora tem um um Playstation 4?


Trocoldplay.`,
`Qual é o pior psicanalista?


Aquele que não Freud nem sai de cima.`,
`Qual é o pote que toca música?


O Spotefy.`,
`O que é um pontinho marrom no pulmão?


Brownquite.`,
`Como é que começa o filme do judoca?


Com "Once ippon a time".`,
`Qual é o carro do cara que faz cinema?


É o cineastra.`,
`Qual jogo de videogame conta a história de um presidente monstro que acaba com os direitos da população?


Presidente Evil.`,
`Qual é a fruta de que a abelha mais gosta?


Melancia.`,
`Qual é o estado que queria ser um carro?


Ser jipe.`,
`Se eu roubar um sino de igreja, e colocá-lo fatiado no forno, o que eu sou?


Um assa-sino.`,
`Para quê algumas pessoas colocam o despertador debaixo do travesseiro?


Para acordar em cima da hora.`,
`Como se diz "Meia-Noite" em japonês?


Meio-Dia.`,
`Qual é o planeta que ama a todos?


Amarte.`,
`Quem nasce em Madrid é o que?


Madrinha.`,
`Qual o país onde nunca anoitece?


Ale-manhã.`,
`Qual é o computador mais comunista?


PC do B.`,
`Qual é a parte mais velha do carro?


Retrô-Visor.`,
`De que a vaca foi fantasiada para festa?


De múúúúúúmia.`,
`Por que viajar pro Chile é um saco?


Porque fica em baixo do Peru.`,
`Qual aplicativo os presidiários usam para fugir da cadeia?


Skype.`,
`Qual sambista que entrou numa caixa e se enviou pelo correio?


Zeca Pacotinho.`,
`Qual o X-Men que quer crescer?


Mi-istica.`,
`Qual parte do carro combate todos os efeitos da maconha?


Para-brisa.`,
`Qual o país que todos estão na academia?


Somalia.`,
`Qual o cantor sertanejo mais carente?


Cesar Me-note.`,
`Qual macarrão que parou de ficar com os outros?


Ex-peguetti.`,
`Qual político gosta de escutar música?


Geraldo Walkman.`,
`Qual pintor vende os quadros mais baratos?


O Leonardo da Vinci e Cinco de Março.`,
`Qual tipo de conexão não pega no elevador?


Internet Discada.`,
`Quando o Superman morreu, como os vilões ficaram?


De Lutor.`,
`Qual o herói favorito de Deus?


Clark Crente.`,
`Qual a carne que é cheia de pano?


Frango empanado.`,
`O que acontece quando uma foca tem um objetivo em mente?


Ela foca.`,
`Qual o parque de diversões do Renato Aragão?


É a Didi's-neylândia.`,
`Como fazer para as dores corporais se tornarem dormentes?


É só você usar o amortece-dor.`,
`Qual é o carro que mais xinga?


Punto.`,
`Qual o carro que indica a previsão do tempo?


O celta preto.`,
`Qual o carro que se ferra mais?


Ferra ri.`,
`A família da fazenda estava sem leite para beber com café pela manhã e o pai mandou seus três filhos tirarem o leite das vacas. Qual o nome do filme?


Os três pra teta.`,
`Qual a explosão que o peão não quer encontrar no rodeio.


O ex-touro.`,
`Por que o passarinho mesmo batendo de cara no chão, ele acha engraçado?


Porque ele racha o bico.`,
`Por que o petróleo foi no psicólogo?


Porque ele estava no fundo do poço.`,
`Por que os zagueiros são os que mais deixam saudade quando se aposentam no futebol?


Porque são eles que mais fazem falta.`,
`Qual cantora que adora Death Note?


Sha-Kira.`,
`Qual é o esporte mais popular entre os chefs mexicanos?


O beisebol, porque se joga com o taco.`,
`Qual é o estado dos EUA que te eletrifica?


Ohio.`,
`Qual o time mais quente de todos?


Bota-fogo.`,
`Qual é o carro que o Cebolinha dá de presente para quem está fazendo aniversário?


Opalabéns.`,
`Qual é a bebida preferida do Batman?


É o chá-rada.`,
`Qual o tênis que gera climão?


É o Mal Star.`,
`Por que a mulher não precisou mais fazer chapinha depois de um acidente de carro?


Porque ficou lisão.`,
`Qual a ave que te serve comida?


É o garção.`,
`O que o Goku foi fazer no Habib's?


Pegar as esfihas do dragão.`,
`Qual o chocolate mais eletrizante da Páscoa?


O Chokito.`,
`Qual o vegetal que o cachorro mais gosta?


Auface.`,
`Qual é o personagem de Dragon Ball que fuma o cigarrinho do capeta?


É o Breeza.`,
`Qual é o chocolate que o Thor mais gosta?


Thortuguita.`,
`Qual é o time de futebol da criança que fala muito?


Boca junior.`,
`O que o Vin Diesel disse pra moça frentista do posto de gasolina?


Etanóis.`,
`Qual é a revista que é bem observada


A Veja.`,
`Qual é a medida mais pesada que existe?


É a Hipopotenusa.`,
`O que aconteceu com a mulher ao receber a conta de energia?


Ela levou um choque.`,
`Qual a marca de perfume que não é barata?


A Boticaro.`,
`Por que a menina brigou com o irmão dela na sexta-feira?


Porque era final de sermana.`,
`Qual o animal que trabalha bem como Carpinteiro?


O Rinoserrote.`,
`Qual o nome de chinês que adora doce?


Chantilly.`,
`Qual o cantor que tem aulas com o Professor Girafales?


O Zeca Pagodines.`,
`Qual o nome do cereal que vende no trem?


Sutrilhos.`,
`Qual é a Miss que nunca aparece?


A Missteriosa.`,
`Por que a vaca não faz academia?


Porque ela já é malhada.`,
`O que o ladrão bonzinho faz quando rouba a arma do outro?


Ele devólver.`,
`Por que a Dona Florinda não vai no McDonald's?


Porque ela só usa Bob's.`,
`Qual parte do corpo é um grande vazio?


Sovaco.`,
`Por que os índios receberam os portugueses com uma fogueira?


Porque era caravela.`]

    const piadaembed = new Discord.RichEmbed()
    .setDescription(piada[Math.round(Math.random()*piada.length-1)])
    .setColor("RANDOM") 

    message.channel.send(piadaembed)
  }

  if(cmd === `${prefix}fbi` || cmd === `${prefix}FBI`) {
    const FBI = ["https://cdn-ksoft.ams3.digitaloceanspaces.com/media/i-8jx_pwp5-20.gif"]

    const FBIEmbed = new Discord.RichEmbed()
    .setDescription(`ABRA A PORTA, ${message.author}!`)
    .setImage(FBI[Math.round(Math.random()*FBI.length-1)])
    .setColor("BLACK")

    message.channel.send(FBIEmbed)
  }

  if(cmd === `${prefix}ping`) {
    message.channel.send("Pinging...").then(m => {
      let ping = m.createdTimestamp - message.createdTimestamp
      let choices = ["Is this really my ping", "Is it okay? I cant look", "I hope it isnt bad"]
      let response = choices[Math.floor(Math.random() * choices.length)]

      m.edit(`${response}: Bot Latency: \`${ping}\`, API Latency: \`${Math.round(bot.ping)}\``)
    })
  }

  if(cmd === `${prefix}fakemsga`) {
    message.delete();
    try {
    let user;

    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
  
        } else if(args[0]) {
        user = client.users.get(args[0]);

}
    let botmessage = args.slice(1).join(' ')

    if (args[0] == null) {return message.channel.send(`${message.author}, :white_check_mark: Mencione um usuário !`)}


    if (args[1] == null) {return message.channel.send(`${message.author}, mencione alguém e diga algo.`)}
        message.channel.createWebhook(user.username, user.avatarURL).then(w => {
        w.send(botmessage);
        w.delete();
    })

    } catch (err) {
      message.reply(':white_check_mark: Eu não tenho permissão para criar um Webhook neste servidor, ou não encontrei este usuário.')
    }
  }

  if(cmd === `${prefix}chat`) {
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(`você não tem permissão! ${emojinop}`).then(msg => msg.delete(5000));
    message.delete().catch(O_o=>{});
    const mutarcanalmsg = new Discord.RichEmbed()
        .setTitle("Mutar ou desmutar...")
        .setDescription(`Para mutar esse canal reaja com :mute:\nPara desmutar reaja com :loud_sound:\nPara mais informações reaja com :question:`)
        .setColor("#60d1f6")
        .setFooter(`© Kally - Canal: ${message.channel.name}`)
    let mensg = args.join(" ");
    if(!mensg){
        message.channel.send(mutarcanalmsg).then(msg=> {
            msg.react("🔇").then(r => {
                msg.react("🔊")
                msg.react("❓")
                msg.delete(78000).catch(O_o=>{});

                const podemutar = (reaction, user) => reaction.emoji.name === '🔇' && user.id === message.author.id;
                const podedesmutar = (reaction, user) => reaction.emoji.name === '🔊' && user.id === message.author.id;
                const info = (reaction, user) => reaction.emoji.name === '❓' && user.id === message.author.id;
    
                const podemutarL = msg.createReactionCollector(podemutar, { time: 60000 });
                const podedesmutarL = msg.createReactionCollector(podedesmutar, { time: 60000 });
                const infoL = msg.createReactionCollector(info, { time: 60000 });
                
    
                podemutarL.on('collect', r=> {
                    msg.delete();
                    let role = message.guild.roles.find(ro => ro.name === "@everyone");
                    message.channel.overwritePermissions(role, {SEND_MESSAGES: false});
                    const ab = new Discord.RichEmbed()
                    .setDescription(`Canal **mutado** por: ${message.author}`)
                    .setColor("RED")
                    message.channel.send(ab)
                    return;
                })
                podedesmutarL.on('collect', r=> {
                    msg.delete();
                    let role = message.guild.roles.find(ro => ro.name === "@everyone");
                    message.channel.overwritePermissions(role, {SEND_MESSAGES: true});
                    message.channel.send(`Canal **desmutado** por: ${message.author}`)
                    return;
                })
                infoL.on('collect', r=> {
                    msg.delete();
                    const comousar = new Discord.RichEmbed()
                        .setAuthor("Kally", message.user.avatarURL)
                        .setTitle(`${prefix}chat`)
                        .setDescription(`Irá mutar ou desmutar o chat.`)
                        .setColor("#22a7cc")
                        .setFooter("© Kally - kally.glitch.me")
                        .addField("Como usar:", `\`${prefix}chat <on/off>\``)
                        .addField("Permissão:", "O staff que for usar o comando tem que esta em um cargo com a permissão `Gerenciar mensagens`")
                    message.channel.send(message.author, comousar).then(msg => msg.delete(10000));
                })
            })
        }).catch(O_o=>{});
    }
    if(mensg){
        if(args[0] == "OFF" || args[0] == "off"){
            let role = message.guild.roles.find(ro => ro.name === "@everyone");
            message.channel.overwritePermissions(role, {SEND_MESSAGES: false});
            message.channel.send(`Canal **mutado** por: ${message.author}`)
            return;
        }else if(args[0] == "ON" || args[0] == "on"){
            let role = message.guild.roles.find(ro => ro.name === "@everyone");
            message.channel.overwritePermissions(role, {SEND_MESSAGES: true});
            message.channel.send(`Canal **desmutado** por: ${message.author}`)
            return;
        } else{
        message.reply("por favor use assim: `!chat off` ou `!chat on`!").then(msg => msg.delete(8000));
        }
    }
    
    
  }

  if(cmd === `${prefix}semojis`) {
    let emojis = message.guild.emojis.map(a => a).join(' ')
    let emojiEmbed = new Discord.RichEmbed()
    .setColor("ffcc4d")
    .addField(`:thinking:  Emojis do Servidor [${message.guild.emojis.size}]`, emojis)

    message.channel.send(emojiEmbed);
  }

  if(cmd === `${prefix}scargos`) {
    const cargoEmbed = new Discord.RichEmbed()
    .addField(`:briefcase:  Cargos do Servidor [${message.guild.roles.size - 1}]`, message.guild.roles.map(r => r).join(" ").replace("@everyone", " "))
    .setColor("#9a4e1c")
    message.channel.send(cargoEmbed)
  }

  if(cmd === `${prefix}smembros`) {

    const membrosEmbed = new Discord.RichEmbed()

    .setColor("#ede90d")
    .addField(`:busts_in_silhouette:  Total de Membros [${message.guild.memberCount}]`, `:bust_in_silhouette:  Pessoas [${message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size}]
<:bot:555247364756209665>  Bot's [${message.guild.members.filter(mem => mem.user.bot === true).size}]`)
    .addField(`Status do usuários:`, `<:online:553748557451231252>  Online [${message.guild.members.filter(m=>m.presence.status==="online").size}]
<:ausente:553748557429997607>  Ausente [${message.guild.members.filter(m=>m.presence.status==="idle").size}]
<:dnd:553748558319190028>  Não pertubar [${message.guild.members.filter(m=>m.presence.status==="dnd").size}]
<:off:553748557409026070>  Offline [${message.guild.members.filter(m=>m.presence.status==="offline").size}]`)

    return message.channel.send(membrosEmbed);
  }

    if(cmd === `${prefix}sinfo`){

      moment.locale('pt-BR');
      let servernome = message.guild.name
      let servericone = message.guild.iconURL
      let emojis = message.guild.emojis.map(a => a).join(' ')
        const serverLevel = ["Nenhum", "Baixo", "Médio", "Alto (╯°□°）╯︵ ┻━┻", "Máximo ┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻"];
        let sicon = message.guild.iconURL;
        if(message.guild.region === "brazil") var region = ":flag_br: Brasil";
        if(message.guild.region === "eu-central") var region = ":flag_eu: Europa Central";
        if(message.guild.region === "hongkong") var region = ":flag_hk: Hong Kong";
        if(message.guild.region === "japan") var region = ":flag_jp: Japão";
        if(message.guild.region === "russia") var region = ":flag_ru: Russia";
        if(message.guild.region === "singapore") var region = ":flag_sg: Cingapura";//
        if(message.guild.region === "southafrica") var region = ":flag_za: África do Sul";
        if(message.guild.region === "sydney") var region = ":flag_au: Sydney";
        if(message.guild.region === "us-central") var region = ":flag_us: Estados Unidos Centrais";
        if(message.guild.region === "us-east") var region = ":flag_us: Leste dos Estados Unidos";
        if(message.guild.region === "us-south") var region = ":flag_us: Sul dos Estados Unidos";
        if(message.guild.region === "us-west") var region = ":flag_us: Norte dos Estados Unidos Centrais";
        if(message.guild.region === "eu-west") var region = ":flag_eu: Europa Ocidental";

        let online = message.guild.members.filter(a => a.presence.status == "online").size;
        let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
        let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
        let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
        let totalmembros = message.guild.memberCount;
        let categoria = message.guild.channels.filter(a => a.type === "category").size;
        let texto = message.guild.channels.filter(a => a.type === "text").size;
        let voz = message.guild.channels.filter(a => a.type === "voice").size;

        let serverembed = new Discord.RichEmbed()
        .setDescription(`Algumas informações sobre o servidor ${message.guild.name}.`)
        .addField(":label:  Nome:", message.guild.name)
        .addField(":crown:  Dono:", message.guild.owner, true)
        .addField(":globe_with_meridians:  ID:", message.guild.id, true)
        .addField(`:calendar:  Servidor criado em:`, moment.utc(message.guild.createdAt).format('LLLL'), true)
        .setColor("RANDOM")
        .setThumbnail(sicon)
        .setAuthor(`${servernome}`, servericone)
        .addField(":earth_americas:  Região do Servidor:", region, true)
        .addField(`:inbox_tray:  Você entrou aqui em:`, moment(message.member.joinedAt).format('LLLL'))
        .addField(`:busts_in_silhouette:  Total de membros: ${message.guild.memberCount}`)
        .addField(`•  Canais e Categorias [${texto+voz+categoria}]`, `<:filefolder_1f4c1:558429093859688477>  Categorias [${categoria}]
<:texto:557382512406560769>  Canais de Texto [${texto}]
<:voz:557382504148107284>  Canais de Voz [${voz}]`)
        .addField(`:white_small_square:Membros [${totalmembros}]`, `Online: ${online}\nAusente: ${ausente}\n Ocupado: ${ocupado}\n Offline: ${offline}\n Bots: ${bot}`)
        .addField("Extra:", `:briefcase:  Cargos [${message.guild.roles.size - 1}]
:thinking:  Emojis Costumizados [${message.guild.emojis.size}]
:octagonal_sign:  Verificação:", ${serverLevel[message.guild.verificationLevel]}
💤  Canal AFK: ${message.guild.afkChannel ? message.guild.afkChannel : 'Não existe'}`)
        .setFooter(`Informações sobre o servidor ${message.guild.name}`, message.guild.iconURL)
        .setTimestamp();

   return message.channel.send(serverembed);
  }

  if(cmd === `${prefix}translate`) {
    var langs = {
      'af': 'Afrikaans',
      'sq': 'Albanian',
      'am': 'Amharic',
      'ar': 'Arabic',
      'hy': 'Armenian',
      'az': 'Azerbaijani',
      'eu': 'Basque',
      'be': 'Belarusian',
      'bn': 'Bengali',
      'bs': 'Bosnian',
      'bg': 'Bulgarian',
      'ca': 'Catalan',
      'ceb': 'Cebuano',
      'ny': 'Chichewa',
      'zh-cn': 'Chinese Simplified',
      'zh-tw': 'Chinese Traditional',
      'co': 'Corsican',
      'hr': 'Croatian',
      'cs': 'Czech',
      'da': 'Danish',
      'nl': 'Dutch',
      'en': 'English',
      'eo': 'Esperanto',
      'et': 'Estonian',
      'tl': 'Filipino',
      'fi': 'Finnish',
      'fr': 'French',
      'fy': 'Frisian',
      'gl': 'Galician',
      'ka': 'Georgian',
      'de': 'German',
      'el': 'Greek',
      'gu': 'Gujarati',
      'ht': 'Haitian Creole',
      'ha': 'Hausa',
      'haw': 'Hawaiian',
      'iw': 'Hebrew',
      'hi': 'Hindi',
      'hmn': 'Hmong',
      'hu': 'Hungarian',
      'is': 'Icelandic',
      'ig': 'Igbo',
      'id': 'Indonesian',
      'ga': 'Irish',
      'it': 'Italian',
      'ja': 'Japanese',
      'jw': 'Javanese',
      'kn': 'Kannada',
      'kk': 'Kazakh',
      'km': 'Khmer',
      'ko': 'Korean',
      'ku': 'Kurdish (Kurmanji)',
      'ky': 'Kyrgyz',
      'lo': 'Lao',
      'la': 'Latin',
      'lv': 'Latvian',
      'lt': 'Lithuanian',
      'lb': 'Luxembourgish',
      'mk': 'Macedonian',
      'mg': 'Malagasy',
      'ms': 'Malay',
      'ml': 'Malayalam',
      'mt': 'Maltese',
      'mi': 'Maori',
      'mr': 'Marathi',
      'mn': 'Mongolian',
      'my': 'Myanmar (Burmese)',
      'ne': 'Nepali',
      'no': 'Norwegian',
      'ps': 'Pashto',
      'fa': 'Persian',
      'pl': 'Polish',
      'pt': 'Portuguese',
      'ma': 'Punjabi',
      'ro': 'Romanian',
      'ru': 'Russian',
      'sm': 'Samoan',
      'gd': 'Scots Gaelic',
      'sr': 'Serbian',
      'st': 'Sesotho',
      'sn': 'Shona',
      'sd': 'Sindhi',
      'si': 'Sinhala',
      'sk': 'Slovak',
      'sl': 'Slovenian',
      'so': 'Somali',
      'es': 'Spanish',
      'su': 'Sundanese',
      'sw': 'Swahili',
      'sv': 'Swedish',
      'tg': 'Tajik',
      'ta': 'Tamil',
      'te': 'Telugu',
      'th': 'Thai',
      'tr': 'Turkish',
      'uk': 'Ukrainian',
      'ur': 'Urdu',
      'uz': 'Uzbek',
      'vi': 'Vietnamese',
      'cy': 'Welsh',
      'xh': 'Xhosa',
      'yi': 'Yiddish',
      'yo': 'Yoruba',
      'zu': 'Zulu'
  };

  if(args.length <= 1) {
    if(args[0] === 'list') {
        message.channel.send(':mag_right: | Esta é a lista de idiomas disponíveis.\n\n`' + Object.keys(langs).join('` `') + '`')
    } else {
    message.channel.send('Você não deu argumentos corretos. Use o comando de ajuda para ver a sintaxe correta...') }
} else {
    if(Object.keys(langs).some(a => args[0] === a)) {
        translate(args.slice(1).join(' '), {to: args[0]}).then(res => {
message.channel.send(':mag_right: | A tradução de `' + args.slice(1).join(' ') + '` para `' + args[0] + '` é:\n\n' + `"` + res.text + `"`)
}).catch(err => {
message.channel.send('Ocorreu um erro na tradução...')
});
    
    } else {
        message.channel.send('O idioma digitado não existe. Veja todos os idiomas disponíveis usando `ze.translate list`...')
    }
}

if(cmd === `${prefix}teste`) {
  let user = message.mentions.users.first() || message.author; 
        
  function afks(){
      var afkTimeout = message.channel.guild.afkTimeout
      if (afkTimeout == "60"){
          return "1 minuto"
      } else if (afkTimeout == "300"){
          return ("5 minutos")
      } else if (afkTimeout == "900"){
          return ("15 minutos")
      } else if (afkTimeout == "1800"){
          return ("30 minutos")
      } else if (afkTimeout == "3600"){
          return ("1 hora")
      }
  }
  
  function verificationLevel(){
var guildVerification = message.channel.guild.verificationLevel;
  if (guildVerification == "0") {
      return "Nenhum";
  } else if (guildVerification == "1") {
      return "Baixo"
  } else if (guildVerification == "2") {
      return "Médio"
  } else if (guildVerification == "3") {
      return "Alto"
  }
}
  
const embed = new Discord.RichEmbed()
      .setAuthor (message.guild, message.guild.iconURL)
      .addField(':person_with_pouting_face: Nome:',`${message.guild.name}`,true)
      .addField(`:family_wwgb: Usuários: `, `${message.guild.memberCount}`, true)
      .addField(`:id: ID Da Guilda:`, `${message.guild.id}`, true)
      .addField(':earth_asia: Região: ', `${message.guild.region}`, true)
      .addField(':crown: Dono:', `${message.guild.owner.user.username}`, true)
      .addField(':no_bell: Tempo de Ausência', `${afks()}`, true)
      .addField(':briefcase: Cargos do Servidor:', `${message.guild.roles.size}`, true)
      .addField(`:poop: Emojis:`, `${message.guild.emojis.size}` || 'Sem emojis!', true)
      .addField(':diamonds: Nível de verificação:', `${verificationLevel()}`, true)
      .addField(':mute: Canal AFK:', message.guild.afkChannel ? message.guild.afkChannel : 'Não existe', true)
      .addField(`:star2: Entrei em:`, `${moment(client.joinedAt).format('LLLL')}`)
      .addField(':date: Criado em:', `${moment(message.guild.createdAt).format('LLLL')}`)
      .addField(`Clique em 'OKAY' para ver o avatar da guilda!`, `[OKAY](message.guild.iconURL)`)
      .setThumbnail(message.guild.iconURL)
      .setColor(0x00AE86)    
      message.channel.send({embed: embed});
} 
  }

  if(cmd === `${prefix}deathnote`) {
    var texto = ['**Ryuk:** _Céu e inferno não existem. Não importa como você viveu sua vida, o pós-vida é o mesmo. A morte é igual para todos._', 
    '**Ryuk:** _Os humanos são tão interessantes._', 
    '**Ryuk para Light:** _Nós aliviamos o tédio um do outro por um bom tempo... Foi bastante divertido._', 
    '**L Lawliet:** _A paz jamais será conquistada com violência._', 
    '**L Lawliet:** _Yagami-san, se eu morrer nos próximos dias, o seu filho é o Kira._', 
    '**L Lawliet:** _Arriscar a vida e desperdiçá-la totalmente em vão, são coisas distintas._', 
    '**Light Yagami | Kira:** _Eu serei o deus do novo mundo!_', 
    '**Light Yagami | Kira:** _Esse mundo está podre, e quem apodreceu junto com ele deve morrer!_', 
    '**Light Yagami | Kira:** _Vejo todas essas pessoas... começo a achar que o mundo seria melhor sem elas._', 
    '**Near:** _Você é apenas um assassino, Light Yagami. E este caderno é a arma mais mortal de assassinato em massa na história da humanidade._', 
    '**Near:** _Se você não pode ganhar o jogo, se você não pode resolver o quebra-cabeça, então você não é nada além de um perdedor._', 
    '**Near:** _Não se preocupe, Comandante Rester, fazer suposições faz parte de qualquer investigação. Se estamos errados, tudo o que vai custar é uma desculpa._', 
    '**Soichiro Yagami:** _Light, meu filho... De um assassino para outro, eu te vejo no inferno!_'];
    const random = texto[Math.floor(Math.random() * texto.length)];
    moment.locale('pt-br')

    if (message.content.startsWith("!deathnote")) {
        let user = message.mentions.users.first().username;
    if (message.mentions.users.first()) {
    } else {
      
    return message.channel.send(message.author + " Você precisa dizer quem vai matar.");
    }
    
    let reason = args.slice(1).join(' ');
    if(reason.length < 1) reason = "Morreu de infarto!";

            const Discord = require('discord.js');
            var embed1 = new Discord.RichEmbed()
//            .setAuthor(message.author.username, message.author.displayAvatarURL)
//            .addField('Death Note <:deathnote:567453923854516236>', '**Vítima: **' + user + '\n **Causa: **' + reason) // '\n\n << Đ€ΔŦĦ ŇØŦ€ >>')
          .addField('Death Note <:deathnote:567453923854516236>', '**Vítima: **' + user + '\n **Causa: **' + reason + '\n\n << Đ€ΔŦĦ ŇØŦ€ >>')
            .addField('<:deathnote:567453923854516236> Death Note - Frases', random)
            .setFooter('Death Note de ' + message.author.username + ' | ' + `${moment().calendar()}`)
            .setColor("BLACK")
            message.channel.send(embed1)
  }
  }

  if(cmd === `${prefix}canalinfo`) {
    var a = message.mentions.channels.first() || message.channel
    function formatDate(date) {
      var monthNames = [
        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho", "Julho",
        "Augosto", "Setembro", "Outubro",
        "Novembro", "Dezembro"
      ];
      var diaNomes = [
        "Domingo", "Segunda-feira", "Terça-feira",
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
      ];
      var minutos = a.createdAt.getMinutes();
      var hora = a.createdAt.getHours();
      var day = a.createdAt.getDate();
      var monthIndex = a.createdAt.getMonth();
      var year = a.createdAt.getFullYear();
      var j = ("0" + minutos).slice(-2)
      var h = ("0" + hora).slice(-2)
  
      return day + ' de ' + monthNames[monthIndex] + ' de ' + year + ' às ' + h + ':' + j;
    }
  
    function topico() {
      if (a.topic) return "\n**Topico:** " + a.topic + "\n"
      if (!a.topic) return "\n"
    }
  
    message.channel.send(new Discord.RichEmbed()
      .setTitle(a.name)
      .setDescription("**Posição:** " + a.position + topico() + "**Criado em:** " +(formatDate(new Date()))))
  }
  
  if(message.content.startsWith(prefix + "canais")) {
    var a = message.guild.channels.map(m => m.name)
    message.channel.send(a)
  }

  if(cmd === `${prefix}userinfo3`) {
    let useer = message.mentions.users.first() || message.author;
    let roy = message.mentions.members.first() || message.member;

    if (useer.bot) {
      message.channel.send(new Discord.RichEmbed()
      .setDescription(`**Link para convite:** [Clique aqui](https://discordapp.com/oauth2/authorize?client_id=${useer.id}&scope=bot&permissions=0)`))
    }

    if (!useer.bot) {

    function formatDate(date) {
      var monthNames = [
        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho", "Julho",
        "Augosto", "Setembro", "Outubro",
        "Novembro", "Dezembro"
      ];
      var diaNomes = [
        "Domingo", "Segunda-feira", "Terça-feira",
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
      ];
      var minutos = roy.joinedAt.getMinutes();
      var hora = roy.joinedAt.getHours();
      var day = roy.joinedAt.getDate();
      var dia = roy.joinedAt.getDay();
      var monthIndex = roy.joinedAt.getMonth();
      var year = roy.joinedAt.getFullYear();
      var j = ("0" + minutos).slice(-2)

      return diaNomes[dia] + ', ' + day + ' de ' + monthNames[monthIndex] + ' de ' + year + ' às ' + hora + ':' + j;
    }

    function formatDato(date) {
      var monthNames = [
        "Janeiro", "Fevereiro", "Março",
        "Abril", "Maio", "Junho", "Julho",
        "Augosto", "Setembro", "Outubro",
        "Novembro", "Dezembro"
      ];
      var diaNomes = [
        "Domingo", "Segunda-feira", "Terça-feira",
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
      ];
      var minutos = useer.createdAt.getMinutes();
      var hora = useer.createdAt.getHours();
      var day = useer.createdAt.getDate();
      var dia = useer.createdAt.getDay();
      var monthIndex = useer.createdAt.getMonth();
      var year = useer.createdAt.getFullYear();
      var j = ("0" + minutos).slice(-2)

      return diaNomes[dia] + ', ' + day + ' de ' + monthNames[monthIndex] + ' de ' + year + ' às ' + hora + ':' + j;
    }

    function gume(){
      if (useer.presence.game) {
        if (useer.presence.game.type === 0) return "**Jogando** "+ useer.presence.game.name
        if (useer.presence.game.type === 1) return "**Transmitindo** "+ useer.presence.game.name
        if (useer.presence.game.type === 2) return "**Ouvindo** "+ useer.presence.game.name
        if (useer.presence.game.type === 3) return "**Assistindo** "+ useer.presence.game.name
      }
      if (!useer.presence.game) return "Sem atividade"
    }

    function stutus(){
        if (useer.presence.status === "dnd") return "Não pertube"
        if (useer.presence.status === "idle") return "Ausente"
        if (useer.presence.status === "online") return "Disponível"
        if (useer.presence.status === "offline") return "Offline"
      }
      function stji(){
        const on = bot.emojis.find("id", "438399398808911882");
        const off = bot.emojis.find("id", "438399398762905600");
        const idl = bot.emojis.find("id", "438399398796460032");
        const dn = bot.emojis.find("id", "438399396548313091");
          if (useer.presence.status === "dnd") return dn
          if (useer.presence.status === "idle") return idl
          if (useer.presence.status === "online") return on
          if (useer.presence.status === "offline") return off
        }
      /*  function oi(){
      }*/
      //console.log(check.message.content)
    message.channel.send(new Discord.RichEmbed()
    .setThumbnail(useer.avatarURL)
    .setColor(roy.highestRole.hexColor)
    .addField("Username:", useer.tag, true)
    .addField("ID:", useer.id, true)
    .addBlankField(false)
    .addField("Maior cargo:", roy.highestRole.name, true)
    .addField("Atividade:", gume(), true)
    .addField(stji()+" | Status:", stutus(), true)
    .addField("Entrou aqui em:", (formatDate(new Date())), false)
    .addField("Conta criada em:", (formatDato(new Date())), false)).catch(erro => console.log(erro))
  }}

  if(cmd === `${prefix}shipp`) {
    var a = Math.floor((Math.random() * 10) + 1);
    //parseInt
    var b = message.content.split(' ')
    var c = (b[1])
    var d = c.length
    var e = d / 3
    var f = e.toFixed(0)
    var som = d - f
    var al = Math.floor((Math.random() * (d - f + 1)) + f);
    var fo = c.split("").reverse().join("")
    var y = fo.slice(al)
    var fu = y.split("").reverse().join("")
    //var cok = message.content.substring(prefixo.length + 5, prefixo.length + 5 + al)

    var h = (b[2])
    var i = h.length
    var j = i / 3
    var k = j.toFixed(0)
    var m = Math.floor((Math.random() * (i - k + 1)) + k);
    var oo = m * (-1)
    var o = h.slice(m)

    message.channel.send("nome 1: " + c + "\nnome 2: "+h+"\nShip: " +fu+o+ "\n"+al)
    if(a === 1){
      message.channel.send("10%")
    }
    if(a === 2){
      message.channel.send("20%")
    }
    if(a === 3){
      message.channel.send("30%")
    }
    if(a === 4){
      message.channel.send("40%")
    }
    if(a === 5){
      message.channel.send("50%")
    }
    if(a === 6){
      message.channel.send("60%")
    }
    if(a === 7){
      message.channel.send("70%")
    }
    if(a === 8){
      message.channel.send("80%")
    }
    if(a === 9){
      message.channel.send("90%")
    }
    if(a === 10){
      message.channel.send("100%")
    }
  }

  if(cmd === `${prefix}unban`) {
    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You dont have permission to perform this command!")

    let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return message.channel.send("Please provide a user id to unban someone!")

    let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to perform this command!")|
    message.delete()
    try {
        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.tag} has been unbanned from the guild!`)
    } catch(e) {
        console.log(e.message)
    }

    let embed = new Discord.RichEmbed()
    .setColor(colours.redlight)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "unban")
    .addField("Moderated on:", `${bannedMember.username} (${bannedMember.id})`)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString())
    
        let sChannel = message.guild.channels.find(c => c.name === "punições")
        sChannel.send(embed)
  }

  if(cmd === `${prefix}kick2`) {

  }

  if(cmd === `${prefix}ban2`) {
    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to perform this command!")

    let banMember = message.mentions.members.first() || message.guild.members.get(args[0]) 
    if(!banMember) return message.channel.send("Please provide a user to ban!")
 
    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason given!"
 
    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have permission to perform this command")
 
    banMember.send(`Hello, you have been banned from ${message.guild.name} for: ${reason}`).then(() =>
    message.guild.ban(banMember, { days: 1, reason: reason})).catch(err => console.log(err))
 
    message.channel.send(`**${banMember.user.tag}** has been banned`).then(m => m.delete(5000))
 
     let embed = new Discord.RichEmbed()
     .setColor(colours.redlight)
     .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
     .addField("Moderation:", "ban")
     .addField("Mutee:", banMember.user.username)
     .addField("Moderator:", message.author.username)
     .addField("Reason:", reason)
     .addField("Date:", message.createdAt.toLocaleString())
     
         let sChannel = message.guild.channels.find(c => c.name === "punições")
         sChannel.send(embed)
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

  if(cmd === `${prefix}`) {
    
  }

});

bot.login(tokenfile.token);