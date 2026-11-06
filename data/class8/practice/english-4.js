// Class 8 English practice bank, part 4: extra questions for chapters with gaps. Extra practice (unreviewed draft).
(function () {
  let n = 1;
  // M(level, question, right answer, three wrong answers, explanation, objective id?): the right answer is stored at a varying position.
  function M(level, q, right, wrong, explain, obj) {
    const at = (n++) % 4;
    const options = wrong.slice();
    options.splice(at, 0, right);
    const o = { q, options, answer: at, explain, level };
    if (obj) o.obj = obj;
    return o;
  }
  // W(marks, question, model answer, type?, objective id?)
  function W(marks, q, a, type, obj) {
    const o = { q, a, marks };
    if (type) o.type = type;
    if (obj) o.obj = obj;
    return o;
  }
  StudyData.addPractice(8, "english", {
    "a-tale-of-valour-major-somnath-sharma": {
      mcq: [
        M(1, "Which quality is shown by his refusal to retreat?", "Courage", ["Greed", "Laziness", "Jealousy"], "Courage, duty, leadership and patriotism shine through in his refusal to leave his men or retreat.", "values"),
        M(2, "What did the delay caused by his company allow?", "More soldiers to arrive", ["The enemy to rest and regroup", "The airfield to close", "A new road to open"], "The delay allowed more soldiers to arrive and Srinagar was saved for India.", "values"),
        M(2, "What was saved for India because of the delay?", "Srinagar", ["Lahore", "Delhi", "Amritsar"], "Srinagar was saved for India.", "values")
      ],
      written: [
        W(3, "Which values does Major Somnath Sharma's story show? Explain with the help of the lesson.", "His refusal to leave his men or retreat shows courage, duty, leadership and patriotism. The delay caused by his company allowed more soldiers to arrive, and Srinagar was saved for India.", "short", "values")
      ]
    },
    "active-and-passive-voice": {
      mcq: [
        M(2, "What is the first step in changing a sentence from active to passive?", "Move the object to the front as the subject", ["Add by and the old subject", "Change the verb to future tense", "Remove the subject and the verb completely"], "Step 1: move the object to the front and make it the subject.", "changing-active-to-passive"),
        M(2, "What form of the main verb is used in the passive?", "Past participle", ["Base form", "Present participle", "Infinitive"], "The main verb in the passive is always in its past participle form.", "changing-active-to-passive"),
        M(2, "What changes with the tense in the passive?", "The form of be", ["The past participle", "The object pronoun", "The word by"], "Only the form of be changes with the tense.", "changing-active-to-passive"),
        M(3, "In a passive sentence, 'he' in the active becomes", "him", ["he", "his", "himself"], "Change pronouns to the object form: he becomes him.", "changing-active-to-passive")
      ],
      written: [
        W(3, "Explain the three steps for changing an active sentence to passive. Change \"Ravi painted the fence\" to passive.", "Step 1: move the object (the fence) to the front as the subject. Step 2: put the correct form of be in the same tense as the original verb and add the past participle. Step 3: add by and the old subject. Pronouns become object forms (I to me, he to him). Passive: The fence was painted by Ravi.", "short", "changing-active-to-passive")
      ]
    },
    "email-writing": {
      mcq: [
        M(1, "Which part of a formal email gives the receiver's email address?", "To", ["Subject", "Body", "Signature"], "To: the email address of the receiver."),
        M(2, "Which subject line is best for a leave email?", "Request for two days' leave", ["Hello!!!", "LEAVE LEAVE LEAVE", "Please read this email today"], "The subject line should be short and specific; avoid capital letters for the whole line and many exclamation marks."),
        M(2, "Which closing goes with 'Dear Sir/Madam'?", "Yours faithfully", ["Yours sincerely", "Love always", "Best of luck and good wishes"], "Yours faithfully goes with Sir/Madam; Yours sincerely goes with a name."),
        M(2, "How should the body of a formal email begin?", "By stating the purpose in one sentence", ["With a long story", "With a joke for the reader", "With the closing line of thanks"], "Begin by stating the purpose in one sentence."),
        M(2, "What details come next in the body?", "Dates, reason and attached documents", ["Slang words and emoticons", "The sender's favourite food", "Names of all classmates"], "Give the important details next: the dates, the reason and any documents you attach."),
        M(3, "Which of these should be avoided in a formal email?", "Slang", ["Full sentences", "Polite words", "A clear subject"], "Use a polite, respectful tone with full sentences and no slang."),
        M(2, "What does the signature of a student's email usually include?", "Name and class", ["Only a nickname", "Only the date", "Only a mobile number"], "Signature: your name, class and, if needed, roll number or designation.")
      ],
      written: []
    },
    "article-writing": {
      mcq: [
        M(1, "What is a headline in an article?", "A short, catchy title", ["A final summary", "The writer's name", "A list of facts"], "A headline is a short, catchy title that tells the topic."),
        M(1, "What does a byline give?", "The writer's name and class", ["The topic of the article", "The final message", "The date of printing the magazine"], "Byline: the writer's name and class, e.g. By Priya Nair, Class VIII-A."),
        M(2, "What does the conclusion of an article do?", "Sums up the main points", ["Introduces the topic", "Gives the writer's name", "Adds new unrelated facts"], "The conclusion is a final paragraph that sums up the main points."),
        M(2, "Which of these can begin an article to catch attention?", "A surprising fact", ["A long list of numbers", "A blank line", "A closing sentence"], "Begin with a question, a surprising fact or a short story."),
        M(2, "Which is a purpose of writing an article?", "To inform, persuade or entertain", ["To hide facts from readers", "To copy another article word by word", "To repeat the heading"], "Decide the purpose: to inform, to persuade or to entertain."),
        M(2, "What makes an article easy to read?", "Short paragraphs and sub-headings", ["One huge paragraph without breaks", "No headings at all", "Very long sentences"], "Use short paragraphs and sub-headings to make the article easy to read."),
        M(3, "Which approach is right for an article in a school magazine?", "Check facts and do not exaggerate", ["Add made-up statistics", "Exaggerate to sound exciting", "Skip the conclusion and the plan"], "A good article is accurate as well as lively.")
      ],
      written: []
    },
    "speech-writing": {
      mcq: [
        M(1, "How does a speech end?", "With the message and \"Thank you.\"", ["With the title only", "With a list of rules", "With a question mark"], "Conclusion: sum up the message and end with 'Thank you.'"),
        M(2, "What does the introduction of a speech do?", "Greets the audience and says what you will talk about", ["Sums up the speech", "Lists all the facts", "Thanks the audience and sits down"], "Introduction: greet the audience and say what you will talk about."),
        M(2, "How many main points does the body of a speech have?", "Two or three", ["Ten or more points in a row", "Exactly one", "None"], "Body: two or three main points, each with an example or a fact."),
        M(2, "About how long should a school speech be?", "Three to four minutes", ["Thirty minutes without a break", "Ten seconds", "One full hour"], "Keep the speech short enough to be delivered in about three to four minutes."),
        M(2, "What is a rhetorical question?", "A question you answer yourself", ["A question you never answer", "A question only for the principal", "A question with a number"], "A rhetorical question is a question you answer yourself, to make the audience think."),
        M(2, "Which words speak directly to the audience?", "we, you and let us", ["he, she and they", "it, its and itself", "this, that and those"], "Speak directly to the audience with words such as we, you and let us."),
        M(1, "How should a speech be practised?", "By reading it aloud", ["By reading it silently once", "By not practising", "By copying it twice"], "Practise reading the speech aloud so that timing and pauses are natural.", "tone-and-delivery"),
        M(2, "What tone suits a speech?", "Respectful, confident and inspiring", ["Rude, angry and impatient", "Sleepy and slow", "Careless and casual"], "A speech should be respectful and confident, with a friendly and inspiring tone.", "tone-and-delivery")
      ],
      written: [
        W(3, "What tone should a speech have and how should you prepare to deliver it well?", "A speech should be respectful and confident, with a friendly and inspiring tone. Use facts and short stories to support your points, but avoid long lists of numbers. Practise reading it aloud so that your timing and pauses are natural.", "short", "tone-and-delivery")
      ]
    },
    "notice-and-message": {
      mcq: [
        M(1, "What is a notice written to do?", "Inform many people about something", ["Tell one friend a private secret", "Write a story", "Ask a riddle"], "A notice informs many people about an event, rule, holiday or activity."),
        M(1, "How is the heading NOTICE written?", "In capital letters", ["In small letters at the end", "Inside brackets", "In the last line"], "The heading is written in capital letters: NOTICE."),
        M(2, "Which detail ends a notice?", "Name and designation of the issuer", ["A long moral story", "Dear Sir", "Many exclamation marks and jokes"], "Ending: the name and designation of the person issuing the notice and the date of issue."),
        M(2, "Which of these is part of the body of a notice?", "Date, time and venue", ["A poem about the event", "A joke about the event", "A secret code"], "Include the date, time and venue."),
        M(1, "A telephone message is an example of a", "message", ["notice", "article", "speech"], "A message is a short note that passes information from one person to another, e.g. a telephone message."),
        M(2, "What does a message include besides To, From and the message?", "Date and time", ["A long heading", "A byline", "A slogan"], "It usually includes To, From, Date, Time, the message itself and the name of the person who took it."),
        M(3, "Which style is right for a notice?", "Formal", ["Chatty", "Humorous", "Poetic"], "Keep the language formal in a notice, but simple and direct in a message.")
      ],
      written: []
    }
  });
})();
