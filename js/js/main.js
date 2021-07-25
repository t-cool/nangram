let quizzes = 
[
// be動詞現在
[
  "be-now",
  [ ["私は　学生　です。", "I am a student.", "am", ""],
    ["これは　　私のパソコン　です。", "This is my laptop.", "This", ""],
    ["あれは　　私の家　です。", "That is my house.", "That", ""],
    ["私は　今　忙しく　ないです。", "I am not busy now.", "not", ""],
    ["あなたは　今週末　ひま　ですか。", "Are you free this weekend?", "Are", ""],
    ["彼は　　忙しい　ですか。", "Is he busy?", "Is", ""],
    ["これは　　何　ですか", "What is this?", "is", ""],
    ["この近くに　コンビニが　あります。", "There is a convenience store near here.", "is", ""],
  ]
],
// be動詞現在
[
  "be-past",
  [ ["ボブとメアリーは　昨日　忙し　かった。", "Bob and Mary were busy yesterday.", "were", ""],
    ["公園に　たくさん子供が　いました。", "There were many children in the park.", "were", ""],
    ["私は　昨日　大阪に　いました", "I was in Osaka yesterday.", "was", ""],
    ["ボブは　昨日　奈良に　いました", "Bob was in Nara yesterday.", "was", ""],
  ]
],
// 一般動詞現在
[
  "gv-now",
  [ ["私は　その女の子を　知っています。", "I know the girl.", "know", ""],
    ["私は　犬を　飼っていません。", "I do not have a dog.", "do", ""],
    ["あなたは　野球を　しますか。", "Do you play baseball?", "Do", ""],
    ["あなたは　何色が　好きですか。", "What color do you like?", "do", ""],
  ]
],
// 3単現
[
  "third",
  [ ["テツヤは　テニスを　します。", "Tetsuya plays tennis.", "plays", ""],
    ["彼は　　犬を　飼っています。", "He has a dog.", "has", ""],
    ["彼女は　音楽が　好きですか。", "Does she like music?", "Does", ""],
    ["彼女は　大阪に　住んでいません。", "She does not live in Osaka.", "does", ""],
  ]
],
// 一般動詞過去
[
  "gv-past",
  [ 
    ["私は　今朝　朝食を　食べました。", "I had breakfast this morning.", "had", ""],
    ["私は　昨日　数学を　勉強しました。", "I studied math yesterday.", "studied", ""],
    ["私は　2日前　学校に　行きませんでした。", "I did not go to school two days ago.", "did", ""],
    ["あなたは　先週末　京都に　いきましたか。", "Did you go to Kyoto last weekend?", "Did", ""],
    ["あなたは　昨日　何を　しましたか。", "What did you do yesterday?", "did", ""],
  ],
],  
// 不規則動詞過去
[
  "irr-past",
  [ 
    ["私は　去年　アメリカへ　行きました", "I went to America last year.", "went", ""],    
    ["彼は　昨日　10時に　家に　帰りました。", "He came home at ten yesterday.", "came", ""],
    ["私は　彼女に　手紙を　書きました。", "I wrote a letter to her.", "wrote", ""],
    ["私たちは　パーティーで　楽しいときを　過ごしました。", "We had a good time at the party.", "had", ""],
    ["私は　今朝　6時に　起きました。", "I got up at six this morning.", "got", ""],
    ["私は　先週　ボブに　会いました。", "I saw Bob last week.", "saw", ""],
  ],
],
// 疑問詞
[
  "wh-s",
  [ ["あれは　何　ですか。", "What is that?", "What", ""],
    ["彼は　誰　ですか。", "Who is he?", "Who", ""],
    ["彼女は　どこに　住んでいます　か。", "Where does she live?", "Where", ""],
    ["箱の中に　何が　ありますか。", "What is in the box?", "What", ""],
    ["誰が　昼食を　作りますか。母です。", "Who makes lunch? - My mother does.", "Who", ""],
    ["あなたは　何のスポーツが　好き　ですか。", "What sport do you like?", "What", ""],
    ["これは　誰のもの　ですか。", "Whose is this?", "Whose", ""],
    ["どのかばんが　あなたのもの　ですか。", "Which bag is yours?", "Which", ""],
    ["彼は　何歳　ですか。", "How old is he?", "old", ""],
    ["これは　いくらですか。", "How much is this?", "much", ""],
    ["何冊の本を　あなたは　持っていますか。", "How many books do you have?", "many", ""],
    ["何曜日に　買い物に　行きますか。", "What day do you go shopping?", "day", ""],
  ],
],  
// 命令文
[
  "meirei",
  [ ["決して　ここで　走っては　いけません。", "Never run here.", "Never", ""],
    ["野球を　しましょう。", "Let's play baseball.", "Let's", ""],  
    ["遅れ　てはいけません。", "Don't be late", "be", ""],
    ["注意　しなさい。", "Be careful.", "Be", ""],
    ["こちらに　来て　ください。", "Please come here.", "Please", "Please + 動詞の原形 : 〜してください"],
    ["ここで　走っては　いけません", "Don't run here.", "Don't", "Don't + 動詞の原形 : 〜するな"]
  ],
],  
// 名詞・冠詞

[
  "noun",
  [ 
    ["3台のバス", "three buses", "buses", ""],  
    ["私の街には　2つ図書館が　あります。", "There are two libraries in my town.", "libraries", ""],  
    ["いくらか水を　ください。", "Give me some water.", "some", ""],  
    ["オレンジジュースを2杯　ほしいです。", "I want two glasses of orange juice.", "glasses", ""],  
    ["私は　コーヒを2杯　ほしいです。", "I want two cups of coffee.", "cups", ""],
    ["今日は　授業が　全くありません。", "We don't have any classes today", "any", ""],
    ["その犬は　かわいい　です。", "The dog is cute.", "The", ""],
    ["川には　たくさんの水が　あります。", "There is much water in the river.", "much", ""],
    ["ボブには　3人子どもが　います。", "Bob has three children.", "children", ""],
    ["私は　ピアノを　演奏します。", "I play the piano.", "the", ""],
    ["私は　1つ卵が　ほしいです。", "I want an egg.", "an", ""],
  ],
],  
// 代名詞
[
  "pron",
  [ 
    ["代名詞にしてください:", "a cat and a dog", "they", ""],
    ["代名詞にしてください:", "a cat", "it", ""],
    ["代名詞にしてください:", "Bob and I", "we", ""],
    ["代名詞にしてください:", "Bob and Mary", "they", ""],
    ["代名詞にしてください:", "Taro", "he", ""],
    ["代名詞にしてください:", "Mary", "she", ""],
    ["代名詞にしてください:", "Bob", "he", ""],
  ],
],
// 形容詞
[
  "adj",
  [ 
    ["私は　今　お金をほとんど持っていません。", "I have little money.", "little", ""],
    ["私は　今　お金を少し持っています。", "I have a little money.", "little", ""],
    ["プールには　水が　ほとんどありません。", "There is little water in the pool.", "little", ""],
    ["プールには　少し水が　入っています。", "There is a little water in the pool.", "little", ""],
    ["公園に　子どもが　ほとんどいません", "There are few children in the park.", "few", ""],
    ["公園に　数人の子どもが　います。", "There are a few children in the park.", "few", ""],
    ["私は　水を(いくらか)　ほしい。", "I want some water.", "some", ""],
    ["私は　たくさんの本を　持っています。", "I have many books.", "many", ""],
    ["私は　新しい自転車を　持っています。", "I have a new bike.", "new", ""],
    ["私は　何か冷たいものが　ほしいです。", "I want something cold.", "cold", ""],
  ],
],  
// 副詞
[
  "adv",
  [ 
    ["彼女は　いつも親切　です。", "She is always kind.", "always", ""],
    ["私は　めったに　テレビを　見ません。", "I rarely watch TV.", "rarely", ""],
    ["私は　たいてい(ふつうは)　6時に　起きます。", "I usually get up at 6.", "usually", ""],
    ["私は　いつも　眠たい。", "I am always sleepy.", "am", ""],
    ["私の母は　朝早く　起きます。", "My mother wakes up early in the morning.", "early", ""],
    ["私は　ときどき　テレビを　見ます。", "I sometimes watch TV.", "sometimes", ""],
    ["私は　いつも　スシローに　行きます。", "I always go to Sushiro.", "always", ""],
    ["私は　しばしば　公園に　いきます。", "I often go to the park.", "often", ""],
    ["私は　彼女を　よく　知っています。", "I know her well.", "well", ""],
  ],
],  
// 前置詞
[
  "prep",
  [ 
    ["英語で　話しま　しょう。", "Let's speak in English", "in", ""],
    ["私は　駅の近くに　住んでいます。", "I live near the station", "near", ""],
    ["郵便局は　川のそばに　あります。", "The post ofice is by the river", "by", ""],
    ["木の下で", "under the tree", "under", ""],
    ["ペンで　名前を　書いて　ください。", "Please write your name with a pen.", "with", ""],
    ["私は　電車で　学校に　行きます。", "I go to school by train.", "by", ""],
    ["夕食の前に", "before dinner", "before", ""],
    ["昼食の後で", "after lunch", "after", ""],
    ["私は　大阪に　2週間　滞在する　予定です。", "I'll stay in Osaka for 2 weeks", "for", ""],
    ["私は　夏休みの間　アメリカに　滞在する　予定です。", "I'll staty in America during the summer vacation", "during", ""],
    ["私は　4月1日に　生まれました。", "I was born on April 1.", "on", ""],
    ["彼は　夏に　よく　登山をします。", "He often goes climbing in summer.", "in", ""],
    ["日本では　学校は　4月に　始まります。", "School starts in April in Japan.", "in", ""],
    ["私は　日曜日に　泳ぎに　行きます。", "I go swimming on Sunday.", "on", ""],
    ["私を　見て。", "Look at me.", "at", ""],
    ["私は　テレビで　サッカーの試合を　見ました。", "I watched the soccer game on TV.", "on", ""],
    ["彼は　カナダから　日本に　来ました。", "He came to Japan from Canada.", "from", ""],
    ["私の犬は　ベッドの上に　います。", "My dog is on the bed.", "on", ""],
    ["彼は　2010年に　韓国を　訪れました。", "He visited Korea in 2010.", "in", ""],
    ["私は　7時に　起きます。", "I get up at seven.", "at", ""],
  ],
],  
// 現在進行形
[
  "prog_now",
  [ 
    ["私は　今　手紙を　書いています。", "I am writing a letter now.", "am", ""],
    ["彼女は　今　コンピュータを　使っています。", "She is using a computer now.", "using", ""],
    ["私は　今　川で　泳いでいます。", "I am swimming in the river now.", "swimming", ""],
    ["あなたは　今　どこを　歩いていますか。", "Where are you walking now?", "walking", ""],
    ["あなたは　何を　していますか。", "What are you doing?", "are", ""],
    ["あなたは　今　勉強をしていますか。", "Are you studying now?", "Are", ""],
    ["彼女は今　本を　読んでいません。", "She is not reading a book now.", "not", ""],
    ["私は　今　数学を　勉強しています。", "I am studying math now.", "studying", ""]
  ],
],
// 過去進行形
[
  "prog_past",
  [ 
    ["私は　そのとき　手紙を　書いていました。", "I was writing a letter at that time.", "that", ""],
    ["私は　そのとき　手紙を　書いていました。", "I was writing a letter then.", "then", ""],
    ["私は　そのとき　手紙を　書いていました。", "I was writing a letter then.", "was", ""],
    ["彼女はそのとき　コンピュータを　使っていました。", "She was using a computer then.", "was", ""],
    ["私は　そのとき　川で　泳いでいました。", "I was swimming in the river then.", "was", ""],
    ["あなたは　どこを　走っていたんですか。", "Where were you running?", "were", ""],
    ["あなたは　そのとき　何を　していましたか。", "What were you doing then?", "were", ""],
    ["彼女はそのとき　本を　読んでいませんでした。", "She was not reading a book then.", "not", ""],
    ["私は　そのとき　数学を　勉強していました。", "I was studying math then.", "was", ""]
  ],
],  
// 助動詞
[
  "aux",
  [ 
    ["あなたは　今すぐに　寝る　べきです。", "You should go to bed right now.", "should", ""],
    ["入っても　いいですか。", "May I come in?", "May", ""],
    ["あなたは　早く　起きる　必要はありません。", "You don't have to get up early.", "have", ""],
    ["あなたは　ここで　泳いでは　いけません。", "You must not swim here.", "not", ""],
    ["彼女は　夕食を　作らなければいけない。", "She must make dinner.", "must", ""],
    ["あなたは　英語を　話せますか。", "Can you speak English?", "Can", ""],
    ["彼は　速く　走る　ことができます。", "He can run fast.", "can", ""]
  ],
],  
// 接続詞
[
  "conj",
  [ 
    ["私は　彼は　正しい　と思います。", "I think that he is right.", "that", ""],
    ["私は　猫は　かわいい　から　好きです。", "I like cats because they are cute.", "because", ""],
    ["もし　あなたが　暇ならば　私の家に　来てください。", "If you are free, please come to my house.", "If", ""],
    ["私が　起きたとき　雨が降っていました。", "I was raining when I got up.", "when", ""],
    ["私は　空腹だったので　多く　食べました。", "I was hungry, so I ate a lot.", "so", ""],
    ["私は　忙しいですが　疲れていません。", "I am busy, but I am not tired.", "but", ""],
    ["私は　ペンかえんぴつを　使います。", "I use a pen or a pencil.", "or", ""],
    ["私は　野球かサッカーを　します。", "I play baseball and soccer.", "and", ""]
  ],
],  
// 未来表現
[
  "future",
  [ 
    ["あなたは　明日　何を　する予定ですか。", "What are you going to do tomorrow?", "going", ""],
    ["ボブは　７時に　出発する　予定ですか。", "Is Bob going to leave at seven?", "Is", ""],
    ["私は　彼女に　電話をする　つもりはありません。", "I am not going to call her.", "not", ""],
    ["あなたは　部屋を　掃除する　つもりですか。", "Will you clean the room?", "Will", ""],
    ["彼女は　中国を　訪問する　つもりではありません", "She won't visit China.", "won't", ""],
    ["彼女は　中国を　訪れる　つもりではありません。", "She will not visit China.", "not", ""],
    ["私は　映画を　見る予定です。", "I am going to see the movie.", "going", ""],
    ["私は　早く　帰宅するつもりです。", "I will come home early.", "will", ""]
  ],
],  
// 比較表現①
[
  "compare1",
  [ ["ユミは　ベスほど　背が高く　ありません。", "Yumi is not as tall as Beth.", "not", ""],    
    ["彼は　ボブと同じくらい　　速く走れます。", "He can run as fast as Bob.", "as", ""],    
    ["このペンは　　そのペンと同じくらい　新しいです。", "This pen is as new as that one.", "as", ""],    
    ["このクイズは　全てのなかで　一番簡単です。", "The quiz is the easiest of all.", "easiest", ""],
    ["ボブは　3人の中で　一番背が高い　です。", "Bob is the tallest of the three.", "of", ""],
    ["ボブは　クラスの中で　一番背が高い　です。", "Bob is the tallest in the class.", "tallest", ""],
    ["私は　ユミよりも　速く　走れます。", "I can run faster than Yumi", "than", ""],
    ["トムは　ボブよりも　背が高いです。", "Tom is taller than Bob.", "taller", ""]
  ],
],  
// 比較表現②
[
  "compare1",
  [ ["5人の中で　一番若いのは　誰ですか。", "Who is the youngest of the five?", "youngest", ""],
    ["この猫とあなたの猫は　どちらが　より小さい　ですか。", "Which is smaller, this cat or yours?", "Which", ""],
    ["私は　数学よりも　英語が　好きです。", "I like English better than math.", "better", ""],
    ["これは　3つの中で　一番良いカ　メラです。", "This is the best camera of the three.", "best", ""],
    ["あなたのカメラは　私のものよりも　良いです。", "Your camera is better than mine.", "better", ""]
    ["これは　全ての中で　一番興味深い　本です。", "This is the most interesting book of all.", "most", ""],
    ["サッカーは　卓球よりも　人気があります。", "Soccer is more popular than table tennis.", "more", ""]    
  ],
],  
// 不定詞(1)
[
  "inf1",

  [ 
    ["私は　その手紙を読んで　悲しかった。", "I was sad to read the letter.", "", ""],
    ["私は　それを聞いて　うれしいです。", "I'm glad to heat that. ", "", ""],
    ["私は　何か飲むものが　ほしいです。", "I want something to drink.", "to", ""],
    ["私たちは　すべき仕事をたくさん　持っています。", "We have a lot of work to do.", "to", ""],
    ["私たちは　サッカーをするために　公園へ　いきます。", "We go to the park to play soccer.", "to", ""],
    ["私は　散歩をするために　早く　起床します。", "I get up early to walk.", "to", ""],
    ["私の夢は　プログラマー　になること　です。", "My dream is to be a programmer.", "to", ""],
    ["私は　新しい車を　買いたいです。", "I want to buy a new car.", "want", ""],
    ["私は　本を読むことが　好きです。", "I like to read books.", "to", ""]
  ],
],  
// 動名詞
[
  "vnoun",
  [ 
    ["私は　手紙を　書き終えました。", "I finished writing a letter.", "writing", ""],
    ["歌うことは　楽しい　です。", "Singing is fun.", "Singing", ""],
    ["彼は　何も言わずに　外へ　出ました。", "He went out without saying anything.", "saying", ""],
    ["私を助けてくれて　ありがとう。", "Thank you for helping me.", "helping", ""],
    ["彼女は　泣くために　立ち止まりました。", "She stopped to cry.", "to", ""],
    ["彼女は　泣くことを　やめました。", "She stopped crying.", "crying", ""],
    ["英語を勉強することは　重要　です。", "Studying English is important.", "Studying", ""],
    ["私の仕事は　英語を教えること　です。", "My job is teaching English.", "teaching", ""],
    ["私は　ゲームをして　楽しみます。", "I enjoy playing video games.", "playing", ""]
  ],
],  
// There is
[
  "thereis",
  [ 
    ["以前　日本には　多くの子どもが　いました。", "There were many children in Japan before.", "were", ""],
    ["古い家に　男性が一人　いました。", "There was a man in the old house.", "was", ""],
    ["駅には　自転車が何台か　ありますか。", "Are there any bikes at the station?", "Are", ""],
    ["ここの近くには　レストランは　ありません。", "There is not a restaurant near here.", "not", ""],
    ["私のカバンには　3冊の本が　ありました。", "There were three books in my bag.", "There", ""],
    ["その公園には　少年が数人　います。", "There are some boys in the park.", "are", ""],
    ["私の家の近くには　公園が　あります。", "There is a park near my house.", "There", ""],
    ["机の上に　本が　あります。", "There is a book on the desk.", "is", ""],
  ],
],  
// 受け身
[
  "passive",
  [ 
    ["彼女は　いつ　生まれましたか。", "When was she born?", "was", ""],
    ["この車は　いつ　作られましたか。", "When was this car made?", "was", ""],
    ["その歌は　若い人たちに　好まれていますか。", "Is the song loved by young people?", "Is", ""],
    ["あれらの部屋は　今日は　掃除されません。", "Those rooms are not cleaned today.", "not", ""],
    ["その歌は　多くの人たちに　愛されています。", "The song is loved by many people.", "loved", ""],
    ["この図書館は　５時に　閉まりません。", "This library isn't closed at five.", "isn't", ""],
    ["このパソコンは　ジョンに　使われました。", "This pc was used by John.", "by", ""],
    ["サッカーは　多くの国で　プレイされます。", "Soccer is played in many countries.", "played", ""],
    ["ボブは　ジョンに　助けられました。", "Bob was helped by John.", "was", ""],
    ["英語は　多くの国で　使われています。", "English is used in many countries.", "used", ""],
  ],
],  
// 現在完了 完了
[
  "pp-fin",
  [ 
    ["私は　ちょうど　昼食を　食べたところです。", "I have just eaten lunch.", "eaten", ""],
    ["あなたは　もう　宿題を　終えましたか。", "Have you done your homework yet?", "yet", ""],
    ["私は　まだ　昼食を　食べ終えていません。", "I haven't finished having lunch yet.", "yet", ""],
    ["彼女は　ちょうど　昼食を　食べたところです。", "She has just eaten lunch.", "has", ""],
    ["私たちは　すでに　その部屋を　掃除しました。", "We have already cleaned the room.", "already", ""],
    ["私は　ちょうど　宿題を　終えたところです。", "I have just finished my homework.", "finished", ""]
  ],
],  
// 現在完了 継続
[
  "pp-for",
  [ 
    ["1週間の間　雨は　降っていません。", "It has not rained for a week.", "not", ""],
    ["あなたは　日本に　どれくらいの間　住んでいますか。", "How long have you lived in Japan?", "long", ""],
    ["トムは　2年間　天川に　住んでいます。", "Tom has lived in Tenkawa for 2 years.", "has", ""],
    ["私は　生まれて以来ずっと　奈良に　住んでいます。", "I have lived in Nara since I was born.", "since", ""],
    ["私は　14年間　奈良に　住んでいます。", "I have lived in Nara for 14 years.", "for", ""],
    ["私は　12年間　天川に　住んでいます。", "I have lived in Tenkawa for 12 years.", "have", ""],
  ],
],  
// 現在完了 経験
[
  "pp-exp",
  [ 
    ["あなたは　以前に　東京に　行ったことはありますか。", "Have you ever been to Tokyo before?", "ever", ""],
    ["私は　3日間　ずっと　気分が悪かった。", "I have been sick for three days.", "been", ""],
    ["私は　東京に　2度　行ったことがある。", "I have been to Tokyo twice.", "been", ""],
    ["彼女は3回　その映画を　見たことがある。", "She has seen the movie three times.", "seen", ""],
    ["私は　カナダを一度　訪れたことがある。", "I have visited Canada once.", "have", ""],
  ],
],  
// 分詞
[
  "participle",
  [ 
    ["これは　漱石によって書かれた　本　です。", "This is the book written by Soseki.", "written", ""],
    ["これは　1950年に発売された　車　です。", "This is a car sold in 1950.", "sold", ""],
    ["私は　ドイツ製の　車を　持っています。", "I have a pen made in Germany.", "made", ""],
    ["これは　ジョンによって使われている　ペン　です。", "This is the guitar used by John.", "used", ""],
    ["私は　ケーキを作っている　女性を　知っています。", "I know the woman making a cake.", "making", ""],
    ["向こうで　歩いている男性は　　誰ですか。", "Who is the man walking over there?", "walking", ""],
    ["サッカーをしている　少年は　ボブ　です。", "The boy playing soccer is Bob.", "playing", ""],
    ["私は　向こうで走っている　少年を　知っています。", "I know the boy running over there.", "running", ""]
  ],
],
// 不定詞(2)
[
  "inf2",
  [ 
    ["早く起きるのは　難しいです　ね。", "It is hard to get up early.", "It", ""],
    ["奈良で　お寺を見ることは　面白かった　です。", "It was interesting to see temples in Nara.", "was", ""],
    ["英語を話すことは　簡単　ですか。", "Is it easy to speak English?", "Is", ""],
    ["私にとって　泳ぐことは　簡単　です。", "It was easy for me to swim.", "for", ""],
    ["年配の人々を助けることは　重要　です。", "It is important to help old people.", "to", ""],
    ["私は　彼女に　君を手伝うように　頼みました。", "I asked her to help you.", "to", ""],
    ["私は　ボブに勉強するように　言った。", "I told Bob to study.", "told", ""],
    ["私は　あなたに　その部屋を　掃除してほしい。", "I want you to clean the room.", "want", ""],
    ["彼に　帰るように　言って　ください。", "Please tell him to come back.", "tell", ""],
  ],
],  
// 間接疑問文
[
  "indirect_q",
  [ 
    ["誰が英語を話せるか　知っていますか。", "Do you know who can speak English?", "who", ""],
    ["私は　彼が　そのときどこにいたか　知りません。", "I don't know where he was then.", "was", ""],
    ["私は　箱に何があるか　知っています。", "I know what is in the box.", "is", ""],
    ["私は　なぜあなたが泣いているか知りません。", "I don't know why you are crying.", "why", ""],
    ["私は　あなたがいつ出発したか　知りませんでした。", "I didn't know when you left.", "when", ""],
    ["あなたは　彼が　どこに　いるか知っていますか。", "Do you know where he is?", "where", ""],
    ["私は　彼女が誰なのか　知っています。", "I don't know who she is.", "is", ""],
    ["私は　彼が誰なのか　しっています。", "I know who he is.", "who", ""]
  ],
],  
// 付加疑問文
[
  "tag_q",
  [ 
    ["大阪に　行きましょう　よ。", "Let's go to Osaka, shall we?", "shall", ""],
    ["彼は　車を　持っていません　よね。", "He doesn't have a car, does he?", "does", ""],
    ["彼女は　ぶどうが　好きです　よね。", "She likes grapes, doesn't she?", "doesn't", ""],
    ["あなたは　京都に　行っていませんでした　よね。", "You didn't go to Kyoto, did you?", "did", ""],
    ["あなたは　大阪に　行きました　よね。", "You went to Osaka, didn't you?", "didn't", ""],
    ["あなたは　犬が　好きです　よね。", "You like dogs, don't you?", "don\'t", ""],
  ],
],  
// 否定疑問文
[
  "negative_q",
  [ 
    ["あなたは　寿司が　好きではないのですか？ - はい。好きではないです。", "Don't you like sushi? - No. I don't like it.", "No", ""],
    ["あなたは　寿司が　好きではないのですか？ - いいえ。好きです。", "Don't you like sushi? - Yes. I like it.", "Yes", ""],
    ["昨日は　仕事を　しなかったのですか？", "Didn't you work yesterday?", "Didn't", ""],
    ["先週　彼は　病気ではなかったのですか？", "Wasn't he sick last week?", "Wasn't", ""],
    ["私は　家に　帰れないのですか？", "Can't I go home?", "Can't", ""],
    ["彼女は　バレーボールをしないのですか？", "Doesn't she play volleyball?", "Doesn't", ""],
    ["あなたは　学生ではないのですか？", "Aren't you a student?", "Aren't", ""],
    ["あなたは　牛乳が好きではないのですか？", "Don't you like milk?", "Don't", ""],
  ],
],  
// 関係代名詞
[
  "rnoun-subj",
  [ 
    ["これは　1500年以上も前に　建てられた　お寺　です。", "This is the temple which was build over 1500 years ago.", "which", ""],
    ["青い目をした　その猫は　キャッシー　です。", "The cat which has blue eyes is Kethy.(wで始めて)", "which", ""],
    ["これは　飛ぶことができない　鳥です。", "This is the bird that cannot fly.(tで始めて)", "that", ""],
    ["私は　英語を話せる　姉　がいます。", "I have a sister who can speak English.(wで始めて)", "who", ""],
    ["これは　先週に　開店した　お店　です。", "This is the shop which opened last week.(wで始めて)", "which", ""],
    ["これは　奈良へ　行く　バス　です。", "This is the bus that goes to Nara.(tで始めて)", "that", ""],
    ["ジョンは　速く　走る　犬　です。", "John is a dog which runs fast. (wで始めて)", "which", ""],
    ["私は　プログラミングが好きな　友人　がいます。", "I have a friend who likes programming.(wで始めて)", "who", ""],
  ],
],  
// 関係代名詞
[
  "rnoun-obj",
  [ 
    ["これは　私が書いた　本です。", "This is the book I wrote.", "I", ""],
    ["ジョンは　私たちが知っている　少年です。", "John is a boy we know.", "we", ""],
    ["私は　ボブがとった　写真を数枚　もっています。", "I have some pictures that Bob took.(tで始めて)", "that", ""],
    ["これは　私が買った　コンピュータ　です。", "This is the computer which I bought.(wで始めて)", "which", ""],
    ["彼女は　私が好きな　女の子です。", "She is the girl that I like.(tで始めて)", "that", ""]
  ],
],  
// 会話表現
[
  "conv",
  [ 
    ["お茶を少し　いかがですか。", "Would you like some tea?", "like", ""],
    ["（電話で）ジョンに　代わってもらえますか。", "May I speak to John, please?", "speak", ""],
    ["どのバスが　清水寺に　行きますか。", "Which bus goes to Kiyomizu Temple?", "goes", ""],
    ["伝言を残していいですか。", "Can I leave a message?", "leave", ""],
    ["次の角を　右に　曲がってください。", "Turn right at the next corner.", "Turn", ""],
    ["駅へは　どうすればいけるでしょうか。", "How can I get to the station?", "get", ""],
    ["寿司を　食べませんか。", "Why don't we have sushi?", "we", ""],
    ["この本を　読んでは　どうですか。", "Why don't you read this book?", "don't", ""],
    ["図書館に　行きませんか。", "Shall we go to the library?", "we", ""],
    ["窓を　開けましょうか。", "Shall I open the window?", "Shall", ""],
    ["（具合が悪そうな人に）どうしたんですか。", "What's the matter?", "matter", ""],
    ["(お店で)いらっしゃいませ。", "May I help you?", "help", ""],
    ["いいえ結構です。", "No, thank you.", "thank", ""],
    ["どういたしまして。", "You're welcome.", "welcome", ""],
    ["なるほど。", "I see.", "see", ""],
    ["私もそう思います。", "I think so, too.", "so", ""],
    ["さようなら。", "Goodbye.", "Goodbye", ""],
    ["はじめまして。", "Nice to meet you.", "to", ""],
  ],
],  
// 熟語(動詞)
[
  "idiom_verb",
  [ 
    ["この電車は　まもなく　京都駅に　つきます。", "This train will arrive at the Kyoto station soon.", "at", ""],
    ["この電車は　まもなく　京都　につきます。", "This train will arrive in Kyoto soon.", "in", ""],
    ["私は　22時に　寝ました。", "I went to bed at 22:00.", "to", ""],
    ["ユキは　帽子を　かぶりましt。", "Yuki put on a hat.", "", ""],
    ["それは　犬のように　見えます。", "It looks like a dog.", "like", ""],
    ["私は　その歌を　よく　聞きました。", "I often listened to that song.", "to", ""],
    ["ジョンのことは　聞きましたか。", "Did you hear of John?", "of", ""],
    ["私は　日本出身　です。", "I come from Japan.", "from", ""],
    ["辞書で　単語を　調べてください。", "Please look up a word in a dictionary.", "up", ""],
    ["彼は　赤ちゃんを　世話しているところです。", "He's looking after his baby.", "after", ""],
    ["私は　赤いかばんを　探しているところです。", "I'm looking for a red bag.", "for", ""],
  ],
],  
// 熟語(形容詞)
[
  "idiom_adj",
  [ 
    ["私は　犬のような　動物が　好きです。", "I like animals such as dogs.", "such", ""],
    ["私は　犬が　怖いです。", "I am afraid of dogs.", "of", ""],
    ["彼は　みんなに　優しいです。", "He is kind to everyone.", "to", ""],
    ["私は　そのニュースに　驚きました。", "I was surprised at the news.", "at", ""],
    ["私は　数学に　興味があります。", "I am interested in math.", "in", ""],
    ["私のアイデアは　あなたのものとは　違います。", "My idea is different from yours.", "from", ""],
    ["彼は　料理が　得意です。", "He is good at cooking.", "good", ""],
    ["私は　2010年に　生まれました。", "I was born in 2010.", "born", ""],
    ["彼女は　泳ぐことが　できます。", "She is able to swim.", "able", ""],
  ],
],  
// 熟語(副詞)
[
  "idiom_adv",
  [ 
    ["私は　日本食　例えば　寿司が　好きです。", "I like Japanese food, for example, sushi.", "example", ""],
    ["あなたは　向こうにある　赤い車が　見えますか。", "Can you see a red car over there?", "over", ""],
    ["私は　雪を　初めて　みました。", "I saw snow for the first time.", "for", ""],
    ["すぐに　部屋を　掃除しなさい。", "Clean the room at once.", "once", ""],
    ["その質問は　最初は　簡単に　見えました。", "The question looked easy at first.", "at", ""],
    ["この歌は　世界中で　有名　です。", "This song is famous all over the world.", "over", ""],
    ["私たちは　放課後に　サッカーを　します。", "We play soccer after school.", "after", ""],
    ["私の家は　図書館の隣に　あります。", "My house is next to the library.", "next", ""],
  ],
],  
// 意味順1
[
  "imi1",
  [ ["僕は　アキラ　です", "I am Akira.", "am", ""],
    ["彼らは　親切　です", "They are kind.", "are", ""],
    ["彼は　ニュージーランド出身　です", "He is from New Zealand.", "is", ""],
    ["これは　私のかばん　です", "This is my bag.", "is", ""],
    ["私には　弟が　いる", "I have a brother.", "have", ""],
    ["彼女は　毎日　バレーボールを　する", "She plays volleyball every day.", "plays", ""],
    ["彼は　学校で　中国語を　勉強する", "He studies Chinese at school.", "studies", ""],
    ["私たちは　夕食の前に　手を　洗う", "We wash our hands before dinner.", "wash", ""],
    ["あなたの兄は　車を　運転　できる", "Your brother can drive a car.", "can", ""],
    ["あなたは　宿題を　しなくてはいけない", "You must do your homework.", "must", ""],
    ["彼女は　バイオリンを　弾く　べきだ", "She should play the violin.", "should", ""],
    ["私は　誕生日に　あなたに　プレゼントを　あげよう", "I will give you a present on your birthday.", "will", ""],
    ["私は　今　手紙を書いている", "I am writing a letter now.", "writing", ""],
    ["ケイトは今　川で泳いでいる", "Kate is swimming in the river now.", "swimming", ""],
    ["私のおばはそのとき　部屋で本を読んでいた", "My aunt was reading a book in her room then.", "reading", ""],
    ["彼らはそのとき　公園でサッカーをしていた", "They were playing soccer in the park then.", "playing", ""],
    ["私は　明日　自転車に乗るつもりだ", "I am going to ride a bike tomorrow.", "going", ""],
    ["彼女は今週末　おじに会うつもりだ", "She is going to see her uncle this weekend.", "going", ""],
    ["彼は　明日の朝　家にいるでしょう", "He will be at home tomorrow morning.", "will", ""],
    ["彼らは来年　15歳になります", "They will be 15 years old next year.", "be", ""],
  ],
],  
// 意味順2
[
  "imi2",
  [ ["私は　昨日　疲れていました", "I was tired yesterday.", "was", ""],
    ["私たちは先月　ロンドンに　いました", "We were in London last month.", "were", ""],
    ["彼は　今朝　私のカメラを　使いました", "He used my camera this morning.", "used", ""],
    ["私の姉は　3日前　奈良へ行　った", "My sister went to Nara three days ago.", "went", ""],
    ["私たちは　20年間　京都に　住んでいる", "We have lived in Kyoto for 20 years.", "have", ""],
    ["私は　富士山に　3回　登ったことがある", "He has climbed Mt. Fuji three times.", "has", ""],
    ["その電車は　もう　出発してしまった", "The train has already left.", "has", ""],
    ["私は　昼食を　ちょうど　食べたところだ", "I have just eaten lunch.", "have", ""],
    ["その歌は　多くの人に　愛されている", "The song is loved by many people.", "is", ""],
    ["日本語は　オーストラリアで　話されている", "Japanese is spoken in Australia.", "spoken", ""],
    ["ハムレットは　シェークスピアによって　書かれた", "Hamlet was written by Shakespeare.", "written", ""],
    ["この家は　５年前　父によって　建てられた", "This house was built by my father five years ago.", "built", ""],
    ["私の夢は　宇宙飛行士に　なることです", "My dream is to be an astronaut.", "to", ""],
    ["彼女は　たくさんの読むべき本を　持っている", "She has a lot of books to read.", "to", ""],
    ["私は　宿題を終えるために　6時に　起きた", "I got up at six to finish my homework.", "to", ""],
    ["英語を勉強することは　私たちにとって　重要　です", "It is important for us to study English.", "to", ""],
    ["私は　バスケットボールをすることが　好きだ", "I like playing basketball.", "playing", ""],
    ["彼は　昨夜　テレビを見て　楽しんだ", "He enjoyed watching TV last night.", "watching", ""],
    ["給食を作ることが　彼女の仕事　です", "Cooking school lunch is her job.", "Cooking", ""],
  ],
],  
// 意味順3
[
  "imi3",
  [
    ["私の趣味は　切手を集めること　です", "My hobby is collecting stamps.", "collecting", ""],
    ["スミスさんは　カナダ出身の先生　です", "Ms. Smith is a teacher who is from Canada.", "who", ""],
    ["これは　清水寺に行く　バス　です", "This is the bus which goes to Kiyomizu Temple.", "which", ""],
    ["私は　　あなたが2日前に駅で会った　少年を　知っている", "I know the boy you saw at the station two days ago.", "you", ""],
    ["ドアのところに立っている女の子は　私の妹　です", "The girl who is standing at the door is my sister ", "who", ""],
    ["彼は　私の兄よりも　背が高いです", "He is taller than my brother.", "taller", ""],
    ["私の父は　家族の中で　一番　背が高い　です", "My father is the tallest in my family.", "tallest", ""],
    ["私は　デイビッドと同じくらい　背が高い　です", "I am as tall as David.", "as", ""],
    ["ケンは　トムよりも　速く　走ることが　できる", "Ken can run faster than Tom.", "faster", ""],
    ["子どもだったとき　私は　毎週日曜日に　野球をした", "When I was a child, I played baseball every Sunday.", "When", ""],
    ["子どもだったとき　私は　毎週日曜日に　野球をした", "I played baseball every Sunday when I was a child.", "when", ""],
    ["病気だったので　彼女は　昨日　学校に　行かなかった", "Because she was sick, she did not go to school yesterday.", "Because", ""],
    ["病気だったので　彼女は　昨日　学校に　行かなかった", "She did not go to school yesterday because she was sick.", "because", ""],	  
    ["もし明日が晴れなら　私たちは　動物園に　行くだろう", "If it is fine tomorrow, we will go to the zoo.", "If", ""],
    ["もし明日が晴れなら　私たちは　動物園に　行くだろう", "We will go to the zoo if it is fine tomorrow", "if", ""],	  
    ["私は　彼女が正しい　と思う", "I think that she is right.", "think", ""],
    ["私は　彼女が正しくない　と思う", "I don't think that she is right.", "don't", ""],
    ["私は　向こうでテニスをしている女の子を　知っている", "I know the girl playing tennis over there.", "playing", ""],
    ["私の母は　ドイツ製の車を　持っている", "My mother has a car made in Germany.", "made", ""],
    ["図書館には　大きなテーブルが　ある", "There is a big table in the library.", "is", ""],
    ["公園には　たくさんの人がいる", "There are a lot of people in the park.", "are", ""],
    ["私たちは　そのネコを　タマと　呼ぶ", "We call the cat Tama.", "call", ""],
    ["テストの点数を見て　私は　嬉しくなった", "My test score made me happy.", "made", ""],
  ],
],
// 152-1
[
  "all1",
  [ 
    [ '彼女は　アメリカ出身　ではありません。', 'She is not from America.', 'She', '' ],
    [ '(続けて)　彼は　私の友達で　す。', 'He is my friend.', 'He', '' ],
    [ 'こちらは　ケン　です。', 'This is Ken.', 'This', '' ],
    [ '(続けて)　それは　えんぴつです。', 'It is a pencil.', 'It', '' ],
    [ '(答え)いいえ　ちがいます。', 'No, it is not.', 'it', '' ],
    [ '(答え)はい　そうです。', 'Yes, it is.', 'it', '' ],
    [ 'あれは　ペン　ですか。', 'Is that a pen?', 'Is', '' ],
    [ 'あれは　あなたのペン　です。', 'That is your pen.', 'That', '' ],
    [ 'これは　私のかばん　です。', 'This is my bag.', 'This', '' ],
    [ '私は　ユミ　ではありません。', 'I am not Yumi.', 'not', '' ],
    [ '(答え)　いいえ　ちがいます。', 'No, I am not.', 'am', '' ],
    [ '(答え)　はい　そうです。', 'Yes, I am.', 'am', '' ],
    [ 'あなたは　ユミですか。', 'Are you Yumi?', 'Are', '' ],
    [ 'あなたは　ユミです。', 'You are Yumi.', 'are', '' ],
    [ '私は　ユミです。', 'I am Yumi.', 'am', '' ] 
  ],
],  
// 152-2
[
  "all2",
  [ 
    [ '(答え)　８時です。', 'It is eight o\'clock.', 'It', '' ],
    [ '何時ですか。', 'What time is it?', 'time', '' ],
    [ '(答え)　彼女は　私の妹　です。', 'She is my sister.', 'She', '' ],
    [ 'ユミは[ユミって]　誰　ですか。', 'Who is Yumi?', 'Who', '' ],
    [ '彼女は　音楽が　好きではありません。', 'She does not like music.', 'does', '' ],
    [ '(答え)　いいえ　話しません。', 'No, he does not.', 'does', '' ],
    [ '(答え)　はい　話します。', 'Yes, he does.', 'does', '' ],
    [ 'ケンは　英語を　話しますか。', 'Does Ken speak English?', 'Does', '' ],
    [ 'ケンは　英語を　話します。', 'Ken speaks English.', 'speaks', '' ],
    [ '私を　見て。', 'Look at me.', 'Look', '' ],
    [ '公園に　行きましょう。', 'Let\'s go to the park.', 'Let\'s', '' ],
    [ '(答え)私は　２匹のいぬを　飼っています。', 'I have two dogs.', 'dogs', '' ],
    [ 'あなたは　何匹の犬を　飼っていますか。', 'How many dogs do you have?', 'many', '' ],
    [ '(答え)私は　すしを　食べます。', 'I eat sushi.', 'eat', '' ],
    [ 'あなたは　何を　食べますか。', 'What do you eat?', 'What', '' ],
    [ '英語は　やさしい　です。', 'English is easy.', 'is', '' ],
    [ '(答え)　それは　かばん　です。', 'It is a bag.', 'It', '' ],
    [ 'これは　何　ですか。', 'What is this?', 'What', '' ],
    [ '私は　サッカーが　好きではありません。', 'I don\'t like soccer.', 'don\'t', '' ],
    [ '私は　サッカーが　好きではありません。', 'I do not like soccer.', 'not', '' ],
    [ '(答え)　いいえ　しません。', 'No, I do not.', 'do', '' ],
    [ '(答え)　はい　します。', 'Yes, I do.', 'do', '' ],
    [ 'あなたは　英語を　勉強しますか。', 'Do you study English?', 'Do', '' ],
    [ '私は　野球を　します。', 'I play baseball.', 'play', '' ]
  ],
],  
// 152-3
[
  "all3",
  [
    [ '(答え)　私は　夏に　泳ぎます。', 'I swim in summer.', 'in', '' ],
    [ 'あなたは　いつ　泳ぎます　か。', 'When do you swim?', 'When', '' ],
    [ '(答え)　いいえ　ひくことが　できません。', 'No, I cannot.', 'cannot', '' ],
    [ '(答え)　はい　ひくことが　できます。', 'Yes, I can.', 'can', '' ],
    [ 'あなたは　ピアノを　ひくことが　できますか。', 'Can you play the piano?', 'Can', '' ],
    [ '私は　上手に　泳ぐことが　できます。', 'I can swim well.', 'can', '' ],
    [ '気をつけなさい。', 'Be careful.', 'Be', '' ],
    [ 'ドアを　開けては　いけません。', 'Don\'t open the door.', 'Don\'t', '' ],
    [ '(答え)　私は　音楽を　聞いています。', 'I am listening to music.', 'listening', '' ],
    [ 'あなたは　何を　していますか。', 'What are you doing?', 'doing', '' ],
    [ '(答え)　いいえ　使っていません。', 'No, I am not.', 'am', '' ],
    [ '(答え)　はい　使っています。', 'Yes, I am.', 'am', '' ],
    [ 'あなたは　コンピュータを　使っていますか。', 'Are you using a computer?', 'Are', '' ],
    [ '私は　テレビを　見ています。', 'I am watching TV.', 'watching', '' ],
    [ '私は　彼女が　好きです。', 'I like her.', 'her', '' ],
    [ '私は　彼を　知っています。', 'I know him.', 'him', '' ],
    [ '(答え)　(それは)私のもの　です。', 'It is mine.', 'mine', '' ],
    [ 'これは　誰のペン　ですか。', 'Whose pen is this?', 'Whose', '' ],
    [ '(答え)　(それは)　机の上　です。', 'It is on the desk.', 'It', '' ],
    [ '私のぼうしは　どこ　ですか。', 'Where is my cap?', 'Where', '' ],
    [ '(答え)　野球　です。', 'Baseball is.', 'is', '' ],
    [ 'あなたのお気に入りは　野球かサッカー　どちらですか。', 'Which is your favorite, baseball or soccer?', 'Which', '' ],
    [ '(答え)　私は　青が　好きです。', 'I like blue.', 'like', '' ],
    [ 'あなたは　何色が　好きですか。', 'What color do you like?', 'color', '' ]
  ],
],  
// 152-4
[
  "all4",
  [
    [ '私は　この宿題を　終えなければ　なりません。', 'I must finish this homework.', 'must', '' ],
    [ '私は　今日の午後　そこへ　行くつもりです。', 'I will go there this afternoon.', 'will', '' ],
    [ '私は　そこに行く　必要はありません。', 'I don\'t have to go there.', 'have', '' ],
    [ '私は　早く起きなければ　なりません。', 'I have to get up early.', 'have', '' ],
    [ '私は　何か食べるものが　ほしい。', 'I want something to eat.', 'something', '' ],
    [ '私は　ニューヨークを　訪れたい。', 'I want to visit New York.', 'want', '' ],
    [ '私は　友達に会うために　東京に行きました。', 'I went to Tokyo to see my friend.', 'to', '' ],
    [ '私を　手伝ってくださいませんか。', 'Could you help me?', 'Could', '' ],
    [ '窓を開けても　いいですか。', 'May I open the window?', 'May', '' ],
    [ '私たちは　彼を　サンちゃんと　呼びます。', 'We call him Sanchan.', 'call', '' ],
    [ '彼は　私に時計を　くれました。', 'He gave me a watch.', 'gave', '' ],
    [ '(答え)　いいえ　会うつもりではありません。', 'No, I am not.', 'am', '' ],
    [ '(答え)　はい　会うつもりです。', 'Yes, I am.', 'am', '' ],
    [ 'あなたは　彼に　会うつもりですか。', 'Are you going to see him?', 'going', '' ],
    [ '私は　来年　京都を　訪れるつもりです。', 'I am going to visit Kyoto next year.', 'going', '' ],
    [ 'あなたは　うれしそうです[に見えます]。', 'You look happy.', 'look', '' ],
    [ '私は　本を　読んでいました。', 'I was reading a book.', 'was', '' ],
    [ '(答え)　いいえ　忙しくありませんでした。', 'No, he was not.', 'was', '' ],
    [ '(答え)　はい　忙しかったです。', 'Yes, he was.', 'was', '' ],
    [ 'ケンは　昨日　忙しかったですか。', 'Was Ken busy yesterday?', 'Was', '' ],
    [ '私は　去年　１３歳　でした。', 'I was thirteen last year.', 'was', '' ],
    [ '(答え)　お腹が痛いのです。', 'I have a stomachache.', 'have', '' ],
    [ 'どうしたのですか。', 'What\'s wrong?', 'wrong', '' ],
    [ '(答え)　いいえ　食べませんでした。', 'No, I did not.', 'did', '' ],
    [ '(答え)　はい　食べました。', 'Yes, I did.', 'did', '' ],
    [ 'あなたは　昼食を　食べましたか。', 'Did you have lunch?', 'Did', '' ],
    [ '私は　昨日　学校に　行きました。', 'I went to school yesterday.', 'went', '' ],
    [ '私は　昨夜　英語を　勉強しました。', 'I studied English last night.', 'studied', '' ],
    [ '(答え)　いいですよ。', 'Sure.', 'Sure', '' ],
    [ '窓を　閉めて　くれますか。', 'Can you close the window?', 'Can', '' ],
    [ '(答え)　申し訳ありませんが　できません。', 'I\'m sorry, you can\'t.', 'sorry' ],
    [ 'この辞書を　使っても　いいですか。', 'Can I use this dictionary?', 'Can', '' ] 
  ],
],  
// 152-5
[
  "all5",
  [
    [ '(答え)　いいえ　忙しくありません。', 'No, he has not.', 'has', '' ],
    [ '(答え)　はい　忙しいです。', 'Yes, he has.', 'has', '' ],
    [ 'あなたのお父さんは　先週からずっと　忙しいですか。', 'Has your father been busy since last week?', 'Has', '' ],
    [ '私は　１５年間　ずっと横浜に住んでいます。', 'I have lived in Yokohama for fifteen years.', 'have', '' ],
    [ 'その知らせは　彼女を　悲しませました。', 'The news made her sad.', 'made', '' ],
    [ '(答え)　いいえ　料理されませんでした。', 'No, it was not.', 'was', '' ],
    [ '(答え)　はい　料理されました。', 'Yes, it was.', 'was', '' ],
    [ 'その魚は　あなたのお母さんに　料理されましたか。', 'Was the fish cooked by your mother?', 'cooked', '' ],
    [ '英語は　多くの人に　話されています。', 'English is spoken by many people.', 'spoken', '' ],
    [ '(答え)　いいえ　けっこうです。', 'No, thank you.', 'thank', '' ],
    [ '(答え)　はい　お願いします。', 'Yes, please.', 'please', '' ],
    [ 'お手伝い　しましょうか。', 'Shall I help you?', 'Shall', '' ],
    [ 'あなたは　ユミと同じくらい　速く　走ることができます。', 'You can run as fast as Yumi.', 'as', '' ],
    [ 'ケンは　彼のチームで１番上手な選手です。', 'Ken is the best player in his team.', 'best', '' ],
    [ '彼女は４人の中で１番きれいです。', 'She is the most beautiful of the four.', 'most', '' ],
    [ 'この本はあの本よりおもしろい。', 'This book is more interesting than that one.', 'more', '' ],
    [ 'ケンは私のクラスで１番背が高い。', 'Ken is the tallest in my class.', 'tallest', '' ],
    [ 'あなたのペンはわたしのものより長い。', 'Your pen is longer than mine.', 'longer', '' ],
    [ 'ギターをひくことはおもしろい。', 'Playing the guitar is fun.', 'Playing', '' ],
    [ '私たちは音楽を聞いて楽しみました。', 'We enjoyed listening to music.', 'listening', '' ],
    [ '(答え)　いいえ　いません。', 'No, there are not.', 'there', '' ],
    [ '(答え)　はい　います。', 'Yes, there are.', 'are', '' ],
    [ '木の下に(何人かの)女の子がいますか。', 'Are there any girls under the tree?', 'Are', '' ],
    [ '私の家の近くに公園があります。', 'There is a park near my house.', 'There', '' ],
    [ 'どちらのえんぴつがあなたのものですか。', 'Which pencil is yours?', 'Which', '' ],
    [ '私は　とても疲れているので　歩くことができません。', 'Because I am very tired, I cannot walk.', 'Because', '' ],
    [ '私が家に帰った時　私の父はテレビを見ていました。', 'When I came home, my father was watching TV.', 'When', '' ],
    [ '私は　その本はおもしろいと思います。', 'I think that the book is interesting.', 'think', '' ],
    [ 'もし明日雨が降れば　私は　家にいるつもりです。', 'If it rains tomorrow, I will stay home.', 'rains', '' ],
    [ 'ユミさんをお願いします。', 'May I speak to Yumi, please?', 'May', '' ],
    [ 'ここで走ってはいけません。', 'You must not run here.', 'not', '' ]
  ],
],  
// 152-6
[
  "all6",
  [
    [ '彼女が描いた絵は美しい。', 'The picture which she painted is beautiful.', 'which', '' ],
    [ 'これは　大阪に行くバスです。', 'This is a bus that goes to Osaka.', 'that', '' ],
    [ '私には東京に住んでいるおばさんがいます。', 'I have an aunt who lives in Tokyo.', 'who', '' ],
    [ 'これは　彼が　とった写真です。', 'This is a picture he took.', 'he', '' ],
    [ 'あそこに立っている少年は私の弟です。', 'The boy standing over there is my brother.', 'standing', '' ],
    [ 'これは　ケンに書かれた手紙です。', 'This is a letter written by Ken.', 'written', '' ],
    [ '大阪への行き方を教えてくださいませんか。', 'Could you tell me how to get to Osaka?', 'Could', '' ],
    [ '私は　あなたに窓を開けるように言いました。', 'I told you to open the window.', 'told', '' ],
    [ '私は　彼にここに来てほしい。', 'I want him to come here.', 'want', '' ],
    [ '私にとって英語を話すことは難しい。', 'It is difficult for me to speak English.', 'to', '' ],
    [ 'あなたは　コンピューターの使い方を知っていますか。', 'Do you know how to use a computer?', 'to', '' ],
    [ '(答え)　いいえ　けっこうです。', 'No, thank you.', 'thank', '' ],
    [ '(答え)　はい　お願いします。', 'Yes, please.', 'please', '' ],
    [ 'コーヒーはいかがですか。', 'Would you like some coffee?', 'Would', '' ],
    [ '私たちといっしょに行きませんか。', 'Would you like to go with us?', 'Would', '' ],
    [ '私は　あなたに会えてうれしい。', 'I am glad to see you.', 'glad', '' ],
    [ '私は　まだ朝食を食べていません。', 'I have not eaten breakfast yet.', 'yet', '' ],
    [ 'あなたは　もうその映画を見ましたか。', 'Have you seen the movie yet?', 'seen', '' ],
    [ '電車はもう出てしまいました。', 'The train has already left.', 'already', '' ],
    [ '私は　ちょうど宿題を終えたところです。', 'I have just finished my homework.', 'just', '' ],
    [ '私は　今までに１度も手紙を書いたことがありません。', 'I have never written a letter.', 'have', '' ],
    [ '(答え)　いいえ　行ったことがありません。', 'No, I have not.', 'have', '' ],
    [ '(答え)　はい　行ったことがあります。', 'Yes, I have.', 'have', '' ],
    [ 'あなたは　今までに北海道に行ったことがありますか。', 'Have you ever been to Hokkaido?', 'been', '' ],
    [ 'ユミは昨日からずっと病気で寝ています。', 'Yumi has been sick in bed since yesterday.', 'been', '' ],
    [ '(答え)　私は　２年間それを勉強しています。', 'I have studied it for two years.', 'for', '' ],
    [ 'あなたは　どのくらい英語を勉強していますか。', 'How long have you studied English?', 'long', '' ] ]
  ],
// 総合問題 1
[
  "g1",
  [ ["この写真は北海道でとられました。", "This picture was taken in Hokkaido.", "taken", ""],
    ["日本食レストランは世界中にあります。", "There are Japanese restaurants all over the world.", "over", ""],
    ["私は　アメリカに一度も言ったことがありません。", "I have never been to America.", "been", ""],
    ["私は　昨日買い物に行きました。", "I went shopping yesterday.", "went", ""],
    ["図書館では走ってはいけません。", "You must not run in the library.", "not", ""],
    ["図書館では走ってはいけません。", "Don't run in the library.", "Don't", ""],
    ["図書館では走ってはいけません。", "You mustn't run in the library.", "mustn't", ""],
    ["トムはボブより上手にサッカーをすることができます。", "Tom can play soccer better than Bob.", "better", ""],
    ["私と図書館に行きましょうか。", "Shall we go to the library with me?", "Shall", ""],
    ["去年　増谷先生が私たちに英語を教えてくれました。", "Last year, Mr. Mashitani taught us English.", "taught", ""],
    ["この時計はおいくらですか。", "How much is this watch?", "much", ""],
    ["あの男性は誰ですか。", "Who is that man?", "Who", ""],
    ["これは　私の父です。", "This is my father.", "This", ""],
    ["彼は　犬を飼っています。", "He has a dog.", "has", ""],
    ["彼は　今　テレビを見ています。 ", "He is watching TV now.", "watching", ""],
    ["あなたは　今　何をしていますか。", "What are you doing now?", "doing", ""],
    ["ドアを開けてもらえますか。", "Can you open the door?", "Can", ""],
    ["あなたは　疲れているにちがいない。", "You must be tired.", "must", ""],
    ["もし明日晴れれば　", "If it is sunny tomorrow,", "If", ""],
    ["私は　彼は　優しいと思う。", "I think that he is kind.", "think", ""],
    ["彼は　とても親切なので　私は　彼が　すきです。", "He is so kind that I like him.", "so", ""],
    ["あなたか私が行くべきです。", "Either you or I should go.", "Either", ""],
    ["私は　　大阪に行く予定です。", "I am going to go to Osaka.", "going", ""],
    ["昨日は雨でした。", "It was rainy yesterday.", "was", ""],
    ["明日は晴れになるでしょう。", "It will be sunny tomorrow.", "be", ""],
    ["私は　多くのペンを持っています。", "I have a lot of pens.", "lot", ""],
    ["私は　いつも幸せです。", "I am always happy.", "always", ""],
    ["私は　たいてい7時に起きます。", "I usually get up at 7.", "usually", ""],        
  ],
],  
// 総合問題 2
[
  "g2",
  [ ["あれは　私の家です。", "That is my house.", "That", ""],
    ["彼女はテニスをします。", "She plays tennis.", "plays", ""],
    ["自分自身でそれをしなさい。", "Do it by yourself.", "yourself", ""],
    ["ドアを開けましょうか", "Shall I open the door?", "Shall", ""],
    ["私は　全ての中で春が一番好きです。", "I like spring the best of all", "best", ""],
    ["私は　ボブほどは背が高くない。", "I am not as tall as Bob.", "as", ""],
    ["その知らせを聞いて嬉しいです。", "I am glad to hear the news.", "glad", ""],
    ["私は　何か食べ物が欲しいです。", "I want something to eat.", "something", ""],
    ["私は　数学に興味があります。", "I am interested in math.", "interested", ""],
    ["どこでパーティーは開かれましたか。", "Where was the party held?", "held", ""],
    ["この机は木でできています。", "This desk is made of wood.", "of", ""],
    ["チーズは牛乳からできています", "Cheeze is made from milk.", "from", ""],
    ["彼は　まだ宿題を終えていません。", "He hasn't finished his homework yet.", "yet", ""],
    ["私は　先週からずっと風邪です。", "I have been sick since last week.", "since", ""],
    ["川で泳ぐことは私にとって難しい。", "Swimming in the river is difficult for me.", "Swimming", ""],
    ["私たちは今　学校に歩いているところです。", "We are walking to school now.", "walking", ""],
    ["（部屋に）入っていいですか。", "May I come in?", "May", ""],
    ["私は　カギを探しているところです。", "I'm looking for the key.", "looking", ""],
    ["将来について心配するな。", "Do not worry about the future.", "Do", ""],
    ["将来について心配するな。", "Don't worry about the future.", "Don't", ""],
    ["修学旅行は最高の思い出の１つです。", "The school trip is one of the best memories.",  "one", ""],
    ["2時間前　雨が降り始めました。", "It started to rain two hours ago.", "started", ""],
    ["机の上に本は一冊もありません。", "There are not any books on the desk.", "any", ""],
    ["私は　学生です。", "I am a student.", "am", ""], 
  ],
],  
]

window.addEventListener('load', init);

const player = new talkify.Html5Player();
player.forceLanguage('en');
player.setRate(0.8);

// Date
const now   = new Date();       
const year  = now.getFullYear();
const month = now.getMonth()+1;
const day   = now.getDate();

// 制限時間
const levels = {
  easy:100,
  medium:10,
  hard:5
};
// 制限時間を設定する
let currentLevel= levels.easy;

// 間違えた問題
var wrong_quiz = [];

//gloabals
// 現在のクイズ番号
let quiz_no = 0;
let time = currentLevel; 
let isPlaying;

// 学習時間の設定
let PassSec = 180;
let PassageID = setInterval('showPassage()',1000);
let seconds = document.querySelector('#seconds');

// DOM
const wordInput = document.querySelector('#word-input');
const result = document.querySelector('#result');
const japanese = document.querySelector('#japanese');
const english = document.querySelector('#english');
const answer = document.querySelector('#answer');
const hint = document.querySelector('#hint');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const input_focus = document.querySelector('#word-input');
const title = document.querySelector('#title');
const hide_answer = document.querySelector('#hide_answer');
const hide_quiz = document.querySelector('#hide_quiz');

// input を非表示
wordInput.style.display = "none"

// 重複を削除するユーティリティ
function uniq(items, key) {
  var set = {};
  return items.filter(function(item) {
      var k = key ? key.apply(item) : item;
      return k in set ? false : set[k] = true;
  })
}

// 初期化
function init(){
  // 答えを表示
  showAnswer();
  // 経過時間を表示
  //seconds.innerHTML = currentLevel;
  // 入力に対して正誤判定をする
  wordInput.addEventListener('input', startMatch); 
  PassSec = 180;
}

// hook
var current_quizzes;

function changeQuiz(name){
  // quiz番号
  quiz_no = name;
  // 現在のクイズ一覧を設定
  current_quizzes = quizzes.filter(x=>x[0]===name).map(x=>x[1])[0]||null;
  // 時間を表示する
  seconds.innerHTML = currentLevel;
  //  クイズを配列から読み込む
  showQuiz();
  // 正誤判定をする
  wordInput.addEventListener('input', startMatch); 
  // フォーカスをON
  input_focus.focus();
  // 文法一覧非表示
  grammarBtns.style.display = "none";
  title.style.display = "none";
  wordInput.style.display = "block";
  input_focus.focus();
}

// hook
var original_words;
var original_sen;
var english_quiz;
var current_quiz_no = 5;

function reg(pattern){
  regex = new RegExp('\\b'+ pattern + '\\b', 'gi');
  return regex;
}

function showQuiz(){
  showGrammar();
  if(current_quiz_no <= 1){
    wrong_quiz = uniq(wrong_quiz, [].join);

    wordInput.style.display = "none";
    japanese.style.display = "none";
    english.style.display = "none";
    answer.style.display = "none";
    hint.style.display = "none";
    hide_answer.style.display = "none";
    hide_quiz.style.display = "none";
    
    // show the wrong list
    for(let i = 0; i < wrong_quiz.length; i++){
        result.insertAdjacentHTML('beforeend', `<div class="wrong_quiz"><div class="quiz_ja">${i+". "} ${wrong_quiz[i][0]}</div><div class="quiz_en">${wrong_quiz[i][1]}</div><div class="quiz_ans">${wrong_quiz[i][2]}</div><div class="quiz_hint">${wrong_quiz[i][3]}</div></div>`);
    }

    result.firstElementChild.style.display = "none"

    var target = document.getElementById("container");
    target.style.margin = 0;
    target.style.height = 0;

    namae.innerHTML += `<p>日時：${now.getFullYear()}年${month}月${day}日　　名前：<input type="text" id="name" name="name" required></p><form>
    <input type="button" value="印刷する" onclick="window.print();" /></form>`;

    japanese.innerHTML = "お疲れ様でした。";
    english.innerHTML = "次の問題に進んでください。";
    answer.innerHTML = "";
    current_quiz_no = 5;
  }else{
    // ランダムに問題番号を選ぶ
    current_quiz_no = current_quizzes.length - 1;

    // 英文に空欄を入れる
   original_words = current_quizzes[current_quiz_no][2];
   original_sen = current_quizzes[current_quiz_no][1];

   // 英文に空欄をつくる
   pattern = reg(original_words);
   english_quiz = original_sen.replace(regex, ' __________ ');

  // 問題をUIに挿入する
  japanese.innerHTML = current_quizzes[current_quiz_no][0];
  english.innerHTML = english_quiz;
  answer.innerHTML = current_quizzes[current_quiz_no][2];
  hint.innerHTML = current_quizzes[current_quiz_no][3];
  // 英文を音声で再生する
  player.playText(current_quizzes[current_quiz_no][1]);  

  // カウンタを開始する
  startShowing();

  // 問題番号を1つ減らす
  current_quizzes.pop();
  }
}

// 繰り返し処理の中身
function showPassage() {
  PassSec--;   // カウントアップ
  var msg = "残り" + PassSec + "秒";   // 表示文作成
  document.getElementById("PassageArea").innerHTML = msg;   // 表示更新
  if(PassSec <= 0){
    japanese.innerHTML = "お疲れ様でした。";
    english.innerHTML = "次の問題に進んでください。";
    clearInterval(PassageID);
  }
}
 
// 繰り返し処理の開始
function startShowing() {
   document.getElementById("startcount").disabled = true;   // 開始ボタンの無効化
   hide_quiz.style.display = "none";
   hide_answer.style.display = "block";
}
 
// 繰り返し処理の中止
function stopShowing() {
   //clearInterval( PassageID );   // タイマーのクリア
   document.getElementById("startcount").disabled = false;   // 開始ボタンの有効化
}

// start match 
function startMatch() {
  if (matchQuizzes()){
    //console.log('match'); // 正解すればmatchと表示
    isPlaying= true;
    showQuiz();
    wordInput.value= "";
  }
}

var wrong_temp = [];
function matchQuizzes() {
  if(wordInput.value === answer.innerHTML){
    message.innerHTML = "";
    return true;
  }else if(!answer.innerHTML.match(wordInput.value)){
    //console.log("wrong");
    wrong_temp.push(japanese.innerHTML);
    wrong_temp.push(english.innerHTML);
    wrong_temp.push(answer.innerHTML);
    wrong_temp.push(hint.innerHTML);
    wrong_quiz.push(wrong_temp);
    wrong_temp = [];
  }else if(answer.innerHTML.match(wordInput.value)){
//    console.log("correct");
  }else{
    message.innerHTML = "" ; 
    return false;
  }
  if(answer.style.display == "block"){
    answer.style.display = "none";
    hint.style.display = "none";
	}
}

document.getElementById("answer").style.display = "none";
function showAnswer(){
  if(true){
    wrong_temp.push(japanese.innerHTML);
    wrong_temp.push(english.innerHTML);
    wrong_temp.push(answer.innerHTML);
    wrong_temp.push(hint.innerHTML);
    wrong_quiz.push(wrong_temp);
    wrong_temp = [];
  }
	if(answer.style.display == "block"){
		// noneで非表示
    answer.style.display = "none";
    hint.style.display = "none";
	}else{
		// blockで表示
    answer.style.display = "block";
    hint.style.display = "block";
	}
}
// 初期状態で答えを隠す
showAnswer()
hide_answer.style.display = "none";

document.getElementById("grammarBtns").style.display = "block";
function showGrammar(){
		grammarBtns.style.display = "none";
}
