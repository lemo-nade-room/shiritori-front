export class MatchingUserStatus {

    private constructor(
        private readonly status: string
    ) {}

    public static readonly active = new MatchingUserStatus('active')
    public static readonly nonActive = new MatchingUserStatus('non-active')
    public static readonly offered = new MatchingUserStatus('offered')
    public static readonly offering = new MatchingUserStatus('offering')
}