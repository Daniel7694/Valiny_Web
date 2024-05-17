import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { flexDirection: 'row', backgroundColor: '#E4E4E4' },
  section: { margin: 10, padding: 10, flexGrow: 1 }
});

const ReportesPdf = () =>{
    const fecha = new Date();
    const fechaFormateada = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()}`;
return (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
      <Text>Fecha: {fechaFormateada}</Text>
        <Text>Aqui va a estar los Reportes especificos</Text>
      </View>
    </Page>
  </Document>
);
}
export default ReportesPdf;
