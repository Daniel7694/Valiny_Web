exports.seed = function(knex) {
    return knex('Estudiantes').del()
      .then(function () {
        return knex('Estudiantes').insert([
          { ID_Estudiante: 1029290082, P_Nombre: 'MARTIN', S_Nombre: 'DAVID', T_Nombre: null, P_Apellido: 'AVILA', S_Apellido: 'DURAN', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1023005795, P_Nombre: 'JISEY', S_Nombre: 'GABRIELA', T_Nombre: null, P_Apellido: 'BETANCOURT', S_Apellido: 'GAVIRIA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1029289410, P_Nombre: 'ERICK', S_Nombre: 'SANTIAGO', T_Nombre: null, P_Apellido: 'CARDENAS', S_Apellido: 'VELASQUEZ', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1140924815, P_Nombre: 'SARA', S_Nombre: 'SOFIA', T_Nombre: null, P_Apellido: 'CASTILLO', S_Apellido: 'ORDOÑEZ', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 2},
          { ID_Estudiante: 1029289068, P_Nombre: 'MARIA', S_Nombre: 'ISABEL', T_Nombre: null, P_Apellido: 'CONTRERAS', S_Apellido: 'HERRERA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1111201134, P_Nombre: 'HEIDI', S_Nombre: 'YULIANA', T_Nombre: null, P_Apellido: 'CRUZ', S_Apellido: 'MUÑOZ', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1018471323, P_Nombre: 'DAVID', S_Nombre: 'SANTIAGO', T_Nombre: null, P_Apellido: 'DONCEL', S_Apellido: 'PEREZ', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1025549947, P_Nombre: 'MAICOL', S_Nombre: 'JHOVANY', T_Nombre: null, P_Apellido: 'DUARTE', S_Apellido: 'VEGA', Genero: 1, T_Documento: 4, Curso: 22, Administradores: 1022926852, Registro: 0},
          { ID_Estudiante: 1140925257, P_Nombre: 'WILSON', S_Nombre: 'EDUARDO', T_Nombre: null, P_Apellido: 'FLECHAS', S_Apellido: 'GONZALEZ', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1029287557, P_Nombre: 'LUCIANA', S_Nombre: 'VALENTINA', T_Nombre: null, P_Apellido: 'GOMEZ', S_Apellido: 'YARA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1023000061, P_Nombre: 'DANA', S_Nombre: 'VALERIA', T_Nombre: null, P_Apellido: 'GONZALEZ', S_Apellido: 'AGRESOTT', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1022999355, P_Nombre: 'SARA', S_Nombre: 'SOFIA', T_Nombre: null, P_Apellido: 'GONZALEZ', S_Apellido: 'BERNAL', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 3},
          { ID_Estudiante: 1023001785, P_Nombre: 'SAMUEL', S_Nombre: 'ALEJANDRO', T_Nombre: null, P_Apellido: 'GUERRERO', S_Apellido: 'GUZMAN', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 4},
          { ID_Estudiante: 1023000512, P_Nombre: 'ANGEL', S_Nombre: 'SEBASTIAN', T_Nombre: null, P_Apellido: 'GUERRERO', S_Apellido: 'RAMOS', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1022976607, P_Nombre: 'JOHN', S_Nombre: 'FREDY', T_Nombre: null, P_Apellido: 'HERNANDEZ', S_Apellido: 'ARGUMEDO', Genero: 1, T_Documento: 4, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1028789872, P_Nombre: 'JUAN', S_Nombre: 'SEBASTIAN', T_Nombre: null, P_Apellido: 'HERNANDEZ', S_Apellido: 'JOJOA', Genero: 1, T_Documento: 4, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1022997745, P_Nombre: 'DILAN', S_Nombre: 'ANDREY', T_Nombre: null, P_Apellido: 'MACETO', S_Apellido: 'RODRIGUEZ', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1032186562, P_Nombre: 'LUIGUI', S_Nombre: 'MATIAS', T_Nombre: null, P_Apellido: 'MACHADO', S_Apellido: 'ROVIRA', Genero: 1, T_Documento: 4, Curso: 22, Administradores: 1022926852, Registro: 0},
          { ID_Estudiante: 1022998766, P_Nombre: 'FABIAN', S_Nombre: 'STID', T_Nombre: null, P_Apellido: 'MEJIA', S_Apellido: 'MADRIGAL', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 0},
          { ID_Estudiante: 1025149988, P_Nombre: 'SHARITH', S_Nombre: null, T_Nombre: null, P_Apellido: 'MENDOZA', S_Apellido: 'SARMIENTO', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1023006773, P_Nombre: 'LAURA', S_Nombre: 'MARIANA', T_Nombre: null, P_Apellido: 'NIÑO', S_Apellido: 'CAMARGO', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 2},
          { ID_Estudiante: 1023002065, P_Nombre: 'MARY', S_Nombre: 'FERNANDA', T_Nombre: null, P_Apellido: 'NIVIA', S_Apellido: 'ALVAREZ', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1029288196, P_Nombre: 'WILMER', S_Nombre: 'SANTIAGO', T_Nombre: null, P_Apellido: 'NOVOA', S_Apellido: 'HERRERA', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1019101292, P_Nombre: 'SANTIAGO', S_Nombre: null, T_Nombre: null, P_Apellido: 'OSPINO', S_Apellido: 'ALTAMIRANDA', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 0},
          { ID_Estudiante: 1031151048, P_Nombre: 'JHADE', S_Nombre: 'VALENTINA', T_Nombre: null, P_Apellido: 'PATIÑO', S_Apellido: 'SILVA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1028843462, P_Nombre: 'SARA', S_Nombre: 'VALENTINA', T_Nombre: null, P_Apellido: 'PEDRAZA', S_Apellido: 'DAZA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 0},
          { ID_Estudiante: 1140925402, P_Nombre: 'ZARAY', S_Nombre: 'JULIANA', T_Nombre: null, P_Apellido: 'REYES', S_Apellido: 'ACOSTA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1022980149, P_Nombre: 'MERCY', S_Nombre: 'TATIANA', T_Nombre: null, P_Apellido: 'RODRIGUEZ', S_Apellido: 'GONZALEZ', Genero: 2, T_Documento: 4, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1022998575, P_Nombre: 'EMILY', S_Nombre: 'SHARICK', T_Nombre: null, P_Apellido: 'RODRIGUEZ', S_Apellido: 'QUINTERO', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1028875367, P_Nombre: 'NICOLAS', S_Nombre: null, T_Nombre: null, P_Apellido: 'ROJAS', S_Apellido: 'ALONSO', Genero: 1, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 3},
          { ID_Estudiante: 1054288613, P_Nombre: 'ERIK', S_Nombre: 'JUAN', T_Nombre: 'PABLO', P_Apellido: 'SAAVEDRA', S_Apellido: 'BENAVIDES', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 2},
          { ID_Estudiante: 1030649530, P_Nombre: 'LINA', S_Nombre: 'VALENTINA', T_Nombre: null, P_Apellido: 'SABOGAL', S_Apellido: 'REAL', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1022998279, P_Nombre: 'SARA', S_Nombre: 'ISABELA', T_Nombre: null, P_Apellido: 'SANCHEZ', S_Apellido: 'RIVERA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 1},
          { ID_Estudiante: 1013140460, P_Nombre: 'MARIA', S_Nombre: 'ALEJANDRA', T_Nombre: null, P_Apellido: 'SOLANO', S_Apellido: 'PERILLA', Genero: 2, T_Documento: 2, Curso: 22, Administradores: 1022926852, Registro: 0}


        ]);
      });
  };
