/* data.js */

const musicData = [
    // 364번 항목
    {
        id: "364",
        title: "Kurzer Vorschlag",
        desc: "짧은 앞꾸밈음 (Acciaccatura)",
        sections: [
            {
                type: "1. Bild (표기법)",
                german: "Kleine Achtelnote mit durchstrichenem Fähnchen, Hals zeigt nach oben.",
                translation: "작은 8분음표이며 깃(꼬리)에 사선이 그어져 있고, 기둥은 위쪽을 향합니다.",
                vocab: [
                    { word: "die Achtelnote", mean: "8분음표 (여성명사)" },
                    { word: "das Fähnchen", mean: "작은 깃발/꼬리 (중성명사)" },
                    { word: "durchstrichen", mean: "선을 그어 지운, 사선의" }
                ],
                grammar: "'mit'(~와 함께) 뒤에는 항상 3격(Dative)이 옵니다. 그래서 'durchstrichenem'처럼 끝이 -em으로 변했습니다."
            },
            {
                type: "2. Ausführung (정박 연주)",
                german: "Vorschlagsnote kommt entweder auf die Zählzeit der Hauptnote und verkürzt sie.",
                translation: "꾸밈음은 본음표의 박자에 (딱 맞춰서) 등장하여 본음표의 길이를 줄여버립니다.",
                vocab: [
                    { word: "die Zählzeit", mean: "박자/카운트 (여성명사)" },
                    { word: "verkürzen", mean: "단축하다, 줄이다" }
                ],
                grammar: "마지막의 'sie'는 여자가 아니라, 앞의 'die Hauptnote(본음표)'를 가리키는 대명사입니다."
            },
            {
                type: "3. Ausführung (엇박 연주)",
                german: "Oder erscheint (verbreitet seit etwa 1850) unbetont kurz davor.",
                translation: "아니면 (1850년경부터 흔해진 방식인데) 강세 없이 본음표 바로 직전에 나옵니다.",
                vocab: [
                    { word: "verbreitet", mean: "널리 퍼진, 일반적인" },
                    { word: "unbetont", mean: "강세 없는, 여리게" },
                    { word: "davor", mean: "그 앞에 (직전에)" }
                ],
                grammar: "1850년(낭만파) 이후로는 박자보다 '먼저' 호로록 연주하는 게 유행이 되었다는 역사적 설명입니다."
            }
        ]
    },
    // 365번 항목
    {
        id: "365",
        title: "Langer Vorschlag",
        desc: "긴 앞꾸밈음 (Appoggiatura)",
        sections: [
            {
                type: "1. Bild (표기법)",
                german: "Kleine Note, deren Wert meist der Kürzung der Hauptnote gleichkommt, ohne Durchstreichung.",
                translation: "작은 음표로 표기되며, 그 길이는 대개 본음표가 줄어드는 만큼의 길이와 같고, 사선(줄)이 없습니다.",
                vocab: [
                    { word: "die Kürzung", mean: "단축, 줄임 (여성명사)" },
                    { word: "gleichkommen", mean: "~와 같다, 필적하다" },
                    { word: "ohne Durchstreichung", mean: "사선 긋기 없이" }
                ],
                grammar: "'deren'은 관계대명사 소유격으로, '그것(작은 음표)의 길이'라고 해석하면 됩니다."
            },
            {
                type: "2. Ausführung (원리)",
                german: "Entspricht dem Vorhalt, Vorschlagsnote fällt mit der Zählzeit der Hauptnote zusammen.",
                translation: "전타음(Suspension)에 해당하며, 꾸밈음은 본음표의 박자와 일치하게(동시에) 시작됩니다.",
                vocab: [
                    { word: "der Vorhalt", mean: "전타음/계류음 (남성명사)" },
                    { word: "zusammenfallen", mean: "일치하다, 동시에 일어나다" }
                ],
                grammar: "'entsprechen'(해당하다) 동사는 항상 3격(Dative)과 짝꿍입니다. 그래서 'dem Vorhalt'가 되었습니다."
            },
            {
                type: "3. Details (길이 계산)",
                german: "Z.B. bei zweizeitiger Hauptnote um die Hälfte, bei dreizeitiger Hauptnote um zwei Drittel.",
                translation: "예를 들어 2박자 음표에서는 절반을, 3박자 음표에서는 3분의 2를 가져갑니다.",
                vocab: [
                    { word: "zweizeitig", mean: "2박의 (형용사)" },
                    { word: "das Drittel", mean: "3분의 1 (분수)" },
                    { word: "ausgeschrieben", mean: "풀어서 쓰여진" }
                ],
                grammar: "긴 앞꾸밈음은 본음표의 길이를 상당히 많이(절반 이상) 뺏어오는 것이 특징입니다."
            }
        ]
    }
];