import { MatchingUserStatus } from '@/components/matching/card/models/matchingUserStatus'

export class MatchingUser {

    public constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly status: MatchingUserStatus
    ) {}

    public static readonly initActive = (id: string, name: string) => new MatchingUser(id, name, MatchingUserStatus.active)

    public get active(): MatchingUser {
        return new MatchingUser(this.id, this.name, MatchingUserStatus.active)
    }

    public get nonActive(): MatchingUser {
        return new MatchingUser(this.id, this.name, MatchingUserStatus.nonActive)
    }

    public get offering(): MatchingUser {
        return new MatchingUser(this.id, this.name, MatchingUserStatus.offering)
    }

    public get offered(): MatchingUser {
        return new MatchingUser(this.id, this.name, MatchingUserStatus.offered)
    }

    public get isActive(): boolean {
        return this.status === MatchingUserStatus.active
    }

    public get isNonActive(): boolean {
        return this.status === MatchingUserStatus.nonActive
    }

    public get isOffered(): boolean {
        return this.status === MatchingUserStatus.offered
    }

    public get isOffering(): boolean {
        return this.status === MatchingUserStatus.offering
    }
}