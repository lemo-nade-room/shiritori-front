import Sleepible from "@/components/style-models/async/sleep/Sleepible";

export default class Timer implements Sleepible {
    sleep = async (ms: number) => {
        await new Promise(resolve => setTimeout(resolve, ms))
    }
}