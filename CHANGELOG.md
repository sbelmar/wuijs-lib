# Change Log

## [v0.1.0] - 2024-05-01

Features:

1. Release version.

## [v0.2.0] - 2025-12-01

Features:

1. Inclusion of [Documentation](./README.md).
2. Added WUIMenubar class version 0.1.
3. Added WUIIntensity class version 0.1.
4. WUICookie version class update to 0.2.
	- Added support for private values.
	- Added the `remove()` method, which allows removing a cookie by its name.
	- Fixed bug in the `remove()` method.
5. WUIHead version class update to 0.2.
	- Improved code to prevent XSS attacks.
	- Fixed bug to ensure DOM element references.
6. WUIBody version class update to 0.2.
	- Added support for private values.
7. WUILanguage version class update to 0.2.
	- Changed the default value of the `lang` property by `"en"`.
	- Added support for private values.
	- Added the `mode` property, to support files in JS and JSON format.
	- Added the `refresh()` method, which allows updating the content of a specific HTML element.
	- Removed global constant `languages` and replaced with a variable definition, optional and external to the class, which is assigned using the `onLoad()` property (see implementation example in [Documentation](./README.md?#wuiLanguage)).
8. WUIScrolly version class update to 0.2.
	- Added support for private values.
	- Added `.fadein-top` alias to the style class `fadein-up`.
	- Added `direction` property.
	- Added `sceneIndex`, `sceneStep` and `sceneProgress` arguments were added to the `onMove()` property.
9. WUILoader version class update to 0.2.
	- Added support for private values.
	- Fixed bug in `init()` method.
10. WUIModal version class update to 0.2.
	- Added support for private values.
	- Added `destroy()` method.
	- Fixed bug in drag event when maximizing and closing a page-style modal using the `mousedown` event, enabling it only when the left mouse button remains pressed.
11. WUISlider version class update to 0.2.
	- Added support for private values.
	- Fixed bug in drag event when moving a scene using the `mousedown` event, enabling it only when the left button remains pressed.
	- Fixed bug in `load()` method.
12. WUIList version class update to 0.2.
	- Added support for paging.
	- Added `destroy()` method.
	- Added `--wui-list-shadowcolor` CSS var.
	- Fixed bug in drag event when opening and closing the button bar of each row using the `mousedown` event, enabling it only when the left mouse button remains pressed.
13. WUITable version class update to 0.2.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `destroy()` method.
	- Added `--wui-table-shadowcolor` CSS var.
14. WUIForm version class update to 0.2.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `getIcon()` method.
	- Added `--wui-form-message-shadowcolor` CSS var.
15. WUIFormat version class update to 0.2.
	- Added support for `Windows Phone` in the `getOS()` and `getMobileOS()` methods.
	- Added error handling to the `wuiToString()` method.
16. WUISelectpicker version class update to 0.2.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `text` get property.
	- Added `destroy()` method.
	- Added `--wui-selectpicker-box-shadowcolor` CSS var.
	- Added relative positioning to the HTML element.
	- Fixed bug to load the `value` property when instantiating the object.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
	- Fixed bug in private method `#addHTMLOption()`.
	- Deprecated `getValue()` method, replaced by the read-only property `value`.
	- Deprecated `getText()` method, replaced by the read-only property `text`.
17. WUIDatepicker version class update to 0.2.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `destroy()` method.
	- Added `--wui-datepicker-box-shadowcolor` CSS var.
	- Added relative positioning to the HTML element.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
18. WUITimepicker version class update to 0.2.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `destroy()` method.
	- Added `--wui-timepicker-box-shadowcolor` CSS var.
	- Added relative positioning to the HTML element.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
19. WUIColorpicker version class update to 0.2.
	- Added support for private values.
	- Added support for light/dark CSS formatting.
	- Added `destroy()` method.
	- Added `--wui-colorpicker-box-shadowcolor` CSS var.
	- Added relative positioning to the HTML element.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
20. WUICheckbox version class update to 0.2.
	- Added support for private values.
	- Fixed bug in drag event when selecting and deselecting the checkbox using the `mousedown` event, enabling it only when the left button remains pressed.
	- Fixed bug to ensure HTML element references of type `HTMLInputElement`.
21. WUIButton version class update to 0.2.
	- Added support for private values.
	- Added `onDblClick` property.
	- Fixed bug to ensure HTML element references of type `HTMLButtonElement`.