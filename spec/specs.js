describe ('isVowel', function () {
 it("check to see if input starts with vowel", function () {
   expect(isVowel("ant")).to.equal(true)
 });
});


describe ('inputAy', function () {
 it("add ay to the end of words that start with vowel", function () {
   expect(inputAy("apple")).to.equal("appleay")
 });
 });

 // it("add ay to the end of words that start with consonant and move all of the first consecutive consonants to the end", function () {
 //   expect(inputAy("truck")).to.equal("ucktray")
 // });
 //
 // it("add ay to the end of words that start with qu and move qu to the end ", function () {
 //   expect(inputAy("quail")).to.equal("ailquay")
 // });
 //
 // it("add ay to the end of words that start with y", function () {
 //   expect(inputAy("yellow")).to.equal("ellowyay")
 // });
