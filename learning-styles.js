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
Physical: {prefer: "to use my body and physical objects, drawing diagrams, or role playing", like: "to learn by doing"},
Aural: {prefer: "using sound, rhythms, music, or recordings", like: "to use clever rhymes to help memorize things"},
Verbal: {prefer: "using words, both in speech and in writing", like: "word based techniques, scripting, and reading content aloud to help study and learn" },
Logical: {prefer: 'using logic, reasoning, and "systems"', like: 'to "get the big picture" and understand the reasons behind the learning'},
Social: {prefer: "to work in groups or with other people", like: "to work with others as much as possible"},
Solitary: {prefer: "to be alone", like: "self-study"}
}

/**
# TODO:
## Quizer
- function makeTemplate(tmpl, data) { $(tmpl || '.tmpl').map(function(n,it) { var t=$(it), txt=t.data('otext'); if (!txt) { t.data('otext',(txt=t.text())); } return t.text(txt.replace(/{{([^}]+)}}/g, function(m,word,posn,text) { return data[word] })) ; }); }
- getScores(tmpl)
- getStyles(LearningStyle) : for (var s in LearningStyles) if (LearningStyles.hasOwnProperty(s)) data = LearningStyles[s]

## Scorer
- addScore(value, lstyle)
- getFinalScores(LearningStyles)
*/
