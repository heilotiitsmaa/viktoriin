const expertQuestions = [
    {
        level: "Ekspert",
        question: "Mis juhtub fotosünteesi valgusetapis (valgusstaadiumis)?",
        answers: [
            { text: "Süsihappegaasist toodetakse glükoosi", correct: false, info: "Vale. See toimub pimedusstaadiumis (Calvini tsüklis)." },
            { text: "Vee molekulid lagundatakse ja tekib hapnik", correct: true, info: "Õige! Valgusenergia abil toimub fotolüüs, kus vesi laguneb ja eraldub hapnik ning vesinikioonid." },
            { text: "Tärklis muudetakse tagasi suhkruks", correct: false, info: "Vale. See on varuainete kasutamine, mitte valgusetapi osa." }
        ]
    },
    {
        level: "Ekspert",
        question: "Miks on Calvini tsükli (pimedusstaadiumi) toimumine öösel piiratud, kuigi see ei vaja otsest valgust?",
        answers: [
            { text: "Öösel ei ole piisavalt süsihappegaasi", correct: false, info: "Vale. Süsihappegaas on õhus alati kättesaadav." },
            { text: "See vajab valgusetapis toodetud energiat (ATP ja NADPH)", correct: true, info: "Õige! Pimedusstaadium vajab valgusetapi 'toodangut'. Kui valgust pole, ammenduvad need varud kiiresti." },
            { text: "Taimed magavad ja ensüümid ei tööta", correct: false, info: "Vale. Taimedel puudub närvisüsteemil põhinev uni; takistus on energeetiline." }
        ]
    },
    {
        level: "Ekspert",
        question: "Kuidas mõjutab valguse lainepikkus fotosünteesi efektiivsust?",
        answers: [
            { text: "Kõik värvused on võrdselt efektiivsed", correct: false, info: "Vale. Pigmentidel on kindlad neeldumisspektrid." },
            { text: "Kõige efektiivsemad on punane ja sinine valgus", correct: true, info: "Õige! Klorofüll neelab kõige paremini spektri otstes olevat valgust ja peegeldab rohelist." },
            { text: "Roheline valgus annab kõige rohkem energiat", correct: false, info: "Vale. Rohelist valgust peegeldavad taimed tagasi, mistõttu nad ongi rohelised." }
        ]
    },
    {
        level: "Ekspert",
        question: "Mis on fotorespiratsioon ja miks see on taimele kahjulik?",
        answers: [
            { text: "See on liigne aurustumine lehtedest", correct: false, info: "Vale. See on seotud gaasivahetusega, mitte puhta aurustumisega." },
            { text: "Protsess, kus hapnik seotakse suhkru asemel", correct: true, info: "Õige! See juhtub kuuma ilmaga ja kulutab taime energiat ilma suhkrut tootmata." },
            { text: "See on taime kaitse liigse UV-kiirguse eest", correct: false, info: "Vale. See on pigem ensüümi Rubisco ebatäpsusest tingitud kadu." }
        ]
    },
    {
        level: "Ekspert",
        question: "Milline on ensüümi Rubisco roll fotosünteesis?",
        answers: [
            { text: "See lagundab vee molekule", correct: false, info: "Vale. Vett lagundab valgusenergia fotosüsteem II-s." },
            { text: "See fikseerib süsihappegaasi õhust", correct: true, info: "Õige! Rubisco on maailma levinuim valk, mis aitab süsinikku orgaanilisse vormi viia." },
            { text: "See transpordib suhkruid juurtesse", correct: false, info: "Vale. Transpordiga tegeleb niineosa kude." }
        ]
    },
    {
        level: "Ekspert",
        question: "Kuidas on kohastunud C4-taimed (nt mais) võrreldes tavaliste C3-taimedega?",
        answers: [
            { text: "Nad ei vaja fotosünteesiks vett", correct: false, info: "Vale. Kõik taimed vajavad vett." },
            { text: "Nad suudavad fotosünteesida ka suletud õhulõhededega", correct: true, info: "Õige! Nad koguvad CO2 efektiivsemalt, vältides fotorespiratsiooni kuumas kliimas." },
            { text: "Nad fotosünteesivad ainult öösel", correct: false, info: "Vale. See on CAM-taimede (nt kaktused) strateegia." }
        ]
    },
    {
        level: "Ekspert",
        question: "Mis on ATP roll taimeraku ainevahetuses?",
        answers: [
            { text: "See on peamine ehitusmaterjal", correct: false, info: "Vale. ATP on dünaamiline molekul, mitte püsiv struktuur." },
            { text: "See on universaalne energiakandja", correct: true, info: "Õige! ATP abil viiakse läbi kõik energiat nõudvad reaktsioonid rakus." },
            { text: "See on päriliku info hoidja", correct: false, info: "Vale. Pärilikkust kannab DNA." }
        ]
    },
    {
        level: "Ekspert",
        question: "Kuidas mõjutab 'kasvuhooneefekt' (kõrge CO2 tase) taimede kasvu laboritingimustes?",
        answers: [
            { text: "Taimed hukkuvad mürgistuse tõttu", correct: false, info: "Vale. CO2 on taimedele toit, mitte mürk." },
            { text: "Fotosüntees kiireneb, kuni muud tegurid piiravad", correct: true, info: "Õige! Rohkem tooret (CO2) võimaldab toota rohkem suhkrut, kui valgust ja vett on piisavalt." },
            { text: "Taimed lõpetavad hapniku eraldamise", correct: false, info: "Vale. Fotosünteesi kiirenemisel hapniku eraldumine hoopis kasvab." }
        ]
    },
    {
        level: "Ekspert",
        question: "Miks on fosfor ja lämmastik hädavajalikud fotosünteesi toimimiseks?",
        answers: [
            { text: "Nad annavad lehtedele kaalu", correct: false, info: "Vale. Neil on keemiline roll." },
            { text: "Nad kuuluvad ATP, DNA ja klorofülli koostisesse", correct: true, info: "Õige! Ilma nende elementideta ei saa taim ehitada energiakandjaid ega ensüüme." },
            { text: "Nad peegeldavad päikeseenergiat", correct: false, info: "Vale. Nad osalevad energia salvestamises, mitte peegeldamises." }
        ]
    },
    {
        level: "Ekspert",
        question: "Mis juhtub turgorrõhuga, kui taimerakk asetatakse kangesse soolalahusesse?",
        answers: [
            { text: "Rakk lõhkeb liigse vee tõttu", correct: false, info: "Vale. See juhtuks puhtas vees (osmoos suunaga sisse)." },
            { text: "Vesi väljub rakust ja turgorrõhk kaob (plasmolüüs)", correct: true, info: "Õige! Vesi liigub sealt, kus teda on rohkem, sinna, kus on soola rohkem." },
            { text: "Turgorrõhk kasvab, sest sool tugevdab kesta", correct: false, info: "Vale. Sool ei tugevda kesta, vaid muudab osmootset tasakaalu." }
        ]
    }
];