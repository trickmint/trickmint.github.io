// Config
var spearmints = [
        'woives is SO SWAG Super swag......png', "_AWESOME SWAG NEW REF BY LUNA.png", 'AAAAAAAAAAAAAAAAAAAAAAAA.png', 'among usmint.png', "ANGEL IS  AWESOME.png", "angel is aswasg as fuck oooh.png",
        "angel pogg.png", "animemint.png", "anna mutuals im in this pog.png", "anna ur so cool what.png", "BATTER IS SWAG.png",
        "birthdaymint 2.jpg", "birthdaymint.png", "BLANK SO COOL.jpg", "blep boys.png", "btach_2_qt.png", "comm by anna.jpg", "comm by cindertabglow.png",
        "comm by cl0wn_house.jpg", "eevbat wonderful image.png", "elisttm is cool.png", "glamrock spearmint.png", "he has a spear what the fuck.jpeg", "he in the hoodie wtf.png",
        "HEEHAHAHAHHAEHEHEHAHEHEAHHA.png", "kawaii is so cool and awesome.png", "kaylen is so awesome wooaaa.png", "kier is so awesome.png", "kliffnyundrscor is SWAG.jpg",
        "kuro is awesome.png", "little goober.gif", "LITTLE GUY_ THE LITTLE GOOBER.png", "luna awesom.png", "luna is cool.png", "Minty Icon by Lycan.png", "minty_pride.png",
        "moriza is awesome.jpg", "no way spearmint youtooz.png", "ora is the cool.png", "president.png", "shamaxw.jpg", "skedgyedgy cool.png", "sleepmint.png", "spearminiko but i made it.png",
        "SPEARMINIKO.png", "spearmint irl.png", "spearmint lick.gif", "spearmint picrew how.png", "spearmint sar.jpg", "spearmint smoking a blunt BUT BY TES SO SWAG.png",
        "spearmint smoking a blunt.png", "spearmint tails.png", "Spearmint.png", "Spearmint_Pride--skedgy_ur_so_awesome_omg_ur_the_best.png", "starluii.png", "SUPER FOX.png",
        "taking a vacation to chernobyl.png", "tbs is cool.png", "tes so swag.png", "teserex is once again swag as fuck.png", "teserex is so cool wtf.jpg", "teserex pogger better.png",
        "teserex pogger3.jpg", "teserex so cool.jpg", "teserex so cool.png", "thank u random discord user.png", "THE ACES.png", "the family.png", "the gang.jpeg", "trucoblepta.jpg",
        "video game fox.png", "waddle_midori awesome !!!!!!!!!.jpg", "why is anna so cool wtf.png", "WOAH MINTY IS SO COOL AND AWESOME.jpg", "woives ilyyyyy slash p this is so good.png",
        "wtf why does it look so good how.png", "zzzzzzzzzz old ref by cl0wn.png", "ioletsgo swag comm sunglasses.png", "thats a lot ofp eople.jpg", "doodled guyy.jpg", "PRIDEE aaahhhh sdfdsjf.jpg", 
        "little spearmint.png", "MASTARDRAWS IS SO FUCKING COOL!!!!!.jpg", "MURDER KILL!!!.png", "FaKKFM4WYAE7GxR.jpg", "murdering cere.png", "spearmint hacks a 3ds.png", "Fb5D3eAWQAImdze.jpg",
        "skedgychat.png", "extrasome so swag......jpg", "luna so coolllllll jhsdfksdhjf.png", "the kill face.png", "MAID.png", "FLUFFY SO COOL.png"
    ];

var artists = [
        'woives', "luna855", 'me!', 'teserex', 'angelinda', "angelinda", "angelinda", "oracoreri", "aqttt_", "aqttt_", "crepebatter", "N/A", "teserex",
        "blankkamikat", " teserex", "pastaiils", "aqttt_", "cindertobglow", "gloomybearIRL", "eevbat", "elisttm", "vinnie", "luna855", "teserex", "frootlooptime",
        "kawaii_beardeddragon", "N/A", "nutsndolts", "kliffnyundrscor", "kuro2427", "tiredraccoon_", "me!", "luna855", "luna855", "lycanthrOwOpe", "aqttt_", "M0RlZA",
        "me!", "oracoreri", "aqttt_", "shamaxw", "skedgyedgy", "luna855", "me!", "skedgyedgy", "luna855", "kuro2427", "woives", "heydudettes", "teserex", "me!", "me!",
        "audio_ori", "skedgyedgy", "starluii", "woives", "aqttt_", "N/A", "teserex", "teserex", "teserex", "teserex", "teserex", "teserex", "teserex", "N/A",
        "skedgyedgy", "woives", "luna855", "teserex", "oracoreri", "waddle_midori", "aqttt_", "somemintbunny", "woives", "aqttt_", "gloomybearIRL", "ioIetsgo", "officialjoltmax", "cindertobglow", 
        "cindertobglow", "dinguscarrot", "mastardraws", "skedgyedgy", "teserex", "skedgyedgy", "audio_ori", "civilized_furry", "skedgyedgy", "extrasome5", "luna855", "JUSTICE61805644",
        "TheBigK#0001", "fluffy_yyy"
    ];

var img;
var artist;
var div;
var prev = -1;

function refreshSpearmint() {
    let rand;
    do {
        rand = Math.floor(Math.random() * spearmints.length);
    } while (rand == prev)
    prev = rand;

    img.onload = hideLoadmint;
    div.classList.add("loadingmints");
    img.src = "spearmint/" + spearmints[rand];
    artist.textContent = `by ${artists[rand]}`;
}
function onLoad() {
    img = document.getElementById("spearmint");
    artist = document.getElementById("spearCred");
    div = document.getElementById("divmints");

    refreshSpearmint();
}
function hideLoadmint() {
    div.classList.remove("loadingmints");
}

window.addEventListener ("load", onLoad)