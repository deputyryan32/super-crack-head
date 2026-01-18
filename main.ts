// Sprites Setup/Utils
namespace SpriteKind {
}
let myCrackHead = sprites.create(assets.image`myPlayerImage`, SpriteKind.Player);
scene.cameraFollowSprite(myCrackHead)
myCrackHead.ay = 500

// Info Setup
info.setScore(0)
info.setLife(1)
// Main Scene Setup
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`level`)
tiles.placeOnTile(myCrackHead, tiles.getTileLocation(0, 18))
controller.moveSprite(myCrackHead, 85, 0)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (myCrackHead.isHittingTile(CollisionDirection.Bottom)) {
        myCrackHead.vy = -250
    }
})

// Death Function
info.onLifeZero(function(){
    info.setScore(0)
    scene.setBackgroundColor(6)
    tiles.setCurrentTilemap(tilemap`level`)
    tiles.placeOnTile(myCrackHead, tiles.getTileLocation(0, 18))
    controller.moveSprite(myCrackHead, 85, 0)
    info.setLife(1)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`deathTile`, function(){
    info.changeLifeBy(-1)
})