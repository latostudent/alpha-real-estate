const InmuebleArray = [
    {
        id: 1001,
        tipo: "casa",
        direccion: "Av Prolongación Javier Prado",
        precio: "150000",
        titulo: "Amplia casa en Ate",
        habitaciones: "4",
        baños: "5",
        area: "280",
        descripcion: `<p>En venta departamento de 120 m2 en exclusivo edificio en urbanizaci&oacute;n Monterrico Norte - San Borja. No paga alcabala.<br />&Aacute;reas comunes como piscina y zona de bbq, lobby con seguridad permanente. Pisos de bamboo en &aacute;rea social e &iacute;ntima, ba&ntilde;os con revestimientos en porcelanato.</p>
        <p>Amplia Sala &ndash; comedor con balc&oacute;n y vista externa.<br />Cocina cerrada con tablero de granito, muebles altos y bajos. Incluye campana extractora, cocina y horno.<br />&Aacute;rea de Servicio completa con cuarto y ba&ntilde;o de servicio.<br />Ba&ntilde;o de visitas en el pasillo para mayor privacidad.<br />Dormitorio principal con ba&ntilde;o incorporado y amplio walking closet.<br />Dormitorios secundarios con closet comparten ba&ntilde;o completo ubicado en el pasillo.<br />Acogedora Sala de estar a lado de los dormitorios.</p>
        <p>El precio incluye 2 estacionamientos y 1 deposito.</p>`,
        mascotas: "no",
        piso: "1",
        distrito: "Ate",
        telefono: "1456165161",
        imagenDestacada: "1001-1.jpg"
    },
    {
        id: 1002,
        tipo: "departamento",
        direccion: "Av Carlos izaguirre",
        precio: "25000",
        titulo: "Departamento de lujo",
        habitaciones: "3",
        baños: "2",
        area: "125",
        descripcion: `<p>En venta departamento de 120 m2 en exclusivo edificio en urbanizaci&oacute;n Monterrico Norte - San Borja. No paga alcabala.<br />&Aacute;reas comunes como piscina y zona de bbq, lobby con seguridad permanente. Pisos de bamboo en &aacute;rea social e &iacute;ntima, ba&ntilde;os con revestimientos en porcelanato.</p>
        <p>Amplia Sala &ndash; comedor con balc&oacute;n y vista externa.<br />Cocina cerrada con tablero de granito, muebles altos y bajos. Incluye campana extractora, cocina y horno.<br />&Aacute;rea de Servicio completa con cuarto y ba&ntilde;o de servicio.<br />Ba&ntilde;o de visitas en el pasillo para mayor privacidad.<br />Dormitorio principal con ba&ntilde;o incorporado y amplio walking closet.<br />Dormitorios secundarios con closet comparten ba&ntilde;o completo ubicado en el pasillo.<br />Acogedora Sala de estar a lado de los dormitorios.</p>
        <p>El precio incluye 2 estacionamientos y 1 deposito.</p>`,
        mascotas: "si",
        piso: "7",
        distrito: "Los Olivos",
        telefono: "925877884",
        imagenDestacada: "1002-1.jpg"
    },
    {
        id: 1003,
        tipo: "departamento",
        direccion: "Av Las Palmeras",
        precio: "125000",
        titulo: "Departamento duplex",
        habitaciones: "3",
        baños: "2",
        area: "125",
        descripcion: `<p>En venta departamento de 120 m2 en exclusivo edificio en urbanizaci&oacute;n Monterrico Norte - San Borja. No paga alcabala.<br />&Aacute;reas comunes como piscina y zona de bbq, lobby con seguridad permanente. Pisos de bamboo en &aacute;rea social e &iacute;ntima, ba&ntilde;os con revestimientos en porcelanato.</p>
        <p>Amplia Sala &ndash; comedor con balc&oacute;n y vista externa.<br />Cocina cerrada con tablero de granito, muebles altos y bajos. Incluye campana extractora, cocina y horno.<br />&Aacute;rea de Servicio completa con cuarto y ba&ntilde;o de servicio.<br />Ba&ntilde;o de visitas en el pasillo para mayor privacidad.<br />Dormitorio principal con ba&ntilde;o incorporado y amplio walking closet.<br />Dormitorios secundarios con closet comparten ba&ntilde;o completo ubicado en el pasillo.<br />Acogedora Sala de estar a lado de los dormitorios.</p>
        <p>El precio incluye 2 estacionamientos y 1 deposito.</p>`,
        mascotas: "si",
        piso: "7",
        distrito: "Los Olivos",
        telefono: "925877884",
        imagenDestacada: "1003-1.jpg"
    },
    {
        id: 1004,
        tipo: "departamento",
        direccion: "Av Universitaria",
        precio: "95000",
        titulo: "Depa a estrenar",
        habitaciones: "3",
        baños: "2",
        area: "125",
        descripcion: `<p>En venta departamento de 120 m2 en exclusivo edificio en urbanizaci&oacute;n Monterrico Norte - San Borja. No paga alcabala.<br />&Aacute;reas comunes como piscina y zona de bbq, lobby con seguridad permanente. Pisos de bamboo en &aacute;rea social e &iacute;ntima, ba&ntilde;os con revestimientos en porcelanato.</p>
        <p>Amplia Sala &ndash; comedor con balc&oacute;n y vista externa.<br />Cocina cerrada con tablero de granito, muebles altos y bajos. Incluye campana extractora, cocina y horno.<br />&Aacute;rea de Servicio completa con cuarto y ba&ntilde;o de servicio.<br />Ba&ntilde;o de visitas en el pasillo para mayor privacidad.<br />Dormitorio principal con ba&ntilde;o incorporado y amplio walking closet.<br />Dormitorios secundarios con closet comparten ba&ntilde;o completo ubicado en el pasillo.<br />Acogedora Sala de estar a lado de los dormitorios.</p>
        <p>El precio incluye 2 estacionamientos y 1 deposito.</p>`,
        mascotas: "si",
        piso: "7",
        distrito: "Los Olivos",
        telefono: "925877884",
        imagenDestacada: "1004-1.jpg"
    },
    {
        id: 1005,
        tipo: "departamento",
        direccion: "Av Elmer Faucett",
        precio: "115000",
        titulo: "Mini-departamento en El Callao",
        habitaciones: "3",
        baños: "2",
        area: "125",
        descripcion: `<p>En venta departamento de 120 m2 en exclusivo edificio en urbanizaci&oacute;n Monterrico Norte - San Borja. No paga alcabala.<br />&Aacute;reas comunes como piscina y zona de bbq, lobby con seguridad permanente. Pisos de bamboo en &aacute;rea social e &iacute;ntima, ba&ntilde;os con revestimientos en porcelanato.</p>
        <p>Amplia Sala &ndash; comedor con balc&oacute;n y vista externa.<br />Cocina cerrada con tablero de granito, muebles altos y bajos. Incluye campana extractora, cocina y horno.<br />&Aacute;rea de Servicio completa con cuarto y ba&ntilde;o de servicio.<br />Ba&ntilde;o de visitas en el pasillo para mayor privacidad.<br />Dormitorio principal con ba&ntilde;o incorporado y amplio walking closet.<br />Dormitorios secundarios con closet comparten ba&ntilde;o completo ubicado en el pasillo.<br />Acogedora Sala de estar a lado de los dormitorios.</p>
        <p>El precio incluye 2 estacionamientos y 1 deposito.</p>`,
        mascotas: "si",
        piso: "7",
        distrito: "Los Olivos",
        telefono: "925877884",
        imagenDestacada: "1005-1.jpg"
    },
    {
        id: 1006,
        tipo: "departamento",
        direccion: "Av Ricardo Palma",
        precio: "180000",
        titulo: "Departamento con terraza",
        habitaciones: "2",
        baños: "1",
        area: "105",
        descripcion: `<p>En venta departamento de 120 m2 en exclusivo edificio en urbanizaci&oacute;n Monterrico Norte - San Borja. No paga alcabala.<br />&Aacute;reas comunes como piscina y zona de bbq, lobby con seguridad permanente. Pisos de bamboo en &aacute;rea social e &iacute;ntima, ba&ntilde;os con revestimientos en porcelanato.</p>
        <p>Amplia Sala &ndash; comedor con balc&oacute;n y vista externa.<br />Cocina cerrada con tablero de granito, muebles altos y bajos. Incluye campana extractora, cocina y horno.<br />&Aacute;rea de Servicio completa con cuarto y ba&ntilde;o de servicio.<br />Ba&ntilde;o de visitas en el pasillo para mayor privacidad.<br />Dormitorio principal con ba&ntilde;o incorporado y amplio walking closet.<br />Dormitorios secundarios con closet comparten ba&ntilde;o completo ubicado en el pasillo.<br />Acogedora Sala de estar a lado de los dormitorios.</p>
        <p>El precio incluye 2 estacionamientos y 1 deposito.</p>`,
        mascotas: "si",
        piso: "7",
        distrito: "Los Olivos",
        telefono: "925877884",
        imagenDestacada: "1006-1.jpg"
    }

]
