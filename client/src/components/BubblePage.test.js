import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

import {fetchColors as mockFetchColors} from "../api/fetchColors";

jest.mock('../api/fetchColors')

const mockColors = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  }
]

test("Fetches data and renders the bubbles", () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce(mockColors)
  render(<BubblePage />)

  // const bubbles = screen.getAllByTestId("color")
  // expect(bubbles).toHaveLength(3);


});
