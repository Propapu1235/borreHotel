# Documentación del Proyecto: Sistema Web para Paseador de Perros

## 1. Descripción General
Aplicación web orientada a la captación de clientes y gestión de servicios para un paseador de perros. Permite a los usuarios registrarse, validar sus datos para el paseo de prueba, agendar y almacenar información de manera automatizada, y cuenta con un **módulo de rastreo en tiempo real** para que el dueño pueda seguir el recorrido, el camino trazado y la distancia de la mascota durante el paseo.

---

## 2. Requisitos Funcionales (RF)
*Lo que el sistema DEBE hacer:*

*   **RF-01: Formulario de Registro de Cliente y Mascota**
    *   La página web debe contar con un formulario interactivo que solicite:
        *   Datos del dueño (Nombre, Teléfono/WhatsApp, Domicilio).
        *   Datos del perro (Nombre, Raza).
*   **RF-02: Validación contra Registros Duplicados**
    *   El sistema debe validar que el número de teléfono o los datos del domicilio/perro no se hayan registrado previamente para garantizar que un mismo usuario no abuse múltiples veces del "paseo de prueba".
*   **RF-03: Envío Directo a WhatsApp**
    *   Una vez validado el registro, el sistema debe generar automáticamente un mensaje estructurado con los datos del usuario y enviarlo mediante un enlace directo a la API de WhatsApp del paseador.
*   **RF-04: Almacenamiento Automático (Agenda / Excel)**
    *   Los datos del formulario validado deben guardarse de forma automatizada (por ejemplo, conectando el formulario a Google Sheets o una base de datos ligera) para que el paseador mantenga un registro ordenado de sus clientes y paseos de prueba.
*   **RF-05: Módulo de Rastreo en Tiempo Real (GPS)**
    *   La plataforma debe incluir un apartado donde el cliente, mediante un enlace o inicio de sesión temporal, pueda visualizar en un mapa interactivo:
        *   La ubicación actual en tiempo real del paseador/perro.
        *   El camino o ruta ya recorrida durante el paseo.
        *   La distancia total recorrida calculada en metros o kilómetros.
*   **RF-06: Sección Informativa (Landing Page)**
    *   La web debe mostrar claramente los beneficios del servicio, la zona de cobertura, tarifas (después del paseo de prueba) y opiniones o confianza del paseador.

---

## 3. Requisitos No Funcionales (RNF)
*Cómo debe comportarse el sistema (calidad, rendimiento, tecnología):*

*   **RNF-01: Diseño Responsivo (Mobile-First)**
    *   Como la mayoría de los usuarios y el propio paseador (en movimiento) entrarán desde su celular, la interfaz debe adaptarse perfectamente a pantallas de teléfonos, tablets y computadoras.
*   **RNF-02: Rendimiento y Velocidad**
    *   La página principal y el mapa de rastreo deben cargar de manera fluida, actualizando la posición GPS sin ralentizar el navegador del usuario.
*   **RNF-03: Hosting y Disponibilidad**
    *   La plataforma debe estar alojada en la nube (ej. Vercel) garantizando una disponibilidad del 99% y acceso público mediante un enlace web directo.
*   **RNF-04: Usabilidad e Intuitividad**
    *   El formulario de registro no debe requerir más de 3 campos obligatorios en su primera vista para maximizar la conversión, y el mapa de rastreo debe ser limpio y fácil de interpretar a primera vista.