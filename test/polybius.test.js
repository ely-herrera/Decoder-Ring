// Write your tests here!
const {polybius} = require("../src/polybius")
const expect = require("chai").expect 

// Write your tests here!
//Testing rules: 
// - When encoding, it translates the letters i and j to 42.
// - When decoding, it translates 42 to (i/j).
// - It ignores capital letters. 
// - It maintains spaces in the message, before and after encoding or decoding.

describe("polybius", () => {
    it("should return a string", () => {
        const expected = 'th(i/j)nkful'
        const actual = polybius("4432423352125413", false)
        expect(actual).to.be.equal(expected)
    })

    it("should return false if the number of charatcers for 'input' ,excluding spaces, are odd", () => {
        const actual = polybius("443242335212541", false)
        expect(actual).to.be.false
    })

     it("should have spaces maintained throughout the function", () => {
        const expected = '3251131343 2543241341'
        const actual = polybius("Hello world");
        expect(actual).to.equal(expected)
    })

    it("should ignore capital letters", () => {
        const expected = '3251131343 2543241341'
        const actual = polybius("Hello world");
        expect(actual).to.equal(expected)
    })

    it("should translate both letters 'I' and 'J' to 42 when encoding and show both letters when decoding", () => {
        const expected = 'th(i/j)nkful'
        const actual = polybius("4432423352125413", false)
        expect(actual).to.be.equal(expected)
    })
})