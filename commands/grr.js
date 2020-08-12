const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

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

module.exports.help = {
    name: "grr"
  }