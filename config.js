module.exports = {
       autoLikeStatus: process.env.AUTO_LIKE_STATUS === 'true',
       downloadMediaStatus: process.env.DOWNLOAD_MEDIA_STATUS === 'true',
       sensorNumber: process.env.SENSOR_NUMBER === 'true',
       sendWelcomeMessage: process.env.SEND_WELCOME_MESSAGE === 'true',

       blackList: process.env.BLACK_LIST ? process.env.BLACK_LIST.split(',') : [],
       whiteList: process.env.WHITE_LIST ? process.env.WHITE_LIST.split(',') : [],

       fenixaboutype: process.env.FENIXABOUTYPE,
       ownerNumber: process.env.OWNER_NUMBER,
       userTimezone: process.env.USER_TIMEZONE,
       FenixName: process.env.FENIX_NAME,

       fenixwel1: process.env.FENIXWEL1,
       fenixwel2: process.env.FENIXWEL2,
       fenixwel3: process.env.FENIXWEL3,

       autodetect1: process.env.AUTODETECT1,
       autodetect2: process.env.AUTODETECT2,
       privateautodetect1: process.env.PRIVATEAUTODETECT1,
       privateautodetect2: process.env.PRIVATEAUTODETECT2,

       botDetails: {
           botName: process.env.BOT_NAME,
           botAge: process.env.BOT_AGE,
           botLocation: process.env.BOT_LOCATION,
           botEmail: process.env.BOT_EMAIL,
       },

       relaxWishes: process.env.RELAX_WISHES,

       mongoURI: process.env.MONGO_URI,
       dbName: process.env.DB_NAME,
       collections: {
           contacts: process.env.COLLECTIONS_CONTACTS,
           googleAuth: process.env.COLLECTIONS_GOOGLE_AUTH,
       },

       sendTranslations: [
           "send", "envoyer", "enviar", "invia", "senden", "ส่ง", "gửi", "отправить", "إرسال", "发送", "wysłać", "Sent", "Send", "one", "danna", "ewnna", "ewpm", "ewn", "එවන්න", "ඔනෙ", "ඔන", "දාන්න", "දම්", "එවපං", "දහම්", "එවපන්", "දපන්", "දාපන්", "දාපම්", "ඔනා", "ඔනේ", "එවහන්", "One", "දෙන්නකො", "ewan", "dapanko", "dapan"
       ],

       emojis: ["🌼", "😂", "🔥", "🤍", "🥰", "😎", "🪻", "🎉", "👑", "🛒", "🚀", "💎", "🌟", "🧘‍♀️", "🌈"]
   };