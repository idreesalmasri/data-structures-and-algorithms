const { describe, it } = require("eslint/lib/rule-tester/rule-tester");
const {stack}=require("../stack");
const {validateBrackets}=require("../stack");

describe("test",()=>{
    it("test true",()=>{
        let str="()[[Extra Characters]]";
        expect(validateBrackets(str)).toBe(true);
    })
    it("test true",()=>{
        let str="(){}[[]]";
        expect(validateBrackets(str)).toBe(true);
    })
    it("test false",()=>{
        let str="[({}]";
        expect(validateBrackets(str)).toBe(false);
    })
    it("test false ",()=>{
        let str="{(})";
        expect(validateBrackets(str)).toBe(false);
    })
})