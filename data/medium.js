const mediumQuestions = [
    {
        level: "Edasijõudnu",
        question: "Miks on sinivaalad võimelised kasvama nii tohutult suureks?",
        answers: [
            { text: "Nende luustik on kergem kui maismaaloomadel", correct: false, info: "Vale. Nende luud on tegelikult üsna tihedad." },
            { text: "Vee üleslükkejõud toetab nende kehamassi", correct: true, info: "Õige! Vesi hoiab nende rasket keha üleval, mis võimaldab neil kasvada suuremaks, kui maismaa gravitatsioon lubaks." },
            { text: "Nad söövad teisi vaalu", correct: false, info: "Vale. Sinivaalad on kiskjad, kes söövad peamiselt pisikesi krille (vähilaadseid)." }
        ]
    },
    {
        level: "Edasijõudnu",
        question: "Kuidas reguleerivad kõigusoojased loomad (nt sisalikud) oma kehatemperatuuri?",
        answers: [
            { text: "Nad värisevad, et sooja toota", correct: false, info: "Vale. Värisevad püsisoojased (imetajad), et energiat vabastada." },
            { text: "Nad liiguvad päikese kätte või varju", correct: true, info: "Õige! Neil puudub sisemine termostaat, seega nad peavad sooja saamiseks peesitama päikese käes." },
            { text: "Nad joovad kuuma vett", correct: false, info: "Vale. Vedeliku joomine ei muuda nende üldist ainevahetust piisavalt." }
        ]
    },
    {
        level: "Edasijõudnu",
        question: "Milline meel on nahkhiirtel pimedas jahtimiseks kõige paremini arenenud?",
        answers: [
            { text: "Suurepärane öönägemine", correct: false, info: "Vale. Enamik nahkhiiri ei näe pimedas kaugele, nende silmad on pigem nõrgad." },
            { text: "Eholokatsioon (ultraheli)", correct: true, info: "Õige! Nad saadavad välja helisid, mis põrkuvad saagilt tagasi, andes neile täpse pildi ümbrusest." },
            { text: "Tundlik haistmine", correct: false, info: "Vale. Haistmine aitab puuviljadel toituvaid nahkhiiri, aga mitte putukate püüdmist lennult." }
        ]
    },
    {
        level: "Edasijõudnu",
        question: "Mille poolest on eriline kahepaiksete (nt konnade) hingamine?",
        answers: [
            { text: "Nad hingavad ainult lõpustega", correct: false, info: "Vale. Täiskasvanud konnad kasutavad peamiselt kopse ja nahka." },
            { text: "Nad saavad hingata läbi oma naha", correct: true, info: "Õige! Konnadel on väga õhuke ja niiske nahk, mis võimaldab hapnikul otse vereringesse imenduda." },
            { text: "Nad ei vaja hingamiseks hapnikku", correct: false, info: "Vale. Kõik loomad vajavad eluspüsidmiseks hapnikku." }
        ]
    },
    {
        level: "Edasijõudnu",
        question: "Miks on kaameli küür talle kõrbes eluks vajalik?",
        answers: [
            { text: "Sinna kogutakse joogivett", correct: false, info: "Vale. See on levinud müüt; tegelikult vett seal ei hoita." },
            { text: "See on rasvavaru energia saamiseks", correct: true, info: "Õige! Küür koosneb rasvast, mida organism lagundab toidu ja vee puudusel energiaks ja ainevahetuslikuks veeks." },
            { text: "See peletab kiskjaid", correct: false, info: "Vale. Küür on puhtalt energia hoiustamiseks mõeldud organ." }
        ]
    },
    {
        level: "Edasijõudnu",
        question: "Mis on lindude sulgede peamine ülesanne lisaks lendamisele?",
        answers: [
            { text: "Nad aitavad vett juua", correct: false, info: "Vale. Suled on hoopis vett tõrjuvad." },
            { text: "Soojusisolatsioon (kehasoojuse hoidmine)", correct: true, info: "Õige! Udusuled hoiavad lindude keha soojana, takistades sooja õhu väljumist naha lähedalt." },
            { text: "Luustiku tugevdamine", correct: false, info: "Vale. Suled kinnituvad nahale ja tiibadele, mitte ei muuda luid tugevamaks." }
        ]
    },
    {
        level: "Edasijõudnu",
        question: "Kuidas kaitsevad kaheksajalad end vaenlaste eest?",
        answers: [
            { text: "Nad hammustavad mürgiste hammastega", correct: false, info: "Vale. Ainult vähesed liigid on ohtlikult mürgised." },
            { text: "Nad muudavad värvi ja eritavad tinti", correct: true, info: "Õige! Nad suudavad end ümbrusega maskeerida ja põgenemiseks tekitada pimestava tindipilve." },
            { text: "Nad ujuvad tagurpidi kiiremini kui kalad", correct: false, info: "Vale. Kuigi nad on kiired, on nende peamine kaitse siiski kavalus ja peitumine." }
        ]
    },
    {
        level: "Edasijõudnu",
        question: "Milline neist loomadest on 'mäletseja' (nt lehm, kits)?",
        answers: [
            { text: "Hobune", correct: false, info: "Vale. Hobused on küll taimetoidulised, aga neil on teistsugune seedesüsteem." },
            { text: "Kaelkirjak", correct: true, info: "Õige! Kaelkirjakud on samuti mäletsejad, neil on neljaosaline magu toidu seedimiseks." },
            { text: "Siga", correct: false, info: "Vale. Sead on segatoidulised ja neil on ühekamberne magu nagu inimestel." }
        ]
    },
    {
        level: "Edasijõudnu",
        question: "Miks on haidel vaja pidevalt edasi liikuda?",
        answers: [
            { text: "Et leida sooja vett", correct: false, info: "Vale. Paljud haid elavadki külmades vetes." },
            { text: "Et vesi liiguks üle nende lõpuste", correct: true, info: "Õige! Paljud hailijigid ei suuda vett aktiivselt pumbata, seega nad peavad ujuma, et hapnikku saada." },
            { text: "Et nende nahk ei kuivaks", correct: false, info: "Vale. Nad on veeelukad, kuivamine ei ole vee all probleemiks." }
        ]
    },
    {
        level: "Edasijõudnu",
        question: "Kuidas mesilased teistele teatavad, kus asuvad head lilleõied?",
        answers: [
            { text: "Nad teevad erilist häält", correct: false, info: "Vale. Heli ei anna täpset asukohta edasi." },
            { text: "Nad tantsivad 'ringtantsu' või 'väristustantsu'", correct: true, info: "Õige! Tantsu liigutused ja kiirus annavad teistele teada õite suuna ja kauguse päikese suhtes." },
            { text: "Nad jätavad maha lõhnaraja", correct: false, info: "Vale. Kuigi nad kasutavad feromoone, on tants peamine viis kaugele juhendamiseks." }
        ]
    }
];