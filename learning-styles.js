/**
Perhaps you fall into one of the following learning styles:

Visual: These people prefer to use pictures, images, diagrams, colors, and mind maps.
Physical: These are the “learn by doing” people that use their body to assist in their learning. Drawing diagrams, using physical objects, or role playing are all strategies of the Physical learner.
Aural: People who prefer using sound (obviously), rythms, music, recordings, clever rhymes, and so on.
Verbal: The verbal learner is someone who prefers using words, both in speech and in writing to assist in their learning. They make the most of word based techniques, scripting, and reading content aloud.
Logical: The people who prefer using logic, reasoning, and “systems” to explain or understand concepts. They aim to understand the reasons behind the learning, and have a good ability to understand the bigger picture.
Social: These people are the ones who enjoy learning in groups or with other people, and aim to work with others as much as possible.
Solitary: The solitary learner prefers to learn alone and through self-study.
*/

LearningStyles = {
Visual: {prefer: "to use pictures, colors, and images", like: "mind maps and diagrams" },
Aural: {prefer: "using sound, rhythms, music, or recordings", like: "to use clever rhymes to help memorize things"},
Verbal: {prefer: "using words, both in speech and in writing", like: "word based techniques, scripting, and reading content aloud to help study and learn" },
Physical: {prefer: "to use my body and physical objects, drawing diagrams, or role playing", like: "to learn by doing"},
Logical: {prefer: 'using logic, reasoning, and "systems"', like: 'to "get the big picture" and understand the reasons behind the learning'},
Solitary: {prefer: "to be alone", like: "self-study"},
Social: {prefer: "to work in groups or with other people", like: "to work with others as much as possible"}
}

/**
# TODO:
## Quizer
- function makeTemplate(tmpl, data) { $(tmpl || '.tmpl').map(function(n,it) { var t=$(it), txt=t.data('otext'); if (!txt) { t.data('otext',(txt=t.text())); } return t.text(txt.replace(/{{([^}]+)}}/g, function(m,word,posn,text) { return data[word] })) ; }); }
- getScores(form)
- getData(LearningStyle) : for (var s in LearningStyles) if (LearningStyles.hasOwnProperty(s)) data = LearningStyles[s]

## Scorer
- addScore(value, lstyle)
- getFinalScores(LearningStyles)
*/


/* Questions */

// TODO: Add closure
function getQuestions(LearningStyles) { 
    var questions=[]; 
    for (var q in LearningStyles) if (LearningStyles.hasOwnProperty(q) && typeof LearningStyles[q] === "object" &&  LearningStyles[q]) { 
        LearningStyles[q].named = q;
        LearningStyles[q].number = LearningStyles[q].number || questions.push(q); 
    } 
    return questions; 
}
var questions = getQuestions(LearningStyles), nextq=-1, answers = {};

function getNextQuestion() { return LearningStyles[questions[++nextq]] }
function getCurrentQuestion() { return LearningStyles[questions[nextq]] }
function resetQuestions() { nextq = 0; }
function prevQuestion() { return --nextq; }

//~ function log(msg) { if (typeof console !== "undefined") console.log(msg); }
var log = typeof console === "undefined" ? function() { }  : console.log.bind(console);
function nextPage() { log('nextPage') } // TODO
function savedata() { 
    if (nextq < 0) return false;
    var prefer = +$('#slider2').val(), like = +$('#slider3').val(), q = getCurrentQuestion(), named = q && q.named, scored = answers || {};
    if (!named) return false;
    scored[named] = {prefer: prefer, like:like, score: prefer + like };
    log(scored);
    return true;
} 
function calculateScore() { log('calculateScore')} // TODO

/* Sliders */

function setSliderValue(slider, value) { $(slider).val(value).change(); } 
function isSlider(e) { return e && $(e.target).closest(".ui-slider, .ui-slider-track").length; }

/* Templates */

function updateTitle() { document.title = $('.qhead').text().trim(); }
function makeTemplate(data, tmpl) { if (!data) return false; $(tmpl || '.tmpl').map(function(n,it) { var t=$(it), txt=t.data('otext'); if (!txt) { t.data('otext',(txt=t.text())); } return t.text(txt.replace(/{{([^}]+)}}/g, function(m,word,posn,text) { return data[word] })) ; }); updateTitle(); return true; }

function nextTemplate(ev) { savedata(); if (isSlider(ev)) { return false;} return makeTemplate(getNextQuestion()) || nextPage(); }
function prevTemplate() { return prevQuestion() >= 0 ? makeTemplate(getCurrentQuestion()) : resetQuestions(); }

var startup = function ($) { 
    nextTemplate();
    $('.nextBtn').tap(nextTemplate);
    $('.prevBtn').tap(prevTemplate);
    $('.page > div').swiperight(nextTemplate).swipeleft(prevTemplate);
};
jQuery(startup);
