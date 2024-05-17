import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { margin: 10, padding: 10, flexGrow: 1 },
  header: { fontSize: 24, marginBottom: 10 },
  subheader: { fontSize: 18, marginBottom: 5 },
  text: { fontSize: 14, marginBottom: 10 },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#000', borderBottomStyle: 'solid', alignItems: 'stretch' },
  cell: { flexGrow: 1 }
});

const CursosPdf = ({ students }) => {
  const fecha = new Date();
  const fechaFormateada = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Lista de Cursos</Text>
          <Text style={styles.subheader}>Fecha: {fechaFormateada}</Text>
          <View style={styles.row}>
            <Text style={styles.cell}>Número</Text>
            <Text style={styles.cell}>Documento</Text>
            <Text style={styles.cell}>Nombres</Text>
            <Text style={styles.cell}>Registro de Asistencia</Text>
          </View>
          {students.map((student, index) => (
            <View key={student.Documento} style={styles.row}>
              <Text style={[styles.cell, styles.text]}>{index + 1}</Text>
              <Text style={[styles.cell, styles.text]}>{student.Documento}</Text>
              <Text style={[styles.cell, styles.text]}>{student['Nombre completo']}</Text>
              <Text style={[styles.cell, styles.text]}>{student.Registro}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default CursosPdf;
