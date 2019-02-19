/*************************************************************************************************
 * Paths to all the audio assets needed.
 *************************************************************************************************/
function name_to_path(basedir, sounds) {
  for(var i in sounds) sounds[i] = basedir + sounds[i];
  return sounds;
}
var sounds = {
  basses:     name_to_path('/audio/basses/',  ['bass.wav']),
  edmSounds:  name_to_path('/audio/edm/',     ['wave.wav','tick.wav','ping.wav','pinch.wav','echo.wav','drum.wav','drop.wav']),
  guitars:    name_to_path('/audio/guitars/', ['mellow-1.wav','mellow-2.wav','mellow-3.wav']),
  hats:       name_to_path('/audio/hats/',    ['ch.wav','oh.wav']),
  kicks:      name_to_path('/audio/kicks/',   ['kick.wav']),
  pianos:     name_to_path('/audio/piano/',   ['piano58.wav','piano69.wav','piano79.wav']),
  snares:     name_to_path('/audio/snares/',  ['snare.wav']),
  celestialPs:name_to_path('/audio/celestialPad/',  ['a3.wav','a4.wav','ab3.wav','ab4.wav','b3.wav','b4.wav','bb3.wav','bb4.wav','c3.wav','c4.wav','c5.wav','d3.wav','d4.wav','db3.wav','db4.wav','e3.wav','e4.wav','eb3.wav','eb4.wav','f3.wav','f4.wav','g3.wav','g4.wav','gb3.wav','gb4.wav']),
  ciriusRezs: name_to_path('/audio/ciriusRez/',     ['a3.wav','a4.wav','ab3.wav','ab4.wav','b3.wav','b4.wav','bb3.wav','bb4.wav','c3.wav','c4.wav','d3.wav','d4.wav','db3.wav','db4.wav','e3.wav','e4.wav','eb3.wav','eb4.wav','f3.wav','f4.wav','g3.wav','g4.wav','gb3.wav','gb4.wav']),
  transLeads: name_to_path('/audio/epicTranceLead/',['a3.wav','a4.wav','ab3.wav','ab4.wav','b3.wav','b4.wav','bb3.wav','bb4.wav','c3.wav','c4.wav','c5.wav','d3.wav','d4.wav','db3.wav','db4.wav','e3.wav','e4.wav','eb3.wav','eb4.wav','f3.wav','f4.wav','g3.wav','g4.wav','gb3.wav','gb4.wav']),
  perators:   name_to_path('/audio/jarblePerator/', ['a3.wav','a4.wav','ab3.wav','ab4.wav','b3.wav','b4.wav','bb3.wav','bb4.wav','c3.wav','c4.wav','d3.wav','d4.wav','db3.wav','db4.wav','e3.wav','e4.wav','eb3.wav','eb4.wav','f3.wav','f4.wav','g3.wav','g4.wav','gb3.wav','gb4.wav']),
  korgBasses: name_to_path('/audio/korgBass/',      ['a1-33.wav','a2-45.wav','a3-57.wav','a4-69.wav','a5-81.wav','a6-93.wav','b1-35.wav','b2-47.wav','b3-59.wav','b4-71.wav','b5-83.wav','b6-95.wav','bb1-34.wav','bb2-46.wav','bb3-58.wav','bb4-70.wav','bb5-82.wav','bb6-94.wav','c1-24.wav','c2-36.wav','c3-48.wav','c4-60.wav','c5-72.wav','c6-84.wav','c7-96.wav','d1-26.wav','d2-38.wav','d3-50.wav','d4-62.wav','d5-74.wav','d6-86.wav','db1-25.wav','db2-37.wav','db3-49.wav','db4-61.wav','db5-73.wav','db6-85.wav','e-1-29.wav','e-2-41.wav','e-3-53.wav','e-4-65.wav','e-5-77.wav','e-6-89.wav','e1-28.wav','e2-40.wav','e3-52.wav','e4-64.wav','e5-76.wav','e6-88.wav','eb1-27.wav','eb2-39.wav','eb3-51.wav','eb4-63.wav','eb5-75.wav','eb6-87.wav','f1-30.wav','f2-42.wav','f3-54.wav','f4-66.wav','f5-78.wav','f6-90.wav','g1-32.wav','g2-44.wav','g3-56.wav','g4-68.wav','g5-80.wav','g6-92.wav','gb1-31.wav','gb2-43.wav','gb3-55.wav','gb4-67.wav','gb5-79.wav','gb6-91.wav']),
  psyBasses:  name_to_path('/audio/psyTranceBass/', ['a1.wav','a2.wav','ab1.wav','ab2.wav','b1.wav','b2.wav','bb1.wav','bb2.wav','c1.wav','c2.wav','c3.wav','d1.wav','d2.wav','db1.wav','db2.wav','e1.wav','e2.wav','eb1.wav','eb2.wav','f1.wav','f2.wav','g1.wav','g2.wav','gb1.wav','gb2.wav']),
  superSaws:  name_to_path('/audio/superSaw/',       ['A4.wav','A5.wav','A6.wav','Ab3.wav','Ab4.wav','Ab5.wav','B4.wav','B5.wav','B6.wav','Bb4.wav','Bb5.wav','Bb6.wav','C3.wav','C4.wav','C5.wav','C6.wav','D3.wav','D4.wav','D5.wav','Db3.wav','Db4.wav','Db5.wav','E3.wav','E4.wav','E5.wav','Eb3.wav','Eb4.wav','Eb5.wav','F3.wav','F4.wav','F5.wav','G3.wav','G4.wav','G5.wav','Gb3.wav','Gb4.wav','Gb5.wav']),
};
var happy = {
  basses:     name_to_path('/audio/basses/',  ['bass.wav']),
  celestialPs:name_to_path('/audio/celestialPad/',  ['a4.wav','ab4.wav','b4.wav','bb4.wav','c4.wav','c5.wav','d4.wav','db4.wav','e4.wav','eb4.wav','f4.wav','g4.wav','gb4.wav']),
  edmSounds:  name_to_path('/audio/edm/',     ['drop.wav']),
  guitars:    name_to_path('/audio/guitars/', ['mellow-2.wav']),
  hats:       name_to_path('/audio/hats/',    ['ch.wav','oh.wav']),
  kicks:      name_to_path('/audio/kicks/',   ['kick.wav']),
  pianos:     name_to_path('/audio/piano/',   ['piano72.wav','piano73.wav','piano74.wav','piano75.wav','piano76.wav','piano78.wav','piano79.wav','piano80.wav']),
  snares:     name_to_path('/audio/snares/',  ['snare.wav']),
  superSaws:  name_to_path('/audio/superSaw/',['A5.wav','A6.wav','Ab5.wav','B5.wav','B6.wav','Bb5.wav','Bb6.wav','C5.wav','C6.wav','D5.wav','Db5.wav','E5.wav','Eb5.wav','F5.wav','G5.wav','Gb5.wav']),
};
var dark = {
  basses:     name_to_path('/audio/basses/',  ['bass.wav']),
  guitars:    name_to_path('/audio/guitars/', ['mellow-1.wav','mellow-3.wav']),
  kicks:      name_to_path('/audio/kicks/',   ['kick.wav']),
  pianos:     name_to_path('/audio/piano/',   ['piano56.wav','piano57.wav','piano58.wav','piano59.wav','piano60.wav']),
  snares:     name_to_path('/audio/snares/',  ['snare.wav']),
};

var synth = {};
var guitar = {
	'B2'  : '/audio/guitars/mellow-2.wav',
	'B3'  : '/audio/guitars/mellow-1.wav',
	'F4'  : '/audio/guitars/mellow-3.wav'
};
var guitar_notes = (function() { var arr=[]; for(var key in guitar) arr.push(key); return arr; })();
var piano = {
	'C3'  : '/audio/piano/piano48.wav',
	'C#3' : '/audio/piano/piano49.wav',
	'D3'  : '/audio/piano/piano50.wav',
	'D#3' : '/audio/piano/piano51.wav',
	'E3'  : '/audio/piano/piano52.wav',
	'F3'  : '/audio/piano/piano53.wav',
	'F#3' : '/audio/piano/piano54.wav',
	'G3'  : '/audio/piano/piano55.wav',
	'G#3' : '/audio/piano/piano56.wav',
	'A4'  : '/audio/piano/piano57.wav',
	'A#4' : '/audio/piano/piano58.wav',
	'B4'  : '/audio/piano/piano59.wav',
	'C4'  : '/audio/piano/piano60.wav'
};
var piano_notes = (function() {
  return pickRandom([
    ["E3", "C4", "C3", "G3", "A4", "F3", "F3", "C3", "E3", "C3", "C3", "G3", "A3", "F3", "F3", "C3", "E3", "C4", "C3", "G3", "B3", "G3", "G3", "D3", "E3", "C4", "C3", "G3", "F#3", "D3", "D3", "A4"]
  ]);
})();

/************************************************************************************************
 * Global reusable variables.
 *************************************************************************************************/
var progress = null;
var player = null;
var play = null;
var song = null;
var status_label = null;

/***************************************************************************************************
 * Helper methods
 ****************************************************************************************************/
function downloadBlob(blob) {
  var a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = player[0].src;
  a.download = 'audio.webm';
  a.click();
}

function flipCoin() {
  return pickRandom([true,false]);
}

function getRandom1to10() {
  return pickRandom([1,2,3,4,5,6,7,8]);
}

function getRandomTranceLead() {
  return pickRandom(sounds.transLeads);
}

function getRandomGuitar() {
  return pickRandom(happy.guitars);
}

function getRandomSnare() {
  return pickRandom(sounds.snares);
}

function getRandomHat() {
  return pickRandom(sounds.hats);
}

function getRandomBass() {
  return pickRandom(sounds.basses);
}

function getRandomPsyTransBass() {
  return pickRandom(sounds.psyBasses);
}

function getRandomEdmSound() {
  return pickRandom(happy.edmSounds);
}

function getRandomKick() {
  return pickRandom(sounds.kicks);
}

function getRandomPiano() {
  return pickRandom(happy.pianos);
}

function getRandomciriusRez() {
  return pickRandom(sounds.ciriusRezs);
}

function getRandomCelestialPad() {
  return pickRandom(happy.celestialPs);
}

function getRandomKorgBass() {
  return pickRandom(sounds.korgBasses);
}

function getRandomPattern(length, type) {
  if(type=='sim') return pickRandom(['-x--', 'x', '---x', 'x---']);

  var patterns, loops = null;
  if(type == 'agg') {
    patterns = ['x-','xx','x[xx]'];
    loops = 2;
  } else {
    patterns = pickRandom([['-','x','x','x','[xx]','[x-]','[-x]'],['x-','-x']]);
    loops = 4;
  }

  var str = "";
  for (var i=0; i < loops; i++)
    str += patterns[Math.floor(Math.random() * patterns.length)];
  return str;
}

function mergePatterns(data, repeat, offset) {
  var arr = [];
  for(var i in data) {
    var this_repeat = repeat;
    var obj = { pattern: data[i].pattern.repeat(this_repeat), offset:offset };
    if(data[i].sample) obj.sample = data[i].sample;
    if(data[i].samples) obj.samples = data[i].samples;
    if(data[i].notes) obj.notes = data[i].notes;
    if(data[i].volume) obj.volume = data[i].volume;
    arr.push(createClip(obj));
  }
  return arr;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomizeArr(arr) {
  return arr.sort(function() { return 0.5 - Math.random(); });
}

/***************************************************************************************************
 * Scribbletune/Tonejs/Music creation methods.
 ***************************************************************************************************/
function createClip(a) {
  var c = {
    clip: null,
    play: function() {
      if(!c.clip) c.create();
      c.clip.loop = false;
      c.clip.start();
    },
    pause: function() {
      if(c.clip) {
        c.clip.stop();
        c.clip.output.disconnect();
      }
    },
    create: function() {
      var opt = {
        pattern: (function() {
          if(a.offset)
            return '----'.repeat(a.offset) + a.pattern;
          else return a.pattern;
        })()
      };
      if(a.notes) opt.notes = a.notes;
      if(a.synth) opt.synth = a.synth;
      if(a.sample) opt.sample = a.sample;
      if(a.samples) opt.samples = a.samples;
      c.clip = scribble.clip(opt);
      if(a.volume) c.clip.output.volume.input.value = a.volume;
    }
  };
  return c;
}

function createIntro() {
  if(song.edm && flipCoin()) {
    song.hasPiano = true;
    return [
      { pattern: getRandomPattern(0, 'agg'), sample: getRandomPiano(), volume: 0.25 },
      { pattern: getRandomPattern(0, 'agg'), sample: getRandomPiano(), volume: 0.25 },
    ];
  }
  else if(song.edm) {
    song.hasEdmSound = true;
    return [
      { pattern: getRandomPattern(), sample: getRandomEdmSound(0,'sim'), volume: 0.25 },
      { pattern: getRandomPattern(), sample: getRandomEdmSound(0,'sim'), volume: 0.25 }
    ];
  }

  if(song.trap && flipCoin()) {
    song.hasSnare = true;
    song.hasHat = true;
    return [
      { pattern: getRandomPattern(), sample: getRandomSnare() },
      { pattern: getRandomPattern(), sample: getRandomHat() },
    ];
  }
  else if(song.trap && flipCoin()) {
    song.hasSnare = true;
    song.hasEdmSound = true;
    return [
      { pattern: getRandomPattern(), sample: getRandomSnare() },
      { pattern: getRandomPattern(), sample: getRandomEdmSound(0,'sim'), volume: 0.25 },
    ];
  }
  else if(song.trap) {
    song.hasSnare = true;
    song.hasEdmSound = true;
    song.hasGuitar = true;
    return [
      { pattern: getRandomPattern(), sample: getRandomGuitar() },
      { pattern: getRandomPattern(), sample: getRandomSnare() },
      { pattern: getRandomPattern(), sample: getRandomEdmSound(0,'sim'), volume: 0.25 },
    ];
  }
}

function createChorus(pre) {
  pre = pre.concat([
    { pattern: getRandomPattern(), sample: getRandomKick() },
    { pattern: getRandomPattern(), sample: getRandomBass() },
  ]);

  if(song.edm) {
    if(flipCoin())
      pre.push({ pattern: getRandomPattern(0, 'agg'), sample: getRandomTranceLead(), volume: 0.5 });
    return pre;
  }
  else if(song.trap) {
    if(flipCoin() && !song.hasEdmSound)
      pre.push({ pattern: getRandomPattern(), samples: guitar, notes: randomizeArr(guitar_notes).pop() });
    if(flipCoin() && !song.hasEdmSound)
      pre.push({ pattern: getRandomPattern(), samples: piano, notes: randomizeArr(piano_notes).join(' '), volume: 0.25 });
    if(flipCoin() && !song.hasGuitar)
      pre.push({ pattern: getRandomPattern(), sample: getRandomGuitar() });
    return pre;
  }
}

function createVerse(pre) {
  return pre.concat([
    { pattern: getRandomPattern(), sample: getRandomBass() },
  ]);
}

function createOutro() {
  return [
    { pattern: getRandomPattern(), sample: getRandomSnare() },
    { pattern: getRandomPattern(), sample: getRandomHat() }
  ];
}

function addOverlay(partial) {
  partial.push({ pattern: getRandomPattern(0,'sim'), sample: getRandomEdmSound(), volume: 0.25 });
  if(flipCoin()) partial.push({ pattern: getRandomPattern(0,'sim'), sample: getRandomEdmSound(), volume: 0.25 });
  if(flipCoin() && !song.hasSnare) {
    song.hasSnare = true;
    partial.push({ pattern: getRandomPattern(), sample: getRandomSnare() });
  }
  if(flipCoin() && !song.hasHat) {
    song.hasHat = true;
    partial.push({ pattern: getRandomPattern(), sample: getRandomHat() });
  }
  return partial;
}

function playAndRecordSong() {
  // get context and media stream destination.
  var tctx = Tone.context;
  var dest = tctx.createMediaStreamDestination();
  var recr = new MediaRecorder(dest.stream);
  var dload= document.getElementById("download");

  dload.setAttribute("disabled", "disabled");
  player.parent().hide();
  progress.css("width","0%");
  progress.parent().show();
  status_label.text("Recording new beat...");

  // set up recorder to listen for recording chunks.
  var chunks = [];
  recr.ondataavailable = function(e) {
    chunks.push(e.data);
  };
  recr.onstop = function() {
    var blob = new Blob(chunks, { type: 'audio/webm; codecs=opus' });
    player[0].src = URL.createObjectURL(blob);
    player.parent().show();
    dload.removeAttribute("disabled");
  };

  // individually assign stream destination to each clip and play each clip.
  var last = null;
  for(var key1 in song)
    if(song[key1])
      for(var key2 in song[key1])
        if(song[key1][key2]) {
          song[key1][key2].play();
          song[key1][key2].clip.output.connect(dest);
          last = song[key1][key2].clip;
        }

  // star the recording.
  recr.start(1000);

  // stop the recording when callbacks stop for more than 1 second.
  var stopTimer = null;
  var first = null;
  last.callback = function(e) {
    if(!first) first = e;
    var t = e - first;
    progress.css("width",((t/last.loopEnd)*100)+"%");
    clearTimeout(stopTimer);
    stopTimer = setTimeout(function() {
      recr.stop();
      stopPlaybackAndRecording();
    }, 1000);
  };
}

function stopPlaybackAndRecording() {
  // stop each clip individually
  for(var key1 in song)
    if(song[key1])
      for(var key2 in song[key1])
        if(song[key1][key2])
          song[key1][key2].pause();
  Tone.Transport.stop();

  play.removeClass("btn-danger");
  play.text("Create A New Beat");
  progress.parent().hide();
  status_label.text("Click 'Create A New Beat' to start again...");
}

function createSong(type) {
  song   = { intro:[], chorus1:[], verse1:[], chorus2:[], verse2:[], chorus3:[], outro:[] };
  song[type] = true;

  var offset    = 0;
  var intro     = createIntro();
  var chorus    = createChorus(intro);
  var verse     = createVerse(intro);
  var outro     = createOutro();

  // create an intro
  if(intro.length>0)
    song.intro = mergePatterns(intro, 4, offset);
  else
    delete song.intro;

  // create chorus1
  if(intro.length>0) offset += 4;
  song.chorus1 = mergePatterns(chorus, 8, offset);

  // create verse1
  offset += 8;
  song.verse1 = mergePatterns(verse, 10, offset);

  // create chorus2
  offset += 10;
  song.chorus2 = mergePatterns(addOverlay(Array.from(chorus),song), 12, offset);

  // create verse2
  offset += 12;
  song.verse2 = mergePatterns(addOverlay(Array.from(verse),song), 10, offset);

  // create chorus3
  offset += 10;
  song.chorus3 = mergePatterns(addOverlay(Array.from(chorus),song), 8, offset);

  // create outro
  offset += 8;
  song.outro = mergePatterns(outro, 4, offset);

  return song;
}

$(function() {
  progress    = $("#bar");
  progress.parent().hide();
  player      = $("#rec");
  player.parent().hide();
  play        = $("#play");
  status_label= $("#status");

  var download= $("#download");
  var isPlaying = false;

  play.on("click", function(e) {
    console.clear();
    var type = $("input[name='type']:checked").val();
    Tone.Transport.bpm.value = (type=="trap" ? 130 : 175);
    Tone.Transport.start();
    if(!isPlaying) {
      isPlaying = true;
      play.text("Cancel Beat");
      play.addClass("btn-danger");
      song = createSong(type);
      playAndRecordSong(song);
    } else {
      isPlaying = false;
      stopPlaybackAndRecording(song);
    }
  });

  download.on("click", function(e) {
    downloadBlob();
  });

  play.on("zclick", function(e) {
    Tone.Transport.bpm.value = 175;
    Tone.Transport.start();
    notesArr = piano_notes;
    var c = scribble.clip({
      samples: piano,
      notes: notesArr.join(" "),
      pattern: 'xxxx'.repeat(notesArr.length/2),
    });
    c.start();
  });
});

