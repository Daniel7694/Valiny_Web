import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { margin: 10, padding: 10, flexGrow: 1 },
  header: { fontSize: 24, marginBottom: 10 },
  subheader: { fontSize: 18, marginBottom: 5 },
  table: { display: "table", width: "auto", borderStyle: "solid", borderWidth: 1, borderRightWidth: 0, borderBottomWidth: 0 },
  tableRow: { margin: "auto", flexDirection: "row" },
  tableColHeader: { width: "50%", borderStyle: "solid", borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0 },
  tableCol: { width: "50%", borderStyle: "solid", borderWidth: 1, borderLeftWidth: 0, borderTopWidth: 0 },
  tableCellHeader: { margin: "auto", marginTop: 5, fontSize: 12, fontWeight: "bold" },
  tableCell: { margin: "auto", marginTop: 5, fontSize: 10 }
});

const ReportesPdf = ({ students }) => {
  const fecha = new Date();
  const fechaFormateada = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>Reportes Diarios</Text>
          <Text style={styles.subheader}>Fecha: {fechaFormateada}</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Propiedad</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCellHeader}>Valor</Text>
              </View>
            </View>

            {students.map((student, index) => (
              <React.Fragment key={index}>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Asistencia</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{student.Asistencia}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Porcentaje Asistencia</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{student.Porcentaje_Asistencia}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Falla</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{student.Falla}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Porcentaje Falla</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{student.Porcentaje_Falla}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Retardo</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{student.Retardo}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Porcentaje Retardo</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{student.Porcentaje_Retardo}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Evasion</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{student.Evasion}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Porcentaje Evasion</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{student.Porcentaje_Evasion}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Falla Just</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{student.Falla_Justificada}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>Porcentaje Falla Justificada</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text style={styles.tableCell}>{student.Porcentaje_Falla_Justificada}</Text>
                  </View>
                </View>
              </React.Fragment>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ReportesPdf;
