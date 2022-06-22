import { MatchingUser } from "@/components/matching/card/models/matchingUser"

export class MatchingUserCollection implements Iterable<MatchingUser> {

    public constructor(
        private readonly users: readonly MatchingUser[] = []
    ) {}

    public readonly added = (user: MatchingUser): MatchingUserCollection => {
        const addUser = this.isOffering() ? user.nonActive : user
        return new MatchingUserCollection(this.users.concat([addUser]))
    }

    public readonly offered = (userId: string): MatchingUserCollection => {
        return new MatchingUserCollection(this.users.map(user => {
            return user.id === userId ? user.offered : user
        }))
    }

    public readonly canceled = (userId: string): MatchingUserCollection => {
        return new MatchingUserCollection(this.users.map(user => {
            return user.id === userId ? user.active : user
        })).checked()
    }

    public readonly outed = (userId: string): MatchingUserCollection => {
        return new MatchingUserCollection(this.users.filter(user => user.id !== userId))
            .checked()
    }

    public readonly offer = (userId: string): MatchingUserCollection => {
        return new MatchingUserCollection(this.users.map(user => {
            if (user.id === userId) return user.offering
            if (user.isOffered) return user
            return user.nonActive
        }))
    }

    public readonly withdrawn = (): MatchingUserCollection => {
        return new MatchingUserCollection(this.users.map(user => {
            return user.isOffered ? user : user.active
        }))
    }

    public readonly deny = (id: string): MatchingUserCollection => {
        return new MatchingUserCollection(this.users.map(user => {
            return user.id === id ? user.active : user
        }))
    }

    public readonly denied = (): MatchingUserCollection => {
        return new MatchingUserCollection(this.users.map(user => {
            return user.offering ? user.active : user
        }))
    }

    [Symbol.iterator]() {
        return this.users.values()
    }

    public static readonly make = (fetchUsers: { id: string, name: string }[]): MatchingUserCollection => {
        return new MatchingUserCollection(fetchUsers.map((fetchUser => {
            return MatchingUser.initActive(fetchUser.id, fetchUser.name)
        })))
    }

    private readonly isOffering = (): boolean => {
        return this.users.some(user => user.isOffering)
    }

    private readonly checked = (): MatchingUserCollection => {
        if (this.users.some(user => user.isOffering)) return this
        return new MatchingUserCollection(this.users.map(user => user.isNonActive ? user.active : user))
    }
}