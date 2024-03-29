const answerList = [
  {
    id: 0,
    m: "ENTJ",
    t: "하이볼",
    a: "<b>지도자형(ENTJ)</b>인 당신에게는,<br/> 위스키나 브랜디에 탄산수나 각종 음료를 넣고 얼음을 넣어 만드는 칵테일 <b><하이볼></b>이 잘 어울립니다.<br/><br/> 당신은 논리적이고 직관적이며, 문제에 대해 깊이 생각할 수 있으면서도 외향적인 사람입니다.<br/> ENTJ 유형을 나타내는 단어는 <b>외향, 직관, 사고, 판단</b>입니다.<br/><br/> 고급스러운 위스키에 탄산의 다채로움이 더해져 매력적인 풍미를 자랑하는 하이볼 한 잔 어떠신가요?",
    good: "사케",
    good_m: "INFP",
    good_id: 9,
    bad: "막걸리",
    bad_m: "ESFJ",
    bad_id: 2,
  },
  {
    id: 1,
    m: "ENFJ",
    t: "피치 크러시",
    a: "<b>언변능숙형(ENFJ)</b>인 당신에게는,<br/> 복숭아 맛이 주는 신선한 감미로움과 레몬, 크랜베리 주스의 새콤한 과일 맛이 혼합된 칵테일 <b><피치 크러시></b>가 잘 어울립니다.<br/><br/> 당신은 매우 윤리적이고 매우 이상적입니다. 다른 사람들과 관계 맺는 것을 좋아하며 사람을 끌어당기는 힘이 있습니다.<br/> ENFJ 유형을 나타내는 단어는 <b>외향, 직관, 감정, 판단</b>입니다.<br/><br/> 적당한 알코올과 과일 향이 잘 섞여 누구나 좋아하는 칵테일인 피치 크러시 한 잔 어떠신가요?",
    good: "꼬냑",
    good_m: "INTP",
    good_id: 8,
    bad: "와인",
    bad_m: "ESTJ",
    bad_id: 3,
  },
  {
    id: 2,
    m: "ESFJ",
    t: "막걸리",
    a: "<b>친선도모형(ESFJ)</b>인 당신에게는,<br/> 은은하게 구수하고 약간 달달한 맛과 탄산이 느껴지는 <b><막걸리></b>가 잘 어울립니다.<br/><br/> 당신은 대인관계에서만 뛰어나기보다 사람들과의 관계를 간절히 원합니다. 다른 사람들에게 주목받는 것을 좋아하지만 도움이 필요한 사람들을 돕기 위해 노력하는 편입니다.<br/> ESFJ 유형을 나타내는 단어는 <b>외향, 감각, 감정, 판단</b>입니다.<br/><br/> 소박한 느낌이면서도 다른 음식들과도 아주 잘 어울리는 막걸리 한 잔 어떠신가요?",
    good: "보드카",
    good_m: "ISTP",
    good_id: 11,
    bad: "하이볼",
    bad_m: "ENTJ",
    bad_id: 0,
  },
  {
    id: 3,
    m: "ESTJ",
    t: "와인",
    a: "<b>사업가형(ESTJ)</b>인 당신에게는,<br/> 깊은 풍미가 느껴지는 신선한 포도를 원료로 한 과실주인 <b>와인</b>이 잘 어울립니다.<br/><br/> 당신은 전통적 가치관을 강하게 믿는 경향이 있으며 항상 옳다고 생각되는 일을 하려고 합니다. 타고난 지도자로서 주변의 모든 사람들을 보살피는 편입니다.<br/> ESTJ 유형을 나타내는 단어는 <b>외향, 감각, 사고, 판단</b>입니다.<br/><br/> 고급스러운 자리에서 다양한 요리에 잘 어울리는, 묵직한 바디감을 가진 와인 한 잔 어떠신가요?",
    good: "캔맥주",
    good_m: "ISFP",
    good_id: 10,
    bad: "피치 크러시",
    bad_m: "ENFJ",
    bad_id: 1,
  },
  {
    id: 4,
    m: "ENTP",
    t: "흑맥주",
    a: "<b>발명가형(ENTP)</b>인 당신에게는,<br/> 일반적인 맥주와는 색다른 풍취와 빛깔을 가진 <b>흑맥주</b>가 잘 어울립니다.<br/><br/> 당신은 다른 사람들과 반대되는 성향을 가지고 있으며 종종 세계에서 혁신적인 인물로 나타납니다. 외향적이면서도 의미 없는 대화는 싫어하며 바로 요점을 말하기를 좋아합니다.<br/> ENTP 유형을 나타내는 단어는 <b>외향, 직관, 사고, 인식</b>입니다.<br/><br/>흔한 맥주가 질리셨다면, 검은 빛깔과 뛰어난 풍미의 흑맥주 한 잔 어떠신가요?",
    good: "안동소주(전통주)",
    good_m: "ISTJ",
    good_id: 15,
    bad: "캔맥주",
    bad_m: "ISFP",
    bad_id: 10,
  },
  {
    id: 5,
    m: "ENFP",
    t: "샴페인",
    a: "<b>스파크형(ENFP)</b>인 당신에게는,<br/> 여러 사람들과 함께하는 파티에서 주로 즐기는 술인 <b>샴페인</b>이 잘 어울립니다.<br/><br/> 당신은 매우 사교적이며 다른 사람들과 시간을 보내고 관계를 형성하는 것을 좋아합니다. 자신의 감정에 이끌려가는 편이나 매우 생각이 깊고 통찰력이 있는 특징이 있습니다.<br/> ENFP 유형을 나타내는 단어는 <b>외향, 직관, 감정, 인식</b>입니다.<br/><br/>기분 좋은 자리에서 톡톡 튀는 탄산이 어우러지는 예쁜 샴페인 한 잔 어떠신가요?",
    good: "소주",
    good_m: "ISFJ",
    good_id: 14,
    bad: "보드카",
    bad_m: "ISTP",
    bad_id: 11,
  },
  {
    id: 6,
    m: "ESFP",
    t: "생맥주",
    a: "<b>슈퍼스타형(ESFP)</b>인 당신에게는,<br/> 신선한 맥주의 향미를 있는 그대로 즐길 수 있는 <b>생맥주</b>가 잘 어울립니다.<br/><br/> 당신은 단순히 주목받는 것을 즐기는 것이 아니라 주목받는 상황에서 자신의 진가를 발휘합니다. 일반적으로 주목을 끄는데 매우 능숙하며 몇 시간 동안의 대화를 끝까지 재미있게 유지할 수 있습니다.<br/> ESFP 유형을 나타내는 단어는 <b>외향, 감각, 인식, 감정</b>입니다.<br/><br/>편안한 분위기의 술자리에서 좋아하는 사람들과 생맥주 한 잔 어떠신가요?",
    good: "복분자주",
    good_m: "INFJ",
    good_id: 13,
    bad: "꼬냑",
    bad_m: "INTP",
    bad_id: 8,
  },
  {
    id: 7,
    m: "ESTP",
    t: "고량주",
    a: "<b>활동가형(ESTP)</b>인 당신에게는,<br/> 높은 도수의 부드럽고 깔끔한 뒷맛이 인상적인 <b>고량주</b>가 잘 어울립니다.<br/><br/> 당신은 화끈한 행동파 스타일로 매 삶에서 개인적인 자유를 즐기는 편입니다. 규칙을 좋아하지 않으며 추상적인 생각에 대한 걱정을 하지 않으며 현재에 집중하는 편입니다.<br/> ESTP 유형을 나타내는 단어는 <b>외향, 감각, 사고, 인식</b>입니다.<br/><br/> 입으로 들이킬 때부터 목으로 넘길 때까지 강렬한 인상을 남기지만 깔끔한 뒷맛을 가진 고량주 한 잔 어떠신가요?",
    good: "위스키",
    good_m: "INTJ",
    good_id: 12,
    bad: "사케",
    bad_m: "INFP",
    bad_id: 9,
  },
  {
    id: 8,
    m: "INTP",
    t: "꼬냑",
    a: "<b>아이디어 뱅크형(INTP)</b>인 당신에게는,<br/> 뛰어난 복합미와 풍성한 깊이감이 입안에서 느껴지는 <b>꼬냑</b>이 잘 어울립니다.<br/><br/> 당신은 종종 매우 흥미롭고 혁신적인 새로운 이론들을 만들어내는 편입니다. 이해가 빠르고 직관적으로 통찰하는 능력이 있으며 지적 호기심이 많아 분석적이고 논리적인 편입니다.<br/> INTP 유형을 나타내는 단어는 <b>내향, 직관, 사고, 인식</b>입니다.<br/><br/> 창의력 넘치는 당신처럼 여러 가지의 풍부한 맛과 향을 느낄 수 있는 꼬냑 한 잔 어떠신가요?",
    good: "피치 크러시",
    good_m: "ENFJ",
    good_id: 1,
    bad: "생맥주",
    bad_m: "ESFP",
    bad_id: 6,
  },
  {
    id: 9,
    m: "INFP",
    t: "사케",
    a: "<b>잔다르크형(INFP)</b>인 당신에게는,<br/> 이국적인 향미를 느낄 수 있으며 깨끗하고 깔끔한 맛을 가진 <b>사케</b>가 잘 어울립니다.<br/><br/> 당신은 상상력이 매우 뛰어나고 자신의 환상과 꿈에 깊게 빠져드는 경향이 있습니다. 자신의 삶에 대한 의미를 깊게 생각할 수 있는 곳에 혼자 있는 것을 선호하는 편입니다.<br/> INFP 유형을 나타내는 단어는 <b>내향, 직관, 감정, 인식</b>입니다.<br/><br/> 아늑한 공간에서 맛있는 음식과 함께 즐기는 깔끔한 사케 한 잔 어떠신가요?",
    good: "하이볼",
    good_m: "ENTJ",
    good_id: 0,
    bad: "고량주",
    bad_m: "ESTP",
    bad_id: 7,
  },
  {
    id: 10,
    m: "ISFP",
    t: "캔맥주",
    a: "<b>성인군자형(ISFP)</b>인 당신에게는,<br/> 간편하게 즐길 수 있는 소박하면서 친숙한 술인 <b>캔맥주</b>가 잘 어울립니다.<br/><br/> 당신은 따뜻하고 친절하지만 혼자 일하는 것을 좋아하며 자신의 목표를 찾아 시도하는 것을 좋아합니다. 갈등을 싫어하기 때문에 평화주의자로도 여겨지며 내향형 중에서는 가장 외향적인 편입니다.<br/> ISFP 유형을 나타내는 단어는 <b>내향, 감각, 감정, 인식</b>입니다.<br/><br/> 다양한 음식과 잘 어울리면서 편안하게 마실 수 있는 캔맥주 한 잔 어떠신가요?",
    good: "와인",
    good_m: "ESTJ",
    good_id: 3,
    bad: "흑맥주",
    bad_m: "ENTP",
    bad_id: 4,
  },
  {
    id: 11,
    m: "ISTP",
    t: "보드카",
    a: "<b>백과사전형(ISTP)</b>인 당신에게는,<br/> 순수한 알코올과 비슷하며 무색, 무취, 무미의 <b>보드카</b>가 잘 어울립니다.<br/><br/> 당신은 자신의 카드를 가슴 가까이에 두고 내면의 감정과 동기를 잘 드러내지 않는 경향이 있습니다. 하지만 때때로 자신에게 용납하는 것과 달리 속으로는 격동적인 행동을 하고 싶어하기도 합니다.<br/> ISTP 유형을 나타내는 단어는 <b>내향, 감각, 사고, 인식</b>입니다.<br/><br/> 화려한 향과 맛은 아니지만, 높은 도수와 훌륭한 목넘김을 가진 보드카 한 잔 어떠신가요?",
    good: "막걸리",
    good_m: "ESFJ",
    good_id: 2,
    bad: "샴페인",
    bad_m: "ENFP",
    bad_id: 5,
  },
  {
    id: 12,
    m: "INTJ",
    t: "위스키",
    a: "<b>과학자형(INTJ)</b>인 당신에게는,<br/> 특유의 고급스러운 풍미를 오랫동안 음미하며 즐기는 술인 <b>위스키</b>가 잘 어울립니다.<br/><br/> 당신은 생각이 매우 많은 편이며 혼자서 일을 진행할 때 능률이 좋은 편입니다. 또한 전략적으로 행동하는 것을 좋아하며 치밀하게 세운 계획대로 일이 진행되지 않을 경우 스트레스를 많이 받는 경향이 있습니다.<br/> INTJ 유형을 나타내는 단어는 <b>내향, 사고, 판단, 직관</b>입니다.<br/><br/> 힘들었던 하루의 끝을 은은하게 적시는 위스키 한 잔 어떠신가요?",
    good: "고량주",
    good_m: "ESTP",
    good_id: 7,
    bad: "소주",
    bad_m: "ISFJ",
    bad_id: 14,
  },
  {
    id: 13,
    m: "INFJ",
    t: "복분자주",
    a: "<b>예언자형(INFJ)</b>인 당신에게는,<br/> 달콤한 향과 맛을 한번에 느낄 수 있으며 건강에도 좋은 <b>복분자주</b>가 잘 어울립니다.<br/><br/> 당신은 다른 사람들보다 창의력과 통찰력이 뛰어나며, 겉으로 나타나는 것과는 달리 내면에서는 갈등을 많이 하는 편입니다. 또한 다른 사람들이 종종 특이하거나 별난 사람으로 간주하는 경향이 있습니다.<br/> INFJ 유형을 나타내는 단어는 <b>내향, 감정, 판단, 직관</b>입니다.<br/><br/> 색다른 향미에 손이 자꾸만 가는 복분자주 한 잔 어떠신가요?",
    good: "생맥주",
    good_m: "ESFP",
    good_id: 6,
    bad: "안동소주(전통주)",
    bad_m: "ISTJ",
    bad_id: 15,
  },
  {
    id: 14,
    m: "ISFJ",
    t: "소주",
    a: "<b>임금 뒷편의 권력형(ISFJ)</b>인 당신에게는,<br/> 친숙하고 소박하며 우리의 곁에서 늘 함께하는 <b>소주</b>가 잘 어울립니다.<br/><br/> 당신은 고운 마음씨를 가지고 있으며 도움이 필요한 사람들을 항상 기꺼이 도와줍니다. 또한 사람들은 당신과 같은 유형의 사람을 만나는 것을 좋아하며, 당신은 주변인들로부터 가장 좋은 점들을 끌어낼 수 있습니다.<br/> ISFJ 유형을 나타내는 단어는 <b>내향, 감각, 감정, 판단</b>입니다.<br/><br/> 따뜻한 면을 가진 당신처럼, 우리의 친구같은 존재인 소주 한 잔 어떠신가요?",
    good: "샴페인",
    good_m: "ENFP",
    good_id: 5,
    bad: "위스키",
    bad_m: "INTJ",
    bad_id: 12,
  },
  {
    id: 15,
    m: "ISTJ",
    t: "안동소주(전통주)",
    a: "<b>세상의 소금형(ISTJ)</b>인 당신에게는,<br/> 안동에서 가문마다 전통적으로 전해져 내려오는 술인 <b>안동소주</b>가 잘 어울립니다.<br/><br/> 당신은 매우 신중하고 체계적인 경향이 있으며 진지하고 논리적인 편입니다. 또한 성실하고 조용하며 규칙을 잘 따르는 성격이며, 사회적 책임을 소중히 여기고 매우 윤리적인 성향을 가지고 있습니다.<br/> ISTJ 유형을 나타내는 단어는 <b>내향, 감각, 사고, 판단</b>입니다.<br/><br/> 칠백 년의 역사를 가진 우리의 전통민속주, 안동소주 한 잔 어떠신가요?",
    good: "흑맥주",
    good_m: "ENTP",
    good_id: 4,
    bad: "복분자주",
    bad_m: "INFJ",
    bad_id: 13,
  },
];

export default answerList;
