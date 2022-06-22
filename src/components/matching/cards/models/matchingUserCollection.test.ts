import { describe, expect, test, } from "vitest"
import { MatchingUser } from "@/components/matching/card/models/matchingUser"
import { MatchingUserCollection } from "@/components/matching/cards/models/matchingUserCollection"

describe('Matching User Collection Test', () => {
    test('追加', () => {
        const users = new MatchingUserCollection()
        const added = users.added(MatchingUser.initActive('id', 'たなか'))
        for (const user of added) {
            expect(user.name).toBe('たなか')
        }
    })

    test('make', () => {
        const fetchUsers = [
            { id: 'hello', name: 'たなか'},
            { id: 'world', name: 'さとう'},
            { id: 'a', name: 'すずき'},
            { id: 'i', name: 'なかじま'},
            { id: 'u', name: 'こここ'},
        ]

        MatchingUserCollection.make(fetchUsers)
    })
})