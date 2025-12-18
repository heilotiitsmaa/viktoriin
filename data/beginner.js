const beginnerQuestions = [
    {
        level: "Algaja",
        question: "Millised on kolm põhivärvi, millest ei saa teisi värve kokku segada?",
        answers: [
            { text: "Punane, kollane, sinine", correct: true, info: "Õige! Need on primaarvärvid, millest algab kogu värviring." },
            { text: "Roheline, lilla, oranž", correct: false, info: "Vale. Need on sekundaarvärvid, mis saadakse põhivärvide segamisel." },
            { text: "Must, valge, hall", correct: false, info: "Vale. Need on akromaatilised ehk värvitud toonid." }
        ]
    },
    {
        level: "Algaja",
        question: "Mis värvi saame, kui segame omavahel sinise ja kollase?",
        answers: [
            { text: "Oranž", correct: false, info: "Vale. Oranži saame punase ja kollase segamisel." },
            { text: "Roheline", correct: true, info: "Õige! Sinine ja kollane annavad kokku rohelise." },
            { text: "Lilla", correct: false, info: "Vale. Lilla saame sinise ja punase segamisel." }
        ]
    },
    {
        level: "Algaja",
        question: "Kuidas nimetatakse värve, mis asuvad värviringis vastamisi (nt sinine ja oranž)?",
        answers: [
            { text: "Sarnased värvid", correct: false, info: "Vale. Sarnased värvid asuvad värviringis kõrvuti." },
            { text: "Vastandvärvid", correct: true, info: "Õige! Neid nimetatakse komplementaarvärvideks ja nad muudavad teineteist säravamaks." },
            { text: "Tumedad värvid", correct: false, info: "Vale. Vastandvärvid võivad olla nii heledad kui tumedad." }
        ]
    },
    {
        level: "Algaja",
        question: "Millist emotsiooni või seisundit seostatakse tavaliselt sinise värviga?",
        answers: [
            { text: "Viha ja energia", correct: false, info: "Vale. Seda seostatakse tavaliselt punasega." },
            { text: "Rahu ja usaldus", correct: true, info: "Õige! Sinist peetakse rahustavaks ja professionaalseks värviks." },
            { text: "Lõbusus ja nälg", correct: false, info: "Vale. Kollane ja oranž on need, mis ergutavad isu ja tuju." }
        ]
    },
    {
        level: "Algaja",
        question: "Mis on 'toon' (ingl. k. hue) värviõpetuse tähenduses?",
        answers: [
            { text: "Värvi puhtus või erksus", correct: false, info: "Vale. See on küllastus (saturation)." },
            { text: "Värvuse nimi (nt punane, roheline)", correct: true, info: "Õige! Toon tähistab konkreetset kohta valgusspektris." },
            { text: "Värvi heledus või tumedus", correct: false, info: "Vale. See on värvi väärtus (value)." }
        ]
    },
    {
        level: "Algaja",
        question: "Milline neist on soe värv?",
        answers: [
            { text: "Türkiis", correct: false, info: "Vale. Türkiis on külm, sinakasroheline toon." },
            { text: "Oranž", correct: true, info: "Õige! Oranž, punane ja kollane meenutavad tuld ja päikest." },
            { text: "Sirelililla", correct: false, info: "Vale. Enamik lillasid toone liigitatakse külmade värvide alla." }
        ]
    },
    {
        level: "Algaja",
        question: "Mida tähendab akromaatiline värvigamma?",
        answers: [
            { text: "Ainult ühte värvi toonid", correct: false, info: "Vale. See oleks monokroomne gamma." },
            { text: "Ilma värvita (must, valge, hallid)", correct: true, info: "Õige! Akromaatiline tähendab sõna-sõnalt 'värvitut'." },
            { text: "Vikerkaarevärvid", correct: false, info: "Vale. Vikerkaares on spektrivärvid." }
        ]
    },
    {
        level: "Algaja",
        question: "Mida tähistab lühend RGB, mida kasutatakse arvutiekraanidel?",
        answers: [
            { text: "Red, Green, Blue", correct: true, info: "Õige! Ekraanid segavad valgust nendes kolmes värvis, et luua miljoneid toone." },
            { text: "Red, Gray, Black", correct: false, info: "Vale. Hall ja must ei ole ekraani baasvärvid." },
            { text: "Real Glossy Brightness", correct: false, info: "Vale. See on väljamõeldud termin." }
        ]
    },
    {
        level: "Algaja",
        question: "Millist värvimudelit kasutatakse trükitööstuses (paberile trükkimisel)?",
        answers: [
            { text: "RGB", correct: false, info: "Vale. RGB on valgusandmete (ekraanide) jaoks." },
            { text: "CMYK", correct: true, info: "Õige! Cyan, Magenta, Yellow, Key (must) on standardtrüki värvid." },
            { text: "HSL", correct: false, info: "Vale. See on Hue, Saturation, Lightness mudel disainimiseks." }
        ]
    },
    {
        level: "Algaja",
        question: "Mis juhtub, kui liidame kokku kõik kolm RGB valguskiirt täisvõimsusel?",
        answers: [
            { text: "Saame musta värvi", correct: false, info: "Vale. Must tekib valguse puudumisel või CMYK värvide segamisel." },
            { text: "Saame valge valguse", correct: true, info: "Õige! RGB on aditiivne mudel – valguse liitmisel saame valge." },
            { text: "Saame pruuni värvi", correct: false, info: "Vale. Pruun tekib tavaliselt poriste pigmentide segamisel." }
        ]
    }
];