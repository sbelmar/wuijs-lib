# Registro de Cambio

## [v0.1.0] - 2024-05-01

Características:

1. Versión de lanzamiento.

## [v0.2.0] - 2025-12-01

Características:

1. Inclusión de [Documentación](./LEEME.md).
2. Se agregó clase WUIMenubar versión 0.1.
3. Se agregó clase WUIIntensity versión 0.1.
4. Actualización versión clase WUICookie a 0.2.
	- Se agregó soporte para valores privados.
5. Actualización versión clase WUIBody a 0.2.
	- Se agregó soporte para valores privados.
6. Actualización versión clase WUILanguage a 0.2.
	- Se cambió el valor por defecto de la propiedad `lang` a `"en"`.
	- Se agregó soporte para valores privados.
	- Se agregó la propiedad `mode`, para dar soporte a archivo de lenguaje en formato JS y JSON.
	- Se agregó el método `refresh()`, que permite actualizar el contenido de un elemento HTML específico.
	- Se eliminó la constante global `languajes` y se reemplazó por una definición variable, opcional y externa a la clase, que es asignada mediante la propiedad `onLoad()` (ver ejemplo de implementación en [Documentación](./LEEME.md?#wuiLanguage)).
7. Actualización versión clase WUIScrolly a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó el alias `.fadein-top` a la clase de estilo `fadein-up`.
	- Se agregó la propiedad `direction`.
	- Se agregaron los argumentos `sceneIndex`, `sceneStep` y `sceneProgress` a la propuedad `onMove()`.
8. Actualización versión clase WUILoader a 0.2.
	- Se agregó soporte para valores privados.
	- Se corrigió error en el método `init()`.
9. Actualización versión clase WUIModal a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó el método `destroy()`.
	- Se corrigió error en el evento de arrastre al maximizar y cerrar un modal con estilo página usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
10. Actualización versión clase WUISlider a 0.2.
	- Se agregó soporte para valores privados.
	- Se corrigió error en el evento de arrastre al desplazar una diapositiva usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
	- Se corrigió error en el método `load()`.
11. Actualización versión clase WUIList a 0.2.
	- Se agregó soporte para paginado.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-list-shadowcolor`.
	- Se corrigió error en el evento de arrastre al aperturar y cerrar la botonoera de cada fila usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
12. Actualización versión clase WUITable a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-table-shadowcolor`.
13. Actualización versión clase WUIForm a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó la variable CSS `--wui-form-message-shadowcolor`.
14. Actualización versión clase WUIFormat a 0.2.
	- Se agregó soporte para `"Windows Phone"` en los métodos `getOS()` y `getMobileOS()`.
	- Se agregó manejo de error en el método `wuiToString()`.
15. Actualización versión clase WUISelectpicker a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-selectpicker-box-shadowcolor`.
	- Se corrigió error en el método privado `#addHTMLOption()`.
16. Actualización versión clase WUIDatepicker a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-datepicker-box-shadowcolor`.
17. Actualización versión clase WUITimepicker a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-timepicker-box-shadowcolor`.
18. Actualización versión clase WUIColorpicker a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó soporte para formato CSS claro/oscuro.
	- Se agregó el método `destroy()`.
	- Se agregó la variable CSS `--wui-colorpicker-box-shadowcolor`.
19. Actualización versión clase WUICheckbox a 0.2.
	- Se agregó soporte para valores privados.
	- Se corrigió error en el evento de arrastre al seleccionar y deseleccionar la caja de verificación usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
20. Actualización versión clase WUIButton a 0.2.
	- Se agregó soporte para valores privados.
	- Se agregó propiedad `onDblClick`.