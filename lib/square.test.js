const Square = require("./square")

describe("Square", () => {

    describe("text", () => {
        it("test text", () => {
            const square = new Square("JG", "red", "black")
            expect(square.text).toEqual("JG")
        })
    })

    describe("textColor", () => {
        it("test text Color", () => {
            const square = new Square("JG", "red", "black")
            expect(square.textColor).toEqual("red")
        })

        describe('shapeColor', () => {
            it('test shapeColor', () => {
                const square = new Square("JG", "red", "black")
                expect(square.shapeColor).toEqual("black")
            })

        })
    })

    describe("render", () => {
        it("test square svg log", () => {
            const square = new Square("JG", "red", "black")
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"><rect x="0" y="0" width="300" height="300" fill="${square.shapeColor}"/><text x="150" y="150" font-size="60" text-anchor="middle" fill="${square.textColor}">${square.text}</text></svg>`)
        })
    })
})
