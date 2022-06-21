import { describe, expect, test, } from "vitest"
import { MatchingUser } from "@/components/matching/card/models/matchingUser"
import { MatchingUserCollection } from "@/components/matching/cards/models/matchingUserCollection"

describe('Matching User Collection Test', () => {
    test('追加', () => {
        const users = new MatchingUserCollection()
        const added = users.added(MatchingUser.initActive('たなか'))
        for (const user of added) {
            expect(user.name).toBe('たなか')
        }
    })
})