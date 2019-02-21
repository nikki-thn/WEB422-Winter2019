//
//  GameScene.swift
//  Mario2
//
//  Created by Alireza Moghaddam on 2019-02-02.
//  Copyright © 2019 Alireza. All rights reserved.
//

import SpriteKit
import GameplayKit

class GameScene: SKScene, SKPhysicsContactDelegate {
    
    private var label : SKLabelNode?
    var scoreLabel: SKLabelNode?
    
    var mario: SKSpriteNode?  //SKSpriteNode is an onscreen graphical element that can be initialized from an image or a solid color. SpriteKit adds functionality to its ability to display images. For more information:
    //https://developer.apple.com/documentation/spritekit/skspritenode
    
    
    var coinTimer: Timer?
   
    var score = 0
    
    let marioCategory: UInt32 = 0x1 << 1 //=1
    let coinCategory: UInt32 = 0x1 << 2 //=2
    let groundCategory: UInt32 = 0x1 << 3 // 32
    let platformCategory: UInt32 = 0x1 << 4 // 16
    let dummyCategory: UInt32 = 0x1 << 5 // 32
    
    
    
    override func didMove(to view: SKView) {
        
        
        physicsWorld.contactDelegate = self  //The driver of the physics engine in a scene; it exposes the ability for you to configure and query the physics system.
       
        mario = childNode(withName: "mario") as? SKSpriteNode
        scoreLabel = childNode(withName: "scoreLabel") as? SKLabelNode
        
        mario?.physicsBody?.categoryBitMask = marioCategory
        mario?.physicsBody?.collisionBitMask = groundCategory
        mario?.physicsBody?.contactTestBitMask = coinCategory
        
        var marioRun : [SKTexture] = []
        for number in 1...4 {
            marioRun.append(SKTexture(imageNamed: "frame-\(number).png"))
        }
        
        mario?.run(SKAction.repeatForever(SKAction.animate(with: marioRun, timePerFrame: 0.2)))
        
        coinTimer = Timer.scheduledTimer(withTimeInterval: 1, repeats: true, block: {(timer) in self.createCoin()})
        
        createGround()
   
    }
    
    func createGround()
    {
        let tmp_element = SKSpriteNode(imageNamed: "ground.jpg")
        let numberOfElements = Int(size.width / tmp_element.size.width) + 1
        
        for number in 0...numberOfElements {
            
            let element = SKSpriteNode(imageNamed: "ground.jpg")
            element.size = CGSize(width: 255, height: 120)
            element.physicsBody = SKPhysicsBody(rectangleOf: element.size)
            element.physicsBody?.categoryBitMask = groundCategory
            element.physicsBody?.collisionBitMask = marioCategory
            element.physicsBody?.affectedByGravity = false
            element.physicsBody?.isDynamic = false
            element.physicsBody?.allowsRotation = false
            addChild(element)
            
            let elementX = -size.width / 2 + element.size.width / 2  + element.size.width * CGFloat(number)
            
            element.position = CGPoint(x: elementX, y: -size.height / 2 + element.size.height / 2)
            
            let speed = 100.0
            
            let moveLeft = SKAction.moveBy(x: -element.size.width - element.size.width * CGFloat(number), y: 0, duration: TimeInterval(element.size.width + element.size.width * CGFloat(number)) / speed)
            
            let resetElement = SKAction.moveBy(x: size.width + element.size.width, y: 0, duration: 0)
            
            let fullScreenMove = SKAction.moveBy(x: -size.width - element.size.width, y: 0,
                                                 duration: TimeInterval(size.width + element.size.width) / speed)
            
            let elementMoveConstantly = SKAction.repeatForever(SKAction.sequence([fullScreenMove, resetElement]))

            element.run(SKAction.sequence([moveLeft, resetElement, elementMoveConstantly]))
            
            
        }
    }
    
    
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        
        mario?.physicsBody?.applyForce(CGVector(dx:0, dy: 50000))
        
    }
    
    func createCoin() {
        let coin = SKSpriteNode(imageNamed: "coin")
        coin.size = CGSize(width: 100, height: 100)
        coin.physicsBody = SKPhysicsBody(rectangleOf: coin.size)
        coin.physicsBody?.affectedByGravity = false
        
        coin.physicsBody?.categoryBitMask = coinCategory
        coin.physicsBody?.collisionBitMask = dummyCategory
        coin.physicsBody?.contactTestBitMask = marioCategory
        
      
        
        addChild(coin)
        
        let maxY = size.height / 2 - coin.size.height / 2
        let minY = -size.height / 2 + coin.size.height / 2
        let range = maxY - minY
        
        let coinY = maxY - CGFloat(arc4random_uniform(UInt32(range)))
        
        coin.position = CGPoint(x: size.width / 2 + coin.size.width / 2, y: coinY)
        
        let moveLeft = SKAction.moveBy(x: -size.width - coin.size.width, y: 0, duration: 4)
        let mySeq = SKAction.sequence([moveLeft, SKAction.removeFromParent()])
        coin.run(mySeq)
    }
    
    func didBegin(_ contact: SKPhysicsContact) {
        print("Contact!")
        
        
        
        
        
        if contact.bodyA.categoryBitMask == coinCategory {
            contact.bodyA.node?.removeFromParent()
            score += 1
        }
        
        
        if contact.bodyB.categoryBitMask == coinCategory {
            contact.bodyB.node?.removeFromParent()
            score += 1
        }
 
        scoreLabel?.text = "Score: \(score)"
        
        
    }
    
  
}
