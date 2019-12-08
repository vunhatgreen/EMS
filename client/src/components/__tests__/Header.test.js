import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

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
  .mock("axios", () => ({ get: jest.fn() }));

describe("First React component test with Enzyme", () => {
  it("renders without crashing", () => {
    const props = {
      location: {
        pathname: "/"
      }
    };
    shallow(<Header {...props} />);
  });

  test("render fullscreen", () => {
    const props = {
      location: {
        pathname: "/full-screen-maps"
      }
    };
    const instance = new Header(props);

    instance.render();
  });
  test("render fullscreen and transparent", () => {
    const props = {
      location: {
        pathname: "/"
      }
    };
    const instance = new Header(props);
    instance.state.color = "";
    instance.render();
  });
});

describe("logical test", () => {
  test("clear cookies", () => {
    const props = {
      location: {
        pathname: "/"
      }
    };
    const instance = new Header(props);
    instance.clearCookie();
  });
  test("window reload", () => {
    const props = {
      location: {
        pathname: "/"
      }
    };
    const instance = new Header(props);
    instance.windowReload();
  });
  test("toggle", () => {
    const props = {
      location: {
        pathname: "/"
      }
    };
    const instance = new Header(props);
    instance.toggle();
    instance.state.isOpen = true;
    instance.toggle();
  });
  test("dropdownToggle", () => {
    const props = {
      location: {
        pathname: "/"
      }
    };
    const instance = new Header(props);
    instance.dropdownToggle();
  });
  test("getBrand", () => {
    const props = {
      location: {
        pathname: "/"
      }
    };
    const instance = new Header(props);
    instance.getBrand();
  });
  test("openSidebar", () => {
    const props = {
      location: {
        pathname: "/"
      }
    };
    const instance = new Header(props);
    instance.sidebarToggle.current = {
      classList: {
        toggle: jest.fn()
      }
    };
    instance.openSidebar();
  });

  test("updateColor", () => {
    const props = {
      location: {
        pathname: "/"
      }
    };
    const instance = new Header(props);
    instance.updateColor();
    instance.state.isOpen = true;
    const windowSpy = jest.spyOn(global, "window", "get");
    windowSpy.mockImplementation(() => ({
      innerWidth: 1
    }));
    instance.updateColor();
    windowSpy.mockRestore();
  });
  test("componentDidMount", () => {
    const props = {
      location: {
        pathname: "/"
      }
    };
    const event = {
      history: {
        location: {
          pathname: "/abc"
        }
      },
      location: {
        pathname: "/"
      }
    };
    const instance = new Header(props);
    instance.sidebarToggle.current = {
      classList: {
        toggle: jest.fn()
      }
    };
    const windowSpy = jest.spyOn(global, "window", "get");
    windowSpy.mockImplementation(() => ({
      innerWidth: 1,
      document: {
        documentElement: {
          className: "nav-open"
        }
      }
    }));
    instance.componentDidUpdate(event);
    windowSpy.mockImplementation(() => ({
      innerWidth: 1111,
      document: {
        documentElement: {
          className: "nav-open"
        }
      }
    }));
    instance.componentDidUpdate(event);

    windowSpy.mockRestore();
  });
});
