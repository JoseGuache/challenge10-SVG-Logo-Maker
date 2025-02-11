const Triangle = require("./triangle")

describe("Triangle", () => {


    describe("text", () => {
        it("test text", () => {
            const triangle = new Triangle("JG", "red", "black")
            expect(triangle.text).toEqual("JG")
        })
    })


    describe("textColor", () => {
        it("test text Color", () => {
            const triangle = new Triangle("JG", "red", "black")
            expect(triangle.textColor).toEqual("red")
        })


        describe('shapeColor', () => {
            it('test shapeColor', () => {
                const triangle = new Triangle("JG", "red", "black")
                expect(triangle.shapeColor).toEqual("black")
            })

        })
    })

    describe("render", () => {
        it("test triangle svg log", () => {
            const triangle = new Triangle("JG", "red", "black")
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points="150, 30 250, 170 50, 170" fill="${triangle.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text></svg>`)

        })
    })
})