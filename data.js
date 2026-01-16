/* data.js - 전체 내용을 복사해서 기존 파일에 덮어쓰세요 */

const musicData = [
    // [364번: 짧은 앞꾸밈음]
    {
        id: "364",
        title: "Kurzer Vorschlag",
        desc: "짧은 앞꾸밈음 (Acciaccatura)",
        sections: [
            {
                type: "Bild (표기)",
                german: "Kleine Achtelnote mit durchstrichenem Fähnchen, Hals zeigt nach oben.",
                translation: "작은 8분음표이며 깃(꼬리)에 사선이 그어져 있고, 기둥은 위쪽을 향합니다.",
                vocab: [{word:"durchstrichen",mean:"선을 그어 지운"}, {word:"das Fähnchen",mean:"작은 깃발"}],
                grammar: "mit + Dativ(3격) 규칙 때문에 durchstrichenem으로 어미가 변했습니다."
            },
            {
                type: "Ausführung (연주)",
                german: "Vorschlagsnote kommt entweder auf die Zählzeit der Hauptnote und verkürzt sie.",
                translation: "꾸밈음은 본음표의 박자에 등장하여 본음표의 길이를 줄여버립니다.",
                vocab: [{word:"die Zählzeit",mean:"박자"}, {word:"verkürzen",mean:"단축하다"}],
                grammar: "sie는 사람(그녀)이 아니라 여성명사 Hauptnote를 가리키는 대명사입니다."
            },
            {
                type: "Variante (엇박)",
                german: "Oder erscheint (verbreitet seit etwa 1850) unbetont kurz davor.",
                translation: "아니면 (1850년경부터 흔해진 방식인데) 강세 없이 본음표 바로 직전에 나옵니다.",
                vocab: [{word:"verbreitet",mean:"널리 퍼진"}, {word:"unbetont",mean:"강세 없는"}],
                grammar: "1850년(낭만파) 이후로는 박자보다 '먼저' 연주하는 게 유행이 되었습니다."
            }
        ]
    },

    // [365번: 긴 앞꾸밈음]
    {
        id: "365",
        title: "Langer Vorschlag",
        desc: "긴 앞꾸밈음 (Appoggiatura)",
        sections: [
            {
                type: "Bild (표기)",
                german: "Kleine Note, deren Wert meist der Kürzung der Hauptnote gleichkommt, ohne Durchstreichung.",
                translation: "작은 음표로 표기되며, 길이는 본음표가 줄어드는 만큼과 같고 사선이 없습니다.",
                vocab: [{word:"die Kürzung",mean:"단축"}, {word:"gleichkommen",mean:"~와 같다"}],
                grammar: "deren은 '그것의'라는 뜻으로 앞의 Note를 꾸며줍니다."
            },
            {
                type: "Ausführung (원리)",
                german: "Entspricht dem Vorhalt, Vorschlagsnote fällt mit der Zählzeit der Hauptnote zusammen.",
                translation: "전타음에 해당하며, 꾸밈음은 본음표의 박자와 일치하게(동시에) 시작됩니다.",
                vocab: [{word:"der Vorhalt",mean:"전타음"}, {word:"zusammenfallen",mean:"일치하다"}],
                grammar: "짧은 꾸밈음과 달리 무조건 박자의 시작점(On-beat)에 쿵! 하고 같이 떨어져야 합니다."
            }
        ]
    },

    // [375번: 글리산도 & 포르타멘토 (NEW)]
    {
        id: "375",
        title: "Glissando",
        desc: "글리산도와 포르타멘토 (음의 미끄러짐)",
        sections: [
            {
                type: "Definition (정의)",
                german: "Wenn zwei Töne so fließend miteinander verbunden werden, dass fast alle dazwischen liegenden Tonhöhen lückenlos kurz anklingen, dann spricht man von Glissando.",
                translation: "두 음이 아주 유려하게 연결되어 그 사이의 거의 모든 음높이가 빈틈없이 짧게 울릴 때, 이를 '글리산도'라고 합니다.",
                vocab: [{word:"fließend",mean:"흐르는 듯한"}, {word:"lückenlos",mean:"빈틈없는"}, {word:"anklingen",mean:"소리가 울리다"}],
                grammar: "'Wenn..., dann...' (만약 ~라면, 그러면 ~이다) 구조의 조건문입니다."
            },
            {
                type: "Technik (악기별 기법)",
                german: "Der Geiger erzielt diesen Effekt durch Gleiten des Fingers auf der Saite, der Posaunist durch Ziehen des Zuges.",
                translation: "바이올린 연주자는 현 위에서 손가락을 미끄러뜨려 이 효과를 내고, 트롬본 연주자는 슬라이드(Zug)를 당겨서 연주합니다.",
                vocab: [{word:"erzielen",mean:"달성하다/얻다"}, {word:"das Gleiten",mean:"미끄러짐"}, {word:"der Zug",mean:"당김/슬라이드"}],
                grammar: "각 악기별로 'durch ~(함으)로써'를 사용하여 수단을 설명하고 있습니다."
            },
            {
                type: "vs Portamento (비교)",
                german: "Während das Glissando vom Komponisten in der Regel vorgeschrieben wird, ist das Portamento ein persönliches Gestaltungsmittel des Interpreten.",
                translation: "글리산도는 대개 작곡가에 의해 지시(기보)되는 반면, 포르타멘토는 연주자의 개인적인 표현 수단입니다.",
                vocab: [{word:"vorgeschrieben",mean:"규정된/지시된"}, {word:"das Gestaltungsmittel",mean:"표현 수단"}, {word:"der Interpret",mean:"연주자/해석자"}],
                grammar: "'Während'(~인 반면에)를 사용하여 두 개념의 결정적인 차이(지시 vs 자유)를 대조하고 있습니다."
            }
        ]
    },

    // [376번: 트레몰로]
    {
        id: "376",
        title: "Tremolo",
        desc: "트레몰로 (떨림 연주)",
        sections: [
            {
                type: "Definition (정의)",
                german: "Als Tremolo (lat. = zittern) bezeichnet man das sehr rasche Wiederholen eines Tones.",
                translation: "트레몰로(라틴어 '떨다')란 한 음을 매우 빠르게 반복하는 것을 말합니다.",
                vocab: [{word:"bezeichnen",mean:"가리키다"}, {word:"rasch",mean:"빠른"}],
                grammar: "'Als A bezeichnet man B'는 'B를 A라고 정의한다'는 학술적 표현입니다."
            },
            {
                type: "Funktion (기능)",
                german: "Auf Tasteninstrumenten wird tremoliert, um den rasch verklingenden Akkord klanglich zu verlängern.",
                translation: "건반 악기에서는 금방 사라지는 화음의 소리를 길게 연장하기 위해 트레몰로를 사용합니다.",
                vocab: [{word:"verklingend",mean:"소리가 사라지는"}, {word:"verlängern",mean:"연장하다"}],
                grammar: "피아노는 소리가 금방 죽기 때문에, 소리를 잇기 위해 트레몰로를 쓴다는 뜻입니다."
            },
            {
                type: "Unterscheidung (구별)",
                german: "Das eigentliche Tremolieren ist von der gleichmäßigen Wiederholung zu unterscheiden.",
                translation: "실제 트레몰로(자유로운 속도)는 박자에 맞춘 균일한 반복과는 구별해야 합니다.",
                vocab: [{word:"eigentlich",mean:"실제의"}, {word:"unterscheiden",mean:"구별하다"}],
                grammar: "악보 (a)는 자유롭게 호로록, (b)는 박자 세면서 정확하게 연주하라는 차이입니다."
            }
        ]
    }
];
