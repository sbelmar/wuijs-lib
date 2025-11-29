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
5. WUIBody version class update to 0.2.
	- Added support for private values.
6. WUILanguage version class update to 0.2.
	- Changed the default value of the `lang` property by `"en"`.
	- Added support for private values.
	- Added the `mode` property, to support files in JS and JSON format.
	- Added the `refresh()` method, which allows updating the content of a specific HTML element.
	- Removed global constant `languages` and replaced with a variable definition, optional and external to the class, which is assigned using the `onLoad()` property (see implementation example in [Documentation](./README.md?#wuiLanguage)).
7. WUIScrolly version class update to 0.2.
	- Added support for private values.
	- Added `.fadein-top` alias to the style class `fadein-up`.
	- Added `direction` property.
	- Added `sceneIndex`, `sceneStep` and `sceneProgress` arguments were added to the `onMove()` property.
8. WUIModal version class update to 0.2.
	- Added support for private values.
	- Added `destroy()` method.
	- Fixed bug in drag event when maximizing and closing a page-style modal using the `mousedown` event, enabling it only when the left mouse button remains pressed.
9. WUIModalSelect version class update to 0.2.
	- Added support for private values.
	- Added `destroy()` method.
10. WUISlider version class update to 0.2.
	- Fixed bug in drag event when moving a scene using the `mousedown` event, enabling it only when the left button remains pressed.
11. WUIList version class update to 0.2.
	- Added support for paging.
	- Added `--wui-list-shadowcolor` CSS var.
	- Added `destroy()` method.
	- Fixed bug in drag event when opening and closing the button bar of each row using the `mousedown` event, enabling it only when the left mouse button remains pressed.
12. WUITable version class update to 0.2.
	- Added support for light/dark CSS formatting.
	- Added `--wui-table-shadowcolor` CSS var.
	- Added `destroy()` method.
13. WUIForm version class update to 0.2.
	- Added support for light/dark CSS formatting.
	- Added `--wui-form-message-shadowcolor` CSS var.
14. WUIFormat version class update to 0.2.
	- Added support for `Windows Phone` in the `getOS()` and `getMobileOS()` methods.
	- Added error handling to the `wuiToString()` method.
15. WUISelectpicker version class update to 0.2.
	- Added support for light/dark CSS formatting.
	- Added `--wui-selectpicker-box-shadowcolor` CSS var.
	- Fixed bug in private method `#addHTMLOption()`.
16. WUIDatepicker version class update to 0.2.
	- Added support for light/dark CSS formatting.
	- Added `--wui-datepicker-box-shadowcolor` CSS var.
17. WUITimepicker version class update to 0.2.
	- Added support for light/dark CSS formatting.
	- Added `--wui-timepicker-box-shadowcolor` CSS var.
18. WUIColorpicker version class update to 0.2.
	- Added support for light/dark CSS formatting.
	- Added `--wui-colorpicker-box-shadowcolor` CSS var.
19. WUICheckbox version class update to 0.2.
	- Fixed bug in drag event when selecting and deselecting the checkbox using the `mousedown` event, enabling it only when the left button remains pressed.
20. WUIButton version class update to 0.2.
	- Added `onDblClick` property.