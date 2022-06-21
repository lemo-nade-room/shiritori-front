import { MatchingUser } from "@/components/matching/card/models/matchingUser"

export class MatchingUserCollection implements Iterable<MatchingUser> {

    public constructor(
        private readonly users: readonly MatchingUser[] = []
    ) {}

    public readonly added = (user: MatchingUser): MatchingUserCollection => {
        return new MatchingUserCollection(this.users.concat([user]))
    }

    [Symbol.iterator]() {
        return this.users.values()
    }
}