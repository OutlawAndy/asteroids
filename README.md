asteroids
=========

An ongoing experiment in canvas and javascript games

The basic structure of the game came from an [O'Reilly](http://www.oreilly.com/) tutorial on HTML5 Canvas.

It makes use of David Griffith's [animatic](https://code.google.com/p/animatic/) library to calculate movement between redraws for most objects.

It has evolved over a number of iterations, I tend to forget about it for 6 months or so and then rediscover it when I find some down time.

I have learned alot from playing with this project, but the most useful bits I learned first from David Griffith in the original tutorial (I will try to dig up a link but I can't remember the name of it).

The important points are:

* the game is run by a single loop

* like all OO designed systems, entities are instances of classes that dictate object behavior.  The interesting point here is that each object knows how to draw itself.

* at each iteration of the run loop, grab the canvas' drawing context and pass it around to each object allowing that object to re-draw itself where it knows it should be.

thats basically it.

This game is in no way complete.

I have an idea of the features I want to include going forward, but feel free to fork it and do what you like.  If you do something cool with it and would like to share, feel free to submit a pull request.
