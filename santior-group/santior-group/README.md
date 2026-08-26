# Santior Group LLC — sitio en Next.js + React + Framer Motion

Conversión del sitio original (un solo archivo HTML) a una app Next.js
(App Router) con animaciones hechas con Framer Motion. Pensado para
desplegarse en Vercel con un solo clic.

## Qué se animó

- **Header**: menú móvil que se despliega con altura animada, subrayado
  del enlace activo que se desliza entre páginas (`layoutId`).
- **Transición entre páginas**: cada página entra con un fundido + leve
  desplazamiento (`app/template.jsx`).
- **Hero**: entrada escalonada del texto y la imagen.
- **Revelado al hacer scroll**: tarjetas, cuadrículas y secciones aparecen
  con fundido al entrar en el viewport (`components/Reveal.jsx`), con
  animaciones escalonadas (`staggerContainer` / `staggerItem`) en listas.
- **Micro-interacciones**: elevación de tarjetas y botones al pasar el
  mouse, zoom suave de imágenes, acordeón animado en la página Legal.
- **Accesibilidad**: `prefers-reduced-motion` se respeta globalmente
  (ver `app/globals.css`).

## Requisitos

- Node.js 18.18 o superior.

## Uso local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Formulario de contacto

El formulario usa Web3Forms (mismo servicio que el sitio original).
Reemplaza el valor de acceso en:

- `app/contacto/page.jsx` → constante `WEB3FORMS_ACCESS_KEY`

por tu clave real de https://web3forms.com

## Desplegar en Vercel

**Opción A — con GitHub (recomendada):**
1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a https://vercel.com/new e importa el repositorio.
3. Vercel detecta Next.js automáticamente — no hace falta configurar nada.
4. Clic en "Deploy".

**Opción B — con la CLI de Vercel:**
```bash
npm i -g vercel
vercel
```
Sigue las instrucciones en pantalla (crea el proyecto y lo despliega).

## Estructura

```
app/                  rutas (App Router): inicio, nosotros, consultoria,
                       eventos, proceso, contacto, legal
components/           Header, Footer, ServicePage, Reveal, PageTransition
context/              LanguageContext (toggle ES/EN persistido en la sesión)
data/translations.js  todo el copy en español e inglés
```

## Por qué React/Next.js en vez de Angular

Next.js es el framework de Vercel (misma empresa), así que el despliegue
es literalmente "conectar el repo y desplegar" sin configuración extra.
Angular también puede desplegarse en Vercel, pero requiere ajustar el
`vercel.json`/`angular.json` a mano para servir la salida SSR o estática;
Next.js viene reconocido de fábrica.
