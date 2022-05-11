"use strict"

const LinkedList = require("../linkedList")
const HashTable = require("../hashTable")
const { describe, it } = require("eslint/lib/rule-tester/rule-tester")
const { before } = require("cheerio/lib/api/manipulation")
describe("test HashedTable", () => {

    it("test contain with collision=> Successfully returns null for a key that does not exist in the hashtable and true if its exist", () => {
        const hashmap01 = new HashTable(2);
        hashmap01.set("car", "jeep");
        hashmap01.set("favFood", "shawerma");
        hashmap01.set("favSport", "jeep");
        hashmap01.set("favMovie", "F O F");
        hashmap01.set("favFC", "FCB");
       
        expect(hashmap01.contains("favFC")).toEqual(true);
        expect(hashmap01.contains("vFC")).toEqual(false);


    })
    it("test get methode =>Retrieving based on a key returns the value stored", () => {
        const hashmap01 = new HashTable(5);
        hashmap01.set("car", "jeep");
        hashmap01.set("favFood", "shawerma");
        hashmap01.set("favSport", "jeep");
        hashmap01.set("favMovie", "F O F");
        hashmap01.set("favFC", "FCB");
        expect(hashmap01.get("car")).toEqual("jeep");
        expect(hashmap01.get("favFood")).toEqual("shawerma");
    })
    it("Should a given key already exist, replace its value from the value argument given to this method.", () => {
        const hashmap01 = new HashTable(5);
        hashmap01.set("car", "jeep");
        hashmap01.set("car", "Tyota");
        expect(hashmap01.get("car")).toEqual("Tyota");
    })
    it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
        const hashmap01 = new HashTable(2);
        hashmap01.set("car", "jeep");
        hashmap01.set("favFood", "shawerma");
        hashmap01.set("favSport", "jeep");
        hashmap01.set("favMovie", "F O F");
        hashmap01.set("favFC", "FCB");
        expect(hashmap01.get("car")).toEqual("jeep");
        expect(hashmap01.get("favFood")).toEqual("shawerma");
        expect(hashmap01.get("favSport")).toEqual("jeep");
        expect(hashmap01.get("favMovie")).toEqual("F O F");
        expect(hashmap01.get("favFC")).toEqual("FCB");
    })
    it("Successfully returns a list of all unique keys that exist in the hashtable", () => {
        const hashmap01 = new HashTable(5);
        hashmap01.set("car", "jeep");
        hashmap01.set("favFood", "shawerma");
        hashmap01.set("favSport", "jeep");
        hashmap01.set("favMovie", "F O F");
        hashmap01.set("favFC", "FCB");
        expect(hashmap01.keys()).toEqual(["car", "favFood", "favMovie", "favFC","favSport" ]);
    })
})