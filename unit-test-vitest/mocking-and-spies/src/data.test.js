import { describe, expect, vi, it } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
    it("should execute logFn if provided", () => {

        // this is a spy
        const logger = vi.fn();

        generateReportData(logger);

        expect(logger).toBeCalled();
        // expect(logger).toHaveBeenCalled(); // both work
    })
})