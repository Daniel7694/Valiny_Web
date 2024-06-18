import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { margin: 10, padding: 10, flexGrow: 1 },
  header: { fontSize: 24, marginBottom: 10 },
  subheader: { fontSize: 18, marginBottom: 5 },
  table: { display: "table", width: "auto", borderStyle: "solid", borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0 },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableColHeader: { width: "25%", borderStyle: "solid", borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0 },
  tableCol: { width: "25%", borderStyle: "solid", borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0 },
  tableCellHeader: { margin: "auto", marginTop: 5, fontSize: 12, fontWeight: "bold" },
  tableCell: { margin: "auto", marginTop: 5, fontSize: 10 }
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
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Número</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Documento</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Nombres</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Registro de Asistencia</Text>
              </View>
            </View>

            {students.map((student, index) => (
              <View style={styles.tableRow} key={student.Documento}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{index + 1}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{student.Documento}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{student.Nombres}</Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{student.Registro}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

CursosPdf.propTypes = {
  students: PropTypes.array.isRequired,
};
export default CursosPdf;
