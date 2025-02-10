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
            expect(square.render()).toEqual(`<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"300\" height=\"200\"><square cx=\"150\" cy=\"100\" r=\"80\" fill=\"black\"/><text x=\"150\" y=\"125\" font-size=\"60\" text-anchor=\"middle\" fill=\"red\">JG</text></svg>`)


        })
    })
})