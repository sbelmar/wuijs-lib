> [!WARNING]
> Este documento aún no ha sido terminado y esta en una versión preliminar.

# wuijs-lib

<div align="center">
	<img src="https://github.com/wuijsproject/wuijs-lib/blob/main/imgs/logo/wuijs-color.svg" width="128" height="128">
</div>

Versión librería: `0.2.0` ([Registro de Cambio](./REGISTRODECAMBIO.md))

Versión documentación: `0.2.0.20260121.0`

Licencia: `Licencia Apache 2.0`

Autor: `Sergio E. Belmar V. <wuijs.project@gmail.com>`

> [!NOTE]
> Los dos primeros dígitos del número de versión corresponde a la mayor versión de las clases que componen la biblioteca,
> meientras que el tercer digito corresponde al número de modificación de la versión general.

## Índice

*   [Descripción General](#overview)
*   [Instalación](#install)
*   [Implementación](#implementation)
*   [Clases](#classes)
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
*   [Ejemplos](#examples) (CodePen)

<a name="overview"></a>

## Descripción General

WUI, acrónimo del inglés *Web User Interface JavaScript library*, es una biblioteca JavaScript/CSS de código abierto orientada a la implementación rápida de intetfaces de usuario Web compuesta por 25 clases, las que pueden ser utilizadas de manera independiente o conjunta.

### Tabla de Clases

| Clase                               | Version | Descripción |
| ----------------------------------- | -------:| ----------- |
| [WUICookie](#WUICookie)             | `0.2`   | Administrador de cookies. |
| [WUIHead](#WUIHead)                 | `0.2`   | Administrador de cabecera HTML. |
| [WUIBody](#WUIBody)                 | `0.2`   | Administrador de cuerpo HTML. Permite la importación de contenido CSS/JS/HTML y facilita la implementación en entornos nativos móviles. |
| [WUILanguage](#WUILanguage)         | `0.2`   | Administrador de idioma para interfaces web. Permite cargar archivos de idioma en formato JS o JSON y actualizar dinámicamente el contenido de los elementos HTML según el idioma. |
| [WUIScrolly](#WUIScrolly)           | `0.2`   | Herramienta para animación de elementos HTML mediante el evento "onscroll" del cuerpo de la página HTML. |
| [WUIIcon](#WUIIcon)                 | `0.1`   | Conjunto de íconos prediseñados y carga mediante CSS, para uso en interfaces. |
| [WUIFade](#WUIFade)                 | `0.1`   | Herramienta para control de salida y entrada con opacidad (fade-out y fade-in respectivamente) de elementos HTML. |
| [WUILoader](#WUILoader)             | `0.2`   | Componente para la implementación de animaciones de carga. |
| WUITooltip                          | `0.1`   | Componente para la implementación de textos emergentes. |
| WUIModal                            | `0.2`   | Componente para la implementación de cuadros de diálogo (tipo `message`) y ventanas emergentes (tipo `page`). |
| WUISlider                           | `0.2`   | Componente para la implementación de persianas controladas por ratón y/o por evento. |
| WUIPaging                           | `0.1`   | Componente para la implementación de vistas accesibles paginadamente. |
| WUITabs                             | `0.1`   | Componente para la implementación de vistas accesibles mediante selección por pestaña. |
| [WUIMenubar](#WUIMenubar)           | `0.1`   | Componente para la implementación de barras de menú. |
| [WUIList](#WUIList)                 | `0.2`   | Componente para la implementación de listas de datos y botoneras para cada fila de manera opcional. |
| [WUITable](#WUITable)               | `0.2`   | Componente para la implementación de tablas de datos. A diferencia del componente `WUIList`, el componente `WUITable` incluye una cabecera de columnas. |
| WUIForm                             | `0.2`   | Componente para la implementación de formularios de datos. Este componente permite la implementación de elementos HTML de entrada de datos tales como `<input>`, `<select>` y `<textarea>` y objetos de la librería WUI como `WUISelectpicker`, `WUIDatepicker`, `WUITimepicker`, `WUIColorpicker`, `WUICheckbox`, `WUIIntensity` y `WUIButton`. |
| [WUIFormat](#WUIFormat)             | `0.2`   | Herramienta para manejo y validación de formatos de datos de tipo `string`, `number` y `Date`. |
| [WUISelectpicker](#WUISelectpicker) | `0.2`   | Componente para la implementación de entradas de datos de tipo lista de selección múltiple o excluyente basada en el elemento HTML `<select>`. |
| [WUIDatepicker](#WUIDatepicker)     | `0.2`   | Componente para la implementación de entradas de datos de tipo fecha basada en el elemento HTML `<input type="date">`. |
| [WUITimepicker](#WUITimepicker)     | `0.2`   | Componente para la implementación de entradas de datos de tipo hora basada en el elemento HTML `<input type="time">`. |
| [WUIColorpicker](#WUIColorpicker)   | `0.2`   | Componente para la implementación de entradas de datos de tipo selector de color basada en el elemento HTML `<input type="color">`. |
| [WUICheckbox](#WUICheckbox)         | `0.2`   | Componente para la implementación de entradas de datos de tipo casilla de verificación basada en el elemento HTML `<input type="checkbox">`. |
| [WUIIntensity](#WUIIntensity)       | `0.1`   | Componente para la implementación de entradas de datos de tipo selector de intensidad de 4 niveles: nada, bajo, medio y alto basada en el elemento HTML `<input type="range">`. |
| [WUIButton](#WUIButton)             | `0.2`   | Componente para la implementación de botones basada en el elemento HTML `<button>`. |

<a name="install"></a>

## Instalación

Para instalar la biblioteca WUI, debe ser clonada desde el repositorio oficial en GitHib (`sbelmar/wuijs-lib`). Suponiendo que el proyecto donde se implementará tenga un directorio de descargas: `./downloads`, un directorio de código fuente `./src` y, dentro de este, un directorio de bibliotecas `./src/Libraries`, debe escribir lo siguiente en la terminal:

```bash
cd ./downloads
git clone https://git@github.com/wuijsproject/wuijs-lib.git
cp -r ./wuijs-lib/src/WUI ../src/Libraries/
```

Opcionalmente puede ser descargada desde los mismos repositorios en formato ZIP.

```bash
cd ./downloads
wget https://github.com/wuijsproject/wuijs-lib/archive/refs/heads/main.zip
unzip main.zip
cp -r ./wuijs-lib-main/src/WUI ../src/Libraries/
```

<a name="implementation"></a>

## Implementación

Para habilitar todas las clases se deben implementar las dependencias CSS y JS de las librerías en la cabecera HTML de la página web el archivos de configuración de `WUI.css`.

Código CSS archivo `WUI.css`:

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
	--wui-menubar-opener-closeicon-src: none;
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
	--wui-menubar-mobile-opener-closeicon-src: none;

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

Suponiendo que los archivos de configuración de estilos CSS son instalados en el directorio `./Settings/` y las librería en `./Libraries/`, la cabecera HTML queda de la forma:

Código HTML:

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

Este método de implementación permite la estandarización del diseño de la interfaz de usuario de una aplicación, por medio del archivo `WUI.css`.

> [!IMPORTANT]
> El archivo de configuración de estilos deben estar en la ruta `./Settings/WUI.css`.

> [!TIP]
> En caso que sólo se desee implementar sólo una parte del conjunto de librerías WUI, se sebe agregar en la cabecera HTML los llamados a los archivos JS y CSS según se indique en cada sección.
> Por otra parte, el archivo `WUI.css` sólo requerirá la definición de los objetos que se deseen implementar.

<a name="classes"></a>

## Clases

<a name="WUICookie"></a>

### WUICookie

Versión: `0.2`

Administrador de cookies.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| JS   | [src/WUI/Cookie/WUICookie-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Cookie/WUICookie-0.2.js) |

#### Constructor

| Tipo      | Descripción |
| --------- | ----------- |
| WUICookie | `WUICookie([properties])`<br><br>Parámetros:<br>**• properties:** `object` |

#### Propiedades

| Propiedad | Tipo      | Valor predeterminado | Descripción |
| --------- | --------- | -------------------- | ----------- |
| domain    | `string`  | `location.hostname`  | (get/set)<br><br>Define el dominio desde el que se puede acceder a la cookie. Por defecto, es el host actual. Al configurarlo como un dominio principal (p. ej., ejemplo.com para sub.ejemplo.com), los subdominios pueden acceder a él. |
| path      | `string`  | `"./"`               | (get/set)<br><br>Especifica la ruta válida para la cookie. El valor predeterminado es la ruta actual siendo el valor vacío equivalente a este. Al establecer "/", la cookie es accesible en todo el dominio. |
| minutes   | `number`  | `525600`             | (get/set)<br><br>Especifica la duración medida en minutos que tendrá la cookie. El valor predeterminado equivale a 365 días. |
| overssl   | `boolean` | `false`              | (get/set)<br><br>Si se establece como `true`, la cookie solo se enviará a través de conexiones HTTPS. |

#### Métodos

| Método | Tipo retorno | Descripción |
| ------ | ------------ | ----------- |
| set    | `void`       | `set(name, value[, options])`<br><br>Parámetros:<br>**• name:** `string` <br>**• value:** `string` <br>**• options:** `object` *opcional*<br><br>Agrega o modifica una cookie. |
| get    | `string`     | `get(name)`<br><br>Parámetros:<br>**• name:** `string`<br><br>Lee el contenido de una cookie mediante su nombre. |
| remove | `void`       | `remove(name)`<br><br>Parámetros:<br>**• name:** `string`<br><br>Elimina una cookie mediante su nombre. |

#### Implementación

Cabecera HTML:

```html
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Cookie/WUICookie-0.2.js"></script>
```

Código JS:

```js
// Crear objeto
const cookie = new WUICookie({
	//domain: location.hostname,
	//path: "./",
	//minutes: 365*24*60,
	//overssl: false
});

// Guardar cookie
cookie.set("mycookie", "prueba");

// Leer cookie
console.log(cookie.get("mycookie"));
```

<a name="WUIHead"></a>

### WUIHead

Versión: `0.2`

Administrador de cabecera HTML.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| JS   | [src/WUI/Head/WUIHead-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Head/WUIHead-0.2.js) |

#### Constructor

| Tipo    | Descripción |
| ------- | ----------- |
| WUIHead | `WUIHead()` |

#### Propiedades

Clase sin propiedades.

#### Métodos

| Método             | Tipo retorno | Descripción |
| ------------------ | ------------ | ----------- |
| setTitle           | `void`       | `setTitle(name)`<br><br>Parámetros:<br>**• name:** `string`<br><br>Establece el nombre del documento HTML mediante la etiqueta `<title>`. |
| setMetaContent     | `void`       | `setMetaContent(name, content)`<br><br>Parámetros:<br>**• name:** `string` <br>**• content:** `string`<br><br>Establece un meta valor en la cabecera del documento HTML mediante la etiqueta `<meta>`.<br>Revisar especificaciones y compatibilidad en [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name). |
| setApplicationName | `void`       | `setApplicationName(content)`<br>Alias de `setMetaContent("application-name", content)`<br><br>Parámetros:<br>**• content:** `string`<br><br>Establece el meta valor `application-name` en la cabecera del documento HTML. |
| setThemeColor      | `void`       | `setThemeColor(content)`<br>Alias de `setMetaContent("theme-color", content)`<br><br>Parámetros:<br>**• content:** `string`<br><br>Establece el meta valor `theme-color` en la cabecera del documento HTML.<br>Revisar especificaciones y compatibilidad en [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color). |
| refresh            | `void`       | `refresh()`<br><br>Recarga los archivos JS y CSS llamados desde la sección `<head>` del documennto HTML, mediante el anexo de un parámetro dinámico get. |

#### Implementación

Cabecera HTML:

```html
<title></title>
<meta name="application-name" content="">
<meta name="theme-color" content="">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Head/WUIHead-0.2.js"></script>
```

Código JS:

```js
// Crear objeto
const head = new WUIHead();

// Cambiar titulo de la página
head.setTitle("Título de prueba");

// Cambiar metadato del nombre de la aplicación
head.setApplicationName("Aplicación de prueba");

// Cambiar metadato del color de la barra superior del navegador
head.setThemeColor("#1e90ff");
```

<a name="WUIBody"></a>

### WUIBody

Versión: `0.2`

Administrador de cuerpo HTML. Permite la importación de contenido CSS/JS/HTML y facilita la implementación en entornos nativos móviles.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| JS   | [src/WUI/Body/WUIBody-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Body/WUIBody-0.2.js) |

#### Constructor

| Tipo    | Descripción |
| ------- | ----------- |
| WUIBody | `WUIBody([properties])`<br><br>Parámetros:<br>**• properties:** `object` |

#### Propiedades

| Propiedad       | Tipo       | Valor predeterminado | Descripción |
| --------------- | ---------- | -------------------- | ----------- |
| environment     | `string`   | `"web"`              | (get/set)<br><br>Entorno de despliegue de la interfaz web.<br><br>Valores:<br>• `"web"`<br>• `"native.android"`<br>• `"native.ios"` |
| importDirectory | `string`   | `""`                 | (get/set)<br><br>Ruta relativa del directorio donde se alojan los subdirectorio para importación de contenido. |
| importMode      | `string`   | `"fetch"`            | (get/set)<br><br>Método de recuperación de contenido para carga.<br><br>Valores:<br>• `"fetch"`<br>• `"xhr"`<br><br>Cuando el despliegue se realiza en ambientes nativos mediante WebView para Android o WebKit para iOS, se recomienda utilizar `"xhr"`. |
| onCompleted     | `function` | `null`               | (get/set)<br><br>Función que se llama cuando todos los contenidos son importados y cargados en el cuerpo de la página HTML. |
| debug           | `boolean`  | `false`              | (get/set)<br><br>Modo de testeo. Imprime en consola los contenidos importados cuando el valor de la propiedad es `true`. |

#### Métodos

| Método   | Tipo retorno | Descripción |
| -------- | ------------ | ----------- |
| import   | `void`       | `import(id, path[, done])`<br><br>Parámetros:<br>**• id:** `string`, especifica el id del elemento HTML donde se va a cargar el contenido.<br>**• path:** `string`, especifica la ruta del subdirectorio y el nombre de los archivos con extensión `.css`, `.htm` y `.js` que serán importados y cargados.<br>**• done:** `function` *opcional*, esta función que es ejecutada cuando la carga del contenido ha concluido.<br><br>Importa contenido CSS/JS/HTML referenciado a un elemento HTML por medio de su `id`. |
| prepare  | `void`       | `prepare()`<br><br>En función del valor del parámetro `environment`, modifica los elementos HTML de etiqueta `a`, `input` y `select` del cuerpo del documento HTML para adaptarlos a entornos nativos. |
| openURL  | `void`       | `openURL(url[, download])`<br><br>Parámetros:<br>**• id:** `string`, especifica la dirección URL que se requiere abrir o descargar.<br>**• download:** `string` *opcional*, especifica el nombre del archivo con que se descargará el contenido referido mediante la URL.<br><br>Abre o descarga un contenido mediante una dirección URL. Este método es requerido en entornos nativos ya que no se siempre se cuenta con soporte mediante WebView sobre Android o WebKit sobre iOS. |

#### Implementación

Contenido CSS del archivo `./Imports/test-content.css`:

```css
.test a,
.test a:visited {
	text-decoration: none;
	font-size: 20px;
	color: blue;
}
```

Contenido HTML del archivo `./Imports/test-content.htm`:

```html
<section id="testContent" class="test">
	<a href="https://www.google.com">Google!</a>
</section>
```

Contenido JS del archivo `./Imports/test-content.js`:

```js
const testContentLog = (content) => {
	console.log(content);
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Body/WUIBody-0.2.js"></script>
```

Código HTML:

```html
<section id="testContent"></section>
```

Código JS:

```js
// Crear objeto
const body = new WUIBody({
	//environment: "web",
	importDirectory: "./Imports/",
	//importMode: "fetch",
	onCompleted: () => {
		body.prepare();
	},
	debug: true
});

// Importar contenido CSS/HTML/JS del directorio ./Imports
body.import("testContent", "test-content", () => {
	testContentLog("contenido de prueba cargado");
});
```

<a name="WUILanguage"></a>

### WUILanguage

Versión: `0.2`

Administrador de idioma para interfaces web. Permite cargar archivos de idioma en formato JS o JSON y actualizar dinámicamente el contenido de los elementos HTML según el idioma seleccionado.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| JS   | [src/WUI/Language/WUILanguage-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Language/WUILanguage-0.2.js) |

#### Constructor

| Tipo        | Descripción |
| ----------- | ----------- |
| WUILanguage | `WUILanguage([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad  | Tipo       | Valor predeterminado | Descripción |
| ---------- | ---------- | -------------------- | ----------- |
| selector   | `string`   | `".wui-language"`    | (get/set)<br><br>Selector CSS para los elementos HTML que serán cargados. Este puede ser aplicado al atributo `content` del elemento `meta`, a la propiedad `innerHTML` de los elementos: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `i`, `li`, `a`, `legend`, `label`, `option`, `data`, `button` y al atributo `placeholder` de los elementos `input` y `textarea`. |
| directory  | `string`   | `"Languages/"`       | (get/set)<br><br>Ruta del directorio donde se encuentran los archivos de idioma. |
| sets       | `array`    | `["main"]`           | (get/set)<br><br>Lista de nombres del conjuntos del idioma a cargar. |
| lang       | `string`   | `"en"`               | (get/set)<br><br>Código de idioma en formato ISO 639-1. |
| mode       | `string`   | `"js"`               | (get/set)<br><br>Formato de los archivos de idioma.<br><br>Valores:<br>• `"js"`<br>• `"json"` |
| dataKey    | `string`   | `"key"`              | (get/set)<br><br>Nombre del atributo `data-*` que contiene la clave de texto en los elementos HTML. |
| dataOutput | `string`   | `"text"`             | (get/set)<br><br>Nombre del atributo `data-*` donde se puede colocar el texto cargado. |
| onLoad     | `function` | `null`               | (get/set)<br><br>Función que se llama cuando la carga de idioma ha finalizado. |

#### Métodos

| Método  | Tipo retorno | Descripción |
| ------- | ------------ | ----------- |
| load    | `void`       | `load([lang[, sets]])`<br><br>Parámetros:<br>**• lang:** `string` *opcional* (valor predeterminado corresponde a la propiedad `lang` del objeto)<br>**• sets:** `array` *opcional* (valor predeterminado corresponde a la propiedad `sets` del objeto)<br><br>Carga los archivos de idioma indicados por idioma y conjunto y, actualiza los elementos HTML marcados con el selector CSS. |
| refresh | `void`       | `refresh([selector[, lang]])`<br><br>Parámetros:<br>**• selector:** `string` *opcional* (valor predeterminado corresponde a la propiedad `selector` del objeto)<br>**• lang:** `string` *opcional* (valor predeterminado corresponde a la propiedad `lang` del objeto)<br><br>Recarga el texto contenido en los elementos anidados de el elemento HTML especificado en el argumento `selector`. |

#### Implementación

Código JS archivo `main-es.js`:

```js
return {
	titles: {
		test: "Titulo prueba"
	},
	texts: {
		test: "Texto prueba"
	}
};
```

> [!IMPORTANT]
> Si se utiliza `js` como formato de los archivos de idioma, dicho archivo debe ser inicializado por la palabra reservada `return` seguido de un objeto `{}`.

Código JSON archivo `main-es.json`:

```json
{
	"titles": {
		"test": "Titulo prueba"
	},
	"texts": {
		"test": "Texto prueba"
	}
}
```

Cabecera HTML:

```html
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Language/WUILanguage-0.2.js"></script>
```

Código HTML:

```html
<h1 class="wui-language" data-key="titles.test"></h1>
<div class="wui-language" data-key="texts.test"></div>
```

Código JS:

```js
// Crear objeto
const language = new WUILanguage({
    //selector: ".wui-language",
    //directory: "./Languages/",
    //sets: ["main"],
    lang: "es",
    //mode: "js",
    //dataKey: "key",
    //dataOutput: "text",
    onLoad: (...args) => {
		[lang, languages] = args;
        console.log("Idioma cargado:", lang, languages);
    }
});

// Declarar variables globales
let lang = language.lang;
let languages = {};

// Cargar contenido del archivo main-es.js 
language.load();                // Opción 1
language.load("es");            // Opción 2 equivalente a opción 1
language.load("es", ["main"]);  // Opción 3 equivalente a opción 1
```

> [!IMPORTANT]
> El archivo de idioma debe estar en la ruta `./Languages/main-es.js` o `./Languages/main-es.json` según el set, idioma y modo que se emplee. Es importante que los archivos de idioma tengan la forma `{set}-{lang}.{mode}`, en caso contratio, el archivo no podrá ser importado.

Es posible realizar combinaciones de conjuntos de archivos de un mismo idioma, por ejemplo, si se cuenta con un archivo `main-es.js` y otro `main2-es.js` que complemente al primero, se pueden llamar simultáneamente mediante la propiedad `sets`.

Código JS:

```js
// Opción 1: Actualizar la propiedad sets y posteriormente recargar.
language.sets = ["main", "main2"];
language.load(); 

// Opción 2: Recargar pasando como parámetro ella combinación de conjuntos.
language.load("es", ["main", "main2"]);
```

> [!TIP]
> Si se desea agregar contenido dinámico dentro de un texto, se recomienda utilizar formato de los archivos de idioma `js` (`mode: "js"`) y agregar el texto mediante el método de interpolación de cadenas, conosido también como literales de plantilla. Por ejemplo, ``mykey: `My ${var} text` ``.

<a name="WUIScrolly"></a>

### WUIScrolly

Versión: `0.2`

Herramienta para animación de elementos HTML mediante el evento "onscroll" del cuerpo de la página HTML.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| JS   | [src/WUI/Scrolly/WUIScrolly-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Scrolly/WUIScrolly-0.2.js) |

#### Constructor

| Tipo       | Descripción |
| ---------- | ----------- |
| WUIScrolly | `WUIScrolly([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad     | Tipo       | Valor predeterminado        | Descripción |
| ------------- | ---------- | --------------------------- | ----------- |
| sections      | `array`    | `[]`                        | (get/set)<br><br>Lista secciones que serán incorporadas a la animación, según la definición de **Opciones de Sección**. Estas pueden ser definidas directamente sobre esta propiedad o mediante el método `addSection()`. |
| behavior      | `string`   | `"smooth"`                  | (get/set)<br><br>Comportamiento para desplazar el foco en el cuerpo de la página HTML.<br><br>Valores:<br>• `"auto"`<br>• `"smooth"` |
| dataScrollY   | `string`   | `"scrollY"`                 | (get/set)<br><br>Nombre del atributo `data-*` del elemento de documento principal (`<html>` / `document.documentElement`) que contiene el valor numérico medido en píxeles del desplazamiento total del scroll vertical de la página HTML y donde `0` representa la parte superior del documento (o sin movimiento). |
| dataDelay     | `string`   | `"delay"`                   | (get/set)<br><br>Nombre del atributo `data-*` que determina el tiempo medido en milisegundos en que tarda en animarse un elemento HTML animados mediante estilos CSS una vez que se le da foco. |
| onStart       | `function` | `null`                      | (get/set)<br><br>Función que se llama cuando inicia el movimiento del scroll, ya sea a travéz de los eventos `scroll` para ratón o `touchmove` para pantalla táctil. |
| onMove        | `function` | `null`                      | (get/set)<br><br>Función que se llama cuando se ejecuta el movimiento del scroll, ya sea a travéz de los eventos `scroll` para ratón o `touchmove` para pantalla táctil. |
| onStop        | `function` | `null`                      | (get/set)<br><br>Función que se llama cuando termina el movimiento del scroll, ya sea a travéz de los eventos `scroll` para ratón o `touchmove` para pantalla táctil. |
| scrollY       | `number`   | `0`                         | (get)<br><br>Posición vertical de la página medida en píxeles. |
| deltaY        | `number`   | `0`                         | (get)<br><br>Último paso de desplazamiento en el movimiento vertical de la página medida en píxeles. |
| direction     | `string`   | `null`                      | (get)<br><br>Sentido del movimiento vertical de la página.<br><br>Valores:<br>• `"up"`<br>• `"down"` |
| sceneWidth    | `number`   | `WUIScrolly.screenWidth()`  | (get)<br><br>Ancho de la escena medido en píxeles. |
| sceneHeight   | `number`   | `WUIScrolly.screenHeight()` | (get)<br><br>Alto de la escena medido en píxeles. |
| sceneIndex    | `number`   | `null`                      | (get)<br><br>Número de escena. |
| sceneStep     | `number`   | `null`                      | (get)<br><br>Número de paso en una escena. |
| sceneProgress | `number`   | `null`                      | (get)<br><br>Porcentaje de progreso de un paso en una escena, con valores entre `0` y `1`. |
| debug         | `boolean`  | `false`                     | (get/set)<br><br>Modo de testeo. Imprime en consola los valores `selector` y `height` de las escenas agregadas en la instancia de inicio y `scrollY`, `y`, `index`, `sceneIndex`, `step`, `sceneStep` y `progress` cuando estos cambian. Se habilitac cuando el valor de la propiedad es `true`. |

#### Opciones de Sección

| Propiedad | Tipo       | Valor predeterminado | Descripción |
| --------- | ---------- | -------------------- | ----------- |
| selector  | `string`   | `undefined`          | Selector CSS que define el elemento HTML que serán incluido como sección. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. *oblogatorio* |
| target    | `string`   | `undefined`          | Nombre auxiliar para referenciar la sección. Utilizado en el método `goSection()`. |
| type      | `string`   | `"auto"`             | Comportamiento CSS del alto de la sección.<br><br>Valores:<br>• `"auto"`<br>• `"static"` |
| height    | `number`   | `undefined`          | Alto de la sección. Este puede estar expresado como número asociado a píxeles o en formato compatible CSS. |
| steps     | `number`   | `undefined`          | Número total de pasos definidos en la función de animación `animation`. |
| pages     | `number`   | `undefined`          | Número total de paginas definidos en la función de animación `animation`. |
| animation | `function` | `undefined`          | `function(step, progress)`<br><br>Parámetros:<br>**• step:** `number`, valor entre `0` y `pages - 1` <br>**• progress:** `number`, valor entre `0` y `1` <br><br>Función que se llama cuando se ejecuta el movimiento del scroll en una sección. |

#### Métodos

| Método     | Tipo retorno | Descripción |
| ---------- | ------------ | ----------- |
| init       | `void`       | `init()`<br><br>Inicializa el objeto una vez agregadas las secciones que componen la página HTML. |
| stop       | `void`       | `stop()`<br><br>Interrumpe la animación en su ciclo de ejecución. |
| addSection | `void`       | `addSection(options)`<br><br>Agrega la configuración de una nueva sección animada a la lista de secciones del objeto, según la definición de **Opciones de Sección**. |
| goSection  | `void`       | `goSection(target[, done[, behavior]])`<br><br>Parámetros:<br>**• target:** `string` <br>**• done:** `function` <br>**• behavior:** `string` <br><br>Mueve el foco de la página HTML hasta la sección especificada por del parámetro `target`. |
| selectPage | `void`       | `selectPage(sectionIndex, pageIndex)`<br><br>Parámetros:<br>**• sectionIndex:** `number`, valores desde `0` <br>**• pageIndex:** `number`, valor entre `0` y `pages - 1` <br><br>Mueve el foco de la página HTML hasta la sección especificada por del parámetro `sectionIndex` y avanza hasta la página `pageIndex` de dicha sección. |
| drawCenter | `void`       | `drawCenter()`<br><br>Dibuja el centro de la parte visible de la página HTML en el navegador. |
| drawRuler  | `void`       | `drawRuler()`<br><br>Dibuja una regla vertical con medidas en píxeles, en el lado izquierdo de la página HTML. |

#### Variables CSS

| Variable                       | Descripción |
| ------------------------------ | ----------- |
| `--wui-scrolly-paging-bgcolor` |

#### Estilos CSS para Animación

| Estilo        | Descripción |
| ------------- | ----------- |
| .fadein       | Entra y sale con opacidad sin movimiento. |
| .fadein-up    | Entra y sale con opacidad desde arriba. |
| .fadein-top   | Alias de `.fadein-up`. |
| .fadein-left  | Entra y sale con opacidad desde la izquierda. |
| .fadein-right | Entra y sale con opacidad desde la derecha. |

#### Implementación

Existen dos modos de implementación de la librería de animación, la más sencilla es por medio de etiquetas de animación CSS, la segunda es mediante la programación de funciones JS de animación que se cargan mediante la configuración de secciones.

Configuración CSS:

```css
:root {
	--wui-scrolly-paging-bgcolor: #888;
}
```

Código CSS:

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

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Scrolly/WUIScrolly-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Scrolly/WUIScrolly-0.2.js"></script>
```

Código HTML:

```html
<body class="wui-scrolly">

	<!-- Portada -->

	<section class="section section1">
		<div class="scene">desplázate hacia abajo</div>
	</section>

	<!-- Animación CSS -->

	<section class="section section2">
		<div class="scene scene2">
			<div class="my-element wui-scrolly-load fadein" data-delay=".0">1</div>
			<div class="my-element wui-scrolly-load fadein-left" data-delay=".2">2</div>
			<div class="my-element wui-scrolly-load fadein-top" data-delay=".4">3</div>
			<div class="my-element wui-scrolly-load fadein-right" data-delay=".8">4</div>
		</div>
	</section>

	<!-- Animación JS -->

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

Código JS:

```js
// Crear objeto
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

// Agregar secciones
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

// Inicializar objeto
scrolly.init();
```

> [!TIP]
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/azZvxMK](https://codepen.io/wuijsproject/pen/azZvxMK).

<a name="WUIIcon"></a>

### WUIIcon

Versión: `0.1`

Conjunto de íconos prediseñados y carga mediante CSS, para uso en interfaces.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/WUI/Icon/WUIIcon-0.1.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Icon/WUIIcon-0.1.css) |

#### Tabla de Íconos de Señale

| Icono                                          | Estilo                                                    | Icono                                          | Estilo                                                    | Icono                                      | Estilo                                                        | Icono                                      | Estilo                                                         |
| :---:                                          | ------                                                    | :---:                                          | ------                                                    | :---:                                      | ------                                                        | :---:                                      | ------                                                         |
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

#### Tabla de Íconos de Flecha

| Icono                                               | Estilo                         | Icono                                             | Estilo                       | Icono                                                 | Estilo                           | Icono                                               | Estilo                         |
| :---:                                               | ------                         | :---:                                             | ------                       | :---:                                                 | ------                           | :---:                                               | ------                         |
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

#### Tabla de Íconos de Número

| Icono                                  | Estilo            | Icono                                  | Estilo            | Icono                                  | Estilo            | Icono                                  | Estilo            |
| :---:                                  | ------            | :---:                                  | ------            | :---:                                  | ------            | :---:                                  | ------            |
| ![](./imgs/Icons/num0-circle-line.svg) | .num0-circle-line | ![](./imgs/Icons/num0-circle-fill.svg) | .num0-circle-fill | ![](./imgs/Icons/num1-circle-line.svg) | .num1-circle-line | ![](./imgs/Icons/num1-circle-fill.svg) | .num1-circle-fill |
| ![](./imgs/Icons/num2-circle-line.svg) | .num2-circle-line | ![](./imgs/Icons/num2-circle-fill.svg) | .num2-circle-fill | ![](./imgs/Icons/num3-circle-line.svg) | .num3-circle-line | ![](./imgs/Icons/num3-circle-fill.svg) | .num3-circle-fill |
| ![](./imgs/Icons/num4-circle-line.svg) | .num4-circle-line | ![](./imgs/Icons/num4-circle-fill.svg) | .num4-circle-fill | ![](./imgs/Icons/num5-circle-line.svg) | .num5-circle-line | ![](./imgs/Icons/num5-circle-fill.svg) | .num5-circle-fill |
| ![](./imgs/Icons/num6-circle-line.svg) | .num6-circle-line | ![](./imgs/Icons/num6-circle-fill.svg) | .num6-circle-fill | ![](./imgs/Icons/num7-circle-line.svg) | .num7-circle-line | ![](./imgs/Icons/num7-circle-fill.svg) | .num7-circle-fill |
| ![](./imgs/Icons/num8-circle-line.svg) | .num8-circle-line | ![](./imgs/Icons/num8-circle-fill.svg) | .num8-circle-fill | ![](./imgs/Icons/num9-circle-line.svg) | .num9-circle-line | ![](./imgs/Icons/num9-circle-fill.svg) | .num9-circle-fill |

#### Tabla de Íconos de Persona

| Icono                                    | Estilo              | Icono                                    | Estilo              | Icono                                     | Estilo               | Icono                                     | Estilo               |
| :---:                                    | ------              | :---:                                    | ------              | :---:                                     | ------               | :---:                                     | ------               |
| ![](./imgs/Icons/man-fill.svg)           | .man-fill           | ![](./imgs/Icons/woman-fill.svg)         | .woman-fill         | ![](./imgs/Icons/person-line.svg)         | .person-line         | ![](./imgs/Icons/person-fill.svg)         | .person-fill         |
| ![](./imgs/Icons/person-plus-line.svg)   | .person-plus-line   | ![](./imgs/Icons/person-plus-fill.svg)   | .person-plus-fill   | ![](./imgs/Icons/person-dash-line.svg)    | .person-dash-line    | ![](./imgs/Icons/person-dash-fill.svg)    | .person-dash-fill    |
| ![](./imgs/Icons/person-check-line.svg)  | .person-check-line  | ![](./imgs/Icons/person-check-fill.svg)  | .person-check-fill  | ![](./imgs/Icons/person-x-line.svg)       | .person-x-line       | ![](./imgs/Icons/person-x-fill.svg)       | .person-x-fill       |
| ![](./imgs/Icons/people-line.svg)        | .people-line        | ![](./imgs/Icons/people-fill.svg)        | .people-fill        | ![](./imgs/Icons/person-contact-line.svg) | .person-contact-line | ![](./imgs/Icons/person-contact-fill.svg) | .person-contact-fill |
| ![](./imgs/Icons/person-card-line.svg)   | .person-card-line   | ![](./imgs/Icons/person-card-fill.svg)   | .person-card-fill   | ![](./imgs/Icons/person-names-line.svg)   | .person-names-line   | ![](./imgs/Icons/person-names-fill.svg)   | .person-names-fill   |
| ![](./imgs/Icons/person-circle-line.svg) | .person-circle-line | ![](./imgs/Icons/person-circle-fill.svg) | .person-circle-fill | ![](./imgs/Icons/user-line.svg)           | .user-line           |                                           |                      |

#### Tabla de Íconos de Archivo

| Icono                                   | Estilo             | Icono                                   | Estilo             | Icono                                    | Estilo              | Icono                                    | Estilo              |
| :---:                                   | ------             | :---:                                   | ------             | :---:                                    | ------              | :---:                                    | ------              |
| ![](./imgs/Icons/folder-close-line.svg) | .folder-close-line | ![](./imgs/Icons/folder-close-fill.svg) | .folder-close-fill | ![](./imgs/Icons/folder-open-line.svg)   | .folder-open-line   | ![](./imgs/Icons/folder-open-fill.svg)   | .folder-open-fill   |
| ![](./imgs/Icons/file-line.svg)         | .file-line         | ![](./imgs/Icons/file-fill.svg)         | .file-fill         | ![](./imgs/Icons/file-barchart-line.svg) | .file-barchart-line | ![](./imgs/Icons/file-barchart-fill.svg) | .file-barchart-fill |
| ![](./imgs/Icons/file-check-line.svg)   | .file-check-line   | ![](./imgs/Icons/file-check-fill.svg)   | .file-check-fill   | ![](./imgs/Icons/file-pdf-line.svg)      | .file-pdf-line      | ![](./imgs/Icons/file-pdf-fill.svg)      | .file-pdf-fill      |
| ![](./imgs/Icons/file-image-line.svg)   | .file-image-line    | ![](./imgs/Icons/file-image-fill.svg)  | .file-image-fill   | ![](./imgs/Icons/file-text-line.svg)     | .file-text-line     | ![](./imgs/Icons/file-text-fill.svg)     | .file-text-fill     |
| ![](./imgs/Icons/file-upload-line.svg)  | .file-upload-line  | ![](./imgs/Icons/file-upload-fill.svg)  | .file-upload-fill  | ![](./imgs/Icons/file-zip-line.svg)      | .file-zip-line      | ![](./imgs/Icons/file-zip-fill.svg)      | .file-zip-fill      |

#### Tabla de Íconos de Control

| Icono                                      | Estilo                | Icono                                      | Estilo                | Icono                                     | Estilo               | Icono                                     | Estilo               |
| :---:                                      | ------                | :---:                                      | ------                | :---:                                     | ------               | :---:                                     | ------               |
| ![](./imgs/Icons/calendar-line.svg)        | .calendar-line        | ![](./imgs/Icons/calendar-fill.svg)        | .calendar-fill        | ![](./imgs/Icons/calendar-day-line.svg)   | .calendar-day-line   | ![](./imgs/Icons/calendar-day-fill.svg)   | .calendar-day-fill   |
| ![](./imgs/Icons/calendar-week-line.svg)   | .calendar-week-line   | ![](./imgs/Icons/calendar-week-fill.svg)   | .calendar-week-fill   | ![](./imgs/Icons/calendar-range-line.svg) | .calendar-range-line | ![](./imgs/Icons/calendar-range-fill.svg) | .calendar-range-fill |
| ![](./imgs/Icons/clipboard-check-line.svg) | .clipboard-check-line | ![](./imgs/Icons/clipboard-check-fill.svg) | .clipboard-check-fill | ![](./imgs/Icons/clipboard-data-line.svg) | .clipboard-data-line | ![](./imgs/Icons/clipboard-data-fill.svg) | .clipboard-data-fill |
| ![](./imgs/Icons/bookmark-line.svg)        | .bookmark-line        | ![](./imgs/Icons/bookmark-fill.svg)        | .bookmark-fill        | ![](./imgs/Icons/bookmarks-line.svg)      | .bookmarks-line      | ![](./imgs/Icons/bookmarks-fill.svg)      | .bookmarks-fill      |
| ![](./imgs/Icons/bookmark-check-line.svg)  | .bookmark-check-line  | ![](./imgs/Icons/bookmark-check-fill.svg)  | .bookmark-check-fill  | ![](./imgs/Icons/bookmark-x-line.svg)     | .bookmark-x-line     | ![](./imgs/Icons/bookmark-x-fill.svg)     | .bookmark-x-fill     |

#### Tabla de Íconos de Protección

| Icono                                     | Estilo             | Icono                                   | Estilo             | Icono                                     | Estilo               | Icono                                     | Estilo               |
| :---:                                     | ------             | :---:                                   | ------             | :---:                                     | ------               | :---:                                     | ------               |
| ![](./imgs/Icons/shield-check-line.svg)   | .shield-check-line | ![](./imgs/Icons/shield-check-fill.svg) | .shield-check-fill | ![](./imgs/Icons/shield-lock-line.svg)    | .shield-lock-line    | ![](./imgs/Icons/shield-lock-fill.svg)    | .shield-lock-fill    |
| ![](./imgs/Icons/patch-check-line.svg)    | .patch-check-line  | ![](./imgs/Icons/patch-check-fill.svg)  | .patch-check-fill  | ![](./imgs/Icons/patch-question-line.svg) | .patch-question-line | ![](./imgs/Icons/patch-question-fill.svg) | .patch-question-fill |

#### Tabla de Íconos de Comunicación

| Icono                                      | Estilo                | Icono                                      | Estilo                | Icono                                     | Estilo               | Icono                                     | Estilo               |
| :---:                                      | ------                | :---:                                      | ------                | :---:                                     | ------               | :---:                                     | ------               |
| ![](./imgs/Icons/phone-line.svg)           | .phone-line           | ![](./imgs/Icons/phone-fill.svg)           | .phone-fill           | ![](./imgs/Icons/phonebook-line.svg)      | .phonebook-line      | ![](./imgs/Icons/phonebook-fill.svg)      | .phonebook-fill      |
| ![](./imgs/Icons/mail-close-line.svg)      | .mail-close-line      | ![](./imgs/Icons/mail-close-fill.svg)      | .mail-close-fill      | ![](./imgs/Icons/chat-dots-line.svg)      | .chat-dots-line      | ![](./imgs/Icons/chat-dots-fill.svg)      | .chat-dots-fill      |
| ![](./imgs/Icons/chat-left-quote-line.svg) | .chat-left-quote-line | ![](./imgs/Icons/chat-left-quote-fill.svg) | .chat-left-quote-fill | ![](./imgs/Icons/chat-left-text-line.svg) | .chat-left-text-line | ![](./imgs/Icons/chat-left-text-fill.svg) | .chat-left-text-fill |
| ![](./imgs/Icons/emoji-neutral-line.svg)   | .emoji-neutral-line   | ![](./imgs/Icons/emoji-neutral-fill.svg)   | .emoji-neutral-fill   | ![](./imgs/Icons/emoji-smile-line.svg)    | .emoji-smile-line    | ![](./imgs/Icons/emoji-smile-fill.svg)    | .emoji-smile-fill    |
| ![](./imgs/Icons/emoji-frown-line.svg)     | .emoji-frown-line     | ![](./imgs/Icons/emoji-frown-fill.svg)     | .emoji-frown-fill     | ![](./imgs/Icons/emoji-surprise-line.svg) | .emoji-surprise-line | ![](./imgs/Icons/emoji-surprise-fill.svg) | .emoji-surprise-fill |

#### Tabla de Íconos de Nube

| Icono                                   | Estilo             | Icono                                   | Estilo             | Icono                                     | Estilo               | Icono                                     | Estilo               |
| :---:                                   | ------             | :---:                                   | ------             | :---:                                     | ------               | :---:                                     | ------               |
| ![](./imgs/Icons/cloud-line.svg)        | .cloud-line        | ![](./imgs/Icons/cloud-fill.svg)        | .cloud-fill        | ![](./imgs/Icons/cloud-slash-line.svg)    | .cloud-slash-line    | ![](./imgs/Icons/cloud-slash-fill.svg)    | .cloud-slash-fill    |
| ![](./imgs/Icons/cloud-upload-line.svg) | .cloud-upload-line | ![](./imgs/Icons/cloud-upload-fill.svg) | .cloud-upload-fill | ![](./imgs/Icons/cloud-download-line.svg) | .cloud-download-line | ![](./imgs/Icons/cloud-download-fill.svg) | .cloud-download-fill |

#### Tabla de Íconos de Mapa

| Icono                                    | Estilo              | Icono                                      | Estilo                | Icono                                 | Estilo           |
| :---:                                    | ------              | :---:                                      | ------                | :---:                                 | ------           |
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

#### Tabla de Íconos de Dispositivo

| Icono                                  | Estilo            | Icono                                  | Estilo            | Icono                               | Estilo         | Icono                                 | Estilo           |
| :---:                                  | ------            | :---:                                  | ------            | :---:                               | ------         | :---:                                 | ------           |
| ![](./imgs/Icons/devices-line.svg)     | .devices-line     | ![](./imgs/Icons/laptop-line.svg)      | .laptop-line      | ![](./imgs/Icons/mobile-line.svg)   | .mobile-line   | ![](./imgs/Icons/mobile-alt-line.svg) | .mobile-alt-line |
| ![](./imgs/Icons/mobile-apps-line.svg) | .mobile-apps-line | ![](./imgs/Icons/mobile-apps-fill.svg) | .mobile-apps-fill | ![](./imgs/Icons/computer-line.svg) | .computer-line | ![](./imgs/Icons/camera-fill.svg)     | .camera-fill     |

#### Tabla de Íconos de Marca

| Icono                              | Estilo        | Icono                            | Estilo      | Icono                             | Estilo       |
| :---:                              | ------        | :---:                            | ------      | :---:                             | ------       |
| ![](./imgs/Icons/android-fill.svg) | .android-fill | ![](./imgs/Icons/apple-fill.svg) | .apple-fill | ![](./imgs/Icons/huawei-fill.svg) | .huawei-fill |

#### Tabla de Íconos de Aplicaciones

| Icono                                    | Estilo              | Icono                                       | Estilo                 | Icono                                   | Estilo             | Icono                                    | Estilo              |
| :---:                                    | ------              | :---:                                       | ------                 | :---:                                   | ------             | :---:                                    | ------              |
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

#### Tabla de Íconos de Opciones

| Icono                                  | Estilo            | Icono                                      | Estilo                | Icono                                       | Estilo                 | Icono                                       | Estilo                 |
| :---:                                  | ------            | :---:                                      | ------                | :---:                                       | ------                 | :---:                                       | ------                 |
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

#### Tabla de Íconos de Compositor

| Icono                                        | Estilo                  | Icono                                         | Estilo                   | Icono                                  | Estilo            | Icono                                   | Estilo             |
| :---:                                        | ------                  | :---:                                         | ------                   | :---:                                  | ------            | :---:                                   | ------             |
| ![](./imgs/Icons/doublequotes-left-fill.svg) | .doublequotes-left-fill | ![](./imgs/Icons/doublequotes-right-fill.svg) | .doublequotes-right-fill | ![](./imgs/Icons/indent-left-line.svg) | .indent-left-line | ![](./imgs/Icons/indent-right-line.svg) | .indent-right-line |
| ![](./imgs/Icons/link-line.svg)              | .link-line              | ![](./imgs/Icons/link-alt-line.svg)           | .link-alt-line           | ![](./imgs/Icons/list-check-line.svg)  | .list-check-line  | ![](./imgs/Icons/list-number-line.svg)  | .list-number-line  |
| ![](./imgs/Icons/list-stars-line.svg)        | .list-stars-line        | ![](./imgs/Icons/list-unorderd-line.svg)      | .list-unorderd-line      | ![](./imgs/Icons/textleft-line.svg)    | .textleft-line    | ![](./imgs/Icons/textright-line.svg)    | .textright-line    |

#### Tabla de Otros Íconos

| Icono                                       | Estilo                 | Icono                                       | Estilo                 | Icono                                       | Estilo                 | Icono                                 | Estilo           |
| :---:                                       | ------                 | :---:                                       | ------                 | :---:                                       | ------                 | :---:                                 | ------           |
| ![](./imgs/Icons/ai-fill.svg)               | .ai-fill               | ![](./imgs/Icons/bullseye-line.svg)         | .bullseye-line         | ![](./imgs/Icons/columnsgap-line.svg)       | .columnsgap-line       | ![](./imgs/Icons/dart-fill.svg)       | .dart-fill       |
| ![](./imgs/Icons/datasheet-line.svg)        | .datasheet-line        | ![](./imgs/Icons/datasheet-health-line.svg) | .datasheet-health-line | ![](./imgs/Icons/hash-line.svg)             | .hash-line             | ![](./imgs/Icons/headphones-line.svg) | .headphones-line |
| ![](./imgs/Icons/headset-line.svg)          | .headset-line          | ![](./imgs/Icons/lab-fill.svg)              | .lab-fill              | ![](./imgs/Icons/logout-line.svg)           | .logout-line           | ![](./imgs/Icons/medal-line.svg)      | .medal-line      |
| ![](./imgs/Icons/menu-line.svg)             | .menu-line             | ![](./imgs/Icons/pencil-square-fill.svg)    | .pencil-square-fill    | ![](./imgs/Icons/polygon-editable-line.svg) | .polygon-editable-line | ![](./imgs/Icons/qr-line.svg)         | .qr-line         |
| ![](./imgs/Icons/qr-scan-line.svg)          | .qr-scan-line          | ![](./imgs/Icons/quote-fill.svg)            | .quote-fill            | ![](./imgs/Icons/rotate-line.svg)           | .rotate-line           | ![](./imgs/Icons/search-line.svg)     | .search-line     |
| ![](./imgs/Icons/speedometer-line.svg)      | .speedometer-line      | ![](./imgs/Icons/translate-fill.svg)        | .translate-fill        | ![](./imgs/Icons/web-line.svg)              | .web-line              | ![](./imgs/Icons/universal-line.svg)  | .universal-line  |
| ![](./imgs/Icons/universal-circle-line.svg) | .universal-circle-line |

#### Tabla de Íconos Animados

| Icono                                         | Estilo                   | Icono                                        | Estilo                  | Icono                                            | Estilo                      |
| :---:                                         | ------                   | :---:                                        | ------                  | :---:                                            | ------                      |
| ![](./imgs/Icons/animation-loarder-comet.svg) | .animation-loarder-comet | ![](./imgs/Icons/animation-loarder-ring.svg) | .animation-loarder-ring | ![](./imgs/Icons/animation-loarder-ringpath.svg) | .animation-loarder-ringpath |

#### Variables CSS

| Variable                  | Descripción |
| ------------------------- | ----------- |
| `--wui-icon-size`         |
| `--wui-icon-smallsize`    |
| `--wui-icon-bgcolor-out`  |
| `--wui-icon-bgcolor-over` |

#### Implementación

Configuración CSS:

```css
:root {
	--wui-icon-size: 24px;
	--wui-icon-smallsize: 14px;
	--wui-icon-bgcolor-out: rgb(from #353a40 r g b / 70%);
	--wui-icon-bgcolor-over: #353a40;
}
```

Código CSS:

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

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Icon/WUIIcon-0.1.css">
```

Código HTML:

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
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/gbMayJO](https://codepen.io/wuijsproject/pen/gbMayJO).

<a name="WUIFade"></a>

### WUIFade

Versión: `0.1`

Herramienta para control de salida y entrada con opacidad (fade-out y fade-in respectivamente) de elementos HTML. |

Es una clase estática que no posee un constructor ni propiedades.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| JS   | [src/WUI/Fade/WUIFade-0.1.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Fade/WUIFade-0.1.js) |

#### Métodos

##### Metodos estáticos de la clase `WUIFade`:

Un modo de utilizar la librería es mediante el llamado de los métodos estáticos directamente sobre la clase `WUIFade`:

| Método | Tipo retorno | Descripción |
| ------ | ------------ | ----------- |
| in     | `void`       | `in(element[, options])`<br><br>Parámetros:<br>**• element:** `HTMLElement` <br>**• options:** `object` *opcional*<br><br>Ejecuta la transición de entrada. |
| out    | `void`       | `out(element[, options])`<br><br>Parámetros:<br>**• element:** `HTMLElement` <br>**• options:** `object` *opcional*<br><br>Ejecuta la transición de salida. |

##### Metodos extendidos de la clase `HTMLElement`:

Otro modo alternativo es mediante métodos extendidos de la clase `HTMLElement` por medio de su prototipo:

| Método.    | Tipo retorno | Descripción |
| ---------- | ------------ | ----------- |
| wuiFadein  | `void`       | `wuiFadein([options])`<br><br>Parámetros:<br>**• options:** `object` *opcional*<br><br>Ejecuta la transición de entrada. |
| wuiFadeout | `void`       | `wuiFadeout([options])`<br><br>Parámetros:<br>**• options:** `object` *opcional*<br><br>Ejecuta la transición de salida. |

> [!IMPORTANT]
> Cada modo de llamado de métodos se realiza sobre distintos tipos de clases, la primera se sealiza sobre `WUIFade`, mientras que la segunda sobre `HTMLElement`.

##### Opciones

| Opción  | Tipo      | Valor predeterminado | Descripción |
| ------- | --------- | -------------------- | ----------- |
| delay   | `number`  | `400`                | Define el tiempo que tardará la transición del efecto de entrada y de salida medido en milisegundos. |
| display | `string`  | `"block"`            | Establece el valor de la propiedad CSS `display` del elemento HTML en el que se ejecuta el efecto de transición, una vez que la transición de entrada finaliza. |
| force   | `boolean` | `false`              | Ambos efectos, entrada y salida, son ejecutadas siempre y cuando la propiedad CSS `display` sea distinta a `options.display` y a `"none"` respectivamente. La opción `force` ignora esta validación. |

#### Implementación

Código CSS:

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

Cabecera HTML:

```html
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Fade/WUIFade-0.1.js"></script>
```

Código HTML:

```html
<a href="javascript:fadein();" class="my-link">fade-in</a>
<a href="javascript:fadeout();" class="my-link">fade-out</a>
<div id="myElement" class="my-element"></div>
```

Código JS:
```js
const element = document.getElementById("myElement");
const options = {
	delay: 200,
	//display: "block"
};
const fadein = () => {
	element.wuiFadein(options);
	// or alternatively
	//WUIFade.in(element, options);
}
const fadeout = () => {
	element.wuiFadeout(options); 
	// or alternatively
	//WUIFade.out(element, options);
}
```

> [!TIP]
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/LEZpvoX](https://codepen.io/wuijsproject/pen/LEZpvoX).

<a name="WUILoader"></a>

### WUILoader

Version: `0.2`

Componente para la implementación de animaciones de carga

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/WUI/Loader/WUILoader-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Loader/WUILoader-0.2.css) |
| JS   | [src/WUI/Loader/WUILoader-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Loader/WUILoader-0.2.js) |

#### Constructor

| Tipo       | Descripción |
| ---------- | ----------- |
| WUILoader  | `WUILoader([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad | Tipo     | Valor predeterminado | Descripción |
| --------- | -------- | -------------------- | ----------- |
| selector  | `string` | `".wui-loader"`      | (get/set)<br><br>Selector CSS que define el elemento HTML que serán convertido en el objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| style     | `string` | `"ring"`             | (get/set)<br><br>Estilo de la animación de carga.<br><br>Valores:<br>• `"ring"`, anillo.<br>• `"dualring"`, anillo dual.<br>• `"spinner"`, spinner.<br>• `"roller"`, roller.<br>• `"ellipsis"`, puntos.<br>• `"grid"`, grilla. |
| size      | `number` | `60`                 | (get/set)<br><br>Tamaño de la animación de carga en píxeles. |
| dataStyle | `string` | `"style"`            | (get/set)<br><br>Nombre del atributo `data-*` que contiene el valor de la propiedad `style`. |
| dataSize  | `string` | `"size"`             | (get/set)<br><br>Nombre del atributo `data-*` que contiene el valor de la propiedad `size`. |

#### Métodos

| Método       | Tipo retorno | Descripción |
| ------------ | ------------ | ----------- |
| getElements  | `NodeList`   | `getElements()`<br><br>Retorna una lista de elementos HTML con los contenedores de los objetos tipo animación de carga. |
| init         | `void`       | `init()`<br><br>Inicializa los objetos tipo animación de carga	. |

<a name="WUITooltip"></a>
<a name="WUIModal"></a>
<a name="WUIModalSelector"></a>
<a name="WUISlider"></a>
<a name="WUIPaging"></a>
<a name="WUITabs"></a>
<a name="WUIMenubar"></a>

### WUIMenubar

Versión: `0.1`

Componente para la implementación de barras de menú.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/WUI/Menubar/WUIMenubar-0.1.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Menubar/WUIMenubar-0.1.css) |
| JS   | [src/WUI/Menubar/WUIMenubar-0.1.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Menubar/WUIMenubar-0.1.js) |

#### Constructor

| Tipo       | Descripción |
| ---------- | ----------- |
| WUIMenubar | `WUIMenubar([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad     | Tipo       | Valor predeterminado | Descripción |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-menubar"`     | (get/set)<br><br>Selector CSS que define el elemento HTML que serán convertido en el objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| expansive     | `boolean`  | `true`               | (get/set)<br><br>Define si el menú se expande. La función de expansión es no es visible en modo móvil (cuando el ancho de la pantalla es inferior a `768px`). |
| autoClose     | `boolean`  | `true`               | (get/set)<br><br>Define si el submenú se cierra automáticamente hacer click en un botón de él. Si la propiedad es `false` se cargará en la parte superior del submenú un botón para cerrarlo manualmente. |
| topButtons    | `array`    | `[]`                 | (get/set)<br><br>Lista de botones de menú superior, según la definición de **Opciones de Botón**. Los botónes de esta sección no son visibles en modo móvil (cuando el ancho de la pantalla es inferior a `768px`). |
| mainButtons   | `array`    | `[]`                 | (get/set)<br><br>Lista de botones de menú principal, según la definición de **Opciones de Botón**. |
| bottomButtons | `array`    | `[]`                 | (get/set)<br><br>Lista de botones de menú inferior, según la definición de **Opciones de Botón**. Los botónes de esta sección no son visibles en modo móvil (cuando el ancho de la pantalla es inferior a `768px`). |
| onClick       | `function` | `null`               | (get/set)<br><br>Función que se llama cuando un botón es presionado. La función recibe por parámetro:<br><br>**• id:** `string`, identificador único de botón. |
| onSelect      | `function` | `null`               | (get/set)<br><br>Función que se llama cuando un botón con propiedad `selectable` es seleccionado. La función recibe por parámetro:<br><br>**• id:** `string`, identificador único de botón. |

#### Opciones de Botón

| Propiedad    | Tipo       | Valor predeterminado | Descripción |
| ------------ | ---------- | -------------------- | ----------- |
| id           | `string`   | `undefined`          | Identificador único de botón. |
| iconImage    | `string`   | `undefined`          | URL de la imagen asociada al botón de menú. |
| iconClass    | `string`   | `undefined`          | Estilos CSS que define el ícono del botón de menú. Esta opción puede ser utilizado opcionalmente con la librería [WUIIcon](#wuiIcon) mediante el estilo `wui-icon` conjuntamente a un estilo de ícono específico. |
| label        | `string`   | `""`                 | Texto de la etiqueta asociada al botón de menú. |
| radioMode    | `boolean`  | `true`               | Define si el botón se comporta como un botón en modo radio. |
| selectable   | `boolean`  | `true`               | Define si el botón es seleccionable. |
| hoverable    | `boolean`  | `true`               | Define si el botón reacciona al evento `hover`. |
| tooltipable  | `boolean`  | `true`               | Define si el botón muestra un tooltip cuando está contraido y el ancho de la pantalla es mayor o igual a `768px`. |
| selected     | `boolean`  | `false`              | Define si el botón se encuentra seleccionado. |
| enabled      | `boolean`  | `true`               | Define si el botón está habilitado. |
| onClick      | `function` | `null`               | Función que se llama cuando el botón es presionado. Si está definida, esta opción tiene prioridad sobre la propiedad `onClick`. |

#### Métodos

| Método       | Tipo retorno  | Descripción |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getButton    | `object`      | `getButton(id)`<br><br>Parámetros:<br>**• id:** `string`, identificador único de botón.<br><br>Retorna el botón de menú según el identificador único botón de menú pasado por parámetro. |
| init         | `void`        | `init()`<br><br>Inicializa el objeto. |
| selectButton | `void`        | `selectButton(id[, selected[, runCallback]])`<br><br>Parámetros:<br>**• id:** `string`, identificador único de botón.<br>**• selected:** `boolean`, estado de selección del botón. El valor predeterminado `true`.<br>**• runCallback:** `boolean`, ejecuta las funciones `onClick` y `onSelect` del botón. El valor predeterminado `true`.<br><br>Selecciona o deselecciona un botón de menú. |
| enableButton | `void`        | `enableButton(id[, enabled])`<br><br>Parámetros:<br>**• id:** `string`, identificador único de botón.<br>**• enabled:** `boolean`, estado de habilitación del botón. El valor predeterminado `true`.<br><br>Hablita o deshabilita un botón de menú. |
| setPhoto     | `void`        | `setPhoto(id[, src])`<br><br>Parámetros:<br>**• id:** `string`, identificador único de botón.<br>**• src:** `string`, fuente de la imagen. El valor predeterminado `""`.<br><br>Carga una imagen por encima del ícono de un botón. |
| setBubble    | `void`        | `setBubble(id, number)`<br><br>Parámetros:<br>**• id:** `string`, identificador único de botón.<br>**• number:** `number`, número que aparecerá en la burbuja. El valor `0` oculta la burbuja. |
| close        | `void`        | `close()`<br><br>Cierra el submenú en caso de estar desplegado. |
| destroy      | `void`        | `destroy()`<br><br>Destructor. |

#### Variables CSS

| Variable                                          | Descripción |
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
| `--wui-menubar-opener-iconsize`                   | 
| `--wui-menubar-opener-openicon-src`               | 
| `--wui-menubar-opener-closeicon-src`              | 
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
| `--wui-menubar-mobile-opener-closeicon-src`       | 

#### Implementación

Configuración CSS:

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
	--wui-menubar-opener-closeicon-src: none;
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
	--wui-menubar-mobile-opener-closeicon-src: none;
}
```

Código CSS:

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

@media screen and (max-width: 767px) {
	.my-output {
		left: 0px;
	}
}
```

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Icon/WUIIcon-0.1.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Menubar/WUIMenubar-0.1.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Menubar/WUIMenubar-0.1.js"></script>
```

Cuerpo HTML:

```html
<div class="wui-menubar my-menubar"></div>
<div class="my-output"></div>
```

JS code:

```js
// Crear objeto
const output = document.body.querySelector(".my-output");
const menubar = new WUIMenubar({
	selector: ".wui-menubar.my-menubar",
	//expansive: true,
	autoClose: false,
	//topButtons: [],
	//mainButtons: [],
	//bottomButtons: [],
	onClick: (id) => {
		output.textContent = `Click - id botón: "${id}"`;
	},
	//onSelect: null
});

// Agregar botones
menubar.topButtons = [{
	id: "logo",
	iconImage: "https://wuijs.dev/wuijs-color.svg",
	label: "WUI/JS",
	tooltipable: false,
	selectable: false
}];
menubar.mainButtons = [{
	id: "home",
	iconClass: "wui-icon home-fill",
	label: "Inicio",
	selected: true
}, {
	id: "tools",
	iconClass: "wui-icon pencil-fill",
	label: "Herramientas",
	buttons: [{
		id: "users",
		iconClass: "wui-icon palette-fill",
		label: "Colores"
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
		label: "Imágenes"
	}]
}, {
	id: "settings",
	iconClass: "wui-icon gear-fill",
	label: "Configuración",
	selectable: false
}, {
	id: "account",
	iconClass: "wui-icon person-circle-fill",
	photoImage: "",
	label: "Cuenta",
	selectable: false
}, {
	id: "notifications",
	iconClass: "wui-icon bell-fill",
	label: "Notificaciones",
	radio: false
}];
menubar.bottomButtons = [{
	id: "logout",
	iconClass: "wui-icon logout-line",
	label: "Cerrar sesión",
	selectable: false
}];

// Inicializar objeto
menubar.init();
```

> [!TIP]
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/JoKYVQm](https://codepen.io/wuijsproject/pen/JoKYVQm).

<a name="WUIList"></a>

### WUIList

Versión: `0.2`

Componente para la implementación de listas de datos y botoneras para cada fila de manera opcional.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/WUI/List/WUIList-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/List/WUIList-0.2.css) |
| JS   | [src/WUI/List/WUIList-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/List/WUIList-0.2.js) |

#### Constructor

| Tipo    | Descripción |
| ------- | ----------- |
| WUIList | `WUIList([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad    | Tipo       | Valor predeterminado | Descripción |
| ------------ | ---------- | -------------------- | ----------- |
| selector     | `string`   | `".wui-list"`        | (get/set)<br><br>Selector CSS que define el elemento HTML que serán convertido en el objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| paging       | `number`   | `0`                  | (get/set)<br><br>Paginado o número de filas por pagina de la lista. El valor `0` indica que el paginado tendrá el mismo largo que filas, dicho de tra manera, el valor `0` desactiva el paginado. |
| page         | `number`   | `0`                  | (get)<br><br>Página actual mostrada en la lista, donde la página `0` corresponde a la primera página y la última al número total de filas menos 1. |
| pages        | `number`   | `0`                  | (get)<br><br>Número total de páginas. |
| total        | `number`   | `0`                  | (get)<br><br>Número total de filas. |
| columns      | `array`    | `[]`                 | (get/set)<br><br>Lista de columnas de la lista, según la definición de **Opciones de Columna**. |
| rows         | `array`    | `[]`                 | (get/set)<br><br>Lista de filas de la lista, según la definición de **Opciones de Fila**. |
| buttons      | `array`    | `[]`                 | (get/set)<br><br>Lista de botones de filas de la lista, según la definición de **Opciones de Botón de Fila**. |
| buttonsStyle | `string`   | `"round"`            | (get/set)<br><br>Estilo de los botones de fila.<br><br>Valores:<br>• `"round"`, forma circular.<br>• `"stretch"`, forma cuadrada. |
| onPrint      | `function` | `null`               | (get/set)<br><br>Función que se llama cuando se despliega una página o la totalidad de la lista. La función recibe por parámetro:<br><br>**• page:** `number`, número de página.<br>**• pages:** `number`, total de página.<br>**• total:** `number`, total de filas. |
| onClick      | `function` | `null`               | (get/set)<br><br>Función que se llama cuando una fila es presionada. La función recibe por parámetro:<br><br>**• index:** `number`, número de fila.<br>**• id:** `string`, id de fila.<br>**• enabled:** `boolean`, estado de habilitación de fila.<br>**• options:** `object`, opciones de configuración de la fila. |

#### Opciones de Columna

| Propiedad | Tipo     | Valor predeterminado | Descripción |
| --------- | -------- | -------------------- | ----------- |
| width     | `string` | `undefined`          | Ancho de la columna. Este puede estar expresado como número asociado a píxeles o en formato compatible CSS. |
| align     | `string` | `"left"`             | Modo de alineación de el contenido de la columna.<br><br>Valores:<br>• `"left"`<br>• `"right"`<br>• `"center"` |

#### Opciones de Fila

| Propiedad    | Tipo      | Valor predeterminado | Descripción |
| ------------ | --------- | -------------------- | ----------- |
| id           | `string`  | `undefined`          | Identificador único de fila. |
| data         | `array`   | `[]`                 | Arreglo con el contenido de las celdas de la fila. |
| innerContent | `string`  | `undefined`          | Contenido opcional de la fila interna, desplegado en la parte inferior de la fila. |
| innerOpened  | `boolean` | `false`              | Apertura inicial del contenido opcional de la fila interna. |
| enabled      | `boolean` | `true`               | Define si la fila está habilitada. |

#### Opciones de Botón de Fila

| Propiedad | Tipo                | Valor predeterminado | Descripción |
| --------- | ------------------- | -------------------- | ----------- |
| iconClass | `string\|function`  | `undefined`          | Estilos CSS que define el ícono del botón de fila. Esta opción puede ser utilizado opcionalmente con la librería [WUIIcon](#wuiIcon) mediante el estilo `wui-icon` conjuntamente a un estilo de ícono específico. |
| bgcolor   | `string\|function`  | `undefined`          | Color de fondo en formato compatible CSS. |
| enabled   | `boolean\|function` | `true`               | Define si el botón está habilitado. |
| onClick   | `function`          | `null`               | Función que se llama cuando el botón es presionado. Reciven los parámetro `index`, correspondiente a la posición de la fila partiendo desde `0`; y `id`, correspondiente al Identificador único de fila. |

> [!IMPORTANT]
> Las opciones que aceptan valores opcionales de tipo función (`iconClass`, `bgcolor` y `enabled`), reciven los parámetro `index`, correspondiente a la posición de la fila partiendo desde `0`; e `id`, correspondiente al Identificador único de fila.

#### Métodos

| Método       | Tipo retorno  | Descripción |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| init         | `void`        | `init()`<br><br>Inicializa el objeto. |
| addColumn    | `void`        | `addColumn(options)`<br><br>Agrega la configuración de una nueva columna a la lista de columnas del objeto, según la definición de **Opciones de Columna**. |
| addRow       | `void`        | `addRow(options)`<br><br>Agrega la configuración de una nueva fila a la lista filas del objeto, según la definición de **Opciones de Fila**. |
| addButton    | `void`        | `addButton(options)`<br><br>Agrega la configuración de un nuevo botón de fila a la lista de bootones de fila del objeto, según la definición de **Opciones de Botón de Fila**. |
| print        | `void`        | `print([page])`<br><br>Parámetros:<br>**• page:** `number`, número de página. El valor predeterminado corresponde a la propiedad `page`. Si se pasa como parámetro un valor distinto al de la propiedad `page` y si es válido, la propiedad tomará dicho valor.<br><br>Imprime la vista de una lista, esta vista puede ser una página o la lista completa según la propiedad `paging` y el parámetro `page`. |
| enableRow    | `void`        | `enableRow(index[, enabled])`<br><br>Parámetros:<br>**• index:** `number`, número de fila.<br>**• enabled:** `boolean`, estado de habilitación de la fila. El valor predeterminado `true`.<br><br>Hablita o deshabilita una fila. |
| openInnerRow | `void`        | `openInnerRow(index[, open])`<br><br>Parámetros:<br>**• index:** `number`, número de fila.<br>**• open:** `boolean`, estado de apertura del contenido opcional de la fila interna. El valor predeterminado `true`.<br><br>Abre o cierra el contenido opcional de la fila interna. |
| first        | `void`        | `first()`<br><br>Despliega la vista de la primera página. |
| last         | `void`        | `last()`<br><br>Despliega la vista de la última página. |
| prev         | `void`        | `prev()`<br><br>Despliega la vista de la página previa si es que esta existe. |
| next         | `void`        | `next()`<br><br>Despliega la vista de la página siguiente si es que esta existe. |
| isPrevEnable | `boolean`     | `isPrevEnable()`<br><br>Retorna si existe una página previa. |
| isNextEnable | `boolean`     | `isNextEnable()`<br><br>Retorna si existe una página siguiente. |
| destroy      | `void`        | `destroy()`<br><br>Destructor. |

#### Variables CSS

| Variable                             | Descripción |
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

#### Implementación

Configuración CSS:

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

Código CSS:

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

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Icon/WUIIcon-0.1.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/List/WUIList-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/List/WUIList-0.2.js"></script>
```

Código HTML:

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

Código JS:

```js
// Crear objeto
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
			output.textContent = `Click botón - índice: ${index}, id: ${id}`;
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
		output.textContent = `Click fila - índice: ${index}, id: ${id}, enabled: ${enabled}`;
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

// Inicializar objeto
list.init();

// Cargar set de datos
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
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/xbOweva](https://codepen.io/wuijsproject/pen/xbOweva).

<a name="WUITable"></a>

### WUITable

Versión: `0.2`

Componente para la implementación de tablas de datos. A diferencia del objeto `WUIList`, el objeto `WUITable` incluye una cabecera de columnas.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/WUI/Table/WUITable-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Table/WUITable-0.2.css) |
| JS   | [src/WUI/Table/WUITable-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Table/WUITable-0.2.js) |

#### Constructor

| Tipo     | Descripción |
| -------- | ----------- |
| WUITable | `WUITable([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad    | Tipo       | Valor predeterminado | Descripción |
| ------------ | ---------- | -------------------- | ----------- |
| selector     | `string`   | `".wui-table"`       | (get/set)<br><br>Selector CSS que define el elemento HTML que serán convertido en el objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| width        | `string`   | `"auto"`             | (get/set)<br><br>Ancho de la tabla en formato compatible CSS. |
| paging       | `number`   | `0`                  | (get/set)<br><br>Paginado o número de filas por pagina de la tabla. El valor `0` indica que el paginado tendrá el mismo largo que filas, dicho de tra manera, el valor `0` desactiva el paginado. |
| page         | `number`   | `0`                  | (get)<br><br>Página actual mostrada en la tabla, donde la página `0` corresponde a la primera página y la última al número total de filas menos 1. |
| pages        | `number`   | `0`                  | (get)<br><br>Número total de páginas. |
| total        | `number`   | `0`                  | (get)<br><br>Número total de filas. |
| columns      | `array`    | `[]`                 | (get/set)<br><br>Lista de columnas de la tabla, según la definición de **Opciones de Columna**. |
| rows         | `array`    | `[]`                 | (get/set)<br><br>Lista de filas de la tabla, según la definición de **Opciones de Fila**. |
| align        | `string`   | `"left"`             | (get/set)<br><br>Modo de alineación horizontal del contenido de la tabla.<br><br>Valores:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign       | `string`   | `"middle"`           | (get/set)<br><br>Modo de alineación vertical del contenido de la tabla.<br><br>Valores:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| sortable     | `boolean`  | `true`               | (get/set)<br><br>Define si las filas son ordenables por columna. |
| resizable    | `boolean`  | `true`               | (get/set)<br><br>Define si las columnas son redimensionables. |
| draggable    | `boolean`  | `true`               | (get/set)<br><br>Define si las columnas son arrastrables para poder cambiar su posición. |
| selectable   | `boolean`  | `true`               | (get/set)<br><br>Define si las filas son seleccionables. |
| onPrint      | `function` | `null`               | (get/set)<br><br>Función que se llama cuando una página o la totalidad de la tabla es despliega. La función recibe por parámetro:<br><br>**• page:** `number`, número de página.<br>**• pages:** `number`, total de página.<br>**• total:** `number`, total de filas. |
| onClick      | `function` | `null`               | (get/set)<br><br>Función que se llama cuando una fila es presionada. La función recibe por parámetro:<br><br>**• index:** `number`, número de fila.<br>**• id:** `string`, id de fila.<br>**• enabled:** `boolean`, estado de habilitación de fila.<br>**• options:** `object`, opciones de configuración de la fila. |
| onDblClick   | `function` | `null`               | (get/set)<br><br>Función que se llama cuando una fila es presionada dos veces. La función recibe por parámetro:<br><br>**• index:** `number`, número de fila.<br>**• id:** `string`, id de fila.<br>**• enabled:** `boolean`, estado de habilitación de fila.<br>**• options:** `object`, opciones de configuración de la fila. |
| onSelect     | `function` | `null`               | (get/set)<br><br>Función que se llama cuando una fila es seleccionada. La función recibe por parámetro:<br><br>**• index:** `number`, número de fila.<br>**• id:** `string`, id de fila.<br>**• enabled:** `boolean`, estado de habilitación de fila.<br>**• options:** `object`, opciones de configuración de la fila. |

#### Opciones de Columna

| Propiedad | Tipo      | Valor predeterminado | Descripción |
| --------- | --------- | -------------------- | ----------- |
| label     | `string`  | `""`                 | Etiqueta de la columna. |
| width     | `string`  | `undefined`          | Ancho de la columna. Este puede estar expresado como número asociado a píxeles o en formato compatible CSS. |
| align     | `string`  | `WUITable.align`     | Modo de alineación horizontal del contenido de la columna. Esta opción tiene prioridad sobre la propiedad `align`.<br><br>Valores:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign    | `string`  | `WUITable.valign`    | Modo de alineación vertical del contenido de la columna. Esta opción tiene prioridad sobre la propiedad `valign`.<br><br>Valores:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| sortable  | `boolean` | `WUITable.sortable`  | Define si las filas son ordenables en base a la columna. Esta opción tiene prioridad sobre la propiedad `sortable`. |
| resizable | `boolean` | `WUITable.resizable` | Define si la columna es redimensionables. Esta opción tiene prioridad sobre la propiedad `resizable`. |
| draggable | `boolean` | `WUITable.draggable` | Define si la columna es arrastrables para poder cambiar su posición. Esta opción tiene prioridad sobre la propiedad `draggable`. |

> [!IMPORTANT]
> La opción de fila `width` no tomará valores mayores al ancho máximo computado entre todas las celdas pertenecientes a la comumna.
> De esta manera, el modo `resizable` sólo podrá alcanzar dicho valor máximo en cada columna.

#### Opciones de Fila

| Propiedad | Tipo      | Valor predeterminado | Descripción |
| --------- | --------- | -------------------- | ----------- |
| id        | `string`  | `undefined`          | Identificador único de fila. |
| align     | `string`  | `WUITable.align`     | Modo de alineación horizontal del contenido de la fila. Esta opción tiene prioridad sobre la propiedad `align`.<br><br>Valores:<br>• `"left"`<br>• `"center"`<br>• `"right"` |
| valign    | `string`  | `WUITable.valign`    | Modo de alineación vertical del contenido de la fila. Esta opción tiene prioridad sobre la propiedad `valign`.<br><br>Valores:<br>• `"top"`<br>• `"middle"`<br>• `"bottom"` |
| data      | `array`   | `[]`                 | Arreglo con el contenido de las celdas de la fila. |
| selected  | `boolean` | `false`              | Define si la fila está seleccionada. |
| enabled   | `boolean` | `true`               | Define si la fila está habilitada. |

#### Métodos

| Método       | Tipo retorno  | Descripción |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| init         | `void`        | `init()`<br><br>Inicializa el objeto. |
| addColumn    | `void`        | `addColumn(options)`<br><br>Agrega la configuración de una nueva columna a la lista de columnas del objeto, según la definición de **Opciones de Columna**. |
| addRow       | `void`        | `addRow(options)`<br><br>Agrega la configuración de una nueva fila a la lista filas del objeto, según la definición de **Opciones de Fila**. |
| print        | `void`        | `print([page])`<br><br>Parámetros:<br>**• page:** `number`, número de página. El valor predeterminado corresponde a la propiedad `page`. Si se pasa como parámetro un valor distinto al de la propiedad `page` y si es válido, la propiedad tomará dicho valor.<br><br>Imprime la vista de una tabla, esta vista puede ser una página o la tabla completa según la propiedad `paging` y el parámetro `page`. |
| sort         | `void`        | `first(index[, direction])`<br><br>Parámetros:<br>**• index:** `number`, número de columns.<br>**• direction:** `string`, dirección de orden, esta puede ser: `"asc"` o `"desc"`. El valor predeterminado `asc`. |
| selectRow    | `void`        | `selectRow(index[, selected])`<br><br>Parámetros:<br>**• index:** `number`, número de fila.<br>**• selected:** `boolean`, estado de selección de la fila. El valor predeterminado `true`.<br><br>Selecciona o deselecciona una fila. |
| enableRow    | `void`        | `enableRow(index[, enabled])`<br><br>Parámetros:<br>**• index:** `number`, número de fila.<br>**• enabled:** `boolean`, estado de habilitación de la fila. El valor predeterminado `true`.<br><br>Hablita o deshabilita una fila. |
| first        | `void`        | `first()`<br><br>Despliega la vista de la primera página. |
| last         | `void`        | `last()`<br><br>Despliega la vista de la última página. |
| prev         | `void`        | `prev()`<br><br>Despliega la vista de la página previa si es que esta existe. |
| next         | `void`        | `next()`<br><br>Despliega la vista de la página siguiente si es que esta existe. |
| isPrevEnable | `boolean`     | `isPrevEnable()`<br><br>Retorna si existe una página previa. |
| isNextEnable | `boolean`     | `isNextEnable()`<br><br>Retorna si existe una página siguiente. |
| destroy      | `void`        | `destroy()`<br><br>Destructor. |

#### Variables CSS

| Variable                                       | Descripción |
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


#### Implementación

Configuración CSS:

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

Código CSS:

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

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Table/WUITable-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Table/WUITable-0.2.js"></script>
```

Código HTML:

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

Código JS:

```js
// Crear objeto
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
		label: "Columna A",
		width: 100
	},{
		label: "Columna B",
		width: 100
	}, {
		label: "Columna C",
		width: 100
	},{
		label: "Columna D",
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
		output.textContent = `Click fila - índice: ${index}, id: ${id}, enabled: ${enabled}`;
	},
	onDblClick: (index, id, enabled, options) => {
		output.textContent = `Doble-Click fila - índice: ${index}, id: ${id}, enabled: ${enabled}`;
	},
	onSelect: (index, id, enabled, options) => {
		output.textContent = `Selección fila - índice: ${index}, id: ${id}, enabled: ${enabled}`;
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

// Inicializar objeto
table.init();

// Cargar set de datos
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
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/jErboKZ](https://codepen.io/wuijsproject/pen/jErboKZ).

<a name="WUIForm"></a>
<a name="WUIFormat"></a>

### WUIFormat

Versión: `0.2`

Herramienta para manejo y validación de formatos de datos de tipo `string`, `number` y `Date`.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| JS   | [src/WUI/Format/WUIFormat-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Format/WUIFormat-0.2.js) |

#### Métodos Estáticos

| Método                | Tipo retorno | Descripción |
| --------------------- | ------------ | ----------- |
| numberToString        | `string`     | `numberToString(number[, options])`<br><br>Parámetros:<br>**• number:** `number`, número a formatear.<br>**• options:** `Object` *opcional*, opciones de formateo.<br><br>Formatea un número a una cadena. |
| numberToSizeString    | `string`     | `numberToSizeString(number)`<br><br>Parámetros:<br>**• number:** `number`, número a formatear.<br><br>Formatea un número a una cadena que representa el tamaño de archivo (B, KB, MB, TB). |
| numberToModule11      | `string`     | `numberToModule11(number, codeTen)`<br><br>Parámetros:<br>**• number:** `string`, número a validar (incluido dígito verificador).<br>**• codeTen:** `string`, carácter por el que se reemplazará el dígito verificador en caso que sea 10.<br><br>Calcula el dígito verificador módulo 11. |
| numberToModule23      | `string`     | `numberToModule23(number, map)`<br><br>Parámetros:<br>**• number:** `string`, número a validar.<br>**• map:** `string`, cadena de caracteres de mapeo.<br><br>Calcula el dígito verificador módulo 23. |
| dateToString          | `string`     | `dateToString(date[, format[, options]])`<br><br>Parámetros:<br>**• date:** `Date`, fecha a formatear.<br>**• format:** `string` *opcional*, formato de fecha esperado (por defecto `"yyyy-mm-dd"`).<br>**• options:** `Object` *opcional*, opciones de formateo.<br><br>Formatea una fecha a cadena usando `Date.prototype.wuiDefaults`. |
| validateDate          | `boolean`    | `validateDate(date[, format])`<br><br>Parámetros:<br>**• date:** `string`, fecha a validar.<br>**• format:** `string` *opcional*, formato de fecha esperado (por defecto `"yyyy-mm-dd"`).<br><br>Valida una fecha en formato cadena. |
| validateEmail         | `boolean`    | `validateEmail(email)`<br><br>Parámetros:<br>**• email:** `string`, dirección de correo.<br><br>Valida una dirección de correo electrónico. |
| validateEmailList     | `boolean`    | `validateEmailList(list[, separator])`<br><br>Parámetros:<br>**• list:** `string`, lista de direcciones de correo.<br>**• separator:** `string` *opcional*, carácter(es) de separación de lista.<br><br>Valida una lista de correos electrónicos. |
| validatePhone         | `boolean`    | `validatePhone(phone[, length])`<br><br>Parámetros:<br>**• phone:** `string`, número telefónico.<br>**• length:** `number` *opcional*, largo del número telefónico.<br><br>Valida un número de teléfono. |
| validatePhoneList     | `boolean`    | `validatePhoneList(list[, length[, separator]])`<br><br>Parámetros:<br>**• list:** `string`, lista de números telefónicos.<br>**• length:** `number` *opcional*, largo del número telefónico.<br>**• separator:** `string` *opcional*, carácter(es) de separación de lista.<br><br>Valida una lista de números de teléfono. |
| validateURL           | `boolean`    | `validateURL(url)`<br><br>Parámetros:<br>**• url:** `string`, dirección URL.<br><br>Valida una dirección URL. |
| validateURLList       | `boolean`    | `validateURLList(list[, separator])`<br><br>Parámetros:<br>**• list:** `string`, lista de direcciones URL.<br>**• separator:** `string` *opcional*, carácter(es) de separación de lista.<br><br>Valida una lista de URLs. |
| validateIPv4          | `boolean`    | `validateIPv4(ipv4)`<br><br>Parámetros:<br>**• ipv4:** `string`, dirección de IPv4.<br><br>Valida una dirección IPv4. |
| validateModule11      | `boolean`    | `validateModule11(value, codeTen)`<br><br>Parámetros:<br>**• value:** `string`, cadena a validar (incluido dígito verificador).<br>**• codeTen:** `string`, carácter por el que se reemplazará el dígito verificador en caso que sea 10.<br><br>Valida una cadena incluido el dígito verificador módulo 11. |
| validateModule23      | `boolean`    | `validateModule23(value, map)`<br><br>Parámetros:<br>**• value:** `string`, cadena a validar (incluido dígito verificador).<br>**• map:** `string`, cadena de caracteres de mapeo.<br><br>Valida una cadena incluido el dígito verificador módulo 23. |
| validateNID           | `boolean`    | `validateNID(nid, countryCode)`<br><br>Parámetros:<br>**• nid:** `string`, valor a validar.<br>**• countryCode:** `string`, código de país en formato ISO 3166-1 alpha-2 con soporte para CL, PY y ES.<br><br>Valida un documento de identidad nacional. |
| loadDate              | `Date`       | `loadDate(date[, format[, options]])`<br><br>Parámetros:<br>**• date:** `string`, fecha a cargar.<br>**• format:** `string` *opcional*, formato de fecha.<br>**• options:** `object` *opcional*, opciones de fecha, según la definición de **Valores predeterminados** `<Date.prototype.wuiDefaults>`.<br><br>Carga una fecha a partir de una cadena. |

#### Extensiones de Prototipo Number `Number.prototype`

##### Valores predeterminados `Number.prototype.wuiDefaults`

| Propiedad          | Tipo             | Valor predeterminado | Descripción |
| ------------------ | ---------------- | -------------------- | ----------- |
| numberPrefix       | `string`         | `""`                 | Prefijo de la cadena de retorno empleado por los métodos `WUIFormat.numberToString()` y `Number.prototype.wuiToString()`. |
| numberSufix        | `string`         | `""`                 | Sufijo de la cadena de retorno empleado por los métodos `WUIFormat.numberToString()` y `Number.prototype.wuiToString()`. |
| thousandsSeparator | `string`         | `","`                | Separador de miles de la cadena de retorno empleado por los métodos `WUIFormat.numberToString()` y `Number.prototype.wuiToString()`. |
| decimalLength      | `number\|string` | `"auto"`             | Largo del decimal de la cadena de retorno empleado por los métodos `WUIFormat.numberToString()` y `Number.prototype.wuiToString()`. |
| decimalSeparator   | `string`         | `"."`                | Separador del decimal de la cadena de retorno empleado por los métodos `WUIFormat.numberToString()` y `Number.prototype.wuiToString()`. |

##### Métodos

| Método          | Tipo retorno | Descripción |
| --------------- | ------------ | ----------- |
| wuiToString     | `string`     | `wuiToString([options])`<br><br>Parámetros:<br>**• options:** `Object` *opcional*, opciones de formateo.<br><br>Formatea un número a una cadena. |
| wuiToSizeString | `string`     | `wuiToSizeString()`<br><br>Formatea un número a una cadena que representa el tamaño de archivo (B, KB, MB, TB). |
| wuiToModule11   | `string`     | `wuiToModule11(codeTen)`<br><br>Parámetros:<br>**• codeTen:** `string`, carácter por el que se reemplazará el dígito verificador en caso que sea 10.<br><br>Calcula el dígito verificador módulo 11. |
| wuiToModule23   | `string`     | `wuiToModule23(map)`<br><br>Parámetros:<br>**• map:** `string`, cadena de caracteres de mapeo.<br><br>Calcula el dígito verificador módulo 23. |

#### Extensiones de Prototipo String `String.prototype`

##### Valores predeterminados `String.prototype.wuiDefaults`

| Propiedad          | Tipo     | Valor predeterminado | Descripción |
| ------------------ | -------- | -------------------- | ----------- |
| emailListSeparator | `string` | `","`                | Separador compuesto por uno o más caracteres utilizada para la validación de listas de direcciones de correos. |
| phoneLength        | `number` | `10`                 | Largo requerido para la validación de un número de teléfono. |
| phoneListSeparator | `string` | `","`                | Separador compuesto por uno o más caracteres utilizada para la validación de listas de números de teléfono. |
| urlListSeparator   | `string` | `","`                | Separador compuesto por uno o más caracteres utilizada para la validación de listas de direcciones URLs. |

##### Métodos

| Método               | Tipo retorno | Descripción |
| -------------------- | ------------ | ----------- |
| wuiValidateDate      | `boolean`    | `wuiValidateDate([format])`<br><br>Parámetros:<br>**• format:** `string` *opcional*, formato de fecha esperado (por defecto `"yyyy-mm-dd"`).<br><br>Valida una fecha en formato cadena. |
| wuiValidateEmail     | `boolean`    | `wuiValidateEmail()`<br><br>Valida una dirección de correo electrónico. |
| wuiValidateEmailList | `boolean`    | `wuiValidateEmailList([separator])`<br><br>Parámetros:<br>**• separator:** `string` *opcional*, carácter(es) de separación de lista.<br><br>Valida una lista de correos electrónicos. |
| wuiValidatePhone     | `boolean`    | `wuiValidatePhone([length])`<br><br>Parámetros:<br>**• length:** `number` *opcional*, largo del número telefónico.<br><br>Valida un número de teléfono. |
| wuiValidatePhoneList | `boolean`    | `wuiValidatePhoneList([length, separator])`<br><br>Parámetros:<br>**• length:** `number` *opcional*, largo del número telefónico.<br>**• separator:** `string` *opcional*, carácter(es) de separación de lista.<br><br>Valida una lista de números de teléfono. |
| wuiValidateURL       | `boolean`    | `wuiValidateURL()`<br><br>Valida una dirección URL. |
| wuiValidateURLList   | `boolean`    | `wuiValidateURLList([separator])`<br><br>Parámetros:<br>**• separator:** `string` *opcional*, carácter(es) de separación de lista.<br><br>Valida una lista de URLs. |
| wuiValidateIPv4      | `boolean`    | `wuiValidateIPv4()`<br><br>Valida una dirección IPv4. |
| wuiValidateModule11  | `boolean`    | `wuiValidateModule11(codeTen)`<br><br>Parámetros:<br>**• codeTen:** `string`, carácter por el que se reemplazará el dígito verificador en caso que sea 10.<br><br>Valida una cadena incluido el dígito verificador módulo 11. |
| wuiValidateModule23  | `boolean`    | `wuiValidateModule23(map)`<br><br>Parámetros:<br>**• map:** `string`, cadena de caracteres de mapeo.<br><br>Valida una cadena incluido el dígito verificador módulo 23. |
| wuiValidateNID       | `boolean`    | `wuiValidateNID(countryCode)`<br><br>Parámetros:<br>**• countryCode:** `string`, código de país en formato ISO 3166-1 alpha-2 con soporte para CL, PY y ES.<br><br>Valida un documento de identidad nacional. |

#### Extensiones de Prototipo Date `Date.prototype`

##### Valores predeterminados `Date.prototype.wuiDefaults`

| Propiedad      | Tipo            | Valor predeterminado    | Descripción |
| -------------- | --------------- | ----------------------- | ----------- |
| utc            | `boolean`       | `false`                 | Indica si se debe usar la hora universal coordinada (UTC). |
| locales        | `string`        | `"en-US"`               | Código de configuración regional en formato `<ISO 639-1>-<ISO 3166-1 alpha-2>`. Por ejemplo: `es-CL`, `en-US`, `fr-FR`, etc. |
| dateFormat     | `string`        | `"yyyy-mm-dd"`          | Formato de fecha, según la definición de **Partes del formato de fecha/hora**.|
| timeFormat     | `string`        | `"hh:MM:ss"`            | Formato de hora, según la definición de **Partes del formato de fecha/hora**. |
| datetimeFormat | `string`        | `"yyyy-mm-dd hh:MM:ss"` | Formato de fecha/hora, según la definición de **Partes del formato de fecha/hora**. |

##### Partes del formato de fecha/hora

| Parte | Descripción |
| ----- | ----------- |
| yyyy  | Año en formato de 4 digitos. |
| yy    | Año en formato de 2 digitos. |
| mmmm  | Mes en formato nombre completo. |
| mmm   | Mes en formato de las primeras 3 iniciales del nombre. |
| mm    | Mes en formato de 2 digitos. |
| m     | Mes en formato de número entero. |
| dd    | Día del mes en formato de 2 digitos. |
| d     | Día del mes en formato de número entero. |
| DDDD  | Nombre del día de la semana en formato nombre completo. |
| DDD   | Nombre del día de la semana en formato de las primeras 3 iniciales del nombre. |
| DD    | Nombre del día de la semana en formato de las primeras 2 iniciales del nombre. |
| D     | Nombre del día de la semana en formato de número entero. |
| hh    | Hora en formato de 2 digitos. |
| h     | Hora en formato de número entero. |
| MM    | Minuto en formato de 2 digitos. |
| M     | Minuto en formato de número entero. |
| ss    | Segundo en formato de 2 digitos. |
| s     | Segundo en formato de número entero. |
| SSS   | Milisegundo en formato de 3 digitos. |
| S     | Milisegundo en formato de número entero. |
| o     | Desplazamiento de zona horaria en formato de número entero. |
| tz    | Desplazamiento de zona horaria en formato "±hhMM". |
| gmt   | Desplazamiento de zona horaria en formato "GMT±hhMM". |

##### Formatos de carga predefinidos

| Formato               | Valor |
| --------------------- | ----- |
| `"datetime\|default"` | `Date.prototype.wuiDefaults.datetimeFormat` |
| `"numeric"`           | `"yyyymmddhhMMss"` |
| `"standard"`          | `"yyyy-mm-dd hh:MM:ss"` |
| `"longtime"`          | `"yyyy-mm-ddThh:MM:ss"` |

##### Formatos de salida predefinidos

| Formato                      | Valor |
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

##### Métodos

| Método         | Tipo retorno | Descripción |
| -------------- | ------------ | ----------- |
| wuiLoad        | `Date`       | `wuiLoad(value[, format[, options]])`<br><br>Parámetros:<br>**• value:** `string`, fecha a cargar.<br>**• format:** `string` *opcional*, formato de fecha.<br>**• options:** `object` *opcional*, opciones de fecha, según la definición de **Valores predeterminados** `<Date.prototype.wuiDefaults>`.<br><br>Carga una fecha a partir de una cadena. |
| wuiToString    | `string`     | `wuiToString([format[, options]])`<br><br>Parámetros:<br>**• format:** `string` *opcional*, formato de fecha.<br>**• options:** `object` *opcional*, opciones de fecha, según la definición de **Valores predeterminados** `<Date.prototype.wuiDefaults>`.<br><br>Convierte una fecha a cadena. |

#### Implementación

CSS Code:

```css
.my-output {
	position: relative;
	margin: 10px;
	font-family: monospace;
}
```

Cabecera HTML:

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

Código JS:

```js
// Formateo de números
//Number.prototype.wuiDefaults.numberPrefix = "";
//Number.prototype.wuiDefaults.numberSufix = "";
Number.prototype.wuiDefaults.thousandsSeparator = ".";
Number.prototype.wuiDefaults.decimalLength = 2;
Number.prototype.wuiDefaults.decimalSeparator = ",";
const number = 1234.567;
const numberOutput = document.body.querySelector(".my-output.number");
const numberFormatting = number.wuiToString({ numberPrefix: "$ " });
numberOutput.textContent = `number: ${number} - formatting: ${numberFormatting}`;

// Validación de correo
const email = "test@example.com";
const emailOutput = document.body.querySelector(".my-output.email");
const emailValidation = email.wuiValidateEmail();
emailOutput.textContent = `email: ${email} - validation: ${emailValidation}`;

// Formateo de fecha/hora local
const localDateLoadFormat = "yyyy-mm-dd";
const localDate = new Date().wuiLoad("2023-12-31", localDateLoadFormat);
const localDateOutput = document.body.querySelector(".my-output.localDate");
const localDateFormat = "dd/mm/yyyy hh:MM gmt";
const localDateFormatting = localDate.wuiToString(localDateFormat, { utc: false });
localDateOutput.textContent = `local date: ${localDate} - format: ${localDateFormat} - formatting: ${localDateFormatting}`;

// Formateo de fecha/hora UTC
const utcDateLoadFormat = "yyyy-mm-dd";
const utcDate = new Date().wuiLoad("2023-12-31", utcDateLoadFormat);
const utcDateOutput = document.body.querySelector(".my-output.utcDate");
const utcDateFormat = "dd/mm/yyyy hh:MM gmt";
const utcDateFormatting = utcDate.wuiToString(utcDateFormat, { utc: true });
utcDateOutput.textContent = `utc date: ${utcDate} - format: ${utcDateFormat} - formatting: ${utcDateFormatting}`;
```

> [!TIP]
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/emzBjVy](https://codepen.io/wuijsproject/pen/emzBjVy).

<a name="WUISelectpicker"></a>

### WUISelectpicker

Versión: `0.2`

Componente para la implementación de entradas de datos de tipo lista de selección múltiple o excluyente basada en el elemento HTML `<select>`.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/WUI/Selectpicker/WUISelectpicker-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Selectpicker/WUISelectpicker-0.2.css) |
| JS   | [src/WUI/Selectpicker/WUISelectpicker-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Selectpicker/WUISelectpicker-0.2.js) |

#### Constructor

| Tipo            | Descripción |
| --------------- | ----------- |
| WUISelectpicker | `WUISelectpicker([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad      | Tipo       | Valor predeterminado  | Descripción |
| -------------- | ---------- | --------------------- | ----------- |
| selector       | `string`   | `".wui-selectpicker"` | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| value          | `string`   | `""`                  | (get/set)<br><br>Valor de la selección de opciones inicial. |
| text           | `string`   | `""`                  | (get)<br><br>Texto de la selección de opciones inicial. |
| lang           | `string`   | `"en"`                | (get/set)<br><br>Idioma del componente.<br><br>Valores:<br>• `"de"`, Alemán.<br>• `"en"`, Inglés.<br>• `"es"`, Español. |
| texts          | `object`   | `{}`                  | (get/set)<br><br>Textos personalizados para los botones y mensajes del componente. |
| openDirection  | `string`   | `"down"`              | (get/set)<br><br>Dirección de apertura del selector.<br><br>Valores:<br>• `"up"`, hacia arriba.<br>• `"down"`, hacia abajo. |
| multiple       | `boolean`  | `false`               | (get/set)<br><br>Define si el selector permite selección múltiple. |
| separatorValue | `string`   | `","`                 | (get/set)<br><br>Caracter separador de valores en caso de selección múltiple. |
| separatorText  | `string`   | `", "`                | (get/set)<br><br>Caracter separador de textos en caso de selección múltiple. |
| filterable     | `boolean`  | `true`                | (get/set)<br><br>Define si el selector permite filtrar opciones mediante entrada de texto. |
| enabled        | `boolean`  | `true`                | (get/set)<br><br>Define si la entrada de datos está habilitada. |
| onOpen         | `function` | `null`                | (get/set)<br><br>Función que se llama cuando se abre el selector. La función recibe por parámetro el valor actual seleccionado. |
| onChange       | `function` | `null`                | (get/set)<br><br>Función que se llama cuando cambia el valor seleccionado. La función recibe por parámetro el nuevo valor seleccionado. |

#### Opciones de Menú

| Propiedad | Tipo      | Valor predeterminado | Descripción |
| --------- | --------- | -------------------- | ----------- |
| icon      | `string`  | `undefined`          | Clases CSS del ícono de la opción. |
| text      | `string`  | `""`                 | Texto de la opción. |
| value     | `string`  | `""`                 | Valor de la opción. |
| selected  | `boolean` | `false`              | Estado de selección de la opción. |

#### Métodos

| Método          | Tipo retorno         | Descripción |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getBox          | `HTMLElement`        | `getBox()`<br><br>Retorna el elemento HTML de la caja desplegable. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Retorna un arreglo de los elementos HTML que son parte de la visualización del valor. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Retorna el elemento HTML asociado a la entrada de datos base `<select>`. |
| init            | `void`               | `init()`<br><br>Inicializa el objeto. |
| addOption       | `void`               | `addOption(option)`<br><br>Parámetros:<br>**• option:** `object`.<br><br>Agrega una opción a la lista, según la definición de **Opciones de Menú**. |
| loadOptions     | `void`               | `loadOptions(options)`<br><br>Parámetros:<br>**• options:** `array`.<br><br>Carga un arreglo de opciones, limpiando las existentes previamente. |
| clearOptions    | `void`               | `clearOptions()`<br><br>Elimina todas las opciones de la lista. |
| open            | `void`               | `open()`<br><br>Abre la lista de opciones. |
| close           | `void`               | `close()`<br><br>Cierra la lista de opciones. |
| toggle          | `void`               | `toggle()`<br><br>Alterna el estado de apertura de la lista de opciones. |
| cancel          | `void`               | `cancel()`<br><br>Cancela la selección actual y revierte al valor anterior, cerrando la lista. |
| accept          | `void`               | `accept()`<br><br>Acepta la selección actual y cierra la lista. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Retorna si la lista de opciones está abierta. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Retorna si el selector no tiene ninguna opción seleccionada. |
| isValid         | `boolean`            | `isValid()`<br><br>Retorna si el valor ingresado en el campo de texto corresponde a una opción válida. |
| destroy         | `void`               | `destroy()`<br><br>Destructor. |

#### Variables CSS

| Variable                                            | Descripción |
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

#### Implementación

Configuración CSS:

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

Código CSS:

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

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Selectpicker/WUISelectpicker-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Selectpicker/WUISelectpicker-0.2.js"></script>
```

Código HTML:

```html
<div class="wui-selectpicker my-selectpicker">
	<select name="mySelectpicker">
		<option value=""></option>
		<option value="1">Opción 1</option>
		<option value="2">Opción 2</option>
		<option value="3">Opción 3</option>
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

Código JS:

```js
// Crear objeto
const output = document.body.querySelector(".my-output");
const selectpicker = new WUISelectpicker({
	selector: ".wui-selectpicker.my-selectpicker",
	value: "2",
	lang: "es",
	//texts: {},
	//openDirection: "down",
	//multiple: false,
	//separatorValue: ",",
	//separatorText: ", ",
	//filterable: true,
	//enabled: true,
	onOpen: (value) => {
		output.textContent = `Apertura - valor: ${value}`;
	},
	onChange: (value) => {
		output.textContent = `Cambio - valor: ${value}`;
	}
});

// Inicializar objeto
selectpicker.init();
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/WbxQBKX](https://codepen.io/wuijsproject/pen/WbxQBKX).

<a name="WUIDatepicker"></a>

### WUIDatepicker

Versión: `0.2`

Componente para la implementación de entradas de datos de tipo fecha basada en el elemento HTML `<input type="date">`.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/WUI/Datepicker/WUIDatepicker-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Datepicker/WUIDatepicker-0.2.css) |
| JS   | [src/WUI/Datepicker/WUIDatepicker-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Datepicker/WUIDatepicker-0.2.js) |

#### Constructor

| Tipo          | Descripción |
| ------------- | ----------- |
| WUIDatepicker | `WUIDatepicker([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad     | Tipo       | Valor predeterminado | Descripción |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-datepicker"`  | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| locales       | `string`   | `"en-US"`            | (get/set)<br><br>Código de configuración regional en formato `<ISO 639-1>-<ISO 3166-1 alpha-2>`. Por ejemplo: `es-CL`, `en-US`, `fr-FR`, etc. |
| value         | `string`   | `""`                 | (get/set)<br><br>Fecha seleccionada en formato `yyyy-mm-dd`. |
| min           | `string`   | `""`                 | (get/set)<br><br>Fecha mínima permitida en formato `yyyy-mm-dd`. |
| max           | `string`   | `""`                 | (get/set)<br><br>Fecha máxima permitida en formato `yyyy-mm-dd`. |
| monthsNames   | `array`    | `[]`                 | (get/set)<br><br>Nombres personalizados para los meses. Si se define, sobrescribe los nombres generados por `locales`. |
| weekDaysNames | `array`    | `[]`                 | (get/set)<br><br>Nombres personalizados para los días de la semana. Si se define, sobrescribe los nombres generados por `locales`. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Textos personalizados para los botones y mensajes del componente. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Dirección de apertura del calendario.<br><br>Valores:<br>• `"up"`, hacia arriba.<br>• `"down"`, hacia abajo. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Alineación horizontal del calendario respecto a la entrada de datos.<br><br>Valores:<br>• `"left"`, izquierda.<br>• `"center"`, centro.<br>• `"right"`, derecha. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Define si la entrada de datos está habilitada. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Función que se llama cuando se abre el calendario. La función recibe por parámetro el valor actual seleccionado. |
| onChange      | `function` | `null`               | (get/set)<br><br>Función que se llama cuando cambia el valor seleccionado. La función recibe por parámetro el nuevo valor seleccionado. |

#### Métodos

| Método          | Tipo retorno         | Descripción |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Retorna un arreglo de los elementos HTML que son parte de la visualización del valor. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Retorna el elemento HTML asociado a la entrada de datos base `<input type="date">`. |
| init            | `void`               | `init()`<br><br>Inicializa el objeto. |
| open         	  | `void`               | `open()`<br><br>Abre el calendario. |
| close           | `void`               | `close()`<br><br>Cierra el calendario. |
| toggle          | `void`               | `toggle()`<br><br>Alterna el estado de apertura del calendario. |
| toggleMode      | `void`               | `toggleMode()`<br><br>Alterna la vista entre días y meses. |
| prev            | `void`               | `prev()`<br><br>Muestra el periodo anterior (mes o año según la vista). |
| next            | `void`               | `next()`<br><br>Muestra el periodo siguiente (mes o año según la vista). |
| cancel          | `void`               | `cancel()`<br><br>Cancela la selección actual y revierte al valor anterior, cerrando el calendario. |
| accept          | `void`               | `accept()`<br><br>Acepta la selección actual y cierra el calendario. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Retorna si el calendario está abierto. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Retorna si el selector no tiene ninguna fecha seleccionada. |
| isValid         | `boolean`            | `isValid()`<br><br>Retorna si el valor ingresado corresponde a una fecha válida. |
| destroy         | `void`               | `destroy()`<br><br>Destructor. |

#### Variables CSS

| Variable                                         | Descripción |
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

#### Implementación

Configuración CSS:

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

Código CSS:

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

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Datepicker/WUIDatepicker-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Datepicker/WUIDatepicker-0.2.js"></script>
```

Código HTML:

```html
<div class="wui-datepicker my-datepicker">
	<input type="date" name="myDate">
</div>

<div class="my-output"></div>
```

Código JS:

```js
// Crear objeto
const output = document.body.querySelector(".my-output");
const datepicker = new WUIDatepicker({
	selector: ".wui-datepicker.my-datepicker",
	value: "2026-01-01",
	locales: "es-CL",
	//min: "",
	//max: "",
	//monthsNames: [],
	//weekDaysNames: [],
	//texts: {},
	//openDirection: "down",
	//boxAlign: "left",
	//enabled: true,
	onOpen: (value) => {
		output.textContent = `Apertura - valor: ${value}`;
	},
	onChange: (value) => {
		output.textContent = `Cambio - valor: ${value}`;
	}
});

// Inicializar objeto
datepicker.init();
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/QwEyyZN](https://codepen.io/wuijsproject/pen/QwEyyZN).

<a name="WUITimepicker"></a>

### WUITimepicker

Versión: `0.2`

Componente para la implementación de entradas de datos de tipo hora basada en el elemento HTML `<input type="time">`.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/WUI/Timepicker/WUITimepicker-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Timepicker/WUITimepicker-0.2.css) |
| JS   | [src/WUI/Timepicker/WUITimepicker-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Timepicker/WUITimepicker-0.2.js) |

#### Constructor

| Tipo          | Descripción |
| ------------- | ----------- |
| WUITimepicker | `WUITimepicker([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad     | Tipo       | Valor predeterminado | Descripción |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-timepicker"`  | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| value         | `string`   | `""`                 | (get/set)<br><br>Hora seleccionada en formato `hh:mm` (24 horas). |
| min           | `string`   | `"00:00"`            | (get/set)<br><br>Hora mínima permitida en formato `hh:mm`. |
| max           | `string`   | `"23:59"`            | (get/set)<br><br>Hora máxima permitida en formato `hh:mm`. |
| lang          | `string`   | `"en"`               | (get/set)<br><br>Idioma del componente.<br><br>Valores:<br>• `"de"`, Alemán.<br>• `"en"`, Inglés.<br>• `"es"`, Español. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Textos personalizados para los botones y mensajes del componente. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Dirección de apertura del selector de hora.<br><br>Valores:<br>• `"up"`, hacia arriba.<br>• `"down"`, hacia abajo. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Alineación horizontal del calendario respecto a la entrada de datos.<br><br>Valores:<br>• `"left"`, izquierda.<br>• `"center"`, centro.<br>• `"right"`, derecha. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Define si la entrada de datos está habilitada. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Función que se llama cuando se abre el selector de hora. La función recibe por parámetro el valor actual seleccionado. |
| onChange      | `function` | `null`               | (get/set)<br><br>Función que se llama cuando cambia el valor seleccionado. La función recibe por parámetro el nuevo valor seleccionado. |

#### Métodos

| Método          | Tipo retorno         | Descripción |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Retorna un arreglo de los elementos HTML que son parte de la visualización del valor. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Retorna el elemento HTML asociado a la entrada de datos base `<input type="time">`. |
| init            | `void`               | `init()`<br><br>Inicializa el objeto. |
| open            | `void`               | `open()`<br><br>Abre el selector. |
| close           | `void`               | `close()`<br><br>Cierra el selector. |
| toggle          | `void`               | `toggle()`<br><br>Alterna el estado de apertura del selector. |
| cancel          | `void`               | `cancel()`<br><br>Cancela la selección actual y revierte al valor anterior, cerrando el selector. |
| accept          | `void`               | `accept()`<br><br>Acepta la selección actual y cierra el selector. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Retorna si el selector está abierto. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Retorna si el selector no tiene ninguna hora seleccionada. |
| isValid         | `boolean`            | `isValid()`<br><br>Retorna si el valor ingresado corresponde a una hora válida. |
| destroy         | `void`               | `destroy()`<br><br>Destructor. |

#### Variables CSS

| Variable                                         | Descripción |
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

#### Implementación

Configuración CSS:

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
}
```

Código CSS:

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

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Timepicker/WUITimepicker-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Timepicker/WUITimepicker-0.2.js"></script>
```

Código HTML:

```html
<div class="wui-timepicker my-timepicker">
	<input type="time" name="myTime">
</div>

<div class="my-output"></div>
```

Código JS:

```js
// Crear objeto
const output = document.body.querySelector(".my-output");
const timepicker = new WUITimepicker({
	selector: ".wui-timepicker.my-timepicker",
	value: "10:30",
	//min: "00:00",
	//max: "23:59",
	lang: "es",
	//texts: {},
	//openDirection: "down",
	//boxAlign: "left",
	//enabled: true,
	onOpen: (value) => {
		output.textContent = `Apertura - valor: ${value}`;
	},
	onChange: (value) => {
		output.textContent = `Cambio - valor: ${value}`;
	}
});

// Inicializar objeto
timepicker.init();
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/azZdGrY](https://codepen.io/wuijsproject/pen/azZdGrY).

<a name="WUIColorpicker"></a>

### WUIColorpicker

Versión: `0.2`

Componente para la implementación de entradas de datos de tipo selector de color basada en el elemento HTML `<input type="color">`.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/WUI/Colorpicker/WUIColorpicker-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Colorpicker/WUIColorpicker-0.2.css) |
| JS   | [src/WUI/Colorpicker/WUIColorpicker-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Colorpicker/WUIColorpicker-0.2.js) |

#### Constructor

| Tipo           | Descripción |
| -------------- | ----------- |
| WUIColorpicker | `WUIColorpicker([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad     | Tipo       | Valor predeterminado | Descripción |
| ------------- | ---------- | -------------------- | ----------- |
| selector      | `string`   | `".wui-colorpicker"` | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| value         | `string`   | `""`                 | (get/set)<br><br>Color seleccionado en formato hexadecimal o nombre de color CSS. Retorna el valor en hexadecimal. |
| emptyValue    | `string`   | `"#000001"`          | (get/set)<br><br>Valor hexadecimal que representa un color vacío o no seleccionado. |
| lang          | `string`   | `"en"`               | (get/set)<br><br>Idioma del componente.<br><br>Valores:<br>• `"de"`, Alemán.<br>• `"en"`, Inglés.<br>• `"es"`, Español. |
| texts         | `object`   | `{}`                 | (get/set)<br><br>Textos personalizados para los botones y mensajes del componente. |
| openDirection | `string`   | `"down"`             | (get/set)<br><br>Dirección de apertura del selector de color.<br><br>Valores:<br>• `"up"`, hacia arriba.<br>• `"down"`, hacia abajo. |
| boxAlign      | `string`   | `"left"`             | (get/set)<br><br>Alineación horizontal del calendario respecto a la entrada de datos.<br><br>Valores:<br>• `"left"`, izquierda.<br>• `"center"`, centro.<br>• `"right"`, derecha. |
| enabled       | `boolean`  | `true`               | (get/set)<br><br>Define si la entrada de datos está habilitada. |
| onOpen        | `function` | `null`               | (get/set)<br><br>Función que se llama cuando se abre el selector de color. La función recibe por parámetro el valor actual seleccionado. |
| onChange      | `function` | `null`               | (get/set)<br><br>Función que se llama cuando cambia el valor seleccionado. La función recibe por parámetro el nuevo valor seleccionado. |

#### Métodos

| Método          | Tipo retorno         | Descripción |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLElement`        | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Retorna un arreglo de los elementos HTML que son parte de la visualización del valor. |
| getInput        | `HTMLElement`        | `getInput()`<br><br>Retorna el elemento HTML asociado a la entrada de datos base `<input type="color">`. |
| init            | `void`               | `init()`<br><br>Inicializa el objeto. |
| open            | `void`               | `open()`<br><br>Abre el selector de color. |
| close           | `void`               | `close()`<br><br>Cierra el selector de color. |
| toggle          | `void`               | `toggle()`<br><br>Alterna el estado de apertura del selector de color. |
| selectMode      | `void`               | `selectMode(mode)`<br><br>Parámetros:<br>**• mode:** `string`.<br><br>Selecciona el modo de visualización (`"grid"` o `"list"`). |
| cancel          | `void`               | `cancel()`<br><br>Cancela la selección actual y revierte al valor anterior, cerrando el selector. |
| accept          | `void`               | `accept()`<br><br>Acepta la selección actual y cierra el selector. |
| isOpen          | `boolean`            | `isOpen()`<br><br>Retorna si el selector está abierto. |
| isEmpty         | `boolean`            | `isEmpty()`<br><br>Retorna si el selector no tiene ningún color seleccionado. |
| isValid         | `boolean`            | `isValid()`<br><br>Retorna si el valor corresponde a un color válido. |
| destroy         | `void`               | `destroy()`<br><br>Destructor. |

#### Variables CSS

| Variable                                            | Descripción |
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

#### Implementación

Código CSS:

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

Código HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Colorpicker/WUIColorpicker-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Colorpicker/WUIColorpicker-0.2.js"></script>
```

Código HTML:

```html
<div class="wui-colorpicker my-colorpicker">
	<input type="color" name="myColor">
</div>

<div class="my-output"></div>
```

Código JS:

```js
// Crear objeto
const output = document.body.querySelector(".my-output");
const colorpicker = new WUIColorpicker({
	selector: ".wui-colorpicker.my-colorpicker",
	value: "#1e90ff",
	//emptyValue: "#000001",
	lang: "es",
	//texts: {},
	//openDirection: "down",
	//boxAlign: "left",
	//enabled: true,
	onOpen: (value) => {
		output.textContent = `Apertura - valor: ${value}`;
	},
	onChange: (value) => {
		output.textContent = `Cambio - valor: ${value}`;
	}
});

// Inicializar objeto
colorpicker.init();
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/bNeeobP](https://codepen.io/wuijsproject/pen/bNeeobP).

<a name="WUICheckbox"></a>

### WUICheckbox

Versión: `0.2`

Componente para la implementación de entradas de datos de tipo casilla de verificación basada en el elemento HTML `<input type="checkbox">`.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/WUI/Checkbox/WUICheckbox-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Checkbox/WUICheckbox-0.2.css) |
| JS   | [src/WUI/Checkbox/WUICheckbox-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Checkbox/WUICheckbox-0.2.js) |

#### Constructor

| Tipo        | Descripción |
| ----------- | ----------- |
| WUICheckbox | `WUICheckbox([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad | Tipo       | Valor predeterminado | Descripción |
| --------- | ---------- | -------------------- | ----------- |
| selector  | `string`   | `".wui-checkbox"`    | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| value     | `string`   | `"1"`                | (get/set)<br><br>Valor que tomará la casilla de verificación cuando esté marcado. |
| checked   | `boolean`  | `false`              | (get/set)<br><br>Define si la casilla de verificación está marcada. |
| enabled   | `boolean`  | `true`               | (get/set)<br><br>Define si la casilla de verificación está habilitada. |
| onChange  | `function` | `null`               | (get/set)<br><br>Función que se llama cuando el estado de la casilla de verificación cambia. La función recibe como parámetros el estado booleano `checked` y el valor de la casilla de verificación. |

#### Métodos

| Método          | Tipo retorno         | Descripción |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLDivElement`     | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Retorna un arreglo de los elementos HTML que son parte de la visualización del valor. |
| getInput        | `HTMLInputElement`   | `getInput()`<br><br>Retorna el elemento HTML asociado a la entrada de datos base `<input type="checkbox">`. |
| init            | `void`               | `init()`<br><br>Inicializa el objeto. |
| toggle          | `void`               | `toggle()`<br><br>Alterna el estado marcado/desmarcado de la casilla de verificación. |
| destroy         | `void`               | `destroy()`<br><br>Destructor. |

#### Variables CSS

| Variable                                      | Descripción |
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

#### Implementación

Configuración CSS:

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

Código CSS:

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

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Checkbox/WUICheckbox-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Checkbox/WUICheckbox-0.2.js"></script>
```

Código HTML:

```html
<div class="wui-checkbox my-checkbox">
	<input type="checkbox" name="myCheckbox" value="1">
</div>

<div class="my-output"></div>
```

Código JS:

```js
// Crear objeto
const output = document.body.querySelector(".my-output");
const checkbox = new WUICheckbox({
	selector: ".wui-checkbox.my-checkbox",
	value: "1",
	checked: true,
	//enabled: true,
	onChange: (value, checked) => {
		output.textContent = `Cambio - valor: ${value}, marcada: ${checked}`;
	}
});

// Inicializar objeto
checkbox.init();
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/qENNwPa](https://codepen.io/wuijsproject/pen/qENNwPa).

<a name="WUIIntensity"></a>

### WUIIntensity

Versión: `0.1`

Componente para la implementación de entradas de datos de tipo selector de intensidad de 4 niveles: nada, bajo, medio y alto basada en el elemento HTML `<input type="range">`.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/WUI/Intensity/WUIIntensity-0.1.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Intensity/WUIIntensity-0.1.css) |
| JS   | [src/WUI/Intensity/WUIIntensity-0.1.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Intensity/WUIIntensity-0.1.js) |

#### Constructor

| Tipo         | Descripción |
| ------------ | ----------- |
| WUIIntensity | `WUIIntensity([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad | Tipo       | Valor predeterminado | Descripción |
| --------- | ---------- | -------------------- | ----------- |
| selector  | `string`   | `".wui-intensity"`   | (get/set)<br><br>Selector CSS que define el elemento HTML contenedor del objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| value     | `number`   | `0`                  | (get/set)<br><br>Valor de la intensidad (0: nada, 1: bajo, 2: medio, 3: alto). Acepta también las cadenas `"none"`, `"low"`, `"half"`, `"high"`. |
| enabled   | `boolean`  | `true`               | (get/set)<br><br>Define si el selector está habilitado. |
| onChange  | `function` | `null`               | (get/set)<br><br>Función que se llama cuando el valor cambia. La función recibe como parámetros el valor entero (0-3) y la cadena asociada. |

#### Métodos

| Método          | Tipo retorno         | Descripción |
| --------------- | -------------------- | ----------- |
| getElement      | `HTMLDivElement`     | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| getViewElements | `Array<HTMLElement>` | `getViewElements()`<br><br>Retorna un arreglo de los elementos HTML que son parte de la visualización del valor. |
| getInput        | `HTMLInputElement`   | `getInput()`<br><br>Retorna el elemento HTML asociado a la entrada de datos base `<input type="range">`. |
| init            | `void`               | `init()`<br><br>Inicializa el objeto. |
| destroy         | `void`               | `destroy()`<br><br>Destructor. |

#### Variables CSS

| Variable                          | Descripción |
| --------------------------------- | ----------- |
| `--wui-intensity-height`          |             |
| `--wui-intensity-borderradius`    |             |
| `--wui-intensity-bordercolor-out` |             |
| `--wui-intensity-bgcolor-none`    |             |
| `--wui-intensity-bgcolor-low`     |             |
| `--wui-intensity-bgcolor-half`    |             |
| `--wui-intensity-bgcolor-high`    |             |

#### Implementación

Configuración CSS:

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

Código CSS:

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

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Intensity/WUIIntensity-0.1.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Intensity/WUIIntensity-0.1.js"></script>
```

Código HTML:

```html
<div class="wui-intensity my-intensity">
	<input type="range" name="myIntensity" value="0" min="0" max="3" step="1">
</div>

<div class="my-output"></div>
```

Código JS:

```js
// Crear objeto
const output = document.body.querySelector(".my-output");
const intensity = new WUIIntensity({
	selector: ".wui-intensity.my-intensity",
	value: 1,
	//enabled: true,
	onChange: (event, value) => {
		output.textContent = `Cambio - valor: ${value}`;
	}
});

// Inicializar objeto
intensity.init();
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLDivElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/GgqNpxJ](https://codepen.io/wuijsproject/pen/GgqNpxJ).

<a name="WUIButton"></a>

### WUIButton

Versión: `0.2`

Componente para la implementación de botones.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/WUI/Button/WUIButton-0.2.css](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Button/WUIButton-0.2.css) |
| JS   | [src/WUI/Button/WUIButton-0.2.js](https://github.com/wuijsproject/wuijs-lib/blob/main/src/WUI/Button/WUIButton-0.2.js) |

#### Constructor

| Tipo      | Descripción |
| --------- | ----------- |
| WUIButton | `WUIButton([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad    | Tipo       | Valor predeterminado | Descripción |
| ------------ | ---------- | -------------------- | ----------- |
| selector     | `string`   | `".wui-button"`      | (get/set)<br><br>Selector CSS que define el elemento HTML de tipo `HTMLButtonElement` que serán convertido en el objeto. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| text         | `string`   | `""`                 | (get/set)<br><br>Texto o contenido HTML del elemento. |
| selectable   | `boolean`  | `true`               | (get/set)<br><br>Define si el botón es seleccionable. |
| locked       | `boolean`  | `false`              | (get/set)<br><br>Define si el botón está bloqueado. |
| enabled      | `boolean`  | `true`               | (get/set)<br><br>Define si el botón está habilitado. |
| onClick      | `function` | `null`               | (get/set)<br><br>Función que se llama cuando el botón es presionado. La función no recibe parámetros. |
| onDblClick   | `function` | `null`               | (get/set)<br><br>Función que se llama cuando el botón es presionado dos veces. La función no recibe parámetros. |

#### Métodos

| Método       | Tipo retorno  | Descripción |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto. |
| init         | `void`        | `init()`<br><br>Inicializa el objeto. |
| focus        | `void`        | `focus()`<br><br>Da foco al botón. |
| select       | `select`      | `select()`<br><br>Selecciona el botón. |
| unselect     | `unselect`    | `unselect()`<br><br>Deselecciona el botón. |
| isSelected   | `isSelected`  | `isSelected()`<br><br>Retorna si el botón está seleccionado. |

#### Variables CSS

| Variable                                    | Descripción |
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

#### Implementación

Configuración CSS:

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

Código CSS:

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

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Icon/WUIIcon-0.1.css">
<link type="text/css" rel="stylesheet" href="https://wuijs.dev/Libraries/WUI/Button/WUIButton-0.2.css">
<script type="text/javascript" src="https://wuijs.dev/Libraries/WUI/Button/WUIButton-0.2.js"></script>
```

Código HTML:

```html
<button class="wui-button my-button button1">botón 1</button>
<button class="wui-button my-button button2 submit">
	<div class="wui-icon float-left mappointer-fill"></div>
	<span>botón 2</span>
</button>

<div class="my-output"></div>
```

Código JS:

```js
// Crear objetos
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

// Inicializar objetos
button1.init();
button2.init();
```

> [!IMPORTANT]
> Si el selector define un elemento que no es de tipo `HTMLButtonElement`, el objeto no se inicializará.

> [!TIP]
> Puede revisar este ejemplo funcional en CodePen en el enlace: [https://codepen.io/wuijsproject/pen/xbOwNzN](https://codepen.io/wuijsproject/pen/xbOwNzN).

<a name="examples"></a>

## Ejemplos

Los ejemplos listados en esta sección, son detallados en la sección "Implementavión" de cada clase.

| Clase                               | Enlace |
| ----------------------------------- | ------ |
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
