describe('isVowel', function() {
    it("check to see if input starts with vowel", function() {
        expect(isVowel("ant")).to.equal(true)
    });
});

describe('isCon', function() {
    it("add ay to the end of words that start with consonant and move the first letter to the end", function() {
        expect(isCon("dog")).to.equal("ogday")
    });
});

describe('isDoubleCon', function() {
    it("add ay to the end of words that start with two consonants and move the consonants to the end", function() {
        expect(isDoubleCon("truck")).to.equal("ucktray")
    });
});

describe('hasQuSecond', function() {
    it("add ay to the end of words that start 'qu' as second and third letters", function() {
        expect(hasQuSecond("squeal")).to.equal("ealsquay")
    });
});

describe('hasQuFirst', function() {
    it("add ay to the end of words that start 'qu' and move 'qu' to the end", function() {
        expect(hasQuFirst("quail")).to.equal("ailquay")
    });
});

describe('isCon', function() {
    it("add ay to the end of words that start with y", function() {
        expect(isCon("yellow")).to.equal("ellowyay")
    });
});

describe('isQu', function() {
    it("add ay to the end of words that start 'qu' and move 'qu' to the end", function() {
        expect(isQu("queal")).to.equal(true)
    });
});
describe('isQutwo', function() {
    it("add ay to the end of words that start 'qu' and move 'qu' to the end", function() {
        expect(isQuTwo("squeal")).to.equal(true)
    });
});
