module.exports = function(router) {
  var Helper    = require('./helper.js');
  var fs        = require('fs');
  var glob      = require('glob');
  var scribble  = require("scribbletune");

  router.get("/", function(req,res) {
    return res.render("index", { title: 'Homepage'});
  });

  var merge = function(one,two) {
    for(var key in one) {
      var note1 = one[key];
      var note2 = two[key];

      if(note1 && note2) {
        if(note1.note && note2.note) {
          note1.note = [note1.note,note2.note];
        } else if (note2.note) {
          note1.note =  note2.note;
        }
        one[key] = note1;
      }
      else {
        return note1;
      }
    }
    return one;
  };

  var file = function(req,name) {
    return req.STATIC_DIR + "/midis/" + name;
  };

  var createClip = function(req, name, notes, pattern) {
    var obj = { title: name, filename: file(req, name+'.mid'), path: '/midis/'+name+'.mid' };
    obj.clip = scribble.clip({
      notes: notes,
      pattern: pattern
    });
    scribble.midi(obj.clip, obj.filename);
    return obj;
  };

  router.get("/test", function(req,res) {
    var l        = res.locals;

    l.clips       = {};
    l.clips.test = createClip(req, 'test', 'c4', 'xxxxxx'.repeat(4));
    l.clips.first = createClip(req, 'first', 'Dm', 'x-x--xx--'.repeat(4));
    l.clips.second= createClip(req, 'second', 'AM', '--xx--x-x'.repeat(4));

    l.clips.third = { title: 'third', filename: file(req, 'third.mid'), path: '/midis/third.mid' };
    l.clips.third.clip = merge(l.clips.test.clip, l.clips.second.clip);
    scribble.midi(l.clips.third.clip, l.clips.third.filename);

    return res.render("index", { title: 'Homepage', message: 'Homepage'});
  });

  router.get("/old", function(req, res) {
    const theChords = scribble.progression.getChords('C4 major', 'i iv i iv i v i II');
    // This will return 'Cm Fm Cm Fm Cm Gm Cm DM'. Here 'm' stands for a minor chord and 'M' stands for a major chord.

    const notesArr = scribble.arp({
      chords: theChords, // you can even provide a string like 'Cm Fm Cm Fm Cm Gm Cm DM'
      count: 4, // you can set any number from 2 to 8
      // The default value of order is 01234567 as count is 8 by default
      // but here we set count to 4 hence we are only using the first 4 indices to set a order
      order: '1032' // Any number up to the `count`
      // Here the `count` is 4, hence any combination of 0, 1, 2 and 3
      // If the `count` was 3 then you can use any combination of 0, 1 and 2
    });

    const c = scribble.clip({
      notes: notesArr,
      pattern: 'x-x_'.repeat(notesArr.length/2),
      subdiv: '16n'
    });

    scribble.midi(c, 'static/midis/arp.mid');
    return res.render("index", { title: 'Homepage', message: 'Homepage'});
  });
};
