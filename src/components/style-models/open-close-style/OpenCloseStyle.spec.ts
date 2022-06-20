import {beforeEach, describe, expect, test} from "vitest";
import OpenCloseStyle from "@/components/style-models/open-close-style/OpenCloseStyle";
import MockTimer from "@/components/style-models/async/sleep/MockTimer";

let closedTimer: MockTimer
let openedTimer: MockTimer
let closedStyle: OpenCloseStyle
let openedStyle: OpenCloseStyle

describe('OpenCloseStyle', () => {

    beforeEach(() => {
        openedTimer = new MockTimer()
        openedStyle = new OpenCloseStyle(
            true,
            ['always', 'often'],
            ['opening', 'true'],
            ['closing', 'false', 'no'],
            100,
            openedTimer
        )

        closedTimer = new MockTimer()
        closedStyle = new OpenCloseStyle(
            false,
            ['always', 'often'],
            ['opening', 'true'],
            ['closing', 'false', 'no'],
            200,
            closedTimer
        )
    })

    test('opening', () => {
        expect(openedStyle.style).toStrictEqual(['always', 'often', 'opening', 'true'])
    })

    test('closing', () => {
        expect(closedStyle.style).toStrictEqual(['always', 'often', 'closing', 'false', 'no'])
    })

    test('open', () => {
        closedStyle = closedStyle.open()
        expect(closedStyle.style).toStrictEqual(['always', 'often', 'opening', 'true'])
    })

    test('close', () => {
        openedStyle = openedStyle.close()
        expect(openedStyle.style).toStrictEqual(['always', 'often', 'closing', 'false', 'no'])
    })

    test('toggle', () => {
        openedStyle = openedStyle.toggle()
        expect(openedStyle.style).toStrictEqual(['always', 'often', 'closing', 'false', 'no'])
        openedStyle = openedStyle.toggle()
        expect(openedStyle.style).toStrictEqual(['always', 'often', 'opening', 'true'])
    })

    test('async open', async () => {
        closedStyle = await closedStyle.waitOpen()
        expect(closedStyle.style).toStrictEqual(['always', 'often', 'opening', 'true'])
        expect(closedTimer.elapsed).toBe(200)
    })

    test('async close', async () => {
        openedStyle = await openedStyle.waitClose()
        expect(openedStyle.style).toStrictEqual(['always', 'often', 'closing', 'false', 'no'])
        expect(openedTimer.elapsed).toBe(100)
    })

    test('async toggle', async () => {
        closedStyle = await closedStyle.waitToggle()
        expect(closedStyle.style).toStrictEqual(['always', 'often', 'opening', 'true'])
        closedStyle = await closedStyle.waitToggle()
        expect(closedStyle.style).toStrictEqual(['always', 'often', 'closing', 'false', 'no'])
        expect(closedTimer.elapsed).toBe(400)
    })
})