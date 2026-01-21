> [!WARNING]
> This document has not yet been finalized and is in a preliminary version.

# wuijs-lib

<div align="center">
	<img src="https://github.com/wuijsproject/wuijs-lib/blob/main/imgs/logo/wuijs-color.svg" width="128" height="128">
</div>

Library version: `0.2.0` ([Change Log](./CHANGELOG.md))

Document version: `0.2.0.20260121.0`

License: `Apache License 2.0`

Author: `Sergio E. Belmar V. <wuijs.project@gmail.com>`

## Index

*   [Overview](#overview)
*   [Install](#install)
*   [Implementation](#implementation)
*   [Classes](#classes)
    *   [WUICookie](#WUICookie)
	*   [WUIHead](#WUIHead)
	*   [WUIBody](#WUIBody)
	*   [WUILanguage](#WUILanguage)
	*   [WUIScrolly](#WUIScrolly)
	*   [WUIIcon](#WUIIcon)
	*   [WUIFade](#WUIFade)
	*   [WUILoader](#WUILoader)
	*   WUITooltip
	*   WUIModal
	*   WUISlider
	*   WUIPaging
	*   WUITabs
	*   [WUIMenubar](#WUIMenubar)
	*   [WUIList](#WUIList)
	*   [WUITable](#WUITable)
	*   WUIForm
	*   [WUIFormat](#WUIFormat)
	*   [WUISelectpicker](#WUISelectpicker)
	*   [WUIDatepicker](#WUIDatepicker)
	*   [WUITimepicker](#WUITimepicker)
	*   [WUIColorpicker](#WUIColorpicker)
	*   [WUICheckbox](#WUICheckbox)
	*   [WUIIntensity](#WUIIntensity)
	*   [WUIButton](#WUIButton)
*   [Examples](#examples) (CodePen)

<a name="overview"></a>

## Overview

WUI, an acronym for *Web User Interface JavaScript library*, is an open source JavaScript/CSS library for the rapid implementation of Web user interfaces composed of 25 classes, which can be used independently or together.

### Classes Table

| Class                               | Version | Description |
| ----------------------------------- | -------:| ----------- |
| [WUICookie](#WUICookie)             | `0.2`   | Cookie manager. |
| [WUIHead](#WUIHead)                 | `0.2`   | HTML header manager. |
| [WUIBody](#WUIBody)                 | `0.2`   | HTML body manager. Allows the import of CSS/JS/HTML content and facilitates implementation in native mobile environments. |
| [WUILanguage](#WUILanguage)         | `0.2`   | Language manager for web interfaces. Allows you to load language files in JS or JSON format and dynamically update the content of HTML elements based on the language. |
| [WUIScrolly](#WUIScrolly)           | `0.2`   | Tool for animating HTML elements using the "onscroll" event of the HTML page body. |
| [WUIIcon](#WUIIcon)                 | `0.1`   | Set of pre-designed icons loaded via CSS, for use in interfaces. |
| [WUIFade](#WUIFade)                 | `0.1`   | Tool for fading out and fading control in HTML elements with opacity. |
| [WUILoader](#WUILoader)             | `0.2`   | Component for the implementation of loading animations. |
| WUITooltip                          | `0.1`   | Component for the implementation of tooltip texts. |
| WUIModal                            | `0.2`   | Component for the implementation of dialog boxes (type `message`) and pop-up windows (type `page`). |
| WUISlider                           | `0.2`   | Component for the implementation of mouse-controlled and/or event-controlled blinds. |
| WUIPaging                           | `0.1`   | Component for the implementation of paginated views. |
| WUITabs                             | `0.1`   | Component for the implementation of views accessible by tab selection. |
| [WUIMenubar](#WUIMenubar)           | `0.1`   | Component for the implementation of menu bars. |
| [WUIList](#WUIList)                 | `0.2`   | Component for the implementation of data lists and buttons for each row optionally. |
| [WUITable](#WUITable)               | `0.2`   | Component for the implementation of data tables. Unlike the `WUIList` component, the `WUITable` component includes a column header. |
| WUIForm                             | `0.2`   | Component for the implementation of data forms. This component allows the implementation of HTML data input elements such as `<input>`, `<select>`, and `<textarea>`, and WUI library objects such as `WUISelectpicker`, `WUIDatepicker`, `WUITimepicker`, `WUIColorpicker`, `WUICheckbox`, `WUIIntensity`, and `WUIButton`. |
| [WUIFormat](#WUIFormat)             | `0.2`   | Tool for managing and validating `string`, `number` and `Date` data formats. |
| [WUISelectpicker](#WUISelectpicker) | `0.2`   | Component for the implementation of multiple or exclusive selection list data inputs based on HTML element `<select>`. |
| [WUIDatepicker](#WUIDatepicker)     | `0.2`   | Component for the implementation of date type data inputs based on HTML element `<input type="date">`. |
| [WUITimepicker](#WUITimepicker)     | `0.2`   | Component for the implementation of time type data inputs based on HTML element `<input type="time">`. |
| [WUIColorpicker](#WUIColorpicker)   | `0.2`   | Component for the implementation of color picker type data inputs based on HTML element `<input type="color">`. |
| [WUICheckbox](#WUICheckbox)         | `0.2`   | Component for the implementation of checkbox type data inputs based on HTML element `<input type="checkbox">`. |
| [WUIIntensity](#WUIIntensity)       | `0.1`   | Component for the implementation of 4-level intensity selector type data inputs: none, low, half, and high based on HTML element `<input type="range">`. |
| [WUIButton](#WUIButton)             | `0.2`   | Component for the implementation of based on HTML element `<button>`. |

<a name="install"></a>

## Install

To install the WUI library, must be cloned from the GitHib official distribution repository (`sbelmar/wuijs-lib`). Assuming the project where it will be deployed has a download directory: `./downloads`, a `./src` source directory, and within that, a `./src/Libraries` library directory, you must type the following in the terminal:

```bash
cd ./downloads
git clone https://git@github.com/wuijsproject/wuijs-lib.git
cp -r ./wuijs-lib/src/WUI ../src/Libraries/
```

Optionally, it can be downloaded from the same repositories in ZIP format.

```bash
cd ./downloads
wget https://github.com/wuijsproject/wuijs-lib/archive/refs/heads/main.zip
unzip main.zip
cp -r ./wuijs-lib-main/src/WUI ../src/Libraries/
```

<a name="implementation"></a>

## Implementation

To enable all classes, the CSS and JS dependencies of the libraries must be implemented in the HTML header of the web page in the `WUI.css` configuration file.

CSS code in the `WUI.css` file:

```css
/* WUI settings */

:root {

	/* wui-scrolly */

	--wui-scrolly-paging-bgcolor: #f6f6fa;

	/* wui-icon */

	--wui-icon-size: 24px;
	--wui-icon-smallsize: 14px;
	--wui-icon-bgcolor-out: rgb(from #353a40 r g b / 70%);
	--wui-icon-bgcolor-over: #353a40;

	/* wui-loader */

	--wui-loader-color: #353a40;

	/* wui-tooltip */

	--wui-tooltip-open-delay: .2s;
	--wui-tooltip-bgcolor: #1f2429;
	--wui-tooltip-textcolor: #fff;

	/* wui-modal */

	--wui-modal-overlay-bgcolor: rgb(from #010203 r g b / 20%);
	--wui-modal-box-borderradius: 17px;
	--wui-modal-box-bgcolor: rgb(from #efeff6 r g b / 100%);
	--wui-modal-back-textcolor: #1e90ff;
	--wui-modal-close-bgcolor: #353a40;
	--wui-modal-topbar-height: 4px;
	--wui-modal-title-textfont: Arial, Helvetica, Verdana, sans-serif;
	--wui-modal-title-textcase: none;
	--wui-modal-title-textcolor: #000;
	--wui-modal-body-scroll-bgcolor-out: rgb(from #353a40 r g b / 20%);
	--wui-modal-body-scroll-bgcolor-over: rgb(from #353a40 r g b / 40%);
	--wui-modal-footer-bordercolor: transparent;
	--wui-modal-message-box-width: 280px;
	--wui-modal-message-box-bgcolor: rgb(from #efeff6 r g b / 80%);
	--wui-modal-message-box-textcolor: #2d3a47;
	--wui-modal-message-mobile-box-width: 280px;
	--wui-modal-message-mobile-footer-bordercolor: #d5dce3;
	--wui-modal-message-mobile-button-bordercolor: #d5dce3;
	--wui-modal-message-linkcolor: #1e90ff;
	--wui-modal-page-box-width: 800px;
	--wui-modal-page-box-height: 90%;
	--wui-modal-page-box-borderradius: 10px;
	--wui-modal-page-box-maxheight: 640px;
	--wui-modal-page-box-bgcolor: rgb(from #efeff6 r g b / 100%);
	--wui-modal-page-header-topbar-bgcolor: #d5dce3;
	--wui-modal-page-header-bordercolor: #d5dce3;
	--wui-modal-slidepage-box-margin: 10px;
	--wui-modal-smallpage-box-width: 340px;
	--wui-modal-smallpage-box-height: 280px;

	/* wui-slider */

	--wui-slider-dots-bgcolor: transparent;
	--wui-slider-dot-bgcolor: rgb(from #fff r g b / 60%);
	--wui-slider-dot-bgcolor-selected: rgb(from #fff r g b / 90%);

	/* wui-paging */

	--wui-paging-page-transition-time: .4s;
	--wui-paging-page-bgcolor: transparent;
	--wui-paging-page-scroll-bgcolor-out: rgb(from #353a40 r g b / 20%);
	--wui-paging-page-scroll-bgcolor-over: rgb(from #353a40 r g b / 40%);

	/* wui-tabs */

	--wui-tabs-tab-bgcolor-out: #fdfdfe;
	--wui-tabs-tab-bgcolor-over: #f6f6fa;
	--wui-tabs-tab-iconcolor-out: #1e90ff;
	--wui-tabs-tab-iconcolor-over: #1e90ff;
	--wui-tabs-tab-iconcolor-mobile: #1e90ff;
	--wui-tabs-tab-textcolor-out: #2d3a47;
	--wui-tabs-tab-textcolor-over: #1e90ff;

	/* wui-menubar */

	--wui-menubar-shadowcolor: #959da5;
	--wui-menubar-margin: 10px;
	--wui-menubar-borderradius: 10px;
	--wui-menubar-bar-bordercolor: #f0f0f3;
	--wui-menubar-bar-bgcolor-top: #f0f0f3;
	--wui-menubar-bar-bgcolor-bottom: #f0f0f3;
	--wui-menubar-bar-button-bgcolor-out: transparent;
	--wui-menubar-bar-button-bgcolor-over: rgb(from #d5dce3 r g b / 40%);
	--wui-menubar-bar-button-bgcolor-selected: #1e90ff;
	--wui-menubar-bar-button-bgcolor-disabled: transparent;
	--wui-menubar-bar-button-iconsize: 24px;
	--wui-menubar-bar-button-iconcolor-out: rgb(from #353a40 r g b / 70%);
	--wui-menubar-bar-button-iconcolor-over: #353a40;
	--wui-menubar-bar-button-iconcolor-selected: #f6f6fa;
	--wui-menubar-bar-button-iconcolor-disabled: #d5dce3;
	--wui-menubar-bar-button-textcolor-out: #2d3a47;
	--wui-menubar-bar-button-textcolor-over: #1f2937;
	--wui-menubar-bar-button-textcolor-selected: #f6f6fa;
	--wui-menubar-bar-button-textcolor-disabled: #d5dce3;
	--wui-menubar-expander-bgcolor-out: transparent;
	--wui-menubar-expander-bgcolor-over: rgb(from #d5dce3 r g b / 40%);
	--wui-menubar-expander-iconsize: 16px;
	--wui-menubar-expander-iconcolor-out: #444;
	--wui-menubar-expander-iconcolor-over: #000;
	--wui-menubar-expander-expandicon-src: none;
	--wui-menubar-expander-contracticon-src: none;
	--wui-menubar-opener-iconsize: 16px;
	--wui-menubar-opener-openicon-src: none;
	--wui-menubar-submenu-bordercolor: #f0f0f3;
	--wui-menubar-submenu-bgcolor: #fdfdfe;
	--wui-menubar-submenu-button-bgcolor-out: transparent;
	--wui-menubar-submenu-button-bgcolor-over: rgb(from #d5dce3 r g b / 40%);
	--wui-menubar-submenu-button-bgcolor-selected: #1e90ff;
	--wui-menubar-submenu-button-bgcolor-disabled: transparent;
	--wui-menubar-submenu-button-iconsize: 24px;
	--wui-menubar-submenu-button-iconcolor-out: rgb(from #353a40 r g b / 70%);
	--wui-menubar-submenu-button-iconcolor-over: #353a40;
	--wui-menubar-submenu-button-iconcolor-selected: #f6f6fa;
	--wui-menubar-submenu-button-iconcolor-disabled: #d5dce3;
	--wui-menubar-submenu-button-textcolor-out: #2d3a47;
	--wui-menubar-submenu-button-textcolor-over: #1f2937;
	--wui-menubar-submenu-button-textcolor-selected: #f6f6fa;
	--wui-menubar-submenu-button-textcolor-disabled: #d5dce3;
	--wui-menubar-tooltip-bgcolor: #000;
	--wui-menubar-tooltip-textcolor: #fff;
	--wui-menubar-bubble-bgcolor: #f44343;
	--wui-menubar-bubble-textcolor: #fff;

	/* wui-list */

	--wui-list-shadowcolor: #959da5;
	--wui-list-borderradius: 10px;
	--wui-list-borderwidth: 0;
	--wui-list-bordercolor: #f0f0f3;
	--wui-list-scroll-bgcolor-out: rgb(from #353a40 r g b / 20%);
	--wui-list-scroll-bgcolor-over: rgb(from #353a40 r g b / 40%);
	--wui-list-row-height: 44px;
	--wui-list-row-borderwidth: 1px;
	--wui-list-row-bordercolor-out: #f0f0f3;
	--wui-list-row-bordercolor-over: #f0f0f3;
	--wui-list-row-bgcolor-out: #fdfdfe;
	--wui-list-row-bgcolor-over: #f6f6fa;
	--wui-list-row-textcolor-out: #2d3a47;
	--wui-list-row-textcolor-over: #1f2937;
	--wui-list-row-textcolor-disabled: #d5dce3;
	--wui-list-innerrow-borderwidth: 1px;
	--wui-list-innerrow-bordercolor: #f0f0f3;
	--wui-list-innerrow-bgcolor: #f6f6fa;
	--wui-list-innerrow-textcolor: rgb(from #2d3a47 r g b / 60%);
	--wui-list-buttons-bgcolor: transparent;
	--wui-list-button-size: 48px;
	--wui-list-button-hmargin: 8px;
	--wui-list-button-borderradius: 50%;
	--wui-list-button-bgcolor-enabled: #1e90ff;
	--wui-list-button-bgcolor-disabled: #d5dce3;

	/* wui-table */

	--wui-table-shadowcolor: #959da5;
	--wui-table-borderradius: 10px;
	--wui-table-column-bordercolor-width: 1px;
	--wui-table-column-bordercolor-out: rgb(from #1e90ff r g b / 10%);
	--wui-table-column-bordercolor-over: #1e90ff;
	--wui-table-column-bordercolor-selected: #1e90ff;
	--wui-table-column-bgcolor-out: #f6f6fa;
	--wui-table-column-bgcolor-over: #f6f6fa;
	--wui-table-column-bgcolor-selected: #1e90ff;
	--wui-table-column-textcolor-out: #444;
	--wui-table-column-textcolor-over: #000;
	--wui-table-column-textcolor-selected: #1e90ff;
	--wui-table-column-textcolor-disabled: #d5dce3;
	--wui-table-column-sorter-iconsize: 16px;
	--wui-table-column-sorter-iconcolor-out: #444;
	--wui-table-column-sorter-iconcolor-over: #000;
	--wui-table-column-sorter-iconcolor-disabled: #d5dce3;
	--wui-table-column-sorter-ascicon-src: none;
	--wui-table-column-sorter-descicon-src: none;
	--wui-table-column-resizer-bordercolor-out: rgb(from #1e90ff r g b / 10%);
	--wui-table-column-resizer-bordercolor-over: rgb(from #1e90ff r g b / 10%);
	--wui-table-column-dragger-bordercolor-over: #444;
	--wui-table-column-dragger-bgcolor-drop: rgb(from #1e90ff r g b / 10%);
	--wui-table-row-bordercolor-width: 1px;
	--wui-table-row-bordercolor-out: #f0f0f3;
	--wui-table-row-bordercolor-over: #f0f0f3;
	--wui-table-row-bordercolor-selected: #1e90ff;
	--wui-table-row-bordercolor-disabled: #f0f0f3;
	--wui-table-row-bgcolor-out: #fdfdfe;
	--wui-table-row-bgcolor-over: #f6f6fa;
	--wui-table-row-bgcolor-selected: #1e90ff;
	--wui-table-row-bgcolor-disabled: transparent;
	--wui-table-row-textcolor-out: #2d3a47;
	--wui-table-row-textcolor-over: #1f2937;
	--wui-table-row-textcolor-selected: #f6f6fa;
	--wui-table-row-textcolor-disabled: #d5dce3;

	/* wui-form */

	--wui-form-header-bordercolor: #d5dce3;
	--wui-form-header-titlecolor: #000;
	--wui-form-body-scroll-bgcolor-out: rgb(from #353a40 r g b / 20%);
	--wui-form-body-scroll-bgcolor-over: rgb(from #353a40 r g b / 40%);
	--wui-form-line-bordercolor: #d5dce3;
	--wui-form-fieldset-bgcolor: #fff;
	--wui-form-legend-texttransform: uppercase;
	--wui-form-legend-textcolor: rgb(from #2d3a47 r g b / 60%);
	--wui-form-label-textcolor-out: #2d3a47;
	--wui-form-label-textcolor-focus: #1e90ff;
	--wui-form-label-textcolor-notempty: rgb(from #2d3a47 r g b / 40%);
	--wui-form-label-textcolor-disabled: #d5dce3;
	--wui-form-input-height: 30px;
	--wui-form-input-borderwidth: 1px;
	--wui-form-input-borderradius: 15px;
	--wui-form-input-bordercolor-out: rgb(from #1e90ff r g b / 20%);
	--wui-form-input-bordercolor-focus: #1e90ff;
	--wui-form-input-bordercolor-invalid: #f44343;
	--wui-form-input-bordercolor-disabled: #d5dce3;
	--wui-form-input-bgcolor-out: #f6f6fa;
	--wui-form-input-bgcolor-focus: #f6f6fa;
	--wui-form-input-bgcolor-disabled: #d5dce3;
	--wui-form-input-textcolor-out: #2d3a47;
	--wui-form-input-textcolor-over: #1f2937;
	--wui-form-input-textcolor-disabled: #d5dce3;
	--wui-form-date-opener-iconsize: 30px;
	--wui-form-date-opener-iconcolor-out: #000;
	--wui-form-date-opener-iconcolor-over: #1e90ff;
	--wui-form-date-opener-iconcolor-disabled: #d5dce3;
	--wui-form-date-opener-openicon-src: none;
	--wui-form-date-opener-closeicon-src: none;
	--wui-form-time-opener-iconsize: 30px;
	--wui-form-time-opener-iconcolor-out: #000;
	--wui-form-time-opener-iconcolor-over: #1e90ff;
	--wui-form-time-opener-iconcolor-disabled: #d5dce3;
	--wui-form-time-opener-openicon-src: none;
	--wui-form-time-opener-closeicon-src: none;
	--wui-form-range-thumb-size: 20px;
	--wui-form-range-thumb-bgcolor-out: #1e90ff;
	--wui-form-range-thumb-bgcolor-over: #1e90ff;
	--wui-form-range-thumb-bgcolor-disabled: #d5dce3;
	--wui-form-range-trackbar-height: 7px;
	--wui-form-range-trackbar-borderwidth: 1px;
	--wui-form-range-trackbar-bordercolor: #f0f0f3;
	--wui-form-range-trackbar-bgcolor-out: #f6f6fa;
	--wui-form-range-trackbar-bgcolor-over: #1e90ff;
	--wui-form-range-trackbar-bgcolor-disabled: #d5dce3;
	--wui-form-select-opener-iconsize: 30px;
	--wui-form-select-opener-iconcolor-out: #000;
	--wui-form-select-opener-iconcolor-over: #1e90ff;
	--wui-form-select-opener-iconcolor-disabled: #d5dce3;
	--wui-form-select-opener-openicon-src: none;
	--wui-form-select-opener-closeicon-src: none;
	--wui-form-data-textcolor-out: #1e90ff;
	--wui-form-data-textcolor-disabled: #d5dce3;
	--wui-form-progress-borderwidth: 1px;
	--wui-form-progress-bordercolor: #f0f0f3;
	--wui-form-progress-valuecolor: #1e90ff;
	--wui-form-progress-bgcolor: #f6f6fa;
	--wui-form-text-textcolor-out: #888;
	--wui-form-text-textcolor-disabled: #d5dce3;
	--wui-form-text-linkcolor-out: #1e90ff;
	--wui-form-text-linkcolor-highlight: #1e90ff;
	--wui-form-message-shadowcolor: #959da5;
	--wui-form-message-bgcolor: #fdfdfe;
	--wui-form-message-textcolor: #2d3a47;
	--wui-form-message-highlight-bgcolor: #1e90ff;
	--wui-form-message-highlight-textcolor: #fff;
	--wui-form-mobile-field-bordercolor: rgb(from #1e90ff r g b / 10%);
	--wui-form-mobile-label-textcolor: #444;
	--wui-form-mobile-input-height: 40px;
	--wui-form-mobile-input-bgcolor: rgb(from #1e90ff r g b / 4%);
	--wui-form-mobile-input-height: 34px;
	--wui-form-mobile-input-borderradius: 15px;

	/* wui-selectpicker */

	--wui-selectpicker-borderradius: 10px;
	--wui-selectpicker-borderwidth: 0px;
	--wui-selectpicker-bordercolor: transparent;
	--wui-selectpicker-bgcolor: #f6f6fa;
	--wui-selectpicker-opener-iconsize: 30px;
	--wui-selectpicker-opener-iconcolor-out: #000;
	--wui-selectpicker-opener-iconcolor-over: #1e90ff;
	--wui-selectpicker-opener-iconcolor-disabled: #d5dce3;
	--wui-selectpicker-opener-openicon-src: none;
	--wui-selectpicker-opener-closeicon-src: none;
	--wui-selectpicker-viewinput-paddingleft: 10px;
	--wui-selectpicker-viewinput-textcolor-out: #2d3a47;
	--wui-selectpicker-viewinput-textcolor-over: #1f2937;
	--wui-selectpicker-viewinput-textcolor-disabled: #d5dce3;
	--wui-selectpicker-box-shadowcolor: #959da5;
	--wui-selectpicker-box-borderradius: 15px;
	--wui-selectpicker-box-bordercolor: #f0f0f3;
	--wui-selectpicker-box-bgcolor: #fdfdfe;
	--wui-selectpicker-box-scroll-bgcolor-out: rgb(from #353a40 r g b / 20%);
	--wui-selectpicker-box-scroll-bgcolor-over: rgb(from #353a40 r g b / 40%);
	--wui-selectpicker-box-option-borderradius: 10px;
	--wui-selectpicker-box-option-bordercolor-out: #f0f0f3;
	--wui-selectpicker-box-option-bordercolor-over: #f0f0f3;
	--wui-selectpicker-box-option-bgcolor-out: transparent;
	--wui-selectpicker-box-option-bgcolor-over: #f6f6fa;
	--wui-selectpicker-box-option-iconsize: 24px;
	--wui-selectpicker-box-option-iconcolor-out: #1e90ff;
	--wui-selectpicker-box-option-iconcolor-over: #1e90ff;
	--wui-selectpicker-box-option-iconcolor-selected: #1e90ff;
	--wui-selectpicker-box-option-iconcolor-disabled: rgb(from #d5dce3 r g b / 40%);
	--wui-selectpicker-box-option-checkicon-src: none;
	--wui-selectpicker-box-option-textcolor-empty: rgb(from #2d3a47 r g b / 60%);
	--wui-selectpicker-box-option-textcolor-out: #2d3a47;
	--wui-selectpicker-box-option-textcolor-over: #2d3a47;
	--wui-selectpicker-box-option-textcolor-selected: #1e90ff;
	--wui-selectpicker-box-option-textcolor-disabled: rgb(from #d5dce3 r g b / 40%);
	--wui-selectpicker-box-button-bordercolor: #f0f0f3;
	--wui-selectpicker-box-button-textcolor-out: #1e90ff;
	--wui-selectpicker-box-button-textcolor-over: #1e90ff;
	--wui-selectpicker-mobile-overlay-bgcolor: rgb(from #010203 r g b / 20%);
	--wui-selectpicker-mobile-box-width: 280px;
	--wui-selectpicker-mobile-box-borderradius: 17px;

	/* wui-datepicker */

	--wui-datepicker-borderradius: 10px;
	--wui-datepicker-borderwidth: 0px;
	--wui-datepicker-bordercolor: transparent;
	--wui-datepicker-bgcolor: #f6f6fa;
	--wui-datepicker-opener-iconsize: 30px;
	--wui-datepicker-opener-iconcolor-out: #000;
	--wui-datepicker-opener-iconcolor-over: #1e90ff;
	--wui-datepicker-opener-iconcolor-disabled: #d5dce3;
	--wui-datepicker-opener-openicon-src: none;
	--wui-datepicker-opener-closeicon-src: none;
	--wui-datepicker-viewinput-paddingleft: 10px;
	--wui-datepicker-viewinput-textcolor-out: #2d3a47;
	--wui-datepicker-viewinput-textcolor-over: #1f2937;
	--wui-datepicker-viewinput-textcolor-disabled: #d5dce3;
	--wui-datepicker-box-shadowcolor: #959da5;
	--wui-datepicker-box-borderradius: 15px;
	--wui-datepicker-box-bordercolor: #f0f0f3;
	--wui-datepicker-box-bgcolor: rgb(from #fdfdfe r g b / 100%);
	--wui-datepicker-box-period-iconsize: 20px;
	--wui-datepicker-box-period-iconcolor-out: #000;
	--wui-datepicker-box-period-iconcolor-over: #1e90ff;
	--wui-datepicker-box-period-iconcolor-disabled: #d5dce3;
	--wui-datepicker-box-period-upicon-src: none;
	--wui-datepicker-box-period-downicon-src: none;
	--wui-datepicker-box-paging-iconsize: 26px;
	--wui-datepicker-box-paging-iconcolor-out: #1e90ff;
	--wui-datepicker-box-paging-iconcolor-over: #1e90ff;
	--wui-datepicker-box-paging-iconcolor-disabled: #d5dce3;
	--wui-datepicker-box-paging-previcon-src: none;
	--wui-datepicker-box-paging-nexticon-src: none;
	--wui-datepicker-box-month-titlecolor: #888;
	--wui-datepicker-box-month-bgcolor-today: #f0f0f3;
	--wui-datepicker-box-month-bgcolor-over: rgb(from #1e90ff r g b / 20%);
	--wui-datepicker-box-month-bgcolor-selected: #1e90ff;
	--wui-datepicker-box-month-textcolor-out: #000;
	--wui-datepicker-box-month-textcolor-over: #1e90ff;
	--wui-datepicker-box-month-textcolor-selected: #fff;
	--wui-datepicker-box-day-bgcolor-today: #f0f0f3;
	--wui-datepicker-box-day-bgcolor-over: rgb(from #1e90ff r g b / 20%);
	--wui-datepicker-box-day-bgcolor-selected: #1e90ff;
	--wui-datepicker-box-day-textcolor-out: #000;
	--wui-datepicker-box-day-textcolor-over: #1e90ff;
	--wui-datepicker-box-day-textcolor-selected: #fff;
	--wui-datepicker-box-button-textcolor-out: #1e90ff;
	--wui-datepicker-box-button-textcolor-over: #1e90ff;
	--wui-datepicker-mobile-overlay-bgcolor: rgb(from #010203 r g b / 20%);

	/* wui-timepicker */

	--wui-timepicker-borderradius: 10px;
	--wui-timepicker-borderwidth: 0px;
	--wui-timepicker-bordercolor: transparent;
	--wui-timepicker-bgcolor: #f6f6fa;
	--wui-timepicker-opener-iconsize: 30px;
	--wui-timepicker-opener-iconcolor-out: #000;
	--wui-timepicker-opener-iconcolor-over: #1e90ff;
	--wui-timepicker-opener-iconcolor-disabled: #d5dce3;
	--wui-timepicker-opener-openicon-src: none;
	--wui-timepicker-opener-closeicon-src: none;
	--wui-timepicker-viewinput-paddingleft: 10px;
	--wui-timepicker-viewinput-textcolor-out: #2d3a47;
	--wui-timepicker-viewinput-textcolor-over: #1f2937;
	--wui-timepicker-viewinput-textcolor-disabled: #d5dce3;
	--wui-timepicker-box-shadowcolor: #959da5;
	--wui-timepicker-box-borderradius: 15px;
	--wui-timepicker-box-bordercolor: #f0f0f3;
	--wui-timepicker-box-bgcolor: rgb(from #fff r g b / 80%);
	--wui-timepicker-box-scroll-bgcolor-out: rgb(from #353a40 r g b / 20%);
	--wui-timepicker-box-scroll-bgcolor-over: rgb(from #353a40 r g b / 40%);
	--wui-timepicker-box-option-bgcolor-now: #f0f0f3;
	--wui-timepicker-box-option-bgcolor-over: rgb(from #1e90ff r g b / 20%);
	--wui-timepicker-box-option-bgcolor-selected: #1e90ff;
	--wui-timepicker-box-option-textcolor-out: #000;
	--wui-timepicker-box-option-textcolor-over: #1e90ff;
	--wui-timepicker-box-option-textcolor-selected: #fff;
	--wui-timepicker-box-button-textcolor-out: #1e90ff;
	--wui-timepicker-box-button-textcolor-over: #1e90ff;
	--wui-timepicker-mobile-overlay-bgcolor: rgb(from #010203 r g b / 20%);

	/* wui-colorpicker */

	--wui-colorpicker-viewbutton-size: 30px;
	--wui-colorpicker-viewbutton-bordercolor-out: rgb(from #1e90ff r g b / 20%);
	--wui-colorpicker-viewbutton-bordercolor-over: #1e90ff;
	--wui-colorpicker-viewbutton-bordercolor-invalid: #f44343;
	--wui-colorpicker-viewbutton-bordercolor-disabled: #d5dce3;
	--wui-colorpicker-viewbutton-bgcolor-out: transparent;
	--wui-colorpicker-viewbutton-bgcolor-over: transparent;
	--wui-colorpicker-viewbutton-bgcolor-disabled: transparent;
	--wui-colorpicker-opener-iconsize: 30px;
	--wui-colorpicker-opener-iconcolor-out: #000;
	--wui-colorpicker-opener-iconcolor-over: #1e90ff;
	--wui-colorpicker-opener-iconcolor-disabled: #d5dce3;
	--wui-colorpicker-opener-openicon-src: none;
	--wui-colorpicker-opener-closeicon-src: none;
	--wui-colorpicker-viewcolor-borderwidth: 1px;
	--wui-colorpicker-viewcolor-bordercolor: rgb(from #1e90ff r g b / 20%);
	--wui-colorpicker-viewcolor-emptyicon-src: none;
	--wui-colorpicker-box-shadowcolor: #959da5;
	--wui-colorpicker-box-borderradius: 15px;
	--wui-colorpicker-box-bordercolor: #f0f0f3;
	--wui-colorpicker-box-bgcolor: rgb(from #fff r g b / 80%);
	--wui-colorpicker-box-scroll-bgcolor-out: rgb(from #353a40 r g b / 20%);
	--wui-colorpicker-box-scroll-bgcolor-over: rgb(from #353a40 r g b / 40%);
	--wui-colorpicker-box-tab-textcolor-out: #2d3a47;
	--wui-colorpicker-box-tab-textcolor-selected: #1e90ff;
	--wui-colorpicker-box-option-bordercolor-out: #f0f0f3;
	--wui-colorpicker-box-option-bordercolor-over: #f0f0f3;
	--wui-colorpicker-box-option-bgcolor-out: transparent;
	--wui-colorpicker-box-option-bgcolor-over: #f6f6fa;
	--wui-colorpicker-box-option-bgcolor-selected: #1e90ff;
	--wui-colorpicker-box-option-textcolor-out: #000;
	--wui-colorpicker-box-option-textcolor-over: #1e90ff;
	--wui-colorpicker-box-option-textcolor-selected: #fff;
	--wui-colorpicker-box-preview-textcolor-out: #000;
	--wui-colorpicker-box-preview-textcolor-empty: rgb(from #2d3a47 r g b / 60%);
	--wui-colorpicker-box-button-textcolor-out: #1e90ff;
	--wui-colorpicker-box-button-textcolor-over: #1e90ff;
	--wui-colorpicker-mobile-overlay-bgcolor: rgb(from #010203 r g b / 20%);

	/* wui-checkbox */

	--wui-checkbox-button-size: 30px;
	--wui-checkbox-bordercolor-out: rgb(from #1e90ff r g b / 20%);
	--wui-checkbox-bordercolor-over: #1e90ff;
	--wui-checkbox-bordercolor-checked: #1e90ff;
	--wui-checkbox-bordercolor-invalid: #f44343;
	--wui-checkbox-bordercolor-disabled: #d5dce3;
	--wui-checkbox-bgcolor-out: rgb(from #1e90ff r g b / 4%);
	--wui-checkbox-bgcolor-over: rgb(from #1e90ff r g b / 4%);
	--wui-checkbox-bgcolor-checked: #1e90ff;
	--wui-checkbox-bgcolor-disabled: rgb(from #d5dce3 r g b / 20%);
	--wui-checkbox-button-bordercolor-out: rgb(from #1e90ff r g b / 20%);
	--wui-checkbox-button-bordercolor-over: #1e90ff;
	--wui-checkbox-button-bordercolor-checked: #1e90ff;
	--wui-checkbox-button-bordercolor-disabled: #d5dce3;
	--wui-checkbox-button-bgcolor-out: #f6f6fa;
	--wui-checkbox-button-bgcolor-over: rgb(from #1e90ff r g b / 4%);
	--wui-checkbox-button-bgcolor-checked: #f6f6fa;
	--wui-checkbox-button-bgcolor-disabled: #d5dce3;

	/* wui-intensity */

	--wui-intensity-height: 30px;
	--wui-intensity-borderradius: 15px;
	--wui-intensity-bordercolor-out: rgb(from #1e90ff r g b / 20%);
	--wui-intensity-bordercolor-disabled: #d5dce3;
	--wui-intensity-bgcolor-none: #f6f6fa;
	--wui-intensity-bgcolor-low: mediumaquamarine;
	--wui-intensity-bgcolor-half: darkorange;
	--wui-intensity-bgcolor-high: orangered;

	/* wui-button */

	--wui-button-default-minwidth: 200px;
	--wui-button-default-height: 34px;
	--wui-button-default-bordercolor-out: #b5bbc1;
	--wui-button-default-bordercolor-over: #1e90ff;
	--wui-button-default-bordercolor-selected: #1e90ff;
	--wui-button-default-bordercolor-disabled: #d5dce3;
	--wui-button-default-bgcolor-out: transparent;
	--wui-button-default-bgcolor-over: transparent;
	--wui-button-default-bgcolor-selected: #1e90ff;
	--wui-button-default-bgcolor-disabled: transparent;
	--wui-button-default-textcolor-out: #1e90ff;
	--wui-button-default-textcolor-over: #1e90ff;
	--wui-button-default-textcolor-selected: #fff;
	--wui-button-default-textcolor-disabled: #d5dce3;
	--wui-button-default-textsize: 15px;
	--wui-button-submit-minwidth: 200px;
	--wui-button-submit-height: 34px;
	--wui-button-submit-bordercolor-out: rgb(from #1e90ff r g b / 20%);
	--wui-button-submit-bordercolor-over: #1e90ff;
	--wui-button-submit-bordercolor-selected: #1e90ff;
	--wui-button-submit-bordercolor-disabled: #d5dce3;
	--wui-button-submit-bgcolor-out: #1e90ff;
	--wui-button-submit-bgcolor-over: #1e90ff;
	--wui-button-submit-bgcolor-mobile: rgb(from #959da5 r g b / 20%);
	--wui-button-submit-bgcolor-selected: #1e90ff;
	--wui-button-submit-bgcolor-disabled: #d5dce3;
	--wui-button-submit-textcolor-out: #fff;
	--wui-button-submit-textcolor-over: #fff;
	--wui-button-submit-textcolor-mobile: #1e90ff;
	--wui-button-submit-textcolor-selected: #fff;
	--wui-button-submit-textcolor-disabled: #d5dce3;
	--wui-button-submit-textsize: 15px;
	--wui-button-warning-bordercolor-out: rgb(from #f44343 r g b / 25%);
	--wui-button-warning-bordercolor-over: #f44343;
	--wui-button-warning-bordercolor-selected: #f44343;
	--wui-button-warning-bordercolor-disabled: #d5dce3;
	--wui-button-warning-bgcolor-out: #f44343;
	--wui-button-warning-bgcolor-over: #f44343;
	--wui-button-warning-bgcolor-selected: #f44343;
	--wui-button-warning-bgcolor-disabled: #d5dce3;
	--wui-button-warning-textcolor-out: #fff;
	--wui-button-warning-textcolor-over: #fff;
	--wui-button-warning-textcolor-mobile: #f44343;
	--wui-button-warning-textcolor-selected: #fff;
	--wui-button-warning-textcolor-disabled: #d5dce3;
	--wui-button-icon-float-padding: 5px;
	--wui-button-mobile-default-height: 40px;
	--wui-button-mobile-submit-height: 40px;
	--wui-button-mobile-icon-float-padding: 10px;
	--wui-button-form-default-minwidth: 100px;
}
```

Assuming the CSS settings file is installed in the relative path `./Settings/WUI.css` and the libraries are installed in the relative path `./Libraries/WUI`, the HTML header looks like this:

HTML code:

```html
<!doctype html>
<html>
	<head>
		<title></title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
		<meta name="application-name" content="">
		<meta name="theme-color" content="">
		<link type="text/css" rel="stylesheet" href="./Settings/Main.css">
		<link type="text/css" rel="stylesheet" href="./Settings/WUI.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Scrolly/WUIScrolly-0.2.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Icon/WUIIcon-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Loader/WUILoader-0.2.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Tooltip/WUITooltip-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Modal/WUIModal-0.2.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Slider/WUISlider-0.2.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Paging/WUIPaging-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Tabs/WUITabs-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Menubar/WUIMenubar-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/List/WUIList-0.2.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Table/WUITable-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Form/WUIForm-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Selectpicker/WUISelectpicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Datepicker/WUIDatepicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Timepicker/WUITimepicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Colorpicker/WUIColorpicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Checkbox/WUICheckbox-0.2.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Intensity/WUIIntensity-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Button/WUIButton-0.2.css">
		<script type="text/javascript" src="./Libraries/WUI/Cookie/WUICookie-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Head/WUIHead-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Body/WUIBody-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Language/WUILanguage-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Scrolly/WUIScrolly-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Fade/WUIFade-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Loader/WUILoader-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Tooltip/WUITooltip-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Modal/WUIModal-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Slider/WUISlider-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Paging/WUIPaging-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Tabs/WUITabs-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Menubar/WUIMenubar-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/List/WUIList-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Table/WUITable-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Form/WUIForm-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Format/WUIFormat-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Selectpicker/WUISelectpicker-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Datepicker/WUIDatepicker-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Timepicker/WUITimepicker-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Colorpicker/WUIColorpicker-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Checkbox/WUICheckbox-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Intensity/WUIIntensity-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Button/WUIButton-0.2.js"></script>
	</head>
	<body>
	</body>
</html>
```

This implementation method allows for standardization of an application's user interface design, using the `WUI.css` file.

> [!IMPORTANT]
> The styles settings file must be in the path `./Settings/WUI.css`.

> [!TIP]
> If you only want to implement part of the WUI library set, you must add calls to the JS and CSS files in the HTML header as indicated in each section.
> On the other hand, the `WUI.css` file will only require the definition of the objects you want to implement.

<a name="classes"></a>

## Classes

<a name="WUICookie"></a>

### WUICookie

Version: `0.2`

Cookie manager.

#### Sources

| Type | File |
| ---- | ---- |
| JS   | [src/WUI/Cookie/WUICookie-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Cookie/WUICookie-0.2.js) |

#### Constructor

| Type      | Description |
| --------- | ----------- |
| WUICookie | `WUICookie([properties])`<br><br>Arguments:<br>**• properties:** `object` |

#### Properties

| Property | Type      | Default value       | Description |
| -------- | --------- | ------------------- | ----------- |
| domain   | `string`  | `location.hostname` | (get/set)<br><br>Define the domain for which the cookie is accessible. By default, it's the current host. Setting it to a parent domain (e.g., example.com for sub.example.com) makes it accessible to subdomains. |
| path     | `string`  | `"./"`              | (get/set)<br><br>Specifies the path for which the cookie is valid. The default value is the current path, with an empty value being equivalent to this. Setting "/" makes the cookie accessible across the entire domain. |
| minutes  | `number`  | `525600`            | (get/set)<br><br>Specifies the duration, measured in minutes, for the cookie to remain active. The default value is 365 days. |
| overssl  | `boolean` | `false`             | (get/set)<br><br>If set to `true`, the cookie will only be sent over HTTPS connections. |

#### Methods

| Method | Return type | Description |
| ------ | ----------- | ----------- |
| set    | `void`      | `set(name, value[, options])`<br><br>Arguments:<br>**• name:** `string` <br>**• value:** `string` <br>**• options:** `object` *optional*<br><br>Add or modify a cookie. |
| get    | `string`    | `get(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Reads the contents of a cookie by its name. |
| remove | `void`      | `remove(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Removes a cookie by its name. |

#### Implementation

HTML head:

```html
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Cookie/WUICookie-0.2.js"></script>
```

JS code:

```js
// Create object
const cookie = new WUICookie({
	//domain: location.hostname,
	//path: "./",
	//minutes: 365*24*60,
	//overssl: false
});

// Save cookie
cookie.set("mycookie", "test");

// Read cookie
console.log(cookie.get("mycookie"));
```

<a name="WUIHead"></a>

### WUIHead

Version: `0.2`

HTML header manager.

#### Sources

| Type | File |
| ---- | ---- |
| JS   | [src/WUI/Head/WUIHead-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Head/WUIHead-0.2.js) |

#### Constructor

| Type    | Description |
| ------- | ----------- |
| WUIHead | `WUIHead()` |

#### Properties

Class without properties.

#### Methods

| Method             | Return type | Description |
| ------------------ | ----------- | ----------- |
| setTitle           | `void`      | `setTitle(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Sets the name of the HTML document using the `<title>` tag. |
| setMetaContent     | `void`      | `setMetaContent(name, content)`<br><br>Arguments:<br>**• name:** `string` <br>**• content:** `string`<br><br>Sets a meta value in the header of the HTML document using the `<meta>` tag.<br>Check specifications and compatibility in [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name). |
| setApplicationName | `void`      | `setApplicationName(content)`<br>Alias of `setMetaContent("application-name", content)`<br><br>Arguments:<br>**• content:** `string`<br><br>Sets the `application-name` meta value in the header of the HTML document. |
| setThemeColor      | `void`      | `setThemeColor(content)`<br>Alias of `setMetaContent("theme-color", content)`<br><br>Arguments:<br>**• content:** `string`<br><br>Sets the `theme-color` meta value in the header of the HTML document.<br>Check specifications and compatibility in [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color). |
| refresh            | `void`      | `refresh()`<br><br>Reloads JS and CSS files called from the `<head>` section of the HTML document, by appending a dynamic get parameter. |

#### Implementation

HTML head:

```html
<title></title>
<meta name="application-name" content="">
<meta name="theme-color" content="">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Head/WUIHead-0.2.js"></script>
```

JS code:

```js
// Create object
const head = new WUIHead();

// Change page title
head.setTitle("Test title");

// Change application name metadata
head.setApplicationName("Test app");

// Change the metadata of the browser's top bar color
head.setThemeColor("#1e90ff");
```

<a name="WUIBody"></a>

### WUIBody

Version: `0.2`

HTML body manager. Allows the import of CSS/JS/HTML content and facilitates implementation in native mobile environments.

#### Sources

| Type | File |
| ---- | ---- |
| JS   | [src/WUI/Body/WUIBody-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Body/WUIBody-0.2.js) |

#### Constructor

| Type    | Description |
| ------- | ----------- |
| WUIBody | `WUIBody([properties])`<br><br>Arguments:<br>**• properties:** `object` |

#### Properties

| Property        | Type       | Default value | Description |
| --------------- | ---------- | ------------- | ----------- |
| environment     | `string`   | `"web"`       | (get/set)<br><br>Web interface deployment environment.<br><br>Values:<br>• `"web"`<br>• `"native.android"`<br>• `"native.ios"` |
| importDirectory | `string`   | `""`          | (get/set)<br><br>Relative path of the directory where the subdirectories for content import are hosted. |
| importMode      | `string`   | `"fetch"`     | (get/set)<br><br>Content retrieval method for upload.<br><br>Values:<br>• `"fetch"`<br>• `"xhr"`<br><br>When deploying to native environments using WebView for Android or WebKit for iOS, it is recommended to use `"xhr"`. |
| onCompleted     | `function` | `null`        | (get/set)<br><br>Function that is called when all content is imported and loaded into the body of the HTML page. |
| debug           | `boolean`  | `false`       | (get/set)<br><br>Test mode. Prints imported content to the console when the property value is `true`. |

#### Methods

| Method  | Return type | Description |
| ------- | ----------- | ----------- |
| import  | `void`      | `import(id, path[, done])`<br><br>Arguments:<br>**• id:** `string`, specifies the id of the HTML element where the content is to be loaded.<br>**• path:** `string`, specifies the subdirectory path and filename of the files with extension `.css`, `.htm` and `.js` that will be imported and loaded.<br>**• done:** `function` *optional*, this function is executed when the content loading has finished.<br><br>Imports CSS/JS/HTML content referenced to an HTML element by its `id`. |
| prepare | `void`      | `prepare()`<br><br>Depending on the value of the `environment` parameter, modifies the HTML elements `a`, `input`, and `select` in the HTML document body to adapt them to native environments. |
| openURL | `void`      | `openURL(url[, download])`<br><br>Arguments:<br><br>**• id:** `string`, specifies the URL that is required to be opened or downloaded.<br>**• download:** `string` *optional*, specifies the name of the file that will be used to download the content referenced by the URL.<br><br>Open or download content using a URL. This method is required in native environments since WebView on Android or WebKit on iOS aren't always supported. |

#### Implementation

CSS content of the `./Imports/test-content.css` file:

```css
.test a,
.test a:visited {
	text-decoration: none;
	font-size: 20px;
	color: blue;
}
```

HTML content of the `./Imports/test-content.htm` file:

```html
<section id="testContent" class="test">
	<a href="https://www.google.com">Google!</a>
</section>
```

JS content of the `./Imports/test-content.js` file:

```js
const testContentLog = (content) => {
	console.log(content);
}
```

HTML head:

```html
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Body/WUIBody-0.2.js"></script>
```

HTML code:

```html
<section id="testContent"></section>
```

JS code:

```js
// Create object
const body = new WUIBody({
	//environment: "web",
	importDirectory: "./Imports/",
	//importMode: "fetch",
	onCompleted: () => {
		body.prepare();
	},
	debug: true
});

// Import CSS/HTML/JS content from the ./Imports directory
body.import("testContent", "test-content", () => {
	testContentLog("test content loaded");
});
```

<a name="WUILanguage"></a>

### WUILanguage

Version: `0.2`

Language manager for web interfaces. Allows you to load language files in JS or JSON format and dynamically update the content of HTML elements based on the language.

#### Sources

| Type | File |
| ---- | ---- |
| JS   | [src/WUI/Language/WUILanguage-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Language/WUILanguage-0.2.js) |

#### Constructor

| Type        | Description |
| ----------- | ----------- |
| WUILanguage | `WUILanguage([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property   | Type       | Default value     | Description |
| ---------- | ---------- | ----------------- | ----------- |
| selector   | `string`   | `".wui-language"` | (get/set)<br><br>CSS selector for HTML elements to be loaded. This can be applied to the `content` attribute of the `meta` element, to the `innerHTML` property of the elements: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `i`, `li`, `a`, `legend`, `label`, `option`, `data`, `button`, and to the `placeholder` attribute of the `input` and `textarea` elements. |
| directory  | `string`   | `"Languages/"`    | (get/set)<br><br>Path to the directory where the language files are located. |
| sets       | `array`    | `["main"]`        | (get/set)<br><br>List of language set names to load. |
| lang       | `string`   | `"en"`            | (get/set)<br><br>Language code in ISO 639-1 format. |
| mode       | `string`   | `"js"`            | (get/set)<br><br>Language file format.<br><br>Values:<br>• `"js"`<br>• `"json"` |
| dataKey    | `string`   | `"key"`           | (get/set)<br><br>Name of the `data-*` attribute that contains the text key in HTML elements. |
| dataOutput | `string`   | `"text"`          | (get/set)<br><br>Name of the `data-*` attribute where the loaded text can be placed. |
| onLoad     | `function` | `null`            | (get/set)<br><br>Function that is called when the language loading has finished. |

#### Methods

| Method  | Return type | Description |
| ------- | ----------- | ----------- |
| load    | `void`      | `load([lang[, sets]])`<br><br>Arguments:<br>**• lang:** `string` *optional* (default value corresponds to the `lang` property of the object)<br>**• sets:** `array` *optional* (default value corresponds to the `sets` property of the object)<br><br>Loads the language files indicated by language and set, and updates the HTML elements marked with the CSS selector. |
| refresh | `void`      | `refresh([selector[, lang]])`<br><br>Arguments:**• selector:** `string` *optional* (default value corresponds to the `selector` property of the object)<br>**• lang:** `string` *optional* (default value corresponds to the `lang` property of the object)<br><br>Reloads the text contained in the nested elements of the HTML element specified in the `selector` argument. |

#### Implementation

JS code file `main-en.js`:

```js
return {
	titles: {
		test: "Test title"
	},
	texts: {
		test: "Test text"
	}
};
```

> [!IMPORTANT]
> If `js` is used as the format for language files, said file must be initialized by the `return` keyword followed by a `{}` object.

JSON code file `main-en.json`:

```json
{
	"titles": {
		"test": "Test title"
	},
	"texts": {
		"test": "Test text"
	}
}
```

HTML head:

```html
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Language/WUILanguage-0.2.js"></script>
```

HTML code:

```html
<h1 class="wui-language" data-key="titles.test"></h1>
<div class="wui-language" data-key="texts.test"></div>
```

JS code:

```js
// Create object
const language = new WUILanguage({
    //selector: ".wui-language",
    //directory: "./Languages/",
    //sets: ["main"],
    //lang: "en",
    //mode: "js",
    //dataKey: "key",
    //dataOutput: "text",
    onLoad: (...args) => {
		[lang, languages] = args;
        console.log("Language loaded:", lang, languages);
    }
});

// Declaring global variables
let lang = language.lang;
let languages = {};

// Load content from the main-en.js file
language.load();                // Option 1
language.load("en");            // Option 2 equivalent to option 1
language.load("en", ["main"]);  // Option 3 equivalent to option 1
```

> [!IMPORTANT]
> The language file must be in the path `./Languages/main-en.js` or `./Languages/main-en.json` depending on the set, language and mode used. It is important that language files are in the form `{set}-{lang}.{mode}`, otherwise the file cannot be imported.

It is possible to combine sets of files from the same language, for example, if you have a `main-es.js` file and another `main2-es.js` file that complements the first, they can be called simultaneously using the `sets` property.

JS code:

```js
// Option 1: Update the sets property and then reload.
language.sets = ["main", "main2"];
language.load(); 

// Option 2: Reload by passing the combination of sets as a parameter.
language.load("en", ["main", "main2"]);
```

> [!TIP]
> If you want to add dynamic content within a text, It is recommended to use the `js` language file format (`mode: "js"`) and add the text using the string interpolation method, also known as template literals. I.e. ``mykey: `My ${var} text` ``.

<a name="WUIScrolly"></a>

### WUIScrolly

Versión: `0.2`

Tool for animating HTML elements using the "onscroll" event of the HTML page body.

#### Sources

| Type | File |
| ---- | ---- |
| JS   | [src/WUI/Scrolly/WUIScrolly-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Scrolly/WUIScrolly-0.2.js) |

#### Constructor

| Type       | Description |
| ---------- | ----------- |
| WUIScrolly | `WUIScrolly([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property      | Type       | Default value               | Description |
| ------------- | ---------- | --------------------------- | ----------- |
| sections      | `array`    | `[]`                        | (get/set)<br><br>List of objects with the settings of the sections that will be incorporated into the animation, as defined in **Section Options**. These can be defined directly on this property or using the `addSection()` method. |
| behavior      | `string`   | `"smooth"`                  | (get/set)<br><br>Behavior for moving focus to the body of the HTML page.<br><br>Values:<br>• `"auto"`<br>• `"smooth"` |
| dataScrollY   | `string`   | `"scrollY"`                 | (get/set)<br><br>Name of the `data-*` attribute of the main document element (`<html>` / `document.documentElement`) that contains the numeric value measured in pixels of the total vertical scrolling of the HTML page, where `0` represents the top of the document (or no movement). |
| dataDelay     | `string`   | `"delay"`                   | (get/set)<br><br>Name of the `data-*` attribute that determines the time, measured in milliseconds, that it takes for an HTML element animated using CSS styles to animate once it is given focus. |
| onStart       | `function` | `null`                      | (get/set)<br><br>Function that is called when the scroll movement starts, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| onMove        | `function` | `null`                      | (get/set)<br><br>Function that is called when the scroll movement is executed, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| onStop        | `function` | `null`                      | (get/set)<br><br>Function that is called when the scroll movement ends, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| scrollY       | `number`   | `0`                         | (get)<br><br>Vertical position of the page measured in pixels. |
| deltaY        | `number`   | `0`                         | (get)<br><br>Last step of scrolling in the vertical movement of the page, measured in pixels. |
| direction     | `string`   | `null`                      | (get)<br><br>Direction of vertical page movement.<br><br>Values:<br>• `"up"`<br>• `"down"` |
| sceneWidth    | `number`   | `WUIScrolly.screenWidth()`  | (get)<br><br>Scene width measured in pixels. |
| sceneHeight   | `number`   | `WUIScrolly.screenHeight()` | (get)<br><br>Scene height measured in pixels. |
| sceneIndex    | `number`   | `null`                      | (get)<br><br>Scene number. |
| sceneStep     | `number`   | `null`                      | (get)<br><br>Step number in a scene. |
| sceneProgress | `number`   | `null`                      | (get)<br><br>Percentage of progress of a step in a scene, with values ​​between `0` and `1`. |
| debug         | `boolean`  | `false`                     | (get/set)<br><br>Test mode. Prints to the console the `selector` and `height` values ​​of the scenes added in the startup instance, and `scrollY`, `y`, `index`, `sceneIndex`, `step`, `sceneStep`, and `progress` when they change. Enabled when the property value is `true`. |

#### Section Options

| Property  | Type       | Default value | Description |
| --------- | ---------- | ------------- | ----------- |
| selector  | `string`   | `undefined`   | CSS selector that defines the HTML element to be included as a section. If more than one element matches the selector, only the first match will be included. *oblogatory* |
| target    | `string`   | `undefined`   | Auxiliary name for referencing the section. Used in the `goSection()` method. |
| type      | `string`   | `"auto"`      | CSS behavior of the section height.<br><br>Values:<br>• `"auto"`<br>• `"static"` |
| height    | `number`   | `undefined`   | Section height. This can be expressed as a number associated with pixels or in a CSS compatible format. |
| steps     | `number`   | `undefined`   | Total number of steps defined in the `animation` animation function. |
| pages     | `number`   | `undefined`   | Total number of pages defined in the `animation` animation function. |
| animation | `function` | `undefined`   | `function(step, progress)`<br><br>Arguments:<br>**• step:** `number`, value between `0` and `pages - 1` <br>**• progress:** `number`, value between `0` and `1` <br><br>Function that is called when the scroll movement is executed in a section. |

#### Methods

| Method     | Return type | Description |
| ---------- | ----------- | ----------- |
| init       | `void`      | `init()`<br><br>Initializes the object once the sections that make up the HTML page have been added. |
| stop       | `void`      | `stop()`<br><br>Interrupts the animation in its execution cycle. |
| addSection | `void`      | `addSection(options)`<br><br>Adds a new animated section settings to the object's section list, as defined in **Section Options:**. |
| goSection  | `void`      | `goSection(target[, done[, behavior]])`<br><br>Arguments:<br>**• target:** `string` <br>**• done:** `function` <br>**• behavior:** `string` <br><br>Moves the focus of the HTML page to the section specified by the `target` parameter. |
| selectPage | `void`      | `selectPage(sectionIndex, pageIndex)`<br><br>Arguments:<br>**• sectionIndex:** `number`, values ​​from `0` <br>**• pageIndex:** `number`, value between `0` and `pages - 1` <br><br>Moves the focus of the HTML page to the section specified by the `sectionIndex` parameter and advances to the `pageIndex` page in that section. |
| drawCenter | `void`      | `drawCenter()`<br><br>Draws the center of the visible part of the HTML page in the browser. |
| drawRuler  | `void`      | `drawRuler()`<br><br>Draws a vertical ruler with pixel measurements, on the left side of the HTML page. |

#### CSS Variables

| Variable                       | Description |
| ------------------------------ | ----------- |
| `--wui-scrolly-paging-bgcolor` |

#### CSS Styles for Animation

| Style         | Description |
| ------------- | ----------- |
| .fadein       | Enter and exits with opacity without movement. |
| .fadein-up    | Enter and exits with opacity from above. |
| .fadein-top   | Alias ​​of `.fadein-up`. |
| .fadein-left  | Enter and exit with opacity from the left. |
| .fadein-right | Enter and exit with opacity from the right. |

#### Implementation

There are two ways to implement the animation library, the simplest is through CSS animation tags, the second is through programming JS animation functions that are loaded through section settings.

CSS settings:

```css
:root {
	--wui-scrolly-paging-bgcolor: #888;
}
```

CSS code:

```css
html,
body {
	height: 100%; /* necessary */
}

body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
}

.wui-scrolly {
	overflow-x: hidden;
	margin: 0;
	padding: 0;
}

.wui-scrolly > .section {
	width: 100%;
	background-color: lightgray;
}

.wui-scrolly > .section > .scene > .animation {
	position: relative;
}

.wui-scrolly > .section1 {
	background-color: #f1f1f1;
}

.wui-scrolly > .section2 > .scene.scene2 {
	display: flex;
	position: relative; /* necessary */
	align-items: center;
	justify-content: center;
	flex-direction: row;
	gap: 20px;
}

.wui-scrolly > .section2 {
	background-color: #e9e9e9;
}

.wui-scrolly > .section3 {
	background-color: #e1e1e1;
}

.wui-scrolly > .section3 > .scene > .animation > .my-element {
	left: -100px;
}

.my-element {
	display: flex;
	position: relative; /* necessary */
	width: 50px;
	height: 50px;
	margin: 5px;
	pargin: 20px;
	background-color: dodgerblue;
	align-items: center;
	justify-content: center;
	color: #fff;
}

.my-output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Scrolly/WUIScrolly-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Scrolly/WUIScrolly-0.2.js"></script>
```

HTML code:

```html
<body class="wui-scrolly">

	<!-- Cover -->

	<section class="section section1">
		<div class="scene">scroll down</div>
	</section>

	<!-- CSS animation -->

	<section class="section section2">
		<div class="scene scene2">
			<div class="my-element wui-scrolly-load fadein" data-delay=".0">1</div>
			<div class="my-element wui-scrolly-load fadein-left" data-delay=".2">2</div>
			<div class="my-element wui-scrolly-load fadein-top" data-delay=".4">3</div>
			<div class="my-element wui-scrolly-load fadein-right" data-delay=".8">4</div>
		</div>
	</section>

	<!-- JS animation -->

	<section class="section section3">
		<div class="scene">
			<div class="animation">
				<div class="my-element element5">5</div>
				<div class="my-element element6">6</div>
				<div class="my-element element7">7</div>
			</div>
			<div class="my-output"></div>
		</div>
		<div class="paging dots"></div>
	</section>
</body>
```

JS code:

```js
// Create object
const element5 = document.body.querySelector(".section3 .my-element.element5");
const element6 = document.body.querySelector(".section3 .my-element.element6");
const element7 = document.body.querySelector(".section3 .my-element.element7");
const output = document.body.querySelector(".section3 .my-output");
const scrolly = new WUIScrolly({
	//sections: [],
	//behavior: "smooth",
	//dataScrollY: "scrollY",
	//dataDelay: "delay",
	//onStart: null,
	onMove: (index, step, progress) => {
		if (index == 1) {
			element5.style.left = "-100px";
		}
	},
	//onStop: null,
	debug: true
});

// Add sections
scrolly.addSection({
	selector: ".section1",
	target: "cover",
	type: "static",
	height: "100%"
});
scrolly.addSection({
	selector: ".section2",
	target: "css-animation",
	type: "static",
	height: 400
});
scrolly.addSection({
	selector: ".section3",
	target: "js-animation",
	type: "auto",
	height: 4500,
	steps: 3,
	pages: 3,
	animation: (step, progress) => {
		const direction = scrolly.direction;
		const left = step != null ? parseInt(200 * progress - 100)+"px" : "100px";
		const text = `step: ${step}, progress: ${progress}, direction: ${direction}`;
		scrolly.selectPage(2, step);
		if (step == 0) {
			if (direction == "up") {
				element6.style.left = "-100px";
			}
			element5.style.left = left;
		} else if (step == 1) {
			if (direction == "down") {
				element5.style.left = "100px";
			} else if (direction == "up") {
				element7.style.left = "-100px";
			}
			element6.style.left = left;
		} else if (step == 2) {
			if (direction == "down") {
				element6.style.left = "100px";
			}
			element7.style.left = left;
		} else if (step == null) {
			element7.style.left = left;
		}
		output.textContent = text;
	}
});

// Initialize object
scrolly.init();
```

> [!TIP]
> You can check out this working example on CodePen at the link: [https://codepen.io/wuijsproject/pen/azZvxMK](https://codepen.io/wuijsproject/pen/azZvxMK).

<a name="WUIIcon"></a>

### WUIIcon

Version: `0.1`

Set of pre-designed icons loaded via CSS, for use in interfaces.

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/WUI/Icon/WUIIcon-0.1.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Icon/WUIIcon-0.1.css) |

#### Signals Icon Table

| Icon                                           | Style                                                     | Icon                                           | Style                                                     | Icon                                       | Style                                                         | Icon                                       | Style                                                          |
| :---:                                          | -----                                                     | :---:                                          | -----                                                     | :---:                                      | -----                                                         | :---:                                      | -----                                                          |
| ![](./imgs/Icons/plus-line.svg)                | .plus-line                                                | ![](./imgs/Icons/plus-lg-line.svg)             | .plus-lg-line                                             | ![](./imgs/Icons/dash-line.svg)            | .dash-line                                                    | ![](./imgs/Icons/dash-lg-line.svg)         | .dash-lg-line                                                  |
| ![](./imgs/Icons/check-line.svg)               | .check-line<br>.successful-line                           | ![](./imgs/Icons/check-lg-line.svg)            | .check-lg-line<br>.successful-lg-line                     | ![](./imgs/Icons/info-line.svg)            | .info-line                                                    | ![](./imgs/Icons/info-lg-line.svg)         | .info-lg-line                                                  |
| ![](./imgs/Icons/question-line.svg)            | .question-line                                            | ![](./imgs/Icons/question-lg-line.svg)         | .question-lg-line                                         | ![](./imgs/Icons/excamation-line.svg)      | .excamation-line<br>.warning-line                             | ![](./imgs/Icons/excamation-lg-line.svg)   | .excamation-lg-line<br>.warning-lg-line                        |
| ![](./imgs/Icons/slash-line.svg)               | .slash-line                                               | ![](./imgs/Icons/slash-lg-line.svg)            | .slash-lg-line                                            | ![](./imgs/Icons/x-line.svg)               | .x-line<br>.close-line<br>.error-line                         | ![](./imgs/Icons/x-lg-line.svg)            | .x-lg-line<br>.close-lg-line<br>.error-lg-line                 |
| ![](./imgs/Icons/filter-line.svg)              | .filter-line                                              | ![](./imgs/Icons/filter-lg-line.svg)           | .filter-lg-line                                           | ![](./imgs/Icons/plus-circle-line.svg)     | .plus-circle-line                                             | ![](./imgs/Icons/plus-circle-fill.svg)     | .plus-circle-fill                                              |
| ![](./imgs/Icons/dash-circle-line.svg)         | .dash-circle-line                                         | ![](./imgs/Icons/dash-circle-fill.svg)         | .dash-circle-fill                                         | ![](./imgs/Icons/check-circle-line.svg)    | .check-circle-line<br>.successful-circle-line                 | ![](./imgs/Icons/check-circle-fill.svg)    | .check-circle-fill<br>.successful-circle-fill                  |
| ![](./imgs/Icons/info-circle-line.svg)         | .info-circle-line                                         | ![](./imgs/Icons/info-circle-fill.svg)         | .info-circle-fill                                         | ![](./imgs/Icons/question-circle-line.svg) | .question-circle-line                                         | ![](./imgs/Icons/question-circle-fill.svg) | .question-circle-fill                                          |
| ![](./imgs/Icons/excamation-circle-line.svg)   | .excamation-circle-line<br>.warning-circle-line           | ![](./imgs/Icons/excamation-circle-fill.svg)   | .excamation-circle-fill<br>.warning-circle-fill           | ![](./imgs/Icons/slash-circle-line.svg)    | .slash-circle-line                                            | ![](./imgs/Icons/slash-circle-fill.svg)    | .slash-circle-fill                                             |
| ![](./imgs/Icons/x-circle-line.svg)            | .x-circle-line<br>.close-circle-line<br>error-circle-line | ![](./imgs/Icons/x-circle-fill.svg)            | .x-circle-fill<br>.close-circle-fill<br>error-circle-fill | ![](./imgs/Icons/filter-circle-line.svg)   | .filter-circle-line                                           | ![](./imgs/Icons/filter-circle-fill.svg)   | .filter-circle-fill                                            |
| ![](./imgs/Icons/excamation-triangle-line.svg) | .excamation-triangle-line<br>.warning-triangle-line       | ![](./imgs/Icons/excamation-triangle-fill.svg) | .excamation-triangle-fill<br>.warning-triangle-fill       | ![](./imgs/Icons/x-octagon-line.svg)       | .x-octagon-line<br>.close-octagon-line<br>.error-octagon-line | ![](./imgs/Icons/x-octagon-fill.svg)       | ..x-octagon-fill<br>.close-octagon-fill<br>.error-octagon-fill |

#### Arrow Icon Table

| Icon                                                | Style                          | Icon                                              | Style                        | Icon                                                  | Style                            | Icon                                                | Style                          |
| :--:                                                | -----                          | :--:                                              | -----                        | :--:                                                  | -----                            | :--:                                                | -----                          |
| ![](./imgs/Icons/arrow-up-line.svg)                 | .arrow-up-line                 | ![](./imgs/Icons/arrow-left-line.svg)             | .arrow-left-line             | ![](./imgs/Icons/arrow-right-line.svg)                | .arrow-right-line                | ![](./imgs/Icons/arrow-down-line.svg)               | .arrow-down-line               |
| ![](./imgs/Icons/arrow-up-lg-line.svg)              | .arrow-up-lg-line              | ![](./imgs/Icons/arrow-left-lg-line.svg)          | .arrow-left-lg-line          | ![](./imgs/Icons/arrow-right-lg-line.svg)             | .arrow-right-lg-line             | ![](./imgs/Icons/arrow-down-lg-line.svg)            | .arrow-down-lg-line            |
| ![](./imgs/Icons/arrow-upleft-lg-line.svg)          | .arrow-upleft-lg-line          | ![](./imgs/Icons/arrow-upright-lg-line.svg)       | .arrow-upright-lg-line       | ![](./imgs/Icons/arrow-downleft-lg-line.svg)          | .arrow-downleft-lg-line          | ![](./imgs/Icons/arrow-downright-lg-line.svg)       | .arrow-downright-lg-line       |
| ![](./imgs/Icons/arrowhead-up-line.svg)             | .arrowhead-up-line             | ![](./imgs/Icons/arrowhead-left-line.svg)         | .arrowhead-left-line         | ![](./imgs/Icons/arrowhead-right-line.svg)            | .arrowhead-right-line            | ![](./imgs/Icons/arrowhead-down-line.svg)           | .arrowhead-down-line           |
| ![](./imgs/Icons/arrowhead-up-lg-line.svg)          | .arrowhead-up-lg-line          | ![](./imgs/Icons/arrowhead-left-lg-line.svg)      | .arrowhead-left-lg-line      | ![](./imgs/Icons/arrowhead-right-lg-line.svg)         | .arrowhead-right-lg-line         | ![](./imgs/Icons/arrowhead-down-lg-line.svg)        | .arrowhead-down-lg-line        |
| ![](./imgs/Icons/arrowhead-up-stg-line.svg)         | .arrowhead-up-stg-line         | ![](./imgs/Icons/arrowhead-left-stg-line.svg)     | .arrowhead-left-stg-line     | ![](./imgs/Icons/arrowhead-right-stg-line.svg)        | .arrowhead-right-stg-line        | ![](./imgs/Icons/arrowhead-down-stg-line.svg)       | .arrowhead-down-stg-line       |
| ![](./imgs/Icons/arrowhead-up-fill.svg)             | .arrowhead-up-fill             | ![](./imgs/Icons/arrowhead-left-fill.svg)         | .arrowhead-left-fill         | ![](./imgs/Icons/arrowhead-right-fill.svg)            | .arrowhead-right-fill            | ![](./imgs/Icons/arrowhead-down-fill.svg)           | .arrowhead-down-fill           |
| ![](./imgs/Icons/arrow-up-circle-line.svg)          | .arrow-up-circle-line          | ![](./imgs/Icons/arrow-left-circle-line.svg)      | .arrow-left-circle-line      | ![](./imgs/Icons/arrow-right-circle-line.svg)         | .arrow-right-circle-line         | ![](./imgs/Icons/arrow-down-circle-line.svg)        | .arrow-down-circle-line        |
| ![](./imgs/Icons/arrow-upleft-circle-line.svg)      | .arrow-upleft-circle-line      | ![](./imgs/Icons/arrow-upright-circle-line.svg)   | .arrow-upright-circle-line   | ![](./imgs/Icons/arrow-downleft-circle-line.svg)      | .arrow-downleft-circle-line      | ![](./imgs/Icons/arrow-downright-circle-line.svg)   | .arrow-downright-circle-line   |
| ![](./imgs/Icons/arrow-up-circle-fill.svg)          | .arrow-up-circle-fill          | ![](./imgs/Icons/arrow-left-circle-fill.svg)      | .arrow-left-circle-fill      | ![](./imgs/Icons/arrow-right-circle-fill.svg)         | .arrow-right-circle-fill         | ![](./imgs/Icons/arrow-down-circle-fill.svg)        | .arrow-down-circle-fill        |
| ![](./imgs/Icons/arrow-upleft-circle-fill.svg)      | .arrow-upleft-circle-fill      | ![](./imgs/Icons/arrow-upright-circle-fill.svg)   | .arrow-upright-circle-fill   | ![](./imgs/Icons/arrow-downleft-circle-fill.svg)      | .arrow-downleft-circle-fill      | ![](./imgs/Icons/arrow-downright-circle-fill.svg)   | .arrow-downright-circle-fill   |
| ![](./imgs/Icons/arrowbar-up-line.svg)              | .arrowbar-up-line              | ![](./imgs/Icons/arrowbar-left-line.svg)          | .arrowbar-left-line          | ![](./imgs/Icons/arrowbar-right-line.svg)             | .arrowbar-right-line             | ![](./imgs/Icons/arrowbar-down-line.svg)            | .arrowbar-down-line            |
| ![](./imgs/Icons/arrows-expand-horizontal-line.svg) | .arrows-expand-horizontal-line | ![](./imgs/Icons/arrows-expand-vertical-line.svg) | .arrows-expand-vertical-line | ![](./imgs/Icons/arrows-collapse-horizontal-line.svg) | .arrows-collapse-horizontal-line | ![](./imgs/Icons/arrows-collapse-vertical-line.svg) | .arrows-collapse-vertical-line |
| ![](./imgs/Icons/arrows-horizontal-line.svg)        | .arrows-horizontal-line        | ![](./imgs/Icons/arrows-vertical-line.svg)        | .arrows-vertical-line        | ![](./imgs/Icons/arrows-expand-diagonal-line.svg)     | .arrows-expand-diagonal-line     | ![](./imgs/Icons/arrows-collapse-diagonal-line.svg) | .arrows-collapse-diagonal-line |
| ![](./imgs/Icons/arrowbox-out-up-line.svg)          | .arrowbox-out-up-line          | ![](./imgs/Icons/arrowbox-out-left-line.svg)      | .arrowbox-out-left-line      | ![](./imgs/Icons/arrowbox-out-right-line.svg)         | .arrowbox-out-right-line         | ![](./imgs/Icons/arrowbox-out-down-line.svg)        | .arrowbox-out-down-line        |
| ![](./imgs/Icons/arrowbox-out-upleft-line.svg)      | .arrowbox-out-upleft-line      | ![](./imgs/Icons/arrowbox-out-upright-line.svg)   | .arrowbox-out-upright-line   | ![](./imgs/Icons/arrowbox-out-downleft-line.svg)      | .arrowbox-out-downleft-line      | ![](./imgs/Icons/arrowbox-out-downright-line.svg)   | .arrowbox-out-downright-line   |
| ![](./imgs/Icons/arrowbox-in-up-line.svg)           | .arrowbox-in-up-line           | ![](./imgs/Icons/arrowbox-in-left-line.svg)       | .arrowbox-in-left-line       | ![](./imgs/Icons/arrowbox-in-right-line.svg)          | .arrowbox-in-right-line          | ![](./imgs/Icons/arrowbox-in-down-line.svg)         | .arrowbox-in-down-line         |
| ![](./imgs/Icons/arrowbox-in-upleft-line.svg)       | .arrowbox-in-upleft-line       | ![](./imgs/Icons/arrowbox-in-upright-line.svg)    | .arrowbox-in-upright-line    | ![](./imgs/Icons/arrowbox-in-downleft-line.svg)       | .arrowbox-in-downleft-line       | ![](./imgs/Icons/arrowbox-in-downright-line.svg)    | .arrowbox-in-downright-line    |

#### Number Icon Table

| Icon                                   | Style             | Icon                                   | Style             | Icon                                   | Style             | Icon                                   | Style             |
| :--:                                   | -----             | :--:                                   | -----             | :--:                                   | -----             | :--:                                   | -----             |
| ![](./imgs/Icons/num0-circle-line.svg) | .num0-circle-line | ![](./imgs/Icons/num0-circle-fill.svg) | .num0-circle-fill | ![](./imgs/Icons/num1-circle-line.svg) | .num1-circle-line | ![](./imgs/Icons/num1-circle-fill.svg) | .num1-circle-fill |
| ![](./imgs/Icons/num2-circle-line.svg) | .num2-circle-line | ![](./imgs/Icons/num2-circle-fill.svg) | .num2-circle-fill | ![](./imgs/Icons/num3-circle-line.svg) | .num3-circle-line | ![](./imgs/Icons/num3-circle-fill.svg) | .num3-circle-fill |
| ![](./imgs/Icons/num4-circle-line.svg) | .num4-circle-line | ![](./imgs/Icons/num4-circle-fill.svg) | .num4-circle-fill | ![](./imgs/Icons/num5-circle-line.svg) | .num5-circle-line | ![](./imgs/Icons/num5-circle-fill.svg) | .num5-circle-fill |
| ![](./imgs/Icons/num6-circle-line.svg) | .num6-circle-line | ![](./imgs/Icons/num6-circle-fill.svg) | .num6-circle-fill | ![](./imgs/Icons/num7-circle-line.svg) | .num7-circle-line | ![](./imgs/Icons/num7-circle-fill.svg) | .num7-circle-fill |
| ![](./imgs/Icons/num8-circle-line.svg) | .num8-circle-line | ![](./imgs/Icons/num8-circle-fill.svg) | .num8-circle-fill | ![](./imgs/Icons/num9-circle-line.svg) | .num9-circle-line | ![](./imgs/Icons/num9-circle-fill.svg) | .num9-circle-fill |

#### Person Icon Table

| Icon                                     | Style               | Icon                                     | Style               | Icon                                      | Style                | Icon                                      | Style                |
| :--:                                     | -----               | :--:                                     | -----               | :--:                                      | -----                | :--:                                      | -----                |
| ![](./imgs/Icons/man-fill.svg)           | .man-fill           | ![](./imgs/Icons/woman-fill.svg)         | .woman-fill         | ![](./imgs/Icons/person-line.svg)         | .person-line         | ![](./imgs/Icons/person-fill.svg)         | .person-fill         |
| ![](./imgs/Icons/person-plus-line.svg)   | .person-plus-line   | ![](./imgs/Icons/person-plus-fill.svg)   | .person-plus-fill   | ![](./imgs/Icons/person-dash-line.svg)    | .person-dash-line    | ![](./imgs/Icons/person-dash-fill.svg)    | .person-dash-fill    |
| ![](./imgs/Icons/person-check-line.svg)  | .person-check-line  | ![](./imgs/Icons/person-check-fill.svg)  | .person-check-fill  | ![](./imgs/Icons/person-x-line.svg)       | .person-x-line       | ![](./imgs/Icons/person-x-fill.svg)       | .person-x-fill       |
| ![](./imgs/Icons/people-line.svg)        | .people-line        | ![](./imgs/Icons/people-fill.svg)        | .people-fill        | ![](./imgs/Icons/person-contact-line.svg) | .person-contact-line | ![](./imgs/Icons/person-contact-fill.svg) | .person-contact-fill |
| ![](./imgs/Icons/person-card-line.svg)   | .person-card-line   | ![](./imgs/Icons/person-card-fill.svg)   | .person-card-fill   | ![](./imgs/Icons/person-names-line.svg)   | .person-names-line   | ![](./imgs/Icons/person-names-fill.svg)   | .person-names-fill   |
| ![](./imgs/Icons/person-circle-line.svg) | .person-circle-line | ![](./imgs/Icons/person-circle-fill.svg) | .person-circle-fill | ![](./imgs/Icons/user-line.svg)           | .user-line           |                                           |                      |

#### File Icon Table

| Icon                                    | Style              | Icon                                    | Style              | Icon                                     | Style               | Icon                                     | Style               |
| :--:                                    | -----              | :--:                                    | -----              | :--:                                     | -----               | :--:                                     | -----               |
| ![](./imgs/Icons/folder-close-line.svg) | .folder-close-line | ![](./imgs/Icons/folder-close-fill.svg) | .folder-close-fill | ![](./imgs/Icons/folder-open-line.svg)   | .folder-open-line   | ![](./imgs/Icons/folder-open-fill.svg)   | .folder-open-fill   |
| ![](./imgs/Icons/file-line.svg)         | .file-line         | ![](./imgs/Icons/file-fill.svg)         | .file-fill         | ![](./imgs/Icons/file-barchart-line.svg) | .file-barchart-line | ![](./imgs/Icons/file-barchart-fill.svg) | .file-barchart-fill |
| ![](./imgs/Icons/file-check-line.svg)   | .file-check-line   | ![](./imgs/Icons/file-check-fill.svg)   | .file-check-fill   | ![](./imgs/Icons/file-pdf-line.svg)      | .file-pdf-line      | ![](./imgs/Icons/file-pdf-fill.svg)      | .file-pdf-fill      |
| ![](./imgs/Icons/file-image-line.svg)   | .file-image-line    | ![](./imgs/Icons/file-image-fill.svg)  | .file-image-fill   | ![](./imgs/Icons/file-text-line.svg)     | .file-text-line     | ![](./imgs/Icons/file-text-fill.svg)     | .file-text-fill     |
| ![](./imgs/Icons/file-upload-line.svg)  | .file-upload-line  | ![](./imgs/Icons/file-upload-fill.svg)  | .file-upload-fill  | ![](./imgs/Icons/file-zip-line.svg)      | .file-zip-line      | ![](./imgs/Icons/file-zip-fill.svg)      | .file-zip-fill      |

#### Control Icon Table

| Icon                                       | Style                 | Icon                                       | Style                 | Icon                                      | Style                | Icon                                      | Style                |
| :--:                                       | -----                 | :--:                                       | -----                 | :--:                                      | -----                | :--:                                      | -----                |
| ![](./imgs/Icons/calendar-line.svg)        | .calendar-line        | ![](./imgs/Icons/calendar-fill.svg)        | .calendar-fill        | ![](./imgs/Icons/calendar-day-line.svg)   | .calendar-day-line   | ![](./imgs/Icons/calendar-day-fill.svg)   | .calendar-day-fill   |
| ![](./imgs/Icons/calendar-week-line.svg)   | .calendar-week-line   | ![](./imgs/Icons/calendar-week-fill.svg)   | .calendar-week-fill   | ![](./imgs/Icons/calendar-range-line.svg) | .calendar-range-line | ![](./imgs/Icons/calendar-range-fill.svg) | .calendar-range-fill |
| ![](./imgs/Icons/clipboard-check-line.svg) | .clipboard-check-line | ![](./imgs/Icons/clipboard-check-fill.svg) | .clipboard-check-fill | ![](./imgs/Icons/clipboard-data-line.svg) | .clipboard-data-line | ![](./imgs/Icons/clipboard-data-fill.svg) | .clipboard-data-fill |
| ![](./imgs/Icons/bookmark-line.svg)        | .bookmark-line        | ![](./imgs/Icons/bookmark-fill.svg)        | .bookmark-fill        | ![](./imgs/Icons/bookmarks-line.svg)      | .bookmarks-line      | ![](./imgs/Icons/bookmarks-fill.svg)      | .bookmarks-fill      |
| ![](./imgs/Icons/bookmark-check-line.svg)  | .bookmark-check-line  | ![](./imgs/Icons/bookmark-check-fill.svg)  | .bookmark-check-fill  | ![](./imgs/Icons/bookmark-x-line.svg)     | .bookmark-x-line     | ![](./imgs/Icons/bookmark-x-fill.svg)     | .bookmark-x-fill     |

#### Protection Icons Table

| Icon                                      | Style              | Icon                                    | Style              | Icon                                      | Style                | Icon                                      | Style                |
| :--:                                      | -----              | :--:                                    | -----              | :--:                                      | -----                | :--:                                      | -----                |
| ![](./imgs/Icons/shield-check-line.svg)   | .shield-check-line | ![](./imgs/Icons/shield-check-fill.svg) | .shield-check-fill | ![](./imgs/Icons/shield-lock-line.svg)    | .shield-lock-line    | ![](./imgs/Icons/shield-lock-fill.svg)    | .shield-lock-fill    |
| ![](./imgs/Icons/patch-check-line.svg)    | .patch-check-line  | ![](./imgs/Icons/patch-check-fill.svg)  | .patch-check-fill  | ![](./imgs/Icons/patch-question-line.svg) | .patch-question-line | ![](./imgs/Icons/patch-question-fill.svg) | .patch-question-fill |

#### Communication Icons Table

| Icon                                       | Style                 | Icon                                       | Style                 | Icon                                      | Style                | Icon                                      | Style                |
| :--:                                       | -----                 | :--:                                       | -----                 | :--:                                      | -----                | :--:                                      | -----                |
| ![](./imgs/Icons/phone-line.svg)           | .phone-line           | ![](./imgs/Icons/phone-fill.svg)           | .phone-fill           | ![](./imgs/Icons/phonebook-line.svg)      | .phonebook-line      | ![](./imgs/Icons/phonebook-fill.svg)      | .phonebook-fill      |
| ![](./imgs/Icons/mail-close-line.svg)      | .mail-close-line      | ![](./imgs/Icons/mail-close-fill.svg)      | .mail-close-fill      | ![](./imgs/Icons/chat-dots-line.svg)      | .chat-dots-line      | ![](./imgs/Icons/chat-dots-fill.svg)      | .chat-dots-fill      |
| ![](./imgs/Icons/chat-left-quote-line.svg) | .chat-left-quote-line | ![](./imgs/Icons/chat-left-quote-fill.svg) | .chat-left-quote-fill | ![](./imgs/Icons/chat-left-text-line.svg) | .chat-left-text-line | ![](./imgs/Icons/chat-left-text-fill.svg) | .chat-left-text-fill |
| ![](./imgs/Icons/emoji-neutral-line.svg)   | .emoji-neutral-line   | ![](./imgs/Icons/emoji-neutral-fill.svg)   | .emoji-neutral-fill   | ![](./imgs/Icons/emoji-smile-line.svg)    | .emoji-smile-line    | ![](./imgs/Icons/emoji-smile-fill.svg)    | .emoji-smile-fill    |
| ![](./imgs/Icons/emoji-frown-line.svg)     | .emoji-frown-line     | ![](./imgs/Icons/emoji-frown-fill.svg)     | .emoji-frown-fill     | ![](./imgs/Icons/emoji-surprise-line.svg) | .emoji-surprise-line | ![](./imgs/Icons/emoji-surprise-fill.svg) | .emoji-surprise-fill |

#### Cloud Icon Table

| Icon                                    | Style              | Icon                                    | Style              | Icon                                      | Style                | Icon                                      | Style                |
| :--:                                    | -----              | :--:                                    | -----              | :--:                                      | -----                | :--:                                      | -----                |
| ![](./imgs/Icons/cloud-line.svg)        | .cloud-line        | ![](./imgs/Icons/cloud-fill.svg)        | .cloud-fill        | ![](./imgs/Icons/cloud-slash-line.svg)    | .cloud-slash-line    | ![](./imgs/Icons/cloud-slash-fill.svg)    | .cloud-slash-fill    |
| ![](./imgs/Icons/cloud-upload-line.svg) | .cloud-upload-line | ![](./imgs/Icons/cloud-upload-fill.svg) | .cloud-upload-fill | ![](./imgs/Icons/cloud-download-line.svg) | .cloud-download-line | ![](./imgs/Icons/cloud-download-fill.svg) | .cloud-download-fill |

#### Map Icon Table

| Icon                                     | Style               | Icon                                       | Style                 | Icon                                  | Style            |
| :--:                                     | -----               | :--:                                       | -----                 | :--:                                  | -----            |
| ![](./imgs/Icons/map-line.svg)           | .map-line           | ![](./imgs/Icons/map-fill.svg)             | .map-fill             |                                       |                  |
| ![](./imgs/Icons/map-alt-line.svg)       | .map-alt-line       | ![](./imgs/Icons/map-alt-fill.svg)         | .map-alt-fill         |                                       |                  |
| ![](./imgs/Icons/mapmarker-line.svg)     | .mapmarker-line     | ![](./imgs/Icons/mapmarker-fill.svg)       | .mapmarker-fill       | ![](./imgs/Icons/mapmarker-color.svg) | .mapmarker-color |
| ![](./imgs/Icons/mappin-line.svg)        | .mappin-line        | ![](./imgs/Icons/mappin-fill.svg)          | .mappin-fill          | ![](./imgs/Icons/mappin-color.svg)    | .mappin-color    |
| ![](./imgs/Icons/mappointer-line.svg)    | .mappointer-line    | ![](./imgs/Icons/mappointer-fill.svg)      | .mappointer-fill      |                                       |                  |
| ![](./imgs/Icons/mapchart-line.svg)      | .mapchart-line      | ![](./imgs/Icons/mapchart-fill.svg)        | .mapchart-fill        |                                       |                  |
| ![](./imgs/Icons/globe-line.svg)         | .globe-line         | ![](./imgs/Icons/globe-alt-line.svg)       | .globe-alt-line       |                                       |                  |
| ![](./imgs/Icons/globe-america-fill.svg) | .globe-america-fill | ![](./imgs/Icons/globe-africa-fill.svg)    | .globe-africa-fill    |                                       |                  |
| ![](./imgs/Icons/globe-asia-fill.svg)    | .globe-asia-fill    | ![](./imgs/Icons/globe-australia-fill.svg) | .globe-australia-fill |                                       |                  |
| ![](./imgs/Icons/h-circle-line.svg)      | .h-circle-line      | ![](./imgs/Icons/h-circle-fill.svg)        | .h-circle-fill        |                                       |                  |
| ![](./imgs/Icons/highway-66-fill.svg)    | .highway-66-fill    | ![](./imgs/Icons/highway-75-fill.svg)      | .highway-75-fill      | ![](./imgs/Icons/highway-94-fill.svg) | .highway-94-fill |

#### Device Icon Table

| Icon                                   | Style             | Icon                                   | Style             | Icon                                | Style          | Icon                                  | Style            |
| :--:                                   | -----             | :--:                                   | -----             | :--:                                | -----          | :--:                                  | -----            |
| ![](./imgs/Icons/devices-line.svg)     | .devices-line     | ![](./imgs/Icons/laptop-line.svg)      | .laptop-line      | ![](./imgs/Icons/mobile-line.svg)   | .mobile-line   | ![](./imgs/Icons/mobile-alt-line.svg) | .mobile-alt-line |
| ![](./imgs/Icons/mobile-apps-line.svg) | .mobile-apps-line | ![](./imgs/Icons/mobile-apps-fill.svg) | .mobile-apps-fill | ![](./imgs/Icons/computer-line.svg) | .computer-line | ![](./imgs/Icons/camera-fill.svg)     | .camera-fill     |

#### Brand Icon Table

| Icon                               | Style         | Icon                             | Style       | Icon                              | Style        |
| :--:                               | -----         | :--:                             | -----       | :--:                              | -----        |
| ![](./imgs/Icons/android-fill.svg) | .android-fill | ![](./imgs/Icons/apple-fill.svg) | .apple-fill | ![](./imgs/Icons/huawei-fill.svg) | .huawei-fill |

#### Apps Icons Table

| Icon                                     | Style               | Icon                                        | Style                  | Icon                                    | Style              | Icon                                     | Style               |
| :--:                                     | -----               | :--:                                        | -----                  | :--:                                    | -----              | :--:                                     | -----               |
| ![](./imgs/Icons/app-line.svg)           | .app-line           | ![](./imgs/Icons/app-notification-line.svg) | .app-notification-line | ![](./imgs/Icons/acrobat-fill.svg)      | .acrobat-fill      | ![](./imgs/Icons/acrobat-color.svg)      | .acrobat-color      |      
| ![](./imgs/Icons/applemail-fill.svg)     | .applemail-fill     | ![](./imgs/Icons/applemail-color.svg)       | .applemail-color       | ![](./imgs/Icons/appstore-fill.svg)     | .appstore-fill     | ![](./imgs/Icons/appstore-color.svg)     | .appstore-color     |  
| ![](./imgs/Icons/appstore-alt-fill.svg)  | .appstore-alt-fill  | ![](./imgs/Icons/appstore-alt-color.svg)    | .appstore-alt-color    | ![](./imgs/Icons/bcardy-fill.svg)       | .bcardy-fill       | ![](./imgs/Icons/bcardy-color.svg)       | .bcardy-color       |  
| ![](./imgs/Icons/behance-fill.svg)       | .behance-fill       | ![](./imgs/Icons/behance-color.svg)         | .behance-color         | ![](./imgs/Icons/facebook-fill.svg)     | .facebook-fill     | ![](./imgs/Icons/facebook-color.svg)     | .facebook-color     |  
| ![](./imgs/Icons/facebook-alt-fill.svg)  | .facebook-alt-fill  | ![](./imgs/Icons/facebook-alt-color.svg)    | .facebook-alt-color    | ![](./imgs/Icons/github-fill.svg)       | .github-fill       | ![](./imgs/Icons/github-color.svg)       | .github-color       |  
| ![](./imgs/Icons/gmail-fill.svg)         | .gmail-fill         | ![](./imgs/Icons/gmail-color.svg)           | .gmail-color           | ![](./imgs/Icons/googlemaps-fill.svg)   | .googlemaps-fill   | ![](./imgs/Icons/googlemaps-color.svg)   | .googlemaps-color   |  
| ![](./imgs/Icons/googleplay-fill.svg)    | .googleplay-fill    | ![](./imgs/Icons/googleplay-color.svg)      | .googleplay-color      | ![](./imgs/Icons/instagram-fill.svg)    | .instagram-fill    | ![](./imgs/Icons/instagram-color.svg)    | .instagram-color    |  
| ![](./imgs/Icons/instagram-alt-fill.svg) | .instagram-alt-fill | ![](./imgs/Icons/instagram-alt-color.svg)   | .instagram-alt-color   | ![](./imgs/Icons/line-fill.svg)         | .line-fill         | ![](./imgs/Icons/line-color.svg)         | .line-color         |  
| ![](./imgs/Icons/line-alt-fill.svg)      | .line-alt-fill      | ![](./imgs/Icons/line-alt-color.svg)        | .line-alt-color        | ![](./imgs/Icons/linkedin-fill.svg)     | .linkedin-fill     | ![](./imgs/Icons/linkedin-color.svg)     | .linkedin-color     |  
| ![](./imgs/Icons/linkedin-alt-fill.svg)  | .linkedin-alt-fill  | ![](./imgs/Icons/linkedin-alt-color.svg)    | .linkedin-alt-color    | ![](./imgs/Icons/messenger-fill.svg)    | .messenger-fill    | ![](./imgs/Icons/messenger-color.svg)    | .messenger-color    |   
| ![](./imgs/Icons/outlook-fill.svg)       | .outlook-fill       | ![](./imgs/Icons/outlook-color.svg)         | .outlook-color         | ![](./imgs/Icons/samsungemail-fill.svg) | .samsungemail-fill | ![](./imgs/Icons/samsungemail-color.svg) | .samsungemail-color |
| ![](./imgs/Icons/skype-fill.svg)         | .skype-fill         | ![](./imgs/Icons/skype-color.svg)           | .skype-color           | ![](./imgs/Icons/telegram-fill.svg)     | .telegram-fill     | ![](./imgs/Icons/telegram-color.svg)     | .telegram-color     |
| ![](./imgs/Icons/telegram-alt-fill.svg)  | .telegram-alt-fill  | ![](./imgs/Icons/telegram-alt-color.svg)    | .telegram-alt-color    | ![](./imgs/Icons/tiktok-fill.svg)       | .tiktok-fill       | ![](./imgs/Icons/tiktok-color.svg)       | .tiktok-color       |
| ![](./imgs/Icons/twitter-fill.svg)       | .twitter-fill       | ![](./imgs/Icons/twitter-color.svg)         | .twitter-color         | ![](./imgs/Icons/twitter-alt-fill.svg)  | .twitter-alt-fill  | ![](./imgs/Icons/twitter-alt-color.svg)  | .twitter-alt-color  |
| ![](./imgs/Icons/twitter-x-fill.svg)     | .twitter-x-fill     | ![](./imgs/Icons/twitter-x-color.svg)       | .twitter-x-color       | ![](./imgs/Icons/vimeo-fill.svg)        | .vimeo-fill        | ![](./imgs/Icons/vimeo-color.svg)        | .vimeo-color        |
| ![](./imgs/Icons/vimeo-alt-fill.svg)     | .vimeo-alt-fill     | ![](./imgs/Icons/vimeo-alt-color.svg)       | .vimeo-alt-color       | ![](./imgs/Icons/yahoo-fill.svg)        | .yahoo-fill        | ![](./imgs/Icons/yahoo-color.svg)        | .yahoo-color        |
| ![](./imgs/Icons/yahoo-alt-fill.svg)     | .yahoo-alt-fill     | ![](./imgs/Icons/yahoo-alt-color.svg)       | .yahoo-alt-color       | ![](./imgs/Icons/youtube-fill.svg)      | .youtube-fill      | ![](./imgs/Icons/youtube-color.svg)      | .youtube-color      |
| ![](./imgs/Icons/whatsapp-fill.svg)      | .whatsapp-fill      | ![](./imgs/Icons/whatsapp-color.svg)        | .whatsapp-color        | ![](./imgs/Icons/whatsapp-alt-fill.svg) | .whatsapp-alt-fill | ![](./imgs/Icons/whatsapp-alt-color.svg) | .whatsapp-alt-color |

#### Options Icon Table

| Icon                                   | Style             | Icon                                       | Style                 | Icon                                        | Style                  | Icon                                        | Style                  |
| :--:                                   | -----             | :--:                                       | -----                 | :--:                                        | -----                  | :--:                                        | -----                  |
| ![](./imgs/Icons/at-line.svg)          | .at-line          | ![](./imgs/Icons/at-lg-line.svg)           | .at-lg-line           | ![](./imgs/Icons/award-line.svg)            | .award-line            | ![](./imgs/Icons/award-fill.svg)            | .award-fill            |
| ![](./imgs/Icons/basket-line.svg)      | .basket-line      | ![](./imgs/Icons/basket-fill.svg)          | .basket-fill          | ![](./imgs/Icons/bell-line.svg)             | .bell-line             | ![](./imgs/Icons/bell-fill.svg)             | .bell-fill             |
| ![](./imgs/Icons/bluetooth-line.svg)   | .bluetooth-line   | ![](./imgs/Icons/bluetooth-fill.svg)       | .bluetooth-fill       | ![](./imgs/Icons/bug-line.svg)              | .bug-line              | ![](./imgs/Icons/bug-fill.svg)              | .bug-fill              |
| ![](./imgs/Icons/cash-line.svg)        | .cash-line        | ![](./imgs/Icons/cash-alt-fill.svg)        | .cash-alt-fill        | ![](./imgs/Icons/circle-line.svg)           | .circle-line           | ![](./imgs/Icons/circle-fill.svg)           | .circle-fill           |
| ![](./imgs/Icons/contacts-line.svg)    | .contacts-line    | ![](./imgs/Icons/contacts-fill.svg)        | .contacts-fill        | ![](./imgs/Icons/copy-link-line.svg)        | .copy-link-line        | ![](./imgs/Icons/copy-link-fill.svg)        | .copy-link-fill        |
| ![](./imgs/Icons/easel-line.svg)       | .easel-line       | ![](./imgs/Icons/easel-fill.svg)           | .easel-fill           | ![](./imgs/Icons/eye-line.svg)              | .eye-line              | ![](./imgs/Icons/eye-fill.svg)              | .eye-fill              |
| ![](./imgs/Icons/eye-slash-line.svg)   | .eye-slash-line   | ![](./imgs/Icons/eye-slash-fill.svg)       | .eye-slash-fill       | ![](./imgs/Icons/flag-line.svg)             | .flag-line             | ![](./imgs/Icons/flag-fill.svg)             | .flag-fill             |
| ![](./imgs/Icons/floppy-line.svg)      | .floppy-line      | ![](./imgs/Icons/floppy-fill.svg)          | .floppy-fill          | ![](./imgs/Icons/gear-line.svg)             | .gear-line             | ![](./imgs/Icons/gear-fill.svg)             | .gear-fill             |
| ![](./imgs/Icons/gears-line.svg)       | .gears-line       | ![](./imgs/Icons/gears-fill.svg)           | .gears-fill           | ![](./imgs/Icons/grid3x2-line.svg)          | .grid3x2-line          | ![](./imgs/Icons/grid3x3-line.svg)          | .grid3x3-line          |
| ![](./imgs/Icons/health-line.svg)      | .health-line      | ![](./imgs/Icons/health-fill.svg)          | .health-fill          | ![](./imgs/Icons/home-line.svg)             | .home-line             | ![](./imgs/Icons/home-fill.svg)             | .home-fill             |
| ![](./imgs/Icons/image-line.svg)       | .image-line       | ![](./imgs/Icons/image-fill.svg)           | .image-fill           | ![](./imgs/Icons/image-alt-line.svg)        | .image-alt-line        | ![](./imgs/Icons/images-line.svg)           | .images-line           |
| ![](./imgs/Icons/key-line.svg)         | .key-line         | ![](./imgs/Icons/key-fill.svg)             | .key-fill             | ![](./imgs/Icons/keyboard-line.svg)         | .keyboard-line         | ![](./imgs/Icons/keyboard-fill.svg)         | .keyboard-fill         |
| ![](./imgs/Icons/layers-line.svg)      | .layers-line      | ![](./imgs/Icons/layers-fill.svg)          | .layers-fill          | ![](./imgs/Icons/lightbulb-line.svg)        | .lightbulb-line        | ![](./imgs/Icons/lightbulb-fill.svg)        | .lightbulb-fill        |
| ![](./imgs/Icons/lock-line.svg)        | .lock-line        | ![](./imgs/Icons/lock-fill.svg)            | .lock-fill            | ![](./imgs/Icons/mailbox-line.svg)          | .mailbox-line          | ![](./imgs/Icons/mailbox-fill.svg)          | .mailbox-fill          |
| ![](./imgs/Icons/moon-line.svg)        | .moon-line        | ![](./imgs/Icons/moon-fill.svg)            | .moon-fill            | ![](./imgs/Icons/moon-stars-line.svg)       | .moon-stars-line       | ![](./imgs/Icons/moon-stars-fill.svg)       | .moon-stars-fill       |
| ![](./imgs/Icons/mortarboard-line.svg) | .mortarboard-line | ![](./imgs/Icons/mortarboard-fill.svg)     | .mortarboard-fill     | ![](./imgs/Icons/piechart-line.svg)         | .piechart-line         | ![](./imgs/Icons/piechart-fill.svg)         | .piechart-fill         |
| ![](./imgs/Icons/palette-line.svg)     | .palette-line     | ![](./imgs/Icons/palette-fill.svg)         | .palette-fill         | ![](./imgs/Icons/pen-line.svg)              | .pen-line              | ![](./imgs/Icons/pen-fill.svg)              | .pen-fill              |
| ![](./imgs/Icons/pencil-line.svg)      | .pencil-line      | ![](./imgs/Icons/pencil-fill.svg)          | .pencil-fill          | ![](./imgs/Icons/pin-line.svg)              | .pin-line              | ![](./imgs/Icons/pin-fill.svg)              | .pin-fill              |
| ![](./imgs/Icons/plant-line.svg)       | .plant-line       | ![](./imgs/Icons/plant-fill.svg)           | .plant-fill           | ![](./imgs/Icons/play-line.svg)             | .play-line             | ![](./imgs/Icons/play-fill.svg)             | .play-fill             |
| ![](./imgs/Icons/play-circle-line.svg) | .play-circle-line | ![](./imgs/Icons/play-circle-fill.svg)     | .play-circle-fill     | ![](./imgs/Icons/send-line.svg)             | .send-line             | ![](./imgs/Icons/send-fill.svg)             | .send-fill             |
| ![](./imgs/Icons/separationh-line.svg) | .separationh-line | ![](./imgs/Icons/separationv-line.svg)     | .separationv-line     | ![](./imgs/Icons/share-line.svg)            | .share-line            | ![](./imgs/Icons/share-fill.svg)            | .share-fill            |
| ![](./imgs/Icons/shop-line.svg)        | .shop-line        | ![](./imgs/Icons/shop-alt-fill.svg)        | .shop-alt-fill        | ![](./imgs/Icons/signpost-line.svg)         | .signpost-line         | ![](./imgs/Icons/signpost-fill.svg)         | .signpost-fill         |
| ![](./imgs/Icons/sim-line.svg)         | .sim-line         | ![](./imgs/Icons/sim-fill.svg)             | .sim-fill             | ![](./imgs/Icons/star-line.svg)             | .star-line             | ![](./imgs/Icons/star-fill.svg)             | .star-fill             |
| ![](./imgs/Icons/star-circle-line.svg) | .star-circle-line | ![](./imgs/Icons/star-circle-fill.svg)     | .star-circle-fill     | ![](./imgs/Icons/stoplights-line.svg)       | .stoplights-line       | ![](./imgs/Icons/stoplights-fill.svg)       | .stoplights-fill       |
| ![](./imgs/Icons/thermometer-line.svg) | .thermometer-line | ![](./imgs/Icons/thermometer-low-line.svg) | .thermometer-low-line | ![](./imgs/Icons/thermometer-half-line.svg) | .thermometer-half-line | ![](./imgs/Icons/thermometer-high-line.svg) | .thermometer-high-line |
| ![](./imgs/Icons/time-line.svg)        | .time-line        | ![](./imgs/Icons/time-fill.svg)            | .time-fill            | ![](./imgs/Icons/trash-line.svg)            | .trash-line            | ![](./imgs/Icons/trash-fill.svg)            | .trash-fill            |
| ![](./imgs/Icons/trophy-line.svg)      | .trophy-line      | ![](./imgs/Icons/trophy-fill.svg)          | .trophy-fill          | ![](./imgs/Icons/unlock-line.svg)           | .unlock-line           | ![](./imgs/Icons/unlock-fill.svg)           | .unlock-fill           |
| ![](./imgs/Icons/wallet-line.svg)      | .wallet-line      | ![](./imgs/Icons/wallet-fill.svg)          | .wallet-fill          | ![](./imgs/Icons/wifi-on-line.svg)          | .wifi-on-line          | ![](./imgs/Icons/wifi-off-line.svg)         | .wifi-off-line         |
| ![](./imgs/Icons/window-app-line.svg)  | .window-app-line  | ![](./imgs/Icons/window-app-fill.svg)      | .window-app-fill      | ![](./imgs/Icons/wrench-line.svg)           | .wrench-line           | ![](./imgs/Icons/wrench-fill.svg)           | .wrench-fill           |
| ![](./imgs/Icons/zoomin-line.svg)      | .zoomin-line      | ![](./imgs/Icons/zoomout-line.svg)         | .zoomout-line         |

#### Composer Icon Table

| Icon                                         | Style                   | Icon                                          | Style                    | Icon                                   | Style             | Icon                                    | Style              |
| :--:                                         | -----                   | :--:                                          | -----                    | :--:                                   | -----             | :--:                                    | -----              |
| ![](./imgs/Icons/doublequotes-left-fill.svg) | .doublequotes-left-fill | ![](./imgs/Icons/doublequotes-right-fill.svg) | .doublequotes-right-fill | ![](./imgs/Icons/indent-left-line.svg) | .indent-left-line | ![](./imgs/Icons/indent-right-line.svg) | .indent-right-line |
| ![](./imgs/Icons/link-line.svg)              | .link-line              | ![](./imgs/Icons/link-alt-line.svg)           | .link-alt-line           | ![](./imgs/Icons/list-check-line.svg)  | .list-check-line  | ![](./imgs/Icons/list-number-line.svg)  | .list-number-line  |
| ![](./imgs/Icons/list-stars-line.svg)        | .list-stars-line        | ![](./imgs/Icons/list-unorderd-line.svg)      | .list-unorderd-line      | ![](./imgs/Icons/textleft-line.svg)    | .textleft-line    | ![](./imgs/Icons/textright-line.svg)    | .textright-line    |

#### Other Icons Table

| Icon                                        | Style                  | Icon                                        | Style                  | Icon                                        | Style                  | Icon                                  | Style            |
| :---:                                       | ------                 | :---:                                       | ------                 | :---:                                       | ------                 | :---:                                 | ------           |
| ![](./imgs/Icons/ai-fill.svg)               | .ai-fill               | ![](./imgs/Icons/bullseye-line.svg)         | .bullseye-line         | ![](./imgs/Icons/columnsgap-line.svg)       | .columnsgap-line       | ![](./imgs/Icons/dart-fill.svg)       | .dart-fill       |
| ![](./imgs/Icons/datasheet-line.svg)        | .datasheet-line        | ![](./imgs/Icons/datasheet-health-line.svg) | .datasheet-health-line | ![](./imgs/Icons/hash-line.svg)             | .hash-line             | ![](./imgs/Icons/headphones-line.svg) | .headphones-line |
| ![](./imgs/Icons/headset-line.svg)          | .headset-line          | ![](./imgs/Icons/lab-fill.svg)              | .lab-fill              | ![](./imgs/Icons/logout-line.svg)           | .logout-line           | ![](./imgs/Icons/medal-line.svg)      | .medal-line      |
| ![](./imgs/Icons/menu-line.svg)             | .menu-line             | ![](./imgs/Icons/pencil-square-fill.svg)    | .pencil-square-fill    | ![](./imgs/Icons/polygon-editable-line.svg) | .polygon-editable-line | ![](./imgs/Icons/qr-line.svg)         | .qr-line         |
| ![](./imgs/Icons/qr-scan-line.svg)          | .qr-scan-line          | ![](./imgs/Icons/quote-fill.svg)            | .quote-fill            | ![](./imgs/Icons/rotate-line.svg)           | .rotate-line           | ![](./imgs/Icons/search-line.svg)     | .search-line     |
| ![](./imgs/Icons/speedometer-line.svg)      | .speedometer-line      | ![](./imgs/Icons/translate-fill.svg)        | .translate-fill        | ![](./imgs/Icons/web-line.svg)              | .web-line              | ![](./imgs/Icons/universal-line.svg)  | .universal-line  |
| ![](./imgs/Icons/universal-circle-line.svg) | .universal-circle-line |

#### Animated Icons Table

| Icon                                          | Style                    | Icon                                         | Style                   | Icon                                             | Style                       |
| :--:                                          | -----                    | :--:                                         | -----                   | :--:                                             | -----                       |
| ![](./imgs/Icons/animation-loarder-comet.svg) | .animation-loarder-comet | ![](./imgs/Icons/animation-loarder-ring.svg) | .animation-loarder-ring | ![](./imgs/Icons/animation-loarder-ringpath.svg) | .animation-loarder-ringpath |

#### CSS Variables

| Variable                  | Description |
| ------------------------- | ----------- |
| `--wui-icon-size`         |
| `--wui-icon-smallsize`    |
| `--wui-icon-bgcolor-out`  |
| `--wui-icon-bgcolor-over` |

#### Implementation

CSS settings:

```css
:root {
	--wui-icon-size: 24px;
	--wui-icon-smallsize: 14px;
	--wui-icon-bgcolor-out: rgb(from #353a40 r g b / 70%);
	--wui-icon-bgcolor-over: #353a40;
}
```

CSS code:

```css
nav {
	display: flex;
}

.my-icon {
	width: 24px;
	height: 24px;
	margin: 10px;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Icon/WUIIcon-0.1.css">
```

HTML code:

```html
<nav>
	<div class="my-icon">
		<div class="wui-icon patch-check-fill"></div>
	</div>
	<div class="my-icon">
		<div class="wui-icon patch-question-fill"></div>
	</div>
</nav>
```

> [!TIP]
> You can check out this working example on CodePen at the link: [https://codepen.io/wuijsproject/pen/gbMayJO](https://codepen.io/wuijsproject/pen/gbMayJO).

<a name="WUIFade"></a>

### WUIFade

Version: `0.1`

Tool for fading out and fading control in HTML elements with opacity.

It is a static class that does not have a constructor or properties.

#### Sources

| Type | File |
| ---- | ---- |
| JS   | [src/WUI/Fade/WUIFade-0.1.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Fade/WUIFade-0.1.js) |

#### Methods

##### Static methods of the `WUIFade` class:

One way to use the library is by calling static methods directly on the `WUIFade` class:

| Method | Return type | Description |
| ------ | ----------- | ----------- |
| in     | `void`      | `in(element[, options])`<br><br>Arguments:<br>**• element:** `HTMLElement` <br>**• options:** `object` *optional*<br><br>Execute the fadein transition. |
| out    | `void`      | `out(element[, options])`<br><br>Arguments:<br>**• element:** `HTMLElement` <br>**• options:** `object` *optional*<br><br>Execute the fadeout transition. |

##### Extended methods of the `HTMLElement` class:

Another alternative way is through extended methods of the `HTMLElement` class through its prototype:

| Method.    | Return type | Description |
| ---------- | ----------- | ----------- |
| wuiFadein  | `void`      | `wuiFadein([options])`<br><br>Arguments:<br>**• options:** `object` *optional*<br><br>Execute the fadein transition. |
| wuiFadeout | `void`      | `wuiFadeout([options])`<br><br>Arguments:<br>**• options:** `object` *optional*<br><br>Execute the fadeout transition. |

> [!IMPORTANT]
> Each method call mode is performed on different types of classes, the first is signaled on `WUIFade`, while the second on `HTMLElement`.

##### Options

| Option  | Type      | Default value | Description |
| ------- | --------- | ------------- | ----------- |
| delay   | `number`  | `400`         | Define the time it will take for the transition effect  in and out, measured in milliseconds. |
| display | `string`  | `"block"`     | Sets the value of the CSS `display` property of the HTML element on which the transition effect is executed, once the incoming transition ends. |
| force   | `boolean` | `false`       | Both the entrance and exit effects are executed as long as the CSS `display` property is different from `options.display` and `none`, respectively. The `force` option ignores this validation. |

#### Implementation

CSS code:

```CSS
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
}

.my-link {
	margin: 0 10px;
	text-decoration: none;
}

.my-element {
	display: none;
	width: 64px;
	height: 64px;
	margin: 10px;
	background-color: red;
}
```

HTML head:

```html
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Fade/WUIFade-0.1.js"></script>
```

HTML code:

```html
<a href="javascript:fadein();" class="my-link">fade-in</a>
<a href="javascript:fadeout();" class="my-link">fade-out</a>
<div id="myElement" class="my-element"></div>
```

JS code:
```js
const element = document.getElementById("myElement");
const options = {
	delay: 200,
	//display: "block"
};
const fadein = () => {
	element.wuiFadein(options); 
	// o alternativamente
	//WUIFade.in(element, options);
}
const fadeout = () => {
	element.wuiFadeout(options); 
	// o alternativamente
	//WUIFade.out(element, options);
}
```

> [!TIP]
> You can check out this working example on CodePen at the link: [https://codepen.io/wuijsproject/pen/LEZpvoX](https://codepen.io/wuijsproject/pen/LEZpvoX).

<a name="WUILoader"></a>

### WUILoader

Version: `0.2`

Component for the implementation of loading animations.

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/WUI/Loader/WUILoader-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Loader/WUILoader-0.2.css) |
| JS   | [src/WUI/Loader/WUILoader-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Loader/WUILoader-0.2.js) |

#### Constructor

| Type       | Description |
| ---------- | ----------- |
| WUILoader  | `WUILoader([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property  | Type     | Default value   | Description |
| --------- | -------- | --------------- | ----------- |
| selector  | `string` | `".wui-loader"` | (get/set)<br><br>CSS selector that defines the HTML element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| style     | `string` | `"ring"`        | (get/set)<br><br>Loading animation style.<br><br>Values:<br>• `"ring"`, ring.<br>• `"dualring"`, dual ring.<br>• `"spinner"`, spinner.<br>• `"roller"`, roller.<br>• `"ellipsis"`, dots.<br>• `"grid"`, grid. |
| size      | `number` | `60`            | (get/set)<br><br>Loading animation size in pixels. |
| dataStyle | `string` | `"style"`       | (get/set)<br><br>Name of the `data-*` attribute that contains the value of the `style` property. |
| dataSize  | `string` | `"size"`        | (get/set)<br><br>Name of the `data-*` attribute that contains the value of the `size` property. |

#### Methods

| Method      | Return type | Description |
| ----------- | ----------- | ----------- |
| getElements | `NodeList`  | `getElements()`<br><br>Returns a list of HTML elements with the containers of the loading animation objects. |
| init        | `void`      | `init()`<br><br>Initializes the loading animation objects. |

<a name="WUITooltip"></a>
<a name="WUIModal"></a>
<a name="WUIModalSelector"></a>
<a name="WUISlider"></a>
<a name="WUIPaging"></a>
<a name="WUITabs"></a>
<a name="WUIMenubar"></a>

### WUIMenubar

Versión: `0.1`

Component for the implementation of menu bars.

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/WUI/Menubar/WUIMenubar-0.1.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Menubar/WUIMenubar-0.1.css) |
| JS   | [src/WUI/Menubar/WUIMenubar-0.1.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Menubar/WUIMenubar-0.1.js) |

#### Constructor

| Type       | Description |
| ---------- | ----------- |
| WUIMenubar | `WUIMenubar([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property      | Type       | Default value.   | Description |
| ------------- | ---------- | ---------------- | ----------- |
| selector      | `string`   | `".wui-menubar"` | (get/set)<br><br>CSS selector that defines the HTML element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| expansive     | `boolean`  | `true`           | (get/set)<br><br>Define whether the menu expands.. The function of expansion is not visible in mobile mode (when the screen width is less than `768px`). |
| autoClose     | `boolean`  | `true`           | (get/set)<br><br>Defines whether the submenu closes automatically when a button within it is clicked. |
| topButtons    | `array`    | `[]`             | (get/set)<br><br>List of menu top buttons, as defined by **Button Options**. These buttons are not visible in mobile mode (when the screen width is less than `768px`). |
| mainButtons   | `array`    | `[]`             | (get/set)<br><br>List of menu main buttons, as defined by **Button Options**. |
| bottomButtons | `array`    | `[]`             | (get/set)<br><br>List of menu bottom buttons, as defined by **Button Options**. These buttons are not visible in mobile mode (when the screen width is less than `768px`). |
| onClick       | `function` | `null`           | (get/set)<br><br>Function called when a button is clicked. The function receives as parameters:<br><br>**• id:** `string`, unique button identifier. |
| onSelect      | `function` | `null`           | (get/set)<br><br>Function called when a button with the `selectable` property is selected. The function receives as parameters:<br><br>**• id:** `string`, unique button identifier. |

#### Button Options

| Property     | Type       | Default value | Description |
| ------------ | ---------- | ------------- | ----------- |
| id           | `string`   | `undefined`   | Unique button identifier. |
| iconImage    | `string`   | `undefined`   | URL of the image associated with the menu button. |
| iconClass    | `string`   | `undefined`   | CSS styles that define the menu button icon. This option can optionally be used with the [WUIIcon](#WUIIcon) library by using the `wui-icon` style in conjunction with a specific icon style. |
| label        | `string`   | `""`          | Label text associated with the menu button. |
| radioMode    | `boolean`  | `true`        | Defines whether the button behaves like a radio mode button. |
| selectable   | `boolean`  | `true`        | Defines whether the button is selectable. |
| hoverable    | `boolean`  | `true`        | Defines whether the button reacts to the `hover` event. |
| tooltipable  | `boolean`  | `true`        | Defines whether the button displays a tooltip when collapsed and the screen width is greater than or equal to `768px`. |
| selected     | `boolean`  | `false`       | Defines whether the button is selected. |
| enabled      | `boolean`  | `true`        | Defines whether the button is enabled. |
| onClick      | `function` | `null`        | Function called when the button is clicked. If defined, this option takes precedence over the `onClick` property. |

#### Methods

| Method       | Return type   | Description |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| getButton    | `object`      | `getButton(id)`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br><br>Returns the menu button according to the unique button identifier passed as a argument. |
| init         | `void`        | `init()`<br><br>Initializes the object. |
| selectButton | `void`        | `selectButton(id[, selected[, runCallback]])`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br>**• selected:** `boolean`, button selection state. The default value is `true`. <br>**• runCallback:** `boolean`, run the `onClick` and `onSelect` callbacks. The default value is `true`.<br><br>Select or unselect a menu button. |
| enableButton | `void`        | `enableButton(id[, enabled])`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br>**• enabled:** `boolean`, button enable state. The default value is `true`.<br><br>Enables or disables a menu button. |
| setPhoto     | `void`        | `setPhoto(id[, src])`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br>**• src:** `string`, image source. The default value is `""`.<br><br>Upload an image above a button icon. |
| setBubble    | `void`        | `setBubble(id, number)`<br><br>Arguments:<br>**• id:** `string`, unique button identifier.<br>**• number:** `number`, number that will appear in the bubble. The value `0` hides the bubble. |
| close        | `void`        | `close()`<br><br>Close the submenu if it is open. |
| destroy      | `void`        | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                          | Description |
| ------------------------------------------------- | ----------- |
| `--wui-menubar-shadowcolor`                       | 
| `--wui-menubar-margin`                            | 
| `--wui-menubar-borderradius`                      | 
| `--wui-menubar-bar-bordercolor`                   | 
| `--wui-menubar-bar-bgcolor-top`                   | 
| `--wui-menubar-bar-bgcolor-bottom`                | 
| `--wui-menubar-bar-button-bgcolor-out`            | 
| `--wui-menubar-bar-button-bgcolor-over`           | 
| `--wui-menubar-bar-button-bgcolor-selected`       | 
| `--wui-menubar-bar-button-bgcolor-disabled`       | 
| `--wui-menubar-bar-button-iconsize`               | 
| `--wui-menubar-bar-button-iconcolor-out`          | 
| `--wui-menubar-bar-button-iconcolor-over`         | 
| `--wui-menubar-bar-button-iconcolor-selected`     | 
| `--wui-menubar-bar-button-iconcolor-disabled`     | 
| `--wui-menubar-bar-button-textcolor-out`          | 
| `--wui-menubar-bar-button-textcolor-over`         | 
| `--wui-menubar-bar-button-textcolor-selected`     | 
| `--wui-menubar-bar-button-textcolor-disabled`     | 
| `--wui-menubar-expander-bgcolor-out`              | 
| `--wui-menubar-expander-bgcolor-over`             | 
| `--wui-menubar-expander-iconsize`                 | 
| `--wui-menubar-expander-iconcolor-out`            | 
| `--wui-menubar-expander-iconcolor-over`           | 
| `--wui-menubar-expander-expandicon-src`           | 
| `--wui-menubar-expander-contracticon-src`         | 
| `--wui-menubar-opener-iconsize`           | 
| `--wui-menubar-opener-openicon-src`       | 
| `--wui-menubar-submenu-bordercolor`               | 
| `--wui-menubar-submenu-bgcolor`                   | 
| `--wui-menubar-submenu-button-bgcolor-out`        | 
| `--wui-menubar-submenu-button-bgcolor-over`       | 
| `--wui-menubar-submenu-button-bgcolor-selected`   | 
| `--wui-menubar-submenu-button-bgcolor-disabled`   | 
| `--wui-menubar-submenu-button-iconsize`           | 
| `--wui-menubar-submenu-button-iconcolor-out`      | 
| `--wui-menubar-submenu-button-iconcolor-over`     | 
| `--wui-menubar-submenu-button-iconcolor-selected` | 
| `--wui-menubar-submenu-button-iconcolor-disabled` | 
| `--wui-menubar-submenu-button-textcolor-out`      | 
| `--wui-menubar-submenu-button-textcolor-over`     | 
| `--wui-menubar-submenu-button-textcolor-selected` | 
| `--wui-menubar-submenu-button-textcolor-disabled` | 
| `--wui-menubar-tooltip-bgcolor`                   | 
| `--wui-menubar-tooltip-textcolor`                 | 
| `--wui-menubar-bubble-bgcolor`                    | 
| `--wui-menubar-bubble-textcolor`                  | 

#### Implementation

CSS settings:

```css
:root {

	/* wui-icon */

	--wui-icon-size: 24px;
	--wui-icon-smallsize: 14px;
	--wui-icon-bgcolor-out: rgb(from #353a40 r g b / 70%);
	--wui-icon-bgcolor-over: #353a40;

	/* wui-menubar */

	--wui-menubar-shadowcolor: #959da5;
	--wui-menubar-margin: 10px;
	--wui-menubar-borderradius: 10px;
	--wui-menubar-bar-bordercolor: #f0f0f3;
	--wui-menubar-bar-bgcolor-top: #f0f0f3;
	--wui-menubar-bar-bgcolor-bottom: #f0f0f3;
	--wui-menubar-bar-button-bgcolor-out: transparent;
	--wui-menubar-bar-button-bgcolor-over: rgb(from #d5dce3 r g b / 40%);
	--wui-menubar-bar-button-bgcolor-selected: #1e90ff;
	--wui-menubar-bar-button-bgcolor-disabled: transparent;
	--wui-menubar-bar-button-iconsize: 24px;
	--wui-menubar-bar-button-iconcolor-out: rgb(from #353a40 r g b / 70%);
	--wui-menubar-bar-button-iconcolor-over: #353a40;
	--wui-menubar-bar-button-iconcolor-selected: #f6f6fa;
	--wui-menubar-bar-button-iconcolor-disabled: #d5dce3;
	--wui-menubar-bar-button-textcolor-out: #2d3a47;
	--wui-menubar-bar-button-textcolor-over: #1f2937;
	--wui-menubar-bar-button-textcolor-selected: #f6f6fa;
	--wui-menubar-bar-button-textcolor-disabled: #d5dce3;
	--wui-menubar-expander-bgcolor-out: transparent;
	--wui-menubar-expander-bgcolor-over: rgb(from #d5dce3 r g b / 40%);
	--wui-menubar-expander-iconsize: 16px;
	--wui-menubar-expander-iconcolor-out: #444;
	--wui-menubar-expander-iconcolor-over: #000;
	--wui-menubar-expander-expandicon-src: none;
	--wui-menubar-expander-contracticon-src: none;
	--wui-menubar-opener-iconsize: 16px;
	--wui-menubar-opener-openicon-src: none;
	--wui-menubar-submenu-bordercolor: #f0f0f3;
	--wui-menubar-submenu-bgcolor: #fdfdfe;
	--wui-menubar-submenu-button-bgcolor-out: transparent;
	--wui-menubar-submenu-button-bgcolor-over: rgb(from #d5dce3 r g b / 40%);
	--wui-menubar-submenu-button-bgcolor-selected: #1e90ff;
	--wui-menubar-submenu-button-bgcolor-disabled: transparent;
	--wui-menubar-submenu-button-iconsize: 24px;
	--wui-menubar-submenu-button-iconcolor-out: rgb(from #353a40 r g b / 70%);
	--wui-menubar-submenu-button-iconcolor-over: #353a40;
	--wui-menubar-submenu-button-iconcolor-selected: #f6f6fa;
	--wui-menubar-submenu-button-iconcolor-disabled: #d5dce3;
	--wui-menubar-submenu-button-textcolor-out: #2d3a47;
	--wui-menubar-submenu-button-textcolor-over: #1f2937;
	--wui-menubar-submenu-button-textcolor-selected: #f6f6fa;
	--wui-menubar-submenu-button-textcolor-disabled: #d5dce3;
	--wui-menubar-tooltip-bgcolor: #000;
	--wui-menubar-tooltip-textcolor: #fff;
	--wui-menubar-bubble-bgcolor: #f44343;
	--wui-menubar-bubble-textcolor: #fff;
}
```

CSS code:

```css
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
}

.my-output {
	position: absolute;
	top: 4px;
	left: 440px;
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Icon/WUIIcon-0.1.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Menubar/WUIMenubar-0.1.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Menubar/WUIMenubar-0.1.js"></script>
```

HTML code:

```html
<div class="wui-menubar my-menubar"></div>
<div class="my-output"></div>
```

JS code:

```js
// Create object
const output = document.body.querySelector(".my-output");
const menubar = new WUIMenubar({
	selector: ".wui-menubar.my-menubar",
	//expansive: true,
	//autoClose: true,
	//topButtons: [],
	//mainButtons: [],
	//bottomButtons: [],
	onClick: (id) => {
		output.textContent = `Click - id button: "${id}"`;
	},
	//onSelect: null
});

// Add buttons
menubar.topButtons = [{
	id: "logo",
	iconImage: "https://wuijs.dev/wuijs-color.svg",
	label: "WUI/JS",
	tooltipable: false,
	selectable: false
}];
menubar.mainButtons = [{
	id: "zones",
	iconClass: "wui-icon home-fill",
	label: "Home",
	selected: true
}, {
	id: "settings",
	iconClass: "wui-icon gear-fill",
	label: "Settings",
	selectable: false
}, {
	id: "tools",
	iconClass: "wui-icon pencil-fill",
	label: "Tools",
	buttons: [{
		id: "users",
		iconClass: "wui-icon palette-fill",
		label: "Colors"
	}, {
		id: "zoomin",
		iconClass: "wui-icon zoomin-line",
		label: "Zoom in"
	}, {
		id: "zoomout",
		iconClass: "wui-icon zoomout-line",
		label: "Zoom out"
	}, {
		id: "images",
		iconClass: "wui-icon image-fill",
		label: "Images"
	}]
}, {
	id: "account",
	iconClass: "wui-icon person-circle-fill",
	photoImage: "",
	label: "Account",
	selectable: false
}, {
	id: "notifications",
	iconClass: "wui-icon bell-fill",
	label: "Notifications",
	radio: false
}];
menubar.bottomButtons = [{
	id: "logout",
	iconClass: "wui-icon logout-line",
	label: "Logout",
	selectable: false
}];

// Initialize object
menubar.init();
```

> [!TIP]
> You can check out this working example on CodePen at the link: [https://codepen.io/wuijsproject/pen/JoKYVQm](https://codepen.io/wuijsproject/pen/JoKYVQm).

<a name="WUIList"></a>

### WUIList

Versión: `0.2`

Component for the implementation of data lists and buttons for each row optionally.

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/WUI/List/WUIList-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/List/WUIList-0.2.css) |
| JS   | [src/WUI/List/WUIList-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/List/WUIList-0.2.js) |

#### Constructor

| Type    | Description |
| ------- | ----------- |
| WUIList | `WUIList([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property     | Type       | Default value | Description |
| ------------ | ---------- | ------------- | ----------- |
| selector     | `string`   | `".wui-list"` | (get/set)<br><br>CSS selector that defines the HTML element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| paging       | `number`   | `0`           | (get/set)<br><br>Paging, or the number of rows per page in the list. A value of `0` indicates that the pagination will be the same length as rows; in other words, a value of `0` disables paging. |
| page         | `number`   | `0`           | (get)<br><br>Current page displayed in the list, where page `0` corresponds to the first page and the last to the total number of rows minus 1. |
| pages        | `number`   | `0`           | (get)<br><br>Total number of pages. |
| total        | `number`   | `0`           | (get)<br><br>Total number of rows. |
| columns      | `array`    | `[]`          | (get/set)<br><br>List of columns in the list, as defined by **Column Options**. |
| rows         | `array`    | `[]`          | (get/set)<br><br>List of rows in the list, as defined by **Row Options**. |
| buttons      | `array`    | `[]`          | (get/set)<br><br>List of row buttons in the list, as defined by **Row Button Options**. |
| buttonsStyle | `string`   | `"round"`     | (get/set)<br><br>Row button style.<br><br>Values:<br>• `"round"`, circular shape.<br>• `"stretch"`, square shape. |
| onPrint      | `function` | `null`        | (get/set)<br><br>Function that is called when a page or the entire list is displayed. The function receives as parameters:<br><br>**• page:** `number`, page number.<br>**• pages:** `number`, total pages.<br>**• total:** `number`, total rows. |
| onClick      | `function` | `null`        | (get/set)<br><br>Function that is called when a row is clicked. The function receives as parameters:<br><br>**• index:** `number`, row number.<br>**• id:** `string`, row id.<br>**• enabled:** `boolean`, row enable state.<br>**• options:** `object`, row settings options. |

#### Column Options

| Property | Type     | Default value | Description |
| -------- | -------- | ------------- | ----------- |
| width    | `string` | `undefined`   | Column width. This can be expressed as a number associated with pixels or in a CSS compatible format. |
| align    | `string` | `"left"`      | Alignment mode for column content.<br><br>Values:<br>• `"left"`<br>• `"right"`<br>• `"center"` |

#### Rows Options

| Property     | Type      | Default value | Description |
| ------------ | --------- | ------------- | ----------- |
| id           | `string`  | `undefined`   | Unique row identifier. |
| data         | `array`   | `[]`          | Array with the contents of the cells in the row. |
| innerContent | `string`  | `undefined`   | Optional inner row content, displayed at the bottom of the row. |
| innerOpened  | `boolean` | `false`       | Initial opening of optional inner row content. |
| enabled      | `boolean` | `true`        | Define whether the row is enabled. |

#### Row Button Options

| Property  | Type.               | Default value | Description |
| --------- | ------------------- | ------------- | ----------- |
| iconClass | `string\|function`  | `undefined`   | CSS styles that define the row button icon. This option can optionally be used with the [WUIIcon](#WUIIcon) library by using the `wui-icon` style in conjunction with a specific icon style. |
| bgcolor   | `string\|function`  | `undefined`   | Background color in CSS compatible format. |
| enabled   | `boolean\|function` | `true`        | Defines whether the button is enabled. |
| onClick   | `function`          | `null`        | Function called when the button is clicked. It receives the parameters `index`, corresponding to the row position starting from `0`; and `id`, corresponding to the row's unique identifier. |

> [!IMPORTANT]
> Options that accept optional function values ​​(`iconClass`, `bgcolor` and `enabled`) receive the parameters `index`, corresponding to the row position starting from `0`; and `id`, corresponding to the row's unique identifier.

#### Methods

| Method       | Return type   | Description |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| init         | `void`        | `init()`<br><br>Initializes the object. |
| addColumn    | `void`        | `addColumn(options)`<br><br>Adds a new column settings to the object's column list, as defined in **Column Options**. |
| addRow       | `void`        | `addRow(options)`<br><br>Adds a new row settings to the object's rows list, as defined by **Row Options**. |
| addButton    | `void`        | `addButton(options)`<br><br>Adds a new row button settings to the object's list of row buttons, as defined by **RowButtonOptions**. |
| print        | `void`        | `print([page])`<br><br>Arguments:<br>**• page:** `number`, page number. The default value corresponds to the `page` property. If a value other than the `page` property is passed as a parameter and if it is valid, the property will take that value.<br><br>Prints a list view; this view can be a page or the entire list depending on the `paging` property and the `page` parameter. |
| enableRow    | `void`        | `enableRow(index[, enabled])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• enabled:** `boolean`, row enable state. The default value is `true`.<br><br>Enables or disables a row. |
| openInnerRow | `void`        | `openInnerRow(index[, open])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• open:** `boolean`, open state of the optional inner row content. The default value is `true`.<br><br>Opens or closes the optional inner row content. |
| first        | `void`        | `first()`<br><br>Displays the view of the first page. |
| last         | `void`        | `last()`<br><br>Displays the view of the last page. |
| prev         | `void`        | `prev()`<br><br>Displays the view of the previous page if it exists. |
| next         | `void`        | `next()`<br><br>Displays the next page view if one exists. |
| isPrevEnable | `boolean`     | `isPrevEnable()`<br><br>Returns whether a previous page exists. |
| isNextEnable | `boolean`     | `isNextEnable()`<br><br>Returns whether a next page exists. |
| destroy      | `void`        | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                             | Description |
| ------------------------------------ | ----------- |
| `--wui-list-shadowcolor`             | 
| `--wui-list-borderradius`            | 
| `--wui-list-borderwidth`             | 
| `--wui-list-bordercolor`             | 
| `--wui-list-scroll-bgcolor-out`      | 
| `--wui-list-scroll-bgcolor-over`     | 
| `--wui-list-row-height`              | 
| `--wui-list-row-borderwidth`         | 
| `--wui-list-row-bordercolor-out`     | 
| `--wui-list-row-bordercolor-over`    | 
| `--wui-list-row-bgcolor-out`         | 
| `--wui-list-row-bgcolor-over`        | 
| `--wui-list-row-textcolor-out`       | 
| `--wui-list-row-textcolor-over`      | 
| `--wui-list-row-textcolor-disabled`  | 
| `--wui-list-innerrow-borderwidth`    | 
| `--wui-list-innerrow-bordercolor`    | 
| `--wui-list-innerrow-bgcolor`        | 
| `--wui-list-innerrow-textcolor`      | 
| `--wui-list-buttons-bgcolor`         | 
| `--wui-list-button-size`             | 
| `--wui-list-button-hmargin`          | 
| `--wui-list-button-borderradius`     | 
| `--wui-list-button-bgcolor-enabled`  | 
| `--wui-list-button-bgcolor-disabled` | 

#### Implementation

CSS settings:

```css
:root {

	/* wui-icon */

	--wui-icon-size: 24px;
	--wui-icon-smallsize: 14px;
	--wui-icon-bgcolor-out: rgb(from #353a40 r g b / 70%);
	--wui-icon-bgcolor-over: #353a40;

	/* wui-list */

	--wui-list-shadowcolor: #959da5;
	--wui-list-borderradius: 10px;
	--wui-list-borderwidth: 0;
	--wui-list-bordercolor: #f0f0f3;
	--wui-list-scroll-bgcolor-out: rgb(from #353a40 r g b / 20%);
	--wui-list-scroll-bgcolor-over: rgb(from #353a40 r g b / 40%);
	--wui-list-row-height: 44px;
	--wui-list-row-borderwidth: 1px;
	--wui-list-row-bordercolor-out: #f0f0f3;
	--wui-list-row-bordercolor-over: #f0f0f3;
	--wui-list-row-bgcolor-out: #fdfdfe;
	--wui-list-row-bgcolor-over: #f6f6fa;
	--wui-list-row-textcolor-out: #2d3a47;
	--wui-list-row-textcolor-over: #1f2937;
	--wui-list-row-textcolor-disabled: #d5dce3;
	--wui-list-innerrow-borderwidth: 1px;
	--wui-list-innerrow-bordercolor: #f0f0f3;
	--wui-list-innerrow-bgcolor: #f6f6fa;
	--wui-list-innerrow-textcolor: rgb(from #2d3a47 r g b / 60%);
	--wui-list-buttons-bgcolor: transparent;
	--wui-list-button-size: 48px;
	--wui-list-button-hmargin: 8px;
	--wui-list-button-borderradius: 50%;
	--wui-list-button-bgcolor-enabled: #1e90ff;
	--wui-list-button-bgcolor-disabled: #d5dce3;
}
```

CSS code:

```css
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
}

header {
	width: 600px;
	text-align: right;
}

.my-link {
	margin: 0 10px;
	text-decoration: none;
}

.my-link.disabled {
	color: #ccc;
}

.my-paging {
	display: inline;
	font-size: 16px;
}

nav {
	width: 600px;
	margin: 10px 0;
}

footer {
	width: 600px;
}

.my-output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Icon/WUIIcon-0.1.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/List/WUIList-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/List/WUIList-0.2.js"></script>
```

HTML code:

```html
<header>
	<a href="javascript:first();" class="my-link first"><<</a>
	<a href="javascript:prev();" class="my-link prev"><</a>
	<a href="javascript:next();" class="my-link next">></a>
	<a href="javascript:last();" class="my-link last">>></a>
	<div class="my-paging"></div>
</header>

<nav>
	<div class="wui-list my-list"></div>
</nav>
  
<footer>
	<div class="my-output"></div>
</footer>
```

JS code:

```js
// Create object
const firstLink = document.body.querySelector(".my-link.first");
const prevLink = document.body.querySelector(".my-link.prev");
const nextLink = document.body.querySelector(".my-link.next");
const lastLink = document.body.querySelector(".my-link.last");
const paging = document.body.querySelector(".my-paging");
const output = document.body.querySelector(".my-output");
const list = new WUIList({
	selector: ".wui-list.my-list",
	paging: 5,
	columns: [{
		width: 10
	},{
		width: 60,
		align: "center"
	}, {
		align: "left"
	},{
		width: 60,
		align: "center"
	}],
	//rows: [],
	buttons: [{
		iconClass: "wui-icon trash-fill",
		bgcolor: "#f44343",
		onClick: (index, id) => {
			output.textContent = `Click button - index: ${index}, id: ${id}`;
		},
		enabled: true
	}],
	buttonsStyle: "stretch",
	onPrint: (page, pages, total) => {
		if (list.isPrevEnable()) {
			firstLink.classList.remove("disabled");
			prevLink.classList.remove("disabled");
		} else {
			firstLink.classList.add("disabled");
			prevLink.classList.add("disabled");
		}
		if (list.isNextEnable()) {
			lastLink.classList.remove("disabled");
			nextLink.classList.remove("disabled");
		} else {
			lastLink.classList.add("disabled");
			nextLink.classList.add("disabled");
		}
		paging.innerHTML = `${page}/${pages} (${total})`;
	},
	onClick: (index, id, enabled, options) => {
		output.textContent = `Click row - index: ${index}, id: ${id}, enabled: ${enabled}`;
	}
});
const first = () => {
	if (!firstLink.classList.contains("disabled")) {
		list.first();
	}
}
const prev = () => {
	if (!prevLink.classList.contains("disabled")) {
		list.prev();
	}
}
const last = () => {
	if (!lastLink.classList.contains("disabled")) {
		list.last();
	}
}
const next = () => {
	if (!nextLink.classList.contains("disabled")) {
		list.next();
	}
}

// Initialize object
list.init();

// Load dataset
list.rows = [{
	id: "row1", data: ["", "A 1", "B 1", "C 1"]}, {
	id: "row2", data: ["", "A 2", "B 2", "C 2"], enabled: false}, {
	id: "row3", data: ["", "A 3", "B 3", "C 3"]}, {
	id: "row4", data: ["", "A 4", "B 4", "C 4"]}, {
	id: "row5", data: ["", "A 5", "B 5", "C 5"]}, {
	id: "row6", data: ["", "A 6", "B 6", "C 6"]}, {
	id: "row7", data: ["", "A 7", "B 7", "C 7"]}, {
	id: "row8", data: ["", "A 8", "B 8", "C 8"]}, {
	id: "row9", data: ["", "A 9", "B 9", "C 9"]}, {
	id: "row10", data: ["", "A 10", "B 10", "C 10"]}, {
	id: "row11", data: ["", "A 11", "B 11", "C 11"]}, {
	id: "row12", data: ["", "A 12", "B 12", "C 12"]
}];
list.print();
```

> [!TIP]
> You can check out this working example on CodePen at the link: [https://codepen.io/wuijsproject/pen/xbOweva](https://codepen.io/wuijsproject/pen/xbOweva).

<a name="WUITable"></a>

### WUITable

Versión: `0.2`

Component for the implementation of data tables. Unlike the `WUIList` object, the `WUITable` object includes a column header.

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/WUI/Table/WUITable-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Table/WUITable-0.2.css) |
| JS   | [src/WUI/Table/WUITable-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Table/WUITable-0.2.js) |

#### Constructor

| Type     | Description |
| -------- | ----------- |
| WUITable | `WUITable([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property     | Type       | Default value  | Description |
| ------------ | ---------- | -------------- | ----------- |
| selector     | `string`   | `".wui-table"` | (get/set)<br><br>CSS selector that defines the HTML element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| width        | `string`   | `"auto"`       | (get/set)<br><br>Table width in CSS compatible format. |
| paging       | `number`   | `0`            | (get/set)<br><br>Paging, or the number of rows per page in the table. A value of `0` indicates that the pagination will be the same length as rows; in other words, a value of `0` disables paging. |
| page         | `number`   | `0`            | (get)<br><br>Current page displayed in the table, where page `0` corresponds to the first page and the last to the total number of rows minus 1. |
| pages        | `number`   | `0`            | (get)<br><br>Total number of pages. |
| total        | `number`   | `0`            | (get)<br><br>Total number of rows. |
| columns      | `array`    | `[]`           | (get/set)<br><br>List of columns in the table, as defined by **Column Options**. |
| rows         | `array`    | `[]`           | (get/set)<br><br>List of rows in the tabla, as defined by **Row Options**. |
| align        | `string`   | `"left"`       | (get/set)<br><br>Horizontal alignment mode for table content.<br><br>Values:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign       | `string`   | `"middle"`     | (get/set)<br><br>Vertical alignment mode for table content.<br><br>Values:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| sortable     | `boolean`  | `true`         | (get/set)<br><br>Define whether rows are sortable by column. |
| resizable    | `boolean`  | `true`         | (get/set)<br><br>Define whether columns are resizable. |
| draggable    | `boolean`  | `true`         | (get/set)<br><br>Define whether columns are draggable so their position can be changed. |
| selectable   | `boolean`  | `true`         | (get/set)<br><br>Define whether rows are selectable. |
| onPrint      | `function` | `null`         | (get/set)<br><br>Function that is called when a page or the entire table is displayed. The function receives as parameters:<br><br>**• page:** `number`, page number.<br>**• pages:** `number`, total pages.<br>**• total:** `number`, total rows. |
| onClick      | `function` | `null`         | (get/set)<br><br>Function that is called when a row is clicked. The function receives as parameters:<br><br>**• index:** `number`, row number.<br>**• id:** `string`, row id.<br>**• enabled:** `boolean`, row enable state.<br>**• options:** `object`, row settings options. |
| onDblClick   | `function` | `null`         | (get/set)<br><br>Function that is called when a row is double-clicked. The function receives as parameters:<br><br>**• index:** `number`, row number.<br>**• id:** `string`, row id.<br>**• enabled:** `boolean`, row enable state.<br>**• options:** `object`, row settings options. |
| onSelect     | `function` | `null`         | (get/set)<br><br>Function that is called when a row is selected. The function receives as parameters:<br><br>**• index:** `number`, row number.<br>**• id:** `string`, row id.<br>**• enabled:** `boolean`, row enable state.<br>**• options:** `object`, row settings options. |

#### Column Options

| Property  | Type      | Default value        | Description |
| --------- | --------- | -------------------- | ----------- |
| label     | `string`  | `""`                 | Column label. |
| width     | `string`  | `undefined`          | Column width. This can be expressed as a number associated with pixels or in a CSS compatible format. |
| align     | `string`  | `WUITable.align`     | Horizontal alignment mode for column content. This option takes precedence over the `align` property.<br><br>Values:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign    | `string`  | `WUITable.valign`    | Vertical alignment mode for column content. This option takes precedence over the `valign` property.<br><br>Values:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| sortable  | `boolean` | `WUITable.sortable`  | Define whether rows are sortable by column. This option takes precedence over the `sortable` property. |
| resizable | `boolean` | `WUITable.resizable` | Define whether the column is resizable. This option takes precedence over the `resizable` property. |
| draggable | `boolean` | `WUITable.draggable` | Define whether the column is draggable so its position can be changed. This option takes precedence over the `draggable` property. |

> [!IMPORTANT]
> The `width` row option will not take values ​​greater than the maximum width computed between all the cells belonging to the column.
> In this way, the `resizable` mode will only be able to reach that maximum value in each column.

#### Rows Options

| Property | Type      | Default value     | Description |
| -------- | --------- | ----------------- | ----------- |
| id       | `string`  | `undefined`       | Unique row identifier. |
| align    | `string`  | `WUITable.align`  | Horizontal alignment mode for row content. This option takes precedence over the `align` property.<br><br>Values:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign   | `string`  | `WUITable.valign` | Vertical alignment mode for row content. This option takes precedence over the `valign` property.<br><br>Values:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| data     | `array`   | `[]`              | Array with the contents of the cells in the row. |
| selected | `boolean` | `false`           | Define whether the row is selected. |
| enabled  | `boolean` | `true`            | Define whether the row is enabled. |

#### Methods

| Method       | Return type   | Description |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| init         | `void`        | `init()`<br><br>Initializes the object. |
| addColumn    | `void`        | `addColumn(options)`<br><br>Adds a new column settings to the object's column list, as defined in **Column Options**. |
| addRow       | `void`        | `addRow(options)`<br><br>Adds a new row settings to the object's rows list, as defined by **Row Options**. |
| print        | `void`        | `print([page])`<br><br>Arguments:<br>**• page:** `number`, page number. The default value corresponds to the `page` property. If a value other than the `page` property is passed as a parameter and if it is valid, the property will take that value.<br><br>Prints a table view; this view can be a page or the entire table depending on the `paging` property and the `page` parameter. |
| sort         | `void`        | `first(index[, direction])`<br><br>Arguments:<br>**• index:** `number`, rcolumn number.<br>**• direction:** `string`, order direction, this can be: `"asc"` or `"desc"`. The default value is `asc`. |
| selectRow    | `void`        | `selectRow(index[, selected])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• selected:** `boolean`, row selection state. The default is `true`.<br><br>Select or unselect a row. |
| enableRow    | `void`        | `enableRow(index[, enabled])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• enabled:** `boolean`, row enable state. The default value is `true`.<br><br>Enables or disables a row. |
| first        | `void`        | `first()`<br><br>Displays the view of the first page. |
| last         | `void`        | `last()`<br><br>Displays the view of the last page. |
| prev         | `void`        | `prev()`<br><br>Displays the view of the previous page if it exists. |
| next         | `void`        | `next()`<br><br>Displays the next page view if one exists. |
| isPrevEnable | `boolean`     | `isPrevEnable()`<br><br>Returns whether a previous page exists. |
| isNextEnable | `boolean`     | `isNextEnable()`<br><br>Returns whether a next page exists. |
| destroy      | `void`        | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                       | Description |
| ---------------------------------------------- | ----------- |
| `--wui-table-shadowcolor`                      |
| `--wui-table-borderradius`                     |
| `--wui-table-column-bordercolor-width`         |
| `--wui-table-column-bordercolor-out`           |
| `--wui-table-column-bordercolor-over`          |
| `--wui-table-column-bordercolor-selected`      |
| `--wui-table-column-bgcolor-out`               |
| `--wui-table-column-bgcolor-over`              |
| `--wui-table-column-bgcolor-selected`          |
| `--wui-table-column-textcolor-out`             |
| `--wui-table-column-textcolor-over`            |
| `--wui-table-column-textcolor-selected`        |
| `--wui-table-column-textcolor-disabled`        |
| `--wui-table-column-sorter-iconsize`           |
| `--wui-table-column-sorter-iconcolor-out`      |
| `--wui-table-column-sorter-iconcolor-over`     |
| `--wui-table-column-sorter-iconcolor-disabled` |
| `--wui-table-column-sorter-ascicon-src`        |
| `--wui-table-column-sorter-descicon-src`       |
| `--wui-table-column-resizer-bordercolor-out`   |
| `--wui-table-column-resizer-bordercolor-over`  |
| `--wui-table-column-dragger-bordercolor-over`  |
| `--wui-table-column-dragger-bgcolor-drop`      |
| `--wui-table-row-bordercolor-width`            |
| `--wui-table-row-bordercolor-out`              |
| `--wui-table-row-bordercolor-over`             |
| `--wui-table-row-bordercolor-selected`         |
| `--wui-table-row-bordercolor-disabled`         |
| `--wui-table-row-bgcolor-out`                  |
| `--wui-table-row-bgcolor-over`                 |
| `--wui-table-row-bgcolor-selected`             |
| `--wui-table-row-bgcolor-disabled`             |
| `--wui-table-row-textcolor-out`                |
| `--wui-table-row-textcolor-over`               |
| `--wui-table-row-textcolor-selected`           |
| `--wui-table-row-textcolor-disabled`           |

#### Implementation

CSS settings:

```css
:root {
	--wui-table-shadowcolor: #959da5;
	--wui-table-borderradius: 10px;
	--wui-table-column-bordercolor-width: 1px;
	--wui-table-column-bordercolor-out: rgb(from #1e90ff r g b / 10%);
	--wui-table-column-bordercolor-over: #1e90ff;
	--wui-table-column-bordercolor-selected: #1e90ff;
	--wui-table-column-bgcolor-out: #f6f6fa;
	--wui-table-column-bgcolor-over: #f6f6fa;
	--wui-table-column-bgcolor-selected: #1e90ff;
	--wui-table-column-textcolor-out: #444;
	--wui-table-column-textcolor-over: #000;
	--wui-table-column-textcolor-selected: #1e90ff;
	--wui-table-column-textcolor-disabled: #d5dce3;
	--wui-table-column-sorter-iconsize: 16px;
	--wui-table-column-sorter-iconcolor-out: #444;
	--wui-table-column-sorter-iconcolor-over: #000;
	--wui-table-column-sorter-iconcolor-disabled: #d5dce3;
	--wui-table-column-sorter-ascicon-src: none;
	--wui-table-column-sorter-descicon-src: none;
	--wui-table-column-resizer-bordercolor-out: rgb(from #1e90ff r g b / 10%);
	--wui-table-column-resizer-bordercolor-over: rgb(from #1e90ff r g b / 10%);
	--wui-table-column-dragger-bordercolor-over: #444;
	--wui-table-column-dragger-bgcolor-drop: rgb(from #1e90ff r g b / 10%);
	--wui-table-row-bordercolor-width: 1px;
	--wui-table-row-bordercolor-out: #f0f0f3;
	--wui-table-row-bordercolor-over: #f0f0f3;
	--wui-table-row-bordercolor-selected: #1e90ff;
	--wui-table-row-bordercolor-disabled: #f0f0f3;
	--wui-table-row-bgcolor-out: #fdfdfe;
	--wui-table-row-bgcolor-over: #f6f6fa;
	--wui-table-row-bgcolor-selected: #1e90ff;
	--wui-table-row-bgcolor-disabled: transparent;
	--wui-table-row-textcolor-out: #2d3a47;
	--wui-table-row-textcolor-over: #1f2937;
	--wui-table-row-textcolor-selected: #f6f6fa;
	--wui-table-row-textcolor-disabled: #d5dce3;
}
```

CSS code:

```css
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
}

header {
	width: 600px;
	text-align: right;
}

.my-link {
	margin: 0 10px;
	text-decoration: none;
}

.my-link.disabled {
	color: #ccc;
}

.my-paging {
	display: inline;
	font-size: 16px;
}

nav {
	width: 600px;
	margin: 10px 0;
}

footer {
	width: 600px;
}

.my-output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Table/WUITable-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Table/WUITable-0.2.js"></script>
```

HTML code:

```html
<header>
	<a href="javascript:first();" class="my-link first"><<</a>
	<a href="javascript:prev();" class="my-link prev"><</a>
	<a href="javascript:next();" class="my-link next">></a>
	<a href="javascript:last();" class="my-link last">>></a>
	<div class="my-paging"></div>
</header>

<nav>
	<div class="wui-table my-table"></div>
</nav>
  
<footer>
	<div class="my-output"></div>
</footer>
```

JS code:

```js
// Create object
const firstLink = document.body.querySelector(".my-link.first");
const prevLink = document.body.querySelector(".my-link.prev");
const nextLink = document.body.querySelector(".my-link.next");
const lastLink = document.body.querySelector(".my-link.last");
const paging = document.body.querySelector(".my-paging");
const output = document.body.querySelector(".my-output");
const table = new WUITable({
	selector: ".wui-table.my-table",
	//width: "auto",
	paging: 5,
	columns: [{
		label: "A Column",
		width: 100
	},{
		label: "B Column",
		width: 100
	}, {
		label: "C Column",
		width: 100
	},{
		label: "D Column",
		width: 100
	}],
	//rows: [],
	align: "center",
	//valign: "middle",
	//sortable: true,
	//resizable: true,
	//draggable: true,
	//selectable: true,
	onPrint: (page, pages, total) => {
		if (table.isPrevEnable()) {
			firstLink.classList.remove("disabled");
			prevLink.classList.remove("disabled");
		} else {
			firstLink.classList.add("disabled");
			prevLink.classList.add("disabled");
		}
		if (table.isNextEnable()) {
			lastLink.classList.remove("disabled");
			nextLink.classList.remove("disabled");
		} else {
			lastLink.classList.add("disabled");
			nextLink.classList.add("disabled");
		}
		paging.innerHTML = `${page}/${pages} (${total})`;
	},
	onClick: (index, id, enabled, options) => {
		output.textContent = `Click row - index: ${index}, id: ${id}, enabled: ${enabled}`;
	},
	onDblClick: (index, id, enabled, options) => {
		output.textContent = `Double-Click row - index: ${index}, id: ${id}, enabled: ${enabled}`;
	},
	onSelect: (index, id, enabled, options) => {
		output.textContent = `Select row - index: ${index}, id: ${id}, enabled: ${enabled}`;
	}
});
const first = () => {
	if (!firstLink.classList.contains("disabled")) {
		table.first();
	}
}
const prev = () => {
	if (!prevLink.classList.contains("disabled")) {
		table.prev();
	}
}
const last = () => {
	if (!lastLink.classList.contains("disabled")) {
		table.last();
	}
}
const next = () => {
	if (!nextLink.classList.contains("disabled")) {
		table.next();
	}
}

// Initialize object
table.init();

// Load dataset
table.rows = [{
	id: "row1", data: ["A 1", "B 1", "C 1", "D 1"]}, {
	id: "row2", data: ["A 2", "B 2", "C 2", "D 2"], enabled: false}, {
	id: "row3", data: ["A 3", "B 3", "C 3", "D 3"]}, {
	id: "row4", data: ["A 4", "B 4", "C 4", "D 4"]}, {
	id: "row5", data: ["A 5", "B 5", "C 5", "D 5"]}, {
	id: "row6", data: ["A 6", "B 6", "C 6", "D 6"]}, {
	id: "row7", data: ["A 7", "B 7", "C 7", "D 7"]}, {
	id: "row8", data: ["A 8", "B 8", "C 8", "D 8"]}, {
	id: "row9", data: ["A 9", "B 9", "C 9", "D 9"]}, {
	id: "row10", data: ["A 10", "B 10", "C10", "D 10"]}, {
	id: "row11", data: ["A 11", "B 11", "C11", "D 11"]}, {
	id: "row12", data: ["A 12", "B 12", "C12", "D 12"]
}];
table.print();
```

> [!TIP]
> You can check this functional example in CodePen at the link: [https://codepen.io/wuijsproject/pen/jErboKZ](https://codepen.io/wuijsproject/pen/jErboKZ).

<a name="WUIForm"></a>
<a name="WUIFormat"></a>

### WUIFormat

Version: `0.2`

Tool for managing and validating `string`, `number` and `Date` data formats.

#### Sources

| Type | File |
| ---- | ---- |
| JS   | [src/WUI/Format/WUIFormat-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Format/WUIFormat-0.2.js) |

#### Static Methods

| Method                | Return type  | Description |
| --------------------- | ------------ | ----------- |
| numberToString        | `string`     | `numberToString(number[, options])`<br><br>Arguments:<br>**• number:** `number`, number to format.<br>**• options:** `Object` *optional*, opciones de formateo.<br><br>Formats a number to string. |
| numberToSizeString    | `string`     | `numberToSizeString(number)`<br><br>Arguments:<br>**• number:** `number`, number to format.<br><br>Formats a number to file size (B, KB, MB, TB). |
| numberToModule11      | `string`     | `numberToModule11(number, codeTen)`<br><br>Arguments:<br>**• number:** `string`, number to validate (including check digit).<br>**• codeTen:** `string`, character to replace the check digit if it is 10.<br><br>Calculates the module 11 check digit. |
| numberToModule23      | `string`     | `numberToModule23(number, map)`<br><br>Arguments:<br>**• number:** `string`, number to validate.<br>**• map:** `string`, mapping string.<br><br>Calculates the module 23 check digit. |
| dateToString          | `string`     | `dateToString(date[, format[, options]])`<br><br>Arguments:<br>**• date:** `Date`, date to format.<br>**• format:** `string` *optional*, expected date format (default `"yyyy-mm-dd"`).<br>**• options:** `Object` *optional*, options of formatting.<br><br>Formats a date to string using `Date.prototype.wuiDefaults`. |
| validateDate          | `boolean`    | `validateDate(date[, format])`<br><br>Arguments:<br>**• date:** `string`, date to validate.<br>**• format:** `string` *optional*, expected date format (default `"yyyy-mm-dd"`).<br><br>Validates a date in string format. |
| validateEmail         | `boolean`    | `validateEmail(email)`<br><br>Arguments:<br>**• email:** `string`, email address.<br><br>Validates an email address. |
| validateEmailList     | `boolean`    | `validateEmailList(list[, separator])`<br><br>Arguments:<br>**• list:** `string`, list of email addresses.<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of email addresses. |
| validatePhone         | `boolean`    | `validatePhone(phone[, length])`<br><br>Arguments:<br>**• phone:** `string`, phone number.<br>**• length:** `number` *optional*, length of the telephone number.<br><br>Validates a phone number. |
| validatePhoneList     | `boolean`    | `validatePhoneList(list[, length[, separator]])`<br><br>Arguments:<br>**• list:** `string`, list of number phones.<br>**• length:** `number` *optional*, length of the telephone number.<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of phone numbers. |
| validateURL           | `boolean`    | `validateURL(url)`<br><br>Arguments:<br>**• url:** `string`, URL address.<br><br>Validates a URL address. |
| validateURLList       | `boolean`    | `validateURLList(list[, separator])`<br><br>Arguments:<br>**• list:** `string`, list of URL addresses.<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of URLs. |
| validateIPv4          | `boolean`    | `validateIPv4(ipv4)`<br><br>Arguments:<br>**• ipv4:** `string`, IPv4 address.<br><br>Validates an IPv4 address. |
| validateModule11      | `boolean`    | `validateModule11(value, codeTen)`<br><br>Arguments:<br>**• value:** `string`, string to validate (including check digit).<br>**• codeTen:** `string`, character to replace the check digit if it is 10.<br><br>Validate a string including the modulo 11 check digit. |
| validateModule23      | `boolean`    | `validateModule23(value, map)`<br><br>Arguments:<br>**• value:** `string`, string to validate (including check digit).<br>**• map:** `string`, mapping character string.<br><br>Validate a string including the modulo 23 check digit. |
| validateNID           | `boolean`    | `validateNID(nid, countryCode)`<br><br>Arguments:<br>**• nid:** `string`, value to validate.<br>**• countryCode:** `string`, country code in ISO 3166-1 alpha-2 format with support for CL, PY and ES.<br><br>Validates a national identity document. |
| loadDate              | `Date`       | `loadDate(date[, format[, options]])`<br><br>Arguments:<br>**• date:** `string`, date to load.<br>**• format:** `string` *optional*, date format.<br>**• options:** `object` *optional*, date options, according to the definition of **Default values** `<Date.prototype.wuiDefaults>`.<br><br>Load a date from a string. |

#### Number Prototype Extensions `Number.prototype`

##### Defaults `Number.prototype.wuiDefaults`

| Property           | Type             | Default value | Description |
| ------------------ | ---------------- | ------------- | ----------- |
| numberPrefix       | `string`         | `""`          | Return string prefix used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |
| numberSufix        | `string`         | `""`          | Return string suffix used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |
| thousandsSeparator | `string`         | `","`         | Thousands separator of the return string used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |
| decimalLength      | `number\|string` | `"auto"`      | Length of the decimal portion of the return string used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |
| decimalSeparator   | `string`         | `"."`         | Decimal separator of the return string used by the `WUIFormat.numberToString()` and `Number.prototype.wuiToString()` methods. |

##### Methods

| Method          | Return type  | Description |
| --------------- | ------------ | ----------- |
| wuiToString     | `string`     | `wuiToString([options])`<br><br>Arguments:<br>**• options:** `Object` *optional*, opciones de formateo.<br><br>Formats a number to string. |
| wuiToSizeString | `string`     | `wuiToSizeString()`<br><br>Formats a number to file size (B, KB, MB, TB). |
| wuiToModule11   | `string`     | `wuiToModule11(codeTen)`<br><br>Arguments:<br>**• codeTen:** `string`, character to replace the check digit if it is 10.<br><br>Calculates the module 11 check digit. |
| wuiToModule23   | `string`     | `wuiToModule23(map)`<br><br>Arguments:<br>**• map:** `string`, mapping string.<br><br>Calculates the module 23 check digit. |

#### String Prototype Extensions `String.prototype`

##### Defaults `String.prototype.wuiDefaults`

| Property           | Type     | Default value | Description |
| ------------------ | -------- | ------------- | ----------- |
| emailListSeparator | `string` | `","`         | Separator consisting of one or more characters used for the validation of mailing address lists. |
| phoneLength        | `number` | `10`          | Length required for validation of a telephone number. |
| phoneListSeparator | `string` | `","`         | Separator consisting of one or more characters used for the validation of telephone number lists. |
| urlListSeparator   | `string` | `","`         | Separator consisting of one or more characters used for the validation of URL address lists. |

##### Methods

| Method               | Return type  | Description |
| -------------------- | ------------ | ----------- |
| wuiValidateDate      | `boolean`    | `wuiValidateDate([format])`<br><br>Arguments:<br>**• format:** `string` *optional*, expected date format (default `"yyyy-mm-dd"`).<br><br>Validates a date in string format. |
| wuiValidateEmail     | `boolean`    | `wuiValidateEmail()`<br><br>Validates an email address. |
| wuiValidateEmailList | `boolean`    | `wuiValidateEmailList([separator])`<br><br>Arguments:<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of email addresses. |
| wuiValidatePhone     | `boolean`    | `wuiValidatePhone([length])`<br><br>Arguments:<br>**• length:** `number` *optional*, length of the telephone number.<br><br>Validates a phone number. |
| wuiValidatePhoneList | `boolean`    | `wuiValidatePhoneList([length, separator])`<br><br>Arguments:<br>**• length:** `number` *optional*, length of the telephone number.<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of phone numbers. |
| wuiValidateURL       | `boolean`    | `wuiValidateURL()`<br><br>Validates a URL address. |
| wuiValidateURLList   | `boolean`    | `wuiValidateURLList([separator])`<br><br>Arguments:<br>**• separator:** `string` *optional*, list separator character(s).<br><br>Validates a list of URLs. |
| wuiValidateIPv4      | `boolean`    | `wuiValidateIPv4()`<br><br>Validates an IPv4 address. |
| wuiValidateModule11  | `boolean`    | `wuiValidateModule11(codeTen)`<br><br>Arguments:<br>**• codeTen:** `string`, character to replace the check digit if it is 10.<br><br>Validate a string including the modulo 11 check digit. |
| wuiValidateModule23  | `boolean`    | `wuiValidateModule23(map)`<br><br>Arguments:<br>**• map:** `string`, mapping character string.<br><br>Validate a string including the modulo 23 check digit. |
| wuiValidateNID       | `boolean`    | `wuiValidateNID(countryCode)`<br><br>Arguments:<br>**• countryCode:** `string`, country code in ISO 3166-1 alpha-2 format with support for CL, PY and ES.<br><br>Validates a national identity document. |

#### Date Prototype Extensions `Date.prototype`

##### Defaults `Date.prototype.wuiDefaults`

| Property       | Type            | Default value           | Description |
| -------------- | --------------- | ----------------------- | ----------- |
| utc            | `boolean`       | `false`                 | Indicate whether Coordinated Universal Time (UTC) should be used. |
| locales        | `string`        | `"en-US"`               | Locale code in `<ISO 639-1>-<ISO 3166-1 alpha-2>` format. For example: `es-CL`, `en-US`, `fr-FR`, etc. |
| dateFormat     | `string`        | `"yyyy-mm-dd"`          | Format of the date, as defined by **Date/time format parts**. |
| timeFormat     | `string`        | `"hh:MM:ss"`            | Format of the time, as defined by **Date/time format parts**. |
| datetimeFormat | `string`        | `"yyyy-mm-dd hh:MM:ss"` | Format of the date and time, as defined by **Date/time format parts**. |

##### Date/time format parts

| Part   | Description |
| ------ | ----------- |
| yyyy   | Year in 4 digits format. |
| yy     | Year in 2 digits format. |
| mmmm   | Month in full name format. |
| mmm    | Month in 3 initials format. |
| mm     | Month in 2 digits format. |
| m      | Month in integer number format. |
| dd     | Day in 2 digits format. |
| d      | Day in integer number format. |
| DDDD   | Day of the week in full name format. |
| DDD    | Day of the week in 3 initials format. |
| DD     | Day of the week in 2 initials format. |
| D      | Day of the week in integer number format. |
| hh     | Hour in 2 digits format. |
| h      | Hour in integer number format. |
| MM     | Minute in 2 digits format. |
| M      | Minute in integer number format. |
| ss     | Second in 2 digits format. |
| s      | Second in integer number format. |
| SSS    | Millisecond in 3 digits format. |
| S      | Millisecond in integer number format. |
| o      | Time zone offset in integer number format. |
| tz     | Time zone offset in "±hhMM" format. |
| gmt    | Time zone offset in "GMT±hhMM" format. |

##### Predefined load formats

| Format                | Value |
| --------------------- | ----- |
| `"datetime\|default"` | `Date.prototype.wuiDefaults.datetimeFormat` |
| `"numeric"`           | `"yyyymmddhhMMss"` |
| `"standard"`          | `"yyyy-mm-dd hh:MM:ss"` |
| `"longtime"`          | `"yyyy-mm-ddThh:MM:ss"` |

##### Predefined output formats

| Format                       | Value |
| ---------------------------- | ----- |
| `"datetime\|default"`        | `Date.prototype.wuiDefaults.datetimeFormat` |
| `"date"`                     | `Date.prototype.wuiDefaults.dateFormat` |
| `"time"`                     | `Date.prototype.wuiDefaults.timeFormat` |
| `"numeric"`                  | `"yyyymmddhhMMss"` |
| `"standard"`                 | `"yyyy-mm-dd hh:MM:ss"` |
| `"longtime"`                 | `"yyyy-mm-ddThh:MM:ss"` |
| `"rfc3339\|atom"`            | `"yyyy-mm-ddThh:MM:ss.SSSZ"` |
| `"rfc1123\|rfc2616\|cookie"` | `"DDD, dd-mmm-yyyy hh:MM:ss GMT"` |
| `"rfc3501"`                  | `"dd-mmm-yyyy hh:MM:ss tz"` |

##### Methods

| Method         | Return type  | Description |
| -------------- | ------------ | ----------- |
| wuiLoad        | `Date`       | `wuiLoad(value[, format[, options]])`<br><br>Arguments:<br>**• value:** `string`, date to load.<br>**• format:** `string` *optional*, date format.<br>**• options:** `object` *optional*, date options, according to the definition of **Default values** `<Date.prototype.wuiDefaults>`.<br><br>Load a date from a string. |
| wuiToString    | `string`     | `wuiToString([format[, options]])`<br><br>Arguments:<br>**• format:** `string` *optional*, date format.<br>**• options:** `object` *optional*, date options, according to the definition of **Default values** `<Date.prototype.wuiDefaults>`.<br><br>Converts a date to a string. |

#### Implementation

CSS Code:

```css
.my-output {
	position: relative;
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Format/WUIFormat-0.2.js"></script>
```

HTML code:

```html
<div class="my-output number"></div>
<div class="my-output email"></div>
<div class="my-output localDate"></div>
<div class="my-output utcDate"></div>
```

JS code:

```js
// Number formatting
//Number.prototype.wuiDefaults.numberPrefix = "";
//Number.prototype.wuiDefaults.numberSufix = "";
//Number.prototype.wuiDefaults.thousandsSeparator = ",";
Number.prototype.wuiDefaults.decimalLength = 2;
//Number.prototype.wuiDefaults.decimalSeparator = ".";
const number = 1234.567;
const numberOutput = document.body.querySelector(".my-output.number");
const numberFormatting = number.wuiToString({ numberPrefix: "$ " });
numberOutput.textContent = `number: ${number} - formatting: ${numberFormatting}`;

// Email validation
const email = "test@example.com";
const emailOutput = document.body.querySelector(".my-output.email");
const emailValidation = email.wuiValidateEmail();
emailOutput.textContent = `email: ${email} - validation: ${emailValidation}`;

// Local date/time formatting
const localDateLoadFormat = "yyyy-mm-dd";
const localDate = new Date().wuiLoad("2023-12-31", localDateLoadFormat);
const localDateOutput = document.body.querySelector(".my-output.localDate");
const localDateFormat = "dd/mm/yyyy hh:MM gmt";
const localDateFormatting = localDate.wuiToString(localDateFormat, { utc: false });
localDateOutput.textContent = `local date: ${localDate} - format: ${localDateFormat} - formatting: ${localDateFormatting}`;

// UTC date/time formatting
const utcDateLoadFormat = "yyyy-mm-dd";
const utcDate = new Date().wuiLoad("2023-12-31", utcDateLoadFormat);
const utcDateOutput = document.body.querySelector(".my-output.utcDate");
const utcDateFormat = "dd/mm/yyyy hh:MM gmt";
const utcDateFormatting = utcDate.wuiToString(utcDateFormat, { utc: true });
utcDateOutput.textContent = `utc date: ${utcDate} - format: ${utcDateFormat} - formatting: ${utcDateFormatting}`;
```

> [!TIP]
> You can check out this working example on CodePen at the link: [https://codepen.io/wuijsproject/pen/emzBjVy](https://codepen.io/wuijsproject/pen/emzBjVy).

<a name="WUISelectpicker"></a>

### WUISelectpicker

Version: `0.2`

Component for the implementation of multiple or exclusive selection list data inputs based on HTML element `<select>`.

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/WUI/Selectpicker/WUISelectpicker-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Selectpicker/WUISelectpicker-0.2.css) |
| JS   | [src/WUI/Selectpicker/WUISelectpicker-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Selectpicker/WUISelectpicker-0.2.js) |

#### Constructor

| Type            | Description |
| --------------- | ----------- |
| WUISelectpicker | `WUISelectpicker([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property       | Type       | Default value         | Description |
| -------------- | ---------- | --------------------- | ----------- |
| selector       | `string`   | `".wui-selectpicker"` | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If more than one element matches the selector, only the first match will be included. |
| value          | `string`   | `""`                  | (get/set)<br><br>Value of the initial options selection. |
| text           | `string`   | `""`                  | (get)<br><br>Text of the initial options selection. |
| lang           | `string`   | `"en"`                | (get/set)<br><br>Component language.<br><br>Values:<br>• `"de"`, German.<br>• `"en"`, English.<br>• `"es"`, Spanish. |
| texts          | `object`   | `{}`                  | (get/set)<br><br>Custom texts for component buttons and messages. |
| openDirection  | `string`   | `"down"`              | (get/set)<br><br>Opening direction of the selector.<br><br>Values:<br>• `"up"`, upwards.<br>• `"down"`, downwards. |
| multiple       | `boolean`  | `false`               | (get/set)<br><br>Defines if the selector allows multiple selection. |
| separatorValue | `string`   | `","`                 | (get/set)<br><br>Character separator of values ​​in case of multiple selection. |
| separatorText  | `string`   | `", "`                | (get/set)<br><br>Character separator of texts in case of multiple selection. |
| filterable     | `boolean`  | `true`                | (get/set)<br><br>Defines if the selector allows filtering options by text input. |
| enabled        | `boolean`  | `true`                | (get/set)<br><br>Defines whether the data input is enabled. |
| onOpen         | `function` | `null`                | (get/set)<br><br>Function called when the selector is opened. The function receives the current selected value as a parameter. |
| onChange       | `function` | `null`                | (get/set)<br><br>Function called when the selected value changes. The function receives the new selected value as a parameter. |

#### Menu Options

| Property  | Type      | Default value | Description |
| --------- | --------- | ------------- | ----------- |
| icon      | `string`  | `undefined`   | CSS classes of the option icon. |
| text      | `string`  | `""`          | Option text. |
| value     | `string`  | `""`          | Option value. |
| selected  | `boolean` | `false`       | Option selection state. |

#### Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Returns the HTML container element of the object. |
| getBox          | `HTMLElement`        | `getBox()`<br><br>Returns the HTML element of the dropdown box. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Returns the HTML element associated with the base data input `<select>`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| addOption       | `void`               | `addOption(option)`<br><br>Arguments:<br>**• option:** `object`.<br><br>Add an option to the list, as defined by **Menu Options**. |
| loadOptions     | `void`               | `loadOptions(options)`<br><br>Arguments:<br>**• options:** `array`.<br><br>Loads an array of options, clearing previously existing ones. |
| clearOptions    | `void`               | `clearOptions()`<br><br>Removes all options from the list. |
| open            | `void`               | `open()`<br><br>Opens the selector. |
| close           | `void`               | `close()`<br><br>Closes the selector. |
| toggle          | `void`               | `toggle()`<br><br>Toggles the open state of the selector. |
| cancel          | `void`               | `cancel()`<br><br>Cancels the current selection and reverts to the previous value, closing the selector. |
| accept          | `void`               | `accept()`<br><br>Accepts the current selection and closes the selector. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Returns whether the selector is open. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Returns whether the selector has no options selected. |
| isValid         | `boolean`            | `isValid()`<br><br>Returns if the entered value corresponds to a valid option. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                            | Description |
| --------------------------------------------------- | ----------- |
| `--wui-selectpicker-borderradius`                   |
| `--wui-selectpicker-borderwidth`                    |
| `--wui-selectpicker-bordercolor`                    |
| `--wui-selectpicker-bgcolor`                        |
| `--wui-selectpicker-opener-iconsize`                |
| `--wui-selectpicker-opener-iconcolor-out`           |
| `--wui-selectpicker-opener-iconcolor-over`          |
| `--wui-selectpicker-opener-iconcolor-disabled`      |
| `--wui-selectpicker-opener-openicon-src`            |
| `--wui-selectpicker-opener-closeicon-src`           |
| `--wui-selectpicker-viewinput-paddingleft`          |
| `--wui-selectpicker-viewinput-textcolor-out`        |
| `--wui-selectpicker-viewinput-textcolor-over`       |
| `--wui-selectpicker-viewinput-textcolor-disabled`   |
| `--wui-selectpicker-box-shadowcolor`                |
| `--wui-selectpicker-box-borderradius`               |
| `--wui-selectpicker-box-bordercolor`                |
| `--wui-selectpicker-box-bgcolor`                    |
| `--wui-selectpicker-box-scroll-bgcolor-out`         |
| `--wui-selectpicker-box-scroll-bgcolor-over`        |
| `--wui-selectpicker-box-option-borderradius`        |
| `--wui-selectpicker-box-option-bordercolor-out`     |
| `--wui-selectpicker-box-option-bordercolor-over`    |
| `--wui-selectpicker-box-option-bgcolor-out`         |
| `--wui-selectpicker-box-option-bgcolor-over`        |
| `--wui-selectpicker-box-option-iconsize`            |
| `--wui-selectpicker-box-option-iconcolor-out`       |
| `--wui-selectpicker-box-option-iconcolor-over`      |
| `--wui-selectpicker-box-option-iconcolor-selected`  |
| `--wui-selectpicker-box-option-iconcolor-disabled`  |
| `--wui-selectpicker-box-option-checkicon-src`       |
| `--wui-selectpicker-box-option-textcolor-empty`     |
| `--wui-selectpicker-box-option-textcolor-out`       |
| `--wui-selectpicker-box-option-textcolor-over`      |
| `--wui-selectpicker-box-option-textcolor-selected`  |
| `--wui-selectpicker-box-option-textcolor-disabled`  |
| `--wui-selectpicker-box-button-bordercolor`         |
| `--wui-selectpicker-box-button-textcolor-out`       |
| `--wui-selectpicker-box-button-textcolor-over`      |
| `--wui-selectpicker-mobile-overlay-bgcolor`         |
| `--wui-selectpicker-mobile-box-width`               |
| `--wui-selectpicker-mobile-box-borderradius`        |

#### Implementation

CSS Settings:

```css
:root {
	--wui-selectpicker-borderradius: 10px;
	--wui-selectpicker-borderwidth: 0px;
	--wui-selectpicker-bordercolor: transparent;
	--wui-selectpicker-bgcolor: #f6f6fa;
	--wui-selectpicker-opener-iconsize: 30px;
	--wui-selectpicker-opener-iconcolor-out: #000;
	--wui-selectpicker-opener-iconcolor-over: #1e90ff;
	--wui-selectpicker-opener-iconcolor-disabled: #d5dce3;
	--wui-selectpicker-opener-openicon-src: none;
	--wui-selectpicker-opener-closeicon-src: none;
	--wui-selectpicker-viewinput-paddingleft: 10px;
	--wui-selectpicker-viewinput-textcolor-out: #2d3a47;
	--wui-selectpicker-viewinput-textcolor-over: #1f2937;
	--wui-selectpicker-viewinput-textcolor-disabled: #d5dce3;
	--wui-selectpicker-box-shadowcolor: #959da5;
	--wui-selectpicker-box-borderradius: 15px;
	--wui-selectpicker-box-bordercolor: #f0f0f3;
	--wui-selectpicker-box-bgcolor: #fdfdfe;
	--wui-selectpicker-box-scroll-bgcolor-out: rgb(from #353a40 r g b / 20%);
	--wui-selectpicker-box-scroll-bgcolor-over: rgb(from #353a40 r g b / 40%);
	--wui-selectpicker-box-option-borderradius: 10px;
	--wui-selectpicker-box-option-bordercolor-out: #f0f0f3;
	--wui-selectpicker-box-option-bordercolor-over: #f0f0f3;
	--wui-selectpicker-box-option-bgcolor-out: transparent;
	--wui-selectpicker-box-option-bgcolor-over: #f6f6fa;
	--wui-selectpicker-box-option-iconsize: 24px;
	--wui-selectpicker-box-option-iconcolor-out: #1e90ff;
	--wui-selectpicker-box-option-iconcolor-over: #1e90ff;
	--wui-selectpicker-box-option-iconcolor-selected: #1e90ff;
	--wui-selectpicker-box-option-iconcolor-disabled: rgb(from #d5dce3 r g b / 40%);
	--wui-selectpicker-box-option-checkicon-src: none;
	--wui-selectpicker-box-option-textcolor-empty: rgb(from #2d3a47 r g b / 60%);
	--wui-selectpicker-box-option-textcolor-out: #2d3a47;
	--wui-selectpicker-box-option-textcolor-over: #2d3a47;
	--wui-selectpicker-box-option-textcolor-selected: #1e90ff;
	--wui-selectpicker-box-option-textcolor-disabled: rgb(from #d5dce3 r g b / 40%);
	--wui-selectpicker-box-button-bordercolor: #f0f0f3;
	--wui-selectpicker-box-button-textcolor-out: #1e90ff;
	--wui-selectpicker-box-button-textcolor-over: #1e90ff;
	--wui-selectpicker-mobile-overlay-bgcolor: rgb(from #010203 r g b / 20%);
	--wui-selectpicker-mobile-box-width: 280px;
	--wui-selectpicker-mobile-box-borderradius: 17px;
}
```

CSS Code:

```css
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
}

.my-selectpicker {
	max-width: 200px;
}

.my-output {
	position: absolute;
	top: 4px;
	left: 210px;
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Selectpicker/WUISelectpicker-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Selectpicker/WUISelectpicker-0.2.js"></script>
```

HTML code:

```html
<div class="wui-selectpicker my-selectpicker">
	<select name="mySelectpicker">
		<option value=""></option>
		<option value="1">Option 1</option>
		<option value="2">Option 2</option>
		<option value="3">Option 3</option>
		<!--
		<option value="4">Option 4</option>
		<option value="5">Option 5</option>
		<option value="6">Option 6</option>
		<option value="7">Option 7</option>
		<option value="8">Option 8</option>
		<option value="9">Option 9</option>
		<option value="10">Option 10</option>
		<option value="11">Option 11</option>
		<option value="12">Option 12</option>
		<option value="13">Option 13</option>
		<option value="14">Option 14</option>
		<option value="15">Option 15</option>
		<option value="16">Option 16</option>
		<option value="17">Option 17</option>
		<option value="18">Option 18</option>
		<option value="19">Option 19</option>
		-->
	</select>
</div>

<div class="my-output"></div>
```

JS code:

```js
// Create object
const output = document.body.querySelector(".my-output");
const selectpicker = new WUISelectpicker({
	selector: ".wui-selectpicker.my-selectpicker",
	value: "2",
	//lang: "en",
	//texts: {},
	//openDirection: "down",
	//multiple: false,
	//separatorValue: ",",
	//separatorText: ", ",
	//filterable: true,
	//enabled: true,
	onOpen: (value) => {
		output.textContent = `Opened - value: ${value}`;
	},
	onChange: (value) => {
		output.textContent = `Changed - value: ${value}`;
	}
});

// Initialize object
selectpicker.init();
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check out this working example on CodePen at the link: [https://codepen.io/wuijsproject/pen/WbxQBKX](https://codepen.io/wuijsproject/pen/WbxQBKX).

<a name="WUIDatepicker"></a>

### WUIDatepicker

Versión: `0.2`

Component for the implementation of date type data inputs based on HTML element `<input type="date">`.

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/WUI/Datepicker/WUIDatepicker-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Datepicker/WUIDatepicker-0.2.css) |
| JS   | [src/WUI/Datepicker/WUIDatepicker-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Datepicker/WUIDatepicker-0.2.js) |

#### Constructor

| Type          | Description |
| ------------- | ----------- |
| WUIDatepicker | `WUIDatepicker([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property      | Type       | Default value        | Description |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-datepicker"`  | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If more than one element matches the selector, only the first match will be included. |
| locales       | `string`   | `"en-US"`            | (get/set)<br><br>Locale code in `<ISO 639-1>-<ISO 3166-1 alpha-2>` format. For example: `es-CL`, `en-US`, `fr-FR`, etc. |
| value         | `string`   | `""`                 | (get/set)<br><br>Selected date in `yyyy-mm-dd` format. |
| min           | `string`   | `""`                 | (get/set)<br><br>Minimum allowed date in `yyyy-mm-dd` format. |
| max           | `string`   | `""`                 | (get/set)<br><br>Maximum allowed date in `yyyy-mm-dd` format. |
| monthsNames   | `array`    | `[]`                 | (get/set)<br><br>Custom names for months. If defined, overwrites names generated by `locales`. |
| weekDaysNames | `array`    | `[]`                 | (get/set)<br><br>Custom names for days of the week. If defined, overwrites names generated by `locales`. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Custom texts for the component buttons and messages. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Opening direction of the calendar.<br><br>Values:<br>• `"up"`, upwards.<br>• `"down"`, downwards. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Horizontal alignment of the calendar relative to the input.<br><br>Values:<br>• `"left"`, left.<br>• `"center"`, center.<br>• `"right"`, right. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Defines whether the input is enabled. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Function called when the calendar is opened. The function receives the current selected value as a parameter. |
| onChange      | `function` | `null`               | (get/set)<br><br>Function called when the selected value changes. The function receives the new selected value as a parameter. |

#### Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Returns the HTML container element of the object. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Returns the HTML element associated with the base data input `<input type="date">`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| open            | `void`               | `open()`<br><br>Opens the calendar. |
| close           | `void`               | `close()`<br><br>Closes the calendar. |
| toggle          | `void`               | `toggle()`<br><br>Toggles the opening state of the calendar. |
| toggleMode      | `void`               | `toggleMode()`<br><br>Toggles the view between days and months. |
| prev            | `void`               | `prev()`<br><br>Shows the previous period (month or year depending on the view). |
| next            | `void`               | `next()`<br><br>Shows the next period (month or year depending on the view). |
| cancel          | `void`               | `cancel()`<br><br>Cancels the current selection and reverts to the previous value, closing the calendar. |
| accept          | `void`               | `accept()`<br><br>Accepts the current selection and closes the calendar. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Returns whether the calendar is open. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Returns whether the calendar has no date selected. |
| isValid         | `boolean`            | `isValid()`<br><br>Returns whether the entered value corresponds to a valid date. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                         | Description |
| ------------------------------------------------ | ----------- |
| `--wui-datepicker-borderradius`                  |
| `--wui-datepicker-borderwidth`                   |
| `--wui-datepicker-bordercolor`                   |
| `--wui-datepicker-bgcolor`                       |
| `--wui-datepicker-opener-iconsize`               | 
| `--wui-datepicker-opener-iconcolor-out`          | 
| `--wui-datepicker-opener-iconcolor-over`         | 
| `--wui-datepicker-opener-iconcolor-disabled`     | 
| `--wui-datepicker-opener-openicon-src`           | 
| `--wui-datepicker-opener-closeicon-src`          | 
| `--wui-datepicker-viewinput-paddingleft`         |
| `--wui-datepicker-viewinput-textcolor-out`       |
| `--wui-datepicker-viewinput-textcolor-over`      |
| `--wui-datepicker-viewinput-textcolor-disabled`  |
| `--wui-datepicker-box-shadowcolor`               | 
| `--wui-datepicker-box-borderradius`              | 
| `--wui-datepicker-box-bordercolor`               | 
| `--wui-datepicker-box-bgcolor`                   | 
| `--wui-datepicker-box-period-iconsize`           | 
| `--wui-datepicker-box-period-iconcolor-out`      | 
| `--wui-datepicker-box-period-iconcolor-over`     | 
| `--wui-datepicker-box-period-iconcolor-disabled` | 
| `--wui-datepicker-box-period-upicon-src`         | 
| `--wui-datepicker-box-period-downicon-src`       | 
| `--wui-datepicker-box-paging-iconsize`           | 
| `--wui-datepicker-box-paging-iconcolor-out`      | 
| `--wui-datepicker-box-paging-iconcolor-over`     | 
| `--wui-datepicker-box-paging-iconcolor-disabled` | 
| `--wui-datepicker-box-paging-previcon-src`       | 
| `--wui-datepicker-box-paging-nexticon-src`       | 
| `--wui-datepicker-box-month-titlecolor`          | 
| `--wui-datepicker-box-month-bgcolor-today`       | 
| `--wui-datepicker-box-month-bgcolor-over`        | 
| `--wui-datepicker-box-month-bgcolor-selected`    | 
| `--wui-datepicker-box-month-textcolor-out`       | 
| `--wui-datepicker-box-month-textcolor-over`      | 
| `--wui-datepicker-box-month-textcolor-selected`  | 
| `--wui-datepicker-box-day-bgcolor-today`         | 
| `--wui-datepicker-box-day-bgcolor-over`          | 
| `--wui-datepicker-box-day-bgcolor-selected`      | 
| `--wui-datepicker-box-day-textcolor-out`         | 
| `--wui-datepicker-box-day-textcolor-over`        | 
| `--wui-datepicker-box-day-textcolor-selected`    | 
| `--wui-datepicker-box-button-textcolor-out`      | 
| `--wui-datepicker-box-button-textcolor-over`     | 
| `--wui-datepicker-mobile-overlay-bgcolor`        | 

#### Implementation

CSS settings:

```css
:root {
	--wui-datepicker-borderradius: 10px;
	--wui-datepicker-borderwidth: 0px;
	--wui-datepicker-bordercolor: transparent;
	--wui-datepicker-bgcolor: #f6f6fa;
	--wui-datepicker-opener-iconsize: 30px;
	--wui-datepicker-opener-iconcolor-out: #000;
	--wui-datepicker-opener-iconcolor-over: #1e90ff;
	--wui-datepicker-opener-iconcolor-disabled: #d5dce3;
	--wui-datepicker-opener-openicon-src: none;
	--wui-datepicker-opener-closeicon-src: none;
	--wui-datepicker-viewinput-paddingleft: 10px;
	--wui-datepicker-viewinput-textcolor-out: #2d3a47;
	--wui-datepicker-viewinput-textcolor-over: #1f2937;
	--wui-datepicker-viewinput-textcolor-disabled: #d5dce3;
	--wui-datepicker-box-shadowcolor: #959da5;
	--wui-datepicker-box-borderradius: 15px;
	--wui-datepicker-box-bordercolor: #f0f0f3;
	--wui-datepicker-box-bgcolor: rgb(from #fdfdfe r g b / 100%);
	--wui-datepicker-box-period-iconsize: 20px;
	--wui-datepicker-box-period-iconcolor-out: #000;
	--wui-datepicker-box-period-iconcolor-over: #1e90ff;
	--wui-datepicker-box-period-iconcolor-disabled: #d5dce3;
	--wui-datepicker-box-period-upicon-src: none;
	--wui-datepicker-box-period-downicon-src: none;
	--wui-datepicker-box-paging-iconsize: 26px;
	--wui-datepicker-box-paging-iconcolor-out: #1e90ff;
	--wui-datepicker-box-paging-iconcolor-over: #1e90ff;
	--wui-datepicker-box-paging-iconcolor-disabled: #d5dce3;
	--wui-datepicker-box-paging-previcon-src: none;
	--wui-datepicker-box-paging-nexticon-src: none;
	--wui-datepicker-box-month-titlecolor: #888;
	--wui-datepicker-box-month-bgcolor-today: #f0f0f3;
	--wui-datepicker-box-month-bgcolor-over: rgb(from #1e90ff r g b / 20%);
	--wui-datepicker-box-month-bgcolor-selected: #1e90ff;
	--wui-datepicker-box-month-textcolor-out: #000;
	--wui-datepicker-box-month-textcolor-over: #1e90ff;
	--wui-datepicker-box-month-textcolor-selected: #fff;
	--wui-datepicker-box-day-bgcolor-today: #f0f0f3;
	--wui-datepicker-box-day-bgcolor-over: rgb(from #1e90ff r g b / 20%);
	--wui-datepicker-box-day-bgcolor-selected: #1e90ff;
	--wui-datepicker-box-day-textcolor-out: #000;
	--wui-datepicker-box-day-textcolor-over: #1e90ff;
	--wui-datepicker-box-day-textcolor-selected: #fff;
	--wui-datepicker-box-button-textcolor-out: #1e90ff;
	--wui-datepicker-box-button-textcolor-over: #1e90ff;
	--wui-datepicker-mobile-overlay-bgcolor: rgb(from #010203 r g b / 20%);
}
```

CSS code:

```css
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
}

.my-datepicker {
	max-width: 130px;
}

.my-output {
	position: absolute;
	top: 4px;
	left: 210px;
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Datepicker/WUIDatepicker-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Datepicker/WUIDatepicker-0.2.js"></script>
```

HTML code:

```html
<div class="wui-datepicker my-datepicker">
	<input type="date" name="myDate">
</div>

<div class="my-output"></div>
```

JS code:

```js
// Create object
const output = document.body.querySelector(".my-output");
const datepicker = new WUIDatepicker({
	selector: ".wui-datepicker.my-datepicker",
	value: "2026-01-01",
	//locales: "en-US",
	//min: "",
	//max: "",
	//monthsNames: [],
	//weekDaysNames: [],
	//texts: {},
	//openDirection: "down",
	//boxAlign: "left",
	//enabled: true,
	onOpen: (value) => {
		output.textContent = `Opened - value: ${value}`;
	},
	onChange: (value) => {
		output.textContent = `Changed - value: ${value}`;
	}
});

// Initialize object
datepicker.init();
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check out this working example on CodePen at the link: [https://codepen.io/wuijsproject/pen/QwEyyZN](https://codepen.io/wuijsproject/pen/QwEyyZN).

<a name="WUITimepicker"></a>

### WUITimepicker

Versión: `0.2`

Component for the implementation of time type data inputs based on HTML element `<input type="time">`.

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/WUI/Timepicker/WUITimepicker-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Timepicker/WUITimepicker-0.2.css) |
| JS   | [src/WUI/Timepicker/WUITimepicker-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Timepicker/WUITimepicker-0.2.js) |

#### Constructor

| Type          | Description |
| ------------- | ----------- |
| WUITimepicker | `WUITimepicker([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property      | Type       | Default value        | Description |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-timepicker"`  | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If more than one element matches the selector, only the first match will be included. |
| value         | `string`   | `""`                 | (get/set)<br><br>Selected time in `hh:mm` format (24 hours). |
| min           | `string`   | `"00:00"`            | (get/set)<br><br>Minimum allowed time in `hh:mm` format. |
| max           | `string`   | `"23:59"`            | (get/set)<br><br>Maximum allowed time in `hh:mm` format. |
| lang          | `string`   | `"en"`               | (get/set)<br><br>Component language.<br><br>Values:<br>• `"de"`, German.<br>• `"en"`, English.<br>• `"es"`, Spanish. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Custom texts for the component buttons and messages. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Opening direction of the time picker.<br><br>Values:<br>• `"up"`, upwards.<br>• `"down"`, downwards. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Horizontal alignment of the calendar relative to the input.<br><br>Values:<br>• `"left"`, left.<br>• `"center"`, center.<br>• `"right"`, right. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Defines whether the input is enabled. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Function called when the time picker is opened. The function receives the current selected value as a parameter. |
| onChange      | `function` | `null`               | (get/set)<br><br>Function called when the selected value changes. The function receives the new selected value as a parameter. |

#### Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Returns the HTML container element of the object. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Returns the HTML element associated with the base data input `<input type="time">`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| open            | `void`               | `open()`<br><br>Opens the time picker. |
| close           | `void`               | `close()`<br><br>Closes the time picker. |
| toggle          | `void`               | `toggle()`<br><br>Toggles the opening state of the time picker. |
| cancel          | `void`               | `cancel()`<br><br>Cancels the current selection and reverts to the previous value, closing the time picker. |
| accept          | `void`               | `accept()`<br><br>Accepts the current selection and closes the time picker. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Returns whether the time picker is open. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Returns whether the time picker has no time selected. |
| isValid         | `boolean`            | `isValid()`<br><br>Returns whether the entered value corresponds to a valid time. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                         | Description |
| ------------------------------------------------ | ----------- |
| `--wui-timepicker-borderradius`                  |
| `--wui-timepicker-borderwidth`                   |
| `--wui-timepicker-bordercolor`                   |
| `--wui-timepicker-bgcolor`                       |
| `--wui-timepicker-opener-iconsize`               |
| `--wui-timepicker-opener-iconcolor-out`          |
| `--wui-timepicker-opener-iconcolor-over`         |
| `--wui-timepicker-opener-iconcolor-disabled`     |
| `--wui-timepicker-opener-openicon-src`           |
| `--wui-timepicker-opener-closeicon-src`          |
| `--wui-timepicker-viewinput-paddingleft`         |
| `--wui-timepicker-viewinput-textcolor-out`       |
| `--wui-timepicker-viewinput-textcolor-over`      |
| `--wui-timepicker-viewinput-textcolor-disabled`  |
| `--wui-timepicker-box-shadowcolor`               |
| `--wui-timepicker-box-borderradius`              |
| `--wui-timepicker-box-bordercolor`               |
| `--wui-timepicker-box-bgcolor`                   |
| `--wui-timepicker-box-scroll-bgcolor-out`        | 
| `--wui-timepicker-box-scroll-bgcolor-over`       |
| `--wui-timepicker-box-option-textcolor-out`      |
| `--wui-timepicker-box-option-bgcolor-over`       |
| `--wui-timepicker-box-option-textcolor-over`     |
| `--wui-timepicker-box-option-bgcolor-now`        |
| `--wui-timepicker-box-option-bgcolor-selected`   |
| `--wui-timepicker-box-option-textcolor-selected` |
| `--wui-timepicker-box-button-textcolor-out`      |
| `--wui-timepicker-box-button-textcolor-over`     |
| `--wui-timepicker-mobile-overlay-bgcolor`        |

#### Implementation

CSS settings:

```css
:root {
	--wui-timepicker-borderradius: 10px;
	--wui-timepicker-borderwidth: 0px;
	--wui-timepicker-bordercolor: transparent;
	--wui-timepicker-bgcolor: #f6f6fa;
	--wui-timepicker-opener-iconsize: 30px;
	--wui-timepicker-opener-iconcolor-out: #000;
	--wui-timepicker-opener-iconcolor-over: #1e90ff;
	--wui-timepicker-opener-iconcolor-disabled: #d5dce3;
	--wui-timepicker-opener-openicon-src: none;
	--wui-timepicker-opener-closeicon-src: none;
	--wui-timepicker-viewinput-paddingleft: 10px;
	--wui-timepicker-viewinput-textcolor-out: #2d3a47;
	--wui-timepicker-viewinput-textcolor-over: #1f2937;
	--wui-timepicker-viewinput-textcolor-disabled: #d5dce3;
	--wui-timepicker-box-shadowcolor: #959da5;
	--wui-timepicker-box-borderradius: 15px;
	--wui-timepicker-box-bordercolor: #f0f0f3;
	--wui-timepicker-box-bgcolor: rgb(from #fdfdfe r g b / 100%);
	--wui-timepicker-box-scroll-bgcolor-out: rgb(from #353a40 r g b / 20%);
	--wui-timepicker-box-scroll-bgcolor-over: rgb(from #353a40 r g b / 40%);
	--wui-timepicker-box-option-bgcolor-now: #f0f0f3;
	--wui-timepicker-box-option-bgcolor-over: rgb(from #1e90ff r g b / 20%);
	--wui-timepicker-box-option-bgcolor-selected: #1e90ff;
	--wui-timepicker-box-option-textcolor-out: #000;
	--wui-timepicker-box-option-textcolor-over: #1e90ff;
	--wui-timepicker-box-option-textcolor-selected: #fff;
	--wui-timepicker-box-button-textcolor-out: #1e90ff;
	--wui-timepicker-box-button-textcolor-over: #1e90ff;
	--wui-timepicker-mobile-overlay-bgcolor: rgb(from #010203 r g b / 20%);
}
```

CSS code:

```css
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
}

.my-timepicker {
	max-width: 90px;
}

.my-output {
	position: absolute;
	top: 4px;
	left: 210px;
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Timepicker/WUITimepicker-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Timepicker/WUITimepicker-0.2.js"></script>
```

HTML code:

```html
<div class="wui-timepicker my-timepicker">
	<input type="time" name="myTime">
</div>

<div class="my-output"></div>
```

JS code:

```js
// Create object
const output = document.body.querySelector(".my-output");
const timepicker = new WUITimepicker({
	selector: ".wui-timepicker.my-timepicker",
	value: "10:30",
	//min: "00:00",
	//max: "23:59",
	//lang: "en",
	//texts: {},
	//openDirection: "down",
	//boxAlign: "left",
	//enabled: true,
	onOpen: (value) => {
		output.textContent = `Opened - value: ${value}`;
	},
	onChange: (value) => {
		output.textContent = `Changed - value: ${value}`;
	}
});

// Initialize object
timepicker.init();
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check out this working example on CodePen at the link: [https://codepen.io/wuijsproject/pen/azZdGrY](https://codepen.io/wuijsproject/pen/azZdGrY).

<a name="WUIColorpicker"></a>

### WUIColorpicker

Version: `0.2`

Component for the implementation of color picker type data inputs based on HTML element `<input type="color">`.

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/WUI/Colorpicker/WUIColorpicker-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Colorpicker/WUIColorpicker-0.2.css) |
| JS   | [src/WUI/Colorpicker/WUIColorpicker-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Colorpicker/WUIColorpicker-0.2.js) |

#### Constructor

| Type           | Description |
| -------------- | ----------- |
| WUIColorpicker | `WUIColorpicker([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property      | Type       | Default value        | Description |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-colorpicker"` | (get/set)<br><br>CSS selector that defines the HTML container element of the object. If more than one element matches the selector, only the first match will be included. |
| value         | `string`   | `""`                 | (get/set)<br><br>Selected color in hexadecimal format or CSS color name. Returns the value in hexadecimal. |
| emptyValue    | `string`   | `"#000001"`          | (get/set)<br><br>Hexadecimal value representing an empty or unselected color. |
| lang          | `string`   | `"en"`               | (get/set)<br><br>Component language.<br><br>Values:<br>• `"de"`, German.<br>• `"en"`, English.<br>• `"es"`, Spanish. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Custom texts for the component buttons and messages. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Opening direction of the color picker.<br><br>Values:<br>• `"up"`, upwards.<br>• `"down"`, downwards. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Horizontal alignment of the calendar relative to the input.<br><br>Values:<br>• `"left"`, left.<br>• `"center"`, center.<br>• `"right"`, right. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Defines whether the data input is enabled. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Function to execute when the color picker is opened. Receives the current value as an argument. |
| onChange      | `function` | `null`               | (get/set)<br><br>Function to execute when the selected value changes. Receives the new value as an argument. |

#### Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Returns the HTML container element of the object. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Returns the HTML element associated with the base data input `<input type="color">`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| open            | `void`               | `open()`<br><br>Opens the color picker. |
| close           | `void`               | `close()`<br><br>Closes the color picker. |
| toggle          | `void`               | `toggle()`<br><br>Toggles the opening state of the color picker. |
| selectMode      | `void`               | `selectMode(mode)`<br><br>Arguments:<br>**• mode:** `string`.<br><br>Selects the display mode (`"grid"` or `"list"`). |
| cancel          | `void`               | `cancel()`<br><br>Cancels the current selection and reverts to the previous value, closing the color picker. |
| accept          | `void`               | `accept()`<br><br>Accepts the current selection and closes the color picker. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Returns whether the color picker is open. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Returns whether the color picker has no color selected. |
| isValid         | `boolean`            | `isValid()`<br><br>Returns whether the entered value corresponds to a valid color. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                            | Description |
| --------------------------------------------------- | ----------- |
| `--wui-colorpicker-opener-iconsize`                 |
| `--wui-colorpicker-opener-iconcolor-out`            |
| `--wui-colorpicker-opener-iconcolor-over`           |
| `--wui-colorpicker-opener-iconcolor-disabled`       |
| `--wui-colorpicker-viewbutton-size`                 |
| `--wui-colorpicker-viewbutton-bordercolor-out`      |
| `--wui-colorpicker-viewbutton-bgcolor-out`          |
| `--wui-colorpicker-viewbutton-bordercolor-over`     |
| `--wui-colorpicker-viewbutton-bgcolor-over`         |
| `--wui-colorpicker-viewbutton-bordercolor-disabled` |
| `--wui-colorpicker-viewbutton-bgcolor-disabled`     |
| `--wui-colorpicker-viewcolor-borderwidth`           |
| `--wui-colorpicker-viewcolor-bordercolor`           |
| `--wui-colorpicker-box-shadowcolor`                 |
| `--wui-colorpicker-box-borderradius`                |
| `--wui-colorpicker-box-bordercolor`                 |
| `--wui-colorpicker-box-bgcolor`                     |
| `--wui-colorpicker-box-scroll-bgcolor-out`          |
| `--wui-colorpicker-box-scroll-bgcolor-over`         |
| `--wui-colorpicker-box-tab-textcolor-out`           |
| `--wui-colorpicker-box-tab-textcolor-selected`      |
| `--wui-colorpicker-box-option-bgcolor-out`          |
| `--wui-colorpicker-box-option-bordercolor-over`     |
| `--wui-colorpicker-box-option-bgcolor-over`         |
| `--wui-colorpicker-box-option-bgcolor-selected`     |
| `--wui-colorpicker-box-option-textcolor-out`        |
| `--wui-colorpicker-box-option-textcolor-over`       |
| `--wui-colorpicker-box-option-textcolor-selected`   |
| `--wui-colorpicker-box-preview-textcolor-out`       |
| `--wui-colorpicker-box-preview-textcolor-empty`     |
| `--wui-colorpicker-box-button-textcolor-out`        |
| `--wui-colorpicker-box-button-textcolor-over`       |
| `--wui-colorpicker-mobile-overlay-bgcolor`          |

#### Implementation

CSS code:

```css
:root {
	--wui-colorpicker-opener-iconsize: 30px;
	--wui-colorpicker-opener-iconcolor-out: #000;
	--wui-colorpicker-opener-iconcolor-over: #1e90ff;
	--wui-colorpicker-opener-iconcolor-disabled: #d5dce3;
	--wui-colorpicker-opener-openicon-src: none;
	--wui-colorpicker-opener-closeicon-src: none;
	--wui-colorpicker-viewbutton-size: 30px;
	--wui-colorpicker-viewbutton-bordercolor-out: rgb(from #1e90ff r g b / 20%);
	--wui-colorpicker-viewbutton-bordercolor-over: #1e90ff;
	--wui-colorpicker-viewbutton-bordercolor-invalid: #f44343;
	--wui-colorpicker-viewbutton-bordercolor-disabled: #d5dce3;
	--wui-colorpicker-viewbutton-bgcolor-out: transparent;
	--wui-colorpicker-viewbutton-bgcolor-over: transparent;
	--wui-colorpicker-viewbutton-bgcolor-disabled: transparent;
	--wui-colorpicker-viewcolor-borderwidth: 1px;
	--wui-colorpicker-viewcolor-bordercolor: rgb(from #1e90ff r g b / 20%);
	--wui-colorpicker-viewcolor-emptyicon-src: none;
	--wui-colorpicker-box-shadowcolor: #959da5;
	--wui-colorpicker-box-borderradius: 15px;
	--wui-colorpicker-box-bordercolor: #f0f0f3;
	--wui-colorpicker-box-bgcolor: rgb(from #fff r g b / 80%);
	--wui-colorpicker-box-scroll-bgcolor-out: rgb(from #353a40 r g b / 20%);
	--wui-colorpicker-box-scroll-bgcolor-over: rgb(from #353a40 r g b / 40%);
	--wui-colorpicker-box-tab-textcolor-out: #2d3a47;
	--wui-colorpicker-box-tab-textcolor-selected: #1e90ff;
	--wui-colorpicker-box-option-bordercolor-out: #f0f0f3;
	--wui-colorpicker-box-option-bordercolor-over: #f0f0f3;
	--wui-colorpicker-box-option-bgcolor-out: transparent;
	--wui-colorpicker-box-option-bgcolor-over: #f6f6fa;
	--wui-colorpicker-box-option-bgcolor-selected: #1e90ff;
	--wui-colorpicker-box-option-textcolor-out: #000;
	--wui-colorpicker-box-option-textcolor-over: #1e90ff;
	--wui-colorpicker-box-option-textcolor-selected: #fff;
	--wui-colorpicker-box-preview-textcolor-out: #000;
	--wui-colorpicker-box-preview-textcolor-empty: rgb(from #2d3a47 r g b / 60%);
	--wui-colorpicker-box-button-textcolor-out: #1e90ff;
	--wui-colorpicker-box-button-textcolor-over: #1e90ff;
	--wui-colorpicker-mobile-overlay-bgcolor: rgb(from #010203 r g b / 20%);
}
```

Código CSS:

```css
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
}

.my-colorpicker {}

.my-output {
	position: absolute;
	top: 4px;
	left: 210px;
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Colorpicker/WUIColorpicker-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Colorpicker/WUIColorpicker-0.2.js"></script>
```

HTML code:

```html
<div class="wui-colorpicker my-colorpicker">
	<input type="color" name="myColor">
</div>

<div class="my-output"></div>
```

JS code:

```js
// Create object
const output = document.body.querySelector(".my-output");
const colorpicker = new WUIColorpicker({
	selector: ".wui-colorpicker.my-colorpicker",
	value: "#1e90ff",
	//emptyValue: "#000001",
	//lang: "en",
	//texts: {},
	//openDirection: "down",
	//boxAlign: "left",
	//enabled: true,
	onOpen: (value) => {
		output.textContent = `Opened - value: ${value}`;
	},
	onChange: (value) => {
		output.textContent = `Changed - value: ${value}`;
	}
});

// Initialize object
colorpicker.init();
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check out this working example on CodePen at the link: [https://codepen.io/wuijsproject/pen/bNeeobP](https://codepen.io/wuijsproject/pen/bNeeobP).

<a name="WUICheckbox"></a>

### WUICheckbox

Version: `0.2`

Component for the implementation of checkbox type data inputs based on HTML element `<input type="checkbox">`.

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/WUI/Checkbox/WUICheckbox-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Checkbox/WUICheckbox-0.2.css) |
| JS   | [src/WUI/Checkbox/WUICheckbox-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Checkbox/WUICheckbox-0.2.js) |

#### Constructor

| Type        | Description |
| ----------- | ----------- |
| WUICheckbox | `WUICheckbox([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property | Type       | Default value     | Description |
| -------- | ---------- | ----------------- | ----------- |
| selector | `string`   | `".wui-checkbox"` | (get/set)<br><br>CSS selector defining the `HTMLDivElement` HTML element wrapping the `checkbox` type `HTMLInputElement` element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| value    | `string`   | `"1"`             | (get/set)<br><br>Value that the checkbox will take when it is checked. |
| checked  | `boolean`  | `false`           | (get/set)<br><br>Defines if the checkbox is checked. |
| enabled  | `boolean`  | `true`            | (get/set)<br><br>Defines if the checkbox is enabled. |
| onChange | `function` | `null`            | (get/set)<br><br>Function called when the checkbox state changes. The function receives as a parameter the boolean state `checked` and the value of the check box. |

#### Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLDivElement`     | `getElement()`<br><br>Returns the HTML container element of the object. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Returns the HTML element associated with the base data input `<input type="checkbox">`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| toggle          | `void`               | `toggle()`<br><br>Toggles the checked/unchecked state of the checkbox. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                                      | Description |
| --------------------------------------------- | ----------- |
| `--wui-checkbox-button-size`                  |             |
| `--wui-checkbox-bordercolor-out`              |             |
| `--wui-checkbox-bordercolor-over`             |             |
| `--wui-checkbox-bordercolor-checked`          |             |
| `--wui-checkbox-bordercolor-invalid`          |             |
| `--wui-checkbox-bordercolor-disabled`         |             |
| `--wui-checkbox-bgcolor-out`                  |             |
| `--wui-checkbox-bgcolor-over`                 |             |
| `--wui-checkbox-bgcolor-checked`              |             |
| `--wui-checkbox-bgcolor-disabled`             |             |
| `--wui-checkbox-button-bordercolor-out`       |             |
| `--wui-checkbox-button-bordercolor-over`      |             |
| `--wui-checkbox-button-bordercolor-checked`   |             |
| `--wui-checkbox-button-bordercolor-disabled`  |             |
| `--wui-checkbox-button-bgcolor-out`           |             |
| `--wui-checkbox-button-bgcolor-over`          |             |
| `--wui-checkbox-button-bgcolor-checked`       |             |
| `--wui-checkbox-button-bgcolor-disabled`      |             |

#### Implementation

CSS settings:

```css
:root {

	/* wui-checkbox */

	--wui-checkbox-button-size: 30px;
	--wui-checkbox-bordercolor-out: rgb(from #1e90ff r g b / 20%);
	--wui-checkbox-bordercolor-over: #1e90ff;
	--wui-checkbox-bordercolor-checked: #1e90ff;
	--wui-checkbox-bordercolor-invalid: #f44343;
	--wui-checkbox-bordercolor-disabled: #d5dce3;
	--wui-checkbox-bgcolor-out: rgb(from #1e90ff r g b / 4%);
	--wui-checkbox-bgcolor-over: rgb(from #1e90ff r g b / 4%);
	--wui-checkbox-bgcolor-checked: #1e90ff;
	--wui-checkbox-bgcolor-disabled: rgb(from #d5dce3 r g b / 20%);
	--wui-checkbox-button-bordercolor-out: rgb(from #1e90ff r g b / 20%);
	--wui-checkbox-button-bordercolor-over: #1e90ff;
	--wui-checkbox-button-bordercolor-checked: #1e90ff;
	--wui-checkbox-button-bordercolor-disabled: #d5dce3;
	--wui-checkbox-button-bgcolor-out: #f6f6fa;
	--wui-checkbox-button-bgcolor-over: rgb(from #1e90ff r g b / 4%);
	--wui-checkbox-button-bgcolor-checked: #f6f6fa;
	--wui-checkbox-button-bgcolor-disabled: #d5dce3;
}
```

CSS code:

```css
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
}

.my-checkbox {}

.my-output {
	position: absolute;
	top: 4px;
	left: 210px;
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Checkbox/WUICheckbox-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Checkbox/WUICheckbox-0.2.js"></script>
```

HTML code:

```html
<div class="wui-checkbox my-checkbox">
	<input type="checkbox" name="myCheckbox" value="1">
</div>

<div class="my-output"></div>
```

JS code:

```js
// Create object
const output = document.body.querySelector(".my-output");
const checkbox = new WUICheckbox({
	selector: ".wui-checkbox.my-checkbox",
	value: "1",
	checked: true,
	//enabled: true,
	onChange: (value, checked) => {
		output.textContent = `Change - value: ${value}, checked: ${checked}`;
	}
});

// Initialize object
checkbox.init();
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check out this working example on CodePen at the link: [https://codepen.io/wuijsproject/pen/qENNwPa](https://codepen.io/wuijsproject/pen/qENNwPa).

<a name="WUIIntensity"></a>

### WUIIntensity

Version: `0.1`

Component for the implementation of 4-level intensity selector type data inputs: none, low, half, and high based on HTML element `<input type="range">`.

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/WUI/Intensity/WUIIntensity-0.1.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Intensity/WUIIntensity-0.1.css) |
| JS   | [src/WUI/Intensity/WUIIntensity-0.1.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Intensity/WUIIntensity-0.1.js) |

#### Constructor

| Type         | Description |
| ------------ | ----------- |
| WUIIntensity | `WUIIntensity([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property | Type       | Default value      | Description |
| -------- | ---------- | ------------------ | ----------- |
| selector | `string`   | `".wui-intensity"` | (get/set)<br><br>CSS selector defining the `HTMLDivElement` HTML element wrapping the `range` type `HTMLInputElement` element that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| value    | `number`   | `0`                | (get/set)<br><br>Intensity value (0: none, 1: low, 2: half, 3: high). Also accepts strings `"none"`, `"low"`, `"half"`, `"high"`. |
| enabled  | `boolean`  | `true`             | (get/set)<br><br>Defines if the selector is enabled. |
| onChange | `function` | `null`             | (get/set)<br><br>Function called when the value changes. The function receives the integer value (0-3) and the associated string as parameters. |

#### Methods

| Method          | Return type          | Description |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLDivElement`     | `getElement()`<br><br>Returns the HTML container element of the object. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Returns an array of the HTML elements that are part of the value display. |
| getInput        | `HTMLInputElement`   | `getInput()`<br><br>Returns the HTML element associated with the base data input `<input type="range">`. |
| init            | `void`               | `init()`<br><br>Initializes the object. |
| destroy         | `void`               | `destroy()`<br><br>Destroyer. |

#### CSS Variables

| Variable                          | Description |
| --------------------------------- | ----------- |
| `--wui-intensity-height`          |             |
| `--wui-intensity-borderradius`    |             |
| `--wui-intensity-bordercolor-out` |             |
| `--wui-intensity-bgcolor-none`    |             |
| `--wui-intensity-bgcolor-low`     |             |
| `--wui-intensity-bgcolor-half`    |             |
| `--wui-intensity-bgcolor-high`    |             |

#### Implementation

CSS settings:

```css
:root {
	--wui-intensity-height: 30px;
	--wui-intensity-borderradius: 15px;
	--wui-intensity-bordercolor-out: rgb(from #1e90ff r g b / 20%);
	--wui-intensity-bordercolor-disabled: #d5dce3;
	--wui-intensity-bgcolor-none: #f6f6fa;
	--wui-intensity-bgcolor-low: mediumaquamarine;
	--wui-intensity-bgcolor-half: darkorange;
	--wui-intensity-bgcolor-high: orangered;
}
```

CSS code:

```css
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
}

.my-intensity {}

.my-output {
	position: absolute;
	top: 4px;
	left: 210px;
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Intensity/WUIIntensity-0.1.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Intensity/WUIIntensity-0.1.js"></script>
```

HTML code:

```html
<div class="wui-intensity my-intensity">
	<input type="range" name="myIntensity" value="0" min="0" max="3" step="1">
</div>

<div class="my-output"></div>
```

JS code:

```js
// Create object
const output = document.body.querySelector(".my-output");
const intensity = new WUIIntensity({
	selector: ".wui-intensity.my-intensity",
	value: 1,
	//enabled: true,
	onChange: (event, value) => {
		output.textContent = `Change - value: ${value}`;
	}
});

// Initialize object
intensity.init();
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLDivElement`, the object will not be initialized.

> [!TIP]
> You can check out this working example on CodePen at the link: [https://codepen.io/wuijsproject/pen/GgqNpxJ](https://codepen.io/wuijsproject/pen/GgqNpxJ).

<a name="WUIButton"></a>

### WUIButton

Versión: `0.2`

Component for the implementation of.

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/WUI/Button/WUIButton-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Button/WUIButton-0.2.css) |
| JS   | [src/WUI/Button/WUIButton-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Button/WUIButton-0.2.js) |

#### Constructor

| Type      | Description |
| --------- | ----------- |
| WUIButton | `WUIButton([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property     | Type       | Default value.  | Description |
| ------------ | ---------- | --------------- | ----------- |
| selector     | `string`   | `".wui-button"` | (get/set)<br><br>CSS selector that defines the HTML element of type `HTMLButtonElement` that will be converted into the object. If more than one element matches the selector, only the first match will be included. |
| text         | `string`   | `""`            | (get/set)<br><br>Text or HTML content of the element. |
| selectable   | `boolean`  | `true`          | (get/set)<br><br>Define whether the button is selectable. |
| locked       | `boolean`  | `false`         | (get/set)<br><br>Defines whether the button is locked. |
| enabled      | `boolean`  | `true`          | (get/set)<br><br>Defines whether the button is enabled. |
| onClick      | `function` | `null`          | (get/set)<br><br>Function that is called when the button is clicked. The function does not receive parameters. |
| onDblClick   | `function` | `null`          | (get/set)<br><br>Function that is called when the button is double-clicked. The function does not receive parameters. |

#### Methods

| Method       | Return type   | Description |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Returns the HTML container element of the object. |
| init         | `void`        | `init()`<br><br>Initializes the object. |
| focus        | `void`        | `focus()`<br><br>Focus on the button. |
| select       | `select`      | `select()`<br><br>Select the button. |
| unselect     | `unselect`    | `unselect()`<br><br>Unselect the button. |
| isSelected   | `isSelected`  | `isSelected()`<br><br>Returns if the button is selected. |

#### CSS Variables

| Variable                                    | Description |
| ------------------------------------------- | ----------- |
| `--wui-button-default-minwidth`             |
| `--wui-button-default-height`               |
| `--wui-button-default-bordercolor-out`      |
| `--wui-button-default-bordercolor-over`     |
| `--wui-button-default-bordercolor-selected` |
| `--wui-button-default-bordercolor-disabled` |
| `--wui-button-default-bgcolor-out`          |
| `--wui-button-default-bgcolor-over`         |
| `--wui-button-default-bgcolor-selected`     |
| `--wui-button-default-bgcolor-disabled`     |
| `--wui-button-default-textcolor-out`        |
| `--wui-button-default-textcolor-over`       |
| `--wui-button-default-textcolor-selected`   |
| `--wui-button-default-textcolor-disabled`   |
| `--wui-button-default-textsize`             |
| `--wui-button-submit-minwidth`              |
| `--wui-button-submit-height`                |
| `--wui-button-submit-bordercolor-out`       |
| `--wui-button-submit-bordercolor-over`      |
| `--wui-button-submit-bordercolor-selected`  |
| `--wui-button-submit-bordercolor-disabled`  |
| `--wui-button-submit-bgcolor-out`           |
| `--wui-button-submit-bgcolor-over`          |
| `--wui-button-submit-bgcolor-mobile`        |
| `--wui-button-submit-bgcolor-selected`      |
| `--wui-button-submit-bgcolor-disabled`      |
| `--wui-button-submit-textcolor-out`         |
| `--wui-button-submit-textcolor-over`        |
| `--wui-button-submit-textcolor-mobile`      |
| `--wui-button-submit-textcolor-selected`    |
| `--wui-button-submit-textcolor-disabled`    |
| `--wui-button-submit-textsize`              |
| `--wui-button-warning-bordercolor-out`      |
| `--wui-button-warning-bordercolor-over`     |
| `--wui-button-warning-bordercolor-selected` |
| `--wui-button-warning-bordercolor-disabled` |
| `--wui-button-warning-bgcolor-out`          |
| `--wui-button-warning-bgcolor-over`         |
| `--wui-button-warning-bgcolor-selected`     |
| `--wui-button-warning-bgcolor-disabled`     |
| `--wui-button-warning-textcolor-out`        |
| `--wui-button-warning-textcolor-over`       |
| `--wui-button-warning-textcolor-mobile`     |
| `--wui-button-warning-textcolor-selected`   |
| `--wui-button-warning-textcolor-disabled`   |
| `--wui-button-icon-float-padding`           |
| `--wui-button-mobile-default-height`        |
| `--wui-button-mobile-submit-height`         |
| `--wui-button-mobile-icon-float-padding`    |
| `--wui-button-form-default-minwidth`        |

#### Implementation

CSS settings:

```css
:root {

	/* wui-icon */

	--wui-icon-size: 24px;
	--wui-icon-smallsize: 14px;
	--wui-icon-bgcolor-out: rgb(from #353a40 r g b / 70%);
	--wui-icon-bgcolor-over: #353a40;

	/* wui-button */

	--wui-button-default-minwidth: 200px;
	--wui-button-default-height: 34px;
	--wui-button-default-bordercolor-out: #d5dce3;
	--wui-button-default-bordercolor-over: #1e90ff;
	--wui-button-default-bordercolor-selected: #1e90ff;
	--wui-button-default-bordercolor-disabled: #d5dce3;
	--wui-button-default-bgcolor-out: transparent;
	--wui-button-default-bgcolor-over: transparent;
	--wui-button-default-bgcolor-selected: #1e90ff;
	--wui-button-default-bgcolor-disabled: transparent;
	--wui-button-default-textcolor-out: #1e90ff;
	--wui-button-default-textcolor-over: #1e90ff;
	--wui-button-default-textcolor-selected: #fff;
	--wui-button-default-textcolor-disabled: #d5dce3;
	--wui-button-default-textsize: 15px;
	--wui-button-submit-minwidth: 200px;
	--wui-button-submit-height: 34px;
	--wui-button-submit-bordercolor-out: rgb(from #1e90ff r g b / 20%);
	--wui-button-submit-bordercolor-over: #1e90ff;
	--wui-button-submit-bordercolor-selected: #1e90ff;
	--wui-button-submit-bordercolor-disabled: #d5dce3;
	--wui-button-submit-bgcolor-out: #1e90ff;
	--wui-button-submit-bgcolor-over: #1e90ff;
	--wui-button-submit-bgcolor-mobile: rgb(from #959da5 r g b / 20%);
	--wui-button-submit-bgcolor-selected: #1e90ff;
	--wui-button-submit-bgcolor-disabled: #d5dce3;
	--wui-button-submit-textcolor-out: #fff;
	--wui-button-submit-textcolor-over: #fff;
	--wui-button-submit-textcolor-mobile: #1e90ff;
	--wui-button-submit-textcolor-selected: #fff;
	--wui-button-submit-textcolor-disabled: #d5dce3;
	--wui-button-submit-textsize: 15px;
	--wui-button-warning-bordercolor-out: rgb(from #f44343 r g b / 25%);
	--wui-button-warning-bordercolor-over: #f44343;
	--wui-button-warning-bordercolor-selected: #f44343;
	--wui-button-warning-bordercolor-disabled: #d5dce3;
	--wui-button-warning-bgcolor-out: #f44343;
	--wui-button-warning-bgcolor-over: #f44343;
	--wui-button-warning-bgcolor-selected: #f44343;
	--wui-button-warning-bgcolor-disabled: #d5dce3;
	--wui-button-warning-textcolor-out: #fff;
	--wui-button-warning-textcolor-over: #fff;
	--wui-button-warning-textcolor-mobile: #f44343;
	--wui-button-warning-textcolor-selected: #fff;
	--wui-button-warning-textcolor-disabled: #d5dce3;
	--wui-button-icon-float-padding: 5px;
	--wui-button-mobile-default-height: 40px;
	--wui-button-mobile-submit-height: 40px;
	--wui-button-mobile-icon-float-padding: 10px;
	--wui-button-form-default-minwidth: 100px;
}
```

CSS code:

```css
body {
	font-family: Arial, Helvetica, Verdana, sans-serif;
}

.my-button {
	margin: 20px;
}

.my-output {
	margin: 10px;
	font-family: monospace;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Icon/WUIIcon-0.1.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Button/WUIButton-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Button/WUIButton-0.2.js"></script>
```

HTML code:

```html
<button class="wui-button my-button button1">button 1</button>
<button class="wui-button my-button button2 submit">
	<div class="wui-icon float-left mappointer-fill"></div>
	<span>button 2</span>
</button>

<div class="my-output"></div>
```

JS code:

```js
// Create object
const output = document.body.querySelector(".my-output");
const button1 = new WUIButton({
	selector: ".wui-button.button1",
	//text: "",
	//selectable: false,
	//locked: false,
	//enabled: true,
	onClick: () => {
		output.textContent = "Click button 1";
	},
	onDblClick: () => {
		output.textContent = "Double-Click button 1";
	}
});
const button2 = new WUIButton({
	selector: ".wui-button.button2",
	//text: "",
	//selectable: false,
	//locked: false,
	//enabled: true,
	onClick: () => {
		output.textContent = "Click button 2";
	},
	onDblClick: () => {
		output.textContent = "Double-Click button 2";
	}
});

// Initialize objects
button1.init();
button2.init();
```

> [!IMPORTANT]
> If the selector defines an element that is not of type `HTMLButtonElement`, the object will not be initialized.

> [!TIP]
> You can check out this working example on CodePen at the link: [https://codepen.io/wuijsproject/pen/xbOwNzN](https://codepen.io/wuijsproject/pen/xbOwNzN).

<a name="examples"></a>

## Examples

The examples listed in this section are detailed in the "Implementation" section of each class.

| Class                               | Link |
| ----------------------------------- | ---- |
| [WUIScrolly](#WUIScrolly)           | [https://codepen.io/wuijsproject/pen/azZvxMK](https://codepen.io/wuijsproject/pen/azZvxMK) |
| [WUIIcon](#WUIIcon)                 | [https://codepen.io/wuijsproject/pen/gbMayJO](https://codepen.io/wuijsproject/pen/gbMayJO) |
| [WUIFade](#WUIFade)                 | [https://codepen.io/wuijsproject/pen/LEZpvoX](https://codepen.io/wuijsproject/pen/LEZpvoX) |
| [WUIMenubar](#WUIMenubar)           | [https://codepen.io/wuijsproject/pen/JoKYVQm](https://codepen.io/wuijsproject/pen/JoKYVQm) |
| [WUIList](#WUIList)                 | [https://codepen.io/wuijsproject/pen/xbOweva](https://codepen.io/wuijsproject/pen/xbOweva) |
| [WUITable](#WUITable)               | [https://codepen.io/wuijsproject/pen/jErboKZ](https://codepen.io/wuijsproject/pen/jErboKZ) |
| [WUIFormat](#WUIFormat)             | [https://codepen.io/wuijsproject/pen/emzBjVy](https://codepen.io/wuijsproject/pen/emzBjVy) |
| [WUISelectpicker](#WUISelectpicker) | [https://codepen.io/wuijsproject/pen/WbxQBKX](https://codepen.io/wuijsproject/pen/WbxQBKX) |
| [WUIDatepicker](#WUIDatepicker)     | [https://codepen.io/wuijsproject/pen/QwEyyZN](https://codepen.io/wuijsproject/pen/QwEyyZN) |
| [WUITimepicker](#WUITimepicker)     | [https://codepen.io/wuijsproject/pen/azZdGrY](https://codepen.io/wuijsproject/pen/azZdGrY) |
| [WUIColorpicker](#WUIColorpicker)   | [https://codepen.io/wuijsproject/pen/bNeeobP](https://codepen.io/wuijsproject/pen/bNeeobP) |
| [WUICheckbox](#WUICheckbox)         | [https://codepen.io/wuijsproject/pen/qENNwPa](https://codepen.io/wuijsproject/pen/qENNwPa) |
| [WUIIntensity](#WUIIntensity)       | [https://codepen.io/wuijsproject/pen/GgqNpxJ](https://codepen.io/wuijsproject/pen/GgqNpxJ) |
| [WUIButton](#WUIButton)             | [https://codepen.io/wuijsproject/pen/xbOwNzN](https://codepen.io/wuijsproject/pen/xbOwNzN) |
