import Sleepible from "@/components/style-models/async/sleep/Sleepible";

export default class OpenCloseStyle {
    constructor(
        private readonly isOpen: boolean,
        private readonly alwaysClasses: readonly string[],
        private readonly whenOpenClasses: readonly string[],
        private readonly whenCloseClasses: readonly string[],
        private readonly waitTime: number,
        private readonly timer: Sleepible
    ) {}

    get style(): string[] {
        return this.isOpen ? this.openingClasses() : this.closingClasses()
    }

    private openingClasses = (): string[] => {
        return this.alwaysClasses.concat(this.whenOpenClasses)
    }

    private closingClasses = (): string[] => {
        return this.alwaysClasses.concat(this.whenCloseClasses)
    }

    private clone = (isOpen: boolean): OpenCloseStyle => {
        return new OpenCloseStyle(
            isOpen,
            this.alwaysClasses,
            this.whenOpenClasses,
            this.whenCloseClasses,
            this.waitTime,
            this.timer
        )
    }

    private wait = async () => {
        await this.timer.sleep(this.waitTime)
    }

    toggle = (): OpenCloseStyle => this.clone(!this.isOpen)

    open = (): OpenCloseStyle => this.clone(true)

    close = (): OpenCloseStyle => this.clone(false)

    waitToggle = async (): Promise<OpenCloseStyle> => {
        await this.wait()
        return this.toggle()
    }

    waitOpen = async (): Promise<OpenCloseStyle> => {
        await this.wait()
        return this.open()
    }

    waitClose = async (): Promise<OpenCloseStyle> => {
        await this.wait()
        return this.close()
    }
}