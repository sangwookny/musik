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
    // ▼ 아래 코드를 복사해서 data.js의 마지막 콤마 뒤에 붙여넣으세요!
    {
        id: "376",
        title: "Tremolo",
        desc: "트레몰로 (떨림 연주)",
        sections: [
            {
                type: "1. Definition (정의)",
                german: "Als Tremolo (lat. = zittern) bezeichnet man das sehr rasche Wiederholen eines Tones, meist aber den schnellen mehrfachen Wechsel zweier Töne oder Akkordteile.",
                translation: "트레몰로(라틴어 '떨다')란 한 음을 매우 빠르게 반복하는 것을 말하지만, 대개는 두 개의 음이나 화음의 구성음을 여러 번 빠르게 교대하는 것을 의미합니다.",
                vocab: [
                    { word: "bezeichnen", mean: "가리키다, 칭하다 (als ~라고)" },
                    { word: "rasch", mean: "빠른, 신속한" },
                    { word: "der Wechsel", mean: "교대, 바꿈" }
                ],
                grammar: "'Als A bezeichnet man B'는 'B를 A라고 부른다/정의한다'라는 뜻의 전형적인 학술적 표현입니다."
            },
            {
                type: "2. Funktion (건반악기)",
                german: "Auf Tasteninstrumenten wird tremoliert, um den rasch verklingenden Akkord klanglich zu verlängern – z.B. ein Stilmittel der Blues-Pianisten.",
                translation: "건반 악기에서는 금방 사라지는 화음의 소리를 길게 연장하기 위해 트레몰로를 사용하는데, 예를 들어 블루스 피아니스트들의 연주 기법이 이에 해당합니다.",
                vocab: [
                    { word: "verklingend", mean: "소리가 사라져가는 (ver- 사라짐 + klingen 울림)" },
                    { word: "verlängern", mean: "연장하다, 길게 늘이다" },
                    { word: "das Stilmittel", mean: "표현 기법/수단" }
                ],
                grammar: "'um ... zu verlängern'은 '~하기 위하여'라는 목적을 나타내는 'um...zu' 구문입니다."
            },
            {
                type: "3. Unterscheidung (구별)",
                german: "Dabei ist das eigentliche Tremolieren, nämlich der möglichst rasche, rhythmisch aber nicht exakt festgelegte Wechsel (a), von der gleichmäßigen Wiederholung (b) zu unterscheiden.",
                translation: "이때 '실제 트레몰로', 즉 가능한 한 빠르지만 리듬이 딱 정해지지 않은 교대(a)는, 박자에 맞춰 균일하게 반복하는 '논 트레몰로'(b)와 구별해야 합니다.",
                vocab: [
                    { word: "eigentlich", mean: "실제의, 본래의" },
                    { word: "festgelegt", mean: "정해진, 고정된" },
                    { word: "unterscheiden", mean: "구별하다" }
                ],
                grammar: "'ist ... zu unterscheiden'은 '구별되어야 한다'는 수동의 의미(sein + zu 부정사)를 가집니다."
            }
        ]
    },
];
