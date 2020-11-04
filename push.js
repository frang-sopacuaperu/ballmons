var webPush = require("web-push");

const vapidKeys = {
  publicKey:
    "BK-_5x5OtfkWZsQmHUtcTbIW5QPRYDY2uqLDVi5EymUetI-WW9yeG0kufsnw1qyukUbCFt9wj9HHvuknS_t9M84",
  privateKey: "N4XPS5nKjlcihIDqm3fT_3PVqKqktDV3JXYEsHMrYwY",
};

webPush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/eT85Shu1eqA:APA91bFKxEszie1473CpcQV2s1DicrnxW8faEIgpzuqBd8Aix104O2uNUP_J7wQndiLJkJYdVbVtGbBtcx6tJM5ybQG7LSh7CQ2mjax7H6Sxx3A9Bl5yAbzwSNSoBCFrFiXP_r2gyA6I",
  keys: {
    p256dh:
      "BMQecknFQp/wrEnC3FNDYS+5KsOUdAcY1VgPL49mT2+kTFech3349zVMpnzuTWTIp5SmRAUO12ZfywcjotadWY0=",
    auth: "fLANnhkbmh4UxdJvSuAvtg==",
  },
};
var payload = "Congratulations! You Got Ballmons App Notification!";

var options = {
  gcmAPIKey: "716718986488",
  TTL: 60,
};
webPush.sendNotification(pushSubscription, payload, options);
