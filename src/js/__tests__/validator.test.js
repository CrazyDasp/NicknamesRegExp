import { Validator } from "../validator";

test("Testing validate username by parameters", () => {
    const validator = new Validator()

    const nickname1 = "nickname123"
    const nickname2 = "_nickname_"
    const nickname3 = "nick_name"
    const nickname4 = "nick1235name"
    const nickname5 = "GoodNickName"

    expect(validator.validateUsername(nickname1)).toEqual(false)
    expect(validator.validateUsername(nickname2)).toEqual(false)
    expect(validator.validateUsername(nickname3)).toEqual(true)
    expect(validator.validateUsername(nickname4)).toEqual(false)
    expect(validator.validateUsername(nickname5)).toEqual(true)
})