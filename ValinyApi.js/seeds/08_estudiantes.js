exports.seed = function(knex) {
    return knex('Estudiantes').del()
      .then(function () {
        return knex('Estudiantes').insert([
          { ID_Estudiante: 1029290082, P_Nombre: 'MARTIN', S_Nombre: 'DAVID', T_Nombre: null, P_Apellido: 'AVILA', S_Apellido: 'DURAN', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1023005795, P_Nombre: 'JISEY', S_Nombre: 'GABRIELA', T_Nombre: null, P_Apellido: 'BETANCOURT', S_Apellido: 'GAVIRIA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1029289410, P_Nombre: 'ERICK', S_Nombre: 'SANTIAGO', T_Nombre: null, P_Apellido: 'CARDENAS', S_Apellido: 'VELASQUEZ', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1140924815, P_Nombre: 'SARA', S_Nombre: 'SOFIA', T_Nombre: null, P_Apellido: 'CASTILLO', S_Apellido: 'ORDOÑEZ', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 2},
          { ID_Estudiante: 1029289068, P_Nombre: 'MARIA', S_Nombre: 'ISABEL', T_Nombre: null, P_Apellido: 'CONTRERAS', S_Apellido: 'HERRERA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1111201134, P_Nombre: 'HEIDI', S_Nombre: 'YULIANA', T_Nombre: null, P_Apellido: 'CRUZ', S_Apellido: 'MUÑOZ', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1018471323, P_Nombre: 'DAVID', S_Nombre: 'SANTIAGO', T_Nombre: null, P_Apellido: 'DONCEL', S_Apellido: 'PEREZ', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1025549947, P_Nombre: 'MAICOL', S_Nombre: 'JHOVANY', T_Nombre: null, P_Apellido: 'DUARTE', S_Apellido: 'VEGA', Genero: 1, T_Documento: 4, Curso: 22, Administradores: 1000695329, Registro: 0},
          { ID_Estudiante: 1140925257, P_Nombre: 'WILSON', S_Nombre: 'EDUARDO', T_Nombre: null, P_Apellido: 'FLECHAS', S_Apellido: 'GONZALEZ', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1029287557, P_Nombre: 'LUCIANA', S_Nombre: 'VALENTINA', T_Nombre: null, P_Apellido: 'GOMEZ', S_Apellido: 'YARA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1023000061, P_Nombre: 'DANA', S_Nombre: 'VALERIA', T_Nombre: null, P_Apellido: 'GONZALEZ', S_Apellido: 'AGRESOTT', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1022999355, P_Nombre: 'SARA', S_Nombre: 'SOFIA', T_Nombre: null, P_Apellido: 'GONZALEZ', S_Apellido: 'BERNAL', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 3},
          { ID_Estudiante: 1023001785, P_Nombre: 'SAMUEL', S_Nombre: 'ALEJANDRO', T_Nombre: null, P_Apellido: 'GUERRERO', S_Apellido: 'GUZMAN', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 4},
          { ID_Estudiante: 1023000512, P_Nombre: 'ANGEL', S_Nombre: 'SEBASTIAN', T_Nombre: null, P_Apellido: 'GUERRERO', S_Apellido: 'RAMOS', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1022976607, P_Nombre: 'JOHN', S_Nombre: 'FREDY', T_Nombre: null, P_Apellido: 'HERNANDEZ', S_Apellido: 'ARGUMEDO', Genero: 1, T_Documento: 4, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1028789872, P_Nombre: 'JUAN', S_Nombre: 'SEBASTIAN', T_Nombre: null, P_Apellido: 'HERNANDEZ', S_Apellido: 'JOJOA', Genero: 1, T_Documento: 4, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1022997745, P_Nombre: 'DILAN', S_Nombre: 'ANDREY', T_Nombre: null, P_Apellido: 'MACETO', S_Apellido: 'RODRIGUEZ', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1032186562, P_Nombre: 'LUIGUI', S_Nombre: 'MATIAS', T_Nombre: null, P_Apellido: 'MACHADO', S_Apellido: 'ROVIRA', Genero: 1, T_Documento: 4, Curso: 22, Administradores: 1000695329, Registro: 0},
          { ID_Estudiante: 1022998766, P_Nombre: 'FABIAN', S_Nombre: 'STID', T_Nombre: null, P_Apellido: 'MEJIA', S_Apellido: 'MADRIGAL', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 0},
          { ID_Estudiante: 1025149988, P_Nombre: 'SHARITH', S_Nombre: null, T_Nombre: null, P_Apellido: 'MENDOZA', S_Apellido: 'SARMIENTO', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1023006773, P_Nombre: 'LAURA', S_Nombre: 'MARIANA', T_Nombre: null, P_Apellido: 'NIÑO', S_Apellido: 'CAMARGO', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 2},
          { ID_Estudiante: 1023002065, P_Nombre: 'MARY', S_Nombre: 'FERNANDA', T_Nombre: null, P_Apellido: 'NIVIA', S_Apellido: 'ALVAREZ', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1029288196, P_Nombre: 'WILMER', S_Nombre: 'SANTIAGO', T_Nombre: null, P_Apellido: 'NOVOA', S_Apellido: 'HERRERA', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1019101292, P_Nombre: 'SANTIAGO', S_Nombre: null, T_Nombre: null, P_Apellido: 'OSPINO', S_Apellido: 'ALTAMIRANDA', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 0},
          { ID_Estudiante: 1031151048, P_Nombre: 'JHADE', S_Nombre: 'VALENTINA', T_Nombre: null, P_Apellido: 'PATIÑO', S_Apellido: 'SILVA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1028843462, P_Nombre: 'SARA', S_Nombre: 'VALENTINA', T_Nombre: null, P_Apellido: 'PEDRAZA', S_Apellido: 'DAZA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 0},
          { ID_Estudiante: 1140925402, P_Nombre: 'ZARAY', S_Nombre: 'JULIANA', T_Nombre: null, P_Apellido: 'REYES', S_Apellido: 'ACOSTA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1022980149, P_Nombre: 'MERCY', S_Nombre: 'TATIANA', T_Nombre: null, P_Apellido: 'RODRIGUEZ', S_Apellido: 'GONZALEZ', Genero: 2, T_Documento: 4, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1022998575, P_Nombre: 'EMILY', S_Nombre: 'SHARICK', T_Nombre: null, P_Apellido: 'RODRIGUEZ', S_Apellido: 'QUINTERO', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1028875367, P_Nombre: 'NICOLAS', S_Nombre: null, T_Nombre: null, P_Apellido: 'ROJAS', S_Apellido: 'ALONSO', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 3},
          { ID_Estudiante: 1054288613, P_Nombre: 'ERIK', S_Nombre: 'JUAN', T_Nombre: 'PABLO', P_Apellido: 'SAAVEDRA', S_Apellido: 'BENAVIDES', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 2},
          { ID_Estudiante: 1030649530, P_Nombre: 'LINA', S_Nombre: 'VALENTINA', T_Nombre: null, P_Apellido: 'SABOGAL', S_Apellido: 'REAL', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1022998279, P_Nombre: 'SARA', S_Nombre: 'ISABELA', T_Nombre: null, P_Apellido: 'SANCHEZ', S_Apellido: 'RIVERA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 1},
          { ID_Estudiante: 1013140460, P_Nombre: 'MARIA', S_Nombre: 'ALEJANDRA', T_Nombre: null, P_Apellido: 'SOLANO', S_Apellido: 'PERILLA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1000695329, Registro: 0},

          
            { ID_Estudiante: 1052781098, P_Nombre: 'CARLOS', S_Nombre: 'ANDRES', T_Nombre: null, P_Apellido: 'PEREZ', S_Apellido: 'GOMEZ', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 0 },
            { ID_Estudiante: 1034567890, P_Nombre: 'ANA', S_Nombre: 'MARIA', T_Nombre: null, P_Apellido: 'LOPEZ', S_Apellido: 'MARTINEZ', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 1 },
            { ID_Estudiante: 1012345678, P_Nombre: 'JUAN', S_Nombre: 'CARLOS', T_Nombre: null, P_Apellido: 'HERNANDEZ', S_Apellido: 'RODRIGUEZ', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 2 },
            { ID_Estudiante: 1098765432, P_Nombre: 'LUCIA', S_Nombre: 'ISABEL', T_Nombre: 'VALENTINA', P_Apellido: 'GARCIA', S_Apellido: 'FERNANDEZ', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 3 },
            { ID_Estudiante: 1087654321, P_Nombre: 'MIGUEL', S_Nombre: 'ANGEL', T_Nombre: null, P_Apellido: 'MORALES', S_Apellido: 'RAMIREZ', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 4 },
            { ID_Estudiante: 1076543210, P_Nombre: 'SANDRA', S_Nombre: 'LILIANA', T_Nombre: null, P_Apellido: 'ORTEGA', S_Apellido: 'TORRES', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 0 },
            { ID_Estudiante: 1065432109, P_Nombre: 'DANIEL', S_Nombre: 'ESTEBAN', T_Nombre: null, P_Apellido: 'CASTRO', S_Apellido: 'SUAREZ', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 1 },
            { ID_Estudiante: 1054321098, P_Nombre: 'PAULA', S_Nombre: 'ANDREA', T_Nombre: null, P_Apellido: 'MENDEZ', S_Apellido: 'GIL', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 2 },
            { ID_Estudiante: 1043210987, P_Nombre: 'FELIPE', S_Nombre: 'ALEJANDRO', T_Nombre: null, P_Apellido: 'SERRANO', S_Apellido: 'MOLINA', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 3 },
            { ID_Estudiante: 1032109876, P_Nombre: 'CAMILA', S_Nombre: 'VALENTINA', T_Nombre: null, P_Apellido: 'ESPINOSA', S_Apellido: 'VARGAS', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 4 },
            { ID_Estudiante: 1021098765, P_Nombre: 'ALEJANDRO', S_Nombre: 'DAVID', T_Nombre: null, P_Apellido: 'GUZMAN', S_Apellido: 'SANDOVAL', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 0 },
            { ID_Estudiante: 1010987654, P_Nombre: 'MARIA', S_Nombre: 'JOSE', T_Nombre: null, P_Apellido: 'RUIZ', S_Apellido: 'CARRILLO', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 1 },
            { ID_Estudiante: 1098765431, P_Nombre: 'JORGE', S_Nombre: 'LUIS', T_Nombre: null, P_Apellido: 'PARRA', S_Apellido: 'RIOS', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 2 },
            { ID_Estudiante: 1087654320, P_Nombre: 'CAROLINA', S_Nombre: 'SARA', T_Nombre: null, P_Apellido: 'AGUIRRE', S_Apellido: 'HERRERA', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 3 },
            { ID_Estudiante: 1076543219, P_Nombre: 'ANDRES', S_Nombre: 'FELIPE', T_Nombre: null, P_Apellido: 'MEDINA', S_Apellido: 'REYES', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 4 },
            { ID_Estudiante: 1065432108, P_Nombre: 'MELISSA', S_Nombre: 'PAOLA', T_Nombre: null, P_Apellido: 'CAMPOS', S_Apellido: 'CRUZ', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 0 },
            { ID_Estudiante: 1054321097, P_Nombre: 'DIEGO', S_Nombre: 'ARMANDO', T_Nombre: null, P_Apellido: 'CARRILLO', S_Apellido: 'ROJAS', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 1 },
            { ID_Estudiante: 1043210986, P_Nombre: 'LAURA', S_Nombre: 'CAMILA', T_Nombre: null, P_Apellido: 'GOMEZ', S_Apellido: 'PEREZ', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 2 },
            { ID_Estudiante: 1032109875, P_Nombre: 'JUAN', S_Nombre: 'DAVID', T_Nombre: 'JAVIER', P_Apellido: 'TORO', S_Apellido: 'HERNANDEZ', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 3 },
            { ID_Estudiante: 1021098764, P_Nombre: 'ISABEL', S_Nombre: 'MARIA', T_Nombre: null, P_Apellido: 'LOPEZ', S_Apellido: 'GARCIA', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 4 },
            { ID_Estudiante: 1010987653, P_Nombre: 'FELIX', S_Nombre: 'ALONSO', T_Nombre: null, P_Apellido: 'GUTIERREZ', S_Apellido: 'SANTOS', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 0 },
            { ID_Estudiante: 1098765430, P_Nombre: 'NATALIA', S_Nombre: 'PAULA', T_Nombre: null, P_Apellido: 'RAMOS', S_Apellido: 'NUNEZ', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 1 },
            { ID_Estudiante: 1087654319, P_Nombre: 'PEDRO', S_Nombre: 'MIGUEL', T_Nombre: null, P_Apellido: 'NIÑO', S_Apellido: 'CASTILLO', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 2 },
            { ID_Estudiante: 1076543208, P_Nombre: 'CLAUDIA', S_Nombre: 'ANDREA', T_Nombre: null, P_Apellido: 'SUAREZ', S_Apellido: 'LOPEZ', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 3 },
            { ID_Estudiante: 1065432197, P_Nombre: 'RAFAEL', S_Nombre: 'ALEJANDRO', T_Nombre: null, P_Apellido: 'ORTEGA', S_Apellido: 'GONZALEZ', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 4 },
            { ID_Estudiante: 1054321086, P_Nombre: 'PATRICIA', S_Nombre: 'MARIA', T_Nombre: 'TRINIDAD', P_Apellido: 'GUTIERREZ', S_Apellido: 'RAMIREZ', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 0 },
            { ID_Estudiante: 1043210975, P_Nombre: 'MARIO', S_Nombre: 'ALBERTO', T_Nombre: null, P_Apellido: 'VARGAS', S_Apellido: 'ROJAS', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 1 },
            { ID_Estudiante: 1032109864, P_Nombre: 'LORENA', S_Nombre: 'PAOLA', T_Nombre: null, P_Apellido: 'AGUIRRE', S_Apellido: 'TORRES', Genero: 2, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 2 },
            { ID_Estudiante: 1021098753, P_Nombre: 'FERNANDO', S_Nombre: 'DAVID', T_Nombre: null, P_Apellido: 'MENDEZ', S_Apellido: 'GONZALEZ', Genero: 1, T_Documento: 2, Curso: 21, Administradores: 1022923336, Registro: 3 },
            { ID_Estudiante: 1098765421, P_Nombre: 'JOSE', S_Nombre: 'MANUEL', T_Nombre: null, P_Apellido: 'GOMEZ', S_Apellido: 'MARTINEZ', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1022926852, Registro: 0 },


              { ID_Estudiante: 1087654310, P_Nombre: 'ANA', S_Nombre: 'SOFIA', T_Nombre: null, P_Apellido: 'LOPEZ', S_Apellido: 'RODRIGUEZ', Genero: 2, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 1 },
              { ID_Estudiante: 1076543209, P_Nombre: 'MARTIN', S_Nombre: 'DAVID', T_Nombre: null, P_Apellido: 'HERNANDEZ', S_Apellido: 'FERNANDEZ', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 2 },
              { ID_Estudiante: 1065432198, P_Nombre: 'LUCIA', S_Nombre: 'ISABEL', T_Nombre: null, P_Apellido: 'GARCIA', S_Apellido: 'RAMIREZ', Genero: 2, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 3 },
              { ID_Estudiante: 1054321087, P_Nombre: 'JAVIER', S_Nombre: 'MIGUEL', T_Nombre: null, P_Apellido: 'MORALES', S_Apellido: 'TORRES', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 4 },
              { ID_Estudiante: 1043210976, P_Nombre: 'SANDRA', S_Nombre: 'LILIANA', T_Nombre: null, P_Apellido: 'ORTEGA', S_Apellido: 'SUAREZ', Genero: 2, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 0 },
              { ID_Estudiante: 1032109865, P_Nombre: 'DANIEL', S_Nombre: 'ESTEBAN', T_Nombre: null, P_Apellido: 'RAMIREZ', S_Apellido: 'GOMEZ', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 1 },
              { ID_Estudiante: 1021098754, P_Nombre: 'PATRICIA', S_Nombre: 'MARIA', T_Nombre: null, P_Apellido: 'SALAZAR', S_Apellido: 'PEREZ', Genero: 2, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 2 },
              { ID_Estudiante: 1010987643, P_Nombre: 'ANDRES', S_Nombre: 'FELIPE', T_Nombre: null, P_Apellido: 'CASTRO', S_Apellido: 'MENDOZA', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 3 },
              { ID_Estudiante: 1098765410, P_Nombre: 'PAULA', S_Nombre: 'ANDREA', T_Nombre: null, P_Apellido: 'RUIZ', S_Apellido: 'GUTIERREZ', Genero: 2, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 4 },
              { ID_Estudiante: 1087654309, P_Nombre: 'CARLOS', S_Nombre: 'ALBERTO', T_Nombre: null, P_Apellido: 'MORA', S_Apellido: 'LOPEZ', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 0 },
              { ID_Estudiante: 1010102020, P_Nombre: 'JUAN', S_Nombre: 'CARLOS', T_Nombre: 'MANUEL', P_Apellido: 'PEREZ', S_Apellido: 'SANCHEZ', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 1 },
              { ID_Estudiante: 1020203030, P_Nombre: 'MARIA', S_Nombre: 'JOSE', T_Nombre: 'LUISA', P_Apellido: 'RODRIGUEZ', S_Apellido: 'GARCIA', Genero: 2, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 2 },
              { ID_Estudiante: 1030304040, P_Nombre: 'LUIS', S_Nombre: 'FERNANDO', T_Nombre: 'ANDRES', P_Apellido: 'GOMEZ', S_Apellido: 'MORALES', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 3 },
              { ID_Estudiante: 1040405050, P_Nombre: 'LAURA', S_Nombre: 'ISABEL', T_Nombre: 'PATRICIA', P_Apellido: 'RAMIREZ', S_Apellido: 'LOPEZ', Genero: 2, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 4 },
              { ID_Estudiante: 1050506060, P_Nombre: 'JAVIER', S_Nombre: 'ALEJANDRO', T_Nombre: 'GABRIEL', P_Apellido: 'TORRES', S_Apellido: 'HERNANDEZ', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 0 },
              { ID_Estudiante: 1060607070, P_Nombre: 'SOFIA', S_Nombre: 'MARTINA', T_Nombre: null, P_Apellido: 'ORTEGA', S_Apellido: 'PEREZ', Genero: 2, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 1 },
              { ID_Estudiante: 1070708080, P_Nombre: 'MIGUEL', S_Nombre: 'ANGEL', T_Nombre: null, P_Apellido: 'SUAREZ', S_Apellido: 'GARCIA', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 2 },
              { ID_Estudiante: 1080809090, P_Nombre: 'FABIOLA', S_Nombre: 'ANDREA', T_Nombre: null, P_Apellido: 'GUTIERREZ', S_Apellido: 'TORRES', Genero: 2, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 3 },
              { ID_Estudiante: 1090901010, P_Nombre: 'DANIEL', S_Nombre: 'ANDRES', T_Nombre: null, P_Apellido: 'FERNANDEZ', S_Apellido: 'RUIZ', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 4 },
              { ID_Estudiante: 1010101111, P_Nombre: 'LUCAS', S_Nombre: 'ALEJANDRO', T_Nombre: 'DAVID', P_Apellido: 'MENDOZA', S_Apellido: 'RAMIREZ', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 0 },
              { ID_Estudiante: 1020202222, P_Nombre: 'VALERIA', S_Nombre: 'PAOLA', T_Nombre: null, P_Apellido: 'GARCIA', S_Apellido: 'MORALES', Genero: 2, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 1 },
              { ID_Estudiante: 1030303333, P_Nombre: 'MATEO', S_Nombre: 'NICOLAS', T_Nombre: 'SEBASTIAN', P_Apellido: 'SALAZAR', S_Apellido: 'HERNANDEZ', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 2 },
              { ID_Estudiante: 1040404444, P_Nombre: 'ADRIANA', S_Nombre: 'LILIANA', T_Nombre: null, P_Apellido: 'PEREZ', S_Apellido: 'GUTIERREZ', Genero: 2, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 3 },
              { ID_Estudiante: 1050505555, P_Nombre: 'JORGE', S_Nombre: 'ENRIQUE', T_Nombre: 'MANUEL', P_Apellido: 'RODRIGUEZ', S_Apellido: 'LOPEZ', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 4 },
              { ID_Estudiante: 1060606666, P_Nombre: 'PAULA', S_Nombre: 'ANDREA', T_Nombre: null, P_Apellido: 'RAMIREZ', S_Apellido: 'GOMEZ', Genero: 2, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 0 },
              { ID_Estudiante: 1070707777, P_Nombre: 'FERNANDO', S_Nombre: 'LUIS', T_Nombre: null, P_Apellido: 'TORRES', S_Apellido: 'SUAREZ', Genero: 1, T_Documento: 2, Curso: 20, Administradores: 1014657845, Registro: 1 },
          
          


        ]);
      });
  };
