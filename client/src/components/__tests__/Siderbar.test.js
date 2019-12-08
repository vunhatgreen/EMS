import React from "react";
import { shallow } from "enzyme";
import Sidebar from "../Sidebar";

jest
  .mock("../../routes", () => [
    {
      layout: "",
      path: "",
      name: ""
    },
    {
      layout: "hello",
      path: "",
      name: ""
    }
  ])
  .mock("react-router-dom", () => "Link")
  .mock("axios", () => ({ get: jest.fn() }))
  .mock("perfect-scrollbar",() => jest.fn().mockImplementation(()=>({
      destroy: jest.fn()
  })))

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    const props = {
      location: {
        pathname: "/"
      },
      routes: [
        {
          layout: "",
          path: "",
          name: ""
        },
        {
          layout: "hello",
          path: "",
          name: ""
        }
      ]
    };
    shallow(<Sidebar {...props} />);
  });

  test("renders with pro", () => {
    const props = {
      location: {
        pathname: "/active"
      },
      routes: [
        {
          layout: "",
          path: "path",
          name: "",
          pro: true
        },
        {
          layout: "hello",
          path: "",
          name: ""
        }
      ],
      pro: true
    };
    const windowSpy = jest.spyOn(global, "navigator", "get");
    windowSpy.mockImplementation(() => ({
      platform: "Win"
    }));
    shallow(<Sidebar {...props} />);
    windowSpy.mockRestore()
  });

  test('component will unmount', ()=>{
    const props = {
        location: {
          pathname: "/active"
        },
        routes: [
          {
            layout: "",
            path: "path",
            name: "",
            pro: true
          },
          {
            layout: "hello",
            path: "",
            name: ""
          }
        ],
        pro: true
      };
      const windowSpy = jest.spyOn(global, "navigator", "get");
      windowSpy.mockImplementation(() => ({
        platform: "Win"
      }));
      const instance = new Sidebar(props);
      instance.componentWillUnmount();
      windowSpy.mockImplementation(() => ({
        platform: ""
      }));
      instance.componentWillUnmount();

      windowSpy.mockRestore()
  })
});
