"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-use-measure";
exports.ids = ["vendor-chunks/react-use-measure"];
exports.modules = {

/***/ "(ssr)/../node_modules/react-use-measure/dist/web.js":
/*!*****************************************************!*\
  !*** ../node_modules/react-use-measure/dist/web.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useMeasure)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/../node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debounce */ \"(ssr)/../node_modules/debounce/index.js\");\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction useMeasure(_temp) {\n    let { debounce, scroll, polyfill, offsetSize } = _temp === void 0 ? {\n        debounce: 0,\n        scroll: false,\n        offsetSize: false\n    } : _temp;\n    const ResizeObserver = polyfill || ( true ? class ResizeObserver {\n    } : 0);\n    if (!ResizeObserver) {\n        throw new Error(\"This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills\");\n    }\n    const [bounds, set] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n        left: 0,\n        top: 0,\n        width: 0,\n        height: 0,\n        bottom: 0,\n        right: 0,\n        x: 0,\n        y: 0\n    }); // keep all state in a ref\n    const state = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({\n        element: null,\n        scrollContainers: null,\n        resizeObserver: null,\n        lastBounds: bounds\n    }); // set actual debounce values early, so effects know if they should react accordingly\n    const scrollDebounce = debounce ? typeof debounce === \"number\" ? debounce : debounce.scroll : null;\n    const resizeDebounce = debounce ? typeof debounce === \"number\" ? debounce : debounce.resize : null; // make sure to update state only as long as the component is truly mounted\n    const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        mounted.current = true;\n        return ()=>void (mounted.current = false);\n    }); // memoize handlers, so event-listeners know when they should update\n    const [forceRefresh, resizeChange, scrollChange] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{\n        const callback = ()=>{\n            if (!state.current.element) return;\n            const { left, top, width, height, bottom, right, x, y } = state.current.element.getBoundingClientRect();\n            const size = {\n                left,\n                top,\n                width,\n                height,\n                bottom,\n                right,\n                x,\n                y\n            };\n            if (state.current.element instanceof HTMLElement && offsetSize) {\n                size.height = state.current.element.offsetHeight;\n                size.width = state.current.element.offsetWidth;\n            }\n            Object.freeze(size);\n            if (mounted.current && !areBoundsEqual(state.current.lastBounds, size)) set(state.current.lastBounds = size);\n        };\n        return [\n            callback,\n            resizeDebounce ? debounce__WEBPACK_IMPORTED_MODULE_1___default()(callback, resizeDebounce) : callback,\n            scrollDebounce ? debounce__WEBPACK_IMPORTED_MODULE_1___default()(callback, scrollDebounce) : callback\n        ];\n    }, [\n        set,\n        offsetSize,\n        scrollDebounce,\n        resizeDebounce\n    ]); // cleanup current scroll-listeners / observers\n    function removeListeners() {\n        if (state.current.scrollContainers) {\n            state.current.scrollContainers.forEach((element)=>element.removeEventListener(\"scroll\", scrollChange, true));\n            state.current.scrollContainers = null;\n        }\n        if (state.current.resizeObserver) {\n            state.current.resizeObserver.disconnect();\n            state.current.resizeObserver = null;\n        }\n    } // add scroll-listeners / observers\n    function addListeners() {\n        if (!state.current.element) return;\n        state.current.resizeObserver = new ResizeObserver(scrollChange);\n        state.current.resizeObserver.observe(state.current.element);\n        if (scroll && state.current.scrollContainers) {\n            state.current.scrollContainers.forEach((scrollContainer)=>scrollContainer.addEventListener(\"scroll\", scrollChange, {\n                    capture: true,\n                    passive: true\n                }));\n        }\n    } // the ref we expose to the user\n    const ref = (node)=>{\n        if (!node || node === state.current.element) return;\n        removeListeners();\n        state.current.element = node;\n        state.current.scrollContainers = findScrollContainers(node);\n        addListeners();\n    }; // add general event listeners\n    useOnWindowScroll(scrollChange, Boolean(scroll));\n    useOnWindowResize(resizeChange); // respond to changes that are relevant for the listeners\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        removeListeners();\n        addListeners();\n    }, [\n        scroll,\n        scrollChange,\n        resizeChange\n    ]); // remove all listeners when the components unmounts\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>removeListeners, []);\n    return [\n        ref,\n        bounds,\n        forceRefresh\n    ];\n} // Adds native resize listener to window\nfunction useOnWindowResize(onWindowResize) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const cb = onWindowResize;\n        window.addEventListener(\"resize\", cb);\n        return ()=>void window.removeEventListener(\"resize\", cb);\n    }, [\n        onWindowResize\n    ]);\n}\nfunction useOnWindowScroll(onScroll, enabled) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (enabled) {\n            const cb = onScroll;\n            window.addEventListener(\"scroll\", cb, {\n                capture: true,\n                passive: true\n            });\n            return ()=>void window.removeEventListener(\"scroll\", cb, true);\n        }\n    }, [\n        onScroll,\n        enabled\n    ]);\n} // Returns a list of scroll offsets\nfunction findScrollContainers(element) {\n    const result = [];\n    if (!element || element === document.body) return result;\n    const { overflow, overflowX, overflowY } = window.getComputedStyle(element);\n    if ([\n        overflow,\n        overflowX,\n        overflowY\n    ].some((prop)=>prop === \"auto\" || prop === \"scroll\")) result.push(element);\n    return [\n        ...result,\n        ...findScrollContainers(element.parentElement)\n    ];\n} // Checks if element boundaries are equal\nconst keys = [\n    \"x\",\n    \"y\",\n    \"top\",\n    \"bottom\",\n    \"left\",\n    \"right\",\n    \"width\",\n    \"height\"\n];\nconst areBoundsEqual = (a, b)=>keys.every((key)=>a[key] === b[key]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZS1tZWFzdXJlL2Rpc3Qvd2ViLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZEO0FBQ3ZCO0FBRXRDLFNBQVNLLFdBQVdDLEtBQUs7SUFDdkIsSUFBSSxFQUNGQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTkMsUUFBUSxFQUNSQyxVQUFVLEVBQ1gsR0FBR0osVUFBVSxLQUFLLElBQUk7UUFDckJDLFVBQVU7UUFDVkMsUUFBUTtRQUNSRSxZQUFZO0lBQ2QsSUFBSUo7SUFDSixNQUFNSyxpQkFBaUJGLFlBQWEsTUFBa0IsR0FBYyxNQUFNRTtJQUFnQixJQUFJQyxDQUFxQjtJQUVuSCxJQUFJLENBQUNELGdCQUFnQjtRQUNuQixNQUFNLElBQUlFLE1BQU07SUFDbEI7SUFFQSxNQUFNLENBQUNDLFFBQVFDLElBQUksR0FBR2YsK0NBQVFBLENBQUM7UUFDN0JnQixNQUFNO1FBQ05DLEtBQUs7UUFDTEMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsT0FBTztRQUNQQyxHQUFHO1FBQ0hDLEdBQUc7SUFDTCxJQUFJLDBCQUEwQjtJQUU5QixNQUFNQyxRQUFRdkIsNkNBQU1BLENBQUM7UUFDbkJ3QixTQUFTO1FBQ1RDLGtCQUFrQjtRQUNsQkMsZ0JBQWdCO1FBQ2hCQyxZQUFZZDtJQUNkLElBQUkscUZBQXFGO0lBRXpGLE1BQU1lLGlCQUFpQnRCLFdBQVcsT0FBT0EsYUFBYSxXQUFXQSxXQUFXQSxTQUFTQyxNQUFNLEdBQUc7SUFDOUYsTUFBTXNCLGlCQUFpQnZCLFdBQVcsT0FBT0EsYUFBYSxXQUFXQSxXQUFXQSxTQUFTd0IsTUFBTSxHQUFHLE1BQU0sMkVBQTJFO0lBRS9LLE1BQU1DLFVBQVUvQiw2Q0FBTUEsQ0FBQztJQUN2QkMsZ0RBQVNBLENBQUM7UUFDUjhCLFFBQVFDLE9BQU8sR0FBRztRQUNsQixPQUFPLElBQU0sS0FBTUQsQ0FBQUEsUUFBUUMsT0FBTyxHQUFHLEtBQUk7SUFDM0MsSUFBSSxvRUFB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QWE7S0FBRTtBQUNwRSxFQUFFLHlDQUF5QztBQUczQyxNQUFNQyxPQUFPO0lBQUM7SUFBSztJQUFLO0lBQU87SUFBVTtJQUFRO0lBQVM7SUFBUztDQUFTO0FBRTVFLE1BQU1oQyxpQkFBaUIsQ0FBQ2lDLEdBQUdDLElBQU1GLEtBQUtHLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBT0gsQ0FBQyxDQUFDRyxJQUFJLEtBQUtGLENBQUMsQ0FBQ0UsSUFBSTtBQUVuQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NwYWNlcG9ydGZvbGlvLy4uL25vZGVfbW9kdWxlcy9yZWFjdC11c2UtbWVhc3VyZS9kaXN0L3dlYi5qcz9mOTU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjcmVhdGVEZWJvdW5jZSBmcm9tICdkZWJvdW5jZSc7XG5cbmZ1bmN0aW9uIHVzZU1lYXN1cmUoX3RlbXApIHtcbiAgbGV0IHtcbiAgICBkZWJvdW5jZSxcbiAgICBzY3JvbGwsXG4gICAgcG9seWZpbGwsXG4gICAgb2Zmc2V0U2l6ZVxuICB9ID0gX3RlbXAgPT09IHZvaWQgMCA/IHtcbiAgICBkZWJvdW5jZTogMCxcbiAgICBzY3JvbGw6IGZhbHNlLFxuICAgIG9mZnNldFNpemU6IGZhbHNlXG4gIH0gOiBfdGVtcDtcbiAgY29uc3QgUmVzaXplT2JzZXJ2ZXIgPSBwb2x5ZmlsbCB8fCAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBjbGFzcyBSZXNpemVPYnNlcnZlciB7fSA6IHdpbmRvdy5SZXNpemVPYnNlcnZlcik7XG5cbiAgaWYgKCFSZXNpemVPYnNlcnZlcikge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgUmVzaXplT2JzZXJ2ZXIgb3V0IG9mIHRoZSBib3guIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LXNwcmluZy9yZWFjdC11c2UtbWVhc3VyZS8jcmVzaXplLW9ic2VydmVyLXBvbHlmaWxscycpO1xuICB9XG5cbiAgY29uc3QgW2JvdW5kcywgc2V0XSA9IHVzZVN0YXRlKHtcbiAgICBsZWZ0OiAwLFxuICAgIHRvcDogMCxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHg6IDAsXG4gICAgeTogMFxuICB9KTsgLy8ga2VlcCBhbGwgc3RhdGUgaW4gYSByZWZcblxuICBjb25zdCBzdGF0ZSA9IHVzZVJlZih7XG4gICAgZWxlbWVudDogbnVsbCxcbiAgICBzY3JvbGxDb250YWluZXJzOiBudWxsLFxuICAgIHJlc2l6ZU9ic2VydmVyOiBudWxsLFxuICAgIGxhc3RCb3VuZHM6IGJvdW5kc1xuICB9KTsgLy8gc2V0IGFjdHVhbCBkZWJvdW5jZSB2YWx1ZXMgZWFybHksIHNvIGVmZmVjdHMga25vdyBpZiB0aGV5IHNob3VsZCByZWFjdCBhY2NvcmRpbmdseVxuXG4gIGNvbnN0IHNjcm9sbERlYm91bmNlID0gZGVib3VuY2UgPyB0eXBlb2YgZGVib3VuY2UgPT09ICdudW1iZXInID8gZGVib3VuY2UgOiBkZWJvdW5jZS5zY3JvbGwgOiBudWxsO1xuICBjb25zdCByZXNpemVEZWJvdW5jZSA9IGRlYm91bmNlID8gdHlwZW9mIGRlYm91bmNlID09PSAnbnVtYmVyJyA/IGRlYm91bmNlIDogZGVib3VuY2UucmVzaXplIDogbnVsbDsgLy8gbWFrZSBzdXJlIHRvIHVwZGF0ZSBzdGF0ZSBvbmx5IGFzIGxvbmcgYXMgdGhlIGNvbXBvbmVudCBpcyB0cnVseSBtb3VudGVkXG5cbiAgY29uc3QgbW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbW91bnRlZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICByZXR1cm4gKCkgPT4gdm9pZCAobW91bnRlZC5jdXJyZW50ID0gZmFsc2UpO1xuICB9KTsgLy8gbWVtb2l6ZSBoYW5kbGVycywgc28gZXZlbnQtbGlzdGVuZXJzIGtub3cgd2hlbiB0aGV5IHNob3VsZCB1cGRhdGVcblxuICBjb25zdCBbZm9yY2VSZWZyZXNoLCByZXNpemVDaGFuZ2UsIHNjcm9sbENoYW5nZV0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcbiAgICAgIGlmICghc3RhdGUuY3VycmVudC5lbGVtZW50KSByZXR1cm47XG4gICAgICBjb25zdCB7XG4gICAgICAgIGxlZnQsXG4gICAgICAgIHRvcCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgYm90dG9tLFxuICAgICAgICByaWdodCxcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSA9IHN0YXRlLmN1cnJlbnQuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IHNpemUgPSB7XG4gICAgICAgIGxlZnQsXG4gICAgICAgIHRvcCxcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodCxcbiAgICAgICAgYm90dG9tLFxuICAgICAgICByaWdodCxcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfTtcblxuICAgICAgaWYgKHN0YXRlLmN1cnJlbnQuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIG9mZnNldFNpemUpIHtcbiAgICAgICAgc2l6ZS5oZWlnaHQgPSBzdGF0ZS5jdXJyZW50LmVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBzaXplLndpZHRoID0gc3RhdGUuY3VycmVudC5lbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuZnJlZXplKHNpemUpO1xuICAgICAgaWYgKG1vdW50ZWQuY3VycmVudCAmJiAhYXJlQm91bmRzRXF1YWwoc3RhdGUuY3VycmVudC5sYXN0Qm91bmRzLCBzaXplKSkgc2V0KHN0YXRlLmN1cnJlbnQubGFzdEJvdW5kcyA9IHNpemUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gW2NhbGxiYWNrLCByZXNpemVEZWJvdW5jZSA/IGNyZWF0ZURlYm91bmNlKGNhbGxiYWNrLCByZXNpemVEZWJvdW5jZSkgOiBjYWxsYmFjaywgc2Nyb2xsRGVib3VuY2UgPyBjcmVhdGVEZWJvdW5jZShjYWxsYmFjaywgc2Nyb2xsRGVib3VuY2UpIDogY2FsbGJhY2tdO1xuICB9LCBbc2V0LCBvZmZzZXRTaXplLCBzY3JvbGxEZWJvdW5jZSwgcmVzaXplRGVib3VuY2VdKTsgLy8gY2xlYW51cCBjdXJyZW50IHNjcm9sbC1saXN0ZW5lcnMgLyBvYnNlcnZlcnNcblxuICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHN0YXRlLmN1cnJlbnQuc2Nyb2xsQ29udGFpbmVycykge1xuICAgICAgc3RhdGUuY3VycmVudC5zY3JvbGxDb250YWluZXJzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbENoYW5nZSwgdHJ1ZSkpO1xuICAgICAgc3RhdGUuY3VycmVudC5zY3JvbGxDb250YWluZXJzID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGUuY3VycmVudC5yZXNpemVPYnNlcnZlcikge1xuICAgICAgc3RhdGUuY3VycmVudC5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICBzdGF0ZS5jdXJyZW50LnJlc2l6ZU9ic2VydmVyID0gbnVsbDtcbiAgICB9XG4gIH0gLy8gYWRkIHNjcm9sbC1saXN0ZW5lcnMgLyBvYnNlcnZlcnNcblxuXG4gIGZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcbiAgICBpZiAoIXN0YXRlLmN1cnJlbnQuZWxlbWVudCkgcmV0dXJuO1xuICAgIHN0YXRlLmN1cnJlbnQucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoc2Nyb2xsQ2hhbmdlKTtcbiAgICBzdGF0ZS5jdXJyZW50LnJlc2l6ZU9ic2VydmVyLm9ic2VydmUoc3RhdGUuY3VycmVudC5lbGVtZW50KTtcblxuICAgIGlmIChzY3JvbGwgJiYgc3RhdGUuY3VycmVudC5zY3JvbGxDb250YWluZXJzKSB7XG4gICAgICBzdGF0ZS5jdXJyZW50LnNjcm9sbENvbnRhaW5lcnMuZm9yRWFjaChzY3JvbGxDb250YWluZXIgPT4gc2Nyb2xsQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbENoYW5nZSwge1xuICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICB9KSk7XG4gICAgfVxuICB9IC8vIHRoZSByZWYgd2UgZXhwb3NlIHRvIHRoZSB1c2VyXG5cblxuICBjb25zdCByZWYgPSBub2RlID0+IHtcbiAgICBpZiAoIW5vZGUgfHwgbm9kZSA9PT0gc3RhdGUuY3VycmVudC5lbGVtZW50KSByZXR1cm47XG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgc3RhdGUuY3VycmVudC5lbGVtZW50ID0gbm9kZTtcbiAgICBzdGF0ZS5jdXJyZW50LnNjcm9sbENvbnRhaW5lcnMgPSBmaW5kU2Nyb2xsQ29udGFpbmVycyhub2RlKTtcbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgfTsgLy8gYWRkIGdlbmVyYWwgZXZlbnQgbGlzdGVuZXJzXG5cblxuICB1c2VPbldpbmRvd1Njcm9sbChzY3JvbGxDaGFuZ2UsIEJvb2xlYW4oc2Nyb2xsKSk7XG4gIHVzZU9uV2luZG93UmVzaXplKHJlc2l6ZUNoYW5nZSk7IC8vIHJlc3BvbmQgdG8gY2hhbmdlcyB0aGF0IGFyZSByZWxldmFudCBmb3IgdGhlIGxpc3RlbmVyc1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgYWRkTGlzdGVuZXJzKCk7XG4gIH0sIFtzY3JvbGwsIHNjcm9sbENoYW5nZSwgcmVzaXplQ2hhbmdlXSk7IC8vIHJlbW92ZSBhbGwgbGlzdGVuZXJzIHdoZW4gdGhlIGNvbXBvbmVudHMgdW5tb3VudHNcblxuICB1c2VFZmZlY3QoKCkgPT4gcmVtb3ZlTGlzdGVuZXJzLCBbXSk7XG4gIHJldHVybiBbcmVmLCBib3VuZHMsIGZvcmNlUmVmcmVzaF07XG59IC8vIEFkZHMgbmF0aXZlIHJlc2l6ZSBsaXN0ZW5lciB0byB3aW5kb3dcblxuXG5mdW5jdGlvbiB1c2VPbldpbmRvd1Jlc2l6ZShvbldpbmRvd1Jlc2l6ZSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNiID0gb25XaW5kb3dSZXNpemU7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNiKTtcbiAgICByZXR1cm4gKCkgPT4gdm9pZCB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2IpO1xuICB9LCBbb25XaW5kb3dSZXNpemVdKTtcbn1cblxuZnVuY3Rpb24gdXNlT25XaW5kb3dTY3JvbGwob25TY3JvbGwsIGVuYWJsZWQpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgY29uc3QgY2IgPSBvblNjcm9sbDtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjYiwge1xuICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHJldHVybiAoKSA9PiB2b2lkIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjYiwgdHJ1ZSk7XG4gICAgfVxuICB9LCBbb25TY3JvbGwsIGVuYWJsZWRdKTtcbn0gLy8gUmV0dXJucyBhIGxpc3Qgb2Ygc2Nyb2xsIG9mZnNldHNcblxuXG5mdW5jdGlvbiBmaW5kU2Nyb2xsQ29udGFpbmVycyhlbGVtZW50KSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdO1xuICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudCA9PT0gZG9jdW1lbnQuYm9keSkgcmV0dXJuIHJlc3VsdDtcbiAgY29uc3Qge1xuICAgIG92ZXJmbG93LFxuICAgIG92ZXJmbG93WCxcbiAgICBvdmVyZmxvd1lcbiAgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICBpZiAoW292ZXJmbG93LCBvdmVyZmxvd1gsIG92ZXJmbG93WV0uc29tZShwcm9wID0+IHByb3AgPT09ICdhdXRvJyB8fCBwcm9wID09PSAnc2Nyb2xsJykpIHJlc3VsdC5wdXNoKGVsZW1lbnQpO1xuICByZXR1cm4gWy4uLnJlc3VsdCwgLi4uZmluZFNjcm9sbENvbnRhaW5lcnMoZWxlbWVudC5wYXJlbnRFbGVtZW50KV07XG59IC8vIENoZWNrcyBpZiBlbGVtZW50IGJvdW5kYXJpZXMgYXJlIGVxdWFsXG5cblxuY29uc3Qga2V5cyA9IFsneCcsICd5JywgJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcsICd3aWR0aCcsICdoZWlnaHQnXTtcblxuY29uc3QgYXJlQm91bmRzRXF1YWwgPSAoYSwgYikgPT4ga2V5cy5ldmVyeShrZXkgPT4gYVtrZXldID09PSBiW2tleV0pO1xuXG5leHBvcnQgeyB1c2VNZWFzdXJlIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJjcmVhdGVEZWJvdW5jZSIsInVzZU1lYXN1cmUiLCJfdGVtcCIsImRlYm91bmNlIiwic2Nyb2xsIiwicG9seWZpbGwiLCJvZmZzZXRTaXplIiwiUmVzaXplT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJFcnJvciIsImJvdW5kcyIsInNldCIsImxlZnQiLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImJvdHRvbSIsInJpZ2h0IiwieCIsInkiLCJzdGF0ZSIsImVsZW1lbnQiLCJzY3JvbGxDb250YWluZXJzIiwicmVzaXplT2JzZXJ2ZXIiLCJsYXN0Qm91bmRzIiwic2Nyb2xsRGVib3VuY2UiLCJyZXNpemVEZWJvdW5jZSIsInJlc2l6ZSIsIm1vdW50ZWQiLCJjdXJyZW50IiwiZm9yY2VSZWZyZXNoIiwicmVzaXplQ2hhbmdlIiwic2Nyb2xsQ2hhbmdlIiwiY2FsbGJhY2siLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzaXplIiwiSFRNTEVsZW1lbnQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRXaWR0aCIsIk9iamVjdCIsImZyZWV6ZSIsImFyZUJvdW5kc0VxdWFsIiwicmVtb3ZlTGlzdGVuZXJzIiwiZm9yRWFjaCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXNjb25uZWN0IiwiYWRkTGlzdGVuZXJzIiwib2JzZXJ2ZSIsInNjcm9sbENvbnRhaW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXB0dXJlIiwicGFzc2l2ZSIsInJlZiIsIm5vZGUiLCJmaW5kU2Nyb2xsQ29udGFpbmVycyIsInVzZU9uV2luZG93U2Nyb2xsIiwiQm9vbGVhbiIsInVzZU9uV2luZG93UmVzaXplIiwib25XaW5kb3dSZXNpemUiLCJjYiIsIm9uU2Nyb2xsIiwiZW5hYmxlZCIsInJlc3VsdCIsImRvY3VtZW50IiwiYm9keSIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInNvbWUiLCJwcm9wIiwicHVzaCIsInBhcmVudEVsZW1lbnQiLCJrZXlzIiwiYSIsImIiLCJldmVyeSIsImtleSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/react-use-measure/dist/web.js\n");

/***/ })

};
;