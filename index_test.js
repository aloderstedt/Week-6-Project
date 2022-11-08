let expect = chai.expect;

const playerOneCard = playerOneDeck.flip();
const playerTwoCard = playerTwoDeck.flip();

describe('MyFunction', function () {
    describe('#winsRound', function () {
        it(`Should convert predetermined strings into integers then 
        return true if the first is greater than the second`, function () {
            let x = winsRound(10, 8);
            expect(x).to.equal(false);
        })
    })
})


/* It seems that all of my functions relied too heavily on classes
to be tested with Mocha and Chai. Or at least it appears that way
to me. Most of my functionality code was encapsulated as methods within
classes and the few functions that were not, were still reliant on 
those methods in one way or another.*/