import Sleepible from "@/components/style-models/async/sleep/Sleepible";

export default class MockTimer implements Sleepible {

    private sleepTimes: number = 0

    sleep = async (ms: number) => {
        new Promise((() => {this.sleepTimes += ms}))
    }

    get elapsed(): number {
        return this.sleepTimes
    }
}