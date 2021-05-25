const {caesar} = require("../src/caesar")
const expect = require("chai").expect 

// Write your tests here!
//Testing rules: 
// - If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
// - Spaces should be maintained throughout, as should other non-alphabetic symbols.
// - Capital letters can be ignored.
// - If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").

describe("caesar", () => {
    it("should return false if shift value is not present", () => {
        const actual = caesar("confused")
        expect(actual).to.be.false
    })

    it("should return false if shift value is equal to 0", () => {
        const actual = caesar("confused", 0)
        expect(actual).to.be.false
    })

    it("should return false if shift value is less than -25", () => {
        const actual = caesar("confused", -42)
        expect(actual).to.be.false
    })

    it("should return false if shift value is greater than 25", () => {
        const actual = caesar("confused", 26)
        expect(actual).to.be.false
    })

    it("should have spaces maintained throughout the function", () => {
        const expected = 'bpqa qa i amkzmb umaaiom!'
        const actual = caesar("This is a secret message!", 8)
        expect(actual).to.equal(expected)
    })

    it("should ignore capital letters", () => {
        const expected = 'bpqa qa i amkzmb umaaiom!'
        const actual = caesar("THIS is a secret message!", 8)
        expect(actual).to.equal(expected)
    })

    it("should shift appropriately when letters are at the end of the alphabet", () => {
        const expected = 'cheud'
        const actual = caesar("zebra", 3)
        expect(actual).to.equal(expected)
    })
})