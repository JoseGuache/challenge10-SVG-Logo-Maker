const Circle = require("./circle")

describe("Circle", () => {

    describe("text", () => {
        it("test text", () => {
            const circle = new Circle("JG", "red", "black")
            expect(circle.text).toEqual("JG")
        })
    })

    describe("textColor", () => {
        it("test text Color", () => {
            const circle = new Circle("JG", "red", "black")
            expect(circle.textColor).toEqual("red")
        })

        describe('shapeColor', () => {
            it('test shapeColor', () => {
                const circle = new Circle("JG", "red", "black")
                expect(circle.shapeColor).toEqual("black")
            })
        })
    })

    describe("render", () => {
        it("test circle svg log", () => {
            const circle = new Circle("JG", "red", "black")
            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${circle.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${circle.textColor}">${circle.text}</text></svg>`)
        })
    })

})