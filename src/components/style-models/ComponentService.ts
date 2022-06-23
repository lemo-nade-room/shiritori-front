import Timer from "@/components/style-models/async/sleep/Timer";
import Sleepible from "@/components/style-models/async/sleep/Sleepible";
import OpenCloseStyle from "@/components/style-models/open-close-style/OpenCloseStyle";

export const sleepible: Sleepible = new Timer()

export const createOpenCloseStyle = (
    isOpen: boolean = false,
    alwaysClasses: readonly string[] = [],
    whenOpenClasses: readonly string[] = [],
    whenCloseClasses: readonly string[] = [],
    waitTime: number = 100
): OpenCloseStyle => new OpenCloseStyle(
    isOpen,
    alwaysClasses,
    whenOpenClasses,
    whenCloseClasses,
    waitTime,
    sleepible
)
