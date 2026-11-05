/* Pocket Class India - picture dictionary (PicDict).
   Turns an everyday word (English, Hindi or Punjabi) into a picture from the picture kit (js/pics.js), so Classes 1-5
   can answer by looking at pictures instead of reading. Nothing here is AI: it is a hand-made word list.

     PicDict.forText(text, { context, siblings, decorative }) -> { svg, label, key, kind } | null
     PicDict.forOptions(options, { q })  -> array of those (one per option) when EVERY option has a picture and no two
                                            options share a picture; otherwise null (all or nothing, so no option stands out)
     PicDict.forQuestion(item)           -> { svg, label, key } | null   a picture for the question itself (see below)
     PicDict.size                        -> { en, hi, pa, special } how many words are known

   How a word is found: lower-case, articles a/an/the dropped, simple plurals handled (cows -> cow, mangoes -> mango,
   leaves -> leaf), hyphens read as spaces ("ice-cream"), Hindi/Punjabi nukta dots ignored. Then, in this order:
     1. money "₹5" -> a coin (1, 2, 5, 10) or a note (10, 20, 50, 100, 200, 500); other amounts have no picture
     2. numbers 1-10 (digits, English, Hindi and Punjabi words and digits) -> that many dots in a ten-frame
     3. colours (English, Hindi, Punjabi) -> a paint splash
     4. shapes (English, Hindi, Punjabi) -> Pics.shape
     5. words that two things share ("bat", "orange", "mouse") -> decided by the question text, else no picture
     6. everything else in the table below -> Pics.item(name). The item is looked up in Pics.names AT RUNTIME, so a word
        simply has no picture until its drawing exists.

   Question pictures (forQuestion), only for questions that have no picture of their own and are not marked noPic:
     (a) a shape word in the question shows that shape;
     (b) otherwise exactly one picturable noun that is NOT in any option shows that noun
         ("How many legs does a hen have?" shows a hen; body parts, places like home and school, and colour questions never do);
     two nouns compared ("Which is shorter: a cricket bat or a pencil?") show nothing here, because their options carry the pictures;
     the picture is never one that is in the correct answer or in any other option (it would give the answer away);
     questions with numbers in them (word problems) get none.

   ---------------------------------------------------------------------------------------------------------------
   FOR THE TEACHER'S REVIEW: every Hindi and Punjabi word below, with the picture it shows. The table lines read
       picture-name | English words | Hindi words | Punjabi words
   (comma between words; "a/b" after the picture name means "use b if a has not been drawn yet").
   NEW (auto-pictures): the action words (stand walk run jump sit sleep eat drink sing dance read write cry laugh swim fly),
   describing words (big small tall short hot cold happy sad heavy light full empty fast slow; soft shows a pillow, hard a stone)
   and sky, bulb (light, when it means a lamp), tongue, fruit, wind/air, and the numbers 11-20 (a full ten-frame plus the extra dots).
   Hindi and Punjabi verbs are only the infinitives; खाना / सोना (food, gold) are left out on purpose because they have two meanings.
   Also: PicDict.illustrate(text, { context, max = 3, size = 56, title, noPic }) gives a small picture strip for a sentence
   (a count plus a thing = that many; colour plus thing; up to 3 things side by side; shapes; money) or null. See its comment below.
   BATCH 3 (words that were one or two words away from a picture answer). New Hindi / Punjabi words, with the picture they show:
     aliases added to old pictures: रेल (train), झोला (bag), पत्ती (leaf; पत्तियाँ/पत्ते are read from it), पर्वत (mountain), बकरा and ਬੱਕਰਾ (goat), ਮੁਰਗਾਂ (rooster),
       घोड़ी (horse), कंकड़ (stone), ਬਿੱਲੀ ਮਾਸੀ (cat), ਕੁੱਤੀ (dog), माँ/पिता now show a woman/man, नानी, नाना, ਨਾਨੀ, ਨਾਨਾ (grandmother, grandfather)
     things: माचिस ਮਾਚਿਸ (matchbox), बैल ਬਲਦ (ox), बैलगाड़ी ਗੱਡਾ ਬੈਲਗੱਡੀ (bullock cart), भिंडी ਭਿੰਡੀ (okra), मिट्टी ਮਿੱਟੀ (soil), मेमना (lamb), पिल्ला ਕਤੂਰਾ (puppy),
       नमक ਲੂਣ ਨਮਕ (salt), पपीता ਪਪੀਤਾ, तेल ਤੇਲ (oil), चॉक (chalk), बन (bun), जग ਜੱਗ, मग ਮੱਗ, मटका घड़ा ਘੜਾ ਮਟਕਾ (clay pot), इमली ਇਮਲੀ, अनार ਅਨਾਰ, गुड़ ਗੁੜ,
       टैक्सी ਟੈਕਸੀ, गेहूँ ਕਣਕ, गन्ना ਗੰਨਾ, पटाखा पटाखे ਪਟਾਕਾ ਪਟਾਕੇ (firecracker, only when the question is about Diwali, noise or fire), गेंदा (marigold), ऊन ਉੱਨ (wool),
       नींबू ਨਿੰਬੂ, करेला ਕਰੇਲਾ, मिर्च ਮਿਰਚ, चाचा मामा ताऊ ਚਾਚਾ ਮਾਮਾ ਤਾਇਆ (uncle), वैज्ञानिक ਵਿਗਿਆਨੀ (scientist), धरती पृथ्वी ਧਰਤੀ ਪ੍ਰਿਥਵੀ (globe, not when the question is about soil/plants)
     answers only (never drawn in notes or above questions): पार्क ਪਾਰਕ, बाग बगीचा ਬਾਗ ਬਗੀਚਾ, गाँव ਪਿੰਡ, शहर ਸ਼ਹਿਰ, बाज़ार ਬਾਜ਼ਾਰ, अस्पताल ਹਸਪਤਾਲ, पुस्तकालय ਲਾਇਬ੍ਰੇਰੀ, बेंच ਬੈਂਚ, पैसा पैसे ਪੈਸਾ ਪੈਸੇ,
       झंडा तिरंगा ਝੰਡਾ ਤਿਰੰਗਾ, खिलौना ਖਿਡੌਣਾ, जड़ ਜੜ੍ਹ, तना ਤਣਾ, पुल ਪੁਲ, ताली बजाना ਤਾੜੀ ਮਾਰਨਾ, खेलना ਖੇਡਣਾ, रसोइया ਰਸੋਈਆ, पतला ਪਤਲਾ, मोटा ਮੋਟਾ (thick), खट्टा ਖੱਟਾ (a lemon),
       कड़वा ਕੌੜਾ (karela), तीखा ਤਿੱਖਾ (chilli), मीठा ਮਿੱਠਾ (sweets), खुरदरा ਖੁਰਦਰਾ, नया ਨਵਾਂ, पुराना ਪੁਰਾਣਾ,
       बिजली ਬਿਜਲੀ (a bulb if the question is about a switch, wire or bulb, a lightning bolt if it is about clouds or the sky, else nothing), बर्फ ਬਰਫ਼ (snow in snowfall/mountain questions, ice in cold/melting questions, else nothing)
     positions (a ball and the same cabinet): अंदर ਅੰਦਰ (in), ऊपर ਉੱਪਰ (above), नीचे ਹੇਠਾਂ (under), पास ਨੇੜੇ (near), दूर ਦੂਰ (far), पीछे ਪਿੱਛੇ (behind), आगे ਅੱਗੇ (in front), बाहर ਬਾਹਰ (outside), बीच ਵਿਚਕਾਰ (between)
     numbers: ० to १०० and ੦ to ੧੦੦ (digits), बीस तीस चालीस पचास साठ सत्तर अस्सी नब्बे सौ, ਵੀਹ ਤੀਹ ਚਾਲੀ ਪੰਜਾਹ ਸੱਠ ਸੱਤਰ ਅੱਸੀ ਨੱਬੇ ਸੌ, शून्य ज़ीरो ਸਿਫ਼ਰ ਜ਼ੀਰੋ (empty ten-frame); 21-99 show tens bundles and single sticks
     Spelling, plural, tense, "begins with" and place-value questions never show picture answers (a picture would hide the mistake or give away the answer).
   Please check each Hindi and Punjabi spelling and meaning. Colours, numbers and shapes follow the table.
   --------------------------------------------------------------------------------------------------------------- */
(function (root) {
  "use strict";

  /* ---------- the word table ---------- */
  var TABLE = [
    /* animals */
    "cow | cow | गाय | ਗਾਂ, ਗਊ",
    "dog | dog | कुत्ता | ਕੁੱਤਾ, ਕੁੱਤੀ",
    "cat | cat | बिल्ली | ਬਿੱਲੀ, ਬਿੱਲੀ ਮਾਸੀ",
    "hen | hen, chicken | मुर्गी | ਮੁਰਗੀ",
    "rooster | rooster, cock | मुर्गा | ਮੁਰਗਾ, ਮੁਰਗਾਂ",
    "goat | goat | बकरी, बकरा | ਬੱਕਰੀ, ਬੱਕਰਾ",
    "horse | horse | घोड़ा, घोड़ी | ਘੋੜਾ",
    "sheep | sheep | भेड़ | ਭੇਡ",
    "pig | pig | सूअर | ਸੂਰ",
    "lion | lion | शेर | ਸ਼ੇਰ",
    "tiger | tiger | बाघ | ਬਾਘ",
    "monkey | monkey | बंदर | ਬਾਂਦਰ",
    "rabbit | rabbit | खरगोश | ਖਰਗੋਸ਼",
    "frog | frog | मेंढक | ਡੱਡੂ",
    "snake | snake | साँप | ਸੱਪ",
    "crow | crow | कौआ | ਕਾਂ",
    "parrot | parrot | तोता | ਤੋਤਾ",
    "sparrow | sparrow | | ਚਿੜੀ",
    "pigeon | pigeon | कबूतर | ਕਬੂਤਰ",
    "owl | owl | उल्लू | ਉੱਲੂ",
    "zebra | zebra | ज़ेबरा |",
    "giraffe | giraffe | जिराफ़ |",
    "tortoise | tortoise | कछुआ | ਕੱਛੂ",
    "crocodile | crocodile | मगरमच्छ | ਮਗਰਮੱਛ",
    "squirrel | squirrel | गिलहरी | ਗਿਲਹਰੀ",
    "spider | spider | मकड़ी | ਮੱਕੜੀ",
    "deer | deer | हिरण | ਹਿਰਨ",
    "camel | camel | ऊँट | ਊਠ",
    "donkey | donkey | गधा | ਗਧਾ",
    "bear | bear | भालू | ਰਿੱਛ",
    "ant | ant | चींटी | ਕੀੜੀ",
    "bee | bee | मधुमक्खी |",
    "fish | fish | मछली | ਮੱਛੀ",
    "bird | bird | चिड़िया, पक्षी | ਪੰਛੀ",
    "butterfly | butterfly | तितली | ਤਿਤਲੀ",
    "duck | duck | बत्तख | ਬੱਤਖ",
    "peacock | peacock | मोर | ਮੋਰ",
    "elephant | elephant | हाथी | ਹਾਥੀ",
    "mouse/rat | rat | चूहा | ਚੂਹਾ",
    "crab | crab | केकड़ा | ਕੇਕੜਾ",
    "swan | swan | हंस | ਹੰਸ",
    "bat-animal | | चमगादड़ |",
    "cricket-bat/cricketbat | cricket bat | बल्ला | ਬੱਲਾ",
    /* food and drink */
    "apple | apple | सेब | ਸੇਬ",
    "mango | mango | आम | ਅੰਬ",
    "banana | banana | केला | ਕੇਲਾ",
    "orange | | संतरा | ਸੰਤਰਾ",
    "grapes | grape, grapes | अंगूर | ਅੰਗੂਰ",
    "strawberry | strawberry | स्ट्रॉबेरी |",
    "watermelon | watermelon | तरबूज | ਤਰਬੂਜ਼",
    "carrot | carrot | गाजर | ਗਾਜਰ",
    "potato | potato | आलू | ਆਲੂ",
    "tomato | tomato | टमाटर | ਟਮਾਟਰ",
    "onion | onion | प्याज | ਪਿਆਜ਼",
    "pea | pea | मटर | ਮਟਰ",
    "roti | roti, chapati | रोटी | ਰੋਟੀ",
    "rice | rice | चावल | ਚੌਲ",
    "bread | bread | ब्रेड |",
    "egg | egg | अंडा | ਆਂਡਾ, ਅੰਡਾ",
    "milk | milk | दूध | ਦੁੱਧ",
    "water | water | पानी, जल | ਪਾਣੀ, ਜਲ",
    "laddoo | laddoo, laddu | लड्डू | ਲੱਡੂ",
    "samosa | samosa | समोसा | ਸਮੋਸਾ",
    "cake | cake | केक | ਕੇਕ",
    "ice-cream/icecream | ice cream | आइसक्रीम |",
    "tea | tea | चाय | ਚਾਹ",
    "juice | juice | जूस | ਜੂਸ",
    "honey | honey | शहद | ਸ਼ਹਿਦ",
    "dal | dal | दाल | ਦਾਲ",
    "plum | plum | |",
    "guava | guava | अमरूद | ਅਮਰੂਦ",
    "pineapple | pineapple | अनानास | ਅਨਾਨਾਸ",
    "chocolate | chocolate | चॉकलेट | ਚਾਕਲੇਟ",
    "sweets | sweets | मिठाई | ਮਠਿਆਈ",
    /* home and school things */
    "table | table | मेज़ | ਮੇਜ਼",
    "chair | chair | कुर्सी | ਕੁਰਸੀ",
    "bed | bed | बिस्तर | ਬਿਸਤਰਾ",
    "door | door | दरवाज़ा | ਦਰਵਾਜ਼ਾ",
    "window | window | खिड़की | ਖਿੜਕੀ",
    "clock | clock | घड़ी | ਘੜੀ",
    "key | key | चाबी | ਚਾਬੀ",
    "lock | lock | ताला | ਤਾਲਾ",
    "fan | fan | पंखा | ਪੱਖਾ",
    "lamp | lamp | दीपक |",
    "bucket | bucket | बाल्टी | ਬਾਲਟੀ",
    "pot | pot, clay pot, matka | मटका, घड़ा | ਘੜਾ, ਮਟਕਾ",
    "cup | cup | कप | ਕੱਪ",
    "mug | mug | मग | ਮੱਗ",
    "spoon | spoon | चम्मच | ਚਮਚਾ",
    "plate | plate | थाली | ਥਾਲੀ",
    "glass | glass | गिलास | ਗਲਾਸ",
    "bottle | bottle | बोतल | ਬੋਤਲ",
    "broom | broom | झाड़ू | ਝਾੜੂ",
    "pillow | pillow, soft | तकिया, मुलायम | ਸਿਰਹਾਣਾ, ਨਰਮ",
    "bag | bag, school bag | बस्ता, बैग, झोला | ਬਸਤਾ, ਬੈਗ",
    "umbrella | umbrella | छाता | ਛੱਤਰੀ",
    "book | book | किताब | ਕਿਤਾਬ",
    "pencil | pencil | पेंसिल | ਪੈਨਸਿਲ",
    "pen | pen | कलम, पेन | ਕਲਮ, ਪੈੱਨ",
    "crayon | crayon | |",
    "ruler | ruler | |",
    "eraser | eraser, rubber | |",
    "notebook | notebook, copy | कॉपी | ਕਾਪੀ",
    "ball | ball | गेंद | ਗੇਂਦ",
    "doll | doll | गुड़िया | ਗੁੱਡੀ",
    "kite | kite | पतंग | ਪਤੰਗ",
    "balloon | balloon | गुब्बारा | ਗੁਬਾਰਾ",
    "bell | bell | घंटी | ਘੰਟੀ",
    "basket | basket | टोकरी | ਟੋਕਰੀ",
    "box | box | डिब्बा | ਡੱਬਾ",
    "brush | brush | |",
    "comb | comb | कंघी | ਕੰਘੀ",
    "soap | soap | साबुन | ਸਾਬਣ",
    "towel | towel | तौलिया | ਤੌਲੀਆ",
        "mat | mat | चटाई | ਚਟਾਈ",
    "brick | brick | ईंट | ਇੱਟ",
    "drum | drum | ढोल | ਢੋਲ",
    "toothbrush | toothbrush | टूथब्रश |",
    "tap | tap | नल | ਨਲ",
    "scissors | scissors | कैंची | ਕੈਂਚੀ",
    "knife | knife | चाकू | ਚਾਕੂ",
    "house | house, home | घर | ਘਰ",
    "school | school | स्कूल | ਸਕੂਲ",
    "temple | temple | मंदिर | ਮੰਦਰ",
    "hut | hut | झोपड़ी | ਝੌਂਪੜੀ",
    "tent | tent | तंबू |",
    "diya | diya, lamp | दीया, दीपक | ਦੀਵਾ",
    "computer | computer | कंप्यूटर | ਕੰਪਿਊਟਰ",
    "phone | phone, mobile | फ़ोन |",
    "television | television, tv | टीवी |",
    "radio | radio | रेडियो |",
    /* action words (a child doing it) and describing words (clear pairs) - these show a picture of the idea; "abstract" in the code below */
    "stand | stand, standing | खड़ा होना | ਖੜ੍ਹਨਾ",
    "walk | walk, walking | चलना | ਤੁਰਨਾ",
    "run | run, running | दौड़ना | ਦੌੜਨਾ",
    "jump | jump, jumping | कूदना | ਛਾਲ ਮਾਰਨਾ, ਕੁੱਦਣਾ",
    "sit | sit, sitting | बैठना | ਬੈਠਣਾ",
    "sleep | sleep, sleeping | | ਸੌਣਾ",
    "eat | eat, eating | |",
    "drink | drink, drinking | पीना | ਪੀਣਾ",
    "sing | sing, singing | गाना | ਗਾਉਣਾ",
    "dance | dance, dancing | नाचना | ਨੱਚਣਾ",
    "read | read, reading | पढ़ना | ਪੜ੍ਹਨਾ",
    "write | write, writing | लिखना | ਲਿਖਣਾ",
    "cry | cry, crying | रोना | ਰੋਣਾ",
    "laugh | laugh, laughing | हँसना | ਹੱਸਣਾ",
    "swim | swim, swimming | तैरना | ਤੈਰਨਾ",
    "fly | fly, flying | उड़ना | ਉੱਡਣਾ",
    "big | big, large | बड़ा | ਵੱਡਾ",
    "small | small, tiny | छोटा | ਛੋਟਾ",
    "tall | tall | |",
    "short | short | |",
    "hot | hot | गरम | ਗਰਮ",
    "cold | cold | ठंडा | ਠੰਡਾ",
    "happy | happy | खुश | ਖੁਸ਼",
    "sad | sad | उदास | ਉਦਾਸ",
    "heavy | heavy | भारी | ਭਾਰਾ",
    "light | | हल्का | ਹਲਕਾ",
    "full | full | भरा | ਭਰਿਆ",
    "empty | empty | खाली | ਖਾਲੀ",
    "fast | fast, quick | तेज़ | ਤੇਜ਼",
    "slow | slow, slowly | धीमा, धीरे | ਹੌਲੀ",
    /* a few more everyday words */
    "sky | sky | आसमान, आकाश | ਅਸਮਾਨ, ਆਕਾਸ਼",
    "bulb | bulb, light bulb | बल्ब, रोशनी | ਬੱਲਬ, ਰੋਸ਼ਨੀ",
    "fruit | fruit, fruits | फल | ਫਲ",
    "wind | wind, air | हवा | ਹਵਾ",
    /* nature */
    "sun | sun | सूरज | ਸੂਰਜ",
    "moon | moon | चाँद, चांद | ਚੰਨ, ਚੰਦ",
    "star | star | तारा | ਤਾਰਾ",
    "cloud | cloud | बादल | ਬੱਦਲ",
    "rain | rain | बारिश | ਮੀਂਹ",
    "rainbow | rainbow | इंद्रधनुष |",
    "tree | tree | पेड़ | ਰੁੱਖ, ਦਰਖ਼ਤ",
    "flower | flower | फूल | ਫੁੱਲ",
    "leaf | leaf | पत्ता, पत्ती | ਪੱਤਾ",
    "lotus | lotus | कमल | ਕਮਲ",
    "rose | rose | गुलाब | ਗੁਲਾਬ",
    "sunflower | sunflower | सूरजमुखी | ਸੂਰਜਮੁਖੀ",
    "grass | grass | घास | ਘਾਹ",
    "river | river | नदी | ਨਦੀ",
    "mountain | mountain | पहाड़, पर्वत | ਪਹਾੜ",
    "sea | sea | समुद्र | ਸਮੁੰਦਰ",
    "fire | fire | आग | ਅੱਗ",
    "stone | stone, hard | पत्थर, कंकड़, सख़्त | ਪੱਥਰ, ਸਖ਼ਤ",
    "sand | sand | रेत | ਰੇਤ",
    "seed | seed | बीज | ਬੀਜ",
        "snow | snow | |",
    "ice | ice | |",
    /* transport */
    "car | car | कार | ਕਾਰ",
    "bus | bus | बस | ਬੱਸ",
    "auto | auto, auto rickshaw, rickshaw | ऑटो |",
    "cycle | cycle, bicycle, bike | साइकिल | ਸਾਈਕਲ",
    "boat | boat | नाव | ਕਿਸ਼ਤੀ",
    "ship | ship | |",
    "train | train, metro train | रेलगाड़ी, रेल, ट्रेन | ਰੇਲਗੱਡੀ",
    "aeroplane/airplane/plane | aeroplane, airplane, plane | हवाई जहाज़ | ਹਵਾਈ ਜਹਾਜ਼",
    "truck | truck | ट्रक | ਟਰੱਕ",
    "scooter | scooter | स्कूटर |",
    "jeep | jeep | जीप |",
    "helicopter | helicopter | हेलीकॉप्टर |",
    "rocket | rocket | रॉकेट |",
    "tractor | tractor | ट्रैक्टर | ਟਰੈਕਟਰ",
    /* clothes */
    "shoe | shoe | जूता | ਜੁੱਤੀ",
    "cap | cap | टोपी | ਟੋਪੀ",
    "hat | hat | |",
    "shirt | shirt | कमीज़ | ਕਮੀਜ਼",
    "frock | frock, dress | |",
    "sock | sock | मोज़ा | ਜੁਰਾਬ",
    "scarf | scarf | |",
    "helmet | helmet | हेलमेट |",
    "crown | crown | ताज | ਤਾਜ",
    "glasses | glasses, spectacles | चश्मा | ਚਸ਼ਮਾ",
    "watch | watch, wristwatch | |",
    /* body */
    "eye | eye | आँख, आंख | ਅੱਖ",
    "ear | ear | कान | ਕੰਨ",
    "nose | nose | नाक | ਨੱਕ",
    "mouth | mouth | मुँह, मुंह | ਮੂੰਹ",
    "hand | hand | हाथ | ਹੱਥ",
    "leg | leg | टाँग | ਲੱਤ",
    "foot | foot | पैर | ਪੈਰ",
    "tooth | tooth | दाँत | ਦੰਦ",
    "tongue | tongue | जीभ | ਜੀਭ",
    "head | head | सिर | ਸਿਰ",
    "hair | hair | बाल | ਵਾਲ",
    "finger | finger | उँगली | ਉਂਗਲ",
    "thumb | thumb | अंगूठा | ਅੰਗੂਠਾ",
    "arm | arm | |",
    "face | face | चेहरा | ਚਿਹਰਾ",
    "lips | lip, lips | होंठ | ਬੁੱਲ੍ਹ",
    "tail | tail | पूँछ | ਪੂਛ",
    "wing | wing | पंख | ਖੰਭ",
    /* people */
    "boy | boy | लड़का | ਮੁੰਡਾ",
    "girl | girl | लड़की | ਕੁੜੀ",
    "man | man | आदमी | ਆਦਮੀ",
    "woman | woman | औरत | ਔਰਤ",
    "baby | baby | बच्चा | ਬੱਚਾ",
    "child | child | |",
    "woman | mother, mom, mummy | माँ | ਮਾਂ",
    "man | father, dad, papa | पिता, पापा | ਪਿਤਾ",
    "grandmother | grandmother | दादी, नानी | ਦਾਦੀ, ਨਾਨੀ",
    "grandfather | grandfather | दादा, नाना | ਦਾਦਾ, ਨਾਨਾ",
    "teacher | teacher | शिक्षक | ਅਧਿਆਪਕ",
    "doctor | doctor | डॉक्टर | ਡਾਕਟਰ",
    "farmer | farmer | किसान | ਕਿਸਾਨ",
    "police | policeman, police, police officer | पुलिस |",
    "family | family | परिवार | ਪਰਿਵਾਰ",
    "driver | driver | ड्राइवर | ਡਰਾਈਵਰ",
    "king | king | राजा | ਰਾਜਾ",
    "queen | queen | रानी | ਰਾਣੀ",
    /* batch 3: drawn for the one-word-away questions */
    "matchbox | matchbox | माचिस | ਮਾਚਿਸ",
    "ox | ox, bullock | बैल | ਬਲਦ",
    "bullock-cart | bullock cart, ox cart | बैलगाड़ी | ਗੱਡਾ, ਬੈਲਗੱਡੀ",
    "okra | okra, lady finger, ladyfinger | भिंडी | ਭਿੰਡੀ",
    "soil | soil, mud | मिट्टी | ਮਿੱਟੀ",
    "lamb | lamb | मेमना |",
    "puppy | puppy, pup | पिल्ला | ਕਤੂਰਾ",
    "salt | salt | नमक | ਲੂਣ, ਨਮਕ",
    "papaya | papaya | पपीता | ਪਪੀਤਾ",
    "oil | oil | तेल | ਤੇਲ",
    "chalk | chalk | चॉक |",
    "bun | bun | बन |",
    "eagle | eagle | |",
    "globe | globe | |",
    "jug | jug | जग | ਜੱਗ",
    "tamarind | tamarind | इमली | ਇਮਲੀ",
    "pomegranate | pomegranate | अनार | ਅਨਾਰ",
    "jaggery | jaggery | गुड़ | ਗੁੜ",
    "taxi | taxi | टैक्सी | ਟੈਕਸੀ",
    "wheat | wheat | गेहूँ, गेहूं | ਕਣਕ",
    "sugarcane | sugarcane, sugar cane | गन्ना | ਗੰਨਾ",
    "cracker | firecracker, firecrackers | पटाखा, पटाखे | ਪਟਾਕਾ, ਪਟਾਕੇ",
    "marigold | marigold | गेंदा |",
    "wool | wool | ऊन | ਉੱਨ",
    "lemon | lemon | नींबू | ਨਿੰਬੂ",
    "karela | karela, bitter gourd | करेला | ਕਰੇਲਾ",
    "chilli | chilli, chili | मिर्च | ਮਿਰਚ",
    "uncle | uncle | चाचा, मामा, ताऊ | ਚਾਚਾ, ਮਾਮਾ, ਤਾਇਆ",
    "scientist | scientist | वैज्ञानिक | ਵਿਗਿਆਨੀ",
    "women | women | |",
    "men | men | |",
    "children | children | |",
  ];
  /* Words that only make sense as an ANSWER picture (positions, places, describing words, ideas). They are never drawn for a question's subject
     or in notes (PicDict.illustrate): "in", "up", "root" (square root), "play" and "old" are everywhere in ordinary sentences. */
  var IDEAS = [
    "pos-in | in, inside | अंदर | ਅੰਦਰ",
    "pos-on | on | |",
    "pos-under | under, below, beneath | नीचे | ਹੇਠਾਂ",
    "pos-above | above | ऊपर | ਉੱਪਰ",
    "pos-over | over | |",
    "pos-near | near, beside, next to | पास | ਨੇੜੇ",
    "pos-far | far | दूर | ਦੂਰ",
    "pos-out | outside | बाहर | ਬਾਹਰ",
    "pos-behind | behind | पीछे | ਪਿੱਛੇ",
    "pos-front | in front of, in front | आगे | ਅੱਗੇ",
    "pos-between | between | बीच | ਵਿਚਕਾਰ",
    "pos-up | up | |",
    "pos-down | down | |",
    "park | park | पार्क | ਪਾਰਕ",
    "garden | garden | बाग, बगीचा | ਬਾਗ, ਬਗੀਚਾ",
    "village | village | गाँव, गांव | ਪਿੰਡ",
    "city | city | शहर | ਸ਼ਹਿਰ",
    "market | market | बाज़ार | ਬਾਜ਼ਾਰ",
    "hospital | hospital | अस्पताल | ਹਸਪਤਾਲ",
    "library | library | पुस्तकालय | ਲਾਇਬ੍ਰੇਰੀ",
    "bench | bench | बेंच | ਬੈਂਚ",
    "money | money | पैसा, पैसे | ਪੈਸਾ, ਪੈਸੇ",
    "flag | flag | झंडा, तिरंगा | ਝੰਡਾ, ਤਿਰੰਗਾ",
    "toy | toy | खिलौना | ਖਿਡੌਣਾ",
    "root | root | जड़ | ਜੜ੍ਹ",
    "stem | stem | तना | ਤਣਾ",
    "bridge | bridge | पुल | ਪੁਲ",
    "lightning | lightning | |",
    "kick | kick, kicking | |",
    "clap | clap, clapping | ताली बजाना | ਤਾੜੀ ਮਾਰਨਾ",
    "play | play, playing | खेलना | ਖੇਡਣਾ",
    "cook | cook, cooking, chef | रसोइया | ਰਸੋਈਆ",
    "thin | thin | पतला | ਪਤਲਾ",
    "fat | fat, thick | मोटा | ਮੋਟਾ",
    "lemon | sour | खट्टा | ਖੱਟਾ",
    "karela | bitter | कड़वा | ਕੌੜਾ",
    "chilli | spicy | तीखा | ਤਿੱਖਾ",
    "salt | salty | |",
    "sweets | | मीठा | ਮਿੱਠਾ",
    "angry | angry | |",
    "loud | loud, loudly | |",
    "rough | rough | खुरदरा | ਖੁਰਦਰਾ",
    "new | new | नया | ਨਵਾਂ",
    "old | old | पुराना | ਪੁਰਾਣਾ",
    "sun | bright | |",
    "high | high | |",
    "big | huge | |",
    "fast | quickly | |",
  ];

  /* ---------- text normalising ---------- */
  function norm(s) {
    s = String(s == null ? "" : s).normalize("NFC");
    s = s.replace(/\*\*/g, "").replace(/[\u200b-\u200d\ufeff]/g, "").replace(/[\u093c\u0a3c]/g, ""); // zero-width marks; Hindi and Punjabi nukta dots
    s = s.toLowerCase().replace(/[’']s\b/g, "").replace(/[-_]/g, " ");
    s = s.replace(/^[\s"'“”‘’(\[]+|[\s"'“”‘’)\].,!?;:।]+$/g, "").replace(/\s+/g, " ").trim();
    return s.replace(/^(a|an|the) /, "");
  }
  var IRREG = { leaves: "leaf", mice: "mouse", children: "child", men: "man", women: "woman", teeth: "tooth", feet: "foot", geese: "goose", knives: "knife", wolves: "wolf", loaves: "loaf", halves: "half" };
  // The word itself, then the singular forms it could be (cows, mangoes, babies, boxes, buses, leaves).
  function forms(w) {
    var out = [w], parts, last, head, c = [];
    if (/[ऀ-ॿ]/.test(w)) { // Hindi plurals: केले -> केला, मछलियाँ -> मछली, गायें -> गाय
      if (/े$/.test(w)) out.push(w.slice(0, -1) + "ा");
      if (/ियाँ$|ियां$/.test(w)) out.push(w.replace(/ियाँ$|ियां$/, "ी"));
      if (/ें$/.test(w)) out.push(w.slice(0, -2));
      return out;
    }
    if (/[਀-੿]/.test(w)) { // Punjabi plurals: ਮੁੰਡੇ -> ਮੁੰਡਾ, ਬਿੱਲੀਆਂ -> ਬਿੱਲੀ
      if (/ੇ$/.test(w)) out.push(w.slice(0, -1) + "ਾ");
      if (/ੀਆਂ$/.test(w)) out.push(w.slice(0, -3) + "ੀ");
      return out;
    }
    if (!/^[a-z ]+$/.test(w)) return out;
    parts = w.split(" "); last = parts.pop(); head = parts.length ? parts.join(" ") + " " : "";
    if (IRREG[last]) c.push(IRREG[last]);
    if (/ies$/.test(last) && last.length > 4) c.push(last.slice(0, -3) + "y");
    if (/es$/.test(last)) { c.push(last.slice(0, -1)); c.push(last.slice(0, -2)); }
    if (/s$/.test(last) && !/ss$/.test(last)) c.push(last.slice(0, -1));
    c.forEach(function (x) { if (x.length >= 2) out.push(head + x); });
    return out;
  }

  /* ---------- specials: colours, numbers, shapes ---------- */
  var COLOUR_HEX = { red: "#e5473d", blue: "#3b82e0", green: "#4caf50", yellow: "#ffc933", orange: "#f59a23", pink: "#ee6fa4", purple: "#8e44c8", black: "#33333d", white: "#ffffff", brown: "#8a5a2b", grey: "#9aa0a8" };
  var COLOUR_WORDS = {
    red: "red | लाल | ਲਾਲ", blue: "blue | नीला, नीली, नीले | ਨੀਲਾ, ਨੀਲੀ, ਨੀਲੇ", green: "green | हरा, हरी, हरे | ਹਰਾ, ਹਰੀ, ਹਰੇ",
    yellow: "yellow | पीला, पीली, पीले | ਪੀਲਾ, ਪੀਲੀ, ਪੀਲੇ", orange: "orange | नारंगी | ਸੰਤਰੀ", pink: "pink | गुलाबी | ਗੁਲਾਬੀ", purple: "purple | बैंगनी | ਜਾਮਨੀ",
    black: "black | काला, काली, काले | ਕਾਲਾ, ਕਾਲੀ, ਕਾਲੇ", white: "white | सफ़ेद, सफेद | ਚਿੱਟਾ, ਚਿੱਟੀ, ਚਿੱਟੇ", brown: "brown | भूरा | ਭੂਰਾ", grey: "grey, gray | स्लेटी | ਸਲੇਟੀ",
  };
  var NUMBER_WORDS = [
    "1 | one | एक, १ | ਇੱਕ, ੧", "2 | two | दो, २ | ਦੋ, ੨", "3 | three | तीन, ३ | ਤਿੰਨ, ੩", "4 | four | चार, ४ | ਚਾਰ, ੪", "5 | five | पाँच, पांच, ५ | ਪੰਜ, ੫",
    "6 | six | छह, छः, छ:, ६ | ਛੇ, ੬", "7 | seven | सात, ७ | ਸੱਤ, ੭", "8 | eight | आठ, ८ | ਅੱਠ, ੮", "9 | nine | नौ, ९ | ਨੌਂ, ਨੌ, ੯", "10 | ten | दस, १० | ਦਸ, ੧੦",
    "11 | eleven | ग्यारह, ११ | ਗਿਆਰਾਂ, ੧੧", "12 | twelve | बारह, १२ | ਬਾਰਾਂ, ੧੨", "13 | thirteen | तेरह, १३ | ਤੇਰਾਂ, ੧੩", "14 | fourteen | चौदह, १४ | ਚੌਦਾਂ, ੧੪", "15 | fifteen | पंद्रह, पन्द्रह, १५ | ਪੰਦਰਾਂ, ੧੫",
    "16 | sixteen | सोलह, १६ | ਸੋਲਾਂ, ੧੬", "17 | seventeen | सत्रह, १७ | ਸਤਾਰਾਂ, ੧੭", "18 | eighteen | अठारह, १८ | ਅਠਾਰਾਂ, ੧੮", "19 | nineteen | उन्नीस, १९ | ਉੱਨੀ, ੧੯", "20 | twenty | बीस, २० | ਵੀਹ, ੨੦",
  ];
  var SHAPE_WORDS = {
    circle: "circle | वृत्त | ਚੱਕਰ", square: "square | वर्ग | ਵਰਗ", triangle: "triangle | त्रिभुज | ਤਿਕੋਣ", rectangle: "rectangle | आयत | ਆਇਤ", oval: "oval | अंडाकार | ਅੰਡਾਕਾਰ",
    cube: "cube | घन | ਘਣ", cuboid: "cuboid", cone: "cone | शंकु | ਸ਼ੰਕੂ", cylinder: "cylinder | बेलन | ਬੇਲਣ", sphere: "sphere | गोला | ਗੋਲਾ",
  };

  var SPECIAL = {}; // normalised word -> { kind, name }
  var ITEM = {}; // normalised word -> picture name (or "a/b" alternatives)
  var KINDS = {}; // picture name -> "body" for body parts
  // Pictures of an idea rather than a thing: actions (a child doing it) and describing words (clear pairs). They are shown as answers
  // and in notes, but never as "the thing a question is about".
  var ABSTRACT = {};
  var ACTIONS = {}; // the verbs among them
  "stand walk run jump sit sleep eat drink sing dance read write cry laugh swim fly".split(" ").forEach(function (n) { ABSTRACT[n] = 1; ACTIONS[n] = 1; });
  "big small tall short hot cold happy sad heavy light full empty fast slow".split(" ").forEach(function (n) { ABSTRACT[n] = 1; });
  var WORDABS = {}; // words that borrow a thing's picture for an idea (soft -> pillow, hard -> stone): abstract too
  ["soft", "hard", "मुलायम", "सख़्त", "ਨਰਮ", "ਸਖ਼ਤ"].forEach(function (w) { WORDABS[w.normalize("NFC").replace(/[\u093c\u0a3c]/g, "")] = 1; });
  var count = { en: 0, hi: 0, pa: 0, special: 0 };

  function split(s) { return s.split(",").map(function (x) { return x.trim(); }).filter(Boolean); }
  function script(w) { return /[ऀ-ॿ]/.test(w) ? "hi" : /[਀-੿]/.test(w) ? "pa" : "en"; }
  function add(map, word, val, isSpecial) {
    var k = norm(word);
    if (!k || map[k]) return;
    map[k] = val;
    count[isSpecial ? "special" : script(k)]++;
  }

  TABLE.forEach(function (line) {
    var p = line.split("|"), name = p[0].trim(), en = split(p[1] || ""), hi = split(p[2] || ""), pa = split(p[3] || "");
    if (!en.length && !hi.length && !pa.length) return;
    en.forEach(function (w) { add(ITEM, w, name); });
    hi.concat(pa).forEach(function (w) { add(ITEM, w, name); });
  });
  var OPT = {}; // words that are answers only
  IDEAS.forEach(function (line) {
    var p = line.split("|"), name = p[0].trim();
    split(p[1] || "").concat(split(p[2] || ""), split(p[3] || "")).forEach(function (w) { var k = norm(w); if (k && !ITEM[k]) { add(ITEM, w, name); OPT[k] = 1; } });
  });
  ["eye", "ear", "nose", "mouth", "hand", "leg", "foot", "tooth", "tongue", "head", "hair", "finger", "thumb", "arm", "face", "lips", "tail", "wing"].forEach(function (n) { KINDS[n] = "body"; });

  Object.keys(COLOUR_WORDS).forEach(function (c) {
    var p = COLOUR_WORDS[c].split("|");
    split(p[0]).concat(split(p[1] || ""), split(p[2] || "")).forEach(function (w) { add(SPECIAL, w, { kind: "colour", name: c }, true); });
  });
  NUMBER_WORDS.forEach(function (line) {
    var p = line.split("|"), n = Number(p[0]);
    split(p[0]).concat(split(p[1]), split(p[2]), split(p[3])).forEach(function (w) { add(SPECIAL, w, { kind: "num", name: n }, true); });
  });
  Object.keys(SHAPE_WORDS).forEach(function (s) {
    var p = SHAPE_WORDS[s].split("|");
    split(p[0]).concat(split(p[1] || ""), split(p[2] || "")).forEach(function (w) { add(SPECIAL, w, { kind: "shape", name: s }, true); });
  });
  // 0 and 21-100: digits (English, Hindi, Punjabi) and the number words that are regular or that we are sure of
  (function () {
    var ones = "zero one two three four five six seven eight nine".split(" "), tw = "||twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety".split("|"), hiT = { 20: "बीस", 30: "तीस", 40: "चालीस", 50: "पचास", 60: "साठ", 70: "सत्तर", 80: "अस्सी", 90: "नब्बे", 100: "सौ" },
      paT = { 20: "ਵੀਹ", 30: "ਤੀਹ", 40: "ਚਾਲੀ", 50: "ਪੰਜਾਹ", 60: "ਸੱਠ", 70: "ਸੱਤਰ", 80: "ਅੱਸੀ", 90: "ਨੱਬੇ", 100: "ਸੌ" }, n, d, hd, pd;
    for (n = 0; n <= 100; n++) {
      d = String(n); hd = d.replace(/\d/g, function (x) { return String.fromCharCode(0x966 + Number(x)); }); pd = d.replace(/\d/g, function (x) { return String.fromCharCode(0xa66 + Number(x)); });
      [d, hd, pd].forEach(function (w) { add(SPECIAL, w, { kind: "num", name: n }, true); });
      if (n === 0) ["zero", "शून्य", "ज़ीरो", "ਸਿਫ਼ਰ", "ਜ਼ੀਰੋ"].forEach(function (w) { add(SPECIAL, w, { kind: "num", name: 0 }, true); });
      if (n > 20 && n < 100) add(SPECIAL, tw[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : ""), { kind: "num", name: n }, true);
      if (n === 100) ["hundred", "one hundred"].forEach(function (w) { add(SPECIAL, w, { kind: "num", name: 100 }, true); });
      if (hiT[n]) add(SPECIAL, hiT[n], { kind: "num", name: n }, true);
      if (paT[n]) add(SPECIAL, paT[n], { kind: "num", name: n }, true);
    }
  })();
  var COINS = [1, 2, 5, 10], NOTES = [10, 20, 50, 100, 200, 500];
  count.special += COINS.length + NOTES.length;

  /* ---------- words that two things share: the question decides ---------- */
  var COLOURISH = /colou?r|rainbow|paint|crayon|flag|mix|shade/;
  var AMBIG = {
    bat: function (c) {
      if (/cricket|wicket|stump|batsman|\bball\b|\bplay|\bgame|\bsport|\bhit\b|\bruns?\b|\bout\b/.test(c)) return { kind: "item", name: "cricket-bat/cricketbat" };
      if (/\bfly|\bflies|night|animal|wings?\b|cave|mammal|dark|\bhang/.test(c)) return { kind: "item", name: "bat-animal" };
      return null;
    },
    orange: function (c, sibs) {
      if (/fruit|\beat|juice|peel|tree|mango|apple|banana|grape|sweet|sour|vitamin|\bslice/.test(c)) return { kind: "item", name: "orange" };
      if (COLOURISH.test(c) || sibs.some(function (s) { var r = SPECIAL[norm(s)]; return r && r.kind === "colour" && norm(s) !== "orange"; })) return { kind: "colour", name: "orange" };
      return null;
    },
    light: function (c) {
      if (/heavy|heavier|weigh|feather|\bkg\b|carry|lift|pick up|balance/.test(c)) return { kind: "item", name: "light" };
      if (/bulb|lamp|switch|electric|dark|\bsun\b|shine|torch|glow|candle|night|room|\bsee\b/.test(c)) return { kind: "item", name: "bulb" };
      return null;
    },
    earth: function (c) { return /soil|plant|dig|garden|mud|farm|seed|worm|मिट्टी|पौधे|खेत|ਮਿੱਟੀ|ਪੌਦੇ|ਖੇਤ/.test(c) ? null : { kind: "item", name: "globe" }; },
    sweet: function (c) { return /taste|tongue|sugar|jaggery|lemon|sour|bitter|salt|honey|candy|\beat|mango|flavou?r|spicy/.test(c) ? { kind: "item", name: "sweets" } : null; },
    cracker: function (c) { return /diwali|fire|bang|noise|loud|sound|burn|festival|celebrat|smoke|pollut|दिवाली|दीवाली|ਦੀਵਾਲੀ/.test(c) ? { kind: "item", name: "cracker" } : null; },
    fly: function (c) { return /insect|house ?fly|buzz|mosquito|\bbug|germ|dirty|wings? and legs|six legs/.test(c) ? null : { kind: "item", name: "fly" }; },
    "बिजली": function (c) { return /बल्ब|स्विच|तार|करंट|electric|bulb|switch/.test(c) ? { kind: "item", name: "bulb" } : /बादल|गरज|आसमान|तूफ|thunder|cloud|storm|sky/.test(c) ? { kind: "item", name: "lightning" } : null; },
    "ਬਿਜਲੀ": function (c) { return /ਬੱਲਬ|ਸਵਿੱਚ|ਤਾਰ|ਕਰੰਟ|electric|bulb|switch/.test(c) ? { kind: "item", name: "bulb" } : /ਬੱਦਲ|ਗਰਜ|ਅਸਮਾਨ|ਤੂਫ|thunder|cloud|storm|sky/.test(c) ? { kind: "item", name: "lightning" } : null; },
    "बर्फ": function (c) { return /बारी|हिमालय|पहाड़|पर्वत|snow/.test(c) ? { kind: "item", name: "snow" } : /ठंड|जम|पिघ|पानी|ice|cold|melt|freez/.test(c) ? { kind: "item", name: "ice" } : null; },
    "ਬਰਫ": function (c) { return /ਬਾਰੀ|ਹਿਮਾਲਾ|ਪਹਾੜ|snow/.test(c) ? { kind: "item", name: "snow" } : /ਠੰਡ|ਜੰਮ|ਪਿਘਲ|ਪਾਣੀ|ice|cold|melt|freez/.test(c) ? { kind: "item", name: "ice" } : null; },
    mouse: function (c) { return /computer|click|screen|keyboard|monitor|cursor|laptop|\bcpu\b/.test(c) ? null : { kind: "item", name: "mouse/rat" }; },
  };

  /* ---------- availability ---------- */
  function resolveName(name) {
    var names = (root.Pics && root.Pics.names) || [], alts = name.split("/"), i;
    for (i = 0; i < alts.length; i++) if (names.indexOf(alts[i]) >= 0) return alts[i];
    return null;
  }

  /* ---------- the special renderers ---------- */
  function fl(c, k) { return "url(#" + (k || "l") + c.slice(1).toLowerCase() + "@)"; }
  function colourContent(name) {
    var c = COLOUR_HEX[name], P = root.Pics, ln = P.shade(c, name === "white" ? 0.62 : 0.68), so = ' stroke="' + ln + '" stroke-width="3" stroke-linejoin="round"';
    return '<ellipse cx="50" cy="93" rx="30" ry="4" fill="#000" opacity=".1"/>' +
      '<path d="M52 9C70 5 91 19 90 41C95 56 85 65 82 75C77 91 57 93 45 88C29 93 11 81 13 63C7 48 10 30 24 20C32 13 42 10 52 9Z" fill="' + fl(c, "r") + '"' + so + "/>" +
      '<circle cx="86" cy="15" r="5.5" fill="' + fl(c, "r") + '"' + so + "/>" +
      '<circle cx="13" cy="84" r="4.5" fill="' + fl(c, "r") + '"' + so + "/>" +
      '<circle cx="93" cy="63" r="3.2" fill="' + fl(c, "r") + '"' + so + "/>" +
      '<ellipse cx="36" cy="32" rx="9" ry="5.5" fill="#fff" opacity=".55" transform="rotate(-30 36 32)"/>';
  }
  function colourPic(name, label, decorative) { return root.Pics.svg(colourContent(name), { w: 100, h: 100, label: decorative ? "" : label }); }
  // 1-10: one ten-frame (the first row red, the second blue). 11-20: a full ten-frame with the extra dots in a second frame under it.
  function frameContent(n, c0, c1, y0, k) {
    var P = root.Pics, s = '<g transform="translate(' + (50 - 50 * k) + " " + y0 + ") scale(" + k + ')">' +
      '<rect x="2.5" y="19" width="95" height="62" rx="7" fill="#fff8e8" stroke="#c9a66b" stroke-width="3"/>' +
      '<path d="M21.5 19V81M40.5 19V81M59.5 19V81M78.5 19V81M2.5 50H97.5" fill="none" stroke="#e1c99a" stroke-width="2"/>', i, cx, cy, c;
    for (i = 0; i < n; i++) {
      cx = 12 + 19 * (i % 5); cy = i < 5 ? 34.5 : 65.5; c = i < 5 ? c0 : c1;
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="7.6" fill="' + fl(c, "r") + '" stroke="' + P.shade(c, 0.68) + '" stroke-width="2"/><ellipse cx="' + (cx - 2.4) + '" cy="' + (cy - 2.8) + '" rx="2.2" ry="1.4" fill="#fff" opacity=".6"/>';
    }
    return s + "</g>";
  }
  function dotsContent(n) {
    if (n <= 10) return '<ellipse cx="50" cy="87" rx="44" ry="3.5" fill="#000" opacity=".1"/>' + frameContent(n, "#e5473d", "#3b82e0", 0, 1);
    return '<ellipse cx="50" cy="94" rx="36" ry="3" fill="#000" opacity=".1"/>' + frameContent(10, "#e5473d", "#3b82e0", -11, 0.72) + frameContent(n - 10, "#e5473d", "#3b82e0", 38, 0.72);
  }
  function dotsPic(n, label, decorative) { return root.Pics.svg(dotsContent(n), { w: 100, h: 100, label: decorative ? "" : label }); }

  /* ---------- from a normalised word to a picture description ---------- */
  // Returns { kind, name, key, label } or null. `name` is the real picture name for items. Never draws.
  function describe(text, ctx, sibs) {
    var raw = String(text == null ? "" : text), w = norm(raw), m, i, f, r, v, c;
    if (!w) return null;
    m = /^(?:₹|rs\.? ?)\s?(\d{1,3})(?: (coin|note))?$/.exec(w);
    if (m) {
      v = Number(m[1]);
      if (v === 10 && !m[2] && /₹\s?(20|50|100|200|500)\b|\bnotes?\b/.test((ctx || "") + " " + (sibs || []).join(" ").toLowerCase())) return { kind: "note", name: 10, key: "note:10", label: "₹10 note" };
      if (m[2] !== "note" && COINS.indexOf(v) >= 0) return { kind: "coin", name: v, key: "coin:" + v, label: "₹" + v + " coin" };
      if (m[2] !== "coin" && NOTES.indexOf(v) >= 0) return { kind: "note", name: v, key: "note:" + v, label: "₹" + v + " note" };
      return null;
    }
    if (/^\d+$/.test(w) && w.length < 3 && Number(w) >= 1 && Number(w) <= 20) return { kind: "num", name: Number(w), key: "num:" + Number(w), label: w };
    f = forms(w);
    for (i = 0; i < f.length; i++) {
      if (AMBIG[f[i]]) {
        r = AMBIG[f[i]]((ctx || "") + " " + (sibs || []).join(" ").toLowerCase(), sibs || []);
        if (!r) return null;
        if (r.kind === "colour") return { kind: "colour", name: r.name, key: "colour:" + r.name, label: w };
        c = resolveName(r.name);
        return c ? { kind: "item", name: c, key: "item:" + c, label: w, abstract: !!ABSTRACT[c] } : { kind: "item", name: null, key: "item:" + r.name, label: w };
      }
      if ((r = SPECIAL[f[i]])) return { kind: r.kind, name: r.name, key: r.kind + ":" + r.name, label: w };
      if ((r = ITEM[f[i]])) {
        c = resolveName(r);
        return { kind: OPT[f[i]] ? "idea" : "item", name: c, key: "item:" + (c || r), label: w, abstract: !!(c && ABSTRACT[c]) || !!WORDABS[f[i]], plural: i > 0 && !/^[^ ]* ?(sheep|fish|deer)$/.test(w), body: KINDS[r.split("/")[0]] === "body" };
      }
    }
    return null;
  }

  function draw(d, decorative) {
    var P = root.Pics, label = decorative ? "" : d.label;
    if (d.kind === "colour") return colourPic(d.name, d.label, decorative);
    if (d.kind === "num") return d.name > 20 ? P.svg(P.bundles({ n: d.name, x: 50, y: 50, s: 96 }), { w: 100, h: 100, label: label }) : dotsPic(d.name, d.label, decorative);
    if (d.kind === "shape") return P.svg(P.shape({ kind: d.name, x: 50, y: 50, s: 92 }), { w: 100, h: 100, label: label });
    if (d.kind === "coin") return P.svg(P.coin({ value: d.name, x: 50, y: 50, s: 90 }), { w: 100, h: 100, label: label });
    if (d.kind === "note") return P.svg(P.note({ value: d.name, x: 50, y: 50, s: 96 }), { w: 100, h: 100, label: label });
    if ((d.kind === "item" || d.kind === "idea") && d.name) return P.svg(P.item(d.name, { x: 50, y: 50, s: 92 }), { w: 100, h: 100, label: label });
    return null;
  }

  // Two- or three-word English answers name their thing last ("cricket ball", "water bottle", "paper boat", "honey bee"): when the
  // whole phrase has no picture, the last word's picture is used. Not for compounds whose last word is something else (a sea
  // horse is not a horse, a hot dog is not a dog), nor after a number or "no"/"not" (those change the meaning).
  var HEAD_BLOCK = /^(sea (horse|lion|cow|dog|star|weed)|hot dog|jelly ?fish|cat ?fish|star ?fish|silver ?fish|dragon ?fly|fire ?fly|butter ?fly|lady ?bird|ant ?eater|bull ?frog|guinea pig|sea ?horse|sun ?flower|sun ?glasses|eye ?glasses|ear ?ring|door ?bell|water ?fall|rain ?bow|snow ?man|book ?worm|tooth ?brush|hair ?brush|pine ?apple|egg ?plant|lady ?finger|ice ?cream|fire ?works?|fish ?bowl|dog ?house|bird ?house|cow ?shed|bus ?stop|train ?station|post ?office|police ?station|bat ?man|spider ?man|cup ?board|black ?board|key ?board|foot ?ball|base ?ball)$/;
  function headNoun(text, ctx, sibs) {
    var w = norm(text).replace(/^(a|an|the|some)\s+/, "").replace(/[^a-z\s-]/g, " ").replace(/\s+/g, " ").trim();
    // "soap and water", "rice or dal", "leaves from trees": the last word is only part of the answer, so no picture
    if (!w || !/^[a-z-]+( [a-z-]+){1,2}$/.test(w) || HEAD_BLOCK.test(w) || /\b(and|or|from|without|with|but|nor)\b/.test(w)) return null;
    var parts = w.split(" ");
    if (NUMWORDS.test(parts[0]) || /^(no|not|one|zero|many|few|all|any|every|each|more|less|most|least)$/.test(parts[0])) return null;
    return describe(parts[parts.length - 1], ctx, sibs);
  }
  function forText(text, o) {
    o = o || {};
    var ctx = String(o.context || "").toLowerCase(), d = describe(text, ctx, o.siblings) || headNoun(text, ctx, o.siblings), svg;
    if (!d || !root.Pics) return null;
    svg = draw(d, o.decorative);
    return svg ? { svg: svg, label: d.label, key: d.key, kind: d.kind } : null;
  }

  /* ---------- options ---------- */
  function forOptions(options, o) {
    var q = (o && o.q) || "", ctx = String(q).toLowerCase(), out = [], seen = {}, i, r, wf, nm;
    if (!options || options.length < 2 || options.length > 4 || !root.Pics) return null;
    // spelling, plural and tense questions are about the written word: a picture would hide the mistake ("boxs" must not look like a box)
    if (/\b(plural|singular|spell|spelling|spelt|past tense|verb form)\b/.test(ctx)) return null;
    wf = /\b(begins?|starts?|ends?|rhymes?|rhyming|letters?|syllables?)\b|\bthe [a-z]{1,3} sound\b/.test(ctx);
    for (i = 0; i < options.length; i++) {
      r = forText(options[i], { context: ctx, siblings: options.filter(function (_, j) { return j !== i; }), decorative: true });
      if (!r || seen[r.key]) return null;
      // a question about the LETTERS of a word ("begins with m"): the picture must be of exactly that English word (father must not show "man")
      if (wf && /^[a-z -]+$/i.test(String(options[i]).trim()) && (r.kind === "item" || r.kind === "idea")) {
        nm = r.key.slice(5).replace(/-/g, " ");
        if (norm(options[i]).replace(/(es|s)$/, "") !== nm.replace(/(es|s)$/, "")) return null;
      }
      if (r.kind === "num" && /\b(tens?|ones|hundreds?|place value|digits?)\b|दहाई|इकाई|सैकड़ा|ਦਹਾਈ|ਇਕਾਈ/.test(ctx)) return null; // the picture would show the answer
      seen[r.key] = 1;
      out.push(r);
    }
    return out;
  }

  /* ---------- question pictures ---------- */
  // Words that are not the "thing" a question is about: verbs that are also nouns, settings ("at home", "in school"),
  // kinds of thing ("Which is a flower?" must not show a flower), and Hindi words with another everyday meaning (आम = mango, but also "common": आम तौर पर; कमल is also a name).
  var QSKIP = { watch: 1, brush: 1, comb: 1, tap: 1, fan: 1, pot: 1, lock: 1, house: 1, school: 1, flower: 1, bird: 1, animal: 1, fruit: 1, vegetable: 1, "फूल": 1, "पक्षी": 1, "चिड़िया": 1, "ਫੁੱਲ": 1, "ਪੰਛੀ": 1, "घर": 1, "स्कूल": 1, "ਘਰ": 1, "ਸਕੂਲ": 1, "आम": 1, "कमल": 1, "बस": 1 };
  var NUMWORDS = /\b(two|three|four|five|six|seven|eight|nine|ten|twenty|fifty|hundred|double|half|twice)\b/;

  // Every picturable phrase in a text, longest phrase first: [{ d (description), word }].
  function scan(text, ctx, sibs) {
    var words = norm(text).replace(/[^\p{L}\p{M}\p{N}₹ ]/gu, " ").replace(/\s+/g, " ").trim().split(" "), out = [], i = 0, n, d, p;
    while (i < words.length) {
      d = null;
      for (n = Math.min(3, words.length - i); n >= 1; n--) {
        p = words.slice(i, i + n).join(" ");
        d = describe(p, ctx, sibs);
        if (d && forms(norm(p)).some(function (x) { return QSKIP[x]; })) d = null;
        if (d) break;
      }
      if (d) { out.push({ d: d, word: p }); i += n; } else i++;
    }
    return out;
  }

  function forQuestion(it) {
    if (!it || it.noPic || it.pic || typeof it.q !== "string" || !Array.isArray(it.options) || !root.Pics) return null;
    var q = it.q.replace(/\*\*/g, ""), ctx = (q + " " + it.options.join(" ")).toLowerCase(), qs, taken = {}, shapes = {}, nouns = {}, list, d, answer, k, picked, svg;
    if (/\d/.test(q) || NUMWORDS.test(q.toLowerCase())) return null; // word problems about amounts: the numbers matter, not a picture
    // "What colour is the sun?": a picture of the thing would show the colour and give the answer away
    if (it.options.some(function (o) { var dd = describe(o, ctx, it.options); return dd && dd.kind === "colour"; })) return null;
    qs = scan(q, ctx, it.options);
    // what the options (and so the right answer) show or name must never be shown above the question
    it.options.forEach(function (o) {
      scan(o, ctx, it.options).forEach(function (x) { taken[x.d.key] = 1; });
      var dd = describe(o, ctx, it.options);
      if (dd) taken[dd.key] = 1;
    });
    answer = it.options[it.answer];
    if (answer != null) scan(String(answer), ctx, it.options).forEach(function (x) { taken[x.d.key] = 1; });
    // "How many eggs were there?": one picture would look like the answer is one
    if (/how many|कितने|कितनी|ਕਿੰਨੇ|ਕਿੰਨੀ|ਕਿੰਨੀਆਂ/.test(q.toLowerCase()) && qs.some(function (x) { return x.d.plural && !x.d.body; })) return null;
    qs.forEach(function (x) {
      if (taken[x.d.key]) return;
      if (x.d.kind === "shape") shapes[x.d.key] = x.d;
      else if (x.d.kind === "item" && !x.d.body && !x.d.abstract) nouns[x.d.key] = x.d; // body parts ("legs of a hen") are never the picture
    });
    list = Object.keys(shapes).map(function (k2) { return shapes[k2]; });
    if (list.length !== 1) {
      if (list.length) return null;
      list = Object.keys(nouns).map(function (k2) { return nouns[k2]; });
      if (list.length !== 1) return null;
    }
    picked = list[0];
    if (!picked.name && picked.kind === "item") return null;
    svg = draw(picked, false);
    k = picked.key;
    return svg ? { svg: svg, label: picked.label, key: k } : null;
  }

  /* ---------- illustrate: a small picture strip for a whole sentence (notes, terms, lesson steps, game cards) ---------- */
  // What it recognises, conservatively (no picture rather than a wrong one):
  //   a count plus a thing ("Count 3 mangoes", "तीन आम")     -> that many of it (1 to 10; a bigger count shows nothing for that thing)
  //   a colour plus a thing ("a red balloon")                  -> the thing, with a colour dot (a balloon is drawn in that colour)
  //   things named in the text (up to `max`, in order)          -> side by side; shapes and money too ("circle", "₹5")
  //   actions and describing words (jump, big, hot ...)         -> their picture, but never in grammar talk ("capital letters", "full stop")
  //   colours alone                                             -> a paint splash, only when no thing is named
  // It skips bare numbers, capitalised names in the middle of a sentence (Rose, Jaipur), words with a second meaning
  // (key, face, head, watch ...) and anything marked noPic. Works on English, Hindi and Punjabi words.
  //   PicDict.illustrate(text, { context, max = 3, size = 56, title, noPic, decorative }) -> { svg, label, keys, count } | null
  var ISKIP = { leg: 1, thumb: 1, watch: 1, brush: 1, comb: 1, tap: 1, fan: 1, pot: 1, lock: 1, key: 1, face: 1, head: 1, "आम": 1, "कमल": 1, "बस": 1, "फल": 1, "ਫਲ": 1 };
  var CTX_SKIP = { table: /data|times|multipl|\brows?\b|column|chart|tally|graph|pictograph|represent|number/ }; // "a table of data" is not furniture
  var NOT_BEFORE = { zebra: /^crossing$/ }; // "zebra crossing" is a road sign, not an animal
  var LONER = { read: 1, write: 1, sit: 1, stand: 1 }; // too common in instructions: only when the text is a few words long
  var GRAM = /^(letters?|vowels?|consonants?|sounds?|stop|forms?|words?|sentences?|syllables?|alphabets?|numbers?|digits?|stor(?:y|ies)|poems?)$/;
  var BALLOON = ["red", "blue", "yellow", "green", "pink"];

  function tokens(text, title) {
    var parts = String(text == null ? "" : text).replace(/\*\*/g, "").replace(/[’']s\b/g, "").replace(/[-_]/g, " ").split(/\s+/), out = [], i, w;
    for (i = 0; i < parts.length; i++) {
      w = parts[i].replace(/^[^\p{L}\p{M}\p{N}₹]+|[^\p{L}\p{M}\p{N}]+$/gu, "");
      if (!w) continue;
      out.push({ w: w, n: norm(w), cap: !title && /^\p{Lu}/u.test(w), start: !out.length || /[.!?:;।]["”')\]]*$/.test(parts[i - 1] || "") || /^["“‘(\[]/.test(parts[i]) });
    }
    return out;
  }

  function illustrate(text, o) {
    o = o || {};
    if (o.noPic || !root.Pics || text == null) return null;
    var P = root.Pics, max = o.max == null ? 3 : o.max, T = tokens(text, o.title), ctx = (String(o.context || "") + " " + String(text)).toLowerCase().replace(/\*\*/g, ""),
      ent = [], blocked = {}, colours = [], i = 0, tk, nv, col, noun, d, j;

    function numOf(t) {
      var r;
      if (/^\d{1,3}$/.test(t.w)) return Number(t.w);
      r = SPECIAL[t.n];
      return r && r.kind === "num" ? r.name : null;
    }
    function colourOf(t) { var r = describe(t.w, ctx, []); return r && r.kind === "colour" ? r.name : null; }
    // a thing (or, when wanted, a shape) that starts at token j: { d, len }
    function thingAt(j, shapes, counted) {
      var n, p, r, nx;
      if (j >= T.length || (T[j].cap && !T[j].start)) return null;
      for (n = Math.min(3, T.length - j); n >= 1; n--) {
        p = T.slice(j, j + n).map(function (x) { return x.w; }).join(" ");
        r = describe(p, ctx, []);
        if (!r || !(r.kind === "item" ? r.name : shapes && r.kind === "shape")) continue;
        if (!counted && forms(norm(p)).some(function (x) { return ISKIP[x]; })) continue;
        nx = T[j + n];
        if (r.abstract && ((LONER[r.name] && T.length > 4) || (nx && GRAM.test(nx.n)) || (!ACTIONS[r.name] && T.length > 8) || (/[^\x00-\x7f]/.test(p) && T.length > 4))) continue;
        if (CTX_SKIP[r.name] && CTX_SKIP[r.name].test(ctx)) continue;
        if (nx && NOT_BEFORE[r.name] && NOT_BEFORE[r.name].test(nx.n)) continue;
        if (r.name === "hand" && /hour|minute|clock/.test(ctx)) continue;
        return { d: r, len: n };
      }
      return null;
    }
    function add(e) {
      var k, old;
      if (blocked[e.d.key]) return;
      for (k = 0; k < ent.length; k++) if (ent[k].d.key === e.d.key) { old = ent[k]; break; }
      if (!old) ent.push(e);
      else if (e.n && !old.n) ent[ent.indexOf(old)] = e;
    }

    while (i < T.length) {
      tk = T[i];
      if (tk.cap && !tk.start) { i++; continue; }
      nv = numOf(tk);
      if (nv != null) { // a count: "3 mangoes", "3 red balloons"
        j = i + 1; col = null;
        if (j < T.length && colourOf(T[j])) { col = colourOf(T[j]); j++; }
        noun = thingAt(j, false, true);
        if (noun && nv >= 1 && !noun.d.abstract) {
          if (nv <= 10) add({ d: noun.d, n: nv, col: col }); else blocked[noun.d.key] = 1;
          i = j + noun.len;
          continue;
        }
        i++;
        continue;
      }
      col = colourOf(tk);
      if (col) {
        noun = thingAt(i + 1, false);
        if (noun && !noun.d.abstract) { add({ d: noun.d, col: col }); i += 1 + noun.len; continue; }
        if (colours.indexOf(col) < 0) colours.push(col);
        i++;
        continue;
      }
      if (/^₹/.test(tk.w)) {
        d = describe(tk.w, ctx, []);
        if (d && (d.kind === "coin" || d.kind === "note")) add({ d: d });
        i++;
        continue;
      }
      noun = thingAt(i, true);
      if (noun) { add({ d: noun.d }); i += noun.len; continue; }
      i++;
    }
    if (!ent.length && colours.length && colours.length <= 3 && T.length <= 8) ent = colours.map(function (c) { return { d: { kind: "colour", name: c, key: "colour:" + c, label: c } }; });
    ent = ent.filter(function (e) { return !blocked[e.d.key]; }).slice(0, max);
    if (!ent.length) return null;

    var x = 0, body = "", labels = [], keys = [], size = o.size || 56;
    ent.forEach(function (e) {
      var d = e.d, gw = 100, rh, c = "", bv = e.col ? BALLOON.indexOf(e.col) : -1, badge = "";
      if (e.col && !(d.name === "balloon" && bv >= 0)) badge = '<g transform="translate(56 56) scale(.44)">' + colourContent(e.col) + "</g>";
      if (e.n) {
        gw = e.n === 1 ? 100 : e.n === 2 ? 130 : e.n === 3 ? 150 : e.n === 4 ? 190 : 210;
        rh = e.n <= 5 ? Math.round(gw / e.n) : 100; // up to 5 in one row, more in two
        c = '<g transform="translate(0 ' + (100 - rh) / 2 + ')">' + P.row(d.name, e.n, { w: gw, h: rh, variant: d.name === "balloon" && bv >= 0 ? bv : undefined }) + "</g>";
        labels.push(e.n + " " + d.label);
      } else {
        if (d.kind === "item") c = P.item(d.name, { x: 50, y: 50, s: 90, variant: d.name === "balloon" && bv >= 0 ? bv : undefined }) + badge;
        else if (d.kind === "shape") c = P.shape({ kind: d.name, x: 50, y: 50, s: 88 });
        else if (d.kind === "coin") c = P.coin({ value: d.name, x: 50, y: 50, s: 84 });
        else if (d.kind === "note") c = P.note({ value: d.name, x: 50, y: 50, s: 96 });
        else if (d.kind === "colour") c = colourContent(d.name);
        labels.push((e.col ? e.col + " " : "") + d.label);
      }
      keys.push(d.key);
      body += '<g transform="translate(' + x + ' 0)">' + c + "</g>";
      x += gw;
    });
    var label = labels.join(", "), svg = P.svg(body, { w: x, h: 100, label: o.decorative === false ? label : "" });
    svg = svg.replace("<svg ", '<svg width="' + Math.round(x * size / 100) + '" height="' + size + '" ');
    return { svg: svg, label: label, keys: keys, count: ent.length };
  }

  var PicDict = {
    forText: forText,
    forOptions: forOptions,
    forQuestion: forQuestion,
    illustrate: illustrate,
    keyOf: function (text, o) { var d = describe(text, String((o && o.context) || "").toLowerCase(), o && o.siblings); return d ? d.key : null; },
    scan: scan,
    norm: norm,
    size: count,
  };
  root.PicDict = PicDict;
  if (typeof module !== "undefined" && module.exports) module.exports = PicDict;
})(typeof window !== "undefined" ? window : this);
