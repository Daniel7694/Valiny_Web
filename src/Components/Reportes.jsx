import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import { FaBars } from 'react-icons/fa';
import { FaFileExcel } from 'react-icons/fa';
import { FaFilePdf } from 'react-icons/fa';
import Menu from './menú';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ReportesPdf from './ReportesPdf';
import MyPdfViewer from './MyPdfViewer';
import { useNavigate } from 'react-router-dom';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { useContext } from 'react';
import { UserContext } from '../App';

const Reportes = () => {
  const [students, setStudents] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPdf, setShowPdf] = useState(false);
  const barSvgRef = useRef();
  const donutSvgRef = useRef();
  const navigate = useNavigate();

  const fecha = new Date();
  const fechaFormateada = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()}`;

  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      setToken(storedToken);
      console.log(token);
    }
  }, [token]);

  const handleEspecificos = () => {
    navigate('/ReporteEspecifico');
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.39:3000/api/porcentajes/porcentaje_registros');
        setStudents(response.data.data);
        renderBarChart(response.data.data);
        renderDonutChart(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleInstructions = () => {
    setShowPdf(true);
    setIsMenuOpen(false);
  };

  const exportarAExcel = (datosApi, nombreArchivo) => {
    const tipoArchivo = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const extensionArchivo = '.xlsx';
  
    const hoja = XLSX.utils.json_to_sheet(datosApi);
    const libro = { Sheets: { 'data': hoja }, SheetNames: ['data'] };
    const bufferExcel = XLSX.write(libro, { bookType: 'xlsx', type: 'array' });
    const datos = new Blob([bufferExcel], { type: tipoArchivo });
    FileSaver.saveAs(datos, nombreArchivo + extensionArchivo);
  };
  const renderBarChart = (data) => {
    const barData = [
      { name: 'Asistencia', value: data[0].Asistencia },
      { name: 'Falla', value: data[0].Falla },
      { name: 'Retardo', value: data[0].Retardo },
      { name: 'Evasion', value: data[0].Evasion },
      { name: 'Falla Just.', value: data[0].Falla_Justificada },
    ];

    const barWidth = 400;
    const barHeight = 300;
    const barMargin = { top: 20, right: 20, bottom: 30, left: 40 };

    const x = d3.scaleBand()
      .domain(barData.map(d => d.name))
      .range([barMargin.left, barWidth - barMargin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(barData, d => d.value)]).nice()
      .range([barHeight - barMargin.bottom, barMargin.top]);

    const barSvg = d3.select(barSvgRef.current)
      .attr('width', barWidth)
      .attr('height', barHeight)
      .attr('viewBox', `0 0 ${barWidth} ${barHeight}`)
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;');

    barSvg.selectAll('*').remove();

    barSvg.append('g')
      .selectAll('rect')
      .data(barData)
      .join('rect')
      .attr('x', d => x(d.name))
      .attr('y', d => y(d.value))
      .attr('height', d => y(0) - y(d.value))
      .attr('width', x.bandwidth())
      .attr('fill', '#3182ce'); // Color de las barras

    barSvg.append('g')
      .attr('transform', `translate(0,${barHeight - barMargin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0));

    barSvg.append('g')
      .attr('transform', `translate(${barMargin.left},0)`)
      .call(d3.axisLeft(y));
  };

  const renderDonutChart = (data) => {
    const donutData = [
      { name: 'Asistencia', value: data[0].Porcentaje_Asistencia },
      { name: 'Falla', value: data[0].Porcentaje_Falla },
      { name: 'Retardo', value: data[0].Porcentaje_Retardo },
      { name: 'Evasion', value: data[0].Porcentaje_Evasion },
      { name: 'Falla Justificada', value: data[0].Porcentaje_Falla_Justificada },
    ];

    const donutWidth = 300;
    const donutHeight = 300;
    const radius = Math.min(donutWidth, donutHeight) / 2;

    const color = d3.scaleOrdinal()
      .domain(donutData.map(d => d.name))
      .range(['#3182ce', '#90cdf4', '#63b3ed', '#4299e1', '#2b6cb0']); // Colores de las secciones de la dona

    const pie = d3.pie()
      .sort(null)
      .value(d => d.value);

    const arc = d3.arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    const outerArc = d3.arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    const donutSvg = d3.select(donutSvgRef.current)
      .attr('width', donutWidth)
      .attr('height', donutHeight)
      .append('g')
      .attr('transform', `translate(${donutWidth / 2},${donutHeight / 2})`);

    donutSvg.selectAll('*').remove();

    const slices = donutSvg.selectAll('path.slice')
      .data(pie(donutData))
      .enter().append('path')
      .attr('class', 'slice')
      .attr('d', arc)
      .attr('fill', d => color(d.data.name));

    donutSvg.selectAll('text')
      .data(pie(donutData))
      .enter().append('text')
      .attr('dy', '.35em')
      .attr('transform', function(d) {
        const pos = outerArc.centroid(d);
        pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      })
      .attr('text-anchor', function(d) {
        return midAngle(d) < Math.PI ? 'start' : 'end';
      })
      .text(d => d.data.name);

    function midAngle(d) {
      return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }
  };

  if (showPdf) {
    return <MyPdfViewer file="/ManualDeInstruccionesValiny.pdf" />;
  }

  return (
    <div className="relative container mx-auto px-4 sm:px-8">
      {isMenuOpen && <Menu setToken={setToken} onClose={closeMenu} onInstructionsClick={handleInstructions} />}
      <div className="py-8">
        <div className='flex flex-row'>
          <button onClick={handleMenu}>
            <FaBars size={40} />
          </button>
          <h2 className='text-5xl text-center mb-5 px-96'>Reportes Diarios</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Propiedad</th>
                  <th className="px-5 py-3 border-b-2 border-blue-200 bg-blue-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Valor</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <React.Fragment key={index}>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Asistencia</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Asistencia}</td>
                    </tr>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Falla</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Falla}</td>
                    </tr>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Retardo</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Retardo}</td>
                    </tr>
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Evasion</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Evasion}</td>
                    </tr>
  
                    <tr className={index % 2 === 0 ? 'bg-white' : 'bg-blue-200'}>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">Falla Just</td>
                      <td className="px-5 py-5 border-b border-gray-200 text-sm">{student.Falla_Justificada}</td>
                    </tr>

                  </React.Fragment>
                ))}
              </tbody>
            </table>
            
          </div>
          <button
            className="bg-blue-200 hover:bg-blue-300 text-gray-600 font-semibold py-2 px-4 rounded"
            onClick={handleEspecificos}
          >
            Reporte Específico
          </button>
   <br/>

        </div>
      </div>
      <div className="flex justify-around mt-5">
        <svg ref={barSvgRef}></svg>
        <svg ref={donutSvgRef}></svg>
      </div>
      <h2>Descargar en:</h2>
      <div className="flex justify-center space-x-10 mt-10">
      <div className="flex flex-col items-center">
    <PDFDownloadLink document={<ReportesPdf students={students} />} fileName={`Reporte_de_lista_de_cursos-${fechaFormateada}.pdf`}>
      {({ blob, url, loading, error }) =>
        loading ? 'Cargando documento...' : <FaFilePdf size={50} color="red"/>
      }
    </PDFDownloadLink>
    <span>PDF</span>
  </div>
  <div className="flex flex-col items-center">
    <button onClick={() => exportarAExcel(students, `Reporte_de_cursos_${fechaFormateada}`)}>
      <FaFileExcel size={50} color="green"/>
    </button>
    <span>Excel</span>
  </div>
</div>
</div>
  );
};

export default Reportes;
