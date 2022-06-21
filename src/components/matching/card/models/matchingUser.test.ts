import { describe, expect, test, } from "vitest"
import { MatchingUser } from "@/components/matching/card/models/matchingUser"

describe('Matching User Test', () => {
    test('statusの変更', () => {
        const activeUser = MatchingUser.initActive('たなか')
        const offeredUser = activeUser.offered

        expect(activeUser.name).toBe('たなか')
        expect(offeredUser.name).toBe('たなか')
    })


})