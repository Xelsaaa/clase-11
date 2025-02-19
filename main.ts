sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.splash(game.askForString("indica tu nombre", 4))
})
let mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 a a a a a 3 3 a a a a a 3 3 
    3 3 a a a a a 3 3 a a a a a 3 3 
    3 3 a a 1 a a 3 3 a a 1 a a 3 3 
    3 3 a a a a a 3 3 a a a a a 3 3 
    3 3 a a a a a 3 3 a a a a a 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 a a a a a 3 3 3 3 3 3 
    3 3 3 3 3 a a a a a 3 3 3 3 3 3 
    3 3 3 3 3 a 1 1 1 a 3 3 3 3 3 3 
    3 3 3 3 3 1 a a a 1 3 3 3 3 3 3 
    3 3 3 3 3 1 a a a 1 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Player)
let ENEMIGO = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 f f f f f 5 5 1 1 1 1 1 5 5 
    5 5 f f f f f 5 5 1 1 f 1 1 5 5 
    5 5 f f 1 f f 5 5 1 1 f 1 1 5 5 
    5 5 f f f f f 5 5 1 1 1 1 1 5 5 
    5 5 f f f f f 5 5 1 1 1 1 1 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 
    5 5 5 5 5 1 1 1 1 1 5 5 5 5 5 5 
    5 5 5 5 5 1 f f f 1 5 5 5 5 5 5 
    5 5 5 5 5 f f f f f 5 5 5 5 5 5 
    5 5 5 5 5 f f f f f 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Enemy)
let ENEMIGO2 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 5 5 5 5 5 6 6 1 1 1 1 1 6 6 
    6 6 5 5 5 5 5 6 6 1 1 5 1 1 6 6 
    6 6 5 5 5 5 5 6 6 1 1 5 1 1 6 6 
    6 6 5 5 5 5 5 6 6 1 1 1 1 1 6 6 
    6 6 5 5 5 5 5 6 6 1 1 1 1 1 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 1 1 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 1 1 1 1 1 6 6 6 6 6 6 
    6 6 6 6 6 1 5 5 5 1 6 6 6 6 6 6 
    6 6 6 6 6 5 5 5 5 5 6 6 6 6 6 6 
    6 6 6 6 6 5 5 5 5 5 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite)
ENEMIGO.setPosition(22, 43)
ENEMIGO2.setPosition(118, 49)
info.setScore(game.askForNumber("indica tu edad", 2))
while (game.ask("te gusta el cine")) {
    mySprite.setPosition(4, 4)
}
