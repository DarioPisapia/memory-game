import {resultCalculator, toZero} from '../src/gameLogic.js'

var img1 = ''
var id1 = ''
var img2 = ''
var id2 = ''
var clickCount = 0

var points = 0 
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
    expect(toZero()).toMatch('')
})