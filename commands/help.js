const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "yardım",
  description: "yardım",
  execute(client, message) {
  message.channel.send(' ``` **!oynat <şarkıismi>** : Belirttiğiniz Şarkıyı Sesli Odada Söyler \n **!duraklat** : Çalan Şarkıyı Durdurur \n **!devam** : Durdurduğunuz Şarkıyı Devam Ettirir \n **!döngü** : Çalan Şarkıyı Tekrarlar  \n **!geç** : Bi Sonraki Şarkıya Geçiş Yapar \n **!kuyruk** : Sıraya bir şarkı ekler \n **!durdur** : Şarkıyı Durdurur.```')    

}
}