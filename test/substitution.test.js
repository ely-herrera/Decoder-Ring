// Write your tests here!
const {substitution} = require("../src/substitution")
const expect = require("chai").expect 

// Write your tests here!
//Testing rules: 
// - It returns false if the given alphabet isn't exactly 26 characters long.
// - It correctly translates the given phrase, based on the alphabet given to the function.
// - It returns false if there are any duplicate characters in the given alphabet.
// - It maintains spaces in the message, before and after encoding or decoding.
// - It ignores capital letters.

describe ("substitution", () => {
    it("should correctly translate the given phrase, based on the alphabet given to the function.", () => {
        const expected = 'message'
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
        expect(actual).to.be.equal(expected)
    })

    it("should return false if the given alphabet isn't exactly 26 characters long.", () => {
        const actual = substitution("mando", "short")
        expect(actual).to.be.false
    })

    it("should return false if there are any duplicate characters in the given alphabet.", () => {
        const actual = substitution("grogu", "abcabcabcabcabcabcabcabcyz")
        expect(actual).to.be.false
    })

    it("should ignore capital letters", () => {
        const expected = 'elp xhm xf mbymwwmfj dne'
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected)
    })

    it("should have spaces maintained throughout the function", () => {
        const expected = 'elp xhm xf mbymwwmfj dne'
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected)
    })
})