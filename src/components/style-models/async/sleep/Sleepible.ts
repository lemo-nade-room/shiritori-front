export default interface Sleepible {
    sleep: (ms: number) => Promise<void>
}