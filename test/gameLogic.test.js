import {resultCalculator, toZero} from '../src/gameLogic.js'

var moves = 0

test ('result calculator', () => {
    expect(resultCalculator(moves)).toEqual('3stars.png')
    moves = 23
    expect(resultCalculator(moves)).toEqual('2stars.png')
    moves = 30
    expect(resultCalculator(moves)).toEqual('1star.png')
    moves = 0
    expect(resultCalculator(moves)).toEqual('3stars.png')
})

test('varialbes to initial state', () => {
    var img1 = 'oaic'
    var id1 = 'iaco'
    var img2 = 'aioc'
    var id2 = 'ciao'
    var clickCount = 3
    expect(toZero(clickCount, id1, img1, id2, img2)).toMatch('')
    expect(toZero(clickCount, id1, img1, id2, img2)).toBeFalsy()
    expect(toZero(clickCount, id1, img1, id2, img2)).not.toBeTruthy()
})

