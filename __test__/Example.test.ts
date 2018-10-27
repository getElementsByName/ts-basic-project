import { Exmaple } from "../src/Example"

describe("Exmaple Test", () => {
  test("default", () => {
    const example = new Exmaple()

    expect(example.e).toEqual(1)
  })
})
